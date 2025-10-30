import React from 'react';
import { Section, Row } from 'layout';
import Icon from 'icons';
import { JoinClasses } from 'utils';

export default function Testimonial({ className, data }) {
  const { quote, stars, person, theme } = data;
  const { name, title, portrait } = person;

  return (
    <Section className={JoinClasses(['testimonial', `theme-${theme}`, className])}>
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
            {!portrait ? (
              <>
                <h2 className="wide">{quote}</h2>
                <p className="no-portrait">
                  <strong>{name}</strong>
                  {title ? `, ${title}` : null}
                </p>
              </>
            ) : (
              <h2 dangerouslySetInnerHTML={{ __html: quote }} />
            )}
          </div>
          {portrait ? (
            <div className="person">
              <img src={portrait} alt={`Portrait of ${name}, ${title}`} />
              <p className="name">{name}</p>
              {title ? <p className="title">{title}</p> : null}
            </div>
          ) : null}
        </div>
      </Row>
    </Section>
  );
}
