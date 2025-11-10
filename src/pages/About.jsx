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
        description="We focus on the whole child. Academic progress is always linked with wellbeing, confidence and social-emotional growth. By combining holistic support with professional expertise, we help children grow in resilience, self-esteem and motivation - skills that carry them far beyond the classroom."
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
                GoWise Learning was created from a simple vision - to raise the standard of SEND
                tutoring by combining empathy, structure and evidence- based practice in every
                interaction with our learners.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                Behind this vision is years of insight gathered from education, psychology and
                hands-on experience supporting children and young people with SEND and SEMH needs.
                Through my work in schools, colleges, behaviour support and with senior
                psychologists, I saw how powerfully children respond when learning is consistent,
                compassionate and built around who they truly are — their strengths, interests and
                rhythms.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                At GoWise Learning, we believe children thrive when they are given tools and
                strategies that speak to them — approaches that match their individual learning
                styles, personalities and needs. This philosophy underpins everything we do. Our
                tutors are carefully selected, guided and supported to deliver this vision. Each one
                shares our belief that real progress begins with understanding the child first, and
                that academic growth follows naturally when emotional and self-regulation needs are
                met.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                My background as a Qualified Teacher (QTS) with a degree in Psychology, clinical
                experience with neurodiverse children and adults and a Diploma in Management and
                Leadership has shaped how GoWise Learning operates: structured, reflective and
                always human-centred.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="large">
                Today, our mission is simple — to help every learner feel safe, capable and inspired
                to reach their full potential. GoWise Learning is not just about education; it's
                about creating genuine connections and confidence that last well beyond the lesson.
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
