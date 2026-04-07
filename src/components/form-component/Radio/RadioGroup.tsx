
import React, { createContext, useContext, forwardRef } from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './Radio.module.scss';
import type { RadioGroupProps } from './Radio.types';

export const RadioContext = createContext<{
  name?: string;
  value?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  error?: boolean;
} | undefined>(undefined);

export const useRadioGroup = () => {
    return useContext(RadioContext);
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
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
      ...props
    },
    ref
  ) => {
    const [bgValue, setBgValue] = React.useState(defaultValue || value);

    const handleRadioChange = React.useCallback((event: ChangeEvent<HTMLInputElement>, newValue: string) => {
        setBgValue(newValue);
        if (onChange) {
            onChange(event, newValue);
        }
    }, [onChange]);

    const contextValue = React.useMemo(() => ({
      name,
      value: value !== undefined ? value : bgValue,
      onChange: handleRadioChange,
      error
    }), [name, value, bgValue, handleRadioChange, error]);

    const wrapperClass = classNames(
      styles['sb-radio-group'],
      className
    );

    const radiosClass = classNames(
      styles['sb-radio-group__radios'],
      {
        [styles['sb-radio-group__radios--row']]: row,
        [styles['sb-radio-group__radios--error']]: error,
      }
    );

    return (
      <RadioContext.Provider value={contextValue}>
        <div 
            className={wrapperClass} 
            role="radiogroup" 
            aria-labelledby={label ? `${name}-label` : undefined}
            ref={ref}
            {...props}
        >
            {label && (
                <span 
                    id={label ? `${name}-label` : undefined}
                    className={classNames(styles['sb-radio-group__label'], {
                        [styles['sb-radio-group__label--error']]: error
                    })}
                >
                    {label}
                </span>
            )}
            <div className={radiosClass}>
                {children}
            </div>
            {helperText && (
                <span className={classNames(styles['sb-radio-group__helper-text'], {
                     [styles['sb-radio-group__helper-text--error']]: error
                })}>
                    {helperText}
                </span>
            )}
        </div>
      </RadioContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
