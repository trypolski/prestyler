import React from 'react';
import { render, screen } from '@testing-library/react';
import AlertLink from './AlertLink';

describe('AlertLink', () => {
  it('renders children with correct href, bs and custom classes', () => {
    render(
      <AlertLink href="https://example.com" className="custom-class">
        Click me
      </AlertLink>
    );
    expect(screen.getByRole('link', { name: /click me/i })).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link.className).toContain(`${PREFIX}alert-link`);
    expect(link.className).toContain('custom-class');
  });

  it('does not use prefixed class when useBsClasses is false', () => {
    render(<AlertLink useBsClasses={false}>Link</AlertLink>);
    expect(screen.getByRole('link').className).not.toContain('alert-link');
    expect(screen.getByRole('link').className).not.toContain(`${PREFIX}alert-link`);
  });

  it('passes additional props', () => {
    render(
      <AlertLink data-testid="alert-link" target="_blank">
        Link
      </AlertLink>
    );
    const link = screen.getByTestId('alert-link');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
