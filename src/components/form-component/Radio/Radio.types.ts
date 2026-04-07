
import type { InputHTMLAttributes, ReactNode, ChangeEvent } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'onChange'> {
  /**
   * The label content.
   */
  label?: ReactNode;
  /**
   * The value of the component.
   */
  value?: string | number | readonly string[];
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /**
   * The size of the component.
   * @default 'md'
   */
  size?: RadioSize;
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: RadioColor;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
   /**
   * If `true`, the input will indicate an error state
   * @default false
   */
   error?: boolean;
}

export interface RadioGroupProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: string | number | readonly string[];
  /**
   * The value of the component.
   */
  value?: string | number | readonly string[];
  /**
   * The name used to reference the value of the control.
   */
  name?: string;
  /**
   * Callback fired when a radio button is selected.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  /**
   * The label of the group.
   */
  label?: ReactNode;
  /**
   * Helper text to display below the group.
   */
  helperText?: ReactNode;
  /**
   * If `true`, the group will be displayed in a row.
   * @default false
   */
  row?: boolean;
  /**
   * If `true`, the group will indicate an error state.
   */
  error?: boolean;
  /**
   * Class name applied to the root element.
   */
  className?: string;
}
