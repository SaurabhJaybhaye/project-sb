import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loading } from './Loading';
const meta = {
    title: 'Feedback/Loading',
    component: Loading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['spinner', 'dots', 'custom'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        color: {
            control: 'color',
        },
        overlay: {
            control: 'boolean',
        },
        fullScreen: {
            control: 'boolean',
        },
        blur: {
            control: 'boolean',
        },
    },
};
export default meta;
export const Spinner = {
    args: {
        variant: 'spinner',
    },
};
export const Dots = {
    args: {
        variant: 'dots',
    },
};
export const WithMessage = {
    args: {
        message: 'Loading data...',
    },
};
export const CustomColor = {
    args: {
        color: '#8a2be2',
        variant: 'spinner',
    },
};
export const CustomImage = {
    args: {
        variant: 'custom',
        src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDNoM3Z5Z3YwbnZ5Z3YwbnZ5Z3YwbnZ5Z3YwbnZ5Z3YwbnZ5Z3YwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l3nWhI38IWDofyDrW/giphy.gif', // Example GIF
        message: 'Custom Loader',
    },
};
export const Overlay = {
    render: (args) => (_jsxs("div", { style: { position: 'relative', width: '300px', height: '200px', border: '1px solid #ccc', padding: '20px' }, children: [_jsx("p", { children: "Content behind the loader. This simulation shows how the overlay covers the parent container." }), _jsx(Loading, { ...args })] })),
    args: {
        overlay: true,
        blur: true,
        message: 'Loading component...',
    },
};
export const FullScreen = {
    args: {
        fullScreen: true,
        blur: true,
        message: 'Full Screen Loading...',
    },
    parameters: {
        layout: 'fullscreen',
    },
};
