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
    h3: "We provide bespoke one-to-one tuition for children with SEND (special educational needs) and SEMH (social, emotional and mental health needs), from mild to profound learning difficulties, across the UK. Our holistic approach builds confidence, supports social and emotional growth, and helps children grow with confidence and thrive academically.",
    button: {
      link: "/contact",
      theme: "secondary",
      text: "Book a free consultation",
    },
    person: {
      portrait: "anamaria-blanaru.jpg",
      name: "Anamaria Blanaru",
      title: "GoWise Learning CEO",
      strong: "OUR PROMISE:",
      quote:
        "Every child is seen, valued, and supported to reach their full potential, with learning designed around their unique strengths, learning style, needs, and personality.",
    },
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
        <HeroSection data={Welcome} />
        <HeroQuoteSection data={Welcome.person} />

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
