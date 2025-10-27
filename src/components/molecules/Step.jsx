import React from 'react';

export default function Step({ data }) {
  const { title, details, number } = data;

  return (
    <article className="step">
      <div className="content">
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
      <div className="number">{number}</div>
    </article>
  );
}
