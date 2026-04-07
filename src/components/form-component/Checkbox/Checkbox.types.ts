
import type { InputHTMLAttributes, ReactNode, ChangeEvent } from 'react';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'onChange'> {
  /**
   * The label content.
   */
  label?: ReactNode;
  /**
   * The value of the component.
   */
  value?: string | number;
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate?: boolean;
  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /**
   * The size of the component.
   * @default 'md'
   */
  size?: CheckboxSize;
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: CheckboxColor;
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

export interface CheckboxGroupProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: string[];
  /**
   * The value of the component.
   */
  value?: string[];
  /**
   * The name used to reference the value of the control.
   */
  name?: string;
  /**
   * Callback fired when the state changes.
   */
  onChange?: (value: string[]) => void;
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
   * If `true`, the group defaults its children to disabled.
   */
  disabled?: boolean;
  /**
   * Class name applied to the root element.
   */
  className?: string;
}
