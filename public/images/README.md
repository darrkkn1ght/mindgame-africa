# MindGame Africa — Image Asset System

This directory houses all photographic and graphical assets for MindGame Africa. In accordance with `docs/CONTENT_SOURCE_OF_TRUTH.md` §17 and §19, assets are strictly organized by their **subject brief**, never by how the image was acquired (generated, stock, or original photography).

---

## 1. Directory Structure

```text
public/images/
├── hero-bg.jpg                          # Cinematic global hero background
├── athlete-assessment/                 # Active assessment, testing, structured inquiry
├── practitioner-interaction/           # Professional interaction, listening, preparation
├── researchers-at-work/                # Research inquiry, field observation, data analysis
├── performance-data/                   # Screens, notes, metrics used in context
├── coaching-environments/              # Coaches giving feedback, observing, discussing
├── teaching-and-learning/              # Active seminar, discussion, applied demonstrations
├── team-sessions/                      # Team workshops, group interaction, review meetings
├── training-and-competition/           # Demanding competitive and training realities
├── observation-and-analysis/           # Match observation, video review, note taking
└── multidisciplinary-collaboration/    # Cross-discipline discussions around real questions
```

---

## 2. File Naming Convention

All image files must adhere to lowercase kebab-case naming:

```text
[page-or-subject]-[context-descriptor]-[aspect-ratio].[ext]
```

### Examples:
- `public/images/performance-data/home-focus-metrics-4x3.png`
- `public/images/observation-and-analysis/services-diagnostic-review-4x3.png`
- `public/images/training-and-competition/practice-preparation-4x3.png`
- `public/images/teaching-and-learning/education-seminar-interactive-4x3.png`

---

## 3. Photographic Direction (§17)

### Visual Philosophy:
- **Documentary & Intelligent:** Imagery depicts authentic sporting, clinical, academic, and field settings across Africa.
- **Natural Lighting & Authentic Work:** Show people observing, analysing, discussing, and reviewing.
- **Brand Palette Integration (§1.3):** Deep navy (`#0B1B3D`), cream/off-white (`#F8F9FA`), warm gold (`#D4AF37`), forest green (`#2D6A4F`).

### Hard Prohibitions (§17.4):
- No clenched fists or exaggerated victory celebrations as default vocabulary
- No trophy lifting
- No athletes screaming into the camera
- No generic gym photographs unconnected to page subject
- No people staring intensely into the distance
- No decorative brain graphics, lightning effects, or mental-toughness clichés
- No therapy clinic / hospital stock imagery
- No laboratory coats used for effect
- No abstract gradients as the sole visual vocabulary
- **Nothing implying a laboratory, facility, staff team, programme, or technical capability that does not exist**

---

## 4. Manifest Cross-Reference

Every image rendered in the interface is catalogued in:
- [`docs/image-manifest.md`](../docs/image-manifest.md)
- [`docs/image-downloads-checklist.md`](../docs/image-downloads-checklist.md) (for stock procurement)
