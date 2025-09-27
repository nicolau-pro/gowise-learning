import React from "react";
import Section from "../layout/Section";
import Row from "../layout/Row";
import Col from "../layout/Col";

export default function ArticleSection({ data }) {
  const { title, contentSide, theme, paragraphs, image, imageAlt } = data;

  return (
    <Section key={title} className="article">
      <article className={`content-side-${contentSide} theme-${theme}`}>
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
      </article>
    </Section>
  );
}
