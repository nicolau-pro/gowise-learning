import React from "react";
import { Section, Row } from "layout";
import Icon from "icons";

export default function Testimonial({ data, theme }) {
  const { quote, stars, person } = data;
  const { name, title, portrait } = person;

  return (
    <Section className={`testimonial theme-${theme}`}>
      <Row>
        <div className="testimonial-body">
          <div className="quotation-mark">
            <span>”</span>
          </div>
          <div className="content">
            {stars && (
              <div className="stars">
                {Array.from({ length: stars }, (_, i) => (
                  <Icon key={i}>star</Icon>
                ))}
              </div>
            )}
            <h2>{quote}</h2>
          </div>
          <div className="person">
            <img src={portrait} alt={`Portrait of ${name}, ${title}`} />
            <p className="name">{name}</p>
            <p className="title">{title}</p>
          </div>
        </div>
      </Row>
    </Section>
  );
}
