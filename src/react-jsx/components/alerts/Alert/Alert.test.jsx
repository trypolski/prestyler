import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Alert from './Alert';
import { ALERT_CLASSES } from '../constants';
import AlertLink from '../AlertLink/AlertLink';

describe('Alert', () => {
  Object.entries(ALERT_CLASSES).forEach(([variant, bsClass]) => {
    it(`renders correct classes for variant="${variant}"`, () => {
      render(<Alert variant={variant}>Alert {variant}</Alert>);
      const alert = screen.getByRole('alert');
      expect(alert.className).toContain(`${PREFIX}${bsClass}`);
      expect(alert).toHaveTextContent(`Alert ${variant}`);
    });
  });

  it('applies custom className', () => {
    render(
      <Alert variant="warning" className="custom-class">
        Test alert
      </Alert>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Test alert');
    expect(screen.getByRole('alert').className).toMatch(/custom-class/);
  });

  it('does not use prefixed bootstrap classes when useBsClasses is false', () => {
    render(
      <Alert variant="danger" useBsClasses={false}>
        Alert
      </Alert>
    );
    const alert = screen.getByRole('alert');
    expect(alert.className).not.toContain(ALERT_CLASSES.danger);
    expect(alert.className).not.toContain(`${PREFIX}${ALERT_CLASSES.danger}`);
  });

  it('renders AlertLink as child', () => {
    render(
      <Alert variant="info">
        <AlertLink href="https://example.com">More info</AlertLink>
      </Alert>
    );
    const link = screen.getByRole('link', { name: /more info/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link.className).toContain(`${PREFIX}alert-link`);
  });

  it('renders close button when isToggleable and showCloseButton are true', () => {
    render(
      <Alert isToggleable showCloseButton>
        Alert
      </Alert>
    );
    const closeBtn = screen.getByRole('button');
    expect(closeBtn).toHaveAttribute('aria-label', 'Close');
  });

  it('renders custom closeButtonLabel', () => {
    const onClose = jest.fn();
    render(
      <Alert isToggleable showCloseButton show onClose={onClose} closeButtonLabel="Dismiss">
        Alert
      </Alert>
    );
    const alert = screen.getByRole('alert');
    const closeBtn = screen.getByRole('button');
    expect(alert.className).toContain(`${PREFIX}alert-dismissible`);
    expect(alert.className).toContain(`${PREFIX}fade`);
    expect(alert.className).toContain(`${PREFIX}show`);
    expect(closeBtn).toHaveAttribute('aria-label', 'Dismiss');
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it('does not apply fade/show classes when isToggleable is false', () => {
    render(<Alert show>Alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).not.toContain(`${PREFIX}alert-dismissible`);
    expect(alert.className).not.toContain(`${PREFIX}fade`);
    expect(alert.className).not.toContain(`${PREFIX}show`);
  });
});
