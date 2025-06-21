import Alert from './Alert/Alert';

export function AlertPrimary(props) {
  return <Alert {...props} variant="primary" />;
}

export function AlertSecondary(props) {
  return <Alert {...props} variant="secondary" />;
}

export function AlertSuccess(props) {
  return <Alert {...props} variant="success" />;
}

export function AlertDanger(props) {
  return <Alert {...props} variant="danger" />;
}

export function AlertWarning(props) {
  return <Alert {...props} variant="warning" />;
}

export function AlertInfo(props) {
  return <Alert {...props} variant="info" />;
}

export function AlertLight(props) {
  return <Alert {...props} variant="light" />;
}

export function AlertDark(props) {
  return <Alert {...props} variant="dark" />;
}
