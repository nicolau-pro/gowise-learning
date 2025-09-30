import React from "react";
import { JoinClasses } from "utils";

export default function Button({
  link = "#",
  theme = "primary",
  text,
  ariaLabel,
  className,
}) {
  return (
    <a
      href={link}
      role="button"
      className={JoinClasses([`theme-${theme}`, className])}
      aria-label={ariaLabel || text}
    >
      <span>{text}</span>
    </a>
  );
}
