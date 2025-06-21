import React from 'react';
import DefaultButton from './Button/Button';

export function Button(props) {
  return <DefaultButton variant="default" {...props} />;
}

export function PrimaryButton(props) {
  return <DefaultButton variant="primary" {...props} />;
}

export function SecondaryButton(props) {
  return <DefaultButton variant="secondary" {...props} />;
}

export function SuccessButton(props) {
  return <DefaultButton variant="success" {...props} />;
}

export function DangerButton(props) {
  return <DefaultButton variant="danger" {...props} />;
}

export function WarningButton(props) {
  return <DefaultButton variant="warning" {...props} />;
}

export function InfoButton(props) {
  return <DefaultButton variant="info" {...props} />;
}

export function LightButton(props) {
  return <DefaultButton variant="light" {...props} />;
}

export function DarkButton(props) {
  return <DefaultButton variant="dark" {...props} />;
}

export function LinkButton(props) {
  return <DefaultButton variant="link" {...props} />;
}

export function CloseButton(props) {
  return <DefaultButton variant="close" {...props} />;
}
