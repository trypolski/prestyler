import React from 'react';
import AccordionItem from '../../Accordion/AccordionItem';
import { useNavbar } from '../Navbar/Navbar';

export default function Collapse(props) {
  const { isOpen } = useNavbar();
  return <AccordionItem {...props} isSingleCollapse isNavCollapse show={isOpen} />;
}
