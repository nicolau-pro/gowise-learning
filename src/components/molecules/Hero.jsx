import React from "react";
import { Section, Row, Col } from "layout";
import Button from "atoms/Button";
import { JoinClasses } from "utils";

export default function Hero({ data }) {
  console.log(data);
  return (
    <Section
      className={JoinClasses([
        "hero",
        data.strip ? "sliding-strip" : "no-strip",
      ])}
      style={{
        backgroundImage: `url(/media/${data.strip || data.background})`,
      }}
    >
      <Row className={`theme-${data.theme}`}>
        <Col>
          <h1 className="hero">{data.h1}</h1>
          <h2>{data.subtitle}</h2>
          <h3
            className={data.button ? undefined : "mb-3"}
            dangerouslySetInnerHTML={{ __html: data.h3 }}
          ></h3>
          {data.buttons ? (
            <div className="hero-buttons">
              {data.buttons.map((button) => (
                <Button
                  key={button.text}
                  className="cta"
                  link={button.link}
                  openInNewTab={button.openInNewTab}
                  theme={button.theme}
                  text={button.text}
                />
              ))}
            </div>
          ) : null}

          {data.button ? (
            <Button
              className="cta"
              link={data.button.link}
              openInNewTab={data.button.openInNewTab}
              theme={data.button.theme}
              text={data.button.text}
            />
          ) : null}
        </Col>
      </Row>
    </Section>
  );
}
