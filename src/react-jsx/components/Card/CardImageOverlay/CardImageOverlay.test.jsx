import React from 'react';
import { render, screen } from '@testing-library/react';
import CardImageOverlay from './CardImageOverlay';

describe('CardImageOverlay', () => {
  it('renders with default class and children', () => {
    render(
      <CardImageOverlay className="custom-class" data-testid="my-card-image-overlay">
        Card Image Overlay Content
      </CardImageOverlay>
    );
    const div = screen.getByText('Card Image Overlay Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}card-img-overlay`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-card-image-overlay');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<CardImageOverlay useBsClasses={false}>Card Image Overlay Content</CardImageOverlay>);
    const div = screen.getByText('Card Image Overlay Content').closest('div');
    expect(div).not.toHaveClass('card-img-overlay');
    expect(div).not.toHaveClass(`${PREFIX}card-img-overlay`);
  });
});
