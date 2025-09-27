import React from "react";

import Section from "../layout/Section";
import Row from "../layout/Row";
import Col from "../layout/Col";

export default function ArticleSection(props) {
  return (
    <Section key={props.article.title} className="article">
      <article
        className={`content-side-${props.article.contentSide} theme-${props.article.theme}`}
      >
        <Row nogap nopadding>
          <Col className="content-wrapper">
            <div className="content">
              <h2>{props.article.title}</h2>
              <hr />
              {props.article.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Col>
          <Col className="image-wrapper">
            <img
              src={`/media/${props.article.image}`}
              alt={props.article.imageAlt}
            />
          </Col>
        </Row>
      </article>
    </Section>
  );
}
