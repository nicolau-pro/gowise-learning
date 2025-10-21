import React, { useEffect } from "react";
import { Link } from "react-router";
import { Contact } from "variables";

import Row from "layout/Row";
import Col from "layout/Col";
import Section from "layout/Section";
import MetaTags from "metaTags";
import Paths from "paths";

import { useAppState } from "appState";

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="Privacy Policy"
        description="At GoWise Learning we take your privacy seriously. We collect and use personal information only to deliver high-quality tutoring and educational support while protecting your rights and
                confidentiality"
        image="/social/GoWise-Learning.jpg"
        url={Paths.PRIVACY_POLICY}
      />

      <main>
        <Section className="gap-xl">
          <Row>
            <Col>
              <h1 className="hero">Privacy Policy</h1>
              <p>
                <strong>Last Updated: October 2025</strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="h3">
                At GoWise Learning, (trading name under Moms Academy Ltd) (“we”,
                “us”, “our”), we take your privacy seriously. We collect and use
                personal information only to deliver high-quality tutoring and
                educational support while protecting your rights and
                confidentiality. At our core, we exist to support learners,
                families and educational partners with trust, integrity and
                excellence. Protecting your personal information is a serious
                responsibility we carry with care.
              </h2>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>In brief, this Privacy Policy explains:</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>What Information We Collect</h3>
              <hr />
              <h4>We may collect:</h4>
              <ul>
                <li>Contact details (name, phone, email, address)</li>
                <li>
                  Student details (age, school, learning needs, EHCP or SEN
                  information where relevant)
                </li>
                <li>Parent or guardian contact details</li>
                <li>
                  Tutor information (qualifications, DBS checks, payroll
                  details)
                </li>
                <li>Progress records, attendance, assessments</li>
                <li>Limited website data (cookies, IP, usage statistics)</li>
              </ul>
            </Col>
            <Col>
              <h3>How We Use Your Data</h3>
              <hr />
              <h4>We use your data to:</h4>
              <ul>
                <li>Provide and manage our tutoring services</li>
                <li>Track and report student progress</li>
                <li>
                  Communicate with families, schools, and local authorities
                </li>
                <li>Meet safeguarding and legal obligations</li>
                <li>Improve our services and website</li>
              </ul>
              <p>We never sell your data or use it for unrelated marketing.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Sharing Information</h3>
              <hr />
              <h4>We may share necessary data with:</h4>
              <ul>
                <li>
                  Parents, carers, schools, or local authorities (to support
                  learning)
                </li>
                <li>
                  Safeguarding or regulatory bodies (when required by law)
                </li>
                <li>
                  Trusted service providers under secure data agreements (e.g.,
                  IT systems, payment services)
                </li>
              </ul>
              <p>
                All partners must keep your data safe and use it only for agreed
                purposes.
              </p>
            </Col>
            <Col>
              <h3>Your Rights</h3>
              <hr />
              <h4>You have the right to:</h4>
              <ul>
                <li>See the information we hold about you</li>
                <li>Ask us to correct or delete it</li>
                <li>Withdraw consent for optional uses (like newsletters)</li>
                <li>
                  Complain to the ICO if you are unhappy with how we handle your
                  data
                </li>
              </ul>
              <h4>To exercise your rights, please contact us at:</h4>
              <Link to={`tel:${Contact.Phone}`}>{Contact.Phone}</Link>
              <Link to={`mailto:${Contact.Email}`}>{Contact.Email}</Link>
            </Col>
          </Row>
        </Section>

        <hr />

        <Section>
          <Row>
            <Col>
              <h2>GoWise Learning - Full Privacy Policy</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                At GoWise Learning (a trading name under Moms Academy Ltd)
                (“we”, “us”, “our”), we value your privacy and are committed to
                protecting your personal information. At our core, we exist to
                support learners, families and educational partners with trust,
                integrity and excellence. Protecting your personal information
                is a serious responsibility we carry with care.
              </h3>

              <hr />

              <p>
                <strong>This Privacy Policy explains:</strong>
              </p>
              <ul>
                <li>What information we collect, and why</li>
                <li>How we use, share, store, and secure it</li>
                <li>Your rights over your information</li>
                <li>How to contact us</li>
                <li>How we handle updates to this policy</li>
              </ul>

              <p>
                By engaging with our website, registering for services or
                providing us data, you consent to the practices described here
                (unless otherwise required by law).
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Who We Are & Key Contacts</h3>
              <ul>
                <li>
                  Data Controller: GoWise Learning, trading name for Moms
                  Academy Ltd
                </li>
                <li>
                  Address: 129 Robertsbridge Road, SM5 1BY (address to be
                  updated)
                </li>
                <li>Main Contact / Data Protection Lead: Anamaria Blanaru</li>
                <li>
                  Email:{" "}
                  <Link to={`mailto:${Contact.Email}`}>{Contact.Email}</Link>
                </li>
                <li>
                  Telephone:{" "}
                  <Link to={`tel:${Contact.Phone}`}>{Contact.Phone}</Link>
                </li>
              </ul>
              <p>
                If you have questions or concerns about this policy or our
                handling of your data, please reach out to us first using the
                above contact.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>What Data We Collect & Why</h3>
              <p>
                We collect personal data from different groups:students,
                parents/carers, tutors/staff, schools or local authority
                partners and site visitors. We only collect data that is
                necessary, relevant and proportionate to the services we provide
                or legal obligations we hold.
              </p>
              <h4>Below is an overview of categories of data and purposes:</h4>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Group / Context</th>
                    <th scope="col">Data Collected</th>
                    <th scope="col">Purpose / Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Students / Learners</th>
                    <td>
                      Name, date of birth, gender / pronouns, school/class,
                      contact info, address, SEN / disability / SEND
                      information, EHCP details, attendance, progress data,
                      assessment results, behaviour / welfare notes, medical or
                      safeguarding notes
                    </td>
                    <td>
                      Deliver tuition, tailor support, track progress, report to
                      stakeholders, safeguarding, planning interventions
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Parents / Carers / Guardians</th>
                    <td>
                      Name, contact (phone, email), postal address, emergency
                      contact details
                    </td>
                    <td>
                      Communication, consent, invoicing, liaising, emergencies
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Tutors / Staff</th>
                    <td>
                      Name, contact info, CV / qualifications, references,
                      background checks/DBS, employment history, bank / payroll
                      details
                    </td>
                    <td>
                      Recruitment, management, contracting, payment, performance
                      review
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Partner Organisations (schools, local authorities,
                      commissioners)
                    </th>
                    <td>
                      Name, role, contact details, contract / commissioning
                      data, reports / analytics
                    </td>
                    <td>
                      Collaboration, reporting, compliance, service delivery
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Website / Visitors</th>
                    <td>
                      IP address, device/browser type, usage logs, cookies /
                      analytics data, interaction data
                    </td>
                    <td>
                      Website functionality, security, analytics, performance
                      improvement
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Special / Sensitive Data:</h3>
              <p>
                Where we handle special categories (e.g. health, disability,
                SEND, SEMH, safeguarding) we will apply additional safeguards
                and where needed, obtain explicit consent or rely on legal
                justifications (e.g. public interest in education, safeguarding,
                vital interests).
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>How We Collect Data:</h3>
              <h4>We may collect:</h4>
              <ul>
                <li>Direct input (forms, registrations, assessments)</li>
                <li>Communications (email, phone, chats)</li>
                <li>
                  Referrals from schools, local authorities or partner
                  organisations
                </li>
                <li>
                  Third parties (previous providers, educational settings,
                  safeguarding agencies)
                </li>
                <li>Automated collection (website analytics, cookies, logs)</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Legal Basis for Processing</h3>
              <h4>
                Under UK GDPR / Data Protection Act 2018, we must have a lawful
                basis to process your data. Our typical bases include:
              </h4>
              <ul>
                <li>
                  <strong>Contractual necessity:</strong> data processed to
                  perform our contract (tuition provision, reporting,
                  communication)
                </li>
                <li>
                  <strong>Legitimate interests:</strong> improving services,
                  preventing fraud, maintaining operations (provided these do
                  not override individual rights)
                </li>
                <li>
                  <strong>Legal obligation:</strong> compliance with laws,
                  safeguarding duties, audits, record-keeping
                </li>
                <li>
                  <strong>Consent:</strong> for optional / supplementary uses
                  (e.g. marketing, profiling)
                </li>
                <li>
                  <strong>Vital interests or public task:</strong> in urgent or
                  statutory cases (e.g. safeguarding emergencies)
                </li>
              </ul>
              <p>
                Where consent is the basis, you may withdraw it at any time
                (without affecting lawful prior processing).
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>How We Use & Share Your Data</h3>
              <h4>We use your data for:</h4>
              <ul>
                <li>Delivering and managing tutoring / educational services</li>
                <li>
                  Tracking progress, assessing outcomes, producing reports
                </li>
                <li>Communicating with you, scheduling, reminders</li>
                <li>Safeguarding, welfare, child protection</li>
                <li>
                  Recruitment, paying tutors or staff, contractual matters
                </li>
                <li>Improving our services, analytics, research, evaluation</li>
                <li>Compliance, audits, legal obligations</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>We May Share Your Data With</h3>
              <h4>We may share data with:</h4>
              <ul>
                <li>Parents / carers (progress, reports)</li>
                <li>
                  Schools, local authorities, commissioning bodies (under
                  contract)
                </li>
                <li>
                  Safeguarding agencies, statutory bodies (as required by law)
                </li>
                <li>
                  Service providers / data processors (e.g. CRM, IT, analytics,
                  payment systems) under strict contracts
                </li>
                <li>Legal / audit / regulatory bodies (if required)</li>
                <li>
                  In event of business transfer (merger, acquisition) — under
                  safeguards
                </li>
              </ul>
              <p>
                We ensure third parties handling your data are bound by
                confidentiality and data protection standards and act only under
                our instructions.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Cookies, Tracking & Website Analytics</h3>
              <p>
                We use cookies, analytics tools and similar technologies to
                collect usage data (e.g. IP addresses, device, pages visited,
                interaction). These help us improve the website, detect fraud,
                and understand user behaviour.
              </p>
              <p>
                You will be able to accept or reject non-essential cookies;
                essential cookies (for site core functionality) may remain
                active. Our separate Cookies Policy forms part of this Privacy
                Policy.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Data Retention</h3>
              <h4>
                We retain personal data only as long as necessary for its
                original purpose or as required by law or regulation. Typical
                retention periods:
              </h4>
              <ul>
                <li>
                  Student / parent data: retained during provision of services
                  and for a period after (e.g. 24 months)
                </li>
                <li>
                  Tutor / staff records: retained during employment / contract
                  period and thereafter for statutory duration (e.g. 6 years)
                </li>
                <li>
                  Financial / accounting data: kept per tax / audit regulations
                </li>
                <li>
                  Safeguarding / welfare records: retained in line with legal or
                  best practice requirements
                </li>
                <li>
                  Website logs / analytics: limited retention (e.g. 12-24
                  months)
                </li>
              </ul>
              <p>
                After expiry, data is securely anonymised or irreversibly
                destroyed.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Data Security & Protection</h3>
              <h4>
                We adopt rigorous technical and organisational measures to keep
                your data safe:
              </h4>
              <ul>
                <li>Secure servers, encryption (in transit and at rest)</li>
                <li>Role-based access (only authorised personnel)</li>
                <li>
                  Strong password and multi-factor authentication protocols
                </li>
                <li>Regular security audits, vulnerability testing</li>
                <li>Secure backups and disaster recovery plans</li>
                <li>Incident response and breach reporting procedures</li>
              </ul>
              <p>
                If a personal data breach is likely to result in risk to your
                rights, we will notify you (and the ICO) as required by law.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Your Rights & Choices</h3>
              <h4>
                You have rights under data protection law. Depending on the
                context, you may:
              </h4>
              <ul>
                <li>Access your personal data (get a copy)</li>
                <li>Ask for correction (rectification) of inaccuracies</li>
                <li>
                  Request erasure (delete data) — subject to lawful exceptions
                </li>
                <li>Request restriction of processing</li>
                <li>Object to certain processing (e.g. direct marketing)</li>
                <li>
                  Request data portability (receive your data in a structured,
                  machine-readable format)
                </li>
                <li>Withdraw consent (if processing based on consent)</li>
                <li>
                  Lodge a complaint with a supervisory authority (e.g. ICO in
                  the UK)
                </li>
              </ul>
              <p>
                To exercise any right, please contact us. We aim to respond
                within statutory timeframes (usually one month; may extend in
                special cases).
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Children, Guardianship & Sensitive Data</h3>
              <h4>
                We recognise the sensitivity of handling data for minors. We
                ensure:
              </h4>
              <ul>
                <li>
                  Where children are involved, a parent or guardian must provide
                  consent / act on their behalf
                </li>
                <li>
                  We do not collect more “special category data” than necessary
                </li>
                <li>
                  For sensitive data (e.g. health, SEND, safeguarding), extra
                  protection and legal bases apply
                </li>
                <li>
                  Wherever required, we seek explicit consent from parent /
                  guardian (or rely on lawful grounds)
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Marketing & Communications</h3>
              <p>
                We may send you communications (newsletters, offers, updates)
                only if you consent, or as permitted by applicable law. You can
                opt-out at any time by following unsubscribe links or contacting
                us. We will not share your personal data with marketing third
                parties for their own purposes without your explicit consent.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy (e.g. when services change or
                laws update). We will indicate the “Last Updated” date at the
                top and, in case of major changes, notify you (via email or
                website banner). Continued use constitutes acceptance of the new
                policy.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Complaints & Contact</h3>
              <p>
                <strong>
                  If you have questions, concerns or wish to make a complaint
                  about our data practices, please contact us:
                </strong>
              </p>
              <p>
                GoWise Learning, trading name for Moms Academy Ltd Address: 129
                Robertsbridge Road, SM5 1BY
              </p>
              <p>
                Email:{" "}
                <Link to={`mailto:${Contact.Email}`}>{Contact.Email}</Link>
              </p>
              <p>
                Telephone:{" "}
                <Link to={`tel:${Contact.Phone}`}>{Contact.Phone}</Link>
              </p>

              <hr />

              <p>
                <strong>
                  If you are not satisfied with our response, you may complain
                  to the UK Information Commissioner's Office (ICO):
                </strong>
              </p>
              <h4>ICO Contact</h4>
              <p>Wycliffe House, Water Lane</p>
              <p>Wilmslow, Cheshire SK9 5AF</p>
              <p>
                Helpline: <a href="tel:03031231113">0303 123 1113</a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ico.org.uk
                </a>
              </p>
            </Col>
          </Row>
          <Row className="mb-12">
            <Col>
              <h3>Governing Law & Disclaimer</h3>
              <p>
                This Policy is governed by the laws of England & Wales (or
                relevant UK jurisdiction). If any provision is found invalid, it
                does not affect the remaining terms.
              </p>
            </Col>
          </Row>
        </Section>
      </main>
    </>
  );
}

export default Page;
