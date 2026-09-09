/**
 * MindGame Africa — Design Tokens
 *
 * Cream-forward, navy-structured palette.
 * Gold/orange/green are accent-only.
 */

// ─── Colors ───────────────────────────────────────────────
export const colors = {
  cream: "#F7F3EC",
  navy: "#10233F",
  navySoft: "#1C3357",
  green: "#2F6B4F",
  gold: "#D9A441",
  orange: "#C1502E",

  // Derived / utility
  navyLight: "#253D5C", // hover / lighter navy for borders
  creamDark: "#EDE8DF", // subtle cream variant for cards
  white: "#FFFFFF",
  black: "#0A0A0A",
} as const;

// ─── Typography ───────────────────────────────────────────
export const fontFamily = {
  display: "var(--font-fraunces)", // Fraunces — serif, for H1/H2, pull-quotes
  body: "var(--font-inter)", // Inter — grotesk sans, for body/UI
  mono: "var(--font-jetbrains-mono)", // JetBrains Mono — data labels, eyebrows, tags
} as const;

export const typeScale = {
  display: {
    desktop: { size: "clamp(3.5rem, 4.5vw, 4.5rem)", leading: "1.05" },
    mobile: { size: "clamp(2.25rem, 6vw, 2.75rem)", leading: "1.1" },
  },
  h2: {
    desktop: { size: "clamp(2.25rem, 3vw, 2.75rem)", leading: "1.15" },
    mobile: { size: "clamp(1.75rem, 4.5vw, 2rem)", leading: "1.2" },
  },
  h3: {
    size: "clamp(1.375rem, 1.8vw, 1.625rem)",
    leading: "1.3",
    weight: "600",
  },
  body: {
    size: "1.0625rem", // 17px
    leading: "1.6",
    weight: "400",
  },
  small: {
    size: "0.8125rem", // 13px
    leading: "1.4",
    weight: "500",
    tracking: "0.08em",
  },
} as const;

// ─── Spacing ──────────────────────────────────────────────
export const spacing = {
  sectionVertical: {
    desktop: "clamp(6rem, 8vw, 8.75rem)", // 96–140px
    mobile: "clamp(3.5rem, 10vw, 4.5rem)", // 56–72px
  },
  maxContentWidth: "80rem", // 1280px
  containerPadding: {
    desktop: "3rem",
    mobile: "1.25rem",
  },
} as const;
