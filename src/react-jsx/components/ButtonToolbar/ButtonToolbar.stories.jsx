import React from 'react';
import ButtonToolbar from './ButtonToolbar';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  DangerButton,
  LightButton,
  DarkButton,
} from '../buttons/Buttons';

export default {
  title: 'Components/ButtonToolbar',
  component: ButtonToolbar,
};

export function BasicButtonToolbar() {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="bs-me-4">
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <SuccessButton>Success</SuccessButton>
        <DangerButton>Danger</DangerButton>
      </ButtonGroup>
      <ButtonGroup>
        <DarkButton>Dark</DarkButton>
        <LightButton>Light</LightButton>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
