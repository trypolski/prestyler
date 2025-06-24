import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

describe('AccordionItem', () => {
  it('renders with id and title from props', () => {
    render(
      <Accordion>
        <AccordionItem id="my-id" title="My Title">
          My Content
        </AccordionItem>
      </Accordion>
    );
    // Button should have correct aria-controls and title
    const button = screen.getByRole('button', { name: 'My Title' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-controls', 'panel-my-id');
    // Collapse panel should have correct id
    const collapse = screen.getByTestId('accordion-item-collapse-my-id');
    expect(collapse).toHaveAttribute('id', 'panel-my-id');
  });

  it('applies custom CSS classes from all className props', () => {
    render(
      <Accordion>
        <AccordionItem
          id="custom"
          title="Custom"
          itemClassName="item-class"
          titleClassName="title-class"
          buttonClassName="button-class"
          collapseClassName="collapse-class"
          bodyClassName="body-class"
        >
          Content
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByTestId('accordion-item-collapse-custom').parentElement).toHaveClass(
      'item-class'
    );
    expect(screen.getByTestId('accordion-item-title-custom')).toHaveClass('title-class');
    expect(screen.getByRole('button', { name: 'Custom' })).toHaveClass('button-class');
    expect(screen.getByTestId('accordion-item-collapse-custom')).toHaveClass('collapse-class');
    expect(screen.getByTestId('accordion-item-body-custom')).toHaveClass('body-class');
  });

  it('applies Bootstrap classes when useBsClasses is true', () => {
    render(
      <Accordion>
        <AccordionItem id="bs" title="BS" useBsClasses>
          Content
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByTestId('accordion-item-bs')).toHaveClass(`${PREFIX}accordion-item`);
    expect(screen.getByTestId('accordion-item-title-bs')).toHaveClass(`${PREFIX}accordion-header`);
    expect(screen.getByTestId('accordion-item-button-bs')).toHaveClass(`${PREFIX}accordion-button`);
    expect(screen.getByTestId('accordion-item-collapse-bs')).toHaveClass(
      `${PREFIX}accordion-collapse`
    );
    expect(screen.getByTestId('accordion-item-body-bs')).toHaveClass(`${PREFIX}accordion-body`);
  });

  it('does not apply Bootstrap classes when useBsClasses is false', () => {
    render(
      <Accordion>
        <AccordionItem id="no-bs" title="NoBS" useBsClasses={false}>
          Content
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByTestId('accordion-item-no-bs').className).not.toMatch(/bs-accordion-item/);
    expect(screen.getByTestId('accordion-item-title-no-bs').className).not.toMatch(
      /bs-accordion-header/
    );
    expect(screen.getByTestId('accordion-item-button-no-bs').className).not.toMatch(
      /bs-accordion-button/
    );
    expect(screen.getByTestId('accordion-item-collapse-no-bs').className).not.toMatch(
      /bs-accordion-collapse/
    );
    expect(screen.getByTestId('accordion-item-body-no-bs').className).not.toMatch(
      /bs-accordion-body/
    );
  });

  it('calls onClick from props when button is clicked', () => {
    const handleClick = jest.fn();
    render(
      <Accordion>
        <AccordionItem id="click" title="ClickMe" onClick={handleClick}>
          Content
        </AccordionItem>
      </Accordion>
    );
    fireEvent.click(screen.getByRole('button', { name: 'ClickMe' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
    // Should be called with event and id
    expect(handleClick.mock.calls[0][1]).toBe('click');
  });
});
