import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders with default class and children', () => {
    render(
      <Card className="custom-class" data-testid="my-card">
        Card Content
      </Card>
    );
    const div = screen.getByText('Card Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}card`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-card');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<Card useBsClasses={false}>Card Content</Card>);
    const div = screen.getByText('Card Content').closest('div');
    expect(div).not.toHaveClass('card');
    expect(div).not.toHaveClass(`${PREFIX}card`);
  });
});
