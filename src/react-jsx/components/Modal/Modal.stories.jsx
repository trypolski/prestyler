/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import Modal from './Modal/Modal';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalTitle from './ModalTitle/ModalTitle';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';
import { SecondaryButton, PrimaryButton, CloseButton } from '../buttons/Buttons';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    show: { control: 'boolean', defaultValue: false },
    isFade: { control: 'boolean', defaultValue: false },
    isScrollable: { control: 'boolean', defaultValue: false },
    isCentered: { control: 'boolean', defaultValue: false },
    size: {
      control: 'select',
      options: ['', 'sm', 'lg', 'xl'],
      defaultValue: '',
    },
    fullScreenSize: {
      control: 'select',
      options: ['', 'all', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: '',
    },
    wrapperProps: { control: 'object', defaultValue: { style: {} } },
    dialogProps: { control: 'object', defaultValue: { style: {} } },
    contentProps: { control: 'object', defaultValue: { style: {} } },
  },
};

export function FullModalExample(args) {
  const [open, setOpen] = useState(args.show);

  return (
    <div>
      <PrimaryButton onClick={() => setOpen(true)}>Open Modal</PrimaryButton>
      <Modal
        {...args}
        show={open}
        onHide={() => setOpen(false)}
        wrapperProps={args.wrapperProps}
        dialogProps={args.dialogProps}
        contentProps={args.contentProps}
      >
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <CloseButton
            aria-label="Close"
            onClick={() => setOpen(false)}
            style={{ marginLeft: 'auto' }}
          />
        </ModalHeader>
        <ModalBody>
          <p>
            This is the <strong>ModalBody</strong> content.
            <br />
            You can put any content here, including forms, text, or other components.
          </p>
        </ModalBody>
        <ModalFooter>
          <SecondaryButton onClick={() => setOpen(false)}>Close</SecondaryButton>
          <PrimaryButton onClick={() => setOpen(false)}>Save changes</PrimaryButton>
        </ModalFooter>
      </Modal>
    </div>
  );
}
