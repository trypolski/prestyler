import React, { createContext, useState, useContext } from 'react';
import { usePrestylerPrefix } from "../../hooks/usePrestylerPrefix";

const AccordionContext = createContext();

export default function({ 
  children,
  allowMultiple = false,
  className = "",
  useBsClasses = true,
}) {
  const prefix = usePrestylerPrefix();
  const [openItems, setOpenItems] = useState([]);

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

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div 
        className={`${useBsClasses ? `${prefix}accordion` : ''} ${className}`.trim()} 
        role="presentation"
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => useContext(AccordionContext);
