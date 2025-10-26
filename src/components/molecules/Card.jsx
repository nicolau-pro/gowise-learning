import React from "react";

import Button from "atoms/Button";

export default function Card({ data }) {
  const { image, title, subtitle, theme, details, button } = data;

  return (
    <div className="card-body" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="heading">
        <h2 className={`theme-${theme}`}>{title}</h2>
        <h3 className={`theme-${theme}`}>{subtitle}</h3>
        <hr />
      </div>
      <div className="content">
        <p className="details">{details}</p>
        <Button
          link={button.link}
          openInNewTab={button.openInNewTab}
          theme={button.theme}
          text={button.text}
          ariaLabel={button.ariaLabel}
          ariaHidden={true}
        />
      </div>
    </div>
  );
}
