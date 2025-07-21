import React from 'react';
import DefaulListGroupItem from './ListGroupItemBaseComponent/ListGroupItemBaseComponent';

export function ListGroupItem(props) {
  return <DefaulListGroupItem {...props} />;
}

export function PrimaryListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="primary" />;
}

export function SecondaryListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="secondary" />;
}

export function SuccessListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="success" />;
}

export function DangerListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="danger" />;
}

export function WarningListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="warning" />;
}

export function InfoListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="info" />;
}

export function LightListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="light" />;
}

export function DarkListGroupItem(props) {
  return <DefaulListGroupItem {...props} variant="dark" />;
}
