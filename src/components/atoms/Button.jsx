import React from "react";
import { JoinClasses } from "utils";

export default function Button({
  link = "#",
  theme = "primary",
  text,
  className,
}) {
  return (
    <a
      href={link}
      role="button"
      className={JoinClasses([`theme-${theme}`, className])}
    >
      <span>{text}</span>
    </a>
  );
}
