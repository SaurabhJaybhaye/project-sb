import React, { type ReactNode } from 'react';
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
export declare const Button: React.FC<ButtonProps>;
