import React, { useEffect } from 'react';
import { Link } from 'react-router';
// import ContactData from 'data/Contact';

import Row from 'layout/Row';
import Col from 'layout/Col';
import Section from 'layout/Section';
import MetaTags from 'metaTags';
import Paths from 'paths';
import Icon from 'icons';

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
              <h1 className="hero">Policies</h1>
              <p>
                <strong>Last Updated: November 2025</strong>
              </p>
            </Col>
          </Row>
        </Section>
        <Section className="mb-6">
          <Row>
            <Col>
              {Object.values(Paths.POLICIES).map(({ title, description, path }) => (
                <div key={path} className="policy-item">
                  <hr />
                  <h2 className="h4">{title}</h2>
                  <p>{description}</p>
                  <a href={`/policies/${path}`}>
                    <Icon className="icon">open_in_new</Icon> <span>{title}</span>
                  </a>
                </div>
              ))}
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
