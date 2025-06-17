import React, { useRef, useState, useEffect } from 'react';
import { useAccordion } from './Accordion';
import { usePrestylerPrefix } from "../../hooks/usePrestylerPrefix";

export default function({ 
  id,
  title,
  children,
  itemClassName = '',
  titleClassName = '',
  buttonClassName = '',
  collapseClassName = '',
  bodyClassName = '',
  useBsClasses = true,
}) {
  const prefix = usePrestylerPrefix();
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(id);

  const classesByAccordionElement = {
    item: `${prefix}accordion-item`,
    title: `${prefix}accordion-header`,
    button: `${prefix}accordion-button`,
    collapse: `${prefix}accordion-collapse`,
    body: `${prefix}accordion-body`,
  }

  const customClassesOfAccordionElement = {
    item: itemClassName,
    title: titleClassName,
    button: buttonClassName,
    collapse: collapseClassName,
    body: bodyClassName,
  }

  const accordionElements = Object.keys(classesByAccordionElement);
  const fullClassesByElement = accordionElements.reduce((fullClassesObj, elementName) => {
    const customClassesOfElement = customClassesOfAccordionElement[elementName];
    const fullClassName = useBsClasses
      ? `${classesByAccordionElement[elementName]} ${customClassesOfElement}`
      : customClassesOfElement;
    fullClassesObj[elementName] = fullClassName.trim();
    return fullClassesObj;
  }, {});

  return (
    <div className={fullClassesByElement.item}>
      <h2 className={fullClassesByElement.title}>
        <button
          className={`${fullClassesByElement.button} ${isOpen ? '' : `${prefix}collapsed`}`}
          type="button"
          onClick={() => toggleItem(id)}
          aria-expanded={isOpen}
          aria-controls={`panel-${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`panel-${id}`}
        className={`${fullClassesByElement.collapse} ${prefix}collapse ${isOpen ? `${prefix}show` : ''}`}
        aria-labelledby={`heading-${id}`}
      >
        <div className={fullClassesByElement.body}>{children}</div>
      </div>
    </div>
  );
};
