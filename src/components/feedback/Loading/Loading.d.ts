import React from 'react';
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
export declare const Loading: React.FC<LoadingProps>;
