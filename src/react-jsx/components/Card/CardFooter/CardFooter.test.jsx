import React from 'react';
import { render, screen } from '@testing-library/react';
import CardFooter from './CardFooter';

describe('CardFooter', () => {
  it('renders with default class and children', () => {
    render(
      <CardFooter className="custom-class" data-testid="my-card-footer">
        Card Footer Content
      </CardFooter>
    );
    const div = screen.getByText('Card Footer Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}card-footer`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-card-footer');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<CardFooter useBsClasses={false}>Card Footer Content</CardFooter>);
    const div = screen.getByText('Card Footer Content').closest('div');
    expect(div).not.toHaveClass('card-footer');
    expect(div).not.toHaveClass(`${PREFIX}card-footer`);
  });
});
