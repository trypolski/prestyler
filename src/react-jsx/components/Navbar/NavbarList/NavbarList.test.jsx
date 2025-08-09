import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarList from './NavbarList';

describe('NavbarList', () => {
  it('renders as <ul> with prefixed navbar-nav class, custom className, and passes props', () => {
    render(
      <NavbarList
        id="navlist-id"
        aria-label="Primary"
        className="custom-class"
        data-testid="navbar-list"
      >
        <li data-testid="child-item">Child</li>
      </NavbarList>
    );
    const list = screen.getByTestId('navbar-list');
    expect(list.tagName).toBe('UL');
    expect(list).toHaveClass(`${PREFIX}navbar-nav`);
    expect(list).toHaveClass('custom-class');
    expect(list).not.toHaveClass(`${PREFIX}navbar-nav-scroll`);
    expect(list).toHaveAttribute('id', 'navlist-id');
    expect(list).toHaveAttribute('aria-label', 'Primary');
    expect(screen.getByTestId('child-item')).toBeInTheDocument();
  });

  it('adds navbar-nav-scroll class when isScrollable is true', () => {
    render(<NavbarList isScrollable data-testid="navbar-list-scroll" />);
    const list = screen.getByTestId('navbar-list-scroll');
    expect(list).toHaveClass(`${PREFIX}navbar-nav`);
    expect(list).toHaveClass(`${PREFIX}navbar-nav-scroll`);
  });

  it('does not use Bootstrap or prefixed classes when useBsClasses is false', () => {
    render(
      <NavbarList
        isScrollable
        useBsClasses={false}
        className="only-custom"
        data-testid="navbar-list-nobs"
      />
    );
    const list = screen.getByTestId('navbar-list-nobs');
    expect(list).not.toHaveClass('navbar-nav');
    expect(list).not.toHaveClass(`${PREFIX}navbar-nav`);
    expect(list).not.toHaveClass('navbar-nav-scroll');
    expect(list).not.toHaveClass(`${PREFIX}navbar-nav-scroll`);
    expect(list).toHaveClass('only-custom');
  });
});
