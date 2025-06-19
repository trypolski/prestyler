import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonBaseComponent from './ButtonBaseComponent';

const { usePrestylerPrefix } = require('../../../hooks/usePrestylerPrefix');

// Mock the usePrestylerPrefix hook
jest.mock('../../../hooks/usePrestylerPrefix', () => ({
  usePrestylerPrefix: jest.fn(),
}));

describe('ButtonBaseComponent', () => {
  beforeEach(() => {
    usePrestylerPrefix.mockReturnValue('pre-');
  });

  it('renders children correctly', () => {
    render(<ButtonBaseComponent bsClasses="btn">Click me</ButtonBaseComponent>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies prefixed bsClasses when useBsClasses is true', () => {
    render(<ButtonBaseComponent bsClasses="btn btn-primary">Test</ButtonBaseComponent>);
    expect(screen.getByRole('button')).toHaveClass('pre-btn');
    expect(screen.getByRole('button')).toHaveClass('pre-btn-primary');
  });

  it('does not apply prefixed bsClasses when useBsClasses is false', () => {
    render(
      <ButtonBaseComponent bsClasses="btn btn-primary" useBsClasses={false}>
        Test
      </ButtonBaseComponent>
    );
    const btn = screen.getByRole('button');
    expect(btn.className).not.toMatch(/pre-btn/);
    expect(btn.className).not.toMatch(/pre-btn-primary/);
  });

  it('appends additional className prop', () => {
    render(
      <ButtonBaseComponent bsClasses="btn" className="extra-class">
        Test
      </ButtonBaseComponent>
    );
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/extra-class/);
    expect(btn.className).toMatch(/pre-btn/);
  });

  it('passes other props to the button', () => {
    const handleClick = jest.fn();
    render(
      <ButtonBaseComponent bsClasses="btn" type="submit" onClick={handleClick}>
        Test
      </ButtonBaseComponent>
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('type', 'submit');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  it('handles empty bsClasses gracefully', () => {
    render(<ButtonBaseComponent bsClasses="">Test</ButtonBaseComponent>);
    const btn = screen.getByRole('button');
    expect(btn.className).not.toMatch(/pre-/);
  });

  it('handles missing bsClasses prop gracefully', () => {
    render(<ButtonBaseComponent>Test</ButtonBaseComponent>);
    const btn = screen.getByRole('button');
    expect(btn.className).toBe('');
  });

  it('renders an <a> element when isLink prop is true', () => {
    render(
      <ButtonBaseComponent isLink href="https://example.com">
        Link Button
      </ButtonBaseComponent>
    );
    const link = screen.getByRole('button', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});
