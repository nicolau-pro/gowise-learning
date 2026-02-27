import Media from 'media';
import ContactData from 'data/Contact';

const data = {
  strip: false,
  background: Media.tutorTeachingDaughterAtHomeLearning,
  theme: 'primary',
  h1: 'For Parents',
  subtitle: 'You have our support!',
  h3: "At GoWise Learning, we know how much you want the very best for your child. As parents, you carry both the joy and the responsibility of making sure your child feels safe, supported, and able to thrive. That's why we are here: to walk alongside you, giving you the peace of mind that your child's needs are being fully understood and met.",
  buttons: [
    {
      link: ContactData.Calendy.link,
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
};

export default data;
