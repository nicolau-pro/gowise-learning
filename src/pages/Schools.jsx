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
        section="Schools and Local Authorities"
        description="Schools and Local Authorities"
        url={Paths.SCHOOLS_AND_LOCAL_AUTORITIES}
      />

      <main>
        <Section>
          <Row>
            <Col>
              <h1 className="hero">Schools and Local Authorities</h1>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
