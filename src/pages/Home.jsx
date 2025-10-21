import React, { useEffect } from "react";
import { useAppState } from "appState";
import MetaTags from "metaTags";
import Paths from "paths";

import { Section, Row, Col } from "layout";
// import { JoinClasses } from "utils";
import Button from "atoms/Button";
// import Icon from "icons";

import HeroSection from "components/Hero";
import HeroQuoteSection from "components/HeroQuote";
import ArticleSection from "components/Article";
import TestimonialSection from "components/Testimonial";
import Card from "components/Card";
import Step from "components/Step";
import Bullet from "components/Bullet";

import WelcomeData from "data/Home/Welcome";
import ArticlesData from "data/Home/Articles";
import CardsData from "data/Home/Cards";
import StepsData from "data/Home/Steps";
import TestimonialsData from "data/Home/Testimonials";
import BulletsData from "data/Home/Bullets";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="GoWise Learning"
        description="GoWise Learning is built on the belief that every learner can flourish when they feel calm in their body, confident in their mind and connected to the world around them. Our holistic tutors combine empathy, expertise and genuine care to nurture growth from the inside out, allowing academic progress to follow naturally, as confidence and wellbeing take root."
        url={Paths.ROOT}
        image="/social/GoWise-Learning.jpg"
      />

      <main>
        <HeroSection data={WelcomeData} />

        <HeroQuoteSection data={WelcomeData.person} />

        <Section className="gap-xl">
          <Row>
            {CardsData.map((item) => (
              <Col key={item.title}>
                <Card data={item} />
              </Col>
            ))}
          </Row>
        </Section>

        <ArticleSection data={ArticlesData[0]} />

        <TestimonialSection data={TestimonialsData[0]} theme={"tertiary"} />

        <Section className="gap-xl">
          <Row>
            <h2>When your child works with us, you can expect:</h2>
          </Row>
          <Row>
            {BulletsData.map((item) => (
              <Col key={item.text}>
                <Bullet data={item} theme="secondary" />
              </Col>
            ))}
          </Row>
        </Section>

        <Section className="gap-xl">
          <Row>
            <h2>Easy as 1-2-3</h2>
          </Row>
          <Row>
            {StepsData.map((item) => (
              <Col key={item.number}>
                <Step data={item} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col />
            <Col>
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
