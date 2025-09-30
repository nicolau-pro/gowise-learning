import React from "react";

import Button from "atoms/Button";

export default function Card({ data }) {
  const { image, title, theme, details, button } = data;

  return (
    <div
      className="card-body"
      style={{ backgroundImage: `url(/media/${image})` }}
    >
      <div className="heading">
        <h2 className={`theme-${theme}`}>{title}</h2>
        <hr />
      </div>
      <div className="content">
        <p className="details">{details}</p>
        <Button link={button.link} theme={button.theme} text={button.text} />
      </div>
    </div>
  );
}
