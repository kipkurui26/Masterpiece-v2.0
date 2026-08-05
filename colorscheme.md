# Color Scheme Documentation

## Brand Colors

### Navy

- **Hex:** `#1B1F5C`
- **Tailwind Variable:** `brand-navy`
- **Usage:**
  - Logo text
  - Headings
  - Active nav links
  - Primary buttons
  - Footer background
  - Dark section bands (ApproachSection, FinalCTA, AboutHero, WhoWeWorkWith, AboutStats)
  - Section backgrounds on About page (hero, Who We Work With)
  - Primary text on light sections

### Navy Hover

- **Hex:** `#141748`
- **Tailwind Variable:** `brand-navy-hover`
- **Usage:**
  - Hover state for navy buttons

### Teal

- **Hex:** `#0F9E9E`
- **Tailwind Variable:** `brand-teal`
- **Usage:**
  - Nav link default color
  - Links/CTAs e.g. "Learn More →"
  - Eyebrow/uppercase labels
  - CTA buttons on About page
  - Icon backgrounds
  - Accent borders
  - Checkmarks

### Teal Light

- **Hex:** `#5DD9D9`
- **Tailwind Variable:** `brand-teal-light`
- **Usage:**
  - Hero background tint (used at /20 opacity)
  - Footer headings
  - Resource-centre pill borders
  - Hover accents on dark backgrounds
  - Eyebrow/label text on navy backgrounds
  - Stat values
  - Hover states

## Gradients

### Final CTA About

- **From:** `#1B1F5C`
- **To:** `#0F9E9E`
- **Tailwind:** `bg-gradient-to-r from-[#1B1F5C] to-[#0F9E9E]`
- **Usage:** AboutFinalCTA — the one section that breaks the flat-background pattern for visual closure

## Neutral Colors

### White

- **Tailwind:** `white`
- **Usage:**
  - Navbar background
  - Card backgrounds
  - Text on navy/teal sections

### Gray 50

- **Tailwind:** `gray-50`
- **Usage:**
  - Alternating section backgrounds (ProjectJourney, FeaturedProjects, FAQ, OurPhilosophy, RecommendationApproach)

### Gray 100

- **Tailwind:** `gray-100`
- **Usage:**
  - Card borders
  - Hover backgrounds

### Gray 200

- **Tailwind:** `gray-200`
- **Usage:**
  - Card borders/dividers
  - Image placeholder backgrounds

### Gray 300

- **Tailwind:** `gray-300`
- **Usage:**
  - Footer body text
  - Legal bar
  - Body text on navy backgrounds

### Gray 400

- **Tailwind:** `gray-400`
- **Usage:**
  - Footer body text (secondary)

### Gray 600

- **Tailwind:** `gray-600`
- **Usage:**
  - Paragraph copy on light/white sections

### Gray 700

- **Tailwind:** `gray-700`
- **Usage:**
  - Paragraph copy on light sections (emphasis)

## Section Rhythm Pattern

Alternating background pattern used across Home and About to create separation without borders. Carry the same pattern into the Contact page.

### Pattern Sequence

1. **White Background**
   - Heading: navy (`#1B1F5C`)
   - Body: `gray-600`

2. **Gray 50 Background**
   - Heading: navy (`#1B1F5C`)
   - Body: `gray-600`
   - Note: Same text colors as white sections — background shift only, for rhythm between white sections

3. **Navy Background** (`#1B1F5C`)
   - Heading: `white`
   - Body: `gray-300`
   - Accent: teal-light (`#5DD9D9`) for labels/eyebrows/accents

4. **Gradient Background** (navy → teal: `#1B1F5C` to `#0F9E9E`)
   - Usage: Closing/final CTA sections only — breaks the flat-background pattern for visual closure
