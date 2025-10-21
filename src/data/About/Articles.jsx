import Persons from "data/Persons";

const data = [
  {
    theme: "primary",
    contentSide: "left",
    image: Persons.AnamariaBlanaru.portrait,
    imageAlt: "Proud suppliers to local authorities and schools",
    title: "A Word from Our Founder",
    paragraphs: [
      "“As the founder of GoWise Learning, I know first-hand the challenges families face in finding the right support for their children. With over 10 years of experience working with Special Educational Needs (SEN) and neurodiverse children, including autism, ADHD, dyslexia, and other learning differences, I created GoWise Learning to make sure no child is overlooked. My vision has always been to combine professionalism with genuine care, so that every child feels seen, safe, supported and able to thrive. GoWise Learning is not just about education, it's about helping children grow in confidence, joy and independence.”",
      `<strong>${Persons.AnamariaBlanaru.name}</strong><br/>${Persons.AnamariaBlanaru.title}`,
    ],
  },
];

export default data;
