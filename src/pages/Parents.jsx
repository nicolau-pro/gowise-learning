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

import WelcomeData from "data/Parents/Welcome";
import ArticlesData from "data/Parents/Articles";
import BulletsData from "data/Parents/Bullets";
import TestimonialsData from "data/Parents/Testimonials";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="For Parents"
        description="At GoWise Learning, we know how much you want the very best for your child. As parents, you carry both the joy and the responsibility of making sure your child feels safe, supported, and able to thrive. "
        image="/social/GoWise-Learning.jpg"
        url={`${Paths.ROOT}/${Paths.PARENTS}`}
      />

      <main>
        <HeroSection data={WelcomeData} />

        <ArticleSection data={ArticlesData[0]} />

        <Section>
          <Row>
            <Col>
              <h2>When your child works with us, you can expect:</h2>
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

        <ArticleSection data={ArticlesData[1]} />

        <TestimonialSection data={TestimonialsData[0]} theme={"tertiary"} />

        <Section className="gap-xl">
          <Row>
            <Col />
            <Col className="text-centered span-2">
              <h3>Get in touch to explore how we can support your child:</h3>
            </Col>
            <Col />
          </Row>
          <Row>
            <Col />
            <Col className="text-centered">
              <Button
                link={Paths.CONTACT}
                theme="secondary"
                text="Book a free consultation"
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
