import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button';
import { FaArrowRight, FaCheck, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
const meta = {
    title: 'Form Component/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'text', 'danger'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        isLoading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        customColor: {
            control: 'color',
        },
        iconPosition: {
            control: 'radio',
            options: ['left', 'right'],
        },
        onClick: { action: 'clicked' },
    },
};
export default meta;
export const Primary = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};
export const WithLeftIcon = {
    args: {
        children: 'Continue',
        icon: _jsx(FaArrowRight, {}),
        iconPosition: 'left',
    },
};
export const WithRightIcon = {
    args: {
        children: 'Checkout',
        icon: _jsx(FaCheck, {}),
        iconPosition: 'right',
    },
};
export const IconOnly = {
    args: {
        icon: _jsx(FaPlus, {}),
        variant: 'secondary',
        'aria-label': 'Add new item',
    },
};
export const IconOnlyDanger = {
    args: {
        icon: _jsx(FaTrash, {}),
        variant: 'danger',
        'aria-label': 'Delete item',
    },
};
export const IconOnlyLarge = {
    args: {
        icon: _jsx(FaSearch, {}),
        variant: 'outline',
        size: 'lg',
        'aria-label': 'Search',
    },
};
export const Loading = {
    args: {
        children: 'Loading...',
        isLoading: true,
    },
};
export const CustomColor = {
    args: {
        children: 'Custom Color',
        customColor: '#8a2be2',
        icon: _jsx(FaCheck, {}),
    },
};
