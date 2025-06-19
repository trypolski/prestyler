import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAccordion } from './Accordion';
import { usePrestylerPrefix } from '../../hooks/usePrestylerPrefix';

export default function AccordionItem({
  id,
  title = '',
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
      collapseEl.offsetHeight; // eslint-disable-line no-unused-expressions
      collapseEl.style.height = `${collapseEl.scrollHeight}px`;
    } else {
      collapseEl.style.height = `${collapseEl.scrollHeight}px`;
      collapseEl.offsetHeight; // eslint-disable-line no-unused-expressions
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
    fullCollapseClasses =
      `${prefix}accordion-collapse ${prefix}collapse ${collapseClassName}`.trim();
    fullBodyClasses = `${prefix}accordion-body ${bodyClassName}`.trim();
  }

  return (
    <div className={fullItemClasses} data-testid={itemTestId}>
      <h2 className={fullTitleClasses} data-testid={titleTestId}>
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
        <div className={fullBodyClasses} data-testid={bodyTestId}>
          {children}
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
  itemClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  collapseClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  itemTestId: PropTypes.string,
  titleTestId: PropTypes.string,
  buttonTestId: PropTypes.string,
  collapseTestId: PropTypes.string,
  bodyTestId: PropTypes.string,
  useBsClasses: PropTypes.bool,
  onClick: PropTypes.func,
};
