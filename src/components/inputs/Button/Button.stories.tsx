import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Inputs/Button',
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

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Next Step',
    variant: 'primary',
    endIcon: <span>→</span>,
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
    customColor: '#8a2be2', // Violet
  },
};
