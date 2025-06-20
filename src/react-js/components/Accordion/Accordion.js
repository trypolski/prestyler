import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../hooks/usePrestylerPrefix';

const AccordionContext = createContext();

export default function Accordion({
  children,
  allowMultiple = false,
  className = '',
  useBsClasses = true,
  defaultOpenItems = [],
  ...restProps
}) {
  const prefix = usePrestylerPrefix();
  const [openItems, setOpenItems] = useState(defaultOpenItems);

  const toggleItem = (id) => {
    setOpenItems((prevOpenItems) => {
      if (allowMultiple) {
        return prevOpenItems.includes(id)
          ? prevOpenItems.filter((i) => i !== id)
          : [...prevOpenItems, id];
      }
      return prevOpenItems.includes(id) ? [] : [id];
    });
  };

  const isItemOpen = (id) => openItems.includes(id);

  const contextValue = useMemo(
    () => ({ openItems, toggleItem, isItemOpen }),
    [openItems, allowMultiple]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        role="presentation"
        {...restProps}
        className={`${useBsClasses ? `${prefix}accordion` : ''} ${className}`.trim()}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

Accordion.propTypes = {
  children: PropTypes.node,
  allowMultiple: PropTypes.bool,
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
  defaultOpenItems: PropTypes.arrayOf(PropTypes.any),
};

export const useAccordion = () => useContext(AccordionContext);
