import React from 'react';
import { render, screen } from '@testing-library/react';
import OffcanvasBody from './OffcanvasBody';

describe('OffcanvasBody', () => {
  it('renders with default class and children', () => {
    render(
      <OffcanvasBody className="custom-class" data-testid="my-offcanvas-body">
        Offcanvas Body Content
      </OffcanvasBody>
    );
    const div = screen.getByText('Offcanvas Body Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}offcanvas-body`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-offcanvas-body');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<OffcanvasBody useBsClasses={false}>Offcanvas Body Content</OffcanvasBody>);
    const div = screen.getByText('Offcanvas Body Content').closest('div');
    expect(div).not.toHaveClass('offcanvas-body');
    expect(div).not.toHaveClass(`${PREFIX}offcanvas-body`);
  });
});
