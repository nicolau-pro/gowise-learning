import Media from "media";

const data = [
  {
    title: "Parents,",
    subtitle: "Guardians and Carers",
    titleFooter: "For Parents",
    details:
      "Tell us about your child's needs and our friendly team will create an individualised learning plan designed around your child's unique strengths and goals.",
    image: Media.motherTeachingDaughterAtHomeLearning,
    theme: "light",
    button: {
      text: "TELL ME MORE",
      link: "/parents",
      ariaLabel: "learn more about GoWise for parents",
      theme: "secondary",
    },
  },
  {
    title: "Tutors,",
    subtitle: "SEN Learning Support Assistants",
    titleFooter: "For Tutors",
    details:
      "If you believe in helping every child flourish and want to grow within a supportive and forward-thinking network, we'd love to welcome you on board.",
    image: Media.teacherExplainingScienceToStudents,
    theme: "dark",
    button: {
      text: "LEARN MORE",
      link: "/tutors",
      ariaLabel: "learn more about GoWise for tutors",
      theme: "primary",
    },
  },
  {
    title: "Schools,",
    subtitle: "Local Authorities",
    titleFooter: "Schools & Local Authorities",
    details:
      "We work closely with schools and local authorities to deliver targeted, high-quality support for children with SEND, SEMH needs and those with EHCPs.",
    image: Media.teacherExplainingMathInClassroom,
    theme: "light",
    button: {
      text: "GET IN TOUCH",
      link: "/schools-and-local-authorities",
      ariaLabel: "learn more about GoWise for schools and local authorities",
      theme: "tertiary",
    },
  },
];

export default data;
