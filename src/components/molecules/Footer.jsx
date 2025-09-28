import React from "react";
import { Section, Row, Col } from "layout";
import { Link } from "react-router";

import ContactLinks from "./ContactLinks";

import Icon from "icons";

const Footer = () => {
  return (
    <footer>
      <Section className="py-3">
        <Row>
          <Col className="span-3">
            <Link to="/career">
              <h2 className="h3 text-thin">
                <span>CAREER </span>
                <Icon>timeline</Icon>
              </h2>
            </Link>
          </Col>
          <Col className="span-4">
            <Link to="/projects">
              <h2 className="h3 text-thin">
                <span>PROJECTS </span>
                <Icon>view_in_ar</Icon>
              </h2>
            </Link>
            <Link to="/projects" className="text-thin">
              more projects...
            </Link>
          </Col>
          <Col className="span-2">
            <Link to="/awards">
              <h2 className="h3 text-thin">
                <span>AWARDS </span>
                <Icon>emoji_events</Icon>
              </h2>
            </Link>

            <Link to="/awards" className="mb-1">
              My Awards...
            </Link>

            <div className="mt-2 de"></div>

            <Link to="/contact">
              <h2 className="h3 text-thin">
                <span>CONTACT </span>
                <Icon>account_circle</Icon>
              </h2>
            </Link>

            <ContactLinks />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>© 2025 Radu Nicolau</p>
            <p className="small">
              All brands, logos, images and videos are copyright to their
              respective owners.
            </p>
          </Col>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
