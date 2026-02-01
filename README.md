# Nexo UI

A modern, flexible design system built with React, Vite, and Storybook.

![NPM Version](https://img.shields.io/npm/v/@saurabh05/nexo-ui)
![License](https://img.shields.io/npm/l/@saurabh05/nexo-ui)

## Installation

Install the package via npm:

```bash
npm install @saurabh05/nexo-ui
```

## Setup

Start by importing the global CSS file in your application's entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@saurabh05/nexo-ui/dist/project-sb.css';
```

## Components

### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from '@saurabh05/nexo-ui';
import { FaArrowRight } from 'react-icons/fa';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" size="lg">
        Secondary Large
      </Button>
      <Button variant="outline" icon={<FaArrowRight />} iconPosition="right">
        Next Step
      </Button>
      <Button isLoading>Processing</Button>
    </div>
  );
}
```

**Props:**

- `variant`: `primary` | `secondary` | `outline` | `text` | `danger`
- `size`: `sm` | `md` | `lg`
- `isLoading`: `boolean`
- `disabled`: `boolean`
- `customColor`: `string`
- `icon`: `ReactNode`
- `iconPosition`: `left` | `right`

### Loading

A comprehensive loading component with spinners, dots, and overlays.

```tsx
import { Loading } from '@saurabh05/nexo-ui';

function App() {
  return (
    <>
      {/* Default Spinner */}
      <Loading />

      {/* Dots Variant */}
      <Loading variant="dots" color="#ff5722" />

      {/* Full Screen Overlay with Message */}
      <Loading fullScreen blur message="Loading application..." />
    </>
  );
}
```

**Props:**

- `variant`: `spinner` | `dots` | `custom`
- `size`: `sm` | `md` | `lg`
- `color`: `string`
- `message`: `string`
- `src`: `string` (for custom image/gif)
- `overlay`: `boolean`
- `fullScreen`: `boolean`
- `blur`: `boolean`

## Development

To run the Storybook environment locally:

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start Storybook: `npm run storybook`

## License

MIT
