import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar, { COLLAPSE_BREAKPOINTS } from './Navbar';

describe('Navbar', () => {
  it('renders with default navbar class and prefix', () => {
    render(
      <Navbar id="my-navbar" data-testid="navbar" className="custom-class">
        <span data-testid="navbar-child">Child</span>
      </Navbar>
    );
    const nav = screen.getByTestId('navbar');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass(`${PREFIX}navbar`);
    expect(nav).not.toHaveClass(`${PREFIX}navbar-dark`);
    expect(nav.className).not.toMatch(new RegExp(`\\b${PREFIX}navbar-expand`));
    expect(nav).toHaveClass('custom-class');
    expect(nav).toHaveAttribute('id', 'my-navbar');
    expect(screen.getByTestId('navbar-child')).toBeInTheDocument();
  });

  it('renders with navbar-dark class when isDark is true', () => {
    render(<Navbar isDark data-testid="navbar-dark" />);
    const nav = screen.getByTestId('navbar-dark');
    expect(nav).toHaveClass(`${PREFIX}navbar`);
    expect(nav).toHaveClass(`${PREFIX}navbar-dark`);
  });

  it('renders with all collapseBreakpoint classes', () => {
    Object.entries(COLLAPSE_BREAKPOINTS).forEach(([key, value]) => {
      render(<Navbar collapseBreakpoint={key} data-testid={`navbar-${key || 'default'}`} />);
      const nav = screen.getByTestId(`navbar-${key || 'default'}`);
      if (value) {
        expect(nav).toHaveClass(`${PREFIX}${value}`);
      } else {
        expect(nav.className).not.toMatch(new RegExp(`\\b${PREFIX}navbar-expand`));
      }
    });
  });

  it('does not add any Bootstrap classes when useBsClasses is false', () => {
    render(
      <Navbar useBsClasses={false} data-testid="navbar-nobs" isDark>
        <span>Test</span>
      </Navbar>
    );
    const nav = screen.getByTestId('navbar-nobs');
    expect(nav).not.toHaveClass(`${PREFIX}navbar`);
    expect(nav).not.toHaveClass('navbar');
    expect(nav).not.toHaveClass(`${PREFIX}navbar-dark`);
    expect(nav).not.toHaveClass('navbar-dark');
  });
});
