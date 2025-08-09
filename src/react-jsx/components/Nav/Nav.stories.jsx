import React from 'react';
import Nav from './Nav';
import NavbarListItem from '../Navbar/NavbarListItem/NavbarListItem';
import NavbarLink from '../Navbar/NavbarLink/NavbarLink';

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    tag: {
      control: 'select',
      options: ['nav', 'ul', 'ol'],
      defaultValue: 'nav',
    },
    asTabs: { control: 'boolean', defaultValue: false },
    asPills: { control: 'boolean', defaultValue: false },
    asUnderline: { control: 'boolean', defaultValue: false },
    fill: { control: 'boolean', defaultValue: false },
    justify: { control: 'boolean', defaultValue: false },
    className: { control: 'text' },
  },
};

export function NavExample(args) {
  // eslint-disable-next-line react/no-unstable-nested-components, react/prop-types
  function Items({ tag }) {
    if (tag === 'ul' || tag === 'ol') {
      return (
        <>
          <NavbarListItem>
            <NavbarLink isActive href="#">
              Active
            </NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink href="#">Link</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink
              href="#"
              aria-disabled="true"
              className="disabled"
              onClick={(e) => e.preventDefault()}
            >
              Disabled
            </NavbarLink>
          </NavbarListItem>
        </>
      );
    }

    // tag === 'nav'
    return (
      <>
        <NavbarLink isActive href="#">
          Active
        </NavbarLink>
        <NavbarLink href="#">Link</NavbarLink>
        <NavbarLink href="#" aria-disabled="true" disabled onClick={(e) => e.preventDefault()}>
          Disabled
        </NavbarLink>
      </>
    );
  }

  return (
    <div className="bs-container-fluid" style={{ paddingBlock: 16 }}>
      <Nav {...args}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <Items tag={args.tag} />
      </Nav>
    </div>
  );
}
