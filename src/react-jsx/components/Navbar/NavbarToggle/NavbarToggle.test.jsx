import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar/Navbar';
import NavbarCollapse from '../NavbarCollapse/NavbarCollapse';
import NavbarToggle from './NavbarToggle';

describe('NavbarToggle (with Navbar and NavbarCollapse integration)', () => {
  function setup({
    toggleProps = {},
    collapseProps = { id: 'main' },
    navbarProps = {},
    withChildren = false,
  } = {}) {
    return render(
      <Navbar {...navbarProps}>
        <NavbarToggle
          data-testid="navbar-toggle"
          className="user-class"
          title="Toggle"
          {...toggleProps}
        >
          {withChildren ? <span data-testid="custom-icon">Custom</span> : undefined}
        </NavbarToggle>
        <NavbarCollapse {...collapseProps}>
          <div data-testid="collapse-child">Collapse content</div>
        </NavbarCollapse>
      </Navbar>
    );
  }

  it('renders closed by default with prefixed classes and default icon', () => {
    setup();
    const btn = screen.getByTestId('navbar-toggle');
    expect(btn.tagName).toBe('BUTTON');
    expect(btn).toHaveClass(`${PREFIX}navbar-toggler`);
    expect(btn).toHaveClass(`${PREFIX}collapsed`);
    expect(btn).toHaveClass('user-class');
    expect(btn).toHaveAttribute('title', 'Toggle');
    expect(btn).toHaveAttribute('aria-expanded', 'false');

    const icon = btn.querySelector('span');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass(`${PREFIX}navbar-toggler-icon`);

    const collapse = screen.getByTestId('collapse-main');
    expect(collapse).toBeInTheDocument();
    expect(collapse).toHaveClass(`${PREFIX}collapse`);
    expect(collapse).toHaveClass(`${PREFIX}navbar-collapse`);
    expect(collapse).not.toHaveClass(`${PREFIX}show`);
    expect(screen.getByTestId('collapse-child')).toBeInTheDocument();
  });

  it('opens on click and integrates with NavbarCollapse transition classes', () => {
    setup();
    const btn = screen.getByTestId('navbar-toggle');
    const collapse = screen.getByTestId('collapse-main');

    fireEvent.click(btn);

    // Button reflects open state immediately
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    expect(btn).toHaveClass(`${PREFIX}navbar-toggler`);
    expect(btn).not.toHaveClass(`${PREFIX}collapsed`);

    // During transition
    expect(collapse).toHaveClass(`${PREFIX}collapsing`);
    expect(collapse).not.toHaveClass(`${PREFIX}collapse ${PREFIX}show`);

    // After transition ends
    fireEvent.transitionEnd(collapse);
    expect(collapse).toHaveClass(`${PREFIX}collapse`);
    expect(collapse).toHaveClass(`${PREFIX}show`);
    expect(collapse).not.toHaveClass(`${PREFIX}collapsing`);
  });

  it('closes on second click and clears show after transition', () => {
    setup();
    const btn = screen.getByTestId('navbar-toggle');
    const collapse = screen.getByTestId('collapse-main');

    // Open first
    fireEvent.click(btn);
    fireEvent.transitionEnd(collapse);
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    expect(collapse).toHaveClass(`${PREFIX}collapse`, `${PREFIX}show`);

    // Close
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'false');
    expect(collapse).toHaveClass(`${PREFIX}collapsing`);
    expect(collapse).not.toHaveClass(`${PREFIX}show`);
    fireEvent.transitionEnd(collapse);
    expect(collapse).toHaveClass(`${PREFIX}collapse`);
    expect(collapse).not.toHaveClass(`${PREFIX}show`);
  });

  it('renders custom children instead of default icon and appends custom className', () => {
    setup({ withChildren: true });
    const btn = screen.getByTestId('navbar-toggle');

    // Custom child present
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();

    // Default icon should not be auto-rendered when custom children provided
    const defaultIcon = btn.querySelector('span:not([data-testid="custom-icon"])');
    // If there is any other span, ensure it isn't the toggler icon class
    if (defaultIcon) {
      expect(defaultIcon).not.toHaveClass(`${PREFIX}navbar-toggler-icon`);
      expect(defaultIcon).not.toHaveClass('navbar-toggler-icon');
    }

    // Class list includes user class and prefixed base class
    expect(btn).toHaveClass('user-class');
    expect(btn).toHaveClass(`${PREFIX}navbar-toggler`);
  });

  it('does not use Bootstrap or prefixed classes when useBsClasses is false', () => {
    setup({ toggleProps: { useBsClasses: false, 'data-testid': 'navbar-toggle-nobs' } });
    const btn = screen.getByTestId('navbar-toggle-nobs');

    expect(btn).not.toHaveClass('navbar-toggler');
    expect(btn).not.toHaveClass(`${PREFIX}navbar-toggler`);
    expect(btn).not.toHaveClass('collapsed');
    expect(btn).not.toHaveClass(`${PREFIX}collapsed`);
    expect(btn).toHaveClass('user-class');

    // Default icon rendered without BS or prefixed classes
    const icon = btn.querySelector('span');
    expect(icon).toBeInTheDocument();
    expect(icon).not.toHaveClass('navbar-toggler-icon');
    expect(icon).not.toHaveClass(`${PREFIX}navbar-toggler-icon`);
  });
});
