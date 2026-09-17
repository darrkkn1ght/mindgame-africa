/**
 * MindGame Africa — About Page Content
 *
 * All text strings for the About page, conforming strictly to §4 of the content source of truth.
 */

export const aboutContent = {
  hero: {
    eyebrow: "ABOUT MINDGAME AFRICA",
    heading: "About MindGame Africa",
    supportingSentence:
      "MindGame Africa is a performance science, research, education and professional practice institution being built to strengthen the human and intellectual capability behind performance in Africa.",
  },

  core: {
    eyebrow: "INSTITUTIONAL MANDATE",
    paragraph1:
      "We connect evidence with practice by working on performance problems, producing and translating knowledge, developing practitioners and creating stronger routes between universities, specialists and real performance environments.",
    paragraph2:
      "Our starting point is simple. Performance is not only a question of talent, facilities or physical preparation. It is also shaped by how people think, learn, decide, communicate, adapt, regulate themselves, respond to pressure, interpret information and work within the environments around them.",
    paragraph3:
      "MindGame Africa therefore sits at the intersection of performance science, research, education and applied professional practice. Our present applied capability provides the foundation from which a deliberately multidisciplinary performance science institution can progressively develop.",
  },

  definingIdea: {
    heading: "How We Think About Performance",
    quote:
      "Performance is not one thing. The same visible problem can have different causes, and the discipline required should be determined by the problem rather than by the service someone wants to sell.",
  },

  currentStrengths: {
    heading: "Our Current Strengths Include:",
    items: [
      "Performance psychology",
      "Mental performance",
      "Behavioural performance",
    ] as const,
    balancingClause: "Our broader direction is deliberately multidisciplinary.",
  },

  whyAfrica: {
    eyebrow: "CONTEXT & PURPOSE",
    heading: "Why Africa Needs This Institution",
    copy: "Africa should not only consume performance knowledge produced elsewhere. We need stronger local evidence, more opportunities for practitioners to develop, deeper collaboration between universities and practice, and performance approaches that are informed by the realities of African sport and high pressure environments.",
  },

  approach: {
    eyebrow: "CORE PRINCIPLES",
    heading: "How We Approach the Work",
    principles: [
      "We begin with the performance question, not with a fashionable technique.",
      "We use evidence carefully and communicate its limits.",
      "We work within competence and bring in other specialists when the question requires it.",
      "We value measurement and review, but we do not reduce performance to numbers alone.",
      "We distinguish professional performance support from clinical treatment and refer appropriately where a need falls outside our scope.",
      "We intend to document, learn from and translate the work so that practice contributes to stronger knowledge.",
    ] as const,
  },

  whatWeAreBuilding: {
    eyebrow: "LONG-TERM VISION",
    heading: "What We Are Building",
    copy: "Over time, MindGame Africa is intended to grow into a stronger network of practitioners, researchers, faculty, professional development programmes, research collaborations and multidisciplinary performance science capability. We will build these areas progressively and will only present a capability as active when the people, standards and infrastructure required to deliver it properly are in place.",
  },

  leadershipTeaser: {
    eyebrow: "LEADERSHIP & PEOPLE",
    heading: "Founded on Applied Science & Intellectual Rigour",
    founder: {
      name: "Dr. Joshua A. Oparachukwu",
      designation:
        "Founder, MindGame Africa | Performance Psychologist | Performance Strategist",
      summary:
        "Leads MindGame Africa's strategic direction across applied performance practice, research, professional education and practitioner development.",
    },
    cta: {
      label: "Meet the People & Leadership",
      href: "/people",
    },
  },
} as const;
