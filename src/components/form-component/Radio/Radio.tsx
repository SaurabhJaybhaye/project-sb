
import { forwardRef, useContext } from 'react';
import type { ChangeEvent } from 'react';
import classNames from 'classnames';
import styles from './Radio.module.scss';
import type { RadioProps } from './Radio.types';
import { RadioContext } from './RadioGroup';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      value,
      checked,
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
    const context = useContext(RadioContext);
    
    const radioName = context?.name || name;
    
    // Determine if checked
    let isChecked = checked;
    if (context) {
        isChecked = String(context.value) === String(value);
    }
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (context?.onChange) {
            context.onChange(event, String(value));
        }
        
        if (onChange) {
            onChange(event, event.target.checked);
        }
    };
    
    // Determine disabled state
    const isDisabled = disabled; // Could also inherit from group disabled if added later

    // Determine error state
    const isError = error || context?.error;

    const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    const wrapperClass = classNames(
      styles['sb-radio'],
      {
        [styles[`sb-radio--${size}`]]: size,
        [styles[`sb-radio--${color}`]]: color,
        [styles['sb-radio--disabled']]: isDisabled,
        [styles['sb-radio--error']]: isError,
      },
      className
    );

    return (
      <label htmlFor={inputId} className={wrapperClass}>
        <input
          ref={ref}
          id={inputId}
          type="radio"
          name={radioName}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          className={styles['sb-radio__input']}
          {...props}
        />
        <span className={styles['sb-radio__control']} />
        {label && <span className={styles['sb-radio__label']}>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
