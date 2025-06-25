import React from 'react';
import { render, screen } from '@testing-library/react';
import CardHeader from './CardHeader';

describe('CardHeader', () => {
  it('renders with default class and children', () => {
    render(
      <CardHeader className="custom-class" data-testid="my-card-header">
        Card Header Content
      </CardHeader>
    );
    const div = screen.getByText('Card Header Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}card-header`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-card-header');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<CardHeader useBsClasses={false}>Card Header Content</CardHeader>);
    const div = screen.getByText('Card Header Content').closest('div');
    expect(div).not.toHaveClass('card-header');
    expect(div).not.toHaveClass(`${PREFIX}card-header`);
  });
});
