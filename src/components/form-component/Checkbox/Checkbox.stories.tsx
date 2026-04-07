import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Form Component/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    children: {
        control: false,
        description: 'Checkbox elements',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Basic: Story = {
  args: {
    label: 'Hobbies',
    name: 'hobbies',
    defaultValue: ['reading'],
    children: (
        <>
            <Checkbox value="reading" label="Reading" />
            <Checkbox value="gaming" label="Gaming" />
            <Checkbox value="music" label="Music" />
        </>
    ),
  },
};

export const RowDirection: Story = {
    args: {
      label: 'Hobbies',
      name: 'hobbies-row',
      defaultValue: ['reading'],
      row: true,
      children: (
          <>
              <Checkbox value="reading" label="Reading" />
              <Checkbox value="gaming" label="Gaming" />
              <Checkbox value="music" label="Music" />
          </>
      ),
    },
  };

export const WithError: Story = {
  args: {
    label: 'Select options',
    name: 'error-group',
    error: true,
    helperText: 'Please select at least one option.',
    children: (
        <>
            <Checkbox value="opt1" label="Option 1" />
            <Checkbox value="opt2" label="Option 2" />
        </>
    ),
  },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <CheckboxGroup name="size-sm" label="Small" row>
                <Checkbox value="1" label="Option 1" size="sm" />
                <Checkbox value="2" label="Option 2" size="sm" />
            </CheckboxGroup>
            <CheckboxGroup name="size-md" label="Medium" row>
                <Checkbox value="1" label="Option 1" size="md" />
                <Checkbox value="2" label="Option 2" size="md" />
            </CheckboxGroup>
            <CheckboxGroup name="size-lg" label="Large" row>
                <Checkbox value="1" label="Option 1" size="lg" />
                <Checkbox value="2" label="Option 2" size="lg" />
            </CheckboxGroup>
        </div>
    )
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <CheckboxGroup name="color-primary" label="Primary" defaultValue={['1']} row>
                <Checkbox value="1" label="Option 1" color="primary" />
                <Checkbox value="2" label="Option 2" color="primary" />
            </CheckboxGroup>
            <CheckboxGroup name="color-secondary" label="Secondary" defaultValue={['1']} row>
                <Checkbox value="1" label="Option 1" color="secondary" />
                <Checkbox value="2" label="Option 2" color="secondary" />
            </CheckboxGroup>
            <CheckboxGroup name="color-success" label="Success" defaultValue={['1']} row>
                <Checkbox value="1" label="Option 1" color="success" />
                <Checkbox value="2" label="Option 2" color="success" />
            </CheckboxGroup>
             <CheckboxGroup name="color-danger" label="Danger" defaultValue={['1']} row>
                <Checkbox value="1" label="Option 1" color="danger" />
                <Checkbox value="2" label="Option 2" color="danger" />
            </CheckboxGroup>
             <CheckboxGroup name="color-warning" label="Warning" defaultValue={['1']} row>
                <Checkbox value="1" label="Option 1" color="warning" />
                <Checkbox value="2" label="Option 2" color="warning" />
            </CheckboxGroup>
             <CheckboxGroup name="color-info" label="Info" defaultValue={['1']} row>
                <Checkbox value="1" label="Option 1" color="info" />
                <Checkbox value="2" label="Option 2" color="info" />
            </CheckboxGroup>
        </div>
    )
};

export const Disabled: Story = {
    args: {
      label: 'Disabled Group',
      name: 'disabled-group',
      defaultValue: ['opt1'],
      children: (
          <>
              <Checkbox value="opt1" label="Option 1" disabled />
              <Checkbox value="opt2" label="Option 2" disabled />
              <Checkbox value="opt3" label="Option 3" />
          </>
      ),
    },
};

export const Indeterminate: Story = {
    render: () => (
        <Checkbox indeterminate label="Indeterminate Checkbox" />
    )
};
