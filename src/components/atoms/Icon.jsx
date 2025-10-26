import React from "react";

function Icon({ children, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={
        className
          ? ["material-symbols-sharp", className].join(" ")
          : "material-symbols-sharp"
      }
    >
      {children}
    </span>
  );
}

export default Icon;
