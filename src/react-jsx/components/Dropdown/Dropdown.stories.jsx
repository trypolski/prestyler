import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import DropdownToggle from './DropdownToggle/DropdownToggle';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import DropdownItem from './DropdownItem/DropdownItem';
import DropdownDivider from './DropdownDivider/DropdownDivider';
import DropdownHeader from './DropdownHeader/DropdownHeader';
import { PrimaryButton, SecondaryButton } from '../buttons/Buttons';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export function BasicDropdown() {
  return (
    <Dropdown>
      <DropdownToggle buttonComponent={PrimaryButton}>
        Dropdown Button Very Long Long
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <DropdownHeader>Item Header</DropdownHeader>
        </DropdownItem>
        <DropdownItem isLink href="#action2">
          Another action
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem isLink href="#something">
          Something else here
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export function SplitButton() {
  return (
    <Dropdown isDropdownToggleSplit>
      <SecondaryButton>Split Dropdown</SecondaryButton>
      <DropdownToggle buttonComponent={SecondaryButton} isDropdownToggleSplit />
      <DropdownMenu alignment={['lg-end', 'md-start']}>
        <DropdownItem isLink href="#action1">
          Action
        </DropdownItem>
        <DropdownItem isLink href="#action2">
          Another action
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem isLink href="#something">
          Something else here
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
