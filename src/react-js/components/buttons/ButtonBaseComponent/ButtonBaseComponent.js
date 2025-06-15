import React from "react";
import { usePrestylerPrefix } from "../../../hooks/usePrestylerPrefix";

export default function({ 
  children,
  className = "",
  useBsClasses = true,
  bsClasses = '',
  isLink = false,
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

  return isLink 
    ? (
      <a className={fullClassName} role="button" {...restProps}>
        {children}
      </a>
    ) : (
      <button className={fullClassName} {...restProps}>
        {children}
      </button>
    );
};
