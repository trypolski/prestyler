import React from 'react';
import AccordionItem from '../Accordion/AccordionItem';

export default function Collapse(props) {
  return <AccordionItem {...props} isSingleCollapse />;
}
