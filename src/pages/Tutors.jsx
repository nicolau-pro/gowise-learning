import React, { useEffect } from 'react';
import { useAppState } from 'appState';
import MetaTags from 'metaTags';
import Paths from 'paths';

import Row from 'layout/Row';
import Col from 'layout/Col';
import Section from 'layout/Section';
import BulletsRow from 'components/BulletsRow';
import Button from 'atoms/Button';

import HeroSection from 'components/Hero';
import ArticleSection from 'components/Article';
import TestimonialSection from 'components/Testimonial';

import WelcomeData from 'data/Tutors/Welcome';
import ArticlesData from 'data/Tutors/Articles';
import BulletsData from 'data/Tutors/Bullets';
import TestimonialsData from 'data/Tutors/Testimonials';

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

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <Col>
              <h3 className="color-secondary mobile-centered">We welcome individuals who are:</h3>
            </Col>
          </Row>
          <BulletsRow
            data={{
              bullets: BulletsData[0],
              theme: 'secondary',
            }}
          />
        </Section>

        <TestimonialSection data={TestimonialsData[0]} />

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <Col>
              <h3 className="color-primary-highlight mobile-centered">
                To make sure you feel fully supported, we provide:
              </h3>
            </Col>
          </Row>
          <BulletsRow
            data={{
              bullets: BulletsData[1],
              theme: 'primary-light',
            }}
          />
        </Section>

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <h4 className="color-primary mobile-centered">
              Apply now to join our team of holistic tutors and SEN learning support assistants:
            </h4>
          </Row>
          <Row nogap>
            <Col />
            <Col className="text-centered">
              <Button link={Paths.FORMS.Tutors} openInNewTab theme="primary" text="JOIN OUR TEAM" />
            </Col>
            <Col />
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
