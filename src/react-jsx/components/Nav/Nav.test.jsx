import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

describe('Nav', () => {
  it('renders with default props, prefixed nav class, custom class, children, and extra attributes', () => {
    render(
      <Nav className="custom-class" id="my-nav" aria-label="Main nav" data-testid="nav">
        Default Nav Content
      </Nav>
    );
    const nav = screen.getByTestId('nav');
    expect(nav.tagName.toLowerCase()).toBe('nav');
    expect(nav).toHaveClass(`${PREFIX}nav`);
    expect(nav).toHaveClass('custom-class');
    expect(nav).toHaveAttribute('id', 'my-nav');
    expect(nav).toHaveAttribute('aria-label', 'Main nav');
    expect(nav).toHaveTextContent('Default Nav Content');
    expect(nav).not.toHaveClass(`${PREFIX}nav-tabs`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-fill`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-pills`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-underline`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-justified`);
  });

  it('renders as tabs with fill (nav, nav-tabs, nav-fill)', () => {
    render(
      <Nav asTabs fill data-testid="nav-tabs">
        Tabs Nav
      </Nav>
    );
    const nav = screen.getByTestId('nav-tabs');
    expect(nav).toHaveClass(`${PREFIX}nav`);
    expect(nav).toHaveClass(`${PREFIX}nav-tabs`);
    expect(nav).toHaveClass(`${PREFIX}nav-fill`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-pills`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-underline`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-justified`);
  });

  it('renders as pills with justify (nav, nav-pills, nav-justified)', () => {
    render(
      <Nav asPills justify data-testid="nav-pills">
        Pills Nav
      </Nav>
    );
    const nav = screen.getByTestId('nav-pills');
    expect(nav).toHaveClass(`${PREFIX}nav`);
    expect(nav).toHaveClass(`${PREFIX}nav-pills`);
    expect(nav).toHaveClass(`${PREFIX}nav-justified`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-tabs`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-underline`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-fill`);
  });

  it('renders as underline (nav, nav-underline)', () => {
    render(
      <Nav asUnderline data-testid="nav-underline">
        Underline Nav
      </Nav>
    );
    const nav = screen.getByTestId('nav-underline');
    expect(nav).toHaveClass(`${PREFIX}nav`);
    expect(nav).toHaveClass(`${PREFIX}nav-underline`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-tabs`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-pills`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-fill`);
    expect(nav).not.toHaveClass(`${PREFIX}nav-justified`);
  });

  it('does not prefix or include BS classes when useBsClasses is false', () => {
    render(
      <Nav
        useBsClasses={false}
        className="only-custom"
        data-testid="nav-nobs"
        asTabs
        fill
        asPills
        justify
        asUnderline
      >
        No BS Classes
      </Nav>
    );
    const nav = screen.getByTestId('nav-nobs');
    // No Bootstrap or prefixed classes
    expect(nav).not.toHaveClass('nav');
    expect(nav).not.toHaveClass(`${PREFIX}nav`);
    expect(nav).not.toHaveClass('nav-tabs');
    expect(nav).not.toHaveClass(`${PREFIX}nav-tabs`);
    expect(nav).not.toHaveClass('nav-pills');
    expect(nav).not.toHaveClass(`${PREFIX}nav-pills`);
    expect(nav).not.toHaveClass('nav-underline');
    expect(nav).not.toHaveClass(`${PREFIX}nav-underline`);
    expect(nav).not.toHaveClass('nav-fill');
    expect(nav).not.toHaveClass(`${PREFIX}nav-fill`);
    expect(nav).not.toHaveClass('nav-justified');
    expect(nav).not.toHaveClass(`${PREFIX}nav-justified`);
    // Custom class remains and children rendered
    expect(nav).toHaveClass('only-custom');
    expect(nav).toHaveTextContent('No BS Classes');
  });
});
