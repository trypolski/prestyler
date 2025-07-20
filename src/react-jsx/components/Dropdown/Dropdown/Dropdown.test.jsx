import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Dropdown from './Dropdown';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownItem from '../DropdownItem/DropdownItem';
import DropdownToggle from '../DropdownToggle/DropdownToggle';
import Button from '../../buttons/Button/Button';

describe('Dropdown', () => {
  it('renders with default dropdown class and children', () => {
    render(
      <Dropdown data-testid="dropdown" id="my-dropdown">
        <DropdownToggle buttonComponent={Button} data-testid="dropdown-toggle">
          Dropdown Button
        </DropdownToggle>
        <DropdownMenu data-testid="dropdown-menu">
          <DropdownItem>Item 1</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const wrapper = screen.getByTestId('dropdown');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(`${PREFIX}dropdown`);
    expect(wrapper).not.toHaveClass(`${PREFIX}btn-group`);
    expect(wrapper).toHaveAttribute('id', 'my-dropdown');
    const dropdownToggle = within(wrapper).getByTestId('dropdown-toggle');
    expect(dropdownToggle).toBeInTheDocument();
    fireEvent.click(dropdownToggle);
    const dropdownMenu = within(wrapper).getByTestId('dropdown-menu');
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenu).not.toHaveAttribute('style');
    expect(dropdownMenu).toHaveClass(`${PREFIX}show`);
    fireEvent.mouseDown(document.body);
    expect(dropdownMenu).not.toHaveClass(`${PREFIX}show`);
  });

  it('applies placement classes for each placement prop', () => {
    const placements = [
      { prop: 'down', className: 'dropdown' },
      { prop: 'top', className: 'dropup' },
      { prop: 'right', className: 'dropend' },
      { prop: 'left', className: 'dropstart' },
    ];
    placements.forEach(({ prop, className }) => {
      render(
        <Dropdown placement={prop} data-testid={`dropdown-${prop}`}>
          <DropdownToggle buttonComponent={Button}>Toggle</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Item</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
      const wrapper = screen.getByTestId(`dropdown-${prop}`);
      expect(wrapper).toHaveClass(`${PREFIX}${className}`);
    });
  });

  it('applies btn-group class when isButtonGroup is true', () => {
    render(
      <Dropdown isButtonGroup data-testid="dropdown-btn-group">
        <DropdownToggle buttonComponent={Button}>Dropdown Button</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const wrapper = screen.getByTestId('dropdown-btn-group');
    expect(wrapper).toHaveClass(`${PREFIX}btn-group`);
    expect(wrapper).toHaveClass(`${PREFIX}dropdown`);
  });

  it('applies btn-group class when isDropdownToggleSplit is true', () => {
    render(
      <Dropdown isDropdownToggleSplit data-testid="dropdown-split">
        <DropdownToggle buttonComponent={Button}>Dropdown Button</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const wrapper = screen.getByTestId('dropdown-split');
    expect(wrapper).toHaveClass(`${PREFIX}btn-group`);
    expect(wrapper).toHaveClass(`${PREFIX}dropdown`);
  });

  it('does not apply dropdown class and placement when useFloatingUI is true', () => {
    render(
      <Dropdown useFloatingUI data-testid="dropdown-floating">
        <DropdownToggle buttonComponent={Button} data-testid="dropdown-toggle">
          Dropdown Button
        </DropdownToggle>
        <DropdownMenu data-testid="dropdown-menu">
          <DropdownItem>Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const wrapper = screen.getByTestId('dropdown-floating');
    expect(wrapper).not.toHaveClass(`${PREFIX}btn-group`);
    expect(wrapper).not.toHaveClass(`${PREFIX}dropdown`);
    fireEvent.click(within(wrapper).getByTestId('dropdown-toggle'));
    const dropdownMenu = within(wrapper).getByTestId('dropdown-menu');
    expect(dropdownMenu).toHaveAttribute('style', expect.stringContaining('position: fixed;'));
  });

  it('does not close dropdown on outside click when autoClose is false', () => {
    render(
      <Dropdown show autoClose={false} data-testid="dropdown-no-close">
        <DropdownToggle buttonComponent={Button} data-testid="dropdown-toggle">
          Dropdown Button
        </DropdownToggle>
        <DropdownMenu data-testid="dropdown-menu">
          <DropdownItem>Item</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const wrapper = screen.getByTestId('dropdown-no-close');
    const dropdownMenu = within(wrapper).getByTestId('dropdown-menu');
    expect(dropdownMenu).toHaveClass(`${PREFIX}show`);
    fireEvent.mouseDown(document.body);
    expect(dropdownMenu).toHaveClass(`${PREFIX}show`);
    fireEvent.click(within(wrapper).getByTestId('dropdown-toggle'));
    expect(dropdownMenu).not.toHaveClass(`${PREFIX}show`);
  });
});
