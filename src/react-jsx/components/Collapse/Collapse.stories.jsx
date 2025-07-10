import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  argTypes: {
    show: {
      control: 'boolean',
      defaultValue: false,
      description: 'Show or hide the collapse content',
    },
    horizontal: {
      control: 'boolean',
      defaultValue: false,
      description: 'Enable horizontal collapse',
    },
    children: {
      control: 'text',
      defaultValue: <p>This is the collapsible content.</p>,
      description: 'Content inside the collapse',
    },
  },
};

export function BasicCollapse({ show: initialShow, ...args }) {
  const [show, setShow] = useState(initialShow);

  return (
    <div>
      <button type="button" onClick={() => setShow((prev) => !prev)} style={{ marginBottom: 16 }}>
        {show ? 'Hide' : 'Show'} Collapse
      </button>
      <Collapse {...args} show={show}>
        <strong>This is the first item&apos;s content.</strong> You can put any HTML or React
        elements here.
        <p>This is the first item&apos;s content.</p>
        <p>This is the first item&apos;s content.</p>
        <p>This is the first item&apos;s content.</p>
        <p>This is the first item&apos;s content.</p>
        <p>This is the first item&apos;s content.</p>
        <p>This is the first item&apos;s content.</p>
        <p>This is the first item&apos;s content.</p>
        <p>This is the first item&apos;s content.</p>
      </Collapse>
    </div>
  );
}

export function HorizontalCollapse({ show: initialShow, ...args }) {
  const [show, setShow] = useState(initialShow);

  return (
    <div>
      <button type="button" onClick={() => setShow((prev) => !prev)} style={{ marginBottom: 16 }}>
        {show ? 'Hide' : 'Show'} Horizontal Collapse
      </button>
      <Collapse {...args} show={show} horizontal bodyWidth={args.bodyWidth}>
        <strong>This is horizontal collapse content.</strong>
        <p>You can put any HTML or React elements here.</p>
      </Collapse>
    </div>
  );
}

HorizontalCollapse.propTypes = {
  show: PropTypes.bool,
  horizontal: PropTypes.bool,
  bodyWidth: PropTypes.string,
  children: PropTypes.node,
};

HorizontalCollapse.args = {
  show: false,
  horizontal: true,
  bodyWidth: '330px',
  children: <p>This is horizontal collapse content.</p>,
};

BasicCollapse.propTypes = {
  show: PropTypes.bool,
  horizontal: PropTypes.bool,
  children: PropTypes.node,
};

BasicCollapse.args = {
  show: false,
  horizontal: false,
  children: <p>This is the collapsible content.</p>,
};
