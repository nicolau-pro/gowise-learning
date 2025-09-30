import React from "react";
import { Section, Row } from "layout";

export default function HeroQuote({ data }) {
  return (
    <Section className="hero-quote">
      <Row>
        <div className="hero-quote-body">
          <div className="quotation-mark">
            <span>”</span>
          </div>
          <h3 className="quote">
            {data.strong ? <strong>{data.strong} </strong> : null}
            <span>{data.quote}</span>
          </h3>
          <div className="portrait">
            <img
              src={`/media/${data.portrait}`}
              alt={`${data.name}, ${data.title}`}
            />
          </div>
          <div className="person">
            <p className="name">{data.name}</p>
            <p className="title">{data.title}</p>
          </div>
        </div>
      </Row>
    </Section>
  );
}
