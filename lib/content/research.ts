/**
 * MindGame Africa — Research Content
 *
 * All text strings for the Research page, conforming strictly to §8 of the content source of truth.
 */

export const researchContent = {
  hero: {
    eyebrow: "RESEARCH & KNOWLEDGE PRODUCTION",
    heading: "Research and Knowledge",
    supportingSentence:
      "We want to produce, examine and translate knowledge that helps us understand performance in African contexts and improves the quality of practice around it.",
  },

  mandate: {
    eyebrow: "RESEARCH MANDATE",
    heading: "Close to Real Performance Questions",
    paragraph1:
      "Research at MindGame Africa is intended to sit close to real performance questions. We are interested in work that is methodologically sound, ethically responsible and useful enough to deepen understanding, challenge assumptions, improve professional practice or inform the design of better performance interventions.",
    paragraph2:
      "An important part of our mandate is to contribute more African evidence to fields in which performance knowledge is still too often imported from contexts that do not fully reflect the realities in which African athletes, coaches, practitioners and organisations operate.",
  },

  themes: {
    eyebrow: "INVESTIGATION AREAS",
    heading: "Research Themes",
    subheading:
      "Current research interests and developing themes, investigated across real performance environments.",
    list: [
      "Performance under pressure and psychological response to demanding environments.",
      "Mistake response, recovery and performance after error.",
      "Confidence, self regulation, attention and behavioural adaptation.",
      "Coach behaviour and its influence on athlete development and performance.",
      "Team psychology, communication and performance environments.",
      "Talent development and the experiences surrounding athlete progression.",
      "African performance environments and the contextual factors that shape practice.",
      "Practitioner development, professional standards and the translation of evidence into practice.",
      "Performance technology, assessment and the responsible use of measurement.",
      "Interdisciplinary approaches to athlete and team performance.",
    ] as const,
  },

  approach: {
    eyebrow: "METHODOLOGICAL RIGOUR",
    heading: "Our Research Approach",
    principles: [
      "Start with questions that matter in practice.",
      "Use methods that are appropriate to the question rather than forcing every problem into one methodological tradition.",
      "Protect ethical standards, informed consent, confidentiality and responsible data handling.",
      "Distinguish clearly between evidence, interpretation and speculation.",
      "Work with universities, practitioners and performance organisations where collaboration improves the quality of the work.",
      "Translate findings into usable knowledge for practitioners, coaches, athletes and decision makers.",
    ] as const,
  },

  collaborate: {
    eyebrow: "ACADEMIC & SECTOR COLLABORATION",
    heading: "Collaborate With Us",
    copy: "We are open to conversations with universities, academic departments, researchers, postgraduate students, sport organisations, clubs, federations, practitioners and international institutions interested in African performance research, programme evaluation, applied studies, research translation or joint knowledge development.",
    types: [
      "Joint research projects.",
      "Applied research within sport and performance environments.",
      "Programme evaluation.",
      "Research supervision or practitioner research collaboration where appropriate.",
      "Data collection partnerships.",
      "Research translation and knowledge dissemination.",
      "Guest researchers, research associates and specialist collaboration.",
    ] as const,
    cta: {
      line: "Have a research question or collaboration idea?",
      button: "Start a Research Conversation",
      href: "/partner-with-us?type=Research+and+Evaluation",
    },
  },

  outputsStatus: {
    eyebrow: "PORTFOLIO STATUS",
    heading: "Research Outputs",
    copy: "Research outputs, reports, publications and active projects will be added here as the MindGame Africa research portfolio develops.",
  },
} as const;
