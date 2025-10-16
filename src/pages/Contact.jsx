import React, { useEffect } from "react";

import Row from "layout/Row";
import Col from "layout/Col";
import Section from "layout/Section";
import MetaTags from "metaTags";
import Paths from "paths";

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
        url={Paths.CONTACT}
        image="/social/GoWise-Learning.jpg"
      />

      <main>
        <Section>
          <Row>
            <Col>
              <h1 className="hero">Contact</h1>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
