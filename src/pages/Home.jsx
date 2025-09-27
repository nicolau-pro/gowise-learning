import React, { useEffect } from "react";
import Row from "../components/layout/Row";
import Col from "../components/layout/Col";
import Section from "../components/layout/Section";
import Crosshatch from "../components/decorators/Crosshatch";
import MetaTags from "../components/MetaTags";

import { useAppState } from "../AppStateContext";
import { Link } from "react-router";
import Icon from "../components/atoms/Icon";

import ArticleSection from "../components/molecules/Article";
import Card from "../components/molecules/Card";

import ArticlesData from "../data/Articles";
import CardsData from "../data/Cards";

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
        <Section className="home mobile-hidden">
          <Row className="my-portrait">
            <Col className="pt-2 pb-8 span-3">
              <h1 className="hero">{Welcome.h1}</h1>
              <h2>{Welcome.h2}</h2>
              <h3 className="mt-2 text-thin">{Welcome.h3}</h3>
            </Col>

            <Col className="span-3" />
          </Row>
          <Crosshatch />
        </Section>

        <Section className="home desktop-hidden">
          <Row>
            <Col className="mt-1">
              <h1 className="hero">{Welcome.h1}</h1>
              <h2>{Welcome.h2}</h2>
              <h3 className="mt-2 text-thin">{Welcome.h3}</h3>
            </Col>
          </Row>
          <Row className="my-portrait"></Row>
          <Crosshatch />
        </Section>

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

        <Section className="home-awards">
          <Crosshatch />
          <Row className="pt-6 pb-8 blurred-gradient">
            <Col className="span-4">
              <h2 className="hero">Awards</h2>
              <h3 className="mt-1 text-thin">
                Here's a brief history of my work in the UK, some of the most
                successful projects and campaigns with the awards they brought
                and testimonials from the team leads and product owners.
              </h3>
              <Link
                to="/awards"
                role="button"
                className="mt-2 button-read-more button-outline"
              >
                <h2 className="h3 text-thin">
                  <span>AWARDS </span>
                  <Icon>arrow_forward_ios</Icon>
                </h2>
              </Link>
            </Col>
            <Col />
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
