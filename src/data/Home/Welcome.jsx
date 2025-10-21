import Persons from "data/Persons";

const data = {
  strip: "hero-strip.jpg",
  background: false,
  theme: "primary",
  h1: "WELCOME",
  subtitle: "To GoWise Learning",
  h3: "<strong>Qualified Holistic SEND Tutors - Tailored Support for Every Child's Unique Needs</strong><br />GoWise Learning is built on the belief that every learner can flourish when they feel calm in their body, confident in their mind and connected to the world around them. Our holistic tutors combine empathy, expertise and genuine care to nurture growth from the inside out, allowing academic progress to follow naturally, as confidence and wellbeing take root.",
  buttons: [
    {
      link: "/contact",
      theme: "secondary",
      text: "Book a free consultation",
    },
    {
      link: "/contact",
      theme: "tertiary",
      text: "Apply to join our team",
    },
  ],

  person: {
    ...Persons.AnamariaBlanaru,
    quote:
      "Together for every child's success - to be used somewhere to show connection, collaboration and commitment between professionals.<br />We collaborate with parents, local authorities, schools and professionals to help every child thrive academically, socially and emotionally.",
  },
};

export default data;
