/**
 * MindGame Africa — Global Content
 *
 * Institutional facts, navigation, footer and direct channels.
 */

export const globalContent = {
  institutionName: "MindGame Africa",
  website: "mindgameafrica.com",
  footerPositioningLine:
    "Performance science, research, education and professional practice for stronger performance capability in Africa.",

  // No email, telephone or location has been supplied.
  // Per Amendment A1, no location (headquarters, city, country, or address) is to be published at all.
  contactDetails: [] as const,

  // No social media accounts have been supplied.
  // Render no social blocks until genuine URLs exist. No '#' hrefs or greyed icons.
  socials: [] as const,

  nav: {
    primary: [
      { label: "About", href: "/about" },
      { label: "Performance Services", href: "/performance-services" },
      { label: "Research", href: "/research" },
      { label: "Education", href: "/education" },
      { label: "Insights", href: "/insights" },
      { label: "People", href: "/people" },
      { label: "Contact", href: "/contact" },
      { label: "Partner With Us", href: "/partner-with-us" },
    ],
    cta: {
      label: "Partner With Us",
      href: "/partner-with-us",
    },
  },

  footer: {
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Performance Services", href: "/performance-services" },
      { label: "Research", href: "/research" },
      { label: "Education", href: "/education" },
      { label: "Insights", href: "/insights" },
      { label: "People", href: "/people" },
      { label: "Opportunities", href: "/opportunities" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },

  // Authoritative institutional and visual direction (§17, §23)
  institutionalDirection: {
    visualLanguage:
      "The visual language should feel documentary, intelligent, contemporary and close to practice. I want the images to show people examining performance, working with performers, discussing evidence, teaching, observing, analysing, preparing and reviewing. The website should feel like an institution that thinks, studies, teaches and works in real performance environments.",
    clarityOverScale:
      "I do not want this next development pass to make MindGame Africa look larger than it is. I want it to make MindGame Africa clearer than it currently is.",
    visitorUnderstanding:
      "A visitor should be able to understand what we believe performance work should look like, what we are capable of discussing now, what we are building toward, how research and education fit into the institution, and how they can begin a meaningful conversation with us.",
    credibilityFirst:
      "The website should therefore feel credible before it feels impressive. It should show direction without pretending that the future has already arrived. It should make people curious about the work, confident that the thinking is serious, and willing to ask how they can work with us, learn with us, research with us or contribute to what MindGame Africa is being built to become.",
  },
} as const;
