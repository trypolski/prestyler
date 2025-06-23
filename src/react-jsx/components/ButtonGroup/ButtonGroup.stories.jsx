import React from 'react';
import ButtonGroup from './ButtonGroup';
import {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  DangerButton,
  LightButton,
  DarkButton,
} from '../buttons/Buttons';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
};

export function HorizontalButtonGroup() {
  return (
    <ButtonGroup>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SuccessButton>Success</SuccessButton>
      <DangerButton>Danger</DangerButton>
    </ButtonGroup>
  );
}

export function LargeButtonGroup() {
  return (
    <ButtonGroup isLarge>
      <PrimaryButton>Large Primary</PrimaryButton>
      <SecondaryButton>Large Secondary</SecondaryButton>
      <SuccessButton>Large Success</SuccessButton>
    </ButtonGroup>
  );
}

export function SmallButtonGroup() {
  return (
    <ButtonGroup isSmall>
      <LightButton>Small Light</LightButton>
      <DarkButton>Small Dark</DarkButton>
    </ButtonGroup>
  );
}

export function VerticalButtonGroup() {
  return (
    <ButtonGroup isVertical>
      <PrimaryButton>Vertical Primary</PrimaryButton>
      <SecondaryButton>Vertical Secondary</SecondaryButton>
      <DangerButton>Vertical Danger</DangerButton>
    </ButtonGroup>
  );
}
