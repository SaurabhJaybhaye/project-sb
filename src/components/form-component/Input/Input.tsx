import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import type { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      error = false,
      fullWidth = false,
      startIcon,
      endIcon,
      size = 'md',
      variant = 'outlined',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const wrapperClass = classNames(
      styles['sb-input-wrapper'],
      {
        [styles['sb-input-wrapper--full-width']]: fullWidth,
      },
      className
    );

    const containerClass = classNames(styles['sb-input-wrapper__container'], {
      [styles[`sb-input-wrapper__container--${variant}`]]: variant,
      [styles[`sb-input-wrapper__container--${size}`]]: size,
      [styles['sb-input-wrapper__container--error']]: error,
      [styles['sb-input-wrapper__container--disabled']]: disabled,
    });

    return (
      <div className={wrapperClass}>
        {label && (
          <label
            htmlFor={inputId}
            className={classNames(styles['sb-input-wrapper__label'], {
              [styles['sb-input-wrapper__label--error']]: error,
            })}
          >
            {label}
          </label>
        )}
        <div className={containerClass}>
          {startIcon && (
            <span
              className={classNames(
                styles['sb-input-wrapper__icon'],
                styles['sb-input-wrapper__icon--start']
              )}
            >
              {startIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={styles['sb-input-field']}
            disabled={disabled}
            aria-invalid={error}
            {...props}
          />
          {endIcon && (
            <span
              className={classNames(
                styles['sb-input-wrapper__icon'],
                styles['sb-input-wrapper__icon--end']
              )}
            >
              {endIcon}
            </span>
          )}
        </div>
        {helperText && (
          <span
            className={classNames(styles['sb-input-wrapper__helper-text'], {
              [styles['sb-input-wrapper__helper-text--error']]: error,
            })}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
