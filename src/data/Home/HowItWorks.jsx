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
      "Begin your child's journey by booking a free 30-minute consultation at a time that suits you. This is a relaxed opportunity for us to talk about your child's needs, strengths and goals, and explore how we can support them.",
      `Alternatively, you are welcome to contact us directly to arrange your consultation. Call us on <a href="${ContactData.Phone.link}">${ContactData.Phone.text}</a> or email us at <a href="${ContactData.Email.link}">${ContactData.Email.text}</a> - we are always happy to help.`,
      "During our conversation, we will listen carefully and gather the key information needed to design your child's Individualised Learning Plan (ILP). This ensures we fully understand the support required to help your child feel safe, confident and ready to learn.",
      "To begin the personalised matching process and prepare your child's ILP, a small non-refundable administration fee applies, as outlined in our Terms of Service.",
    ],
    cta: {
      link: ContactData.Calendy.link,
      openInNewTab: true,
      theme: 'secondary',
      text: ContactData.Calendy.button.short,
      subtext: ContactData.Calendy.subtext,
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
      'After the paid trial session, if you decide to continue, we will invoice you for your first full block of four sessions. Each block is paid in advance to ensure consistent, uninterrupted support for your child.',
      "Your tutor will provide ongoing updates and feedback, so you can see your child's progress, confidence and love of learning grow with every session.",
    ],
  },
];

export default data;
