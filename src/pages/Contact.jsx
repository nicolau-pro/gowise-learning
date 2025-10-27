import React, { useEffect } from 'react';
import { useAppState } from 'appState';
import MetaTags from 'metaTags';
import Paths from 'paths';
import { Link } from 'react-router';
import Icon from 'icons';

import { Section, Row, Col } from 'layout';
import TestimonialSection from 'components/Testimonial';
import ArticleSection from 'components/Article';

import ArticlesData from 'data/Contact/Articles';
import TestimonialsData from 'data/Contact/Testimonials';
import SocialData from 'data/Social';
import ContactData from 'data/Contact';

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  console.log(ContactData);
  return (
    <>
      <MetaTags
        section="Contact"
        description="Contact"
        url={Paths.CONTACT}
        image="/social/GoWise-Learning.jpg"
      />

      <main>
        <Section className="gap-xl-desktop mt-2" style={{ marginBottom: '-6em' }}>
          <Row>
            <Col>
              <h1 className="hero color-primary-highlight">Contact Us</h1>
            </Col>
          </Row>
          <Row>
            <Col className="contact-links">
              <Link to={ContactData.Phone.link} target="_blank" rel="noopener noreferrer">
                <Icon>{ContactData.Phone.icon}</Icon>
                <span className="text">
                  <span className="channel">Phone: </span>
                  <span>{ContactData.Phone.text}</span>
                </span>
              </Link>
              <Link to={ContactData.Email.link} target="_blank" rel="noopener noreferrer">
                <Icon>{ContactData.Email.icon}</Icon>
                <span className="text">
                  <span className="channel">Email: </span>
                  <span>{ContactData.Email.text}</span>
                </span>
              </Link>
              {SocialData.map((item) => (
                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                  <Icon>open_in_new</Icon>
                  <span className="text">
                    <span className="channel">{item.network}: </span>
                    <span>{item.linkSuffix}</span>
                  </span>
                </Link>
              ))}
            </Col>
          </Row>
        </Section>

        <TestimonialSection data={TestimonialsData[0]} />

        <div id="register"></div>

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <Col>
              <h2>Register through our forms:</h2>
            </Col>
          </Row>
        </Section>

        <ArticleSection data={ArticlesData[0]} />

        <ArticleSection data={ArticlesData[1]} />

        <ArticleSection data={ArticlesData[2]} />
      </main>
    </>
  );
}

export default Page;
