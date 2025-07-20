import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownToggle from './DropdownToggle';
import { PrimaryButton } from '../../buttons/Buttons';

describe('DropdownToggle', () => {
  it('renders nothing if buttonComponent is not provided', () => {
    render(
      <Dropdown>
        <DropdownToggle />
      </Dropdown>
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders PrimaryButton as toggle and passes props', () => {
    const handleClick = jest.fn();
    render(
      <Dropdown>
        <DropdownToggle
          buttonComponent={PrimaryButton}
          id="my-toggle"
          data-testid="dropdown-toggle"
          className="custom-class"
          onClick={handleClick}
        >
          Toggle
        </DropdownToggle>
      </Dropdown>
    );
    const btn = screen.getByTestId('dropdown-toggle');
    expect(btn).toBeInTheDocument();
    expect(btn.tagName.toLowerCase()).toBe('button');
    expect(btn).toHaveClass('custom-class');
    expect(btn).toHaveClass(`${PREFIX}dropdown-toggle`);
    expect(btn).not.toHaveClass(`${PREFIX}show`);
    expect(btn).toHaveAttribute('id', 'my-toggle');
    expect(btn).toHaveTextContent('Toggle');
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <Dropdown show>
        <DropdownToggle
          buttonComponent={PrimaryButton}
          data-testid="dropdown-toggle"
          isDropdownToggleSplit
          useBsClasses={false}
        >
          Toggle
        </DropdownToggle>
      </Dropdown>
    );
    const btn = screen.getByTestId('dropdown-toggle');
    expect(btn).not.toHaveClass(`${PREFIX}show`);
    expect(btn).not.toHaveClass(`${PREFIX}dropdown-toggle`);
    expect(btn).not.toHaveClass(`${PREFIX}dropdown-toggle-split`);
    expect(btn).not.toHaveClass('show');
    expect(btn).not.toHaveClass('dropdown-toggle');
    expect(btn).not.toHaveClass('dropdown-toggle-split');
  });

  it('passes show prop to buttonComponent if provided', () => {
    render(
      <Dropdown show>
        <DropdownToggle buttonComponent={PrimaryButton} data-testid="dropdown-toggle">
          Toggle
        </DropdownToggle>
      </Dropdown>
    );
    const btn = screen.getByTestId('dropdown-toggle');
    expect(btn).toHaveClass(`${PREFIX}show`);
  });

  it('add dropdown-toggle-split class when split prop is true', () => {
    render(
      <Dropdown show>
        <DropdownToggle
          buttonComponent={PrimaryButton}
          data-testid="dropdown-toggle"
          isDropdownToggleSplit
        >
          Toggle
        </DropdownToggle>
      </Dropdown>
    );
    const btn = screen.getByTestId('dropdown-toggle');
    expect(btn).toHaveClass(`${PREFIX}show`);
    expect(btn).toHaveClass(`${PREFIX}dropdown-toggle`);
    expect(btn).toHaveClass(`${PREFIX}dropdown-toggle-split`);
  });

  it('does not toggle dropdown when disableHookToggle is true', () => {
    render(
      <Dropdown>
        <DropdownToggle
          buttonComponent={PrimaryButton}
          data-testid="dropdown-toggle"
          disableHookToggle
        >
          Toggle
        </DropdownToggle>
      </Dropdown>
    );
    const btn = screen.getByTestId('dropdown-toggle');
    expect(btn).not.toHaveClass(`${PREFIX}show`);
    fireEvent.click(btn);
    expect(btn).not.toHaveClass(`${PREFIX}show`);
  });
});
