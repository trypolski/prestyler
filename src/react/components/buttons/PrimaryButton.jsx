import React from "react";
import { usePrestylerPrefix } from "../../hooks/usePrestylerPrefix";

export default function({ children, className = "", ...rest }) {
  const prefix = usePrestylerPrefix();
  const fullClassName = `${prefix}btn ${prefix}btn-primary ${className}`.trim();

  return (
    <button className={fullClassName} {...rest}>
      {children}
    </button>
  );
};
