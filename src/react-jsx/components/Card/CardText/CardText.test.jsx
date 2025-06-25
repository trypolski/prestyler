import React from 'react';
import { render, screen } from '@testing-library/react';
import CardText from './CardText';

describe('CardText', () => {
  it('renders with default class and children', () => {
    render(
      <CardText className="custom-class" data-testid="my-card-text">
        Card Header Content
      </CardText>
    );
    const p = screen.getByText('Card Header Content').closest('p');
    expect(p).toBeInTheDocument();
    expect(p.tagName.toLowerCase()).toBe('p');
    expect(p).toHaveClass(`${PREFIX}card-text`);
    expect(p).toHaveClass('custom-class');
    expect(p).toHaveAttribute('data-testid', 'my-card-text');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<CardText useBsClasses={false}>Card Header Content</CardText>);
    const p = screen.getByText('Card Header Content').closest('p');
    expect(p).not.toHaveClass('card-text');
    expect(p).not.toHaveClass(`${PREFIX}card-text`);
  });
});
