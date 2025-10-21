import React from "react";
import { JoinClasses } from "utils";
import { Section, Row, Col } from "layout";
import Button from "atoms/Button";

export default function ArticleSection({ data }) {
  const {
    title,
    subtitle,
    contentSide,
    className,
    theme,
    paragraphs,
    image,
    imageAlt,
  } = data;

  return (
    <Section key={title} className="article">
      <div
        className={JoinClasses([
          `article-body content-side-${contentSide}`,
          className,
          `theme-${theme}`,
        ])}
      >
        <Row nogap nopadding>
          <Col className="content-wrapper">
            <div className="content">
              {title ? <h3>{title}</h3> : null}

              {subtitle ? <h4>{subtitle}</h4> : null}

              {title || subtitle ? <hr /> : null}

              {paragraphs.map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
              {data.cta ? (
                <>
                  <hr />
                  <Button
                    className="mt-1"
                    link={data.cta.link}
                    theme={data.cta.theme}
                    text={data.cta.text}
                  />
                </>
              ) : null}
            </div>
          </Col>
          <Col className="image-wrapper">
            <img src={image} alt={imageAlt} />
          </Col>
        </Row>
      </div>
    </Section>
  );
}
