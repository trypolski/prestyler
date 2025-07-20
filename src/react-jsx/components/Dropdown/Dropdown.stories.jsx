import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown/Dropdown';
import DropdownToggle from './DropdownToggle/DropdownToggle';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import DropdownItem from './DropdownItem/DropdownItem';
import DropdownDivider from './DropdownDivider/DropdownDivider';
import DropdownHeader from './DropdownHeader/DropdownHeader';
import { PrimaryButton, SecondaryButton } from '../buttons/Buttons';
import { DROPDOWN_ALIGNMENT_CLASSES } from './constants';

// Floating UI placements for controls
const FLOATING_UI_PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    // Dropdown props
    show: { control: 'boolean', defaultValue: false },
    isDropdownToggleSplit: { control: 'boolean', defaultValue: false },
    useFloatingUI: { control: 'boolean', defaultValue: false },
    isButtonGroup: { control: 'boolean', defaultValue: false },
    placement: { control: 'select', options: FLOATING_UI_PLACEMENTS, defaultValue: 'bottom-start' },
    autoClose: { control: 'boolean', defaultValue: true },
    // DropdownToggle props
    toggleShow: { control: 'boolean', defaultValue: false, name: 'DropdownToggle show' },
    disableHookToggle: {
      control: 'boolean',
      defaultValue: false,
      name: 'DropdownToggle disableHookToggle',
    },
    // DropdownMenu props
    alignment: {
      control: 'select',
      options: Object.keys(DROPDOWN_ALIGNMENT_CLASSES),
      defaultValue: '',
      name: 'DropdownMenu alignment',
    },
    // DropdownItem props (except children, isButton, isText, isLink, href)
    active: { control: 'boolean', defaultValue: false, name: 'DropdownItem active' },
    disabled: { control: 'boolean', defaultValue: false, name: 'DropdownItem disabled' },
    tabIndex: { control: 'number', defaultValue: 0, name: 'DropdownItem tabIndex' },
  },
};

export function BasicDropdown({
  show,
  isDropdownToggleSplit,
  useFloatingUI,
  isButtonGroup,
  placement,
  autoClose,
  toggleShow,
  disableHookToggle,
  alignment,
  active,
  disabled,
  tabIndex,
}) {
  return (
    <Dropdown
      show={show}
      isDropdownToggleSplit={isDropdownToggleSplit}
      useFloatingUI={useFloatingUI}
      isButtonGroup={isButtonGroup}
      placement={placement}
      autoClose={autoClose}
      style={{ display: 'inline-block', marginRight: 32 }}
    >
      <DropdownToggle
        buttonComponent={PrimaryButton}
        show={toggleShow}
        disableHookToggle={disableHookToggle}
      >
        Dropdown Button
      </DropdownToggle>
      <DropdownMenu alignment={alignment}>
        {/* 1. Plain element with DropdownHeader as a child */}
        <DropdownItem active={active} disabled={disabled} tabIndex={tabIndex}>
          <DropdownHeader>Dropdown Header</DropdownHeader>
        </DropdownItem>
        {/* 2. isText true to get <span> */}
        <DropdownItem isText active={active} disabled={disabled} tabIndex={tabIndex}>
          Dropdown Text
        </DropdownItem>
        {/* 3. isLink true with href */}
        <DropdownItem
          isLink
          href="https://example.com"
          active={active}
          disabled={disabled}
          tabIndex={tabIndex}
        >
          Dropdown Link
        </DropdownItem>
        {/* 4. Plain element with DropdownDivider as a child */}
        <DropdownItem active={active} disabled={disabled} tabIndex={tabIndex}>
          <DropdownDivider />
        </DropdownItem>
        {/* 5. isButton to get a button element */}
        <DropdownItem isButton active={active} disabled={disabled} tabIndex={tabIndex}>
          Dropdown Button Item
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export function ButtonGroupDropdown({
  show,
  useFloatingUI,
  placement,
  autoClose,
  toggleShow,
  disableHookToggle,
  alignment,
  active,
  disabled,
  tabIndex,
}) {
  return (
    <Dropdown
      show={show}
      isDropdownToggleSplit
      useFloatingUI={useFloatingUI}
      isButtonGroup
      placement={placement}
      autoClose={autoClose}
      style={{ display: 'inline-block' }}
    >
      <SecondaryButton>Split Dropdown Button Group </SecondaryButton>
      <DropdownToggle
        buttonComponent={SecondaryButton}
        show={toggleShow}
        disableHookToggle={disableHookToggle}
        isDropdownToggleSplit
      />
      <DropdownMenu alignment={alignment}>
        <DropdownItem isActive={active} disabled={disabled} tabIndex={tabIndex}>
          <DropdownHeader>Dropdown Header</DropdownHeader>
        </DropdownItem>
        <DropdownItem isText isActive={active} disabled={disabled} tabIndex={tabIndex}>
          Dropdown Text
        </DropdownItem>
        <DropdownItem
          isLink
          href="https://example.com"
          isActive={active}
          disabled={disabled}
          tabIndex={tabIndex}
        >
          Dropdown Link
        </DropdownItem>
        <DropdownItem isActive={active} disabled={disabled} tabIndex={tabIndex}>
          <DropdownDivider />
        </DropdownItem>
        <DropdownItem isButton isActive={active} disabled={disabled} tabIndex={tabIndex}>
          Dropdown Button Item
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

BasicDropdown.propTypes = {
  show: PropTypes.bool,
  isDropdownToggleSplit: PropTypes.bool,
  useFloatingUI: PropTypes.bool,
  isButtonGroup: PropTypes.bool,
  placement: PropTypes.string,
  autoClose: PropTypes.bool,
  toggleShow: PropTypes.func,
  disableHookToggle: PropTypes.bool,
  alignment: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
};

ButtonGroupDropdown.propTypes = {
  show: PropTypes.bool,
  useFloatingUI: PropTypes.bool,
  placement: PropTypes.string,
  autoClose: PropTypes.bool,
  toggleShow: PropTypes.func,
  disableHookToggle: PropTypes.bool,
  alignment: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
};
