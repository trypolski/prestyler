import React from "react";
import { usePrestylerPrefix } from "../../../hooks/usePrestylerPrefix";

export default function({ children, className = "", useBsClasses = true, ...rest }) {
  const prefix = usePrestylerPrefix();
  const bsClasses = `${prefix}btn ${prefix}btn-primary`;
  const fullClassName = `${useBsClasses ? bsClasses : ''} ${className}`.trim();

  return (
    <button className={fullClassName} {...rest}>
      {children}
    </button>
  );
};
