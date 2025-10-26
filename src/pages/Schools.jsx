import React, { useEffect } from "react";
import { useAppState } from "appState";
import MetaTags from "metaTags";
import Paths from "paths";

import Row from "layout/Row";
import Col from "layout/Col";
import Section from "layout/Section";
import Bullet from "components/Bullet";
import Button from "atoms/Button";
import BulletsRow from "../components/molecules/BulletsRow";

import HeroSection from "components/Hero";
import ArticleSection from "components/Article";
import TestimonialSection from "components/Testimonial";

import WelcomeData from "data/Schools/Welcome";
import ArticlesData from "data/Schools/Articles";
import BulletsData from "data/Schools/Bullets";
import TestimonialsData from "data/Schools/Testimonials";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="Partnerships with Schools and Local Authorities"
        description="At GoWise Learning, we believe the best outcomes happen when we work together. Collaboration between families, schools, and local authorities is at the heart of everything we do. By putting each child's wellbeing and academic development at the centre, we make sure support is meaningful, consistent, and effective."
        image="/social/GoWise-Learning.jpg"
        url={`${Paths.ROOT}/${Paths.SCHOOLS_AND_LOCAL_AUTORITIES}`}
      />

      <main>
        <HeroSection data={WelcomeData} />

        <ArticleSection data={ArticlesData[0]} />

        <ArticleSection data={ArticlesData[1]} />

        <Section>
          <Row className="tight-mobile">
            <Col>
              <h3 className="color-tertiary mobile-centered">
                By partnering with us, you gain:
              </h3>
            </Col>
          </Row>
          <BulletsRow
            data={{
              bullets: BulletsData,
              theme: "tertiary",
            }}
          />
        </Section>

        <TestimonialSection data={TestimonialsData[0]} />

        <Section className="gap-xl">
          <Row>
            <h4 className="color-secondary">
              Get in touch to explore how we can support your school or local
              authority, same from the beginning:
            </h4>
          </Row>
          <Row>
            <Col />
            <Col className="text-centered">
              <Button
                link={Paths.FORMS.Schools}
                openInNewTab
                theme="secondary"
                text="Get in touch"
              />
            </Col>
            <Col />
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
