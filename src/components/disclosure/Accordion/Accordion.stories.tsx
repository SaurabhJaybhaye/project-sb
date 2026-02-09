import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Disclosure/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'contained', 'outlined', 'ghost', 'bordered'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    allowMultiple: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    accentColor: {
      control: 'color',
    },
    headerTextColor: {
      control: 'color',
    },
    headerBgColor: {
      control: 'color',
    },
    bodyTextColor: {
      control: 'color',
    },
    bodyBgColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: [
      <AccordionItem key="1" title="What is Nexo UI?">
        Nexo UI is a high-performance, reusable component library built with React and Sass, designed for modern web applications.
      </AccordionItem>,
      <AccordionItem key="2" title="Is it accessible?">
        Yes, Nexo UI follows WAI-ARIA patterns to ensure components are accessible to all users.
      </AccordionItem>,
      <AccordionItem key="3" title="Can I customize the styles?">
        Absolutely! You can customize components using Sass variables, CSS modules, or by overriding styles with your own class names.
      </AccordionItem>,
    ],
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Accordion {...args} />
    </div>
  ),
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    allowMultiple: true,
    children: [
      <AccordionItem key="1" title="Getting Started">
        To get started, install the package via npm or yarn and import the components you need into your project.
      </AccordionItem>,
      <AccordionItem key="2" title="Installation" disabled>
        This item is disabled and cannot be expanded.
      </AccordionItem>,
      <AccordionItem key="3" title="Best Practices">
        Follow our documentation for best practices on how to structure your application using Nexo UI components.
      </AccordionItem>,
    ],
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Accordion {...args} />
    </div>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: [
      <AccordionItem key="1" title="How to use with Next.js?">
        Nexo UI is fully compatible with Next.js. For App Router, ensure you add the 'use client' directive if using interactive components.
      </AccordionItem>,
      <AccordionItem key="2" title="Theming System">
        Our theming system is based on Sass variables, allowing you to globally change the look and feel of your applications easily.
      </AccordionItem>,
    ],
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Accordion {...args} />
    </div>
  ),
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: [
      <AccordionItem key="1" title="Section 1">
        Content for section 1. This variant adds a border around each item with some margin.
      </AccordionItem>,
      <AccordionItem key="2" title="Section 2">
        Content for section 2.
      </AccordionItem>,
    ],
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Accordion {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Small (sm)</h3>
        <Accordion size="sm">
          <AccordionItem title="Small Accordion 1">Small content</AccordionItem>
          <AccordionItem title="Small Accordion 2">Small content</AccordionItem>
        </Accordion>
      </div>
      <div>
        <h3>Medium (md)</h3>
        <Accordion size="md">
          <AccordionItem title="Medium Accordion 1">Medium content</AccordionItem>
          <AccordionItem title="Medium Accordion 2">Medium content</AccordionItem>
        </Accordion>
      </div>
      <div>
        <h3>Large (lg)</h3>
        <Accordion size="lg">
          <AccordionItem title="Large Accordion 1">Large content</AccordionItem>
          <AccordionItem title="Large Accordion 2">Large content</AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  args: {
    variant: 'contained',
    accentColor: '#e91e63',
    headerTextColor: '#ffffff',
    headerBgColor: '#880e4f',
    bodyTextColor: '#ffebee',
    bodyBgColor: '#ad1457',
    children: [
      <AccordionItem key="1" title="Pink Theme">
        This accordion uses custom colors for the header background, text, and icons.
      </AccordionItem>,
      <AccordionItem 
        key="2" 
        title="Individual Item Override" 
        headerBgColor="#1a237e" 
        accentColor="#ffeb3b"
      >
        You can also override colors for specific items! This one has a dark blue background and yellow icon.
      </AccordionItem>,
    ],
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Accordion {...args} />
    </div>
  ),
};
