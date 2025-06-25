import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSubtitle from './CardSubtitle';

describe('CardSubtitle', () => {
  it('renders with default tag (h5), class, and children', () => {
    render(
      <CardSubtitle
        className="custom-class"
        data-testid="my-card-subtitle"
        aria-label="labelled-subtitle"
      >
        Card Subtitle Content
      </CardSubtitle>
    );
    const heading = screen.getByTestId('my-card-subtitle');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h5');
    expect(heading).toHaveClass(`${PREFIX}card-subtitle`);
    expect(heading).toHaveClass('custom-class');
    expect(heading).toHaveTextContent('Card Subtitle Content');
    expect(heading).toHaveAttribute('aria-label', 'labelled-subtitle');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <CardSubtitle useBsClasses={false} className="custom-class">
        No Prefix
      </CardSubtitle>
    );
    const heading = screen.getByText('No Prefix');
    expect(heading).toHaveClass('custom-class');
    expect(heading).not.toHaveClass(`${PREFIX}card-subtitle`);
    expect(heading).not.toHaveClass('card-subtitle');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])('renders with tag=%s', (tag) => {
    render(
      <CardSubtitle tag={tag} data-testid={`subtitle-${tag}`}>
        {tag} Subtitle
      </CardSubtitle>
    );
    const heading = screen.getByTestId(`subtitle-${tag}`);
    expect(heading.tagName.toLowerCase()).toBe(tag);
    expect(heading).toHaveTextContent(`${tag} Subtitle`);
  });
});
