import React, { createContext, useState, useContext } from 'react';
import { usePrestylerPrefix } from "../../hooks/usePrestylerPrefix";

const AccordionContext = createContext();

export default function({
  children,
  allowMultiple = false,
  className = "",
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
      } else {
        return prevOpenItems.includes(id) ? [] : [id];
      }
    });
  };

  const isItemOpen = (id) => openItems.includes(id);

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, isItemOpen }}>
      <div
        role="presentation"
        {...restProps}
        className={`${useBsClasses ? `${prefix}accordion` : ''} ${className}`.trim()}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => useContext(AccordionContext);
