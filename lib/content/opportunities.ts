/**
 * MindGame Africa — Opportunities Content
 *
 * All text strings for the Opportunities page, conforming strictly to §10 and §15 of the content source of truth.
 */

// Per-opportunity field list as a type only (Original Brief §15)
export type OpportunityFields = {
  id: string;
  title: string;
  status: "open" | "closed" | "upcoming";
  eligibility: string;
  learningOrWorkExpectations: string;
  supervisionArrangements: string;
  duration: string;
  format: string;
  applicationRequirements: readonly string[];
  deadlines: string;
  participationGuarantees: string;
};

export const opportunitiesContent = {
  hero: {
    eyebrow: "OPPORTUNITIES",
    heading: "Opportunities",
    supportingSentence:
      "MindGame Africa is being built to help strengthen the route from academic learning to competent professional practice. This includes future opportunities for internships, supervised experience, practitioner education, mentoring, applied projects and collaboration with universities and experienced specialists.",
  },

  practitionerDevelopment: {
    eyebrow: "PRACTITIONER DEVELOPMENT",
    heading: "Bridging Academic Learning and Professional Competence",
    copy: "MindGame Africa is being built to help strengthen the route from academic learning to competent professional practice. This includes future opportunities for internships, supervised experience, practitioner education, mentoring, applied projects and collaboration with universities and experienced specialists.",
  },

  statusNotice: {
    eyebrow: "CURRENT STATUS",
    heading:
      "There are no open opportunities at this time. Openings will be published here as they become available.",
    description:
      "We will post structured opportunities including internships, supervised practicum, and research attachments as programmes become active.",
  },

  interestForm: {
    eyebrow: "REGISTER INTEREST",
    heading: "Future Opportunity Interest",
    description:
      "Register your interest to be notified when internships, supervised practicum, research attachments or practitioner development pathways become available.",
    labels: {
      fullName: "Full name",
      email: "Email address",
      areaOfInterest: "Primary area of interest",
      currentBackground: "Current academic or professional background",
      consent:
        "I agree to receive updates from MindGame Africa regarding future opportunities.",
      submitButton: "Register Interest",
      submittingButton: "Registering...",
    },
  },
} as const;
