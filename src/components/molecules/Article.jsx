import React from "react";
import { Section, Row, Col } from "layout";

export default function ArticleSection({ data }) {
  const { title, contentSide, theme, paragraphs, image, imageAlt } = data;

  return (
    <Section key={title} className="article">
      <div
        className={`article-body content-side-${contentSide} theme-${theme}`}
      >
        <Row nogap nopadding>
          <Col className="content-wrapper">
            <div className="content">
              <h2>{title}</h2>
              <hr />
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Col>
          <Col className="image-wrapper">
            <img src={`/media/${image}`} alt={imageAlt} />
          </Col>
        </Row>
      </div>
    </Section>
  );
}
