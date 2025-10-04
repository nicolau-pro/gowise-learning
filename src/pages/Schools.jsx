import React, { useEffect } from "react";
import { useAppState } from "appState";
import MetaTags from "metaTags";
import Paths from "paths";

import Row from "layout/Row";
import Col from "layout/Col";
import Section from "layout/Section";
import Bullet from "components/Bullet";
import Button from "atoms/Button";

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
          <Row>
            <Col>
              <h2>By partnering with us, you gain:</h2>
            </Col>
          </Row>
          <Row>
            {BulletsData.map((item) => (
              <Col key={item.text}>
                <Bullet data={item} theme="secondary" />
              </Col>
            ))}
          </Row>
        </Section>

        <TestimonialSection data={TestimonialsData[0]} theme={"tertiary"} />

        <Section className="gap-xl">
          <Row>
            <Col />
            <Col className="text-centered span-2">
              <h3>
                Get in touch to explore how we can support your school or local
                authority - same form from the beginning:
              </h3>
            </Col>
            <Col />
          </Row>
          <Row>
            <Col />
            <Col className="text-centered">
              <Button
                link={Paths.CONTACT}
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
