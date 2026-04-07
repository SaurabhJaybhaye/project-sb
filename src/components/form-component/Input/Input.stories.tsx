import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { HiMail, HiLockClosed, HiSearch, HiEye, HiEyeOff } from 'react-icons/hi'; // Example icons, adjust import based on project

const meta: Meta<typeof Input> = {
  title: 'Form Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    type: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Label',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'user@example.com',
    helperText: 'We will never share your email.',
    type: 'email',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: 'wrongpassword',
    error: true,
    helperText: 'Incorrect password.',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input
        {...args}
        label="Search"
        placeholder="Search..."
        startIcon={<HiSearch size={20} cursor='pointer' onClick={() => console.log('Search clicked')}  />}
        size='lg'
      />
      <Input
        {...args}
        label="Email"
        placeholder="Email"
        startIcon={<HiMail />}
      />
      <Input
        {...args}
        label="Password"
        type="password"
        endIcon={<HiLockClosed />}
      />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input {...args} label="Outlined" variant="outlined" placeholder="Outlined" />
      <Input {...args} label="Filled" variant="filled" placeholder="Filled" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input {...args} label="Small" size="sm" placeholder="Small input" />
      <Input {...args} label="Medium" size="md" placeholder="Medium input" />
      <Input {...args} label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    fullWidth: true,
    placeholder: 'This input takes up the full container width',
  },
  render: (args) => (
    <div style={{ width: '100%', padding: '20px', border: '1px dashed #ccc' }}>
      <Input {...args} />
    </div>
  ),
};

export const PasswordToggle: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div style={{ width: '300px' }}>
        <Input
          {...args}
          label="Password with Toggle"
          placeholder="Enter password"
          type={showPassword ? 'text' : 'password'}
          endIcon={
            showPassword ? (
              <HiEyeOff
                size={20}
                style={{ cursor: 'pointer' }}
                onClick={() => setShowPassword(false)}
                title="Hide password"
              />
            ) : (
              <HiEye
                size={20}
                style={{ cursor: 'pointer' }}
                onClick={() => setShowPassword(true)}
                title="Show password"
              />
            )
          }
        />
      </div>
    );
  },
};
