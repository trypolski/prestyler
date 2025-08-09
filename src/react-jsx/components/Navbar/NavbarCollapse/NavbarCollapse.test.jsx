import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar/Navbar';
import NavbarCollapse from './NavbarCollapse';
import NavbarToggle from '../NavbarToggle/NavbarToggle';

describe('NavbarCollapse', () => {
  it('renders closed by default with prefixed collapse and navbar-collapse classes and custom class', () => {
    render(
      <Navbar>
        <NavbarCollapse id="main" collapseClassName="custom-collapse-class">
          <span data-testid="collapse-child">Content</span>
        </NavbarCollapse>
        <NavbarToggle data-testid="navbar-toggle" />
      </Navbar>
    );

    const collapse = screen.getByTestId('collapse-main');
    expect(collapse).toBeInTheDocument();
    expect(collapse).toHaveClass(`${PREFIX}collapse`);
    expect(collapse).toHaveClass(`${PREFIX}navbar-collapse`);
    expect(collapse).not.toHaveClass(`${PREFIX}accordion-collapse`);
    expect(collapse).toHaveClass('custom-collapse-class');
    expect(screen.getByTestId('collapse-child')).toBeInTheDocument();
  });

  it('opens on toggle: transitions from collapsing to collapse show', () => {
    render(
      <Navbar>
        <NavbarCollapse id="open" />
        <NavbarToggle data-testid="open-toggle" />
      </Navbar>
    );

    const collapse = screen.getByTestId('collapse-open');
    fireEvent.click(screen.getByTestId('open-toggle'));
    expect(collapse).toHaveClass(`${PREFIX}collapsing`);
    expect(collapse).not.toHaveClass(`${PREFIX}collapse`);

    fireEvent.transitionEnd(collapse);
    expect(collapse).toHaveClass(`${PREFIX}collapse`);
    expect(collapse).toHaveClass(`${PREFIX}show`);
    expect(collapse).not.toHaveClass(`${PREFIX}collapsing`);
  });

  it('closes on second toggle: transitions from collapsing to collapse without show', () => {
    render(
      <Navbar>
        <NavbarCollapse id="close" />
        <NavbarToggle data-testid="close-toggle" />
      </Navbar>
    );

    const collapse = screen.getByTestId('collapse-close');

    fireEvent.click(screen.getByTestId('close-toggle'));
    fireEvent.transitionEnd(collapse);
    expect(collapse).toHaveClass(`${PREFIX}collapse`);
    expect(collapse).toHaveClass(`${PREFIX}show`);

    fireEvent.click(screen.getByTestId('close-toggle'));
    expect(collapse).toHaveClass(`${PREFIX}collapsing`);
    expect(collapse).not.toHaveClass(`${PREFIX}show`);
    fireEvent.transitionEnd(collapse);
    expect(collapse).toHaveClass(`${PREFIX}collapse`);
    expect(collapse).not.toHaveClass(`${PREFIX}show`);
  });

  it('does not use Bootstrap classes when useBsClasses is false', () => {
    render(
      <Navbar>
        <NavbarCollapse id="nobs" useBsClasses={false} collapseClassName="no-bs-class" />
        <NavbarToggle data-testid="nobs-toggle" />
      </Navbar>
    );

    const collapse = screen.getByTestId('collapse-nobs');
    expect(collapse).not.toHaveClass('collapse');
    expect(collapse).not.toHaveClass(`${PREFIX}collapse`);
    expect(collapse).not.toHaveClass('navbar-collapse');
    expect(collapse).not.toHaveClass(`${PREFIX}navbar-collapse`);
    expect(collapse).toHaveClass('no-bs-class');
  });
});
