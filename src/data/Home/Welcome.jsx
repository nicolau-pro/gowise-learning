import Persons from 'data/Persons';
import Paths from 'paths';
import ContactData from 'data/Contact';

const data = {
  strip: '/media/hero-strip.jpg',
  background: false,
  theme: 'primary',
  preh1: 'Welcome to GoWise Learning: The specialist',
  h1: 'SEND tutoring you can trust',
  preh1Mobile: 'Welcome to',
  h1Mobile: 'The specialist SEND tutoring you can trust',
  subtitle: 'Where every child is seen, heard and supported.',
  subtitleHideMobile: true,
  h3: `<img class="hero-small-image desktop-hidden" src="/media/learning-support-interaction.webp" alt="Teacher providing one-on-one learning support to a young girl with Down syndrome using educational wooden toys at a table." />GoWise Learning provides holistic, specialist tuition for children and young people with autism, ADHD, anxiety, school refusal (EBSA) and Education, Health and Care Plans (EHCPs).<br /><br />If your child feels overwhelmed by school, is struggling emotionally or falling behind academically, you are not alone and support is available.<br /><br />We carefully match each learner with the right tutor based on their unique interests, strengths, learning profile and academic gaps. Our approach combines emotional regulation, sensory understanding and high-quality academic teaching, so children can rebuild confidence and develop a genuine love for learning while making real, measurable progress in core subjects.

`,
  buttons: [
    {
      link: ContactData.Calendy.min30,
      openInNewTab: true,
      theme: 'secondary',
      text: 'Book Your Free 30-minute Consultation',
      textMobile: "Book a Free 30' Consultation",
    },
    {
      link: ContactData.Phone.link,
      theme: 'primary',
      text: '...or call 07398 693 595',
    },
  ],

  subtext:
    "Select a time that suits you and let's explore how we can help your child feel safe, confident and ready to learn again.",

  person: {
    ...Persons.AnamariaBlanaru,
    quote:
      'We collaborate with parents, local authorities, schools and professionals to help every child thrive academically, socially and emotionally.',
  },
};

export default data;
