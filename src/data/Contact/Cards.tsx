import Paths from "paths";

const data = [
  {
    title: "I'm a parent",
    titleFooter: "For Parents",
    details: "Consultations are free",
    image: "card1.jpg",
    theme: "light",
    button: {
      text: "Book consultation",
      link: Paths.FORM.Parents,
      openInNewTab: true,
      ariaLabel: "learn more about GoWise for parents",
      theme: "secondary",
    },
  },
  {
    title: "I'm a tutor",
    titleFooter: "For Tutors",
    details: "Join our team",
    image: "card2.jpg",
    theme: "dark",
    button: {
      text: "Join our team",
      link: Paths.FORM.Tutors,
      openInNewTab: true,
      ariaLabel: "learn more about GoWise for tutors",
      theme: "primary",
    },
  },
  {
    title: "Schools and LAs",
    titleFooter: "Schools & Local Authorities",
    details: "Get in touch.",
    image: "card3.jpg",
    theme: "light",
    button: {
      text: "Register with us",
      link: Paths.FORM.Schools,
      openInNewTab: true,
      ariaLabel: "learn more about GoWise for schools and local authorities",
      theme: "tertiary",
    },
  },
];

export default data;
