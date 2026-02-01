import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeTruthy();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.className).toContain('button--loading');
  });

  it('renders with specific start icon', () => {
    render(<Button startIcon={<span data-testid="start-icon">start</span>}>With Icon</Button>);
    expect(screen.getByTestId('start-icon')).toBeTruthy();
  });
  
  it('renders with generic icon shorthand (left default)', () => {
    render(<Button icon={<span data-testid="generic-icon">icon</span>}>Generic</Button>);
    expect(screen.getByTestId('generic-icon')).toBeTruthy();
  });

  it('renders as icon-only when no children are present', () => {
    render(<Button icon={<span data-testid="only-icon">icon</span>} />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('button--icon-only');
    expect(screen.getByTestId('only-icon')).toBeTruthy();
  });
});
