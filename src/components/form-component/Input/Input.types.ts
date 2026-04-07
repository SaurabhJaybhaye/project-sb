import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'outlined' | 'filled';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * If true, the input will indicate an error state
   * @default false
   */
  error?: boolean;
  /**
   * If true, the input will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Icon to display at the start of the input
   */
  startIcon?: ReactNode;
  /**
   * Icon to display at the end of the input
   */
  endIcon?: ReactNode;
  /**
   * Size of the input
   * @default 'md'
   */
  size?: InputSize;
  /**
   * Variant of the input style
   * @default 'outlined'
   */
  variant?: InputVariant;
}
