import React from 'react';
import { render, screen } from '@testing-library/react';
import CardGroup from './CardGroup';

describe('CardGroup', () => {
  it('renders with default class and children', () => {
    render(
      <CardGroup className="custom-class" data-testid="my-card-group">
        Card Group Content
      </CardGroup>
    );
    const div = screen.getByText('Card Group Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}card-group`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-card-group');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<CardGroup useBsClasses={false}>Card Group Content</CardGroup>);
    const div = screen.getByText('Card Group Content').closest('div');
    expect(div).not.toHaveClass('card-group');
    expect(div).not.toHaveClass(`${PREFIX}card-group`);
  });
});
