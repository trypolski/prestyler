import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalBody from './ModalBody';

describe('ModalBody', () => {
  it('renders with default class and children', () => {
    render(
      <ModalBody className="custom-class" data-testid="my-modal-body">
        Modal Body Content
      </ModalBody>
    );
    const div = screen.getByText('Modal Body Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}modal-body`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-modal-body');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<ModalBody useBsClasses={false}>Modal Body Content</ModalBody>);
    const div = screen.getByText('Modal Body Content').closest('div');
    expect(div).not.toHaveClass('modal-body');
    expect(div).not.toHaveClass(`${PREFIX}modal-body`);
  });
});
