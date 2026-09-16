/**
 * MindGame Africa — Education Content
 *
 * All text strings for the Education page, conforming strictly to §9 of the content source of truth.
 */

export const educationStatusStrings = {
  learnMoreVersion:
    "Our education and professional development portfolio is being developed progressively. New workshops, learning series and structured programmes will be announced as they are ready.",
  mainNavVersion:
    "Our education and professional development portfolio is being developed progressively. Current workshops, seminars and structured programmes will be published here as they are ready.",
} as const;

export const educationContent = {
  hero: {
    eyebrow: "PROFESSIONAL EDUCATION",
    heading: "Education and Professional Development",
    supportingSentence:
      "We are building learning experiences that help practitioners, coaches, students and performance professionals understand evidence, apply it responsibly and improve the quality of their work.",
  },

  whatEducationMeans: {
    eyebrow: "EDUCATIONAL PHILOSOPHY",
    heading: "Grounded in Evidence, Connected to Practice",
    paragraph1:
      "Education at MindGame Africa should not be a collection of motivational talks or generic online courses. Our programmes are intended to be grounded in evidence, connected to real performance problems and designed around what a participant should be able to understand, apply, analyse or improve after the learning experience.",
    paragraph2:
      "Some learning experiences may be short workshops or professional development sessions. Others may develop into structured certificate programmes, practitioner pathways, seminars, masterclasses or collaborative university offerings as the institution grows.",
  },

  whoWeServe: {
    eyebrow: "LEARNER GROUPS",
    heading: "Who We Intend to Serve",
    audiences: [
      "Coaches and coaching staff.",
      "Sport psychologists and mental performance practitioners.",
      "Performance analysts and other sport science professionals.",
      "Students and emerging practitioners.",
      "Sport administrators and performance leaders.",
      "University departments and academic programmes.",
      "Teams, clubs, academies and federations seeking internal professional development.",
    ] as const,
  },

  developingProgrammeAreas: {
    eyebrow: "PORTFOLIO DEVELOPMENT",
    heading: "Developing Programme Areas",
    subheading:
      "Presented as developing programme areas. Programmatic offerings will be announced as curriculum and qualified faculty are confirmed.",
    areas: [
      {
        id: "mental-performance",
        title: "Applied mental performance.",
        description:
          "Evidence-based cognitive and behavioural interventions in competitive sport.",
        status: "developing",
      },
      {
        id: "coaching-psychology",
        title: "Coaching psychology and coach behaviour.",
        description:
          "Communication dynamics, psychological environments, and coach decision-making.",
        status: "developing",
      },
      {
        id: "athlete-development",
        title: "Athlete development.",
        description:
          "Comprehensive pathways, psychological maturation, and transition support across stages.",
        status: "developing",
      },
      {
        id: "performance-leadership",
        title: "Performance leadership.",
        description:
          "Strategic governance, high-demand team dynamics, and institutional culture.",
        status: "developing",
      },
      {
        id: "football-analysis",
        title: "Football performance analysis.",
        description:
          "Tactical, physical, and behavioural performance metrics in modern football.",
        status: "developing",
      },
      {
        id: "referee-performance",
        title: "Referee performance.",
        description:
          "Decision-making under pressure, perceptual cognitive expertise, and stress regulation.",
        status: "developing",
      },
      {
        id: "practitioner-development",
        title: "Applied practitioner development.",
        description:
          "Professional standards, supervision routes, and competence-building for practitioners.",
        status: "developing",
      },
      {
        id: "research-literacy",
        title: "Research literacy, evidence translation and professional practice.",
        description:
          "Critical evaluation of evidence, methodology, and direct translation into practice.",
        status: "developing",
      },
    ] as const,
  },

  learningExperience: {
    eyebrow: "PEDAGOGICAL DESIGN",
    heading: "The Learning Experience",
    features: [
      "Clear learning outcomes.",
      "Evidence informed teaching.",
      "Applied examples drawn from real performance environments.",
      "Practical tools and structured reflection.",
      "Case based discussion where appropriate.",
      "Assessment or demonstration of learning where the programme requires it.",
      "Access to qualified facilitators, faculty or specialist contributors.",
      "Clear distinction between professional development and formal academic or statutory accreditation.",
    ] as const,
  },

  // Both §9.7 strings preserved as separate named exports
  statusNoticeLearnMore: educationStatusStrings.learnMoreVersion,
  statusNoticeMainNav: educationStatusStrings.mainNavVersion,

  cta: {
    eyebrow: "COLLABORATE & LEARN",
    line: "Interested in learning, teaching or developing a programme with us?",
    button: "Discuss Education and Professional Development",
    href: "/partner-with-us?type=Professional+Education",
  },
} as const;
