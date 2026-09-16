import { z } from "zod";

/**
 * MindGame Africa — Form Validation Schemas
 *
 * Strict validation adhering to docs/CONTENT_SOURCE_OF_TRUTH.md §13, §14.
 */

/**
 * ContactFormSchema — §14
 *
 * Asserted per §14 & Amendment A1:
 * Do NOT ask for location, telephone, medical or sensitive info.
 */
export const ContactFormSchema = z.object({
  name: z.string().trim().min(1, "Please provide your name."),
  organisation: z.string().trim().optional().or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "Please provide your email address.")
    .email("Please enter a valid email address."),
  subject: z.string().trim().min(1, "Please provide a subject."),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a message with at least 10 characters."),
  inquiryType: z.string().optional().or(z.literal("")),
  preferredContactMethod: z.string().optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine(
      (val) => val === true,
      "Please confirm this information can be used to respond to your message."
    ),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

/**
 * PartnerFormSchema — §13.3
 *
 * Collaboration type options drawn strictly from §13.3:
 * 1. Performance Engagement
 * 2. Research and Evaluation
 * 3. University or Academic Collaboration
 * 4. Professional Education
 * 5. Practitioner or Faculty Collaboration
 * 6. Institutional or International Partnership
 * 7. Other
 *
 * Asserted per §13.3 & Hard Rule:
 * Do NOT ask for psychological, medical or sensitive personal info in this general form.
 * If a later performance engagement requires it, collect it through an appropriate intake process.
 */
export const collaborationTypeOptions = [
  "Performance Engagement",
  "Research and Evaluation",
  "University or Academic Collaboration",
  "Professional Education",
  "Practitioner or Faculty Collaboration",
  "Institutional or International Partnership",
  "Other",
] as const;

export const PartnerFormSchema = z.object({
  fullName: z.string().trim().min(1, "Please provide your full name."),
  organisation: z
    .string()
    .trim()
    .min(1, "Please provide your organisation or institution."),
  role: z.string().trim().min(1, "Please provide your role or position."),
  email: z
    .string()
    .trim()
    .min(1, "Please provide your email address.")
    .email("Please enter a valid email address."),
  country: z.string().trim().min(1, "Please provide your country."),
  collaborationType: z.enum(collaborationTypeOptions, {
    message: "Please select a valid type of collaboration.",
  }),
  discussionTopic: z
    .string()
    .trim()
    .min(1, "Please describe what you would like to discuss."),
  usefulOutcome: z
    .string()
    .trim()
    .min(1, "Please describe what a useful outcome would look like."),
  preferredContact: z
    .string()
    .trim()
    .min(1, "Please specify your preferred way to continue the conversation."),
  consent: z
    .boolean()
    .refine(
      (val) => val === true,
      "Please confirm this information can be used to respond to your inquiry."
    ),
});

export type PartnerFormData = z.infer<typeof PartnerFormSchema>;

/**
 * OpportunityInterestSchema — §10, §15
 *
 * Captures expressions of interest for future practitioner development,
 * internships, supervised practicum, and research attachments.
 */
export const OpportunityInterestSchema = z.object({
  name: z.string().trim().min(1, "Please provide your full name."),
  email: z
    .string()
    .trim()
    .min(1, "Please provide your email address.")
    .email("Please enter a valid email address."),
  role: z.string().trim().optional().or(z.literal("")),
  areaOfInterest: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine(
      (val) => val === true,
      "Please agree to receive updates from MindGame Africa regarding future opportunities."
    ),
});

export type OpportunityInterestData = z.infer<typeof OpportunityInterestSchema>;

/**
 * MailingListSchema — §11.4
 *
 * Registration for research translations, evidence reviews, and practitioner resources.
 */
export const MailingListSchema = z.object({
  name: z.string().trim().min(1, "Please provide your name."),
  email: z
    .string()
    .trim()
    .min(1, "Please provide your email address.")
    .email("Please enter a valid email address."),
  interestArea: z.string().trim().optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine(
      (val) => val === true,
      "Please agree to receive knowledge dispatches from MindGame Africa."
    ),
});

export type MailingListData = z.infer<typeof MailingListSchema>;
