import React, { useEffect } from 'react';

import CardsData from 'data/Home/Cards';

import Row from 'layout/Row';
import Col from 'layout/Col';
import Section from 'layout/Section';
import MetaTags from 'metaTags';
import Paths from 'paths';
import Card from 'components/Card';

import { useAppState } from 'appState';

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, [setOutletReady]);

  return (
    <>
      <MetaTags
        section="Page Not Found"
        description="Sorry, the page you are looking for doesn't exist or has been moved."
        image="/social/GoWise-Learning.jpg"
        url={Paths.ROOT}
      />

      <main>
        <Section className="gap-xl">
          <Row>
            <Col>
              <h1 className="hero">404</h1>
              <h2>Page Not Found</h2>
              <p className="large">
                Sorry, the page you are looking for doesn't exist or has been moved.
              </p>
            </Col>
          </Row>
        </Section>
        <Section className="gap-xl">
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
