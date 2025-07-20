import React from 'react';
import { render, screen } from '@testing-library/react';
import DropdownMenu from './DropdownMenu';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../DropdownItem/DropdownItem';
import { DROPDOWN_ALIGNMENT_CLASSES } from '../constants';

const ALIGNMENTS = Object.keys(DROPDOWN_ALIGNMENT_CLASSES).filter(Boolean);
const ALIGNMENT_CLASSES = Object.values(DROPDOWN_ALIGNMENT_CLASSES).filter(Boolean);

describe('DropdownMenu', () => {
  it('renders as a ul with dropdown-menu class and children', () => {
    render(
      <Dropdown>
        <DropdownMenu
          data-testid="dropdown-menu"
          id="my-dropdown-menu"
          className="custom-menu-class"
        >
          <DropdownItem isButton data-testid="dropdown-item">
            Item 1
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
    const menu = screen.getByTestId('dropdown-menu');
    expect(menu).toBeInTheDocument();
    expect(menu.tagName.toLowerCase()).toBe('ul');
    expect(menu).toHaveClass('custom-menu-class');
    expect(menu).toHaveClass(`${PREFIX}dropdown-menu`);
    expect(menu).not.toHaveClass('show');
    expect(menu).not.toHaveClass(`${PREFIX}show`);
    expect(menu).toHaveAttribute('id', 'my-dropdown-menu');
    expect(menu).toHaveAttribute('data-bs-popper');
    expect(menu).not.toHaveAttribute('style');
    ALIGNMENT_CLASSES.forEach((cls) => {
      expect(menu).not.toHaveClass(cls);
    });
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <Dropdown show>
        <DropdownMenu useBsClasses={false} alignment={ALIGNMENTS} data-testid="dropdown-menu" />
      </Dropdown>
    );
    const menu = screen.getByTestId('dropdown-menu');
    expect(menu).not.toHaveClass(`${PREFIX}dropdown-menu`);
    expect(menu).not.toHaveClass('dropdown-menu');
    expect(menu).not.toHaveClass(`${PREFIX}${ALIGNMENTS[0]}`);
    expect(menu).not.toHaveClass(ALIGNMENTS[0]);
    expect(menu).not.toHaveClass(`${PREFIX}show`);
    expect(menu).not.toHaveClass('show');
  });

  it('applies dropdown-show class when showDropdown is true', () => {
    render(
      <Dropdown show>
        <DropdownMenu data-testid="dropdown-menu" />
      </Dropdown>
    );
    const menu = screen.getByTestId('dropdown-menu');
    expect(menu).toHaveClass(`${PREFIX}show`);
  });

  it('does not apply dropdown-show class when showDropdown is false', () => {
    render(
      <Dropdown show={false}>
        <DropdownMenu data-testid="dropdown-menu" />
      </Dropdown>
    );
    const menu = screen.getByTestId('dropdown-menu');
    expect(menu).not.toHaveClass(`${PREFIX}show`);
  });

  it('applies alignment class for string alignment prop', () => {
    render(
      <Dropdown show>
        <DropdownMenu alignment="sm-start" data-testid="dropdown-menu" />
      </Dropdown>
    );
    const menu = screen.getByTestId('dropdown-menu');
    expect(menu).toHaveClass(`${PREFIX}dropdown-menu-sm-start`);
  });

  it('applies alignment classes for array alignment prop', () => {
    render(
      <Dropdown>
        <DropdownMenu alignment={ALIGNMENTS} data-testid="dropdown-menu" />
      </Dropdown>
    );
    const menu = screen.getByTestId('dropdown-menu');
    ALIGNMENT_CLASSES.forEach((cls) => {
      expect(menu).not.toHaveClass(cls);
    });
  });
});
