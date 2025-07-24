import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalTitle from './ModalTitle';

describe('ModalTitle', () => {
  it('renders with default tag (h5), class, and children', () => {
    render(
      <ModalTitle className="custom-class" data-testid="my-modal-title" aria-label="labelled-title">
        Modal Title Content
      </ModalTitle>
    );
    const heading = screen.getByTestId('my-modal-title');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe('h5');
    expect(heading).toHaveClass(`${PREFIX}modal-title`);
    expect(heading).toHaveClass('custom-class');
    expect(heading).toHaveTextContent('Modal Title Content');
    expect(heading).toHaveAttribute('aria-label', 'labelled-title');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <ModalTitle useBsClasses={false} className="custom-class">
        No Prefix
      </ModalTitle>
    );
    const heading = screen.getByText('No Prefix');
    expect(heading).toHaveClass('custom-class');
    expect(heading).not.toHaveClass(`${PREFIX}modal-title`);
    expect(heading).not.toHaveClass('modal-title');
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])('renders with tag=%s', (tag) => {
    render(
      <ModalTitle tag={tag} data-testid={`title-${tag}`}>
        {tag} Title
      </ModalTitle>
    );
    const heading = screen.getByTestId(`title-${tag}`);
    expect(heading.tagName.toLowerCase()).toBe(tag);
    expect(heading).toHaveTextContent(`${tag} Title`);
  });
});
