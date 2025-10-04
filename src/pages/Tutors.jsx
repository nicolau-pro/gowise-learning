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

import WelcomeData from "data/Tutors/Welcome";
import ArticlesData from "data/Tutors/Articles";
import BulletsData from "data/Tutors/Bullets";
import BulletsData2 from "data/Tutors/Bullets2";
import TestimonialsData from "data/Tutors/Testimonials";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="For Tutors"
        description="At GoWise Learning, we know that the right tutor or learning support assistant can change a child's life. That's why we are always looking for qualified tutors and SEN learning support assistants who share our passion for making a real difference."
        image="/social/GoWise-Learning.jpg"
        url={`${Paths.ROOT}/${Paths.TUTORS}`}
      />

      <main>
        <HeroSection data={WelcomeData} />

        <ArticleSection data={ArticlesData[0]} />

        <Section>
          <Row>
            <Col>
              <h2>We welcome individuals who are:</h2>
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

        <Section className="mt-4">
          <Row>
            <Col>
              <h2>To make sure you feel fully supported, we provide:</h2>
            </Col>
          </Row>
          <Row>
            {BulletsData2.map((item) => (
              <Col key={item.text}>
                <Bullet data={item} theme="secondary" />
              </Col>
            ))}
          </Row>
        </Section>

        <Section className="gap-xl">
          <Row>
            <Col />
            <Col className="text-centered span-2">
              <h3>
                Apply now to join our team of holistic tutors and SEN learning
                support assistants:
              </h3>
            </Col>
            <Col />
          </Row>
          <Row>
            <Col />
            <Col className="text-centered">
              <Button
                link={Paths.CONTACT}
                theme="primary"
                text="Join our team"
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
