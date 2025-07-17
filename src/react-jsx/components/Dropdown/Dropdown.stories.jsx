import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import DropdownToggle from './DropdownToggle/DropdownToggle';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import DropdownItem from './DropdownItem/DropdownItem';
import DropdownDivider from './DropdownDivider/DropdownDivider';
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
        <DropdownItem href="#action1">Action</DropdownItem>
        <DropdownItem href="#action2">Another action</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#something">Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export function SplitButton() {
  return (
    <Dropdown isDropdownToggleSplit>
      <SecondaryButton>Split Dropdown</SecondaryButton>
      <DropdownToggle buttonComponent={SecondaryButton} isDropdownToggleSplit />
      <DropdownMenu>
        <DropdownItem href="#action1">Action</DropdownItem>
        <DropdownItem href="#action2">Another action</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#something">Something else here</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
