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
      <MetaTags section="Parents" description="Parents" url={Paths.PARENTS} />

      <main>
        <Section>
          <Row>
            <Col>
              <h1 className="hero">Parents</h1>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
