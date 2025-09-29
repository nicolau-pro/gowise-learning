import React, { useEffect } from "react";
import { useAppState } from "appState";
import MetaTags from "metaTags";

import { Section, Row, Col } from "layout";
import Button from "atoms/Button";

import HeroSection from "components/Hero";
import HeroQuoteSection from "components/HeroQuote";
import ArticleSection from "components/Article";
import Card from "components/Card";
import Step from "components/Step";
import TestimonialSection from "components/Testimonial";

import WelcomeData from "data/Welcome";
import ArticlesData from "data/Articles";
import CardsData from "data/Cards";
import StepsData from "data/Steps";
import TestimonialsData from "data/Testimonials";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="RADU NICOLAU - Welcome!"
        description="A brief history of my work in the UK, some of the most
                successful projects and campaigns with the awards they brought
                alongside the testimonials from the CEOs, team leads and
                brand/product owners"
        image="/social/radu-nicolau.jpg"
        url="/"
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
                link="/contact"
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
