import { forwardRef, useContext, useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './Checkbox.types';
import { CheckboxContext } from './CheckboxGroup';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      value,
      checked,
      indeterminate = false,
      onChange,
      name,
      disabled,
      size = 'md',
      color = 'primary',
      error = false,
      id,
      ...props
    },
    ref
  ) => {
    const context = useContext(CheckboxContext);
    const internalRef = useRef<HTMLInputElement | null>(null);
    
    // Merge refs
    const setRefs = (element: HTMLInputElement | null) => {
      internalRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const checkboxName = context?.name || name;
    
    // Determine if checked
    let isChecked = checked;
    if (context && value !== undefined) {
        isChecked = context.value?.includes(String(value));
    }
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (context?.onChange && value !== undefined) {
            context.onChange(event, String(value));
        }
        
        if (onChange) {
            onChange(event, event.target.checked);
        }
    };
    
    // Determine disabled state
    const isDisabled = disabled || context?.disabled;

    // Determine error state
    const isError = error || context?.error;

    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const wrapperClass = classNames(
      styles['sb-checkbox'],
      {
        [styles[`sb-checkbox--${size}`]]: size,
        [styles[`sb-checkbox--${color}`]]: color,
        [styles['sb-checkbox--disabled']]: isDisabled,
        [styles['sb-checkbox--error']]: isError,
      },
      className
    );

    return (
      <label htmlFor={inputId} className={wrapperClass}>
        <input
          ref={setRefs}
          id={inputId}
          type="checkbox"
          name={checkboxName}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          className={styles['sb-checkbox__input']}
          {...props}
        />
        <span className={styles['sb-checkbox__control']}>
          {indeterminate ? <IndeterminateIcon /> : <CheckIcon />}
        </span>
        {label && <span className={styles['sb-checkbox__label']}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
