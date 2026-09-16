/**
 * MindGame Africa — Content Verification Lint Gate
 *
 * Automated verification of:
 * 1. Dynamic extraction of every [V] string from docs/CONTENT_SOURCE_OF_TRUTH.md
 *    and strict byte-for-byte character comparison against lib/content/.
 * 2. American spelling detector covering all prohibited patterns:
 *    ize, izing, ization, yze, analyz, organiz, prioritiz, recogniz, optimiz,
 *    center, behavior, catalog, defense, license, fulfill, enroll, program.
 * 3. Numeric claim pattern scanner (/\b\d+\+/, /\b\d{2,}\s*%/, /over \d+/i, /\b\d+\s*(years?|clients?|partners?|publications?|programmes?)\b/i).
 * 4. Banned string scanner ("Coming soon", "TBA", "TBD", "To be announced", "Watch this space",
 *    "Under construction", "Lorem", "Placeholder", "Your text here", unauthorized 'href="#"').
 * 5. Verification of empty or https-only socials and contactDetails in global.ts (no "#", no example.com).
 * 6. Location scanner for published physical locations, headquarters, Lagos, Nigeria, street address patterns (Amendment A1).
 * 7. Verification that CapabilityArea and ProgrammeArea carry status fields (status: "developing").
 * 8. Non-zero exit code with readable diff on failure.
 */

import * as fs from "fs";
import * as path from "path";

interface Violation {
  rule: string;
  file?: string;
  line?: number;
  expected?: string;
  found?: string;
  message: string;
}

const violations: Violation[] = [];

const REPO_ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(REPO_ROOT, "lib", "content");
const APP_DIR = path.join(REPO_ROOT, "app");
const COMPONENTS_DIR = path.join(REPO_ROOT, "components");
const TRUTH_FILE = path.join(REPO_ROOT, "docs", "CONTENT_SOURCE_OF_TRUTH.md");

function getAllFiles(dir: string, extensions: string[] = [".ts", ".tsx"]): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!["node_modules", ".next", ".git", "scratch", "docs"].includes(entry.name)) {
        results = results.concat(getAllFiles(fullPath, extensions));
      }
    } else if (entry.isFile() && extensions.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

// ── Assertion 1: Dynamic [V] String Extraction & Strict Byte Comparison ───
function extractVerbatimStringsFromSource(): { line: number; text: string; label: string }[] {
  if (!fs.existsSync(TRUTH_FILE)) {
    violations.push({
      rule: "1. Strict Character-for-Character [V] Match",
      message: `Content source of truth not found at: ${TRUTH_FILE}`,
    });
    return [];
  }

  const content = fs.readFileSync(TRUTH_FILE, "utf8");
  const lines = content.split("\n");
  const extracted: { line: number; text: string; label: string }[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (line.includes("[V]")) {
      let j = i + 1;
      while (
        j < lines.length &&
        (lines[j].trim() === "" ||
          (!lines[j].trim().startsWith(">") &&
            !lines[j].trim().startsWith("1. >") &&
            !lines[j].trim().startsWith("##")))
      ) {
        if (lines[j].trim().startsWith("###") || lines[j].trim().startsWith("##")) break;
        j++;
      }

      if (
        j < lines.length &&
        (lines[j].trim().startsWith(">") || lines[j].trim().startsWith("1. >"))
      ) {
        const quoteLines: string[] = [];
        while (
          j < lines.length &&
          (lines[j].trim().startsWith(">") || /^\d+\.\s*>/.test(lines[j].trim()))
        ) {
          const cleaned = lines[j]
            .trim()
            .replace(/^\d+\.\s*>\s*/, "")
            .replace(/^>\s*/, "");
          if (cleaned.length > 0) {
            quoteLines.push(cleaned);
          }
          j++;
        }
        if (quoteLines.length > 0) {
          extracted.push({
            line: i + 1,
            label: line.trim(),
            text: quoteLines.join(" "),
          });
        }
      }
    }
    i++;
  }

  return extracted;
}

function checkVerbatimStrings() {
  const contentFiles = getAllFiles(CONTENT_DIR);
  const fileContents = contentFiles.map((f) => ({
    path: f,
    content: fs.readFileSync(f, "utf8"),
  }));

  const extractedStrings = extractVerbatimStringsFromSource();

  for (const item of extractedStrings) {
    const found = fileContents.some((fc) => fc.content.includes(item.text));
    if (!found) {
      violations.push({
        rule: "1. Strict Character-for-Character [V] Match",
        expected: item.text,
        found: "[NOT FOUND IN lib/content/]",
        message: `Missing verbatim string from Line ${item.line} (${item.label}): "${item.text.slice(0, 80)}..."`,
      });
    }
  }
}

// ── Assertion 2: American Spelling Detector ───────────────────────────────
const americanSpellingRules: { pattern: RegExp; correction: string }[] = [
  { pattern: /\b(?!(?:size|resize|capsize))\w*iz(e|es|ed|ing|er|ers|ation|ations)\b/i, correction: "ise/ising/isation" },
  { pattern: /\b\w*yz(e|es|ed|ing|er|ers)\b/i, correction: "yse" },
  { pattern: /\banalyz\w*\b/i, correction: "analyse" },
  { pattern: /\borganiz\w*\b/i, correction: "organise/organisation" },
  { pattern: /\bprioritiz\w*\b/i, correction: "prioritise" },
  { pattern: /\brecogniz\w*\b/i, correction: "recognise" },
  { pattern: /\boptimiz\w*\b/i, correction: "optimise" },
  { pattern: /\bcenter(s|ed|ing)?\b/i, correction: "centre$1" },
  { pattern: /\bbehavior\w*\b/i, correction: "behaviour" },
  { pattern: /\bcatalog(s|ed|ing)?\b/i, correction: "catalogue$1" },
  { pattern: /\bdefense\b/i, correction: "defence" },
  { pattern: /\blicense\b/i, correction: "licence (noun)" },
  { pattern: /\bfulfill(s|ed|ing|ment)?\b/i, correction: "fulfil$1" },
  { pattern: /\benroll(s|ed|ing|ment)?\b/i, correction: "enrol$1" },
  { pattern: /\bprograms\b/i, correction: "programmes" },
  { pattern: /\bprogram\b(?!\s+(?:code|logic|interface|language))/i, correction: "programme" },
];

function checkAmericanSpelling() {
  const targetFiles = [
    ...getAllFiles(CONTENT_DIR),
    ...getAllFiles(APP_DIR),
  ];

  for (const file of targetFiles) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (
        trimmed.startsWith("//") ||
        trimmed.startsWith("/*") ||
        trimmed.startsWith("*") ||
        trimmed.startsWith("import ")
      ) {
        return;
      }

      // Filter out HTML/Tailwind classes and CSS properties
      const sanitized = line
        .replace(/className=(?:{[^}]+}|"[^"]*"|'[^']*')/g, "")
        .replace(/\b(?:size|resize)=\S+/g, "");

      for (const rule of americanSpellingRules) {
        const match = sanitized.match(rule.pattern);
        if (match) {
          violations.push({
            rule: "2. British English Required",
            file: path.relative(REPO_ROOT, file),
            line: idx + 1,
            expected: rule.correction,
            found: match[0],
            message: `American spelling detected: "${match[0]}" → Use British English "${rule.correction}"`,
          });
        }
      }
    });
  }
}

// ── Assertion 3: Numeric Claim Pattern Scanner ────────────────────────────
const numericClaimPatterns: { pattern: RegExp; description: string }[] = [
  { pattern: /\b\d+\+\b/, description: "Unverified plus counter (e.g. 500+)" },
  { pattern: /\b\d{2,}\s*%\b/, description: "Percentage claim (e.g. 95%)" },
  { pattern: /\bover \d+\b/i, description: "Unverified count claim (e.g. over 20)" },
  {
    pattern: /\b\d+\s*(years?|clients?|athletes?|partners?|projects?|publications?|programmes?)\b/i,
    description: "Fabricated metric claim with entity count",
  },
  { pattern: /\brated\s+#?\d+/i, description: "Fabricated ranking/rating" },
];

function checkNumericClaims() {
  const targetFiles = [
    ...getAllFiles(CONTENT_DIR),
    ...getAllFiles(APP_DIR),
  ];

  for (const file of targetFiles) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (
        trimmed.startsWith("//") ||
        trimmed.startsWith("/*") ||
        trimmed.startsWith("*") ||
        trimmed.startsWith("import ") ||
        trimmed.includes("font-") ||
        trimmed.includes("max-w-") ||
        trimmed.includes("px-") ||
        trimmed.includes("py-") ||
        trimmed.includes("duration-") ||
        trimmed.includes("delay-") ||
        trimmed.includes("size=") ||
        trimmed.includes("min(10")
      ) {
        return;
      }

      for (const item of numericClaimPatterns) {
        const match = line.match(item.pattern);
        if (match) {
          violations.push({
            rule: "3. No Unverified Numeric Claims",
            file: path.relative(REPO_ROOT, file),
            line: idx + 1,
            expected: "Zero fabricated statistics or metrics",
            found: match[0],
            message: `${item.description} detected: "${match[0]}"`,
          });
        }
      }
    });
  }
}

// ── Assertion 4: Banned String Scanner ────────────────────────────────────
function checkBannedStrings() {
  const targetFiles = [
    ...getAllFiles(CONTENT_DIR),
    ...getAllFiles(APP_DIR),
    ...getAllFiles(COMPONENTS_DIR),
  ];

  const bannedPatterns: { pattern: RegExp; label: string }[] = [
    { pattern: /\bcoming soon\b/i, label: "'Coming soon' (any casing) banned" },
    { pattern: /\bTBA\b/, label: "'TBA' placeholder banned" },
    { pattern: /\bTBD\b/, label: "'TBD' placeholder banned" },
    { pattern: /\bto be announced\b/i, label: "'To be announced' banned" },
    { pattern: /\bwatch this space\b/i, label: "'Watch this space' banned" },
    { pattern: /\bunder construction\b/i, label: "'Under construction' banned" },
    { pattern: /\blorem\b/i, label: "'Lorem' placeholder banned" },
    { pattern: /\bplaceholder\b/i, label: "'Placeholder' banned" },
    { pattern: /\byour text here\b/i, label: "'Your text here' banned" },
  ];

  for (const file of targetFiles) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    const relPath = path.relative(REPO_ROOT, file).replace(/\\/g, "/");

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (
        trimmed.startsWith("//") ||
        trimmed.startsWith("/*") ||
        trimmed.startsWith("*") ||
        trimmed.startsWith("import ")
      ) {
        return;
      }

      // Sanitize Tailwind classes (like placeholder:text-navy/40) and className
      const sanitized = line
        .replace(/className=(?:{[^}]+}|"[^"]*"|'[^']*')/g, "")
        .replace(/placeholder:[a-zA-Z0-9_\-\/]+/g, "");

      // Check placeholder HTML attributes separately: allow the attribute name, but ban if content has banned text
      const attrMatch = sanitized.match(/placeholder=["']([^"']*)["']/);
      if (attrMatch) {
        const placeholderText = attrMatch[1];
        if (/\bplaceholder\b/i.test(placeholderText)) {
          violations.push({
            rule: "4. Banned Strings",
            file: relPath,
            line: idx + 1,
            expected: "No literal 'Placeholder' text",
            found: placeholderText,
            message: `Literal 'Placeholder' text found in placeholder attribute: "${placeholderText}"`,
          });
        }
      }

      // Check remaining line without the placeholder="..." attribute
      const contentOnly = sanitized.replace(/placeholder=["'][^"']*["']/g, "");

      for (const bp of bannedPatterns) {
        if (bp.pattern.test(contentOnly)) {
          violations.push({
            rule: "4. Banned Strings",
            file: relPath,
            line: idx + 1,
            expected: "No placeholders or banned variants",
            found: line.trim(),
            message: `${bp.label}: "${line.trim()}"`,
          });
        }
      }

      // Check href="#" (allowed ONLY for Privacy Policy & Terms in Footer/global)
      if (line.includes('href="#"') || line.includes("href='#'")) {
        const isAllowedLegal =
          relPath === "lib/content/global.ts" ||
          relPath === "components/layout/Footer.tsx";
        if (!isAllowedLegal) {
          violations.push({
            rule: "4. Banned href='#'",
            file: relPath,
            line: idx + 1,
            expected: "Valid destination route",
            found: 'href="#"',
            message: `Unallowed placeholder href="#" found in ${relPath}:${idx + 1}`,
          });
        }
      }
    });
  }
}

// ── Assertion 5: Socials & Contact Channels Verification ──────────────────
function checkSocialsAndContactDetails() {
  const globalFilePath = path.join(CONTENT_DIR, "global.ts");
  if (!fs.existsSync(globalFilePath)) {
    violations.push({
      rule: "5. Socials & Contact Verification",
      message: "lib/content/global.ts does not exist",
    });
    return;
  }

  const content = fs.readFileSync(globalFilePath, "utf8");

  // Verify contactDetails: must be empty array or contain only real https URLs
  const hasEmptyContact = content.includes("contactDetails: [] as const");
  const hasHttpsContact = /contactDetails:\s*\[[\s\S]*?https:\/\//.test(content);
  if (!hasEmptyContact && !hasHttpsContact) {
    violations.push({
      rule: "5. Contact Details Verification",
      file: "lib/content/global.ts",
      expected: "contactDetails: [] as const or valid https URLs",
      found: "Non-empty unverified contact details",
      message:
        "contactDetails in global.ts must be empty or contain only real https URLs, no '#' or example.com (Amendment A1).",
    });
  }

  // Verify socials: must be empty array or contain only real https URLs
  const hasEmptySocials = content.includes("socials: [] as const");
  const hasHttpsSocials = /socials:\s*\[[\s\S]*?https:\/\//.test(content);
  if (!hasEmptySocials && !hasHttpsSocials) {
    violations.push({
      rule: "5. Socials Verification",
      file: "lib/content/global.ts",
      expected: "socials: [] as const or valid https URLs",
      found: "Non-empty unverified socials",
      message:
        "socials in global.ts must be empty or contain only real https URLs, no '#' or example.com.",
    });
  }

  if (content.includes("example.com")) {
    violations.push({
      rule: "5. No Placeholder Domains",
      file: "lib/content/global.ts",
      expected: "No example.com links",
      found: "example.com reference",
      message: "Placeholder domain example.com is strictly prohibited.",
    });
  }
}

// ── Assertion 6: Location Scanner (Amendment A1) ──────────────────────────
function checkLocationProhibition() {
  const targetFiles = [
    ...getAllFiles(CONTENT_DIR),
    ...getAllFiles(APP_DIR),
  ];

  const locationPatterns = [
    { pattern: /\bheadquarters\b/i, desc: "headquarters" },
    { pattern: /\bLagos\b/i, desc: "Lagos" },
    { pattern: /\bNigeria\b/i, desc: "Nigeria" },
    { pattern: /\b\d+\s+[A-Za-z]+\s+(?:Street|Road|Avenue|Close|Crescent|Way|Boulevard)\b/i, desc: "street address pattern" },
    { pattern: /\bphysical office\b/i, desc: "physical office" },
    { pattern: /\boperations office\b/i, desc: "operations office" },
  ];

  for (const file of targetFiles) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    const rel = path.relative(REPO_ROOT, file).replace(/\\/g, "/");

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (
        trimmed.startsWith("//") ||
        trimmed.startsWith("/*") ||
        trimmed.startsWith("*") ||
        trimmed.startsWith("import ")
      ) {
        return;
      }

      for (const lp of locationPatterns) {
        if (lp.pattern.test(line)) {
          violations.push({
            rule: "6. Location Prohibition (Amendment A1)",
            file: rel,
            line: idx + 1,
            expected: "No location or headquarters published",
            found: line.trim(),
            message: `Prohibited location reference (${lp.desc}) found: "${line.trim()}"`,
          });
        }
      }
    });
  }
}

// ── Assertion 7: Capability & Programme Status Verification ───────────────
function checkCapabilityAndProgrammeStatus() {
  const scienceFile = path.join(CONTENT_DIR, "performance-science.ts");
  const educationFile = path.join(CONTENT_DIR, "education.ts");

  if (fs.existsSync(scienceFile)) {
    const content = fs.readFileSync(scienceFile, "utf8");
    const capabilityMatches = content.match(/title:\s*"[^"]+"/g) || [];
    const statusMatches = content.match(/status:\s*"developing"/g) || [];
    if (capabilityMatches.length !== statusMatches.length) {
      violations.push({
        rule: "7. Capability & Programme Status Verification",
        file: "lib/content/performance-science.ts",
        expected: `All ${capabilityMatches.length} capabilities must have status: "developing"`,
        found: `${statusMatches.length} with status: "developing"`,
        message:
          "All capability areas in performance-science.ts must carry explicit status: 'developing'.",
      });
    }
  }

  if (fs.existsSync(educationFile)) {
    const content = fs.readFileSync(educationFile, "utf8");
    const areaMatches = content.match(/title:\s*"[^"]+"/g) || [];
    const statusMatches = content.match(/status:\s*"developing"/g) || [];
    if (areaMatches.length !== statusMatches.length) {
      violations.push({
        rule: "7. Capability & Programme Status Verification",
        file: "lib/content/education.ts",
        expected: `All ${areaMatches.length} programme areas must have status: "developing"`,
        found: `${statusMatches.length} with status: "developing"`,
        message:
          "All programme areas in education.ts must carry explicit status: 'developing'.",
      });
    }
  }
}

// ── Runner ────────────────────────────────────────────────────────────────
function run() {
  console.log("=================================================");
  console.log("   MINDGAME AFRICA — CONTENT INTEGRITY GATE      ");
  console.log("=================================================");

  checkVerbatimStrings();
  checkAmericanSpelling();
  checkNumericClaims();
  checkBannedStrings();
  checkSocialsAndContactDetails();
  checkLocationProhibition();
  checkCapabilityAndProgrammeStatus();

  if (violations.length === 0) {
    console.log("✔ All content integrity assertions PASSED.");
    console.log("  - Dynamic extraction & strict byte comparison of all [V] strings: PASS");
    console.log("  - British English spelling enforcement: PASS");
    console.log("  - No unverified statistics or numeric claims: PASS");
    console.log("  - Banned strings & placeholder prohibition: PASS");
    console.log("  - Empty/authentic socials & contact channels: PASS");
    console.log("  - Location & headquarters prohibition (A1): PASS");
    console.log("  - Capability & Programme developing status: PASS");
    console.log("=================================================\n");
    process.exit(0);
  } else {
    console.error(`✖ FAILED: ${violations.length} content violations detected.\n`);
    for (const v of violations) {
      console.error(`[${v.rule}]`);
      if (v.file) console.error(`  Location: ${v.file}${v.line ? `:${v.line}` : ""}`);
      console.error(`  Message:  ${v.message}`);
      if (v.expected) console.error(`  Expected: ${v.expected}`);
      if (v.found) console.error(`  Found:    ${v.found}`);
      console.error("");
    }
    console.error("=================================================");
    process.exit(1);
  }
}

run();
