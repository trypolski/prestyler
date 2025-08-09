import React from 'react';
import Navbar from './Navbar/Navbar';
import NavbarBrand from './NavbarBrand/NavbarBrand';
import NavbarCollapse from './NavbarCollapse/NavbarCollapse';
import NavbarToggle from './NavbarToggle/NavbarToggle';
import NavbarList from './NavbarList/NavbarList';
import NavbarListItem from './NavbarListItem/NavbarListItem';
import NavbarLink from './NavbarLink/NavbarLink';
import NavbarText from './NavbarText/NavbarText';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    collapseBreakpoint: {
      control: 'select',
      options: ['', 'never', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: 'lg',
    },
    isDark: { control: 'boolean', defaultValue: false },
  },
};

export function FullNavbarExample(args) {
  // Navbar context is handled internally by Navbar
  return (
    <Navbar
      {...args}
      style={{ marginBottom: 32 }}
      // eslint-disable-next-line react/destructuring-assignment
      className={`${args.isDark ? 'bs-bg-dark' : 'bs-bg-body-tertiary'}`}
    >
      <div className="bs-container-fluid">
        <NavbarBrand href="#">Prestyler</NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarList>
            <NavbarListItem>
              <NavbarLink isActive href="#">
                Home
              </NavbarLink>
            </NavbarListItem>
            <NavbarListItem>
              <NavbarLink href="#">Features</NavbarLink>
            </NavbarListItem>
            <NavbarListItem>
              <NavbarLink href="#">Pricing</NavbarLink>
            </NavbarListItem>
            <NavbarText>Navbar text</NavbarText>
          </NavbarList>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
