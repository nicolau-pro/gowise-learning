import React, { useEffect } from 'react';
import { useAppState } from 'appState';
import MetaTags from 'metaTags';
import Paths from 'paths';

import { Section, Row, Col } from 'layout';
// import { JoinClasses } from "utils";
import Button from 'atoms/Button';
// import Icon from "icons";

import HeroSection from 'components/Hero';
import HeroQuoteSection from 'components/HeroQuote';
import ArticleSection from 'components/Article';
import TestimonialSection from 'components/Testimonial';
import Card from 'components/Card';
import Step from 'components/Step';
import BulletsRow from 'components/BulletsRow';

import WelcomeData from 'data/Home/Welcome';
import ArticlesData from 'data/Home/Articles';
import CardsData from 'data/Home/Cards';
import StepsData from 'data/Home/Steps';
import TestimonialsData from 'data/Home/Testimonials';
import BulletsData from 'data/Home/Bullets';

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="GoWise Learning"
        description="Qualified Holistic SEND Tutors - Tailored Support for Every Child's Unique Needs."
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

        <Section className="gap-xl">
          <Row>
            <h2>The GoWise Learning Framework</h2>
          </Row>
          <Row className="text-centered">
            <h3 className="h4">
              Our framework combines educational expertise with a strong focus on emotional
              wellbeing.
            </h3>
          </Row>
          <Row className="text-centered">
            <h4>We follow three key principles that guide every session:</h4>
          </Row>
          <Row>
            {StepsData.map((item) => (
              <Col key={item.number}>
                <Step data={item} />
              </Col>
            ))}
          </Row>
        </Section>

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <h2>Our Trusted Team of SEN Tutors & Specialists</h2>
          </Row>
        </Section>

        <ArticleSection data={ArticlesData[0]} />

        <Section className="gap-xl">
          <Row className="tight-mobile">
            <h2>How We Support Children with SEND and SEMH</h2>
          </Row>
        </Section>

        <ArticleSection data={ArticlesData[1]} />

        <Section>
          <Row>
            <Col>
              <h3>Our holistic, child-centred approach</h3>
              <p className="large">
                To meet these needs, we use a blend of UK-recognised, evidence-based approaches such
                as the SCERTS Model, PECS and Makaton to support communication, alongside Social
                Stories, to build understanding and social confidence. We also integrate Play
                Therapy, the DIR/Floortime Model, the PACE Approach and Positive Behaviour Support
                (PBS) to strengthen emotional regulation, positive behaviour and resilience. This
                holistic, child-centred approach ensures every learner feels valued, understood and
                fully supported to achieve their potential - at school, at home and in the wider
                community.
              </p>
              <p className="large">
                At GoWise Learning, we combine the most trusted strategies and therapies in the UK
                to create a holistic, child-centred programme. Our goal is simple: help every child
                feel safe, learn with joy and grow in confidence. Each approach aims to meet
                individual needs while encouraging independence and supporting learning,
                communication and emotional wellbeing:
              </p>
            </Col>
          </Row>
        </Section>

        <Section>
          <Row className="mt-3 tight tight-mobile">
            <Col>
              <h4 className="color-primary mobile-centered">Structured Learning & Independence:</h4>
            </Col>
          </Row>
          <BulletsRow data={{ bullets: BulletsData[1], theme: 'primary', max: 3 }} />

          <Row className="mt-3 tight tight-mobile">
            <Col>
              <h4 className="color-secondary mobile-centered">Communication & Social Skills:</h4>
            </Col>
          </Row>
          <BulletsRow data={{ bullets: BulletsData[2], theme: 'secondary' }} />

          <Row className="mt-3 tight tight-mobile">
            <Col>
              <h4 className="color-tertiary mobile-centered">
                Play, Relationships & Emotional Growth:
              </h4>
            </Col>
          </Row>
          <BulletsRow data={{ bullets: BulletsData[3], theme: 'tertiary' }} />

          <Row className="mt-3 tight tight-mobile">
            <Col>
              <h4 className="color-primary mobile-centered">
                Emotional Regulation & Behaviour Support:
              </h4>
            </Col>
          </Row>
          <BulletsRow
            data={{
              bullets: BulletsData[4],
              theme: 'primary',
            }}
          />

          <Row className="mt-3 tight tight-mobile">
            <Col>
              <h4 className="color-secondary mobile-centered">Sensory & Wellbeing Support:</h4>
            </Col>
          </Row>
          <BulletsRow
            data={{
              bullets: BulletsData[5],
              theme: 'secondary',
              max: 3,
            }}
          />

          <Row className="mt-3 tight tight-mobile">
            <Col>
              <h4 className="color-tertiary mobile-centered">Why Families Choose Us:</h4>
            </Col>
          </Row>
          <BulletsRow
            data={{
              bullets: BulletsData[6],
              theme: 'tertiary',
            }}
          />
        </Section>

        <TestimonialSection className="mt-12" data={TestimonialsData[0]} theme={'tertiary'} />

        <Section className="gap-xl">
          <Row>
            <h2>Parent Testimonials</h2>
          </Row>
        </Section>

        <ArticleSection data={ArticlesData[2]} />

        <TestimonialSection className="mt-5" data={TestimonialsData[2]} theme={'secondary'} />

        <TestimonialSection className="mt-2" data={TestimonialsData[3]} theme={'secondary'} />

        <ArticleSection className="mt-6" data={ArticlesData[3]} />
        <TestimonialSection className="mt-0" data={TestimonialsData[4]} theme={'primary'} />

        <ArticleSection className="mt-6" data={ArticlesData[4]} />
        <TestimonialSection className="mt-0" data={TestimonialsData[5]} theme={'tertiary'} />

        <ArticleSection className="mt-6" data={ArticlesData[5]} />
        <TestimonialSection className="mt-0" data={TestimonialsData[6]} theme={'primary'} />

        <ArticleSection className="mt-6" data={ArticlesData[6]} />
        <TestimonialSection className="mt-0" data={TestimonialsData[7]} theme={'tertiary'} />

        <Section className="gap-xl">
          <Row>
            <Col />
            <Col>
              <Button link={Paths.CONTACT} theme="secondary" text="Book a FREE CONSULTATION" />
            </Col>
            <Col />
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
