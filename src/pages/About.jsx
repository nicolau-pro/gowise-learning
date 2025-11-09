import React, { useEffect } from 'react';
import { useAppState } from 'appState';

import Row from 'layout/Row';
import Col from 'layout/Col';
import Section from 'layout/Section';
import MetaTags from 'metaTags';
import Paths from 'paths';

import HeroSection from 'components/Hero';
import ArticleSection from 'components/Article';
import TestimonialSection from 'components/Testimonial';

import WelcomeData from 'data/About/Welcome';
import ArticlesData from 'data/About/Articles';
import TestimonialsData from 'data/About/Testimonials';

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="About Us"
        description="About Us"
        url={`${Paths.ROOT}/${Paths.ABOUT}`}
        image="/social/GoWise-Learning.jpg"
      />

      <main>
        <HeroSection data={WelcomeData} />

        <ArticleSection data={ArticlesData[0]} />

        <Section>
          <Row>
            <Col>
              <h2>The story behind GoWise Learning</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                I've been teaching for as long as I can remember, genuinely, since I was able to
                speak. Helping others understand, guiding, explaining, calming… it always came
                naturally. I would lose track of time completely when I was teaching and to this
                day, that hasn't changed.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                Over the past decade, I've worked across education and behaviour support,
                specialising in children with additional needs. Over the years, I've worked with so
                many children who just needed to be understood a little differently. Sometimes, when
                they're overwhelmed or unsure how to express what they're feeling, it can come
                across as difficult behaviour, but underneath it all, they're often doing their best
                to cope.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                That's why I founded GoWise Learning. Because children with SEND and SEMH deserve
                more than just tutoring, they deserve someone who truly sees them. Someone who
                understands their emotions, their triggers, their rhythms. Someone who isn't just
                trying to get through a lesson, but is willing to PAUSE, CONNECT and GUIDE them
                forward with patience and insight.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                We also care deeply about the people who work with them too. We invest in our
                tutors' wellbeing and development, because when our team feels supported and
                confident, they bring their very best to the children they teach.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                GoWise Learning is built on the belief that every learner can flourish when they
                feel calm in their body, confident in their mind, and connected to the world around
                them. Our holistic tutors combine empathy, expertise, and genuine care to nurture
                growth from the inside out, allowing academic progress to follow naturally, as
                confidence and wellbeing take root.
              </p>
            </Col>
          </Row>
        </Section>

        <TestimonialSection data={TestimonialsData[0]} theme={'tertiary'} />
      </main>
    </>
  );
}

export default Page;
