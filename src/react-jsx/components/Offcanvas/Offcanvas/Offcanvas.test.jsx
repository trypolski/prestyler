import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Offcanvas, { OFFCANVAS_BREAKPOINTS, OFFCANVAS_PLACEMENTS } from './Offcanvas';

describe('Offcanvas', () => {
  it('renders with default props, prefixed classes, and passes attributes', () => {
    const { container } = render(
      <Offcanvas data-testid="offcanvas" id="main-oc" className="extra" aria-label="My OC" />
    );
    const oc = screen.getByTestId('offcanvas');
    expect(oc).toBeInTheDocument();
    expect(oc).toHaveClass(`${PREFIX}offcanvas`);
    expect(oc).toHaveClass(`${PREFIX}offcanvas-start`);
    expect(oc).toHaveClass('extra');
    expect(oc).toHaveAttribute('id', 'main-oc');
    expect(oc).toHaveAttribute('aria-label', 'My OC');
    expect(oc).not.toHaveClass(`${PREFIX}show`);
    expect(oc).not.toHaveClass(`${PREFIX}showing`);
    expect(oc).not.toHaveClass(`${PREFIX}hiding`);
    expect(container.querySelector(`.${PREFIX}offcanvas-backdrop`)).toBeNull();
  });

  it('renders backdrop and placement when show=true and closes on backdrop click (if enabled)', () => {
    const onRequestClose = jest.fn();
    const { rerender, container } = render(
      <Offcanvas data-testid="offcanvas" show onRequestClose={onRequestClose} />
    );
    const backdrop = container.querySelector(`.${PREFIX}offcanvas-backdrop`);
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveClass(`${PREFIX}show`);

    const oc = screen.getByTestId('offcanvas');
    expect(oc).toHaveClass(`${PREFIX}offcanvas`);
    expect(oc).toHaveClass(`${PREFIX}offcanvas-start`);
    expect(oc).toHaveClass(`${PREFIX}show`);

    fireEvent.click(backdrop);
    expect(onRequestClose).toHaveBeenCalledTimes(1);

    rerender(
      <Offcanvas
        data-testid="offcanvas"
        show
        onRequestClose={onRequestClose}
        closeOnBackdropClick={false}
      />
    );
    const backdrop2 = container.querySelector(`.${PREFIX}offcanvas-backdrop`);
    fireEvent.click(backdrop2);
    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });

  it('handles transition phases: showing -> show, hiding -> none', async () => {
    const { rerender } = render(<Offcanvas data-testid="offcanvas" show={false} />);
    const oc = screen.getByTestId('offcanvas');

    rerender(<Offcanvas data-testid="offcanvas" show />);
    await waitFor(() => expect(oc.className).toMatch(new RegExp(`\\b${PREFIX}showing\\b`)));
    fireEvent.transitionEnd(oc);
    expect(oc).toHaveClass(`${PREFIX}show`);
    expect(oc).not.toHaveClass(`${PREFIX}showing`);

    rerender(<Offcanvas data-testid="offcanvas" show={false} />);
    await waitFor(() => expect(oc.className).toMatch(new RegExp(`\\b${PREFIX}hiding\\b`)));
    expect(oc).toHaveClass(`${PREFIX}show`);
    fireEvent.transitionEnd(oc);
    expect(oc).not.toHaveClass(`${PREFIX}show`);
    expect(oc).not.toHaveClass(`${PREFIX}hiding`);
  });

  it.each(Object.entries(OFFCANVAS_BREAKPOINTS))(
    'applies breakpoint "%s" -> class "%s"',
    (bp, cls) => {
      render(<Offcanvas data-testid="offcanvas" show breakpoint={bp} />);
      const oc = screen.getByTestId('offcanvas');
      if (bp === '') {
        expect(oc).toHaveClass(`${PREFIX}offcanvas`);
      } else {
        expect(oc).toHaveClass(`${PREFIX}${cls}`);
      }
    }
  );

  it.each(Object.entries(OFFCANVAS_PLACEMENTS))(
    'applies placement "%s" -> class "%s"',
    (pl, cls) => {
      render(<Offcanvas data-testid="offcanvas" show placement={pl} />);
      const oc = screen.getByTestId('offcanvas');
      expect(oc).toHaveClass(`${PREFIX}${cls}`);
    }
  );

  it('does not use BS classes when useBsClasses is false (offcanvas and backdrop)', () => {
    const { container } = render(
      <Offcanvas data-testid="offcanvas" show useBsClasses={false} className="custom" />
    );
    const oc = screen.getByTestId('offcanvas');
    expect(oc).toHaveClass('custom');
    [
      'offcanvas',
      'show',
      'showing',
      'hiding',
      ...Object.values(OFFCANVAS_PLACEMENTS),
      ...Object.values(OFFCANVAS_BREAKPOINTS),
    ].forEach((cls) => {
      expect(oc).not.toHaveClass(cls);
      expect(oc).not.toHaveClass(`${PREFIX}${cls}`);
    });

    // Identify backdrop (the sibling div that is not the offcanvas element)
    const allDivs = Array.from(container.querySelectorAll('div'));
    const backdrop = allDivs.find((el) => el !== oc);
    expect(backdrop).toBeTruthy();
    ['offcanvas-backdrop', 'show'].forEach((cls) => {
      expect(backdrop).not.toHaveClass(cls);
      expect(backdrop).not.toHaveClass(`${PREFIX}${cls}`);
    });
  });

  it('locks and unlocks body scroll based on enableBodyScroll and show', () => {
    const { rerender, unmount } = render(<Offcanvas show enableBodyScroll={false} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(<Offcanvas show enableBodyScroll />);
    expect(document.body.style.overflow).not.toBe('hidden');

    unmount();
    expect(document.body.style.overflow || '').toBe('');
  });
});
