import React from 'react';
import {
  BadgePrimary,
  BadgeSecondary,
  BadgeSuccess,
  BadgeDanger,
  BadgeWarning,
  BadgeInfo,
  BadgeLight,
  BadgeDark,
} from './Badges';
import { PrimaryButton } from '../buttons/Buttons';

export default {
  title: 'Components/Badges',
  component: BadgePrimary,
};

const positionRelative = 'bs-position-relative';

export function AllBadges() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexWrap: 'wrap' }}>
      <h4>
        Example heading <BadgePrimary>Primary</BadgePrimary>
      </h4>
      <h4>
        Example heading <BadgeSecondary>Secondary</BadgeSecondary>
      </h4>
      <h4>
        Example heading <BadgeSuccess>Success</BadgeSuccess>
      </h4>
      <h4>
        Example heading <BadgeDanger>Danger</BadgeDanger>
      </h4>
      <h4>
        Example heading <BadgeWarning>Warning</BadgeWarning>
      </h4>
      <h4>
        Example heading <BadgeInfo>Info</BadgeInfo>
      </h4>
      <h4>
        Example heading <BadgeLight>Light</BadgeLight>
      </h4>
      <h4>
        Example heading <BadgeDark>Dark</BadgeDark>
      </h4>
    </div>
  );
}

export function RoundedBadges() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      <h4>
        Example heading <BadgePrimary isRounded>Primary</BadgePrimary>
      </h4>
      <h4>
        Example heading <BadgeSecondary isRounded>Secondary</BadgeSecondary>
      </h4>
      <h4>
        Example heading <BadgeSuccess isRounded>Success</BadgeSuccess>
      </h4>
      <h4>
        Example heading <BadgeDanger isRounded>Danger</BadgeDanger>
      </h4>
      <h4>
        Example heading <BadgeWarning isRounded>Warning</BadgeWarning>
      </h4>
      <h4>
        Example heading <BadgeInfo isRounded>Info</BadgeInfo>
      </h4>
      <h4>
        Example heading <BadgeLight isRounded>Light</BadgeLight>
      </h4>
      <h4>
        Example heading <BadgeDark isRounded>Dark</BadgeDark>
      </h4>
    </div>
  );
}

export function AbsoluteBadges() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flexWrap: 'wrap',
        maxWidth: 160,
      }}
    >
      <PrimaryButton className={positionRelative}>
        Example Absolute{' '}
        <BadgePrimary isRounded isAbsolute>
          99
        </BadgePrimary>
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Absolute{' '}
        <BadgeSecondary isRounded isAbsolute>
          99
        </BadgeSecondary>
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Absolute{' '}
        <BadgeSuccess isRounded isAbsolute>
          99
        </BadgeSuccess>
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Absolute{' '}
        <BadgeDanger isRounded isAbsolute>
          99
        </BadgeDanger>
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Absolute{' '}
        <BadgeWarning isRounded isAbsolute>
          99
        </BadgeWarning>
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Absolute <BadgeInfo isAbsolute>not rounded</BadgeInfo>
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Absolute{' '}
        <BadgeLight isRounded isAbsolute>
          99
        </BadgeLight>
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Absolute <BadgeDark isAbsolute>not rounded</BadgeDark>
      </PrimaryButton>
    </div>
  );
}

export function IndicatorBadges() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flexWrap: 'wrap',
        maxWidth: 180,
      }}
    >
      <PrimaryButton className={positionRelative}>
        Example Indicator <BadgePrimary isIndicator />
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Custom indicator label <BadgeSecondary isIndicator indicatorLabel="Custom label text" />
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Indicator <BadgeSuccess isIndicator />
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Indicator <BadgeDanger isIndicator />
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Indicator <BadgeWarning isIndicator />
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Indicator <BadgeInfo isIndicator />
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Indicator <BadgeLight isIndicator />
      </PrimaryButton>
      <PrimaryButton className={positionRelative}>
        Example Indicator <BadgeDark isIndicator />
      </PrimaryButton>
    </div>
  );
}
