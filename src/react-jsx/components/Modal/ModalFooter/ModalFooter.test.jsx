import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalFooter from './ModalFooter';

describe('ModalFooter', () => {
  it('renders with default class and children', () => {
    render(
      <ModalFooter className="custom-class" data-testid="my-modal-footer">
        Modal Footer Content
      </ModalFooter>
    );
    const div = screen.getByText('Modal Footer Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}modal-footer`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-modal-footer');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<ModalFooter useBsClasses={false}>Modal Footer Content</ModalFooter>);
    const div = screen.getByText('Modal Footer Content').closest('div');
    expect(div).not.toHaveClass('modal-footer');
    expect(div).not.toHaveClass(`${PREFIX}modal-footer`);
  });
});
