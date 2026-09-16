/**
 * MindGame Africa — Content Type Definitions
 *
 * All interfaces for the structured content layer.
 */

export interface Pillar {
  number: string;
  title: string;
  description: string;
  accent?: string;
  theme?: string;
  href: string;
  secondaryLink?: {
    text: string;
    linkText: string;
    href: string;
  };
}

export interface Audience {
  id: string;
  title: string;
  description: string;
}

export interface ServiceArea {
  id: string;
  title: string;
  description: string;
  href?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
}

export interface ProgrammeArea {
  id: string;
  title: string;
  description: string;
  status: "developing";
}

export interface CapabilityArea {
  id: string;
  title: string;
  description: string;
  status: "developing";
}

export interface InsightCategory {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
}

export interface InsightArticle {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt?: string;
  readTime?: string;
}

export interface Person {
  name: string;
  role: string;
  designation: string;
  shortBio: string;
  fullBio?: readonly string[];
  quote?: string;
  leadershipFocus?: readonly string[];
  institutionalRole?: readonly string[];
  researchInterests?: readonly string[];
  qualifications?: readonly string[];
}

export interface RoleCategory {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  active: boolean;
}

export interface PartnerRoute {
  title: string;
  description: string;
  type: string;
  ctaLabel: string;
  destination: string;
}

export interface Opportunity {
  id: string;
  title: string;
  category: string;
  summary: string;
  requirements?: readonly string[];
  commitment?: string;
  deadline?: string;
}

export interface ResearchOutput {
  id: string;
  title: string;
  abstract: string;
  authors?: readonly string[];
  date?: string;
  publicationUrl?: string;
}

export interface Programme {
  id: string;
  title: string;
  overview: string;
  targetAudience: string;
  format: string;
  status: "developing" | "active";
}

export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  intervention: string;
  outcomes: string;
}
