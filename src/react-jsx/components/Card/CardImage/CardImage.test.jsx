import React from 'react';
import { render, screen } from '@testing-library/react';
import CardImage from './CardImage';

describe('CardImage', () => {
  it('renders with top image class when isBottom is false', () => {
    render(
      <CardImage
        className="my-custom-class"
        src="bottom.jpg"
        alt="Top image"
        data-testid="card-img-bottom"
      />
    );
    const img = screen.getByTestId('card-img-bottom');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Top image');
    const classListArray = img.className.split(' ');
    expect(classListArray).toContain(`${PREFIX}card-img-top`);
    expect(classListArray).not.toContain(`${PREFIX}card-img-bottom`);
    expect(classListArray).toContain('my-custom-class');
  });

  it('renders with bottom image class when isBottom is true', () => {
    render(<CardImage src="custom.jpg" alt="Custom" data-testid="bottom-img" isBottom />);
    const img = screen.getByTestId('bottom-img');
    expect(img.tagName).toBe('IMG');
    const classListArray = img.className.split(' ');
    expect(classListArray).not.toContain(`${PREFIX}card-img-top`);
    expect(classListArray).toContain(`${PREFIX}card-img-bottom`);
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <CardImage
        src="plain.jpg"
        alt="Plain"
        useBsClasses={false}
        data-testid="plain-img"
        width={123}
        height={456}
      />
    );
    const img = screen.getByTestId('plain-img');
    expect(img).toHaveAttribute('width', '123');
    expect(img).toHaveAttribute('height', '456');
    const classListArray = img.className.split(' ');
    expect(classListArray).not.toContain(`${PREFIX}card-img-top`);
    expect(classListArray).not.toContain(`${PREFIX}card-img-bottom`);
  });
});
