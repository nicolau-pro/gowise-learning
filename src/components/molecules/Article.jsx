import React from 'react';
import { JoinClasses } from 'utils';
import { Section, Row, Col } from 'layout';
import Button from 'atoms/Button';

export default function ArticleSection({ data, className }) {
  const { title, subtitle, contentSide, theme, paragraphs, image, imageAlt } = data;

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

              {subtitle ? title ? <h4>{subtitle}</h4> : <h3 className="h4">{subtitle}</h3> : null}

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
                    openInNewTab={data.cta.openInNewTab}
                    theme={data.cta.theme}
                    text={data.cta.text}
                  />
                </>
              ) : null}
            </div>
          </Col>
          <Col className="image-wrapper">
            <img src={image.src} alt={image.alt} />
          </Col>
        </Row>
      </div>
    </Section>
  );
}
