import Persons from 'data/Persons';
import Paths from 'paths';

const data = {
  strip: '/media/hero-strip.jpg',
  background: false,
  theme: 'primary',
  preh1: 'Welcome to GoWise Learning',
  h1: 'Specialist SEND Tutoring',
  h1Mobile: 'Specialist SEND Tutoring',
  subtitle: 'Where every child is seen, heard and supported.',
  subtitleHideMobile: true,
  h3: `We deliver high-quality 1:1 and small-group SEND tutoring across Carshalton, Sutton, Merton, Wallington, Cheam, Epsom and nearby Surrey areas, supporting children and young people aged 0-25 with Special Educational Needs and Disabilities (SEND), Social, Emotional and Mental Health (SEMH) needs and Education, Health and Care Plans (EHCPs). Our qualified tutors combine emotional, sensory and academic support to create truly individualised learning experiences, ensuring every learner feels safe, understood and motivated to reach their full potential.
`,
  button: {
    link: Paths.CONTACT_FORMS,
    theme: 'secondary',
    text: 'Book a FREE CONSULTATION',
  },

  person: {
    ...Persons.AnamariaBlanaru,
    quote:
      'We collaborate with parents, local authorities, schools and professionals to help every child thrive academically, socially and emotionally.',
  },
};

export default data;
