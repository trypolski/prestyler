import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalHeader from './ModalHeader';

describe('ModalHeader', () => {
  it('renders with default class and children', () => {
    render(
      <ModalHeader className="custom-class" data-testid="my-modal-header">
        Modal Header Content
      </ModalHeader>
    );
    const div = screen.getByText('Modal Header Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}modal-header`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-modal-header');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<ModalHeader useBsClasses={false}>Modal Header Content</ModalHeader>);
    const div = screen.getByText('Modal Header Content').closest('div');
    expect(div).not.toHaveClass('modal-header');
    expect(div).not.toHaveClass(`${PREFIX}modal-header`);
  });
});
