/**
 * MindGame Africa — Homepage Content
 *
 * All text strings for the homepage, conforming strictly to §3 of the content source of truth.
 */

export const homeContent = {
  hero: {
    eyebrow: "PERFORMANCE SCIENCE · RESEARCH · EDUCATION · PRACTICE",
    headline: "Developing the Human and Intellectual Infrastructure of Performance in Africa.",
    supportingSentence:
      "MindGame Africa connects performance science, research, education and professional practice to help athletes, teams, coaches, organisations and practitioners understand performance problems, develop capability and improve what happens in practice.",
    ctaPrimary: {
      label: "Work With MindGame Africa",
      href: "/partner-with-us",
    },
    ctaSecondary: {
      label: "Explore What We Do",
      href: "#what-we-do",
    },
  },

  whatWeDo: {
    eyebrow: "WHAT WE DO",
    heading: "How MindGame Africa Works Across Performance",
    pillars: [
      {
        number: "01",
        title: "Applied Performance Practice",
        description:
          "Evidence-informed assessment and intervention for athletes, coaches, teams and other high-pressure performers, with particular strength in performance psychology, mental performance and behavioural performance.",
        accent: "gold",
        theme: "cream",
        href: "/performance-services/applied-performance-practice",
      },
      {
        number: "02",
        title: "Performance Science",
        description:
          "A multidisciplinary approach to understanding performance through the interaction of psychological, behavioural, physiological, biomechanical, technical, analytical and contextual factors.",
        accent: "green",
        theme: "navy",
        href: "/research/performance-science",
      },
      {
        number: "03",
        title: "Research & Knowledge",
        description:
          "Original and commissioned research, programme evaluation, evidence reviews, frameworks, reports and knowledge translation focused on real performance questions.",
        accent: "gold",
        theme: "cream",
        href: "/research",
      },
      {
        number: "04",
        title: "Education & Professional Development",
        description:
          "Short courses, workshops, masterclasses and structured learning for practitioners, coaches, students and sport professionals, with clear learning outcomes and accurate certificate language.",
        accent: "green",
        theme: "navy",
        href: "/education",
      },
      {
        number: "05",
        title: "Practitioner Development",
        description:
          "MindGame Africa is being built to help strengthen the route from academic learning to competent professional practice. This includes future opportunities for internships, supervised experience, practitioner education, mentoring, applied projects and collaboration with universities and experienced specialists.",
        accent: "gold",
        theme: "cream",
        href: "/opportunities",
        secondaryLink: {
          text: "Interested in future opportunities?",
          linkText: "Get in touch.",
          href: "/partner-with-us",
        },
      },
    ],
  },

  whoWeWorkWith: {
    eyebrow: "WHO WE WORK WITH",
    heading: "Who MindGame Africa Is Built to Work With",
    supportingLine:
      "We work across individual, team and performance environment levels, connecting evidence with the realities of training, competition, coaching and professional practice.",
    audiences: [
      {
        id: "athletes",
        title: "Athletes and other high-pressure performers",
        description:
          "Individuals performing under physical, psychological, technical or competitive demand.",
      },
      {
        id: "teams",
        title: "Teams, clubs and academies",
        description:
          "Performance environments requiring collective coherence, behavioural consistency and systematic preparation.",
      },
      {
        id: "coaches",
        title: "Coaches and performance staff",
        description:
          "Decision makers, teachers and practitioners directly responsible for athlete and team preparation.",
      },
      {
        id: "federations",
        title: "Sport federations, associations and performance organisations",
        description:
          "Institutions responsible for talent systems, competition frameworks, governance and coach education.",
      },
      {
        id: "institutions",
        title: "Schools and universities",
        description:
          "Academic and student-athlete environments developing the next generation of performers and practitioners.",
      },
      {
        id: "researchers",
        title: "Researchers and academic departments",
        description:
          "Scholars and faculties investigating performance questions, methodology, data and applied science.",
      },
      {
        id: "practitioners",
        title: "Performance practitioners and emerging professionals",
        description:
          "Psychologists, coaches, physical preparation specialists, analysts and graduates seeking competent practice routes.",
      },
      {
        id: "corporate",
        title:
          "Corporate and other high-pressure organisations, where the work falls within MindGame Africa's genuine competence",
        description:
          "Leadership, executive and operating teams navigating high demand, critical decisions and demanding environments.",
      },
      {
        id: "international",
        title:
          "International institutions interested in research, education, faculty exchange or technical collaboration",
        description:
          "Global universities, performance institutes and governing bodies seeking African context collaboration.",
      },
    ],
  },

  currentFocus: {
    eyebrow: "CURRENT WORK",
    heading: "Current Focus",
    copy: "Our current work is centred on applied performance practice, the development of a multidisciplinary performance science platform, research around African performance questions, and the creation of professional learning and practitioner development pathways.",
  },

  previews: {
    research: {
      eyebrow: "RESEARCH & KNOWLEDGE",
      heading: "Research that begins with real performance questions.",
      copy: "We are building a research agenda around performance under pressure, behaviour, coaching, athlete development, team environments and the realities of performance practice in Africa.",
      cta: {
        label: "Explore Research Direction",
        href: "/research",
      },
    },
    education: {
      eyebrow: "EDUCATION & PROFESSIONAL DEVELOPMENT",
      heading: "Developing people who work with performance.",
      copy: "Our education function is being designed for coaches, practitioners, students, performance professionals and organisations that want learning grounded in evidence and connected to practice.",
      cta: {
        label: "View Education Architecture",
        href: "/education",
      },
    },
    people: {
      eyebrow: "PEOPLE & EXPERTISE",
      heading: "Built through expertise, not titles.",
      copy: "MindGame Africa will grow through a network of practitioners, researchers, faculty and specialist collaborators whose roles are defined by the work they are qualified to contribute.",
      founderCard: {
        name: "Dr. Joshua A. Oparachukwu",
        designation:
          "Founder, MindGame Africa | Performance Psychologist | Performance Strategist",
        copy: "Dr. Joshua A. Oparachukwu leads MindGame Africa's work across applied performance practice, research, professional education and practitioner development, with particular interest in the psychological and behavioural factors that shape performance under pressure.",
      },
      cta: {
        label: "Meet the People & Leadership",
        href: "/people",
      },
    },
  },

  closingCta: {
    eyebrow: "GET IN TOUCH",
    line: "Have a performance problem, research question, learning need or collaboration idea?",
    button: "Start the Right Conversation With MindGame Africa",
    href: "/partner-with-us",
  },
} as const;
