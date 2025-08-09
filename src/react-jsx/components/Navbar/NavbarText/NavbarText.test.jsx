import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarText from './NavbarText';

describe('NavbarText', () => {
  it('renders as <span> with prefixed navbar-text class, custom className, children, and passes props', () => {
    render(
      <NavbarText
        className="custom-class"
        id="navbar-text-id"
        title="Navbar Text"
        data-testid="navbar-text"
      >
        My Navbar Text
      </NavbarText>
    );
    const el = screen.getByTestId('navbar-text');
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass(`${PREFIX}navbar-text`);
    expect(el).toHaveClass('custom-class');
    expect(el).toHaveAttribute('id', 'navbar-text-id');
    expect(el).toHaveAttribute('title', 'Navbar Text');
    expect(el).toHaveTextContent('My Navbar Text');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <NavbarText useBsClasses={false} className="only-custom" data-testid="navbar-text-nobs">
        No BS classes
      </NavbarText>
    );
    const el = screen.getByTestId('navbar-text-nobs');
    expect(el.tagName).toBe('SPAN');
    expect(el).not.toHaveClass('navbar-text');
    expect(el).not.toHaveClass(`${PREFIX}navbar-text`);
    expect(el).toHaveClass('only-custom');
    expect(el).toHaveTextContent('No BS classes');
  });

  it('passes through arbitrary attributes', () => {
    render(
      <NavbarText
        role="note"
        aria-label="Nav text"
        data-track="true"
        data-testid="navbar-text-props"
      >
        Props
      </NavbarText>
    );
    const el = screen.getByTestId('navbar-text-props');
    expect(el).toHaveAttribute('role', 'note');
    expect(el).toHaveAttribute('aria-label', 'Nav text');
    expect(el).toHaveAttribute('data-track', 'true');
  });
});
