import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import styles from './Loading.module.scss';
export const Loading = ({ variant = 'spinner', size = 'md', color, message, src, overlay = false, fullScreen = false, blur = false, className, style, }) => {
    const containerClasses = classNames(styles['sb-loading-component'], styles['sb-loading'], {
        [styles['sb-loading--overlay']]: overlay && !fullScreen,
        [styles['sb-loading--fullscreen']]: fullScreen,
        [styles['sb-loading--blur']]: blur && (overlay || fullScreen),
    }, className);
    const spinnerClasses = classNames(styles['sb-loading__spinner'], styles[`sb-loading__spinner--${size}`]);
    const dotsClasses = classNames(styles['sb-loading__dots'], styles[`sb-loading__dots--${size}`]);
    const customClasses = classNames(styles['sb-loading__custom'], styles[`sb-loading__custom--${size}`]);
    const messageClasses = classNames(styles['sb-loading__message'], styles[`sb-loading__message--${size}`]);
    const containerStyle = color ? { ...style, color } : style;
    return (_jsxs("div", { className: containerClasses, style: containerStyle, role: "status", "aria-busy": "true", children: [variant === 'spinner' && (_jsx("div", { className: spinnerClasses, "aria-hidden": "true" })), variant === 'dots' && (_jsxs("div", { className: dotsClasses, children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] })), variant === 'custom' && src && (_jsx("img", { src: src, alt: "Loading...", className: customClasses })), message && _jsx("span", { className: messageClasses, children: message })] }));
};
