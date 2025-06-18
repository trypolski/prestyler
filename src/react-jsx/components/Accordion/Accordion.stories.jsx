import React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const Template = (args) => (
  <Accordion {...args}>
    <AccordionItem id="1" title="Accordion Item #1">
      <strong>This is the first item's content.</strong> You can put any HTML or React elements here.
      <p>This is the first item's content.</p>
      <p>This is the first item's content.</p>
      <p>This is the first item's content.</p>
      <p>This is the first item's content.</p>
      <p>This is the first item's content.</p>
      <p>This is the first item's content.</p>
      <p>This is the first item's content.</p>
      <p>This is the first item's content.</p>
    </AccordionItem>
    <AccordionItem id="2" title="Accordion Item #2">
      <strong>This is the second item's content.</strong>
    </AccordionItem>
    <AccordionItem id="3" title="Accordion Item #3">
      <strong>This is the third item's content.</strong>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  allowMultiple: false,
};

export const MultipleOpenAllowed = Template.bind({});
MultipleOpenAllowed.args = {
  allowMultiple: true,
};

export const FirstItemOpened = Template.bind({});
FirstItemOpened.args = {
  allowMultiple: false,
  defaultOpenItems: ['2'],
};
