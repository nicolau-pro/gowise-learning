import React from "react";

export default function Button({ link = "#", theme = "primary", text }) {
  return (
    <a href={link} role="button" className={`theme-${theme}`}>
      <span>{text}</span>
    </a>
  );
}
