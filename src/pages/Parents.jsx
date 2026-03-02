import React, { useEffect } from 'react';
import { useAppState } from 'appState';
import MetaTags from 'metaTags';
import Paths from 'paths';
import ContactData from 'data/Contact';

import Row from 'layout/Row';
import Col from 'layout/Col';
import Section from 'layout/Section';
import Button from 'atoms/Button';
import BulletsRow from 'components/BulletsRow';

import HeroSection from 'components/Hero';
import ArticleSection from 'components/Article';
import TestimonialSection from 'components/Testimonial';

import WelcomeData from 'data/Parents/Welcome';
import ArticlesData from 'data/Parents/Articles';
import BulletsData from 'data/Parents/Bullets';
import TestimonialsData from 'data/Parents/Testimonials';

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, [setOutletReady]);

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

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <Col>
              <h3 className="color-primary-highlight mobile-centered">
                When your child works with us, you can expect:
              </h3>
            </Col>
          </Row>
          <BulletsRow
            data={{
              bullets: BulletsData,
              theme: 'primary-light',
            }}
          />
        </Section>

        <ArticleSection className="mt-6" data={ArticlesData[1]} />

        <TestimonialSection data={TestimonialsData[0]} />

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <h4 className="color-secondary mobile-centered">
              Get in touch to explore how we can support your child:
            </h4>
          </Row>
          <Row nogap>
            <Col />
            <Col className="text-centered span-2">
              <Button
                link={ContactData.Calendy.link}
                theme="secondary"
                text={ContactData.Calendy.button.long}
                className="mb-1"
                openInNewTab
              />
              <h4 className="large text-centered">
                or call <a href={ContactData.Phone.link}>{ContactData.Phone.short}</a>
              </h4>
            </Col>
            <Col />
          </Row>
          <Row nogap>
            <Col>
              <h5 className="large text-centered">{ContactData.Calendy.subtext}</h5>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
