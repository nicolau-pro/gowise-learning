import React, { useEffect } from "react";

import Row from "layout/Row";
import Col from "layout/Col";
import Section from "layout/Section";

import MetaTags from "metaTags";
import ContactLinks from "components/ContactLinks";

import { useAppState } from "appState";

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
        image="/social/contact.jpg"
        url="/contact"
      />

      <main>
        <Section className="contact">
          <Row>
            <Col className="py-3">
              <h1 className="hero shade">Contact</h1>
            </Col>
          </Row>
        </Section>
        <Section className="contact-links">
          <Row className="mobile-hidden">
            <Col className="py-1"></Col>
          </Row>
          <Row>
            <Col className="py-2">
              <ContactLinks />
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
