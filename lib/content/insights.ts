/**
 * MindGame Africa — Insights Content
 *
 * All text strings for the Insights page, conforming strictly to §11 of the content source of truth.
 */

export const insightsContent = {
  hero: {
    eyebrow: "KNOWLEDGE PLATFORM",
    heading: "Insights and Performance Knowledge",
    supportingSentence:
      "MindGame Africa translates research, professional experience and performance questions into useful knowledge for athletes, coaches, practitioners, researchers and organisations.",
  },

  contentArchitecture: {
    eyebrow: "EDITORIAL ARCHITECTURE",
    heading: "What You Will Find Here",
    subheading:
      "Our knowledge repository translates rigorous research and frontline performance experience into actionable formats.",
    items: [
      {
        title: "Explainers",
        description:
          "Clear conceptual breakdowns of complex performance science principles and models.",
      },
      {
        title: "Evidence reviews",
        description:
          "Systematic summaries examining contemporary scientific literature on critical performance themes.",
      },
      {
        title: "Case lessons",
        description:
          "De-identified examinations of applied challenges, interventions, and practical insights.",
      },
      {
        title: "Practitioner perspectives",
        description:
          "Reflective accounts from specialists navigating high-pressure performance environments.",
      },
      {
        title: "Interviews",
        description:
          "In-depth dialogues with coaches, scientists, practitioners, and leaders across African sport.",
      },
      {
        title: "Research summaries",
        description:
          "Accessible syntheses of recent peer-reviewed investigations and applied studies.",
      },
      {
        title: "Performance frameworks",
        description:
          "Structured methodologies for assessment, intervention design, and performance review.",
      },
      {
        title: "Field notes",
        description:
          "Observations and direct lessons recorded during live training, camps, and competitions.",
      },
      {
        title:
          "Commentary on issues affecting performance science and professional practice in Africa",
        description:
          "Critical analysis of institutional infrastructure, ethical standards, and regional capability.",
      },
    ] as const,
  },

  developmentStatus: {
    eyebrow: "KNOWLEDGE ARCHIVE",
    heading: "Library in Development",
    copy: "The MindGame Africa knowledge library is being built. New articles, evidence reviews, practitioner resources and research translations will be published here.",
  },

  mailingList: {
    eyebrow: "KNOWLEDGE DISPATCH",
    heading: "Subscribe to Performance Insights",
    description:
      "Receive newly released research translations, evidence reviews and practitioner resources directly. We share structured institutional knowledge, not promotional material.",
    buttonLabel: "Subscribe to Knowledge Dispatches",
  },

  plannedCategories: [
    {
      id: "research-translation",
      title: "Research Translation",
      description: "Translating scientific findings into practice.",
      isPublic: false,
    },
    {
      id: "performance-psychology",
      title: "Performance Psychology",
      description: "Cognitive, emotional and behavioural aspects of performance.",
      isPublic: false,
    },
    {
      id: "coaching-practice",
      title: "Coaching & Practice",
      description: "Evidence-informed coaching methodologies.",
      isPublic: false,
    },
    {
      id: "practitioner-development",
      title: "Practitioner Development",
      description: "Routes to competent performance practice.",
      isPublic: false,
    },
  ] as const,
} as const;
