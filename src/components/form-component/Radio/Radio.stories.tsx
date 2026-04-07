
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form Component/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    children: {
        control: false,
        description: 'Radio elements',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
    defaultValue: 'female',
    children: (
        <>
            <Radio value="female" label="Female" />
            <Radio value="male" label="Male" />
            <Radio value="other" label="Other" />
        </>
    ),
  },
};

export const RowDirection: Story = {
    args: {
      label: 'Gender',
      name: 'gender-row',
      defaultValue: 'female',
      row: true,
      children: (
          <>
              <Radio value="female" label="Female" />
              <Radio value="male" label="Male" />
              <Radio value="other" label="Other" />
          </>
      ),
    },
  };

export const WithError: Story = {
  args: {
    label: 'Select an option',
    name: 'error-group',
    error: true,
    helperText: 'Please select an option.',
    children: (
        <>
            <Radio value="opt1" label="Option 1" />
            <Radio value="opt2" label="Option 2" />
        </>
    ),
  },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <RadioGroup name="size-sm" label="Small" row>
                <Radio value="1" label="Option 1" size="sm" />
                <Radio value="2" label="Option 2" size="sm" />
            </RadioGroup>
            <RadioGroup name="size-md" label="Medium" row>
                <Radio value="1" label="Option 1" size="md" />
                <Radio value="2" label="Option 2" size="md" />
            </RadioGroup>
            <RadioGroup name="size-lg" label="Large" row>
                <Radio value="1" label="Option 1" size="lg" />
                <Radio value="2" label="Option 2" size="lg" />
            </RadioGroup>
        </div>
    )
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <RadioGroup name="color-primary" label="Primary" defaultValue="1" row>
                <Radio value="1" label="Option 1" color="primary" />
                <Radio value="2" label="Option 2" color="primary" />
            </RadioGroup>
            <RadioGroup name="color-secondary" label="Secondary" defaultValue="1" row>
                <Radio value="1" label="Option 1" color="secondary" />
                <Radio value="2" label="Option 2" color="secondary" />
            </RadioGroup>
            <RadioGroup name="color-success" label="Success" defaultValue="1" row>
                <Radio value="1" label="Option 1" color="success" />
                <Radio value="2" label="Option 2" color="success" />
            </RadioGroup>
             <RadioGroup name="color-danger" label="Danger" defaultValue="1" row>
                <Radio value="1" label="Option 1" color="danger" />
                <Radio value="2" label="Option 2" color="danger" />
            </RadioGroup>
             <RadioGroup name="color-warning" label="Warning" defaultValue="1" row>
                <Radio value="1" label="Option 1" color="warning" />
                <Radio value="2" label="Option 2" color="warning" />
            </RadioGroup>
             <RadioGroup name="color-info" label="Info" defaultValue="1" row>
                <Radio value="1" label="Option 1" color="info" />
                <Radio value="2" label="Option 2" color="info" />
            </RadioGroup>
        </div>
    )
};

export const Disabled: Story = {
    args: {
      label: 'Disabled Group',
      name: 'disabled-group',
      defaultValue: 'opt1',
      children: (
          <>
              <Radio value="opt1" label="Option 1" disabled />
              <Radio value="opt2" label="Option 2" disabled />
              <Radio value="opt3" label="Option 3" />
          </>
      ),
    },
};
