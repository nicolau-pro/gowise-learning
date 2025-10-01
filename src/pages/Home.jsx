import React, { useEffect } from "react";
import { useAppState } from "appState";
import MetaTags from "metaTags";
import Paths from "paths";

import { Section, Row, Col } from "layout";
import { JoinClasses } from "utils";
import Button from "atoms/Button";
import Icon from "icons";

import HeroSection from "components/Hero";
import HeroQuoteSection from "components/HeroQuote";
import ArticleSection from "components/Article";
import TestimonialSection from "components/Testimonial";
import Card from "components/Card";
import Step from "components/Step";
import Bullet from "components/Bullet";

import WelcomeData from "data/Welcome";
import ArticlesData from "data/Articles";
import CardsData from "data/Cards";
import StepsData from "data/Steps";
import TestimonialsData from "data/Testimonials";
import BulletsData from "data/Bullets";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="GoWise Learning - Welcome!"
        description="We provide bespoke one-to-one tuition for children with SEND (special educational needs) and SEMH (social, emotional and mental health needs), from mild to profound learning difficulties, across the UK. Our holistic approach builds confidence, supports social and emotional growth, and helps children grow with confidence and thrive academically."
        image="/social/GoWise-Learning.jpg"
        url={Paths.HOME}
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

        {ArticlesData.map((article) => (
          <ArticleSection key={article.title} data={article} />
        ))}

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
