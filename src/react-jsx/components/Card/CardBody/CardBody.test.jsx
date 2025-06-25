import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from './CardBody';

describe('CardBody', () => {
  it('renders with default class and children', () => {
    render(
      <CardBody className="custom-class" data-testid="my-card-body">
        Card Body Content
      </CardBody>
    );
    const div = screen.getByText('Card Body Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}card-body`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-card-body');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<CardBody useBsClasses={false}>Card Body Content</CardBody>);
    const div = screen.getByText('Card Body Content').closest('div');
    expect(div).not.toHaveClass('card-body');
    expect(div).not.toHaveClass(`${PREFIX}card-body`);
  });
});
