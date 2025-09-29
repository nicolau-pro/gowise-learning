import React, { useEffect } from "react";
import { useAppState } from "appState";
import MetaTags from "metaTags";

import { Section, Row, Col } from "layout";

import ArticleSection from "components/Article";
import Card from "components/Card";
import Step from "components/Step";
import TestimonialSection from "components/Testimonial";

import ArticlesData from "data/Articles";
import CardsData from "data/Cards";
import StepsData from "data/Steps";
import TestimonialsData from "data/Testimonials";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  const Welcome = {
    h1: "Welcome",
    h2: "To GoWise Learning",
    h3: "Here's a brief history of my work in UK, some of the most successful projects and campaigns with the awards they brought alongside the testimonials from the CEOs, team leads and brand/product owners.",
  };

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
        <Section className="home">
          <Row className="my-portrait">
            <Col className="pt-2 pb-8 span-3">
              <h1 className="hero">{Welcome.h1}</h1>
              <h2>{Welcome.h2}</h2>
              <h3 className="mt-2 text-thin">{Welcome.h3}</h3>
            </Col>

            <Col className="span-3" />
          </Row>
        </Section>

        <TestimonialSection data={TestimonialsData[0]} theme={"tertiary"} />

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
        </Section>
      </main>
    </>
  );
}

export default Page;
