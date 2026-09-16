/**
 * MindGame Africa — People Content
 *
 * All text strings for the People page and leadership profiles,
 * conforming strictly to §12 of the content source of truth.
 */

export const founderProfile = {
  name: "Dr. Joshua A. Oparachukwu",
  role: "Founder, MindGame Africa",
  designation:
    "Founder, MindGame Africa | Performance Psychologist | Performance Strategist",
  shortProfile:
    "Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa and a performance psychologist and performance strategist whose work sits at the intersection of human performance, applied psychology, research and professional education. His work focuses on understanding the psychological and behavioural factors that shape performance, particularly under pressure, and translating that knowledge into practical support for athletes, coaches, teams and other high pressure performers.",

  fullBio: [
    "Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa, an African performance science, research, education and professional practice institution being built around the human and intellectual side of performance.",
    "His work is grounded in performance psychology and applied performance science, with particular interest in how confidence, attention, self regulation, mistake response, pressure, decision making, communication and behavioural adaptation influence what performers are able to do when performance matters.",
    "Across his applied work, he has worked with athletes, coaches, teams and performers in demanding environments, helping them examine the factors that may be disrupting performance and develop more deliberate ways of preparing, responding and adapting. His approach is not built around motivational language or isolated mental techniques. It begins with the performance problem, considers the context in which that problem occurs, and uses evidence, assessment, structured intervention and review to determine what is most appropriate.",
    "His academic background is in Human Kinetics, the Sociology and Psychology of Sport, and Performance Psychology at the University of Ibadan. His research and scholarly interests include cognitive reframing, verbal affirmation, mistake contingency, mental toughness, athlete behaviour and the translation of psychological knowledge into real performance environments.",
    "Through MindGame Africa, Dr. Oparachukwu is working to create stronger connections between research, performance practice, professional education and practitioner development in Africa. The wider aim is to contribute to an environment in which African athletes, coaches, researchers and practitioners are not only users of performance knowledge, but also active producers, translators and developers of it.",
    "His role within MindGame Africa is therefore broader than delivering individual performance support. He provides strategic and intellectual leadership around the institution's performance practice, research direction, education function, practitioner development and the progressive development of multidisciplinary performance science capability.",
  ] as const,

  leadershipFocus: [
    "Applied performance psychology and mental performance.",
    "Performance strategy and behavioural performance.",
    "Performance under pressure.",
    "Confidence, attention and self regulation.",
    "Mistake response and recovery after error.",
    "Coach behaviour and the psychological performance environment.",
    "Applied research and evidence translation.",
    "Professional education and practitioner development.",
    "Development of multidisciplinary performance science capability in African contexts.",
  ] as const,

  institutionalRole: [
    "As Founder, Dr. Oparachukwu provides the strategic, intellectual and professional direction for MindGame Africa. He leads the development of the institution's applied performance work, research priorities, education and professional development architecture, practitioner pathways and specialist collaborations.",
    "His responsibility is also to ensure that MindGame Africa grows with clear professional boundaries. New disciplines, programmes, research relationships and technical capabilities should only be presented as active when the qualified people, methods and infrastructure required to deliver them properly are genuinely in place.",
  ] as const,

  researchInterests: [
    "Cognitive reframing and performance behaviour.",
    "Verbal affirmation and psychological response in sport.",
    "Mistake contingency and recovery after performance errors.",
    "Mental toughness and assertive performance behaviour.",
    "Psychological skills interventions in football.",
    "Coach behaviour, confidence and the athlete performance environment.",
    "Performance psychology in African sport contexts.",
  ] as const,

  leadershipStatement:
    "MindGame Africa is being built around a simple idea: performance should be understood more deeply, supported more intelligently and studied within the environments in which it actually happens. My role is to help build the people, knowledge, practice and professional standards that make that possible.",

  academicBackground: [
    "Performance Psychology, University of Ibadan",
    "Sociology and Psychology of Sport, University of Ibadan",
    "Human Kinetics, University of Ibadan",
  ] as const,
} as const;

export const compactFounderCard = {
  name: "Dr. Joshua A. Oparachukwu",
  designation:
    "Founder, MindGame Africa | Performance Psychologist | Performance Strategist",
  cardCopy:
    "Dr. Joshua A. Oparachukwu leads MindGame Africa's work across applied performance practice, research, professional education and practitioner development, with particular interest in the psychological and behavioural factors that shape performance under pressure.",
} as const;

export const peopleContent = {
  hero: {
    eyebrow: "PEOPLE & LEADERSHIP",
    heading: "People",
    supportingSentence:
      "MindGame Africa is being built through a networked model that can bring together leadership, practitioners, researchers, faculty, advisors and specialist collaborators around the work that requires their expertise.",
  },

  networkHoldingLine:
    "Our wider practitioner, faculty and research network will be added as formal roles and collaborations are confirmed.",

  roleCategories: [
    {
      id: "leadership",
      title: "Leadership",
      eyebrow: "FOUNDING LEADERSHIP",
      description:
        "Strategic, intellectual and professional direction for MindGame Africa.",
      active: true,
    },
    {
      id: "faculty",
      title: "Faculty",
      eyebrow: "ACADEMIC & TEACHING",
      description: "",
      active: false,
    },
    {
      id: "practitioners",
      title: "Practitioners",
      eyebrow: "APPLIED PRACTICE",
      description: "",
      active: false,
    },
    {
      id: "research-associates",
      title: "Research Associates",
      eyebrow: "RESEARCH & SCIENCE",
      description: "",
      active: false,
    },
    {
      id: "advisors",
      title: "Advisors",
      eyebrow: "STRATEGIC ADVISORY",
      description: "",
      active: false,
    },
    {
      id: "mentors-supervisors",
      title: "Mentors or Supervisors",
      eyebrow: "SUPERVISION & MENTORSHIP",
      description: "",
      active: false,
    },
    {
      id: "visiting-faculty",
      title: "Visiting Faculty",
      eyebrow: "VISITING FACULTY",
      description: "",
      active: false,
    },
  ] as const,

  founder: founderProfile,
  compactCard: compactFounderCard,
} as const;
