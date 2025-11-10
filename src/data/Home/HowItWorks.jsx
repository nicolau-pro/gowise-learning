import Paths from 'paths';
import Media from 'media';
import ContactData from 'data/Contact';

const data = [
  {
    theme: 'primary',
    contentSide: 'right',
    image: Media.teacherHelpingChildLearning,
    title: 'Step One:<br/>Free Consultation',
    paragraphs: [
      "Begin your child's journey by completing our short enquiry form — take your time to tell us about their learning needs, interests and goals. After carefully reviewing the information you've shared, our friendly team will get in touch within 2-3 working days.",
      `Alternatively, you can get in touch with us directly and book a free consultation with one of our friendly education consultants. Call us on <a href="${ContactData.Phone.link}">${ContactData.Phone.text}</a> or email us at <a href="${ContactData.Email.link}">${ContactData.Email.text}</a> - we're happy to help.During this conversation, we'll listen carefully and gather all the information needed to create your child's <strong>Individualised Learning Plan (ILP).</strong>`,
      'This ensures we understand exactly what support will help your child feel safe, confident and ready to learn.',
    ],
    cta: {
      link: Paths.FORMS.Parents,
      openInNewTab: true,
      theme: 'secondary',
      text: 'Book a FREE CONSULTATION',
    },
  },
  {
    theme: 'primary',
    contentSide: 'right',
    image: Media.tutorAndChildOnlineLearning,
    title: 'Step Two:<br/>Tutor Match & Planning',
    paragraphs: [
      "Once we have a full picture of your child's needs, we carefully select the tutor who is the best fit for their learning profile and personality.",
      "You'll be notified as soon as a match is found - usually within <strong>1-5 days</strong>, and sometimes as quickly as the same day.",
      "Before the first session, your tutor will review your child's ILP to ensure a smooth, confident and welcoming start.",
    ],
  },
  {
    theme: 'primary',
    contentSide: 'right',
    image: Media.creativeLearningWithTutorAndChild,
    title: 'Step Three:<br/>Paid Trial Session',
    subtitle: 'We recommend starting with a trial session.',
    paragraphs: [
      'This allows your child and tutor to spend a full session together, building rapport and ensuring our approach feels right for your family.',
      "After the trial, we'll follow up with a call or email to gather your feedback and answer any questions. There's no obligation to continue - we want every family to feel completely comfortable before committing.",
    ],
  },
  {
    theme: 'primary',
    contentSide: 'right',
    image: Media.woodenCountingToys,
    title: 'Step Four: Ongoing Support & Learning Blocks',
    subtitle:
      "If you choose to continue, we'll help you select the tutoring package that best suits your child and your family.",
    paragraphs: [
      'We work in blocks of four sessions.',
      " After the paid trial, we'll invoice for the remaining three sessions in the first block, and thereafter at the start of each new block.",
      "Your tutor will provide ongoing updates and feedback, so you can see your child's progress, confidence and love of learning grow with every session.",
    ],
  },
];

export default data;
