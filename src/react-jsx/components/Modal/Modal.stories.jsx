import React, { useState } from 'react';
import Modal from './Modal/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    show: { control: 'boolean', defaultValue: false },
    wrapperProps: { control: 'object', defaultValue: { style: {} } },
    dialogProps: { control: 'object', defaultValue: { style: {} } },
    contentProps: { control: 'object', defaultValue: { style: {} } },
  },
};

export function BasicModal(args) {
  const [open, setOpen] = useState(args.show);

  return (
    <div>
      <button type="button" onClick={() => setOpen((prev) => !prev)}>
        Open Modal
      </button>
      <Modal show={open} isFade wrapperProps={{}} dialogProps={{}} contentProps={{}}>
        <div style={{ padding: 24 }}>
          <h3>Modal Title</h3>
          <p>This is a modal content example.</p>
          <button type="button" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
