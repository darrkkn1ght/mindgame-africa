/**
 * MindGame Africa — Hidden CMS & Entity Data Models
 *
 * Implements specifications from docs/CONTENT_SOURCE_OF_TRUTH.md:
 * - §8.7 Research Output and Research Project Data Models
 * - §9.8 Education Programme Data Model
 * - §11.5 Insights Article and Category Data Model
 *
 * Built now with empty data arrays. No public routes, no nav entries, and no premature rendering.
 */

// ── §8.7 Research Data Models ────────────────────────────────────────────────
export type ResearchOutputType =
  | "formal-research-output"
  | "technical-report"
  | "programme-evaluation"
  | "intervention-study"
  | "state-of-african-sport-performance-report";

export interface ResearchAuthor {
  readonly name: string;
  readonly role?: string;
  readonly affiliation?: string;
}

export interface ResearchOutput {
  readonly id: string;
  readonly type: ResearchOutputType;
  readonly title: string;
  readonly abstract: string;
  readonly authors: readonly ResearchAuthor[];
  readonly publishedAt: string;
  readonly doi?: string;
  readonly externalUrl?: string;
  readonly downloadUrl?: string;
  readonly citation: string;
  readonly themes: readonly string[];
  readonly methodsAndEthicsStatement?: string;
  readonly status: "published" | "in-press" | "forthcoming";
}

export interface ResearchProject {
  readonly id: string;
  readonly title: string;
  readonly overview: string;
  readonly themes: readonly string[];
  readonly collaboratingInstitutions?: readonly string[];
  readonly callForParticipation?: boolean;
  readonly status: "active" | "ongoing" | "commissioned" | "developing";
}

/** Formal research outputs collection — initialized empty per §8.7 */
export const researchOutputs: readonly ResearchOutput[] = [];

/** Ongoing research projects collection — initialized empty per §8.7 */
export const researchProjects: readonly ResearchProject[] = [];

// ── §9.8 Education Programme Data Model ───────────────────────────────────────
/**
 * Permitted certificate wordings per §9.6:
 * Hard rule: where a programme is not formally accredited, only these three phrasings are permitted.
 */
export type PermittedCertificateWording =
  | "certificate of completion"
  | "certificate of participation"
  | "professional development programme";

export interface ProgrammeFaculty {
  readonly name: string;
  readonly role: string;
  readonly bio?: string;
}

export interface ProgrammeModule {
  readonly order: number;
  readonly title: string;
  readonly description: string;
  readonly topics?: readonly string[];
}

export interface Programme {
  readonly id: string;
  readonly title: string;
  readonly status: "developing" | "active";
  readonly whoItIsFor: readonly string[];
  readonly entryRequirements?: string;
  readonly learningOutcomes: readonly string[];
  readonly curriculumModules: readonly ProgrammeModule[];
  readonly facultyInstructors: readonly ProgrammeFaculty[];
  readonly format: "in-person" | "online" | "blended";
  readonly durationAndSchedule?: string;
  readonly assessmentRequirements?: string;
  readonly feesAndRegistration?: string;
  readonly exactCertificateWording: PermittedCertificateWording;
  readonly policiesAndLearnerInfo?: string;
  readonly cta: {
    readonly label: string;
    readonly href: string;
  };
}

/** Programme catalogue collection — initialized empty per §9.8 */
export const programmes: readonly Programme[] = [];

// ── §11.5 Insights Article Data Model ────────────────────────────────────────
export type InsightContentType =
  | "explainer"
  | "evidence-review"
  | "case-lesson"
  | "practitioner-perspective"
  | "interview"
  | "research-summary"
  | "performance-framework"
  | "field-note"
  | "commentary";

export interface ArticleCategory {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface ArticleAttachment {
  readonly title: string;
  readonly url: string;
  readonly format: "pdf" | "brief" | "workbook";
}

export interface Article {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly content: string;
  readonly contentType: InsightContentType;
  readonly categoryId: string;
  readonly author: {
    readonly name: string;
    readonly title: string;
    readonly avatarUrl?: string;
  };
  readonly publishedAt: string;
  readonly readingTimeMinutes: number;
  readonly relatedArticleIds?: readonly string[];
  readonly citations?: readonly string[];
  readonly downloadableAttachments?: readonly ArticleAttachment[];
  readonly socialSharingMetadata?: {
    readonly title: string;
    readonly description: string;
    readonly ogImage?: string;
  };
  readonly isPublished: boolean;
}

/** Initial planned category registry for future taxonomy */
export const plannedCategories: readonly ArticleCategory[] = [
  {
    id: "research-translation",
    name: "Research Translation",
    description: "Translating performance science findings into practice.",
  },
  {
    id: "performance-psychology",
    name: "Performance Psychology",
    description: "Cognitive, emotional and behavioural factors in competition.",
  },
  {
    id: "coaching-practice",
    name: "Coaching & Practice",
    description: "Evidence-informed coaching methodologies.",
  },
  {
    id: "practitioner-development",
    name: "Practitioner Development",
    description: "Professional pathways to competent applied practice.",
  },
];

/** Knowledge library articles collection — initialized empty per §11.5 */
export const articles: readonly Article[] = [];

/**
 * Filter categories so that categories render publicly ONLY when they contain published content.
 * Enforces §11.5 in code.
 */
export function getPublicCategories(
  categories: readonly ArticleCategory[] = plannedCategories,
  publishedArticles: readonly Article[] = articles
): ArticleCategory[] {
  return categories.filter((category) =>
    publishedArticles.some(
      (article) => article.isPublished && article.categoryId === category.id
    )
  );
}

// ── §15 Opportunities Data Model ─────────────────────────────────────────────
export interface Opportunity {
  readonly id: string;
  readonly title: string;
  readonly status: "developing" | "closed" | "upcoming";
  readonly eligibility: string;
  readonly learningOrWorkExpectations: string;
  readonly supervisionArrangements: string;
  readonly duration: string;
  readonly locationOrFormat: string;
  readonly applicationRequirements: readonly string[];
  readonly deadlines: string;
  readonly whatParticipationDoesOrDoesNotGuarantee: string;
}

/** Opportunities collection — initialized empty per §10 & §15 */
export const opportunities: readonly Opportunity[] = [];


