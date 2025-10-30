import React from 'react';

export default function Step({ data }) {
  const { title, details, number, image } = data;

  return (
    <article className="step">
      <div className="content">
        <h3>{title}</h3>
        <img src={image.src} alt={image.alt} />
        <p>{details}</p>
      </div>
      <div className="number">{number}</div>
    </article>
  );
}
