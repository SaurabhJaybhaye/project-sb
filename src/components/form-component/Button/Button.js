import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, {} from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
export const Button = ({ children, variant = 'primary', size = 'md', isLoading = false, startIcon, endIcon, icon, iconPosition = 'left', customColor, className, disabled, style, ...props }) => {
    const hasChildren = React.Children.count(children) > 0;
    const isIconOnly = !hasChildren && !!(icon || startIcon || endIcon);
    // Determine final icons based on position props
    const finalStartIcon = startIcon || (icon && iconPosition === 'left' ? icon : null);
    const finalEndIcon = endIcon || (icon && iconPosition === 'right' ? icon : null);
    const buttonClass = classNames(styles['sb-button-component'], styles['sb-button'], styles[`sb-button--${variant}`], styles[`sb-button--${size}`], {
        [styles['sb-button--loading']]: isLoading,
        [styles['sb-button--icon-only']]: isIconOnly,
    }, className);
    const buttonStyle = customColor
        ? { ...style, backgroundColor: customColor, borderColor: customColor, color: '#fff' }
        : style;
    return (_jsxs("button", { className: buttonClass, disabled: disabled || isLoading, style: buttonStyle, ...props, children: [isLoading && _jsx("span", { className: styles['sb-button__spinner'], "aria-hidden": "true" }), !isLoading && !isIconOnly && finalStartIcon && _jsx("span", { className: styles.icon, children: finalStartIcon }), hasChildren && _jsx("span", { children: children }), !isLoading && !isIconOnly && finalEndIcon && _jsx("span", { className: styles.icon, children: finalEndIcon }), !isLoading && isIconOnly && (icon || startIcon || endIcon)] }));
};
