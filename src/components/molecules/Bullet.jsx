import React from "react";
import Icon from "icons";
import { JoinClasses } from "utils";

export default function Bullet({ data, theme = "secondary" }) {
  const { icon, text } = data;

  return (
    <div className={JoinClasses(["bullet", `theme-${theme}`])}>
      <div className="icon">
        <span>
          <Icon>{icon}</Icon>
        </span>
      </div>
      <p className="text">{text}</p>
    </div>
  );
}
