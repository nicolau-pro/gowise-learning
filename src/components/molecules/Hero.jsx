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
      style={
        data.strip
          ? undefined
          : {
              backgroundImage: `url(${data.background.src})`,
            }
      }
    >
      <Row className={`theme-${data.theme}`}>
        <Col>
          {data.h1Mobile ? (
            <h1 className="hero desktop-hidden">{data.h1Mobile}</h1>
          ) : null}

          <h1
            className={JoinClasses([
              "hero",
              data.h1Mobile ? "mobile-hidden" : undefined,
            ])}
          >
            {data.h1}
          </h1>

          {data.h1Mobile ? (
            <h2 className="hero-logo desktop-hidden">
              <img
                alt="GoWise Learning"
                src="/media/logo-monochrome.svg"
                width="280"
                height="93"
              />
            </h2>
          ) : null}

          <h2 className="mobile-hidden">{data.subtitle}</h2>

          <h3
            className={data.button ? undefined : "mb-3"}
            dangerouslySetInnerHTML={{ __html: data.h3 }}
          />
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
            <div className="hero-one-button">
              <Button
                className="cta"
                link={data.button.link}
                openInNewTab={data.button.openInNewTab}
                theme={data.button.theme}
                text={data.button.text}
              />
            </div>
          ) : null}
        </Col>
      </Row>
    </Section>
  );
}
