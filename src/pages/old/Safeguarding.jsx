import React, { useEffect } from 'react';
import { Link } from 'react-router';
import ContactData from 'data/Contact';

import Row from 'layout/Row';
import Col from 'layout/Col';
import Section from 'layout/Section';
import MetaTags from 'metaTags';
import Paths from 'paths';
import TestimonialsData from 'data/Safeguarding/Testimonials';
import TestimonialSection from 'components/Testimonial';

import { useAppState } from 'appState';

function Page() {
  const { setOutletReady } = useAppState();

  useEffect(() => {
    setOutletReady(true);
  }, []);

  return (
    <>
      <MetaTags
        section="Safeguarding and Protection Policy for Children and Young People"
        description="Every child and young person has the right to be protected from harm. At GoWise Learning, we are committed to creating a safe, caring environment where every student, whether in person or online, can learn and grow without fear"
        image="/social/GoWise-Learning.jpg"
        url={Paths.POLICIES_AND_SAFEGUARDING}
      />

      <main>
        <Section className="gap-xl">
          <Row>
            <Col>
              <h1 className="hero">Safeguarding</h1>
              <h2>And Protection Policy for Children and Young People</h2>
              <p>
                <strong>Last Updated: October 2025</strong>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                Every child and young person has the right to be protected from harm. At GoWise
                Learning, we are committed to creating a safe, caring environment where every
                student, whether in person or online, can learn and grow without fear. We recognise
                our responsibility to protect and promote the welfare of every learner and we expect
                the same commitment from all tutors, parents, carers and partners who work with us.
              </h3>
              <p>
                This policy sets out how we work to keep children and young people safe, how we
                respond if there are concerns and the standards we expect of everyone involved in
                our work.
              </p>
              <p>
                The term “child” refers to anyone under the age of 18, and the term “young person”
                refers to individuals aged 18 to 25. At GoWise Learning, safeguarding and protection
                is at the heart of everything we do and underpins our approach to education,
                wellbeing and professional conduct.
              </p>
            </Col>
          </Row>
        </Section>

        <Section>
          <Row>
            <Col>
              <h2>Our Commitment</h2>
              <ul>
                <li>
                  We believe every child and young person has the right to safety, dignity and
                  support.
                </li>
                <li>
                  We commit to treating all children and young people equally, regardless of age,
                  gender, race, religion, disability or any other characteristic.
                </li>
                <li>
                  We recognise that some children and young people may be more vulnerable (for
                  example, children and young people with special educational needs or disabilities,
                  children and young people with communication differences or those who may have
                  experienced trauma). We will pay special attention to ensuring those children and
                  young people are supported and heard.
                </li>
                <li>
                  We expect every adult associated with GoWise Learning, tutors, staff and
                  volunteers to share responsibility for safeguarding and protection for children
                  and young people.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>This policy applies to:</h2>
              <ul>
                <li>
                  All children and young people who receive tuition, support or other services from
                  GoWise Learning.
                </li>
                <li>
                  All GoWise Learning employees, contractors, tutors, volunteers and any other
                  adults acting on behalf of the organisation.
                </li>
                <li>
                  All settings where GoWise Learning operates: online, at client homes, at partner
                  venues.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Key Principles & Legal Framework</h2>
              <p className="large">
                Our Safeguarding and Protection practices for Children and Young People are guided
                by UK law and national guidance, including:
              </p>
              <ul>
                <li>Working Together to Safeguard Children (latest statutory guidance)</li>
                <li>Alternative Provision - Statutory guidance (January 2013)</li>
                <li>
                  The Children Act 1989 & 2004, which place duties on organisations to promote the
                  welfare of children and protect them from harm.
                </li>
                <li>
                  Legislation related to children and young people with special educational needs or
                  disabilities (SEND), ensuring additional protections where needed.
                </li>
                <li>
                  Keeping Children Safe in Education (September 2025) (statutory for Alternative
                  Provision Schools)
                </li>
                <li>The Education Act 2002</li>
              </ul>
              <p>
                We also adhere to best practice in safer recruitment, staff training, data
                protection and partnerships with schools, local authorities and safeguarding
                agencies.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Our Safeguarding Principles</h3>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Principle</th>
                    <th scope="col">What It Means at GoWise Learning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Child and Young Person-Centred Approach</th>
                    <td>The needs, safety, and voice of each child or young person come first.</td>
                  </tr>
                  <tr>
                    <th scope="row">Early Intervention</th>
                    <td>We identify concerns early and act promptly to prevent harm.</td>
                  </tr>
                  <tr>
                    <th scope="row">Accountability</th>
                    <td>Everyone at GoWise Learning has a duty to safeguard.</td>
                  </tr>
                  <tr>
                    <th scope="row">Partnership</th>
                    <td>
                      We collaborate with parents, schools and local authorities to ensure a
                      joined-up approach.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Transparency</th>
                    <td>
                      We communicate clearly and maintain open, honest relationships with families
                      and professionals.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="small desktop-hidden">* Table scrolls horizontally</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Recognising Abuse and Neglect</h2>
              <p>
                Abuse can take many forms. All tutors at GoWise Learning are trained to recognise
                indicators of harm and to respond appropriately.
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Type of Abuse</th>
                    <th scope="col">Examples / Indicators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Physical</th>
                    <td>Unexplained injuries, bruises, or burns; fear of physical contact.</td>
                  </tr>
                  <tr>
                    <th scope="row">Emotional</th>
                    <td>Withdrawal, anxiety or low self-esteem; extreme reactions to criticism.</td>
                  </tr>
                  <tr>
                    <th scope="row">Sexual</th>
                    <td>Inappropriate behaviour or language; knowledge beyond age expectations.</td>
                  </tr>
                  <tr>
                    <th scope="row">Neglect</th>
                    <td>Poor hygiene, hunger, tiredness, lack of supervision or suitable care.</td>
                  </tr>
                  <tr>
                    <th scope="row">Online Abuse</th>
                    <td>Cyberbullying, grooming or exposure to harmful content.</td>
                  </tr>
                  <tr>
                    <th scope="row">Peer-on-Peer Abuse</th>
                    <td>
                      Bullying, intimidation or sexual harassment between children or young people.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Exploitation</th>
                    <td>County lines, modern slavery or radicalisation concerns.</td>
                  </tr>
                </tbody>
              </table>
              <p className="small desktop-hidden">* Table scrolls horizontally</p>
              <p>
                The DSL is responsible for overseeing all safeguarding matters, maintaining secure
                records, liaising with schools and local authorities, and ensuring best practice is
                followed across GoWise Learning.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Online and Remote Safeguarding</h2>
              <p>
                When providing online tuition, we maintain the same high safeguarding standards as
                in-person teaching:
              </p>
              <ul>
                <li>Use of approved, secure online platforms.</li>
                <li>Immediate reporting of any online safeguarding concerns.</li>
                <li>No recording of sessions without written consent.</li>
                <li>Tutors to remain professional and appropriately dressed.</li>
                <li>Parents encouraged to supervise or remain nearby.</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Safeguarding Procedures</h2>
              <p className="large">
                At GoWise Learning, we put our safeguarding and protection values into practice.
                Here's how we uphold our commitment to the safety of children and young people every
                day:
              </p>
              <h3>1. Safer Recruitment & Vetting</h3>
              <ul>
                <li>
                  All tutors, staff and volunteers undergo checks (enhanced DBS checks and
                  identification checks)
                </li>
                <li>
                  References, qualifications and background information are carefully verified.
                </li>
                <li>
                  For roles involving direct contact with children and young people, we ensure
                  rigorous vetting and induction training.
                </li>
              </ul>

              <h3>2. Safeguarding Training, Awareness and Ongoing Development</h3>
              <p>
                At GoWise Learning, we see safeguarding training not as a one-off requirement but as
                an ongoing part of professional development, something that helps our team build
                knowledge, confidence and consistency over time.
              </p>
              <p>
                To make sure our standards stay high, staff and tutors have their work reviewed at
                least once a year through staff appraisals. This helps us check that our
                safeguarding policy and procedures are being followed in our daily practice.
              </p>
              <p>
                Our Designated Safeguarding Lead (DSL) completes advanced, multi-agency safeguarding
                training at least every two years and takes part in extra courses that relate
                directly to our organisation's safeguarding requirements.
              </p>
              <p>
                <strong>
                  All our tutors receive practical safeguarding training to help them:
                </strong>
              </p>
              <ul>
                <li>Recognise signs of abuse or neglect.</li>
                <li>Respond appropriately if a child or young person makes a disclosure.</li>
                <li>Take steps to prevent harm.</li>
                <li>Record concerns clearly and accurately.</li>
                <li>Know who to contact if they need help or advice.</li>
                <li>Share information safely and responsibly.</li>
              </ul>
              <p>
                As part of onboarding, every tutor must complete Safeguarding Children Level 2
                training, which is renewed every two years at a minimum. This ensures that everyone
                at GoWise Learning fully understands their role in keeping children and young people
                safe and protected.
              </p>

              <h3>3. Recognising & Responding to Concerns</h3>
              <p>
                All tutors at GoWise Learning play a vital role in safeguarding children and young
                people. Every tutor must understand that no single professional can see the whole
                picture of a child or young person's life. Protecting them from harm depends on
                everyone working together, sharing information, noticing signs of concern and acting
                quickly when something doesn't feel right.
              </p>

              <p>
                <strong>To do this effectively, all tutors should:</strong>
              </p>
              <ul>
                <li>
                  <strong>Be familiar with GoWise Learning's safeguarding systems</strong>,
                  including how to record and report concerns and who to contact (Designated
                  Safeguarding Lead or Deputy).
                </li>
                <li>
                  <strong>Receive safeguarding level 2 training</strong> as part of the recruitment
                  process and receive regular updates throughout the year, so their knowledge stays
                  current and relevant.
                </li>
                <li>
                  <strong>Have access to and read</strong> the following key documents:
                  <ul>
                    <li>
                      GoWise Learning's Safeguarding and Protection Policy for Children and Young
                      People
                    </li>
                    <li>Staff Behaviour/Code of Conduct Policy</li>
                    <li>Behaviour Policy for Children and Young People</li>
                    <li>Keeping Children Safe in Education Document (KCSIE)</li>
                  </ul>
                </li>
                <li>
                  <strong>Know how to recognise and respond</strong> if a child or young person
                  discloses abuse or neglect, including how to listen, record and report
                  appropriately.
                </li>
                <li>
                  <strong>Be alert to indicators of abuse, neglect or exploitation</strong>,
                  particularly where these may be less obvious due to a child or young person's
                  additional needs or vulnerabilities.
                </li>
              </ul>

              <h3>4. Working Together</h3>
              <p>
                All tutors must understand that safeguarding is everyone's responsibility. It is not
                enough to notice concerns. Tutors must record, report and share those concerns
                following GoWise Learning's safeguarding procedures.
              </p>
              <p>
                When in doubt, tutors should always speak to the Designated Safeguarding Lead (DSL)
                for guidance. Acting promptly and sharing information appropriately can make a
                significant difference in ensuring that children and young people receive the right
                help at the right time.
              </p>

              <h3>5. Supporting Vulnerable Children and Young People</h3>
              <ul>
                <li>
                  Children and young people with SEND, SEMH, communication differences or those
                  dependent on carers may find it harder to express concerns. We commit to using
                  accessible means of communication, allowing trusted adults to help, but not
                  relying solely on guardians if they may be implicated.
                </li>
                <li>
                  We also ensure privacy and dignity in any intimate care, medication support or
                  personal assistance, following strict protocols.
                </li>
              </ul>

              <h3>6. Child and Young Person Participation & Voice</h3>
              <ul>
                <li>
                  We encourage children and young people to speak up about worries in ways that feel
                  safe to them.
                </li>
                <li>
                  We listen, whether that is verbal, non-verbal or through other forms of
                  communication and respect what they tell us.
                </li>
                <li>
                  We involve children and young people in safeguarding and protection practices in
                  ways that are safe, meaningful and appropriate to their age and understanding.
                  This includes listening to their views about their own safety and wellbeing,
                  encouraging them to speak up if they feel worried or unsafe and creating
                  opportunities for them to give feedback on the support and environment we provide.
                  While they are not involved in the investigation or management of concerns, their
                  input helps us improve our safeguarding and protection procedures and ensures our
                  approach remains centred on the needs of children and young people.
                </li>
                <li>
                  GoWise Learning is committed to listening to the views of the children and young
                  people we support, ensuring their feedback helps shape our services and
                  safeguarding practices. GoWise Learning fosters a culture where children and young
                  people feel heard, valued and protected, by providing safe ways for them to share
                  their concerns and by acting on their input to improve their learning and
                  wellbeing.
                </li>
              </ul>

              <h3>7. Information Sharing & Working with Others</h3>
              <ul>
                <li>
                  GoWise Learning works in partnership with parents / guardians, schools, local
                  authorities and relevant agencies.
                </li>
                <li>
                  Where required by law or best practice, we share information responsibly, always
                  respecting confidentiality and never compromising the safety of a child or young
                  person.
                </li>
              </ul>

              <h3>8. Monitoring & Governance</h3>
              <ul>
                <li>
                  We regularly review our safeguarding and protection policies, practices and
                  incidents to learn and improve.
                </li>
                <li>
                  There is always a named member of senior leadership (DSL) responsible for
                  safeguarding oversight.
                </li>
                <li>
                  Safeguarding and protection are integrated into our staff supervision, performance
                  reviews, risk assessments and health & safety procedures.
                </li>
              </ul>

              <h3>9. Review & Updates</h3>
              <ul>
                <li>
                  Our safeguarding and protection policy will be reviewed at least annually or
                  sooner if there are changes in law, guidance or following an incident.
                </li>
                <li>
                  We involve staff, tutors, parents, and carers in reviewing our practice to ensure
                  it is relevant, accessible, and effective.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>GoWise Learning Commitment</h2>
              <p className="large">We will:</p>
              <ul>
                <li>
                  Respond promptly and sensitively to all safeguarding and protection concerns.
                </li>
                <li>
                  Take every report seriously, whether it comes from a tutor, a parent or a learner.
                </li>
                <li>
                  Work in partnership with parents, carers, schools and local authorities to ensure
                  every child and young person is safe.
                </li>
                <li>
                  Provide ongoing safeguarding and protection training and support for our tutors so
                  they can maintain best practice at all times.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Reporting a Safeguarding Concern </h2>
              <p className="large">
                <strong>
                  If at any point you are concerned about a child's or young person's safety or
                  wellbeing, you must take immediate action. Safeguarding and protection is
                  everyone's responsibility.
                </strong>
              </p>
              <p>
                If you are a <strong>parent</strong>, <strong>carer</strong>,<strong> tutor</strong>{' '}
                or <strong>learner </strong>
                and you have a safeguarding concern:
              </p>

              <ol>
                <li>
                  <strong>Take Immediate Action if Needed</strong> - If a child or young person is
                  at immediate risk of harm, call 999 without delay.
                </li>
                <li>
                  <strong>Stay Calm & Listen</strong> - If the child or young person is NOT at
                  immediate risk of harm and shares something with you, listen carefully without
                  judgment and avoid making promises you cannot keep.
                </li>
                <li>
                  <strong>Record the concern</strong> - Note exactly what you have seen, heard or
                  been told, using the child's or young person's own words where possible. Do not
                  add your interpretations or assumptions.
                </li>
                <li>
                  <strong>Report Immediately</strong> - Do not wait. Contact our Safeguarding Team
                  directly on our confidential Safeguarding Line:{' '}
                  <Link to={ContactData.Phone.link}>{ContactData.Phone.text}</Link>
                </li>
                <li>
                  You'll be asked to complete a Safeguarding Concern Form on the same day with the
                  date, time and details of the child or person involved.
                </li>
                <li>
                  <strong>Follow Guidance from the DSL</strong> - The DSL will review the
                  information, assess the level of concern and decide on the next steps.
                </li>
                <li>
                  Continue to provide support/tutoring to the child or young person as appropriate
                  and follow any instructions from the DSL.
                </li>
                <li>
                  <strong>Maintain Confidentiality</strong> - Information about a safeguarding and
                  protection concern must only be shared with the people who need to know to help
                  keep the child or the young person safe. Do not discuss any details of the concern
                  with anyone other than the DSL or relevant authorities.
                </li>
                <li>
                  <strong>If You Are Not Satisfied with the Outcome</strong> - If you believe a
                  safeguarding or protection concern has not been handled appropriately or you
                  continue to have serious concerns about a child's or young person's safety:
                  <ul>
                    <li>
                      For safeguarding concerns about vulnerable young people over the age of 18,
                      you may contact Adult Care Advice and Contact on 0300 456 0111.
                    </li>
                    <li>
                      Alternatively, you can contact the NSPCC Helpline on 0808 800 5000 for
                      confidential advice and support if you are concerned about a child.
                    </li>
                  </ul>
                </li>
              </ol>

              <p className="large">
                Safeguarding and protection is a shared responsibility. Together, we can ensure that
                every child and young person feels safe, supported and able to thrive.
              </p>

              <p className="large">
                We promise to take all concerns seriously, investigate sensitively & confidentially
                and act in the child's or young person's best interest.
              </p>
            </Col>
          </Row>
        </Section>

        <TestimonialSection data={TestimonialsData[0]} />
      </main>
    </>
  );
}

export default Page;
