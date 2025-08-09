import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarListItem from './NavbarListItem';

describe('NavbarListItem', () => {
  it('renders as <li> with prefixed nav-item class, custom className, and children', () => {
    render(
      <NavbarListItem
        className="custom-class"
        id="nli-id"
        title="Navbar List Item"
        data-testid="navbar-list-item"
        aria-label="Nav Item"
      >
        <span data-testid="child">Child</span>
      </NavbarListItem>
    );
    const li = screen.getByTestId('navbar-list-item');
    expect(li.tagName).toBe('LI');
    expect(li).toHaveClass(`${PREFIX}nav-item`);
    expect(li).toHaveClass('custom-class');
    expect(li).toHaveAttribute('id', 'nli-id');
    expect(li).toHaveAttribute('title', 'Navbar List Item');
    expect(li).toHaveAttribute('aria-label', 'Nav Item');
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('does not use Bootstrap or prefixed classes when useBsClasses is false', () => {
    render(
      <NavbarListItem
        useBsClasses={false}
        className="only-custom another-class"
        data-testid="navbar-list-item-nobs"
      />
    );
    const li = screen.getByTestId('navbar-list-item-nobs');
    expect(li.tagName).toBe('LI');
    expect(li).not.toHaveClass('nav-item');
    expect(li).not.toHaveClass(`${PREFIX}nav-item`);
    expect(li).toHaveClass('only-custom');
    expect(li).toHaveClass('another-class');
  });

  it('passes through arbitrary props', () => {
    render(
      <NavbarListItem
        data-testid="navbar-list-item-props"
        aria-describedby="desc"
        draggable="true"
      />
    );
    const li = screen.getByTestId('navbar-list-item-props');
    expect(li).toHaveAttribute('aria-describedby', 'desc');
    expect(li).toHaveAttribute('draggable', 'true');
  });
});
