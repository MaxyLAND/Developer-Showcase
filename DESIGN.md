---
name: MaxyLAND
description: Friendly editor scene for a solo game and web developer's portfolio.
colors:
  bg: "#0d1215"
  stage: "#0f161a"
  panel: "#141b1f"
  panel-2: "#1a2327"
  panel-3: "#212c31"
  line: "#243036"
  line-2: "#2f3d44"
  grid: "rgb(150 214 206 / 0.055)"
  text: "#e9f0ef"
  text-2: "#aab9ba"
  text-3: "#7f9194"
  cyan: "#23ebe9"
  green: "#67d45f"
  yellow: "#ebfa56"
  on-action: "#04201d"
  cyan-tint: "rgb(35 235 233 / 0.12)"
  cyan-tint-2: "rgb(35 235 233 / 0.2)"
typography:
  display:
    fontFamily: "Bakbak One, Onest Variable, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.8vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0"
  headline:
    fontFamily: "Bakbak One, Onest Variable, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.5rem + 2.6vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0"
  title:
    fontFamily: "Bakbak One, Onest Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.08
  body:
    fontFamily: "Onest Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Onest Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Onest Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.2
  action:
    fontFamily: "Onest Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  chip: "6px"
  card: "12px"
  panel: "18px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
  section: "clamp(4.5rem, 3rem + 6vw, 8rem)"
  page: "76rem"
components:
  # Primary fill is the action gradient (see sidecar); textColor is normative.
  pill-primary:
    textColor: "{colors.on-action}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0 1.25em"
    height: "2.875rem"
  pill-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cyan}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0 1.25em"
    height: "2.875rem"
  pill-secondary-hover:
    backgroundColor: "{colors.cyan-tint}"
    textColor: "{colors.cyan}"
  pill-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cyan}"
    rounded: "{rounded.pill}"
    padding: "0 0.95em"
    height: "2.5rem"
  pill-ghost-hover:
    backgroundColor: "{colors.cyan-tint}"
  pill-ghost-current:
    backgroundColor: "{colors.cyan-tint-2}"
    textColor: "{colors.cyan}"
  pill-icon:
    rounded: "{rounded.pill}"
    padding: "0"
    width: "2.875rem"
    height: "2.875rem"
  panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
  inset-list:
    backgroundColor: "{colors.panel-2}"
    rounded: "{rounded.card}"
    padding: "0.6rem 0.9rem"
  chip:
    backgroundColor: "{colors.panel-3}"
    textColor: "{colors.text-2}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "0.3em 0.6em"
---

# Design System: MaxyLAND

## Overview

**Creative North Star: "The Friendly Editor Scene"**

The site is drawn as a game editor you can play in: a toolbar across the top, full-bleed scene stages with a faint grid, and inspector panels that describe the selected object. The editor is only the structure. It is drawn friendly rather than technical: soft rounded panels, a warm display face, generous space, and no IDE costume (no monospace, no line numbers, no fake code).

Everything on screen belongs to one of two layers that never mix. The decoration layer is quiet, monochrome teal-grey and rectangular; it frames and describes, and it never looks pressable. The interaction layer is pills in the brand cyan to green; if it is cyan, it can be pressed. The logo's white shine is the active light of the interaction layer, and the logo's letter-by-letter entrance is the way display titles arrive.

The brand is fixed ground. The hexagon mark (an M and an L piece), its 53° cyan-green-yellow gradient and its intro sequence are preserved exactly; everything else in the palette is derived from them and kept dark and simple so the work (game art, screenshots, gameplay) carries the colour.

**Key Characteristics:**
- Teal-black ground tinted toward the logo; surfaces step up in small tonal increments with 1px hairlines.
- Two layers: rectangular monochrome decoration, pill-shaped cyan interaction.
- Brand gradient reserved for the mark, the wordmark letter ramp and primary actions.
- Bakbak One for display, Onest Variable for everything else.
- Scene stages with a 48px grid and exactly one 53° cut each.
- Motion on two curves: a fast ease-out for arrivals, an ease-in-out for sweeps and slides.

## Colors

A dark, near-monochrome teal-black scene with a single brand voice: cyan leaning into green, and yellow held back as a spark.

### Primary
- **Hexagon Cyan** (cyan): the colour of interaction. Secondary pill text and ring, ghost tab text, inline prose links, footer links, caret and form accent. The start of every brand and action gradient.
- **Cyan Tint** (cyan-tint): hover fill of secondary and ghost pills and of the language switch link.
- **Cyan Tint Strong** (cyan-tint-2): the current state. The active section tab and the current language wear it; nothing else does.

### Secondary
- **Island Green** (green): the far stop of the action gradient and the middle stop of the brand gradient. It is never used on its own as a flat fill or text colour.

### Tertiary
- **Spark Yellow** (yellow): the keyboard focus ring (2px solid, 3px offset) and the last 4% of the brand gradient. It never fills a control or colours text.

### Neutral
- **Teal-Black Ground** (bg): page background, toolbar backing at 94% opacity, browser theme colour.
- **Stage Floor** (stage): background of scene stages, under the grid; also fills the selection handles.
- **Panel** (panel): inspector, spotlight, contact and details panels.
- **Panel Raised** (panel-2): inset lists inside panels (property rows, email rows), media wells behind images.
- **Panel Top** (panel-3): chips and the copy toast.
- **Hairline** (line): panel borders, toolbar bottom edge, row dividers, fact-list rules.
- **Hairline Strong** (line-2): the selection outline, dashed empty slots, language switch ring, toast border, scrollbar thumb.
- **Scene Grid** (grid): the 1px grid lines on stages only.
- **Paper White** (text): headings and primary values.
- **Mist** (text-2): body copy, summaries, chip text.
- **Slate** (text-3): labels, property keys, footer text, empty-slot glyphs.
- **Deep Lagoon** (on-action): text and icons on the gradient-filled primary pill.

### Brand gradients
- **Brand gradient** (`linear-gradient(53deg, #23ebe9 26%, #67d45f 70%, #ebfa56 96%)`): the hexagon mark only, in both the animated lockup and the static toolbar and footer mark.
- **Action gradient** (`linear-gradient(53deg, #23ebe9 8%, #67d45f 92%)`): the fill of every primary pill. It drops the yellow so the action reads as one confident cyan-green.
- **Wordmark letter ramp**: MAXYLAND is set one colour per letter, cyan to pale green to pale yellow (#3fefeb, #87fbf4, #a3fff4, #b4ffd4, #beffc2, #caffb7, #f0fe9a, #fcfc89), taken from the original wordmark.

### Named Rules
**The Everything Cyan Can Be Pressed Rule.** Cyan, the cyan tints and the action gradient appear only on things that respond to a pointer or key. Decoration borrows none of them; the single exception is the hero's 7% cyan radial lift behind the mark, which is ambient light, not an edge or a fill.

**The Gradient Is The Logo Rule.** The three-stop 53° gradient belongs to the mark and the wordmark ramp; actions get the two-stop action gradient. Never put either gradient on text blocks, backgrounds, borders or decoration.

**The Yellow Spark Rule.** Yellow is focus and the last glint of the logo. It never becomes a fill, a badge or a highlight colour.

## Typography

**Display Font:** Bakbak One (with Onest Variable, system-ui)
**Body Font:** Onest Variable (with system-ui, -apple-system, Segoe UI)

**Character:** Bakbak One is the wordmark's own face: chunky, rounded, friendly, single weight. Onest is a clean, slightly warm grotesk that stays out of its way.

### Hierarchy
- **Display** (400, step 4 fluid 2.5rem to 4.5rem, line-height 0.95): project titles in the spotlight, assembled letter by letter.
- **Headline** (400, step 3 fluid 2.125rem to 3.5rem, 1.02): section titles (Projects, Tools, Contact).
- **Title** (400, step 2 fluid 1.5rem to 2rem, 1.08): inspector heading, tool titles, project page tagline.
- **Body** (Onest 400, 1.0625rem, 1.6): all running text; summaries capped at 42 to 58ch, prose uses `text-wrap: pretty`.
- **Lead** (Onest 400, 1.25rem, 1.5): the contact introduction.
- **Label** (Onest 400, 0.875rem): property keys, fact labels, email labels, footer; sentence case in Slate. The profiles heading uses the same size at 600.
- **Action** (Onest 600, 1rem, line-height 1): pill labels; ghost tabs drop to 500.

Headings are always weight 400, letter-spacing 0 and `text-wrap: balance`. Numbers in facts and counts use tabular figures. The lockup's slogan is the only uppercase text on the site; it is part of the brand asset.

### Named Rules
**The One Display Face Rule.** Bakbak One sets the wordmark, headings and the project tagline. It never sets labels, body, buttons or data.

**The Sentence Case Rule.** Labels are sentence case at label size in Slate. No uppercase tracked labels outside the lockup.

## Layout

The page is a stack of full-bleed bands on the ground colour, with content held in a centred column of `min(100% - 2 × gutter, 76rem)`. Vertical rhythm between sections is the fluid section step (4.5rem to 8rem).

**Stages.** The hero, the contact section and each project page header are scene stages: the Stage Floor colour with a 48px grid of 1px Scene Grid lines anchored at the top centre. Content sections between stages sit on plain ground with no grid. Every stage ends in one 53° diagonal cut (see Shapes).

**Toolbar.** Sticky, 4rem tall, three columns: mark and name left, section tabs centred, language switch right. Below 48rem the tabs drop to their own full-width row, spaced evenly, and scroll horizontally with an edge fade only when they overflow.

**Hero.** Two columns: the lockup in a flexible column left of centre and the inspector panel in a 20 to 25rem column. Below 56rem it stacks: lockup (max 24rem) on top, inspector below.

**Spotlight.** A two-column panel, media 6fr and info 5fr, collapsing to a single column with 16:9 media below 64rem.

**Contact.** Intro 5fr, panel 7fr; single column below 56rem. Below 30rem each email row wraps its actions to a full-width line.

**Project page.** Header stage (back tab, wide art, logo overlapping the art, tagline and actions), then main prose column plus a 16 to 22rem details panel.

Panel padding is fluid, roughly 1.25rem to 2.5rem; gaps inside panels sit around 1 to 1.25rem; action rows wrap with a 0.75rem gap.

## Elevation & Depth

Depth is a hybrid of tonal layering and one soft, tinted, offset shadow. Surfaces climb from ground to stage to panel to panel-2 to panel-3 in small steps; panels also carry a 1px hairline and the panel shadow so they sit on the stage like windows in an editor. There is no glow: the only light effects are the shine sweep and the hero's faint radial lift.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 18px 40px -18px rgb(0 8 10 / 0.7), 0 2px 6px -2px rgb(0 8 10 / 0.5)`): every panel, the project header art, the lightbox, the toast. The empty tools panel drops it so an empty state stays flat.
- **Floating control** (`box-shadow: 0 8px 24px -8px rgb(0 8 10 / 0.8)`): a pill that sits over media, such as the spotlight's play pill.
- **Cut-out logo** (`filter: drop-shadow(0 12px 18px rgb(0 8 10 / 0.55))`): a transparent game logo overlapping header art.

### Named Rules
**The Tinted Shadow Rule.** Shadows are tinted toward the ground (rgb 0 8 10), offset downward and soft. Never neutral black, never hard offset, never coloured glow.

## Shapes

**Rectangles are surfaces, pills are actions.** Decoration uses a three-step radius scale: panels 18px, cards, inset lists, media and slots 12px, chips and the brand link focus shape 6px. Every interactive control is a full pill (999px). A rectangle never gets a pill radius and a control never gets a rectangular one; the exceptions are media thumbnails, which stay 12px rectangles and announce that they open by carrying a pill on their corner.

**The 53° cut.** Each stage ends in exactly one diagonal cut across its bottom-right corner, at the angle of the brand gradient: the corner is clipped by a polygon whose horizontal leg is 0.7536 times its vertical leg. The cut depth is `clamp(2.5rem, 5vw, 5rem)` on shipped stages. One per stage, always bottom-right, never on panels.

**Selection outline.** The lockup in the hero is framed as the selected object: a 1px Hairline Strong rectangle, extended 1.25rem above and below the lockup, with four 7px square handles (stage fill, Slate border) on its corners. It is square, monochrome and pointer-transparent: scenery, never a control.

**Empty slots.** Placeholders are 4:3, 12px-radius rectangles with a 1px dashed Hairline Strong border, a faint -37° hatch, and a Slate icon and label. They are visibly empty and never pressable.

## Components

### Buttons (pills)
The friendly, confident interaction layer: every pill has the same anatomy and lights up with the logo's shine.
- **Shape:** full pill (999px), 46px tall (2.875rem), 0 1.25em padding, Onest 600 at 1rem, 0.55em icon gap, 1px border (transparent unless stated).
- **Primary:** action gradient fill with Deep Lagoon text. One or two per view, for the main destination (view the project, write an email, play gameplay, close the lightbox, skip link).
- **Secondary:** transparent with a 1px cyan ring at 55% and cyan text; hover fills with Cyan Tint and firms the ring to full cyan. Used for store links, profiles, copy, carousel arrows and "Contact".
- **Ghost:** 40px tall, 0 0.95em padding, weight 500, cyan text, no ring and no shine; hover Cyan Tint. Used for section tabs and the project page's back link.
- **Current:** a ghost pill with `aria-current` wears Cyan Tint Strong. The current language item wears the same tint.
- **Icon:** any variant made square at its height with zero padding.
- **Shine:** on hover, a white band (32 to 45% opacity, 105°) sweeps across the pill in 650ms on the ease-in-out curve; on secondary pills the band is cyan at 16 to 24%. Hover effects only apply on hover-capable fine pointers.
- **Press:** scale to 0.97 in 160ms on the ease-out curve.
- **Focus:** 2px Spark Yellow outline, 3px offset, on every focusable element.
- **Reduced motion:** no shine transition and no press scale.

### Language switch
A 1px Hairline Strong pill ring with 3px inset holding two 34px-tall pill items (EN, ES) in cyan 600 at 0.875rem. The current item is Cyan Tint Strong; the other is a link with Cyan Tint hover and a 0.95 press scale. The choice is remembered in a cookie.

### Chips
- **Style:** Panel Top fill, Mist text, 6px radius, label size. Decoration only (status of a tool); a chip is never clickable and never cyan.

### Cards / Containers
- **Corner Style:** panels 18px; inset lists and media 12px.
- **Background:** Panel, with Panel Raised for inset lists and media wells.
- **Shadow Strategy:** the Panel shadow (see Elevation & Depth); none on empty states.
- **Border:** 1px Hairline; rows inside inset lists are divided by 1px Hairline.
- **Internal Padding:** fluid, about 1.25rem to 2.5rem.

### Inspector panel
The hero's describing panel: a Title-size Bakbak heading, a two-sentence Mist intro capped at 42ch, a property table (inset list of key/value rows, keys in Slate at 7.5rem, values in Paper White at 0.9375rem), then one primary and one secondary pill.

### Navigation
Sticky toolbar on 94% Teal-Black Ground with a Hairline bottom edge. Left: 30px static mark plus "MaxyLAND" in Bakbak One at 1.25rem, linking home (the one interactive element that is neither a pill nor cyan; it is the brand). Centre: ghost pill tabs, with the section in view marked current by a scroll spy. Right: the language switch. Mobile: tabs on a second row as described in Layout.

### Logo intro (signature)
The binding brand moment, rendered as the hero's h1. Timeline on first view: the L piece (150ms) and M piece (260ms) scale in from 0.78 over 520ms; a white shine band sweeps across the mark from 700ms over 850ms; from 1000ms the mark slides from centre to its lockup position over 720ms; from 1420ms the letters of MAXYLAND emerge one every 55ms (520ms each, sliding in from 0.3em with a 6px blur fade); the slogan rises at 1880ms. The hero then settles (2000ms), the toolbar enters (2050ms), the inspector (2200ms) and the selection outline (2250ms) arrive. Ease-out for arrivals, ease-in-out for the shine, slide and hold.
- **Once per session:** a head script sets `intro-seen` on the root after the first play (sessionStorage), and every page without the intro starts with it; `intro-seen` renders the settled lockup, toolbar and inspector with no animation and hides the shine.
- **Reduced motion:** pieces, letters and slogan simply fade (320ms, staggered 80 to 320ms); no slide, no shine; toolbar and inspector fade.
- **Layout:** the lockup is a container-query component: stacked (mark over wordmark) when narrow, mark left of wordmark with the slogan tucked under from 34rem of container width.

### Letter-assembly titles
Display titles below the fold assemble the way MAXYLAND does: each character slides in from -0.3em with a 6px blur fade, 520ms on ease-out, 45ms apart, the first time the title scrolls into view. Titles already on screen at load, and all titles under reduced motion, are left static; the hidden state only exists once the script arms it, so text is readable without JavaScript.

### Project spotlight (signature)
A compact, playable panel per game on the home page: media left (cover image, with gameplay video that plays in place from a primary "Watch gameplay" pill over the media), info right (assembled Display title, summary, a two to three item fact list between Hairline rules, then a primary pill to the project page and secondary pills to the stores). On hover the logo's shine crosses the whole media at 63° in 900ms, at 12 to 22% white; disabled under reduced motion.

### Screenshot thumbnails and lightbox
Thumbnails are 12px rectangles with a Hairline border and a secondary icon pill (expand) on the bottom-right corner, over a 78% ground backing. Hover firms the border and pill ring to cyan and scales the image to 1.03; press scales the thumbnail to 0.985. They open a lightbox with secondary icon pills for previous and next and a primary close pill.

### Adding a project
One YAML file in `src/content/projects/` (title, kind of game, tool or web, status, order, bilingual tagline, summary and body, facts, links, cover and alt, optional logo, screenshots, video, trailer, credits, press). Games and web projects become spotlights and project pages; tools fill the tools grid and replace the empty slots. No page is redesigned to add one.

## Do's and Don'ts

### Do:
- **Do** make every pressable thing a pill in the interaction layer (primary gradient, secondary 1px cyan ring, ghost for tabs), and mark the current item with Cyan Tint Strong.
- **Do** keep decoration rectangular and monochrome: panels 18px, cards 12px, chips 6px, hairline borders, Slate and Mist text.
- **Do** give primary and secondary pills the shine sweep on hover (650ms, ease-in-out); give every pill the 0.97 press scale and the yellow 2px focus ring at 3px offset.
- **Do** use `cubic-bezier(0.23, 1, 0.32, 1)` for arrivals and presses and `cubic-bezier(0.77, 0, 0.175, 1)` for sweeps and slides.
- **Do** end each scene stage with exactly one bottom-right 53° cut and keep the grid on stages only.
- **Do** honour `prefers-reduced-motion` and `intro-seen` for every entrance animation: fade or render settled.
- **Do** let game art and screenshots carry the colour; the interface stays teal-grey.

### Don't:
- **Don't** use cyan, the tints or either gradient on anything that cannot be pressed.
- **Don't** make decoration look pressable: no pill radius, no cyan ring, no hover state on panels, chips, slots or the selection outline.
- **Don't** use the brand gradient on text, backgrounds or borders; it is the mark and the wordmark ramp only.
- **Don't** use yellow as a fill, text colour or badge.
- **Don't** add a second cut to a stage, or a cut to a panel.
- **Don't** add glows, neon edges or neutral black shadows; shadows are tinted, soft and offset.
- **Don't** set labels in uppercase tracking or place small labels above headings.
- **Don't** replay the logo intro on navigation within a session, or let it block reading.
