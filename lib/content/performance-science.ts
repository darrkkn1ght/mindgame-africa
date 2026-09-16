/**
 * MindGame Africa — Performance Science Content
 *
 * All text strings for the Performance Science page, conforming strictly to §7 of the content source of truth.
 */

export const performanceScienceContent = {
  hero: {
    eyebrow: "MULTIDISCIPLINARY PLATFORM",
    heading: "Performance Science",
    supportingSentence:
      "Performance is rarely explained by one discipline. MindGame Africa is being built to connect the scientific perspectives that help us understand how people prepare, adapt, perform and recover.",
  },

  intro: {
    eyebrow: "FOUNDATIONAL PERSPECTIVE",
    paragraph1:
      "Our performance science direction is multidisciplinary. Psychology and behavioural performance are important parts of that work, but they are not the whole of performance. Depending on the question, performance may also need to be understood through coaching science, physiology, biomechanics, strength and conditioning, performance analysis, nutrition, data and other relevant disciplines.",
    paragraph2:
      "MindGame Africa will develop this capability responsibly. We will not present a discipline, laboratory or technical service as active until the qualified people, methods and infrastructure required to deliver it properly are genuinely in place.",
  },

  functionItems: {
    eyebrow: "CORE MANDATE",
    heading: "What the Performance Science Function Should Do",
    items: [
      "Help frame performance problems in a way that allows the right disciplines to contribute.",
      "Connect scientific knowledge with training, competition and professional practice.",
      "Support assessment and interpretation where appropriate.",
      "Encourage collaboration between specialists rather than isolated professional silos.",
      "Translate complex findings into decisions that athletes, coaches and organisations can use.",
      "Create stronger links between African performance environments and contemporary performance science.",
    ] as const,
  },

  futureCapabilityAreas: {
    eyebrow: "FUTURE & DEVELOPING CAPABILITY",
    heading: "Areas of Future and Developing Capability",
    subheading:
      "These are areas of multidisciplinary direction, not services currently available. We will only present a capability as active when qualified specialists, methods and infrastructure are genuinely in place.",
    capabilities: [
      {
        id: "psychology-behaviour",
        title: "Performance psychology and behavioural performance.",
        description:
          "Understanding cognitive, emotional and behavioural mechanisms under demand.",
        status: "developing",
      },
      {
        id: "coaching-science",
        title: "Coaching science.",
        description:
          "Examining pedagogical models, coach behaviour, and effective learning environments.",
        status: "developing",
      },
      {
        id: "performance-analysis",
        title: "Performance analysis.",
        description:
          "Systematic objective analysis of tactical, technical and behavioural event data.",
        status: "developing",
      },
      {
        id: "exercise-physiology",
        title: "Exercise physiology.",
        description:
          "Understanding acute responses and chronic adaptations to physical training loads.",
        status: "developing",
      },
      {
        id: "biomechanics",
        title: "Biomechanics.",
        description:
          "Mechanical analysis of human movement, technique efficiency and injury mechanisms.",
        status: "developing",
      },
      {
        id: "strength-conditioning",
        title: "Strength and conditioning.",
        description:
          "Physical preparation frameworks for robust movement, force production and resilience.",
        status: "developing",
      },
      {
        id: "nutrition-recovery",
        title: "Nutrition and recovery.",
        description:
          "Metabolic support, recovery protocols and contextual dietary strategies.",
        status: "developing",
      },
      {
        id: "methods-measurement",
        title: "Research methods, data and performance measurement.",
        description:
          "Methodological rigour, valid testing protocols and sound statistical interpretation.",
        status: "developing",
      },
    ] as const,
  },

  cta: {
    eyebrow: "SPECIALIST COLLABORATION",
    line: "Are you a performance specialist, academic department, research group or organisation interested in contributing to multidisciplinary performance work in Africa?",
    button: "Explore Collaboration With MindGame Africa",
    href: "/partner-with-us?type=Practitioner+or+Faculty+Collaboration",
  },
} as const;
