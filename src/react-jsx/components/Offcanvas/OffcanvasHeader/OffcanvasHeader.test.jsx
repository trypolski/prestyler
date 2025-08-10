import React from 'react';
import { render, screen } from '@testing-library/react';
import OffcanvasHeader from './OffcanvasHeader';

describe('OffcanvasHeader', () => {
  it('renders with default class and children', () => {
    render(
      <OffcanvasHeader className="custom-class" data-testid="my-offcanvas-header">
        Offcanvas Header Content
      </OffcanvasHeader>
    );
    const div = screen.getByText('Offcanvas Header Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}offcanvas-header`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-offcanvas-header');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(<OffcanvasHeader useBsClasses={false}>Offcanvas Header Content</OffcanvasHeader>);
    const div = screen.getByText('Offcanvas Header Content').closest('div');
    expect(div).not.toHaveClass('offcanvas-header');
    expect(div).not.toHaveClass(`${PREFIX}offcanvas-header`);
  });
});
