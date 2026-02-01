import React from 'react';
import classNames from 'classnames';
import styles from './Loading.module.scss';

export type LoadingVariant = 'spinner' | 'dots' | 'custom';
export type LoadingSize = 'sm' | 'md' | 'lg';

export interface LoadingProps {
  /**
   * The visual style of the loader
   * @default 'spinner'
   */
  variant?: LoadingVariant;
  /**
   * The size of the loader
   * @default 'md'
   */
  size?: LoadingSize;
  /**
   * Custom color for the spinner or dots
   * @default 'inherit'
   */
  color?: string;
  /**
   * Optional loading message to display below/beside the loader
   */
  message?: string;
  /**
   * URL for a custom image/gif. Required if variant is 'custom'
   */
  src?: string;
  /**
   * If true, the loader covers the parent container (parent must be relative)
   * @default false
   */
  overlay?: boolean;
  /**
   * If true, the loader covers the entire viewport
   * @default false
   */
  fullScreen?: boolean;
  /**
   * Adds a blur effect to the background when using overlay or fullScreen
   * @default false
   */
  blur?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

export const Loading: React.FC<LoadingProps> = ({
  variant = 'spinner',
  size = 'md',
  color,
  message,
  src,
  overlay = false,
  fullScreen = false,
  blur = false,
  className,
  style,
}) => {
  const containerClasses = classNames(
    styles['sb-loading-component'],
    styles['sb-loading'],
    {
      [styles['sb-loading--overlay']]: overlay && !fullScreen,
      [styles['sb-loading--fullscreen']]: fullScreen,
      [styles['sb-loading--blur']]: blur && (overlay || fullScreen),
    },
    className
  );

  const spinnerClasses = classNames(
    styles['sb-loading__spinner'],
    styles[`sb-loading__spinner--${size}`]
  );
  
  const dotsClasses = classNames(
    styles['sb-loading__dots'],
    styles[`sb-loading__dots--${size}`]
  );

  const customClasses = classNames(
    styles['sb-loading__custom'],
    styles[`sb-loading__custom--${size}`]
  );

  const messageClasses = classNames(
    styles['sb-loading__message'],
    styles[`sb-loading__message--${size}`]
  );

  const containerStyle = color ? { ...style, color } : style;

  return (
    <div className={containerClasses} style={containerStyle} role="status" aria-busy="true">
      {variant === 'spinner' && (
        <div className={spinnerClasses} aria-hidden="true" />
      )}

      {variant === 'dots' && (
        <div className={dotsClasses}>
          <span />
          <span />
          <span />
        </div>
      )}

      {variant === 'custom' && src && (
        <img src={src} alt="Loading..." className={customClasses} />
      )}

      {message && <span className={messageClasses}>{message}</span>}
    </div>
  );
};
