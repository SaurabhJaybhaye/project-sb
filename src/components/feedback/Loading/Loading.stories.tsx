// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import { Loading, type LoadingProps } from './Loading';

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
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {
    variant: 'spinner',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
  },
};

export const WithMessage: Story = {
  args: {
    message: 'Loading data...',
  },
};

export const CustomColor: Story = {
  args: {
    color: '#8a2be2',
    variant: 'spinner',
  },
};

export const CustomImage: Story = {
  args: {
    variant: 'custom',
    src: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDNoM3Z5Z3YwbnZ5Z3YwbnZ5Z3YwbnZ5Z3YwbnZ5Z3YwbnZ5Z3YwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l3nWhI38IWDofyDrW/giphy.gif', // Example GIF
    message: 'Custom Loader',
  },
};

export const Overlay: Story = {
  render: (args: LoadingProps) => (
    <div style={{ position: 'relative', width: '300px', height: '200px', border: '1px solid #ccc', padding: '20px' }}>
      <p>Content behind the loader. This simulation shows how the overlay covers the parent container.</p>
      <Loading {...args} />
    </div>
  ),
  args: {
    overlay: true,
    blur: true,
    message: 'Loading component...',
  },
};

export const FullScreen: Story = {
  args: {
    fullScreen: true,
    blur: true,
    message: 'Full Screen Loading...',
  },
  parameters: {
    layout: 'fullscreen',
  },
};
