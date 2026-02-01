import type { Meta, StoryObj } from '@storybook/react';
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Continue',
    icon: <FaArrowRight />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Checkout',
    icon: <FaCheck />,
    iconPosition: 'right',
  },
};

export const IconOnly: Story = {
  args: {
    icon: <FaPlus />,
    variant: 'secondary',
    'aria-label': 'Add new item',
  },
};

export const IconOnlyDanger: Story = {
  args: {
    icon: <FaTrash />,
    variant: 'danger',
    'aria-label': 'Delete item',
  },
};

export const IconOnlyLarge: Story = {
  args: {
    icon: <FaSearch />,
    variant: 'outline',
    size: 'lg',
    'aria-label': 'Search',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    isLoading: true,
  },
};

export const CustomColor: Story = {
  args: {
    children: 'Custom Color',
    customColor: '#8a2be2',
    icon: <FaCheck />,
  },
};
