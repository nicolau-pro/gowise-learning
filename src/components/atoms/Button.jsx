import React from 'react';
import { JoinClasses } from 'utils';

export default function Button({
  link = '#',
  openInNewTab,
  theme = 'primary',
  text,
  ariaLabel,
  ariaHidden,
  className,
}) {
  return (
    <a
      href={link}
      role="button"
      className={JoinClasses([`theme-${theme}`, className])}
      aria-label={ariaLabel || text}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      <span aria-hidden={ariaHidden}>{text}</span>
      {ariaHidden && <span className="invisible-text">{ariaLabel}</span>}
    </a>
  );
}
