# MindGame Africa — Full-Site Image Manifest & Sourcing Brief

> **Authority:** Built strictly in compliance with `docs/CONTENT_SOURCE_OF_TRUTH.md` §17 (*Photographic and visual language*), §17.1 (*Subject briefs*), §17.2 (*African context*), §17.3 (*Shot variety*), §17.4 (*What to avoid — hard fails*), §17.5 (*Original photography*), and §19 (*Design aesthetics & media integrity*).

---

## Part 1 — Full Inventory

Comprehensive audit of all image placeholders, Next.js image component calls, and SectionImage slots across every route and component in `app/(marketing)/` and `components/`.

| # | Page Route | Section Name & Position | Component / Location | Current Status | Required Aspect Ratio | Required Alt Text | Current Image Source |
|---|---|---|---|---|---|---|---|
| 1 | `/` (Homepage) | Hero (§3.1), full-bleed background | `<Image>` in `components/sections/Hero.tsx:18` | **ASSET_EXISTS** | 16:9 (`fill`) | MindGame Africa — Performance Science, Research & Education | `/images/hero-bg.jpg` (1376x768 physical file exists) |
| 2 | `/` (Homepage) | Current Focus (§3.4), right column | `<SectionImage>` in `components/sections/CurrentFocus.tsx:93` | **PLACEHOLDER** | 4:3 | Abstract minimalist performance data visualization showing biometric trends and cognitive response latency on deep navy | `/images/performance-data/home-focus-metrics-4x3.jpg` |
| 3 | `/` (Homepage) | Research Preview (§3.5), right column | `<SectionImage>` in `components/sections/ResearchPreview.tsx:50` | **PLACEHOLDER** | 16:9 | Wide environmental landscape photograph of an African university sports campus running track at dusk with natural mountain horizon | `/images/researchers-at-work/home-research-context-16x9.jpg` |
| 4 | `/` (Homepage) | Education Preview (§3.5), left column | `<SectionImage>` in `components/sections/EducationPreview.tsx:24` | **SOURCED** | 4:3 | Practitioners and coaches engaged in structured case discussion, reflection, and applied learning | `/images/teaching-and-learning/home-education-seminar-4x3.jpg` |
| 5 | `/` (Homepage) | People Preview (§3.5 / §12.3), right card column | `<SectionImage>` in `components/sections/PeoplePreview.tsx:71` | **SOURCED** | 4:3 | Natural working portrait of Dr. Joshua A. Oparachukwu examining applied performance frameworks | `/images/practitioner-interaction/dr-joshua-oparachukwu-4x3.jpg` |
| 6 | `/about` | Core About (§4.2), right column | `<SectionImage>` in `app/(marketing)/about/page.tsx:109` | **SOURCED** | 4:3 | Performance practitioners examining athlete cognitive and behavioural factors in a professional setting | `/images/multidisciplinary-collaboration/about-core-practice-4x3.jpg` |
| 7 | `/about` | Why Africa (§4.5), left column | `<SectionImage>` in `app/(marketing)/about/page.tsx:152` | **SOURCED** | 4:3 | Coach and athletes reviewing tactical movement and environmental demands during regional tournament preparation | `/images/training-and-competition/about-why-africa-context-4x3.jpg` |
| 8 | `/about` | What We Are Building (§4.7), right column | `<SectionImage>` in `app/(marketing)/about/page.tsx:269` | **MISSING** | 4:3 | Researchers, specialists and educators in collaborative consultation regarding institutional capability development | *(pending future commissioned shot)* |
| 9 | `/performance-services` | Core Service Architecture (§5.2), right column | `<SectionImage>` in `app/(marketing)/performance-services/page.tsx:72` | **SOURCED** | 4:3 | MindGame Africa — Systematic performance observation, diagnostic review, and video analysis in natural African sporting settings. | `/images/observation-and-analysis/services-diagnostic-review-4x3.jpg` |
| 10 | `/performance-services` | Engagement Process (§5.3), 2-col grid (Slot A) | `<SectionImage>` in `app/(marketing)/performance-services/page.tsx:237` | **SOURCED** | 16:9 | MindGame Africa — Structured team conversations, psychological workshops, and review sessions in elite African sport. | `/images/team-sessions/services-team-workshop-16x9.jpg` |
| 11 | `/performance-services` | Engagement Process (§5.3), 2-col grid (Slot B) | `<SectionImage>` in `app/(marketing)/performance-services/page.tsx:252` | **SOURCED** | 16:9 | MindGame Africa — Coach observation, feedback discussions, and decision-making review in demanding sporting environments. | `/images/coaching-environments/services-coach-feedback-16x9.jpg` |
| 12 | `/performance-services/applied-performance-practice` | What This Means (§6.2), right column | `<SectionImage>` in `.../applied-performance-practice/page.tsx:78` | **SOURCED** | 4:3 | MindGame Africa — Athletes and performers preparing under demanding competitive conditions in African sport. | `/images/training-and-competition/practice-competitive-prep-4x3.jpg` |
| 13 | `/performance-services/applied-performance-practice` | Who This Is For (§6.4), right column | `<SectionImage>` in `.../applied-performance-practice/page.tsx:183` | **SOURCED** | 16:9 | MindGame Africa — Practitioner, coach, and athlete working together around performance development and strategic focus. | `/images/practitioner-interaction/practice-collaboration-16x9.jpg` |
| 14 | `/performance-services/applied-performance-practice` | Performance Questions (§6.5), right column | `<SectionImage>` in `.../applied-performance-practice/page.tsx:262` | **SOURCED** | 16:9 | MindGame Africa — Performance psychologist reviewing video footage and behavioural notes following competition. | `/images/observation-and-analysis/practice-analytical-review-16x9.jpg` |
| 15 | `/research/performance-science` | What Performance Science Means (§7.2), right col | `<SectionImage>` in `.../performance-science/page.tsx:69` | **PLACEHOLDER** | 4:3 | Abstract biomechanical force curves and temporal telemetry lines representing performance science telemetry | `/images/performance-data/perf-science-telemetry-4x3.jpg` |
| 16 | `/research/performance-science` | Function of Performance Science (§7.3), full banner | `<SectionImage>` in `.../performance-science/page.tsx:150` | **SOURCED** | 21:9 | MindGame Africa — Academic seminar and faculty collaboration connecting performance science with field practice. | `/images/teaching-and-learning/perf-science-academic-collab-21x9.jpg` |
| 17 | `/research/performance-science` | Areas of Future Capability (§7.4), right column | `<SectionImage>` in `.../performance-science/page.tsx:201` | **SOURCED** | 4:3 | MindGame Africa — Field-based performance observation capturing movement quality and technical execution. | `/images/observation-and-analysis/perf-science-field-capture-4x3.jpg` |
| 18 | `/research` | Research Mandate (§8.2), right column | `<SectionImage>` in `app/(marketing)/research/page.tsx:74` | **SOURCED** | 4:3 | MindGame Africa Research — Contextual investigation and performance science in African sport environments. | `/images/researchers-at-work/research-mandate-investigation-4x3.jpg` |
| 19 | `/research` | Our Approach (§8.4), right column | `<SectionImage>` in `app/(marketing)/research/page.tsx:227` | **SOURCED** | 4:3 | MindGame Africa Research — Academic collaboration, research symposia, and university partnerships. | `/images/multidisciplinary-collaboration/research-symposium-4x3.jpg` |
| 20 | `/research` | Collaborate With Us (§8.5), right column | `<SectionImage>` in `app/(marketing)/research/page.tsx:308` | **SOURCED** | 4:3 | MindGame Africa Research — Applied data collection and performance observation during training. | `/images/performance-data/research-data-collection-4x3.jpg` |
| 21 | `/education` | What Education Means (§9.2), right column | `<SectionImage>` in `app/(marketing)/education/page.tsx:79` | **SOURCED** | 4:3 | MindGame Africa Education — Interactive professional learning, case discussion, and seminar engagement. | `/images/teaching-and-learning/education-seminar-interactive-4x3.jpg` |
| 22 | `/education` | Who It Is For (§9.3), right column | `<SectionImage>` in `app/(marketing)/education/page.tsx:126` | **SOURCED** | 16:9 | MindGame Africa Education — Coach education, observation, and applied practice review in sporting settings. | `/images/coaching-environments/education-coach-practice-16x9.jpg` |
| 23 | `/education` | Learning Experience (§9.5), right column | `<SectionImage>` in `app/(marketing)/education/page.tsx:212` | **SOURCED** | 16:9 | MindGame Africa Education — Structured practitioner development workshop, method review, and applied tools. | `/images/team-sessions/education-workshop-collaboration-16x9.jpg` |
| 24 | `/insights` | Core Content Architecture (§11.2), right column | `<SectionImage>` in `app/(marketing)/insights/page.tsx:82` | **PLACEHOLDER** | 4:3 | Minimalist abstract vector composition representing analytical literature review and evidence classification on warm cream | `/images/performance-data/insights-translation-grid-4x3.jpg` |
| 25 | `/insights` | Knowledge Library Status (§11.3), right column | `<SectionImage>` in `app/(marketing)/insights/page.tsx:197` | **SOURCED** | 4:3 | MindGame Africa Insights — Field notes, match analysis, and practitioner perspectives. | `/images/researchers-at-work/insights-literature-review-4x3.jpg` |
| 26 | `/insights` | Mailing List & Frameworks (§11.4), right column | `<SectionImage>` in `app/(marketing)/insights/page.tsx:240` | **SOURCED** | 4:3 | MindGame Africa Insights — Performance frameworks and evidence-based summaries for practitioners. | `/images/practitioner-interaction/insights-practitioner-discussion-4x3.jpg` |
| 27 | `/people` | Leadership Founder Profile (§12.2), left grid col | `<SectionImage>` in `app/(marketing)/people/page.tsx:79` | **SOURCED** | 4:3 | Dr. Joshua A. Oparachukwu, Founder of MindGame Africa | `/images/practitioner-interaction/dr-joshua-oparachukwu-4x3.jpg` |
| 28 | `/people/[slug]` | Founder Profile Header & Bio (§12.2), left col | `<SectionImage>` in `app/(marketing)/people/[slug]/page.tsx:55` | **SOURCED** | 4:3 | Dr. Joshua A. Oparachukwu, Founder of MindGame Africa | `/images/practitioner-interaction/dr-joshua-oparachukwu-4x3.jpg` |
| 29 | `/opportunities` | Practitioner Function (§10), right column | `<SectionImage>` in `app/(marketing)/opportunities/page.tsx:71` | **SOURCED** | 4:3 | MindGame Africa Opportunities — Practitioner mentoring and supervised experience in African performance environments. | `/images/practitioner-interaction/opportunities-mentoring-4x3.jpg` |
| 30 | `/opportunities` | Future Interest Registration (§10), left col | `<SectionImage>` in `app/(marketing)/opportunities/page.tsx:164` | **SOURCED** | 16:9 | MindGame Africa Opportunities — Early career practitioners observing performance analysis in elite competition. | `/images/observation-and-analysis/opportunities-field-observation-16x9.jpg` |
| 31 | `/partner-with-us` | Partnership Routes (§13.2), institutional card band | `<SectionImage>` in `app/(marketing)/partner-with-us/page.tsx:64` | **SOURCED** | 16:9 | Institutional and academic partners discussing strategic performance initiatives across Africa | `/images/multidisciplinary-collaboration/partner-institutional-meeting-16x9.jpg` |

### Additional Pages Audit:
- **Contact (`/contact`, §14):** **ZERO IMAGES REQUIRED.** Conforms to §14 and Verbal Amendment A1. Contact is built as a pure, focused inquiry routing interface with zero dummy rows, zero placeholders, and tabbed intake flows. No photographic slots are assigned.
- **Privacy Policy (`/privacy`) & Terms of Service (`/terms`):** **ZERO IMAGES REQUIRED.** Pure legal and institutional governance documentation.

---

## Part 2 — Sourcing Briefs for Each Image

[1] HOMEPAGE / HERO / FULL-BLEED BACKGROUND
Required: 16:9 (fill)
Alt text: MindGame Africa — Performance Science, Research & Education
Subject category: training-and-competition
Shot type: wide environmental
Priority: hero
Sourcing brief: Wide environmental photograph of an African athletic training complex or outdoor stadium under dramatic late-afternoon natural light, establishing authentic high-performance reality.
Status: SOURCED

[2] HOMEPAGE / CURRENT FOCUS / RIGHT COLUMN
Required: 4:3
Alt text: Abstract minimalist performance data visualization showing biometric trends and cognitive response latency on deep navy
Subject category: performance-data
Shot type: quiet analytical
Priority: lazy
Sourcing brief: High-end editorial data visualization showing cognitive response latency, reaction time series, and performance telemetry on deep midnight navy with gold accents.
Status: PLACEHOLDER

[3] HOMEPAGE / RESEARCH PREVIEW / RIGHT COLUMN
Required: 16:9
Alt text: Wide environmental landscape photograph of an African university sports campus running track at dusk with natural mountain horizon
Subject category: researchers-at-work
Shot type: wide environmental
Priority: lazy
Sourcing brief: Wide environmental landscape photograph of an African university sports campus red clay running track at dusk with natural mountain horizon and quiet analytical atmosphere.
Status: PLACEHOLDER

[4] HOMEPAGE / EDUCATION PREVIEW / LEFT COLUMN
Required: 4:3
Alt text: Practitioners and coaches engaged in structured case discussion, reflection, and applied learning
Subject category: teaching-and-learning
Shot type: medium working
Priority: lazy
Sourcing brief: Adult African sports practitioners and coaches reviewing performance case notes and tactical boards around an academic seminar table in natural ambient light.
Status: SOURCED (`/images/teaching-and-learning/home-education-seminar-4x3.jpg`)

[5] HOMEPAGE / PEOPLE PREVIEW / RIGHT CARD COLUMN
Required: 4:3
Alt text: Natural working portrait of Dr. Joshua A. Oparachukwu examining applied performance frameworks
Subject category: practitioner-interaction
Shot type: portrait
Priority: lazy
Sourcing brief: Natural unposed working portrait of founder Dr. Joshua A. Oparachukwu in thoughtful engagement reviewing applied performance frameworks in an African institutional setting.
Status: SOURCED (`/images/practitioner-interaction/dr-joshua-oparachukwu-4x3.jpg`)

[6] ABOUT / CORE ABOUT / RIGHT COLUMN
Required: 4:3
Alt text: Performance practitioners examining athlete cognitive and behavioural factors in a professional setting
Subject category: multidisciplinary-collaboration
Shot type: medium working
Priority: lazy
Sourcing brief: Two African performance specialists in focused discussion examining athlete behavioural logs and physical preparation notes in a clubhouse office.
Status: SOURCED (`/images/multidisciplinary-collaboration/about-core-practice-4x3.jpg`)

[7] ABOUT / WHY AFRICA / LEFT COLUMN
Required: 4:3
Alt text: Coach and athletes reviewing tactical movement and environmental demands during regional tournament preparation
Subject category: training-and-competition
Shot type: movement
Priority: lazy
Sourcing brief: African track and field coach holding a stopwatch and field notes, conversing with an athlete on an outdoor running track in natural midday sunlight.
Status: SOURCED (`/images/training-and-competition/about-why-africa-context-4x3.jpg`)

[8] ABOUT / WHAT WE ARE BUILDING / RIGHT COLUMN
Required: 4:3
Alt text: Researchers, specialists and educators in collaborative consultation regarding institutional capability development
Subject category: multidisciplinary-collaboration
Shot type: group
Priority: lazy
Sourcing brief: Collaborative working meeting between African sports scientists, educators, and sporting directors seated around a conference desk reviewing development blueprints.
Status: MISSING

[9] PERFORMANCE SERVICES / CORE ARCHITECTURE / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa — Systematic performance observation, diagnostic review, and video analysis in natural African sporting settings.
Subject category: athlete-assessment
Shot type: quiet analytical
Priority: lazy
Sourcing brief: Sports performance analyst using a laptop and tactical notebook pitchside during an elite African training session, observing movement quietly from the sideline.
Status: SOURCED (`/images/observation-and-analysis/services-diagnostic-review-4x3.jpg`)

[10] PERFORMANCE SERVICES / ENGAGEMENT PROCESS / SLOT A
Required: 16:9
Alt text: MindGame Africa — Structured team conversations, psychological workshops, and review sessions in elite African sport.
Subject category: team-sessions
Shot type: group
Priority: lazy
Sourcing brief: African sports squad gathered in a training room engaged in a structured tactical and mental preparation review session, listening attentively to peer analysis.
Status: SOURCED (`/images/team-sessions/services-team-workshop-16x9.jpg`)

[11] PERFORMANCE SERVICES / ENGAGEMENT PROCESS / SLOT B
Required: 16:9
Alt text: MindGame Africa — Coach observation, feedback discussions, and decision-making review in demanding sporting environments.
Subject category: coaching-environments
Shot type: medium working
Priority: lazy
Sourcing brief: Senior African coach seated beside a competitor on an outdoor sideline bench reviewing strategic performance decisions calmly without theatrical shouting.
Status: SOURCED (`/images/coaching-environments/services-coach-feedback-16x9.jpg`)

[12] APPLIED PERFORMANCE PRACTICE / WHAT THIS MEANS / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa — Athletes and performers preparing under demanding competitive conditions in African sport.
Subject category: training-and-competition
Shot type: movement
Priority: lazy
Sourcing brief: Elite African track or field athlete undergoing focused psychological preparation and warmup routines under demanding outdoor competitive conditions.
Status: SOURCED (`/images/training-and-competition/practice-competitive-prep-4x3.jpg`)

[13] APPLIED PERFORMANCE PRACTICE / WHO THIS IS FOR / RIGHT COLUMN
Required: 16:9
Alt text: MindGame Africa — Practitioner, coach, and athlete working together around performance development and strategic focus.
Subject category: practitioner-interaction
Shot type: medium working
Priority: lazy
Sourcing brief: Performance psychologist seated with an African athlete outdoors in an authentic post-training debrief session discussing competitive execution.
Status: SOURCED (`/images/practitioner-interaction/practice-collaboration-16x9.jpg`)

[14] APPLIED PERFORMANCE PRACTICE / PERFORMANCE QUESTIONS / RIGHT COLUMN
Required: 16:9
Alt text: MindGame Africa — Performance psychologist reviewing video footage and behavioural notes following competition.
Subject category: athlete-assessment
Shot type: close detail
Priority: lazy
Sourcing brief: Close detail shot of hands holding a tactical clipboard, behavioural assessment notes, and pen, with the blurred greenery of an African sports ground in the background.
Status: SOURCED (`/images/observation-and-analysis/practice-analytical-review-16x9.jpg`)

[15] PERFORMANCE SCIENCE / WHAT PERFORMANCE SCIENCE MEANS / RIGHT COLUMN
Required: 4:3
Alt text: Abstract biomechanical force curves and temporal telemetry lines representing performance science telemetry
Subject category: performance-data
Shot type: quiet analytical
Priority: lazy
Sourcing brief: Editorial minimalist graphic visualization showing biomechanical force-velocity curves, temporal coordination axes, and scientific telemetry lines on deep navy.
Status: PLACEHOLDER

[16] PERFORMANCE SCIENCE / FUNCTION OF PERFORMANCE SCIENCE / FULL BANNER
Required: 21:9
Alt text: MindGame Africa — Academic seminar and faculty collaboration connecting performance science with field practice.
Subject category: teaching-and-learning
Shot type: group
Priority: lazy
Sourcing brief: Panoramic framing of an African university seminar room with sports scientists, faculty, and postgraduate fellows collaborating over research boards.
Status: SOURCED (`/images/teaching-and-learning/perf-science-academic-collab-21x9.jpg`)

[17] PERFORMANCE SCIENCE / FUTURE CAPABILITY / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa — Field-based performance observation capturing movement quality and technical execution.
Subject category: observation-and-analysis
Shot type: quiet analytical
Priority: lazy
Sourcing brief: Sports science technician or analyst adjusting timing gates, camera tripods, or field observation equipment on a natural grass training facility.
Status: SOURCED (`/images/observation-and-analysis/perf-science-field-capture-4x3.jpg`)

[18] RESEARCH / RESEARCH MANDATE / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa Research — Contextual investigation and performance science in African sport environments.
Subject category: researchers-at-work
Shot type: medium working
Priority: lazy
Sourcing brief: African sports researcher with clipboard and tablet taking field observations of athlete kinematics during training at a regional sporting complex.
Status: SOURCED (`/images/researchers-at-work/research-mandate-investigation-4x3.jpg`)

[19] RESEARCH / OUR APPROACH / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa Research — Academic collaboration, research symposia, and university partnerships.
Subject category: multidisciplinary-collaboration
Shot type: group
Priority: lazy
Sourcing brief: Multidisciplinary symposium of African academics and performance specialists gathered around a seminar table in thoughtful discussion over printed empirical papers.
Status: SOURCED (`/images/multidisciplinary-collaboration/research-symposium-4x3.jpg`)

[20] RESEARCH / COLLABORATE WITH US / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa Research — Applied data collection and performance observation during training.
Subject category: performance-data
Shot type: close detail
Priority: lazy
Sourcing brief: Close-up of a rugged tablet computer displaying performance analysis software, coding matrices, and match event timestamps held pitchside.
Status: SOURCED (`/images/performance-data/research-data-collection-4x3.jpg`)

[21] EDUCATION / WHAT EDUCATION MEANS / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa Education — Interactive professional learning, case discussion, and seminar engagement.
Subject category: teaching-and-learning
Shot type: medium working
Priority: lazy
Sourcing brief: African educator facilitating an interactive sports coaching masterclass or seminar with a small group of attentive coaches discussing practical cases.
Status: SOURCED (`/images/teaching-and-learning/education-seminar-interactive-4x3.jpg`)

[22] EDUCATION / WHO IT IS FOR / RIGHT COLUMN
Required: 16:9
Alt text: MindGame Africa Education — Coach education, observation, and applied practice review in sporting settings.
Subject category: coaching-environments
Shot type: medium working
Priority: lazy
Sourcing brief: Youth academy football or athletics coach demonstrating technical movement and tactical spacing to young athletes on a regional community training pitch.
Status: SOURCED (`/images/coaching-environments/education-coach-practice-16x9.jpg`)

[23] EDUCATION / LEARNING EXPERIENCE / RIGHT COLUMN
Required: 16:9
Alt text: MindGame Africa Education — Structured practitioner development workshop, method review, and applied tools.
Subject category: team-sessions
Shot type: group
Priority: lazy
Sourcing brief: Diverse group of African sports practitioners and educators in a syndicate workshop session, examining ethical frameworks and method review on flipcharts.
Status: SOURCED (`/images/team-sessions/education-workshop-collaboration-16x9.jpg`)

[24] INSIGHTS / CORE CONTENT ARCHITECTURE / RIGHT COLUMN
Required: 4:3
Alt text: Minimalist abstract vector composition representing analytical literature review and evidence classification on warm cream
Subject category: performance-data
Shot type: quiet analytical
Priority: lazy
Sourcing brief: Clean geometric grid and evidence classification graphic artwork on warm off-white canvas with deep navy and burnished gold rectangular research modules.
Status: PLACEHOLDER

[25] INSIGHTS / KNOWLEDGE LIBRARY DEVELOPMENT / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa Insights — Field notes, match analysis, and practitioner perspectives.
Subject category: observation-and-analysis
Shot type: quiet analytical
Priority: lazy
Sourcing brief: Sports scholar or analyst in an institutional study library reading peer-reviewed sports journals and writing notes with focused concentration.
Status: SOURCED (`/images/researchers-at-work/insights-literature-review-4x3.jpg`)

[26] INSIGHTS / MAILING LIST & FRAMEWORKS / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa Insights — Performance frameworks and evidence-based summaries for practitioners.
Subject category: practitioner-interaction
Shot type: medium working
Priority: lazy
Sourcing brief: Applied performance practitioner explaining an evidence summary brief to coaching staff in an athletics clubhouse office or stadium corridor.
Status: SOURCED (`/images/practitioner-interaction/insights-practitioner-discussion-4x3.jpg`)

[27] PEOPLE / LEADERSHIP FOUNDER PROFILE / LEFT GRID COLUMN
Required: 4:3
Alt text: Dr. Joshua A. Oparachukwu, Founder of MindGame Africa
Subject category: practitioner-interaction
Shot type: portrait
Priority: lazy
Sourcing brief: High-resolution formal executive portrait of founder Dr. Joshua A. Oparachukwu in authentic professional attire for the institutional leadership profile.
Status: SOURCED (`/images/practitioner-interaction/dr-joshua-oparachukwu-4x3.jpg`)

[28] PEOPLE [SLUG] / FOUNDER PROFILE HEADER & BIO / LEFT COLUMN
Required: 4:3
Alt text: Dr. Joshua A. Oparachukwu, Founder of MindGame Africa
Subject category: practitioner-interaction
Shot type: portrait
Priority: lazy
Sourcing brief: High-resolution formal executive portrait of founder Dr. Joshua A. Oparachukwu in authentic professional attire for the dedicated biography detail page.
Status: SOURCED (`/images/practitioner-interaction/dr-joshua-oparachukwu-4x3.jpg`)

[29] OPPORTUNITIES / PRACTITIONER FUNCTION / RIGHT COLUMN
Required: 4:3
Alt text: MindGame Africa Opportunities — Practitioner mentoring and supervised experience in African performance environments.
Subject category: practitioner-interaction
Shot type: medium working
Priority: lazy
Sourcing brief: Senior African sports science practitioner providing one-on-one professional mentoring to an early-career student practitioner in a study room.
Status: SOURCED (`/images/practitioner-interaction/opportunities-mentoring-4x3.jpg`)

[30] OPPORTUNITIES / FUTURE INTEREST REGISTRATION / LEFT COLUMN
Required: 16:9
Alt text: MindGame Africa Opportunities — Early career practitioners observing performance analysis in elite competition.
Subject category: observation-and-analysis
Shot type: medium working
Priority: lazy
Sourcing brief: Two junior sports performance analysts observing athletic execution and recording observational notes from an elevated stadium position.
Status: SOURCED (`/images/observation-and-analysis/opportunities-field-observation-16x9.jpg`)

[31] PARTNER WITH US / PARTNERSHIP ROUTES / INSTITUTIONAL CARD BAND
Required: 16:9
Alt text: Institutional and academic partners discussing strategic performance initiatives across Africa
Subject category: multidisciplinary-collaboration
Shot type: group
Priority: lazy
Sourcing brief: Formal institutional meeting between African university leaders and sports federation executives around a conference table in an academic institution.
Status: SOURCED (`/images/multidisciplinary-collaboration/partner-institutional-meeting-16x9.jpg`)

---

## Part 3 — What to Avoid (§17.4 Hard Fails)

Every image sourced from licensed stock libraries, original photography commissions, or visual asset generation must strictly avoid the following hard prohibitions:

- ❌ **No clenched fists, exaggerated victory gestures, or celebratory shouting:** Performance is characterized by active preparation, observation, and analysis, not theatrical victory tropes.
- ❌ **No trophy lifting or celebration imagery:** Trophies and podium celebrations are never the main representation of performance science.
- ❌ **No athletes screaming into the camera:** Unnatural aggression or performative rage is strictly forbidden.
- ❌ **No generic gym shots with no context:** Avoid commercial fitness models lifting dumbbells in mirrors with no institutional or sports context.
- ❌ **No people staring intensely into the distance:** Avoid staged dramatic poses pretending to represent "vision."
- ❌ **No brain graphics, lightning effects, or mental-toughness clichés:** Absolute prohibition on neon brains, anatomical head illustrations, lightning bolts, and pseudo-psychological graphics.
- ❌ **No therapy clinic or medical hospital imagery:** MindGame Africa conducts applied sports performance, not clinical psychotherapy or hospital medicine.
- ❌ **No lab coats for scientific effect:** Strictly avoid people posing in white laboratory coats used artificially to manufacture an illusion of science.
- ❌ **No abstract gradients as the only visual vocabulary:** Gradients alone do not substitute for photographic substance and documentary reality.
- ❌ **No image implying a laboratory, facility, staff team, programme, or capability that MindGame Africa does not have:** Never misrepresent the institution’s current operational reality or scale.
- ❌ **No decorative African clichés:** Identity is established through authentic people, sports grounds, universities, and performance realities (§17.2) — never through repeated maps, flags, wildlife, or decorative tribal motifs.

---

## Part 4 — Summary & Procurement Plan

### Quantitative Breakdown

| Metric | Count | Details |
|---|---|---|
| **Total image slots needed across entire site** | **31** | 31 active JSX components (`1` Next.js `<Image>` + `30` `<SectionImage>`) across marketing routes |
| **Total already sourced / physically placed** | **26** | `/images/hero-bg.jpg` (Hero background) + 22 licensed documentary stock photos (`STK-01` to `STK-22`) + founder portrait ([5], [27], [28]) cropped and placed |
| **Total generated placeholders** | **4** | Minimalist data visualizations & environmental landscape in `public/images/` |
| **Total still to download / procure** | **1** | 1 institutional development photograph ([8] About: What We Are Building) |

### Breakdown by §17.1 Subject Category

| Subject Category | Count | Image Slot Numbers |
|---|---|---|
| `practitioner-interaction` | **6** | [5], [13], [26], [27], [28], [29] |
| `performance-data` | **4** | [2], [15], [20], [24] |
| `multidisciplinary-collaboration` | **4** | [6], [8], [19], [31] |
| `teaching-and-learning` | **3** | [4], [16], [21] |
| `training-and-competition` | **3** | [1], [7], [12] |
| `observation-and-analysis` | **3** | [17], [25], [30] |
| `athlete-assessment` | **2** | [9], [14] |
| `coaching-environments` | **2** | [11], [22] |
| `team-sessions` | **2** | [10], [23] |
| `researchers-at-work` | **2** | [3], [18] |
| **Total** | **31** | |

### Breakdown by Priority

- **`hero`:** **1** (Slot [1] Hero background, high priority Next.js `priority={true}` eager load)
- **`lazy`:** **30** (Slots [2] through [31], lazy loaded with responsive aspect-ratio wrappers and placeholder fallbacks)

### Next Steps & Original Photography Notice (§17.5)

Per `docs/CONTENT_SOURCE_OF_TRUTH.md` §17.5:
> *The long-term direction is original MindGame Africa photography. As activities, teaching, field work, research and practitioner engagements happen, build an image library deliberately. Licensed or stock imagery at the beginning is a **temporary substitute for this documentary language, not the permanent identity of the brand.** Every stock image used is recorded in this manifest so it can be systematically swapped for original commissioned photography as institutional fieldwork matures.*
