import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
describe('Button', () => {
    it('renders correctly', () => {
        render(_jsx(Button, { children: "Click me" }));
        expect(screen.getByRole('button', { name: /click me/i })).toBeTruthy();
    });
    it('handles click events', () => {
        const handleClick = vi.fn();
        render(_jsx(Button, { onClick: handleClick, children: "Click me" }));
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    it('shows loading state', () => {
        render(_jsx(Button, { isLoading: true, children: "Loading" }));
        const button = screen.getByRole('button');
        expect(button.disabled).toBe(true);
        expect(button.className).toContain('button--loading');
    });
    it('renders with specific start icon', () => {
        render(_jsx(Button, { startIcon: _jsx("span", { "data-testid": "start-icon", children: "start" }), children: "With Icon" }));
        expect(screen.getByTestId('start-icon')).toBeTruthy();
    });
    it('renders with generic icon shorthand (left default)', () => {
        render(_jsx(Button, { icon: _jsx("span", { "data-testid": "generic-icon", children: "icon" }), children: "Generic" }));
        expect(screen.getByTestId('generic-icon')).toBeTruthy();
    });
    it('renders as icon-only when no children are present', () => {
        render(_jsx(Button, { icon: _jsx("span", { "data-testid": "only-icon", children: "icon" }) }));
        const button = screen.getByRole('button');
        expect(button.className).toContain('button--icon-only');
        expect(screen.getByTestId('only-icon')).toBeTruthy();
    });
});
