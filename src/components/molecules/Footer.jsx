import React, { useEffect } from 'react';
import { Section, Row, Col } from 'layout';
import { Link } from 'react-router';
import { useAppState } from 'appState';

import Icon from 'icons';
import Paths from 'paths';

import CardsData from 'data/Home/Cards';
import SocialData from 'data/Social';
import ContactData from 'data/Contact';

const Footer = () => {
  const { setFooterReady } = useAppState();

  useEffect(() => {
    setFooterReady(true);
  }, []);

  return (
    <footer>
      <Section>
        <Row>
          <Col nogap>
            <Row className="top" nopadding nogap>
              <Col className="logo">
                <Link to="/">
                  <img
                    src={`/media/logo-monochrome.svg`}
                    alt={`GoWise Learning`}
                    width="241"
                    height="80"
                  />
                </Link>
              </Col>
              <Col style={{ maxWidth: '300px' }}>
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
              <Col style={{ paddingTop: '0.5em' }}>
                <Link to={Paths.PRIVACY_POLICY_SAFEGUARDING} className="strong hidden-decoration">
                  Policies and Safeguarding
                </Link>
              </Col>
              <Col></Col>
            </Row>
            <Row className="cards" nopadding>
              {CardsData.map((item) => (
                <Link
                  to={item.button.link}
                  key={item.titleFooter}
                  aria-label={item.button.ariaLabel}
                >
                  <h2 className="title">{item.titleFooter}</h2>
                  <span className="details">{item.details}</span>
                  <div className="cta">
                    <span className="text">{item.button.text}</span>
                    <Icon className="icon">chevron_forward</Icon>
                  </div>
                </Link>
              ))}
            </Row>
            <Row className="bottom" nopadding>
              <Col className="span-2">
                <p className="copyright">
                  ©2025 GoWise Learing / Anamaria Blanaru. All images and logos are proprietary to
                  their respective owners. GoWise Learning is a trading name of Moms Academy Limited
                  Registered in England and Wales. Company Number: 15618195
                  {/* Registered Office: ??? */}
                </p>
              </Col>
              <Col>
                <ul className="social">
                  {SocialData.map((item) => (
                    <li key={item.network}>
                      <Link to={item.link} aria-label={`Social link: GoWise ${item.network}`}>
                        {item.icon}
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
