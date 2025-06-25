import React from 'react';
import { render, screen } from '@testing-library/react';
import CardTitle from './CardTitle';

describe('CardTitle', () => {
  it('renders with default tag (h5), class, and children', () => {
    render(
      <CardTitle className="custom-class" data-testid="my-card-title" aria-label="labelled-title">
        Card Title Content
      </CardTitle>
    );
    const heading = screen.getByTestId('my-card-title');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h5');
    expect(heading).toHaveClass(`${PREFIX}card-title`);
    expect(heading).toHaveClass('custom-class');
    expect(heading).toHaveTextContent('Card Title Content');
    expect(heading).toHaveAttribute('aria-label', 'labelled-title');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <CardTitle useBsClasses={false} className="custom-class">
        No Prefix
      </CardTitle>
    );
    const heading = screen.getByText('No Prefix');
    expect(heading).toHaveClass('custom-class');
    expect(heading).not.toHaveClass(`${PREFIX}card-title`);
    expect(heading).not.toHaveClass('card-title');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])('renders with tag=%s', (tag) => {
    render(
      <CardTitle tag={tag} data-testid={`title-${tag}`}>
        {tag} Title
      </CardTitle>
    );
    const heading = screen.getByTestId(`title-${tag}`);
    expect(heading.tagName.toLowerCase()).toBe(tag);
    expect(heading).toHaveTextContent(`${tag} Title`);
  });
});
