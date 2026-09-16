/**
 * MindGame Africa — Performance Services Content
 *
 * All text strings for the Performance Services page, conforming strictly to §5 of the content source of truth.
 */

export const performanceServicesContent = {
  hero: {
    eyebrow: "SERVICES & APPLIED PRACTICE",
    heading: "Performance Services",
    supportingSentence:
      "We help individuals, teams, coaches and organisations understand performance problems, identify the factors that may be influencing them, and design evidence informed responses that fit the realities of practice.",
  },

  coreArchitecture: {
    eyebrow: "CORE SERVICE ARCHITECTURE",
    heading: "How We Support Performance",
    services: [
      {
        id: "diagnostic",
        title: "Performance Diagnostic",
        description:
          "A structured process for clarifying a performance problem, gathering relevant information and identifying the factors that should be examined before an intervention is designed.",
        href: "/partner-with-us?type=Performance+Engagement",
      },
      {
        id: "team",
        title: "Team Performance Programme",
        description:
          "A tailored engagement for teams that may include assessment, workshops, behavioural or psychological intervention, coach collaboration, observation and review around an agreed performance need.",
        href: "/partner-with-us?type=Performance+Engagement",
      },
      {
        id: "coach",
        title: "Coach Performance Programme",
        description:
          "Work focused on the coach as a decision maker, communicator and important part of the athlete's performance environment. Topics may include feedback, pressure, confidence, mistake response, communication, decision making and behavioural consistency.",
        href: "/partner-with-us?type=Performance+Engagement",
      },
      {
        id: "psychology",
        title: "Performance Psychology and Mental Performance Support",
        description:
          "Individual or group support around psychological and behavioural factors that influence preparation, competition and consistent performance.",
        href: "/partner-with-us?type=Performance+Engagement",
      },
      {
        id: "research-evaluation",
        title: "Applied Research and Programme Evaluation",
        description:
          "Research or evaluation designed around a real performance question, intervention, programme or organisational need, with an emphasis on sound methods and useful interpretation.",
        href: "/partner-with-us?type=Research+and+Evaluation",
      },
    ] as const,
  },

  process: {
    eyebrow: "STRUCTURED ENGAGEMENT",
    heading: "How Engagements Work",
    steps: [
      {
        step: "01",
        title: "Clarification",
        description:
          "Initial conversation and clarification of the performance need.",
      },
      {
        step: "02",
        title: "Scoping",
        description:
          "Agreement on scope, people involved and appropriate methods.",
      },
      {
        step: "03",
        title: "Information Gathering",
        description:
          "Assessment or information gathering where required.",
      },
      {
        step: "04",
        title: "Design",
        description: "Design of the engagement.",
      },
      {
        step: "05",
        title: "Delivery",
        description: "Delivery, observation or implementation.",
      },
      {
        step: "06",
        title: "Review & Next Steps",
        description:
          "Review, measurement and next step recommendations.",
      },
    ] as const,
  },

  cta: {
    eyebrow: "GET STARTED",
    line: "Not sure which service fits the problem you are trying to solve?",
    button: "Start With a Performance Inquiry",
    href: "/partner-with-us",
  },
} as const;
