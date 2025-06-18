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
  itemTestId = `accordion-item-${id}`,
  titleTestId = `accordion-item-title-${id}`,
  buttonTestId = `accordion-item-button-${id}`,
  collapseTestId = `accordion-item-collapse-${id}`,
  bodyTestId = `accordion-item-body-${id}`,
  useBsClasses = true,
  onClick = () => {},
}) {
  const prefix = usePrestylerPrefix();
  const { toggleItem, isItemOpen } = useAccordion();
  const collapseRef = useRef(null);
  const [init, setInit] = useState(true);
  const isOpen = isItemOpen(id);

  useEffect(() => {
    const collapseEl = collapseRef.current;
    if (!collapseEl) return;
    if (init && !isOpen) {
      setInit(false);
      return;
    }
    function transitionEndListener() {
      if (isOpen) {
        collapseEl.classList.remove(`${prefix}collapsing`);
        collapseEl.classList.add(`${prefix}collapse`, `${prefix}show`);
        collapseEl.style.height = '';
      } else {
        collapseEl.classList.remove(`${prefix}collapsing`);
        collapseEl.classList.add(`${prefix}collapse`);
        collapseEl.style.height = '';
      }
      collapseEl.removeEventListener('transitionend', transitionEndListener);
    }
    collapseEl.addEventListener('transitionend', transitionEndListener);

    if (isOpen) {
      collapseEl.classList.remove(`${prefix}collapse`);
      collapseEl.classList.add(`${prefix}collapsing`);
      collapseEl.style.height = '0px';
      collapseEl.offsetHeight;
      collapseEl.style.height = collapseEl.scrollHeight + 'px';
    } else {
      collapseEl.style.height = collapseEl.scrollHeight + 'px';
      collapseEl.offsetHeight;
      collapseEl.classList.remove(`${prefix}collapse`, `${prefix}show`);
      collapseEl.classList.add(`${prefix}collapsing`);
      collapseEl.style.height = '0px';
    }
  }, [isOpen]);

  function handleItemClick(e) {
    toggleItem(id);
    onClick(e, id);
  }

  let fullItemClasses = itemClassName;
  let fullTitleClasses = titleClassName;
  let fullButtonClasses = buttonClassName;
  let fullCollapseClasses = collapseClassName;
  let fullBodyClasses = bodyClassName;
  if (useBsClasses) {
    fullItemClasses = `${prefix}accordion-item ${itemClassName}`.trim();
    fullTitleClasses = `${prefix}accordion-header ${titleClassName}`.trim();
    fullButtonClasses = `${prefix}accordion-button ${buttonClassName}`.trim();
    fullCollapseClasses = `${prefix}accordion-collapse ${prefix}collapse ${collapseClassName}`.trim();
    fullBodyClasses = `${prefix}accordion-body ${bodyClassName}`.trim();
  }

  return (
    <div 
      className={fullItemClasses}
      data-testid={itemTestId}
    >
      <h2 
        className={fullTitleClasses}
        data-testid={titleTestId}
      >
        <button
          className={`${fullButtonClasses} ${isOpen ? '' : `${prefix}collapsed`}`}
          type="button"
          onClick={handleItemClick}
          aria-expanded={isOpen}
          aria-controls={`panel-${id}`}
          data-testid={buttonTestId}
        >
          {title}
        </button>
      </h2>
      <div
        id={`panel-${id}`}
        ref={collapseRef}
        className={fullCollapseClasses}
        aria-labelledby={`heading-${id}`}
        data-testid={collapseTestId}
      >
        <div
          className={fullBodyClasses}
          data-testid={bodyTestId}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
