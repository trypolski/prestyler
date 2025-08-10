import React, { useState } from 'react';
import Offcanvas from './Offcanvas/Offcanvas';
import OffcanvasHeader from './OffcanvasHeader/OffcanvasHeader';
import OffcanvasTitle from './OffcanvasTitle/OffcanvasTitle';
import OffcanvasBody from './OffcanvasBody/OffcanvasBody';
import { PrimaryButton, SecondaryButton, CloseButton } from '../buttons/Buttons';

export default {
  title: 'Components/Offcanvas',
  component: Offcanvas,
  argTypes: {
    show: { control: 'boolean', defaultValue: false },
    breakpoint: {
      control: 'select',
      options: ['', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: '',
    },
    placement: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
      defaultValue: 'start',
    },
    enableBodyScroll: { control: 'boolean', defaultValue: false },
    closeOnBackdropClick: { control: 'boolean', defaultValue: false },
    className: { control: 'text' },
    style: { control: 'object' },
  },
};

export function OffcanvasExample(args) {
  const [open, setOpen] = useState(args.show);

  return (
    <div className="bs-container-fluid" style={{ padding: 16 }}>
      <PrimaryButton onClick={() => setOpen(true)}>Open Offcanvas</PrimaryButton>

      <Offcanvas
        {...args}
        show={open}
        onRequestClose={() => setOpen(false)}
        style={{
          padding: 0,
          background: '#fff',
          border: '1px solid #ddd',
          ...(args.style || {}),
        }}
      >
        <OffcanvasHeader style={{ padding: 16, borderBottom: '1px solid #eee' }}>
          <OffcanvasTitle>Offcanvas</OffcanvasTitle>
          <CloseButton
            aria-label="Close"
            onClick={() => setOpen(false)}
            style={{ marginLeft: 'auto' }}
          />
        </OffcanvasHeader>

        <OffcanvasBody style={{ padding: 16 }}>
          <p style={{ marginBottom: 12 }}>
            Placement: <strong>{args.placement}</strong>
          </p>
          <p style={{ marginBottom: 12 }}>
            Breakpoint: <strong>{args.breakpoint || '(none)'}</strong>
          </p>
          <p style={{ marginBottom: 16 }}>
            Body scroll: <strong>{args.enableBodyScroll ? 'enabled' : 'disabled'}</strong>
          </p>
          <SecondaryButton onClick={() => setOpen(false)}>Close</SecondaryButton>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

OffcanvasExample.args = {
  show: false,
  breakpoint: '',
  placement: 'start',
  enableBodyScroll: false,
  closeOnBackdropClick: false,
  className: '',
  style: {},
};
