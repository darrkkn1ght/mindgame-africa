/**
 * MindGame Africa — Partner With Us Content
 *
 * All text strings for the Partner With Us page and form,
 * conforming strictly to §13 of the content source of truth.
 */

export const partnerContent = {
  hero: {
    eyebrow: "COLLABORATION & PARTNERSHIP",
    heading: "Partner With MindGame Africa",
    supportingSentence:
      "We are open to collaborations that strengthen performance practice, research, professional education, practitioner development and the production of useful knowledge around performance in Africa.",
  },

  routesHeading: {
    eyebrow: "ROUTES TO COLLABORATION",
    heading: "Partnership Routes",
  },

  routes: [
    {
      title: "Performance Engagements",
      description:
        "For teams, clubs, academies, athletes, coaches and organisations that want to discuss a performance problem or intervention.",
      type: "Performance Engagement",
      ctaLabel: "Discuss Collaboration",
      destination: "/partner-with-us?type=Performance+Engagement#partner-form",
    },
    {
      title: "Research and Evaluation",
      description:
        "For universities, researchers, sport organisations and other institutions interested in applied research, programme evaluation, data collection or joint studies.",
      type: "Research and Evaluation",
      ctaLabel: "Discuss Collaboration",
      destination: "/partner-with-us?type=Research+and+Evaluation#partner-form",
    },
    {
      title: "University and Academic Collaboration",
      description:
        "For departments and institutions interested in teaching, research, student development, internships, guest faculty, supervision or knowledge exchange.",
      type: "University or Academic Collaboration",
      ctaLabel: "Discuss Collaboration",
      destination:
        "/partner-with-us?type=University+or+Academic+Collaboration#partner-form",
    },
    {
      title: "Professional Education",
      description:
        "For organisations seeking workshops, seminars, internal professional development or the co development of a structured learning programme.",
      type: "Professional Education",
      ctaLabel: "Discuss Collaboration",
      destination: "/partner-with-us?type=Professional+Education#partner-form",
    },
    {
      title: "Practitioner and Faculty Collaboration",
      description:
        "For qualified specialists interested in contributing expertise, teaching, research, supervision or applied work.",
      type: "Practitioner or Faculty Collaboration",
      ctaLabel: "Discuss Collaboration",
      destination:
        "/partner-with-us?type=Practitioner+or+Faculty+Collaboration#partner-form",
    },
    {
      title: "Institutional and International Partnerships",
      description:
        "For organisations interested in longer term research, education, technical collaboration, exchange or capacity development with a clear connection to MindGame Africa's mandate.",
      type: "Institutional or International Partnership",
      ctaLabel: "Discuss Collaboration",
      destination:
        "/partner-with-us?type=Institutional+or+International+Partnership#partner-form",
    },
  ] as const,

  collaborationTypes: [
    "Performance Engagement",
    "Research and Evaluation",
    "University or Academic Collaboration",
    "Professional Education",
    "Practitioner or Faculty Collaboration",
    "Institutional or International Partnership",
    "Other",
  ] as const,

  form: {
    eyebrow: "START A CONVERSATION",
    heading: "Partner With Us",
    intro:
      "Tell us what you are trying to build, examine or improve, and where you think MindGame Africa may fit.",
    labels: {
      fullName: "Full name",
      organisation: "Organisation or institution",
      role: "Role or position",
      email: "Email address",
      country: "Country",
      collaborationType: "Type of collaboration",
      discussionTopic: "Briefly describe what you would like to discuss",
      usefulOutcome:
        "What would a useful outcome from this collaboration look like?",
      preferredContact: "Preferred way to continue the conversation",
      consent:
        "I consent to MindGame Africa using the information provided to respond to this collaboration inquiry.",
      submitButton: "Send Collaboration Inquiry",
      submittingButton: "Submitting...",
    },
  },
} as const;
