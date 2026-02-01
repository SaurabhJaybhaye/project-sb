import React, { type ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * If true, shows a loading spinner and disables the button
   * @default false
   */
  isLoading?: boolean;
  /**
   * Icon to display before the label
   */
  startIcon?: ReactNode;
  /**
   * Icon to display after the label
   */
  endIcon?: ReactNode;
  /**
   * Custom background color (overrides variant styles)
   */
  customColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  startIcon,
  endIcon,
  customColor,
  className,
  disabled,
  style,
  ...props
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--loading']]: isLoading,
    },
    className
  );

  const buttonStyle = customColor
    ? { ...style, backgroundColor: customColor, borderColor: customColor, color: '#fff' }
    : style;

  return (
    <button
      className={buttonClass}
      disabled={disabled || isLoading}
      style={buttonStyle}
      {...props}
    >
      {isLoading && <span className={styles.spinner} aria-hidden="true" />}
      {!isLoading && startIcon && <span className={styles.icon}>{startIcon}</span>}
      <span>{children}</span>
      {!isLoading && endIcon && <span className={styles.icon}>{endIcon}</span>}
    </button>
  );
};
