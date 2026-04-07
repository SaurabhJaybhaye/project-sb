import React, { createContext, useContext, forwardRef } from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';
import type { CheckboxGroupProps } from './Checkbox.types';

export const CheckboxContext = createContext<{
  name?: string;
  value?: string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  error?: boolean;
  disabled?: boolean;
} | undefined>(undefined);

export const useCheckboxGroup = () => {
    return useContext(CheckboxContext);
};

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      children,
      className,
      value,
      defaultValue,
      onChange,
      name,
      label,
      helperText,
      row = false,
      error = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const defaultValuesString = (defaultValue || []).map(String);
    const [bgValue, setBgValue] = React.useState<string[]>(defaultValuesString);

    const controlledValue = value !== undefined ? value.map(String) : bgValue;

    const handleCheckboxChange = React.useCallback((event: ChangeEvent<HTMLInputElement>, newValue: string) => {
        const isChecked = event.target.checked;
        
        let newValues: string[];
        if (isChecked) {
            newValues = [...controlledValue, newValue];
        } else {
            newValues = controlledValue.filter(v => v !== newValue);
        }

        if (value === undefined) {
             setBgValue(newValues);
        }

        if (onChange) {
            onChange(newValues);
        }
    }, [controlledValue, onChange, value]);

    const contextValue = React.useMemo(() => ({
      name,
      value: controlledValue,
      onChange: handleCheckboxChange,
      error,
      disabled,
    }), [name, controlledValue, handleCheckboxChange, error, disabled]);

    const wrapperClass = classNames(
      styles['sb-checkbox-group'],
      className
    );

    const checkboxesClass = classNames(
      styles['sb-checkbox-group__checkboxes'],
      {
        [styles['sb-checkbox-group__checkboxes--row']]: row,
        [styles['sb-checkbox-group__checkboxes--error']]: error,
      }
    );

    return (
      <CheckboxContext.Provider value={contextValue}>
        <div 
            className={wrapperClass} 
            role="group" 
            aria-labelledby={label ? `${name}-label` : undefined}
            ref={ref}
            {...props}
        >
            {label && (
                <span 
                    id={label ? `${name}-label` : undefined}
                    className={classNames(styles['sb-checkbox-group__label'], {
                        [styles['sb-checkbox-group__label--error']]: error
                    })}
                >
                    {label}
                </span>
            )}
            <div className={checkboxesClass}>
                {children}
            </div>
            {helperText && (
                <span className={classNames(styles['sb-checkbox-group__helper-text'], {
                     [styles['sb-checkbox-group__helper-text--error']]: error
                })}>
                    {helperText}
                </span>
            )}
        </div>
      </CheckboxContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';
