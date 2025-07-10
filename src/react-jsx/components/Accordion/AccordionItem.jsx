import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAccordion } from './Accordion';
import { usePrestylerPrefix } from '../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../utilities/utilities';

const OFFSET_VALUES_HORIZONTAL = {
  style: 'width',
  value: 'offsetWidth',
  scroll: 'scrollWidth',
};

const OFFSET_VALUES_VERTICAL = {
  style: 'height',
  value: 'offsetHeight',
  scroll: 'scrollHeight',
};

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
  isSingleCollapse = false,
  show = false,
  horizontal = false,
  bodyWidth = '',
}) {
  const prefix = usePrestylerPrefix();
  const { toggleItem, isItemOpen } = isSingleCollapse
    ? { toggleItem: () => {}, isItemOpen: () => false }
    : useAccordion();

  const collapseRef = useRef(null);
  const [init, setInit] = useState(true);
  const isOpen = isSingleCollapse ? show : isItemOpen(id);

  const offset = horizontal ? OFFSET_VALUES_HORIZONTAL : OFFSET_VALUES_VERTICAL;

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
      } else {
        collapseEl.classList.remove(`${prefix}collapsing`);
        collapseEl.classList.add(`${prefix}collapse`);
      }
      collapseEl.style[offset.style] = '';
      collapseEl.removeEventListener('transitionend', transitionEndListener);
    }
    collapseEl.addEventListener('transitionend', transitionEndListener);
    if (isOpen) {
      collapseEl.classList.remove(`${prefix}collapse`);
      collapseEl.classList.add(`${prefix}collapsing`);
      collapseEl.style[offset.style] = '0px';
      collapseEl[offset.value]; // eslint-disable-line no-unused-expressions
      collapseEl.style[offset.style] = `${collapseEl[offset.scroll]}px`;
    } else {
      collapseEl.style[offset.style] = `${collapseEl[offset.scroll]}px`;
      collapseEl[offset.value]; // eslint-disable-line no-unused-expressions
      collapseEl.classList.remove(`${prefix}collapse`, `${prefix}show`);
      collapseEl.classList.add(`${prefix}collapsing`);
      collapseEl.style[offset.style] = '0px';
    }
  }, [isOpen]);

  function handleItemClick(e) {
    toggleItem(id);
    onClick(e, id);
  }

  const fullItemClasses = getFullClassName('accordion-item', prefix, useBsClasses, itemClassName);
  const fullTitleClasses = getFullClassName(
    'accordion-header',
    prefix,
    useBsClasses,
    titleClassName
  );
  const fullButtonClasses = getFullClassName(
    'accordion-button',
    prefix,
    useBsClasses,
    buttonClassName
  );
  const fullCollapseClasses = getFullClassName(
    [
      isSingleCollapse ? '' : 'accordion-collapse',
      horizontal ? 'collapse-horizontal' : '',
      'collapse',
    ],
    prefix,
    useBsClasses,
    collapseClassName
  );
  const fullBodyClasses = getFullClassName(
    isSingleCollapse ? '' : 'accordion-body',
    prefix,
    useBsClasses,
    bodyClassName
  );

  function renderCollapse() {
    return (
      <div
        id={isSingleCollapse ? id : `panel-${id}`}
        ref={collapseRef}
        className={fullCollapseClasses}
        aria-labelledby={isSingleCollapse ? undefined : `heading-${id}`}
        data-testid={isSingleCollapse ? `collapse${id ? `-${id}` : ''}` : collapseTestId}
      >
        <div
          className={fullBodyClasses}
          data-testid={isSingleCollapse ? undefined : bodyTestId}
          style={horizontal && bodyWidth ? { width: bodyWidth } : {}}
        >
          {children}
        </div>
      </div>
    );
  }

  if (isSingleCollapse) return renderCollapse();

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
      {renderCollapse()}
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
  isSingleCollapse: PropTypes.bool,
  show: PropTypes.bool,
  horizontal: PropTypes.bool,
  bodyWidth: PropTypes.string,
};
