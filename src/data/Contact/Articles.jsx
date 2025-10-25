import Paths from "paths";

const data = [
  {
    theme: "primary",
    contentSide: "left",
    image: "/media/card1-wide.jpg",
    imageAlt: "Empowering Every Child to Learn and Thrive",
    title: "For Parents",
    subtitle: "Empowering Every Child to Learn and Thrive",
    paragraphs: [
      "Tell us about your child's needs and our friendly team will create an individualised learning plan designed around your child's unique strengths and goals.",
      "At GoWise Learning, we believe every child deserves the right support to reach their full potential, whether they need help catching up, stretching further or managing additional learning challenges.",
    ],
    cta: {
      link: Paths.FORM.Parents,
      theme: "primary",
      text: "Discover How We Support You",
    },
  },
  {
    theme: "secondary",
    contentSide: "left",
    image: "/media/card2-wide.jpg",
    imageAlt: "Join a Vision That Makes a Difference",
    title: "For Tutors",
    subtitle: "Join a Vision That Makes a Difference",
    paragraphs: [
      "At GoWise Learning, we're building a team of passionate educators who share our vision for inclusive, compassionate and effective education.",
      "If you believe in helping every child flourish and want to grow within a supportive and forward-thinking network, we'd love to welcome you on board.",
    ],
    cta: {
      link: Paths.FORM.Parents,
      theme: "secondary",
      text: "Join Our Team",
    },
  },
  {
    theme: "tertiary",
    contentSide: "left",
    image: "/media/card3-wide.jpg",
    imageAlt: "Trusted Partnerships for SEND, SEMH & EHCP Support",
    title: "For Schools & Local Authorities",
    subtitle: "Trusted Partnerships for SEND, SEMH & EHCP Support",
    paragraphs: [
      "We work closely with schools and local authorities to deliver targeted, high-quality support for children with SEND, SEMH needs and those with EHCPs.",
      "Our experienced tutors and specialists collaborate with your team to ensure consistent progress, wellbeing and measurable outcomes, so every learner receives the care and attention they deserve.",
    ],
    cta: {
      link: Paths.FORM.Parents,
      theme: "tertiary",
      text: "Let's build brighter futures together",
    },
  },
];

export default data;
