import React from 'react';
import { render, screen } from '@testing-library/react';
import CardLink from './CardLink';

describe('CardLink', () => {
  it('renders with card link class and custom classes', () => {
    render(
      <CardLink
        className="my-custom-class"
        href="/example"
        target="_blank"
        data-testid="card-link"
      />
    );
    const link = screen.getByTestId('card-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/example');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link.tagName.toLowerCase()).toBe('a');
    const classListArray = link.className.split(' ');
    expect(classListArray).toContain(`${PREFIX}card-link`);
    expect(classListArray).not.toContain('card-link');
    expect(classListArray).toContain('my-custom-class');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <CardLink
        className="my-custom-class"
        href="/example"
        data-testid="card-link"
        useBsClasses={false}
      />
    );
    const link = screen.getByTestId('card-link');
    const classListArray = link.className.split(' ');
    expect(classListArray).not.toContain(`${PREFIX}card-link`);
    expect(classListArray).not.toContain('card-link');
    expect(classListArray).toContain('my-custom-class');
  });
});
