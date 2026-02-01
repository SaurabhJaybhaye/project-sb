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
   * Icon to display (shorthand for startIcon/endIcon)
   */
  icon?: ReactNode;
  /**
   * Position of the icon relative to the text
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
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
  icon,
  iconPosition = 'left',
  customColor,
  className,
  disabled,
  style,
  ...props
}) => {
  const hasChildren = React.Children.count(children) > 0;
  const isIconOnly = !hasChildren && !!(icon || startIcon || endIcon);
  
  // Determine final icons based on position props
  const finalStartIcon = startIcon || (icon && iconPosition === 'left' ? icon : null);
  const finalEndIcon = endIcon || (icon && iconPosition === 'right' ? icon : null);

  const buttonClass = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--loading']]: isLoading,
      [styles['button--icon-only']]: isIconOnly,
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
      
      {/* Show start icon if not loading, AND if (text exists OR (no text but explicitly Icon Only mode shouldn't matter as flex centers it)) */}
      {/* logic: if icon only, we just show the icon. If text exists, we show icon at start/end */}
      
      {!isLoading && !isIconOnly && finalStartIcon && <span className={styles.icon}>{finalStartIcon}</span>}
      
      {hasChildren && <span>{children}</span>}
      
      {!isLoading && !isIconOnly && finalEndIcon && <span className={styles.icon}>{finalEndIcon}</span>}
      
      {/* Special case: Icon Only - Center it */}
      {!isLoading && isIconOnly && (icon || startIcon || endIcon)}
    </button>
  );
};
