import React, { useEffect } from 'react';
import { Link } from 'react-router';
import ContactData from 'data/Contact';

import Row from 'layout/Row';
import Col from 'layout/Col';
import Section from 'layout/Section';
import MetaTags from 'metaTags';
import Paths from 'paths';

import { useAppState } from 'appState';

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="Privacy Policy and Safaguarding"
        description="At GoWise Learning we take your privacy seriously. We collect and use personal information only to deliver high-quality tutoring and educational support while protecting your rights and
                confidentiality"
        image="/social/GoWise-Learning.jpg"
        url={Paths.PRIVACY_POLICY}
      />

      <main>
        <Section className="gap-xl">
          <Row>
            <Col>
              <h1 className="hero">Privacy Policy</h1>
              <p>
                <strong>Last Updated: October 2025</strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="h3">
                At GoWise Learning, (trading name under Moms Academy Ltd) (“we”, “us”, “our”), we
                take your privacy seriously. We collect and use personal information only to deliver
                high-quality tutoring and educational support while protecting your rights and
                confidentiality. At our core, we exist to support learners, families and educational
                partners with trust, integrity and excellence. Protecting your personal information
                is a serious responsibility we carry with care.
              </h2>
            </Col>
          </Row>
        </Section>

        <hr />
      </main>
    </>
  );
}

export default Page;
