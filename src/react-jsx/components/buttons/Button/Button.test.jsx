import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { BUTTON_CLASSES, BUTTON_SIZES } from '../constants';

// Helper to get button element
const getButton = () => screen.getByRole('button');

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(getButton()).toHaveTextContent('Click me');
  });

  it("uses only 'btn' class for default variant", () => {
    render(<Button>Default</Button>);
    expect(getButton().className.split(' ')).toContain(`${PREFIX}btn`);
    expect(getButton().className.split(' ')).toHaveLength(1);
  });

  // Test each BUTTON_CLASSES variant
  Object.entries(BUTTON_CLASSES).forEach(([variant, className]) => {
    it(`applies correct bsClasses for variant="${variant}"`, () => {
      render(<Button variant={variant}>Test {variant}</Button>);
      const btn = getButton();
      expect(btn.className.split(' ')).toContain(`${PREFIX}btn`);
      const prefixedClass = className
        .split(' ')
        .map((cls) => `${PREFIX}${cls}`)
        .join(' ');
      expect(btn.className.split(' ')).toContain(prefixedClass);
    });
  });

  // Test isLarge with primary
  it('applies large size class with primary variant', () => {
    render(
      <Button variant="primary" isLarge>
        Large Primary
      </Button>
    );
    const btn = getButton();
    expect(btn.className.split(' ')).toContain(`${PREFIX}btn`);
    expect(btn.className.split(' ')).toContain(`${PREFIX}${BUTTON_CLASSES.primary}`);
    expect(btn.className.split(' ')).toContain(`${PREFIX}${BUTTON_SIZES.large}`);
    expect(btn.className.split(' ')).not.toContain(`${PREFIX}${BUTTON_SIZES.small}`);
  });

  // Test isSmall with primary
  it('applies small size class with primary variant', () => {
    render(
      <Button variant="primary" isSmall>
        Small Primary
      </Button>
    );
    const btn = getButton();
    expect(btn.className.split(' ')).toContain(`${PREFIX}btn`);
    expect(btn.className.split(' ')).toContain(`${PREFIX}${BUTTON_CLASSES.primary}`);
    expect(btn.className.split(' ')).toContain(`${PREFIX}${BUTTON_SIZES.small}`);
    expect(btn.className.split(' ')).not.toContain(`${PREFIX}${BUTTON_SIZES.large}`);
  });

  // isOutlined for primary
  it('applies outlined classes for primary', () => {
    render(
      <Button variant="primary" isOutlined>
        Outlined Primary
      </Button>
    );
    const btn = getButton();
    expect(btn.className.split(' ')).toContain(`${PREFIX}btn`);
    expect(btn.className.split(' ')).toContain(`${PREFIX}btn-outline-primary`);
    expect(btn.className.split(' ')).not.toContain(`${PREFIX}btn-primary`);
  });

  it('passes additional props to ButtonBaseComponent', () => {
    render(
      <Button variant="primary" type="submit" data-test="foo">
        Props
      </Button>
    );
    const btn = getButton();
    expect(btn).toHaveAttribute('type', 'submit');
    expect(btn).toHaveAttribute('data-test', 'foo');
    expect(btn).toHaveTextContent('Props');
  });

  it('renders an <a> element with role "button" when isLink is true', () => {
    render(
      <Button isLink href="https://example.com">
        Link Button
      </Button>
    );
    const link = screen.getByRole('button', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('adds data-bs-toggle and aria-pressed when isToggleable is true', () => {
    render(
      <Button isToggleable isActive={false}>
        Toggleable
      </Button>
    );
    const btn = getButton();
    expect(btn).toHaveAttribute('data-bs-toggle', 'button');
    expect(btn).toHaveAttribute('aria-pressed', 'false');
    expect(btn.className.split(' ')).not.toContain(`${PREFIX}active`);
  });

  it('sets aria-pressed to true when isToggleable and isActive are true', () => {
    render(
      <Button isToggleable isActive>
        Active Toggleable
      </Button>
    );
    const btn = getButton();
    expect(btn).toHaveAttribute('data-bs-toggle', 'button');
    expect(btn).toHaveAttribute('aria-pressed', 'true');
    expect(btn.className.split(' ')).toContain(`${PREFIX}active`);
  });

  it('does not add toggle attributes when isToggleable is false', () => {
    render(<Button isActive>Not Toggleable</Button>);
    const btn = getButton();
    expect(btn).not.toHaveAttribute('data-bs-toggle');
    expect(btn).not.toHaveAttribute('aria-pressed');
    expect(btn.className.split(' ')).not.toContain(`${PREFIX}active`);
  });

  describe('Close button', () => {
    it('has correct CSS classes and aria-label="Close" by default', () => {
      render(<Button variant="close" />);
      const btn = getButton();
      expect(btn.className.split(' ')).toContain(`${PREFIX}btn`);
      expect(btn.className.split(' ')).toContain(`${PREFIX}btn-close`);
      expect(btn).toHaveAttribute('aria-label', 'Close');
    });

    it('does not render children', () => {
      render(
        <Button variant="close" aria-label="Dismiss">
          Should not render
        </Button>
      );
      const btn = getButton();
      expect(btn).toHaveAttribute('aria-label', 'Dismiss');
      expect(btn).toBeEmptyDOMElement();
    });

    it('always has isToggleable, isActive, isOutlined as false', () => {
      render(<Button variant="close" isToggleable isActive isOutlined />);
      const btn = getButton();
      // Should not have toggle attributes or 'active' class
      expect(btn).not.toHaveAttribute('data-bs-toggle');
      expect(btn).not.toHaveAttribute('aria-pressed');
      expect(btn.className.split(' ')).not.toContain('active');
      // Should not have outlined class
      expect(btn.className.split(' ')).not.toContain(`${PREFIX}btn-outline-close`);
    });
  });

  describe('Dropdown button', () => {
    it('applies dropdown toggle, split, and show classes when isDropdownToggle, isDropdownToggleSplit, and show are true', () => {
      render(
        <Button
          variant="primary"
          isDropdownToggle
          isDropdownToggleSplit
          show
          data-testid="dropdown-toggle-btn"
        >
          Dropdown Toggle
        </Button>
      );
      const buttonClasses = screen.getByTestId('dropdown-toggle-btn').className.split(' ');
      expect(buttonClasses).toContain(`${PREFIX}btn`);
      expect(buttonClasses).toContain(`${PREFIX}${BUTTON_CLASSES.primary}`);
      expect(buttonClasses).toContain(`${PREFIX}${BUTTON_CLASSES.dropdownToggle}`);
      expect(buttonClasses).toContain(`${PREFIX}${BUTTON_CLASSES.dropdownShow}`);
      expect(buttonClasses).toContain(`${PREFIX}${BUTTON_CLASSES.dropdownToggleSplit}`);
    });
  });
});
