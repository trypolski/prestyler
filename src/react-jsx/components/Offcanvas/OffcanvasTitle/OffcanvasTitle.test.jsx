import React from 'react';
import { render, screen } from '@testing-library/react';
import OffcanvasTitle from './OffcanvasTitle';

describe('OffcanvasTitle', () => {
  it('renders with default tag (h5), class, and children', () => {
    render(
      <OffcanvasTitle
        className="custom-class"
        data-testid="my-offcanvas-title"
        aria-label="labelled-title"
      >
        Offcanvas Title Content
      </OffcanvasTitle>
    );
    const heading = screen.getByTestId('my-offcanvas-title');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h5');
    expect(heading).toHaveClass(`${PREFIX}offcanvas-title`);
    expect(heading).toHaveClass('custom-class');
    expect(heading).toHaveTextContent('Offcanvas Title Content');
    expect(heading).toHaveAttribute('aria-label', 'labelled-title');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <OffcanvasTitle useBsClasses={false} className="custom-class">
        No Prefix
      </OffcanvasTitle>
    );
    const heading = screen.getByText('No Prefix');
    expect(heading).toHaveClass('custom-class');
    expect(heading).not.toHaveClass(`${PREFIX}modal-title`);
    expect(heading).not.toHaveClass('modal-title');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])('renders with tag=%s', (tag) => {
    render(
      <OffcanvasTitle tag={tag} data-testid={`title-${tag}`}>
        {tag} Title
      </OffcanvasTitle>
    );
    const heading = screen.getByTestId(`title-${tag}`);
    expect(heading.tagName.toLowerCase()).toBe(tag);
    expect(heading).toHaveTextContent(`${tag} Title`);
  });
});
