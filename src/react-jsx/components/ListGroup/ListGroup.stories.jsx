import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from './ListGroup/ListGroup';
import {
  ListGroupItem,
  PrimaryListGroupItem,
  SecondaryListGroupItem,
  SuccessListGroupItem,
  DangerListGroupItem,
  WarningListGroupItem,
  InfoListGroupItem,
  LightListGroupItem,
  DarkListGroupItem,
} from './ListGroupItem/ListGroupItem';

// Controls for ListGroupItem
const itemArgTypes = {
  isActive: { control: 'boolean', defaultValue: false },
  isLink: { control: 'boolean', defaultValue: false },
  isButton: { control: 'boolean', defaultValue: false },
  isHorizontalEqualWidth: { control: 'boolean', defaultValue: false },
  variant: {
    control: 'select',
    options: ['', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    defaultValue: '',
  },
  disabled: { control: 'boolean', defaultValue: false },
};

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
  argTypes: {
    isFlush: { control: 'boolean', defaultValue: false },
    isNumbered: { control: 'boolean', defaultValue: false },
    isHorizontal: { control: 'boolean', defaultValue: false },
    horizontalViewport: {
      control: 'select',
      options: ['', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: '',
    },
    ...itemArgTypes,
  },
};

const variants = [
  { name: 'Default', Component: ListGroupItem },
  { name: 'Primary', Component: PrimaryListGroupItem },
  { name: 'Secondary', Component: SecondaryListGroupItem },
  { name: 'Success', Component: SuccessListGroupItem },
  { name: 'Danger', Component: DangerListGroupItem },
  { name: 'Warning', Component: WarningListGroupItem },
  { name: 'Info', Component: InfoListGroupItem },
  { name: 'Light', Component: LightListGroupItem },
  { name: 'Dark', Component: DarkListGroupItem },
];

export function AllVariants({
  isActive,
  isLink,
  isButton,
  isHorizontalEqualWidth,
  variant,
  disabled,
  ...args
}) {
  const itemArgs = {
    isActive,
    isLink,
    isButton,
    isHorizontalEqualWidth,
    variant,
    disabled,
  };
  return (
    <ListGroup {...args}>
      {variants.map(({ name, Component }) => (
        <Component key={name} {...itemArgs}>
          {name} List Item
        </Component>
      ))}
    </ListGroup>
  );
}

AllVariants.propTypes = {
  isActive: PropTypes.bool,
  isLink: PropTypes.bool,
  isButton: PropTypes.bool,
  isHorizontalEqualWidth: PropTypes.bool,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

AllVariants.argTypes = itemArgTypes;

export function ListGroupWithLinksButtonsText(args) {
  return (
    <ListGroup {...args}>
      <ListGroupItem isLink href="https://example.com">
        Link List Item
      </ListGroupItem>
      <ListGroupItem isButton>Button List Item</ListGroupItem>
      <ListGroupItem>Plain Text List Item</ListGroupItem>
    </ListGroup>
  );
}

ListGroupWithLinksButtonsText.argTypes = itemArgTypes;
