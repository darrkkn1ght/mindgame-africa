/**
 * MindGame Africa — Contact Content
 *
 * All text strings for the Contact page, conforming strictly to §14 of the content source of truth.
 */

export const contactContent = {
  hero: {
    eyebrow: "CONTACT",
    heading: "Contact MindGame Africa",
    supportingSentence:
      "For performance inquiries, research conversations, education, professional collaboration or general questions, use the contact details below or send us a message through the form.",
  },

  detailsBlock: {
    eyebrow: "DIRECT CONTACT",
    heading: "Contact Details",
    description:
      "Direct communication channels for reaching our institutional team.",
  },

  form: {
    eyebrow: "SEND A MESSAGE",
    heading: "Contact Form",
    labels: {
      fullName: "Full name",
      organisation: "Organisation (optional)",
      email: "Email address",
      subject: "Subject",
      message: "Message",
      consent:
        "I consent to MindGame Africa using the information provided to respond to this inquiry.",
      submitButton: "Send Message",
      submittingButton: "Sending Message...",
    },
  },
} as const;
