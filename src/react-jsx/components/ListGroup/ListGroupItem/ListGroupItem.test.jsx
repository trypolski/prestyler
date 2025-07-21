import React from 'react';
import { render, screen } from '@testing-library/react';
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
} from './ListGroupItem';

const VARIANTS = [
  { Component: ListGroupItem, name: 'default', expectedClass: `${PREFIX}list-group-item` },
  {
    Component: PrimaryListGroupItem,
    name: 'primary',
    expectedClass: `${PREFIX}list-group-item-primary`,
  },
  {
    Component: SecondaryListGroupItem,
    name: 'secondary',
    expectedClass: `${PREFIX}list-group-item-secondary`,
  },
  {
    Component: SuccessListGroupItem,
    name: 'success',
    expectedClass: `${PREFIX}list-group-item-success`,
  },
  {
    Component: DangerListGroupItem,
    name: 'danger',
    expectedClass: `${PREFIX}list-group-item-danger`,
  },
  {
    Component: WarningListGroupItem,
    name: 'warning',
    expectedClass: `${PREFIX}list-group-item-warning`,
  },
  {
    Component: InfoListGroupItem,
    name: 'info',
    expectedClass: `${PREFIX}list-group-item-info`,
  },
  {
    Component: LightListGroupItem,
    name: 'light',
    expectedClass: `${PREFIX}list-group-item-light`,
  },
  {
    Component: DarkListGroupItem,
    name: 'dark',
    expectedClass: `${PREFIX}list-group-item-dark`,
  },
];

describe('ListGroupItem variants', () => {
  VARIANTS.forEach(({ Component, name, expectedClass }) => {
    it(`renders ${name} variant with correct class`, () => {
      render(<Component data-testid="list-item">Item</Component>);
      const item = screen.getByTestId('list-item');
      expect(item).toHaveClass(`${PREFIX}list-group-item`);
      if (name !== 'default') {
        expect(item).toHaveClass(expectedClass);
      }
    });
  });
});
