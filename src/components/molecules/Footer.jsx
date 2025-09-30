import React, { useEffect } from "react";
import { Section, Row, Col } from "layout";
import { Link } from "react-router";
import { useAppState } from "appState";

import Icon from "icons";

import CardsData from "data/Cards";
import SocialData from "data/Social";
import ContactData from "data/Contact";

const Footer = () => {
  const { setFooterReady } = useAppState();

  useEffect(() => {
    setFooterReady(true);
  }, []);

  return (
    <footer>
      <Section>
        <Row>
          <Col>
            <Row className="top" nopadding nogap>
              <Col className="logo">
                <Link to="/">
                  <img
                    src={`/media/logo-monochrome.svg`}
                    alt={`GoWise Learning`}
                  />
                </Link>
              </Col>
              <Col>
                <ul className="contact">
                  {Object.entries(ContactData).map(([key, item]) => (
                    <li key={key}>
                      <Link to={item.link}>
                        <Icon className="icon">{item.icon}</Icon>
                        <span className="text">{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row className="cards" nopadding>
              {CardsData.map((item) => (
                <Link to={item.button.link} key={item.titleFooter}>
                  <h2 className="title">{item.titleFooter}</h2>
                  <span className="details">{item.details}</span>
                  <div className="cta">
                    <span className="text">{item.button.text}</span>
                    <Icon className="icon">chevron_right</Icon>
                  </div>
                </Link>
              ))}
            </Row>
            <Row className="bottom" nopadding>
              <Col>
                <p className="copyright">
                  ©2025 Go Wise Learing / Anamaria Blanaru. All images and logos
                  are proprietary to their respective owners.
                </p>
              </Col>
              <Col>
                <ul className="social">
                  {SocialData.map((item) => (
                    <li key={item.network}>
                      <Link to={item.link}>
                        <img
                          src={`/media/${item.icon}`}
                          alt={`${item.network} icon`}
                          className="icon-link"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    </footer>
  );
};

export default Footer;
