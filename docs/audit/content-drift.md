# MindGame Africa — Repository Content Drift & Compliance Audit

**Audit Date:** 16 September 2026  
**Audited Against:** `docs/CONTENT_SOURCE_OF_TRUTH.md` (Authoritative Canonical Specification)  
**Scope:** Full codebase audit covering verbatim copy compliance, prohibited claims, disclosures, placeholders, British English orthography, routing/CTA integrity, architecture/persistence, and visual text density.

---

## A. Verbatim string violations

### Comparison Methodology
Strict byte comparison was performed directly on the raw UTF-8 byte streams of all repository source files without normalising whitespace, line terminators (`\r\n` vs `\n`), quotes/apostrophes, hyphens, or HTML entities.
- **MATCH**: The required string exists character-for-character within the file byte stream.
- **PUNCTUATION**: The string content is present in code but differs in typographical characters (e.g. curly right single quotation mark `’` [`\u2019`] vs straight apostrophe `'` [`\u0027`], or HTML entity `&apos;` vs ASCII `'`).
- **HYPHENATION**: The string differs only by hyphens or dashes.
- **CASING**: The string differs only in capitalisation.
- **TRUNCATED**: The string in code omits leading, trailing, or internal segments of the required specification.
- **EXTRA-TEXT**: The string in code contains embedded JSX newline and indentation whitespace characters (`\n            `), breaking character-for-character byte equality.
- **REWORDED**: The copy has been substantively rewritten or split across structural elements.
- **MISSING**: The string is completely absent from the codebase; the table identifies the canonical file where it must reside.

### Verbatim String Audit Table

| Source-of-truth ref | File path | Line | Current string in code | Required string | Diff type |
|---|---|---|---|---|---|
| §3.2 | components/sections/Pillars.tsx | 91 | `How MindGame Africa Works Across Performance` | `How MindGame Africa Works Across Performance` | MATCH |
| §3.3 | components/sections/WhoWeWorkWith.tsx | 73 | `Who MindGame Africa Is Built to Work With` | `Who MindGame Africa Is Built to Work With` | MATCH |
| §3.3 | components/sections/WhoWeWorkWith.tsx | 76 | `We work across individual, team and performance environment levels, [...]` | `We work across individual, team and performance environment levels, connecting evidence with the realities of ` | EXTRA-TEXT |
| §3.4 | components/sections/CurrentFocus.tsx | 23 | `Current Focus` | `Current Focus` | MATCH |
| §3.4 | components/sections/CurrentFocus.tsx | 26 | `Our current work is centred on applied performance practice, the [...]` | `Our current work is centred on applied performance practice, the development of a multidisciplinary performanc` | EXTRA-TEXT |
| §3.5 | components/sections/ResearchPreview.tsx | 26 | `Research that begins with real performance questions.` | `Research that begins with real performance questions.` | MATCH |
| §3.5 | components/sections/ResearchPreview.tsx | 29 | `We are building a research agenda around performance under [...]` | `We are building a research agenda around performance under pressure, behaviour, coaching, athlete development,` | EXTRA-TEXT |
| §3.6 | components/sections/EducationPreview.tsx | 26 | `Developing people who work with performance.` | `Developing people who work with performance.` | MATCH |
| §3.6 | components/sections/EducationPreview.tsx | 29 | `Our education function is being designed for coaches, [...]` | `Our education function is being designed for coaches, practitioners, students, performance professionals and o` | EXTRA-TEXT |
| §3.7 | components/sections/PeoplePreview.tsx | 27 | `Built through expertise, not titles.` | `Built through expertise, not titles.` | MATCH |
| §3.7 | components/sections/PeoplePreview.tsx | 30 | `MindGame Africa will grow through a network of practitioners, [...]` | `MindGame Africa will grow through a network of practitioners, researchers, faculty and specialist collaborator` | EXTRA-TEXT |
| §3.8 | components/sections/ClosingCTA.tsx | 18 | `Have a performance problem, research question, learning need or [...]` | `Have a performance problem, research question, learning need or collaboration idea?` | EXTRA-TEXT |
| §3.8 | components/sections/ClosingCTA.tsx | 23 | `Start the Right Conversation With MindGame Africa` | `Start the Right Conversation With MindGame Africa` | MATCH |
| §4.1 | app/(marketing)/about/page.tsx | 35 | `About MindGame Africa` | `About MindGame Africa` | MATCH |
| §4.1 | app/(marketing)/about/page.tsx | 38 | `MindGame Africa is a performance science, research, education and [...]` | `MindGame Africa is a performance science, research, education and professional practice institution being buil` | EXTRA-TEXT |
| §4.2 | app/(marketing)/about/page.tsx | 64 | `We connect evidence with practice by working on performance [...]` | `We connect evidence with practice by working on performance problems, producing and translating knowledge, dev` | EXTRA-TEXT |
| §4.2 | app/(marketing)/about/page.tsx | 70 | `Our starting point is simple. Performance is not only a question [...]` | `Our starting point is simple. Performance is not only a question of talent, facilities or physical preparation` | EXTRA-TEXT |
| §4.2 | app/(marketing)/about/page.tsx | 77 | `MindGame Africa therefore sits at the intersection of [...]` | `MindGame Africa therefore sits at the intersection of performance science, research, education and applied pro` | EXTRA-TEXT |
| §4.5 | app/(marketing)/about/page.tsx | 120 | `Africa should not only consume performance knowledge produced [...]` | `Africa should not only consume performance knowledge produced elsewhere. We need stronger local evidence, more` | EXTRA-TEXT |
| §4.7 | app/(marketing)/about/page.tsx | 199 | `Over time, MindGame Africa is intended to grow into a stronger [...]` | `Over time, MindGame Africa is intended to grow into a stronger network of practitioners, researchers, faculty,` | EXTRA-TEXT |
| §5.1 | app/(marketing)/performance-services/page.tsx | 70 | `Performance Services` | `Performance Services` | MATCH |
| §5.1 | app/(marketing)/performance-services/page.tsx | 73 | `We help individuals, teams, coaches and organisations understand [...]` | `We help individuals, teams, coaches and organisations understand performance problems, identify the factors th` | EXTRA-TEXT |
| §5.2 | app/(marketing)/performance-services/page.tsx | 19 | `A structured process for clarifying a performance problem, gathering relevant information and identifying the ` | `A structured process for clarifying a performance problem, gathering relevant information and identifying the ` | MATCH |
| §5.2 | app/(marketing)/performance-services/page.tsx | 24 | `A tailored engagement for teams that may include assessment, workshops, behavioural or psychological intervent` | `A tailored engagement for teams that may include assessment, workshops, behavioural or psychological intervent` | MATCH |
| §5.2 | app/(marketing)/performance-services/page.tsx | 29 | `Work focused on the coach as a decision maker, communicator and important part of the athlete\u2019s performan` | `Work focused on the coach as a decision maker, communicator and important part of the athlete's performance en` | PUNCTUATION |
| §5.2 | app/(marketing)/performance-services/page.tsx | 34 | `Individual or group support around psychological and behavioural factors that influence preparation, competiti` | `Individual or group support around psychological and behavioural factors that influence preparation, competiti` | MATCH |
| §5.2 | app/(marketing)/performance-services/page.tsx | 39 | `Research or evaluation designed around a real performance question, intervention, programme or organisational ` | `Research or evaluation designed around a real performance question, intervention, programme or organisational ` | MATCH |
| §5.4 | app/(marketing)/performance-services/page.tsx | 221 | `Not sure which service fits the problem you are trying to solve?` | `Not sure which service fits the problem you are trying to solve?` | MATCH |
| §5.4 | app/(marketing)/performance-services/page.tsx | 225 | `Start With a Performance Inquiry` | `Start With a Performance Inquiry` | MATCH |
| §6.1 | app/(marketing)/performance-services/applied-performance-practice/page.tsx | 43 | `Applied Performance Practice` | `Applied Performance Practice` | MATCH |
| §6.1 | app/(marketing)/performance-services/applied-performance-practice/page.tsx | 46 | `We work with athletes, coaches, teams and other high pressure [...]` | `We work with athletes, coaches, teams and other high pressure performers to understand the factors affecting p` | EXTRA-TEXT |
| §6.2 | app/(marketing)/performance-services/applied-performance-practice/page.tsx | 75 | `Applied performance practice is where performance science meets [...]` | `Applied performance practice is where performance science meets the realities of preparation, competition, coa` | EXTRA-TEXT |
| §6.2 | app/(marketing)/performance-services/applied-performance-practice/page.tsx | 84 | `Our present applied strength includes performance psychology, [...]` | `Our present applied strength includes performance psychology, mental performance and behavioural performance. ` | EXTRA-TEXT |
| §6.5 | app/(marketing)/performance-services/applied-performance-practice/page.tsx | 215 | `Why does an athlete perform differently in training and [...]` | `Why does an athlete perform differently in training and competition? What happens psychologically after a cost` | EXTRA-TEXT |
| §6.6 | app/(marketing)/performance-services/applied-performance-practice/page.tsx | 241 | `Have a performance question you want us to examine with you?` | `Have a performance question you want us to examine with you?` | MATCH |
| §6.6 | app/(marketing)/performance-services/applied-performance-practice/page.tsx | 245 | `Start a Performance Conversation` | `Start a Performance Conversation` | MATCH |
| §7.1 | app/(marketing)/research/page.tsx | 133 | `Performance Science` | `Performance Science` | MATCH |
| §7.1 | app/(marketing)/research/performance-science/page.tsx | 48 | `Performance is rarely explained by one discipline. MindGame Africa [...]` | `Performance is rarely explained by one discipline. MindGame Africa is being built to connect the scientific pe` | EXTRA-TEXT |
| §7.2 | app/(marketing)/research/performance-science/page.tsx | 73 | `Our performance science direction is multidisciplinary. [...]` | `Our performance science direction is multidisciplinary. Psychology and behavioural performance are important p` | EXTRA-TEXT |
| §7.2 | app/(marketing)/research/performance-science/page.tsx | 82 | `MindGame Africa will develop this capability responsibly. We [...]` | `MindGame Africa will develop this capability responsibly. We will not present a discipline, laboratory or tech` | EXTRA-TEXT |
| §7.5 | app/(marketing)/research/performance-science/page.tsx | 199 | `Are you a performance specialist, academic department, research [...]` | `Are you a performance specialist, academic department, research group or organisation interested in contributi` | EXTRA-TEXT |
| §7.5 | app/(marketing)/research/performance-science/page.tsx | 205 | `Explore Collaboration With MindGame Africa` | `Explore Collaboration With MindGame Africa` | MATCH |
| §8.1 | app/(marketing)/research/page.tsx | 60 | `Research and Knowledge` | `Research and Knowledge` | MATCH |
| §8.1 | app/(marketing)/research/page.tsx | 63 | `We want to produce, examine and translate knowledge that helps us [...]` | `We want to produce, examine and translate knowledge that helps us understand performance in African contexts a` | EXTRA-TEXT |
| §8.2 | app/(marketing)/research/page.tsx | 91 | `Research at MindGame Africa is intended to sit close to real [...]` | `Research at MindGame Africa is intended to sit close to real performance questions. We are interested in work ` | EXTRA-TEXT |
| §8.2 | app/(marketing)/research/page.tsx | 99 | `An important part of our mandate is to contribute more African [...]` | `An important part of our mandate is to contribute more African evidence to fields in which performance knowled` | EXTRA-TEXT |
| §8.5 | app/(marketing)/research/page.tsx | 259 | `We are open to conversations with universities, academic [...]` | `We are open to conversations with universities, academic departments, researchers, postgraduate students, spor` | EXTRA-TEXT |
| §8.5 | app/(marketing)/research/page.tsx | 332 | `Have a research question or collaboration idea?` | `Have a research question or collaboration idea?` | MATCH |
| §8.5 | app/(marketing)/research/page.tsx | 336 | `Start a Research Conversation` | `Start a Research Conversation` | MATCH |
| §8.6 | app/(marketing)/research/page.tsx | 314 | `Research outputs, reports, publications and active projects will [...]` | `Research outputs, reports, publications and active projects will be added here as the MindGame Africa research` | EXTRA-TEXT |
| §9.1 | app/(marketing)/education/page.tsx | 58 | `Education and Professional Development` | `Education and Professional Development` | MATCH |
| §9.1 | app/(marketing)/education/page.tsx | 61 | `We are building learning experiences that help practitioners, [...]` | `We are building learning experiences that help practitioners, coaches, students and performance professionals ` | EXTRA-TEXT |
| §9.2 | app/(marketing)/education/page.tsx | 90 | `Education at MindGame Africa should not be a collection of [...]` | `Education at MindGame Africa should not be a collection of motivational talks or generic online courses. Our p` | EXTRA-TEXT |
| §9.2 | app/(marketing)/education/page.tsx | 98 | `Some learning experiences may be short workshops or professional [...]` | `Some learning experiences may be short workshops or professional development sessions. Others may develop into` | EXTRA-TEXT |
| §9.7 | app/(marketing)/education/page.tsx | 279 | `Our education and professional development portfolio is being [...]` | `Our education and professional development portfolio is being developed progressively. Current workshops, semi` | EXTRA-TEXT |
| §9.7 | app/(marketing)/education/page.tsx | - | `[ABSENT FROM CODEBASE]` | `Our education and professional development portfolio is being developed progressively. New workshops, learning` | MISSING |
| §9.7 | app/(marketing)/education/page.tsx | 303 | `Interested in learning, teaching or developing a programme with us?` | `Interested in learning, teaching or developing a programme with us?` | MATCH |
| §9.7 | app/(marketing)/education/page.tsx | 307 | `Discuss Education and Professional Development` | `Discuss Education and Professional Development` | MATCH |
| §10 | components/sections/Pillars.tsx | 67 | `MindGame Africa is being built to help strengthen the route from academic learning to competent professional p` | `MindGame Africa is being built to help strengthen the route from academic learning to competent professional p` | MATCH |
| §11.1 | app/(marketing)/insights/page.tsx | 73 | `Insights and Performance Knowledge` | `Insights and Performance Knowledge` | MATCH |
| §11.1 | app/(marketing)/insights/page.tsx | 76 | `This is where MindGame Africa will translate research, [...]` | `This is where MindGame Africa will translate research, professional experience and performance questions into ` | EXTRA-TEXT |
| §11.3 | app/(marketing)/insights/page.tsx | 156 | `The MindGame Africa knowledge library is being built. New [...]` | `The MindGame Africa knowledge library is being built. New articles, evidence reviews, practitioner resources a` | EXTRA-TEXT |
| §12.1 | app/(marketing)/page.tsx | 7 | `People` | `People` | MATCH |
| §12.1 | app/(marketing)/people/page.tsx | 30 | `"His role within MindGame Africa is therefore broader than delivering individual performance support. He provi` | `MindGame Africa is being built through a networked model that can bring together leadership, practitioners, re` | EXTRA-TEXT |
| §12.1 | app/(marketing)/people/page.tsx | 386 | `Our wider practitioner, faculty and research network will be added [...]` | `Our wider practitioner, faculty and research network will be added as formal roles and collaborations are conf` | EXTRA-TEXT |
| §12.2 | app/(marketing)/about/page.tsx | 230 | `Dr. Joshua A. Oparachukwu` | `Dr. Joshua A. Oparachukwu` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 21 | `designation: "Performance Psychologist \| Performance Strategist` | `Founder, MindGame Africa \| Performance Psychologist \| Performance Strategist` | TRUNCATED |
| §12.2 | app/(marketing)/people/page.tsx | 23 | `Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa and a performance psychologist and performance str` | `Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa and a performance psychologist and performance str` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 25 | `Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa, an African performance science, research, educati` | `Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa, an African performance science, research, educati` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 26 | `His work is grounded in performance psychology and applied performance science, with particular interest in ho` | `His work is grounded in performance psychology and applied performance science, with particular interest in ho` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 27 | `Across his applied work, he has worked with athletes, coaches, teams and performers in demanding environments,` | `Across his applied work, he has worked with athletes, coaches, teams and performers in demanding environments,` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 28 | `His academic background is in Human Kinetics, the Sociology and Psychology of Sport, and Performance Psycholog` | `His academic background is in Human Kinetics, the Sociology and Psychology of Sport, and Performance Psycholog` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 29 | `Through MindGame Africa, Dr. Oparachukwu is working to create stronger connections between research, performan` | `Through MindGame Africa, Dr. Oparachukwu is working to create stronger connections between research, performan` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 30 | `His role within MindGame Africa is therefore broader than delivering individual performance support. He provid` | `His role within MindGame Africa is therefore broader than delivering individual performance support. He provid` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 35 | `Applied performance psychology and mental performance.` | `Applied performance psychology and mental performance.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 36 | `Performance strategy and behavioural performance.` | `Performance strategy and behavioural performance.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 37 | `Performance under pressure.` | `Performance under pressure.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 38 | `Confidence, attention and self regulation.` | `Confidence, attention and self regulation.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 39 | `Mistake response and recovery after error.` | `Mistake response and recovery after error.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 40 | `Coach behaviour and the psychological performance environment.` | `Coach behaviour and the psychological performance environment.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 41 | `Applied research and evidence translation.` | `Applied research and evidence translation.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 42 | `Professional education and practitioner development.` | `Professional education and practitioner development.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 43 | `Development of multidisciplinary performance science capability in African contexts.` | `Development of multidisciplinary performance science capability in African contexts.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 46 | `As Founder, Dr. Oparachukwu provides the strategic, intellectual and professional direction for MindGame Afric` | `As Founder, Dr. Oparachukwu provides the strategic, intellectual and professional direction for MindGame Afric` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 47 | `His responsibility is also to ensure that MindGame Africa grows with clear professional boundaries. New discip` | `His responsibility is also to ensure that MindGame Africa grows with clear professional boundaries. New discip` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 50 | `Cognitive reframing and performance behaviour.` | `Cognitive reframing and performance behaviour.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 51 | `Verbal affirmation and psychological response in sport.` | `Verbal affirmation and psychological response in sport.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 52 | `Mistake contingency and recovery after performance errors.` | `Mistake contingency and recovery after performance errors.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 53 | `Mental toughness and assertive performance behaviour.` | `Mental toughness and assertive performance behaviour.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 54 | `Psychological skills interventions in football.` | `Psychological skills interventions in football.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 55 | `Coach behaviour, confidence and the athlete performance environment.` | `Coach behaviour, confidence and the athlete performance environment.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 56 | `Performance psychology in African sport contexts.` | `Performance psychology in African sport contexts.` | MATCH |
| §12.2 | app/(marketing)/people/page.tsx | 33 | `MindGame Africa is being built around a simple idea: performance should be understood more deeply, supported m` | `MindGame Africa is being built around a simple idea: performance should be understood more deeply, supported m` | MATCH |
| §12.3 | app/(marketing)/about/page.tsx | 230 | `Dr. Joshua A. Oparachukwu` | `Dr. Joshua A. Oparachukwu` | MATCH |
| §12.3 | components/sections/PeoplePreview.tsx | 42 | `<span ...>Founder, MindGame Africa</span> <span ...>Performance Psychologist \| Performance Strategist</span>` | `Founder, MindGame Africa \| Performance Psychologist \| Performance Strategist` | REWORDED |
| §12.3 | components/sections/PeoplePreview.tsx | 49 | `Dr. Joshua A. Oparachukwu leads MindGame Africa&apos;s work across applied...` | `Dr. Joshua A. Oparachukwu leads MindGame Africa's work across applied performance practice, research, professi` | PUNCTUATION |
| §13.1 | app/(marketing)/partner-with-us/page.tsx | 53 | `Partner With MindGame Africa` | `Partner With MindGame Africa` | MATCH |
| §13.1 | app/(marketing)/partner-with-us/page.tsx | 56 | `We are open to collaborations that strengthen performance [...]` | `We are open to collaborations that strengthen performance practice, research, professional education, practiti` | EXTRA-TEXT |
| §13.2 | app/(marketing)/partner-with-us/page.tsx | 11 | `For teams, clubs, academies, athletes, coaches and organisations that want to discuss a performance problem or` | `For teams, clubs, academies, athletes, coaches and organisations that want to discuss a performance problem or` | MATCH |
| §13.2 | app/(marketing)/partner-with-us/page.tsx | 15 | `For universities, researchers, sport organisations and other institutions interested in applied research, prog` | `For universities, researchers, sport organisations and other institutions interested in applied research, prog` | MATCH |
| §13.2 | app/(marketing)/partner-with-us/page.tsx | 19 | `For departments and institutions interested in teaching, research, student development, internships, guest fac` | `For departments and institutions interested in teaching, research, student development, internships, guest fac` | MATCH |
| §13.2 | app/(marketing)/partner-with-us/page.tsx | 23 | `For organisations seeking workshops, seminars, internal professional development or the co development of a st` | `For organisations seeking workshops, seminars, internal professional development or the co development of a st` | MATCH |
| §13.2 | app/(marketing)/partner-with-us/page.tsx | 27 | `For qualified specialists interested in contributing expertise, teaching, research, supervision or applied wor` | `For qualified specialists interested in contributing expertise, teaching, research, supervision or applied wor` | MATCH |
| §13.2 | app/(marketing)/partner-with-us/page.tsx | 31 | `For organisations interested in longer term research, education, technical collaboration, exchange or capacity` | `For organisations interested in longer term research, education, technical collaboration, exchange or capacity` | MATCH |
| §13.3 | components/sections/PartnerForm.tsx | 177 | `Tell us what you are trying to build, examine or improve, and where you [...]` | `Tell us what you are trying to build, examine or improve, and where you think MindGame Africa may fit.` | EXTRA-TEXT |
| §14 | app/(marketing)/contact/page.tsx | 38 | `Contact MindGame Africa` | `Contact MindGame Africa` | MATCH |
| §14 | app/(marketing)/contact/page.tsx | 41 | `For performance inquiries, research conversations, education, [...]` | `For performance inquiries, research conversations, education, professional collaboration or general questions,` | EXTRA-TEXT |
| §17 | app/(marketing)/about/page.tsx | - | `[ABSENT FROM CODEBASE]` | `The visual language should feel documentary, intelligent, contemporary and close to practice. I want the image` | MISSING |
| §23 | app/(marketing)/about/page.tsx | - | `[ABSENT FROM CODEBASE]` | `I do not want this next development pass to make MindGame Africa look larger than it is. I want it to make Min` | MISSING |
| §23 | app/(marketing)/about/page.tsx | - | `[ABSENT FROM CODEBASE]` | `A visitor should be able to understand what we believe performance work should look like, what we are capable ` | MISSING |
| §23 | app/(marketing)/about/page.tsx | - | `[ABSENT FROM CODEBASE]` | `The website should therefore feel credible before it feels impressive. It should show direction without preten` | MISSING |


---

## B. Fabricated or unverifiable content

Per §1.1, §1.2, and §21 of the Content Source of Truth, MindGame Africa publishes **zero statistics, zero clients, zero partners, zero publications, zero testimonials, zero logos, zero awards, zero accreditations, zero fellowships, zero memberships, zero physical laboratories, zero facilities, zero faculty members, and zero open programmes.**

The audit identified the following fabricated or prohibited items:

1. **SportLead Africa Language Infusion (`people/page.tsx:94`):**
   - **Violation:** `app/(marketing)/people/page.tsx` line 94 includes:
     ```typescript
     description: "Senior leaders and domain experts advising on strategy, governance and institutional growth."
     ```
   - **Drift:** The term `governance` belongs exclusively to SportLead Africa. SOT §1.2 explicitly prohibits sport governance, administration, competition management, and facility terminology.

2. **Unapproved Category Architecture & Descriptions (`people/page.tsx:64-113`):**
   - **Violation:** The file instantiates full category data objects and public descriptions for `Faculty`, `Practitioners`, `Research Associates`, `Advisors`, `Mentors or Supervisors`, and `Visiting Faculty`.
   - **Drift:** While filtered out during rendering via `category.people.length > 0`, SOT §12.1 explicitly forbids rendering or establishing non-leadership categories until genuine personnel exist: *"At present only Leadership exists. Show Leadership properly, render no other category."*

3. **Hallucinated / Appended Copy in Core Philosophy (`about/page.tsx:88-94`):**
   - **Violation:** In `app/(marketing)/about/page.tsx` lines 88–94, the defining idea from §4.3 has unapproved commentary appended:
     ```text
     "Performance is not one thing. The same visible problem can have different causes, and the discipline required should be determined by the problem rather than by the service someone wants to sell. We begin with the performance question, examine context, and integrate appropriate evidence rather than imposing isolated commercial techniques."
     ```
   - **Drift:** The second sentence (*"We begin with the performance question..."*) is fabricated copy absent from SOT §4.3.

4. **Fabricated Client / Organisation / Certification Language in Form Placeholders:**
   - `components/sections/PartnerForm.tsx:227`: `placeholder="e.g. Club, University, Federation"`
   - `components/sections/PartnerForm.tsx:247`: `placeholder="e.g. Head Coach, Director, Researcher"`
   - `components/sections/PartnerForm.tsx:387`: `placeholder="e.g. A tailored assessment, a collaborative research paper, a certified workshop series, structured mentorship..."` (violates §9.6 prohibition on careless certificate/accreditation language by suggesting a "certified workshop series").
   - `components/sections/ContactForm.tsx:209`: `placeholder="e.g. Club, Academy, University"`

5. **Compliance on Other Prohibitions:**
   - **No active laboratory claims:** Developing disciplines in `app/(marketing)/research/performance-science/page.tsx` are framed correctly as *"Areas of Future and Developing Capability"* without booking or purchase affordances.
   - **No registration open claims:** Education programmes in `app/(marketing)/education/page.tsx` carry the explicit badge *"Not open for registration"*.
   - **No fabricated numeric statistics or counters:** No counters, percentages, or years-of-experience statistics exist.

---

## C. Prohibited disclosures

Per Amendment A1 and §1.1, MindGame Africa publishes **no location, no headquarters, no city, no country, no address, no email, no telephone number, and no social media links.** None have been supplied.

The audit detected the following prohibited disclosures:

| File Path | Line Number | Category | Published Value | Source of Truth Rule |
|---|---|---|---|---|
| `app/(marketing)/contact/page.tsx` | 9 | Email Address | `const CONTACT_EMAIL = "info@mindgameafrica.com";` | §1.1: Email NOT SUPPLIED. Publish nothing until officially confirmed. |
| `app/(marketing)/contact/page.tsx` | 94 | Email Address | Rendered directly in `<p className="...">{CONTACT_EMAIL}</p>` inside the Direct Contact Email Card | §1.1 & §14: Render no email block until real value exists. |
| `app/(marketing)/contact/page.tsx` | 11 | Location | `const CONTACT_LOCATION = "Pan-African Network & Digital Operations";` | Amendment A1 & §1.1: No location anywhere on site. Publish no headquarters, city, country, or operations address. |
| `app/(marketing)/contact/page.tsx` | 122 | Location | Rendered directly in `<p className="...">{CONTACT_LOCATION}</p>` inside the Direct Contact Location Card | Amendment A1 & §14: Invent no physical headquarters or operational network location. |
| `components/sections/PartnerForm.tsx` | 297 | Location Prompt | `placeholder="e.g. Nigeria, South Africa, Kenya, UK"` | §13.3: Country input field should be neutral without prompted geopolitical suggestions. |

*Note on Founder Academic Background:* `app/(marketing)/people/page.tsx:59-60` references the `University of Ibadan`. This is explicitly permitted and mandated under SOT §12.2 (*"His academic background is in Human Kinetics, the Sociology and Psychology of Sport, and Performance Psychology at the University of Ibadan"*).

---

## D. Banned and placeholder strings

Audit grep for banned phrases (`"Coming soon"`, `"Coming Soon"`, `"coming soon"`, `TBA`, `TBD`, `"To be announced"`, `"Watch this space"`, `"Under construction"`, `Lorem`, `Placeholder`, `"Your text here"`, `"Profile forthcoming"`, `href="#"`, empty `href`):

| File Path | Line Number | Matched Pattern | Code Snippet |
|---|---|---|---|
| `components/layout/Footer.tsx` | 70 | `href="#"` | `<Link href="#" className="text-[0.8125rem] text-cream/40 hover:text-cream/70 transition-colors">Privacy</Link>` |
| `components/layout/Footer.tsx` | 73 | `href="#"` | `<Link href="#" className="text-[0.8125rem] text-cream/40 hover:text-cream/70 transition-colors">Terms</Link>` |
| `app/(marketing)/contact/page.tsx` | 14 | `placeholder` | `// Only display phone if an actual number is provided, not a placeholder` |
| `app/(marketing)/contact/page.tsx` | 17 | `placeholder` | `!CONTACT_PHONE.includes("PLACEHOLDER") &&` |
| `components/sections/ContactForm.tsx` | 180 | `placeholder` attribute | `placeholder="Your full name"` |
| `components/sections/ContactForm.tsx` | 209 | `placeholder` attribute | `placeholder="e.g. Club, Academy, University"` |
| `components/sections/ContactForm.tsx` | 229 | `placeholder` attribute | `placeholder="name@example.com"` |
| `components/sections/ContactForm.tsx` | 284 | `placeholder` attribute | `placeholder="Brief summary of your inquiry"` |
| `components/sections/ContactForm.tsx` | 312 | `placeholder` attribute | `placeholder="Please share details about your inquiry or what you would like to discuss..."` |
| `components/sections/MailingSignup.tsx` | 95 | `placeholder` attribute | `placeholder="Enter your email address"` |
| `components/sections/OpportunityInterestForm.tsx` | 137 | `placeholder` attribute | `placeholder="Your full name"` |
| `components/sections/OpportunityInterestForm.tsx` | 165 | `placeholder` attribute | `placeholder="name@example.com"` |
| `components/sections/OpportunityInterestForm.tsx` | 193 | `placeholder` attribute | `placeholder="e.g. Internships, supervised practice, practitioner education, applied research, performance psychology..."` |
| `components/sections/PartnerForm.tsx` | 198 | `placeholder` attribute | `placeholder="Your full name"` |
| `components/sections/PartnerForm.tsx` | 227 | `placeholder` attribute | `placeholder="e.g. Club, University, Federation"` |
| `components/sections/PartnerForm.tsx` | 247 | `placeholder` attribute | `placeholder="e.g. Head Coach, Director, Researcher"` |
| `components/sections/PartnerForm.tsx` | 270 | `placeholder` attribute | `placeholder="name@organisation.com"` |
| `components/sections/PartnerForm.tsx` | 297 | `placeholder` attribute | `placeholder="e.g. Nigeria, South Africa, Kenya, UK"` |
| `components/sections/PartnerForm.tsx` | 359 | `placeholder` attribute | `placeholder="Provide context regarding the performance question, intervention, research project, or educational programme you are considering..."` |
| `components/sections/PartnerForm.tsx` | 387 | `placeholder` attribute | `placeholder="e.g. A tailored assessment, a collaborative research paper, a certified workshop series, structured mentorship..."` |

*Summary:* Banned strings `Coming soon`, `TBA`, `TBD`, `To be announced`, `Watch this space`, `Under construction`, and `Lorem ipsum` are **0% present**. The primary violations are empty placeholder routes (`href="#"`) in the footer for Privacy and Terms.

---

## E. American spellings

All copy in the repository was audited against British English orthography standards (`-ise`, `-yse`, `-isation`, `programme`, `behaviour`, `centre`, `organisation`).

### Audit Findings
- **Prose Violations Found:** **0**
- The repository strictly employs British English throughout all user-facing copy:
  - `programme` / `programmes`: 24 occurrences across components and data models.
  - `behaviour` / `behavioural`: 7 occurrences in copy.
  - `organisation` / `organisations`: 15 occurrences in copy.
  - `centred`: 1 occurrence (`CurrentFocus.tsx:16`).
  - No American endings (`-ize`, `-yze`, `center` in text) were found in content.

### Excluded Code Identifiers
The following code identifiers were checked and excluded from spelling violations:
1. **Tailwind CSS Utility Classes:**
   - `items-center` (38 instances), `justify-center` (12 instances), `text-center` (4 instances), `object-center` (2 instances), `bg-center` (2 instances). Excluded as immutable utility classes generated by Tailwind CSS.
2. **Third-Party Component Properties:**
   - `size={...}` (18 instances in Lucide React icons). Excluded as standard library prop.
   - `sizes="100vw"` (1 instance in Next.js `<Image />`). Excluded as Next.js image sizing prop.
3. **DOM APIs:**
   - `fontSize`, `resize`, `initialize`. None present in application code.

---

## F. Routing and CTA gaps

| Location / Ref | Expected Button Label | Actual Button Label | Expected Destination | Actual Destination | Status | Notes |
|---|---|---|---|---|---|---|
| §2 Primary Nav: About | "About" | "About" | `/about` | `/about` | **PASS** | Matches authoritative order |
| §2 Primary Nav: Performance Services | "Performance Services" | "Performance Services" | `/performance-services` | `/performance-services` | **PASS** | Matches authoritative order |
| §2 Primary Nav: Research | "Research" | "Research" | `/research` | `/research` | **PASS** | Matches authoritative order |
| §2 Primary Nav: Education | "Education" | "Education" | `/education` | `/education` | **PASS** | Uses concise nav label per C5 |
| §2 Primary Nav: Insights | "Insights" | "Insights" | `/insights` | `/insights` | **PASS** | Matches authoritative order |
| §2 Primary Nav: People | "People" | "People" | `/people` | `/people` | **PASS** | Matches authoritative order |
| §2 Primary Nav: Contact | "Contact" | "Contact" | `/contact` | `/contact` | **PASS** | Matches authoritative order |
| §2 Primary Nav: Partner With Us | "Partner With Us" | "Partner With Us" | `/partner-with-us` | `/partner-with-us` | **PASS** | Distinct button treatment top-right |
| §3.1 Homepage Hero CTA 1 | "Explore What We Do" | "Explore What We Do" | `#what-we-do` | `#what-we-do` | **PASS** | Smooth scrolls to Pillars section |
| §3.1 Homepage Hero CTA 2 | "Work With MindGame Africa" | "Work With MindGame Africa" | `/partner-with-us` | `/partner-with-us` | **PASS** | Routes to Partner With Us |
| §3.2 Pillar 1: Applied Performance Practice | "Learn More" | "Learn More" | `/performance-services/applied-performance-practice` | `/performance-services/applied-performance-practice` | **PASS** | Dedicated subpage |
| §3.2 Pillar 2: Performance Science | "Learn More" | "Learn More" | `/research/performance-science` | `/research/performance-science` | **PASS** | Dedicated subpage |
| §3.2 Pillar 3: Research & Knowledge | "Learn More" | "Learn More" | `/research` | `/research` | **PASS** | Main Research page |
| §3.2 Pillar 4: Education & Professional Dev | "Learn More" | "Learn More" | `/education` | `/education` | **PASS** | Main Education page |
| §3.2 Pillar 5: Practitioner Development | "Learn More" | "Learn More" | `/opportunities` (or `/education#practitioner`) | `/education` | **FAIL** | Routes to general `/education`; card description hijacked with §10 copy |
| §3.8 Homepage Closing CTA | "Start the Right Conversation With MindGame Africa" | "Start the Right Conversation With MindGame Africa" | `/partner-with-us` | `/partner-with-us` | **PASS** | Routes to partnership conversation |
| §5.4 Performance Services CTA | "Start With a Performance Inquiry" | "Start With a Performance Inquiry" | `/partner-with-us` | `/partner-with-us` | **PASS** | Routes to intake form |
| §6.6 Applied Performance Practice CTA | "Start a Performance Conversation" | "Start a Performance Conversation" | `/partner-with-us` | `/partner-with-us` | **PASS** | Routes to intake form |
| §7.5 Performance Science CTA | "Explore Collaboration With MindGame Africa" | "Explore Collaboration With MindGame Africa" | `/partner-with-us` | `/partner-with-us` | **PASS** | Routes to intake form |
| §8.5 Research CTA | "Start a Research Conversation" | "Start a Research Conversation" | `/partner-with-us` | `/partner-with-us` | **PASS** | Routes to intake form |
| §9.7 Education CTA | "Discuss Education and Professional Development" | "Discuss Education and Professional Development" | `/partner-with-us` | `/partner-with-us` | **PASS** | Routes to intake form |
| §13.2 Route 1: Performance Engagements | Interactive CTA button | *None* | Pre-select form option 1 | Passive card, no link | **FAIL** | Route cards lack actionable CTA buttons and URL parameter state pre-selection |
| §13.2 Route 2: Research and Evaluation | Interactive CTA button | *None* | Pre-select form option 2 | Passive card, no link | **FAIL** | Route cards lack actionable CTA buttons and URL parameter state pre-selection |
| §13.2 Route 3: University & Academic Collab | Interactive CTA button | *None* | Pre-select form option 3 | Passive card, no link | **FAIL** | Route cards lack actionable CTA buttons and URL parameter state pre-selection |
| §13.2 Route 4: Professional Education | Interactive CTA button | *None* | Pre-select form option 4 | Passive card, no link | **FAIL** | Route cards lack actionable CTA buttons and URL parameter state pre-selection |
| §13.2 Route 5: Practitioner & Faculty Collab | Interactive CTA button | *None* | Pre-select form option 5 | Passive card, no link | **FAIL** | Route cards lack actionable CTA buttons and URL parameter state pre-selection |
| §13.2 Route 6: Institutional & Int'l Partn. | Interactive CTA button | *None* | Pre-select form option 6 | Passive card, no link | **FAIL** | Route cards lack actionable CTA buttons and URL parameter state pre-selection |

---

## G. Structural gaps

| Architecture Component | Status | Codebase Reality & Audit Finding |
|---|---|---|
| `app/api/` directory and API route handlers | **MISSING** | The entire `app/api` directory does not exist. There are no server-side API endpoints in the project. |
| Backend for `ContactForm`, `PartnerForm`, `OpportunityInterestForm`, `MailingSignup` | **PARTIAL** | All four forms perform client-side `fetch()` requests directly to hardcoded external Formspree endpoints (`mvkoldel`, `mzeboyqg`, `mgaedrbn`, `meaqnvwz`). There is no internal API proxy, server-side sanitisation, error logging, or fallback dispatch. |
| Validation schemas (`lib/validations.ts`) | **MISSING** | No Zod, Yup, or central validation schema file exists. Forms rely exclusively on fragile, ad-hoc client-side `useState` string checks. |
| Email dispatch layer | **MISSING** | No internal mailer, Resend/SendGrid/SMTP integration, or templating layer exists. Submissions depend 100% on third-party Formspree mailers. |
| Submission storage / persistence | **MISSING** | No database, KV store, JSON log, or persistence layer exists. Form submissions are transient client POSTs to Formspree with zero local or server-side retention. |
| Privacy Policy page (`/privacy`) | **MISSING** | `Footer.tsx` contains `<Link href="#">Privacy</Link>` with an inline `TODO`. No `app/(marketing)/privacy/page.tsx` route exists. |
| Terms of Use page (`/terms`) | **MISSING** | `Footer.tsx` contains `<Link href="#">Terms</Link>` with an inline `TODO`. No `app/(marketing)/terms/page.tsx` route exists. |
| `app/sitemap.ts` | **MISSING** | No dynamic sitemap generation exists. The site lacks an XML sitemap. |
| `public/robots.txt` / `app/robots.ts` | **MISSING** | Neither `public/robots.txt` nor `app/robots.ts` exists in the repository. |
| Per-page metadata exports | **MISSING** | Every single marketing page (`about`, `contact`, `education`, `insights`, `opportunities`, `partner-with-us`, `people`, `performance-services`, `applied-performance-practice`, `research`, `performance-science`, `page.tsx`) begins with `"use client";`. As Client Components, none export `metadata` or `generateMetadata`. Only the root `app/layout.tsx` exports a generic title/description. |
| Analytics & Event Tracking | **MISSING** | No Google Analytics, Plausible, PostHog, or custom event tracking helper exists in `lib/` or root layouts. |
| Centralized Content Layer | **MISSING** | `lib/` contains solely `tokens.ts`. User-facing copy is hardcoded inline within JSX components across the codebase. |
| People profile detail route (`people/[slug]`) | **MISSING** | No dynamic route exists for individual leadership or practitioner profiles. |
| Insights article data model & detail route (`insights/[slug]`) | **MISSING** | No data model for articles, categories, reading time, or dynamic article routes exists. |
| Research outputs data model | **MISSING** | No formal research publication data structure exists in `lib/` or CMS. |
| Programme data model per §9.8 | **MISSING** | No structured schema or type definitions for certificate programmes, entry requirements, learning outcomes, or syllabus modules exist. |
| Hidden case-study model per §21.1 | **MISSING** | No hidden schema or type definitions for future performance case studies exist. |
| CMS collections per §20.1 | **MISSING** | No collections schema or content management interface exists. |
| Opportunities navigation & form compliance | **PRESENT** | Confirmed: Opportunities is removed from primary navigation per conflict C1 (present in footer). Confirmed: No unapproved employment/internship application form exists; the page provides only an interest mailing signup per §10. |

---

## H. Visual and density audit

### 1. Public Assets Audit

| Asset Path | Dimensions | File Size | References in Codebase | Compliance Status |
|---|---|---|---|---|
| `public/images/hero-bg.jpg` | 1376 × 768 px | 617,767 bytes | `components/sections/Hero.tsx` | **VALID** (Referenced via `<Image />` and CSS background) |
| `public/file.svg` | N/A (SVG) | 391 bytes | *None* | **FLAGGED** (Unreferenced default Next.js boilerplate) |
| `public/globe.svg` | N/A (SVG) | 1,035 bytes | *None* | **FLAGGED** (Unreferenced default Next.js boilerplate) |
| `public/next.svg` | N/A (SVG) | 1,375 bytes | *None* | **FLAGGED** (Unreferenced default Next.js boilerplate) |
| `public/vercel.svg` | N/A (SVG) | 128 bytes | *None* | **FLAGGED** (Unreferenced default Next.js boilerplate) |
| `public/window.svg` | N/A (SVG) | 385 bytes | *None* | **FLAGGED** (Unreferenced default Next.js boilerplate) |

### 2. Page Density & Typography Run Audit

| Page Route | Images Rendered | next/image Used | Images Lacking Alt | Total Word Count | Longest Consecutive `<p>` Run | Longest Single Text Block |
|---|---|---|---|---|---|---|
| `/` (Homepage) | 2 (1 img + 1 css) | **Yes** | 0 | ~181 | 2 | 32 words |
| `/about` | **0** | **No** | 0 | ~383 | 4 | 54 words |
| `/performance-services` | **0** | **No** | 0 | ~85 | 2 | 29 words |
| `/performance-services/applied-performance-practice` | **0** | **No** | 0 | ~225 | 2 | 58 words |
| `/research` | **0** | **No** | 0 | ~215 | 3 | 43 words |
| `/research/performance-science` | **0** | **No** | 0 | ~168 | 2 | 51 words |
| `/education` | **0** | **No** | 0 | ~186 | 2 | 49 words |
| `/insights` | **0** | **No** | 0 | ~116 | 3 | 23 words |
| `/people` | **0** | **No** | 0 | ~82 | 3 | 28 words |
| `/partner-with-us` | **0** | **No** | 0 | ~417 | 8 (form fields) | 24 words |
| `/contact` | **0** | **No** | 0 | ~315 | 7 (cards/form) | 24 words |
| `/opportunities` | **0** | **No** | 0 | ~207 | 4 | 37 words |

### 3. §19 Visual Density Rule Violations

- **Total Absence of Photography Across the Site (Severe Violation of §19 & Amendment A4):**
  - Out of 12 distinct routes, **11 routes render ZERO images**.
  - Out of 44 major content sections across the application, **43 sections contain no image**.
  - SOT §19 and Amendment A4 explicitly mandate: *"The site must not be text-heavy. Photography is a primary structural element, not decoration. Every major section carries an image per §17, so no section is text-only."*
- **Missing Founder Portrait:**
  - Neither `PeoplePreview.tsx` nor `app/(marketing)/people/page.tsx` renders a portrait photograph of Founder Dr. Joshua A. Oparachukwu (rendering only initials `"JO"` in a CSS circle). Violates §12.2 and §12.3 specifications for professional photography.
- **Buried Defining Philosophy (`about/page.tsx:88-94`):**
  - The defining institutional idea from §4.3 (*"Performance is not one thing..."*) is buried as a standard paragraph inside a nested text card rather than receiving pull-quote or dedicated visual band prominence.
- **Consecutive Paragraph Stacking:**
  - `about/page.tsx` lines 63–95 present 4 consecutive stacked text blocks without visual relief or imagery.
- **Multi-Step Process Representation:**
  - Multi-step processes on `/performance-services` (§5.3), `/performance-services/applied-performance-practice` (§6.3), and `/about` (§4.6) are rendered as disconnected grid cards rather than cohesive, numbered visual flows.

### 4. `next/image` and Accessibility Audit
- **`next/image` adoption:** Used exclusively in `components/sections/Hero.tsx`. Completely absent from all other 11 page components.
- **Alt text compliance:** The single image in `Hero.tsx` includes descriptive alt text (`"MindGame Africa — Performance Science, Research & Education"`). Zero missing alt attributes detected on existing image tags.

---

## I. Conflict resolution check

Evaluation of current codebase alignment with SOT §0.2 conflicts C1–C8:

| Conflict | Topic | Codebase Alignment | Assessment & Findings |
|---|---|---|---|
| **C1** | Primary navigation | **Matches AUTHORITATIVE** | Primary navigation in `components/layout/Nav.tsx` contains exactly the 8 authoritative items (About, Performance Services, Research, Education, Insights, People, Contact, Partner With Us). Opportunities is removed from top nav and placed in `Footer.tsx`. |
| **C2** | Homepage "What We Do" heading | **Matches AUTHORITATIVE** | `components/sections/Pillars.tsx:92` renders `"How MindGame Africa Works Across Performance"` verbatim, correctly replacing the legacy heading. |
| **C3** | Homepage "Who We Work With" heading | **Matches AUTHORITATIVE** | `components/sections/WhoWeWorkWith.tsx:67` renders `"Who MindGame Africa Is Built to Work With"` verbatim, correctly replacing the legacy heading. |
| **C4** | Homepage Who We Work With supporting line | **Matches AUTHORITATIVE** | `components/sections/WhoWeWorkWith.tsx:71-74` renders `"We work across individual, team and performance environment levels, connecting evidence with the realities of training, competition, coaching and professional practice."` verbatim. |
| **C5** | Nav label for education | **Matches AUTHORITATIVE** | `Nav.tsx:11` uses `"Education"` for the navigation link, while `education/page.tsx:57` retains the full title `"Education and Professional Development"`. |
| **C6** | Featured homepage section | **Matches AUTHORITATIVE** | `components/sections/CurrentFocus.tsx:27` uses `"Current Focus"` rather than "Case Studies" or "Featured Work". |
| **C7** | Individual service pages | **Matches AUTHORITATIVE** | Codebase builds full subpages only for `Applied Performance Practice` (`/performance-services/applied-performance-practice`) and `Performance Science` (`/research/performance-science`). The 5 core service offerings live as a structured block on `/performance-services`. |
| **C8** | Contact details & disclosures | **Matches NEITHER** | SOT Amendment A1 and §16 explicitly mandate publishing **no** email, phone, or location. The codebase violates this by publishing an unconfirmed email (`info@mindgameafrica.com`) and an invented location (`"Pan-African Network & Digital Operations"`) in `app/(marketing)/contact/page.tsx:9-11`. |

---

## Executive Summary: The Three Largest Gaps

The three largest gaps in the repository are:

1. **Complete Absence of Interface Photography (Visual & Density Deficit):**  
   Despite strict client mandates in Amendment A4, §17, and §19 establishing documentary photography as a core structural element, 11 of 12 page routes and 43 of 44 content sections have zero images, no founder portrait is rendered, and Next.js Image is unused across all secondary pages, leaving the site as a text-heavy prototype.

2. **Prohibited Contact Disclosures & Unapproved Content Drift:**  
   Directly violating Amendment A1 and Conflict C8, `app/(marketing)/contact/page.tsx` publishes an unsupplied email (`info@mindgameafrica.com`) and invents a fictional physical/operational location (`"Pan-African Network & Digital Operations"`), while `people/page.tsx` introduces forbidden SportLead Africa governance language and `about/page.tsx` appends fabricated sentences to core philosophy.

3. **Complete Absence of Application Architecture, Persistence, and SEO Foundations:**  
   The application completely lacks an `app/api/` backend layer, validation schemas (`lib/validations`), local persistence, or an email dispatch pipeline (relying solely on client-side fetch calls to external Formspree URLs). Furthermore, because every marketing route is forced into a `"use client"` component, zero per-page SEO metadata exports exist, and the site lacks XML sitemaps, `robots.txt`, privacy policy, and terms of use pages.
