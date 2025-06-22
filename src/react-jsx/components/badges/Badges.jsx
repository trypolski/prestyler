import React from 'react';
import Badge from './Badge/Badge';

export function BadgePrimary(props) {
  return <Badge {...props} variant="primary" />;
}

export function BadgeSecondary(props) {
  return <Badge {...props} variant="secondary" />;
}

export function BadgeSuccess(props) {
  return <Badge {...props} variant="success" />;
}

export function BadgeDanger(props) {
  return <Badge {...props} variant="danger" />;
}

export function BadgeWarning(props) {
  return <Badge {...props} variant="warning" />;
}

export function BadgeInfo(props) {
  return <Badge {...props} variant="info" />;
}

export function BadgeLight(props) {
  return <Badge {...props} variant="light" />;
}

export function BadgeDark(props) {
  return <Badge {...props} variant="dark" />;
}
