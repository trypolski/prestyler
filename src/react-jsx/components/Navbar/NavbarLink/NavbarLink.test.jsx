import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarLink from './NavbarLink';

describe('NavbarLink', () => {
  it('renders as anchor with prefixed nav-link class, custom className, href, and children', () => {
    render(
      <NavbarLink
        href="/home"
        className="custom-class"
        id="nav-link-id"
        data-testid="nav-link"
        title="Home Title"
      >
        Home
      </NavbarLink>
    );
    const link = screen.getByTestId('nav-link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveClass(`${PREFIX}nav-link`);
    expect(link).toHaveClass('custom-class');
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveAttribute('id', 'nav-link-id');
    expect(link).toHaveAttribute('title', 'Home Title');
    expect(link).toHaveTextContent('Home');
  });

  it('adds active class and aria-current when isActive is true', () => {
    render(
      <NavbarLink isActive data-testid="nav-link-active" href="/active">
        Active
      </NavbarLink>
    );
    const link = screen.getByTestId('nav-link-active');
    expect(link).toHaveClass(`${PREFIX}nav-link`);
    expect(link).toHaveClass(`${PREFIX}active`);
    expect(link).toHaveAttribute('aria-current', 'page');
    expect(link).toHaveAttribute('href', '/active');
  });

  it('does not use Bootstrap or prefixed classes when useBsClasses is false', () => {
    render(
      <NavbarLink useBsClasses={false} className="only-custom" data-testid="nav-link-nobs">
        No BS
      </NavbarLink>
    );
    const link = screen.getByTestId('nav-link-nobs');
    expect(link).not.toHaveClass('nav-link');
    expect(link).not.toHaveClass(`${PREFIX}nav-link`);
    expect(link).not.toHaveClass('active');
    expect(link).not.toHaveClass(`${PREFIX}active`);
    expect(link).toHaveClass('only-custom');
    expect(link).toHaveTextContent('No BS');
  });

  it('passes through arbitrary props (target, rel, aria-label)', () => {
    render(
      <NavbarLink
        href="https://example.com"
        target="_blank"
        rel="noopener"
        aria-label="Example"
        data-testid="nav-link-props"
      >
        External
      </NavbarLink>
    );
    const link = screen.getByTestId('nav-link-props');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
    expect(link).toHaveAttribute('aria-label', 'Example');
  });
});
