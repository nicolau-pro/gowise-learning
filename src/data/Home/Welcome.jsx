import Persons from "data/Persons";
import Paths from "paths";

const data = {
  strip: "/media/hero-strip.jpg",
  background: false,
  theme: "primary",
  h1: "WELCOME",
  h1Mobile: "Welcome to",
  subtitle: "To GoWise Learning",
  subtitleHideMobile: true,
  h3: `<span>Qualified Holistic SEND Tutors - Tailored Support for Every Child's Unique Needs</span>
  <img class="hero-small-image" src="/media/creative-learning-with-tutor-and-child.webp" />
  GoWise Learning is built on the belief that every learner can flourish when they feel calm in their body, confident in their mind and connected to the world around them. Our holistic tutors combine empathy, expertise and genuine care to nurture growth from the inside out, allowing academic progress to follow naturally, as confidence and wellbeing take root.`,
  buttons: [
    {
      link: Paths.FORMS.Parents,
      openInNewTab: true,
      theme: "secondary",
      text: "Book a FREE CONSULTATION",
    },
    {
      link: Paths.FORMS.Tutors,
      openInNewTab: true,
      theme: "tertiary",
      text: "Apply to JOIN OUR TEAM",
    },
  ],
  person: {
    ...Persons.AnamariaBlanaru,
    quote:
      "Together for every child's success - to be used somewhere to show connection, collaboration and commitment between professionals. We&nbsp;collaborate with parents, local authorities, schools and professionals to help every child thrive academically, socially and emotionally.",
  },
};

export default data;
