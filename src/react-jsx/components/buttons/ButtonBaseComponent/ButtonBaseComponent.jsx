import React from "react";
import { usePrestylerPrefix } from "../../../hooks/usePrestylerPrefix";

export default function({ 
  children,
  className = "",
  useBsClasses = true,
  bsClasses = '',
  ...restProps
}) {
  const prefix = usePrestylerPrefix();
  const prefixedBsClasses = bsClasses 
    ? bsClasses
        .split(' ')
        .map(bsClass => `${prefix}${bsClass}`)
        .join(' ')
    : '';
  const fullClassName = `${useBsClasses ? prefixedBsClasses : ''} ${className}`.trim();

  return (
    <button className={fullClassName} {...restProps}>
      {children}
    </button>
  );
};
