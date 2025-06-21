import React, { useState } from 'react';
import {
  AlertPrimary,
  AlertSecondary,
  AlertSuccess,
  AlertDanger,
  AlertWarning,
  AlertInfo,
  AlertLight,
  AlertDark,
} from './Alerts';
import AlertLink from './AlertLink/AlertLink';
import { PrimaryButton } from '../buttons/Buttons';

export default {
  title: 'Components/Alerts',
  component: AlertPrimary,
};

export function AllAlerts() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: 600,
      }}
    >
      <AlertPrimary>This is a primary alert — check it out!</AlertPrimary>
      <AlertSecondary>This is a secondary alert — check it out!</AlertSecondary>
      <AlertSuccess>
        <strong>This is a success alert inside strong</strong> — check it out!
      </AlertSuccess>
      <AlertDanger>This is a danger alert — check it out!</AlertDanger>
      <AlertWarning>This is a warning alert — check it out!</AlertWarning>
      <AlertInfo>This is an info alert — check it out!</AlertInfo>
      <AlertLight>This is a light alert — check it out!</AlertLight>
      <AlertDark>This is a dark alert — check it out!</AlertDark>
    </div>
  );
}

export function AlertWithAlertLink() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: 600,
      }}
    >
      <AlertPrimary>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertPrimary>
      <AlertSecondary>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertSecondary>
      <AlertSuccess>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertSuccess>
      <AlertDanger>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertDanger>
      <AlertWarning>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertWarning>
      <AlertInfo>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertInfo>
      <AlertLight>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertLight>
      <AlertDark>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertDark>
      <AlertDark>
        <a href="/">Alert with regular, not a AlerLink component link</a> — check it out!
      </AlertDark>
    </div>
  );
}

export function AlertToggleable() {
  const [show, setShow] = useState(false);
  const [showSecond, setShowSecond] = useState(true);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: 600,
      }}
    >
      <PrimaryButton onClick={() => setShow(!show)}>Click to show/hide alert</PrimaryButton>
      <AlertPrimary isToggleable show={show}>
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
      </AlertPrimary>
      <AlertPrimary
        showCloseButton
        isToggleable
        show={showSecond}
        onClose={() => setShowSecond(false)}
        closeButtonLabel="Close alert"
      >
        <AlertLink href="#">Alert with link</AlertLink> — check it out!
        <p>
          This alert is toggleable. Click the button above to show or hide it. It uses the{' '}
          <code>isToggleable</code> prop to enable toggling.
        </p>
      </AlertPrimary>
    </div>
  );
}
