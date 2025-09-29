import React from "react";
import { Section, Row, Col } from "layout";
import Button from "atoms/Button";

export default function Hero({ data }) {
  return (
    <Section className="hero">
      <Row>
        <Col>
          <h1 className="hero">{data.h1.toUpperCase()}</h1>
          <h2>{data.subtitle}</h2>
          <h3>{data.h3}</h3>
          <Button
            className="cta"
            link={data.button.link}
            theme={data.button.theme}
            text={data.button.text}
          />
        </Col>
      </Row>
    </Section>
  );
}
