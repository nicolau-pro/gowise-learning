import React, { useEffect } from "react";
import { useAppState } from "appState";
import MetaTags from "metaTags";
import Paths from "paths";
import { Contact } from "variables";
import { Link } from "react-router";
import Icon from "icons";

import { Section, Row, Col } from "layout";
import TestimonialSection from "components/Testimonial";
import Card from "components/Card";

import CardsData from "data/Contact/Cards";
import TestimonialsData from "data/Contact/Testimonials";
import SocialData from "data/Social";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="Contact"
        description="Contact"
        url={Paths.CONTACT}
        image="/social/GoWise-Learning.jpg"
      />

      <main>
        <Section className="gap-xl">
          <Row>
            <Col>
              <h1 className="hero">Contact Us</h1>
            </Col>
          </Row>
        </Section>

        <Section>
          <Row>
            <Col>
              <h2 className="h3">Direct contact:</h2>
            </Col>
          </Row>
          <Row>
            <Col className="contact-links">
              <Link to={`tel:${Contact.Phone}`}>
                <Icon>phone</Icon>
                <span className="text">
                  <strong>Phone: </strong>
                  <span>{Contact.PhoneDisplay}</span>
                </span>
              </Link>
              <Link to={`mailto:${Contact.Email}`}>
                <Icon>email</Icon>
                <span className="text">
                  <strong>Email: </strong>
                  <span>{Contact.Email}</span>
                </span>
              </Link>
              {SocialData.map((item) => (
                <Link to={item.link} target="_blank" rel="noopener noreferrer">
                  <Icon>open_in_new</Icon>
                  <span className="text">
                    <strong>{item.network}: </strong>
                    <span>{item.linkSuffix}</span>
                  </span>
                </Link>
              ))}
            </Col>
          </Row>
        </Section>

        <TestimonialSection data={TestimonialsData[0]} />

        <Section className="mt-3">
          <Row>
            <Col>
              <h2 className="h3">Fill the forms:</h2>
            </Col>
          </Row>
        </Section>

        <Section className="mb-6">
          <Row>
            {CardsData.map((item) => (
              <Col key={item.title}>
                <Card data={item} />
              </Col>
            ))}
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
