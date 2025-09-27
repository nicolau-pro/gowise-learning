import React from "react";

export default function Card({ data }) {
  const { image, title, theme, details, button } = data;

  return (
    <article
      className="card"
      style={{ backgroundImage: `url(/media/${image})` }}
    >
      <div className="heading">
        <h2 className={`theme-${theme}`}>{title}</h2>
        <hr />
      </div>
      <div className="content">
        <p className="details">{details}</p>
        <a
          href={button.link || "#"}
          role="button"
          className={`theme-${button.theme}`}
        >
          <span>{button.text}</span>
        </a>
      </div>
    </article>
  );
}
