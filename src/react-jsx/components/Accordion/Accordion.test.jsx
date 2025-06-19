import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

const PREFIX = 'bs-'; // Mock prefix for Bootstrap classes

// Mock usePrestylerPrefix to always return "bs-"
jest.mock('../../hooks/usePrestylerPrefix', () => ({
  usePrestylerPrefix: () => PREFIX,
}));

describe('Accordion integration with AccordionItem', () => {
  it('allows only one open item when allowMultiple is false', async () => {
    render(
      <Accordion allowMultiple={false}>
        <AccordionItem id="a" title="Item A">
          Content A
        </AccordionItem>
        <AccordionItem id="b" title="Item B">
          Content B
        </AccordionItem>
      </Accordion>
    );
    // Open Item A
    fireEvent.click(screen.getByRole('button', { name: 'Item A' }));
    const itemACollapse = screen.getByTestId('accordion-item-collapse-a');
    const itemBCollapse = screen.getByTestId('accordion-item-collapse-b');
    fireEvent.transitionEnd(itemACollapse);
    expect(itemACollapse.className.split(' ')).toContain(`${PREFIX}show`);
    expect(itemBCollapse.className.split(' ')).not.toContain(`${PREFIX}show`);
    // Open Item B - this should close Item A
    fireEvent.click(screen.getByRole('button', { name: 'Item B' }));
    fireEvent.transitionEnd(itemACollapse);
    fireEvent.transitionEnd(itemBCollapse);
    expect(itemACollapse.className.split(' ')).not.toContain(`${PREFIX}show`);
    expect(itemBCollapse.className.split(' ')).toContain(`${PREFIX}show`);
  });

  it('allows multiple open items when allowMultiple is true', () => {
    render(
      <Accordion allowMultiple>
        <AccordionItem id="a" title="Item A">
          Content A
        </AccordionItem>
        <AccordionItem id="b" title="Item B">
          Content B
        </AccordionItem>
      </Accordion>
    );
    const itemACollapse = screen.getByTestId('accordion-item-collapse-a');
    const itemBCollapse = screen.getByTestId('accordion-item-collapse-b');
    // Open Item A and Item B - both should remain open
    fireEvent.click(screen.getByRole('button', { name: 'Item A' }));
    fireEvent.click(screen.getByRole('button', { name: 'Item B' }));
    fireEvent.transitionEnd(itemACollapse);
    fireEvent.transitionEnd(itemBCollapse);
    expect(itemACollapse.className.split(' ')).toContain(`${PREFIX}show`);
    expect(itemBCollapse.className.split(' ')).toContain(`${PREFIX}show`);
    // Close Item A - Item B should remain open
    fireEvent.click(screen.getByRole('button', { name: 'Item A' }));
    fireEvent.transitionEnd(itemACollapse);
    expect(itemACollapse.className.split(' ')).not.toContain(`${PREFIX}show`);
    expect(itemBCollapse.className.split(' ')).toContain(`${PREFIX}show`);
  });

  it('applies custom className to Accordion root', () => {
    render(
      <Accordion className="my-custom-class" data-testid="accordion-wrapper">
        <AccordionItem id="a" title="Item A">
          Content A
        </AccordionItem>
      </Accordion>
    );
    const wrapper = screen.getByTestId('accordion-wrapper');
    expect(wrapper.className).toMatch(/my-custom-class/);
  });

  it('applies Bootstrap class when useBsClasses is true', () => {
    render(
      <Accordion useBsClasses data-testid="accordion-wrapper">
        <AccordionItem id="a" title="Item A">
          Content A
        </AccordionItem>
      </Accordion>
    );
    const wrapper = screen.getByTestId('accordion-wrapper');
    expect(wrapper.className.split(' ')).toContain(`${PREFIX}accordion`);
  });

  it('does not apply Bootstrap class when useBsClasses is false', () => {
    render(
      <Accordion useBsClasses={false} data-testid="accordion-wrapper">
        <AccordionItem id="a" title="Item A">
          Content A
        </AccordionItem>
      </Accordion>
    );
    const wrapper = screen.getByTestId('accordion-wrapper');
    expect(wrapper.className.split(' ')).not.toContain(`${PREFIX}accordion`);
  });

  it('opens items listed in defaultOpenItems', () => {
    render(
      <Accordion defaultOpenItems={['a']}>
        <AccordionItem id="a" title="Item A">
          Content A
        </AccordionItem>
        <AccordionItem id="b" title="Item B">
          Content B
        </AccordionItem>
      </Accordion>
    );
    const itemACollapse = screen.getByTestId('accordion-item-collapse-a');
    const itemBCollapse = screen.getByTestId('accordion-item-collapse-b');
    fireEvent.transitionEnd(itemACollapse);
    fireEvent.transitionEnd(itemBCollapse);
    expect(itemACollapse.className.split(' ')).toContain(`${PREFIX}show`);
    expect(itemBCollapse.className.split(' ')).not.toContain(`${PREFIX}show`);
  });
});
