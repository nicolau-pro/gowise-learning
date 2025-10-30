import React from 'react';

export default function Step({ data }) {
  const { title, theme, details, number, image } = data;

  return (
    <article className={`step theme-${theme}`}>
      <div className="content">
        <h3>{title}</h3>
        <img src={image.src} alt={image.alt} />
        <p>{details}</p>
      </div>
      <div className="number">
        <span>{number}</span>
      </div>
    </article>
  );
}
