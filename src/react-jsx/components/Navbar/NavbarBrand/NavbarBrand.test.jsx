import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarBrand from './NavbarBrand';

describe('NavbarBrand', () => {
  it('renders as anchor by default with prefixed navbar-brand class, custom className, href, and children', () => {
    render(
      <NavbarBrand
        href="https://example.com"
        className="custom-class"
        id="brand-id"
        data-testid="navbar-brand"
        title="My Brand"
      >
        Brand Link
      </NavbarBrand>
    );
    const el = screen.getByTestId('navbar-brand');
    expect(el.tagName).toBe('A');
    expect(el).toHaveClass(`${PREFIX}navbar-brand`);
    expect(el).toHaveClass('custom-class');
    expect(el).toHaveAttribute('href', 'https://example.com');
    expect(el).toHaveAttribute('id', 'brand-id');
    expect(el).toHaveAttribute('title', 'My Brand');
    expect(el).toHaveTextContent('Brand Link');
  });

  it('renders as span when isText is true, with prefixed navbar-brand class and children', () => {
    render(
      <NavbarBrand
        isText
        className="custom-class"
        id="brand-text-id"
        data-testid="navbar-brand-text"
        title="Text Brand"
      >
        Brand Text
      </NavbarBrand>
    );
    const el = screen.getByTestId('navbar-brand-text');
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass(`${PREFIX}navbar-brand`);
    expect(el).toHaveClass('custom-class');
    expect(el).toHaveAttribute('id', 'brand-text-id');
    expect(el).toHaveAttribute('title', 'Text Brand');
    expect(el).toHaveTextContent('Brand Text');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <NavbarBrand
        isText
        useBsClasses={false}
        className="custom-class"
        data-testid="navbar-brand-nobs"
      >
        No BS
      </NavbarBrand>
    );
    const el = screen.getByTestId('navbar-brand-nobs');
    expect(el).not.toHaveClass('navbar-brand');
    expect(el).not.toHaveClass(`${PREFIX}navbar-brand`);
    expect(el).toHaveClass('custom-class');
  });
});
