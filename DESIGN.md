---
name: Vietnam Procurement Control Ledger
description: A practical procurement proposal expressed as a ruled operating ledger rather than a generic applicant profile.
colors:
  ledger-paper: "#f2efe7"
  ledger-paper-deep: "#e7e1d4"
  control-ink: "#102522"
  control-ink-soft: "#40504d"
  control-ink-faint: "#687571"
  rule-line: "rgba(16, 37, 34, 0.18)"
  decision-orange: "#f05a32"
  decision-orange-hover: "#ff7049"
  decision-orange-deep: "#c84222"
  operations-teal: "#0c6d64"
  document-white: "#fffdf8"
  on-orange: "#210b05"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(46px, 5vw, 74px)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(38px, 4.5vw, 64px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "9px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.13em"
rounded:
  chip: "5px"
  compact-control: "7px"
  control: "8px"
  brand-mark: "13px 13px 3px 13px"
  node: "999px"
spacing:
  micro: "5px"
  tight: "8px"
  compact: "12px"
  standard: "16px"
  control-x: "20px"
  panel: "22px"
  card: "32px"
components:
  button-primary:
    backgroundColor: "{colors.decision-orange}"
    textColor: "{colors.on-orange}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.decision-orange-hover}"
    textColor: "{colors.on-orange}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.control-ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  print-control:
    backgroundColor: "rgba(255, 255, 255, 0.28)"
    textColor: "{colors.control-ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  chain-node:
    backgroundColor: "{colors.ledger-paper}"
    textColor: "{colors.control-ink}"
    rounded: "{rounded.node}"
    size: "70px"
  chain-node-active:
    backgroundColor: "{colors.control-ink}"
    textColor: "{colors.document-white}"
  process-chip:
    backgroundColor: "transparent"
    textColor: "{colors.control-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "5px 8px"
  ledger-sheet:
    backgroundColor: "{colors.document-white}"
    textColor: "{colors.control-ink}"
    padding: "22px"
  process-cell:
    backgroundColor: "transparent"
    textColor: "{colors.control-ink-soft}"
    padding: "32px"
    height: "270px"
  application-answer-row:
    backgroundColor: "transparent"
    textColor: "{colors.control-ink}"
    padding: "0 18px"
    height: "76px"
  application-answer-body:
    backgroundColor: "transparent"
    textColor: "{colors.control-ink-soft}"
    padding: "0 64px 30px 84px"
---

# Design System: Vietnam Procurement Control Ledger

## Overview

**Creative North Star: "Procurement Control Ledger"**

The proposal treats procurement as an operating system recorded in a working control ledger, not as an isolated spreadsheet or a generic applicant profile. Warm paper, warehouse-control ink, safety-orange decisions, ruled cells, and instrument labels make the page feel authored for purchasing work: practical, auditable, and implementation-led.

Editorial Newsreader headlines carry the proposal and evidence; Manrope handles the operational detail. The final distilled surface opens with the project-led declaration “A procurement system grounded in operational reality,” paired with an interactive Supplier → RFQ → PO → DC → KPI control sheet. That same grammar extends through short system cells, evidence registers, a dense dark builder console, phased delivery records, five ruled application-answer disclosures, and a print-safe document mode. Tighter section and closing rhythms reduce total page height without changing the ledger identity or evidence sequence.

**Key Characteristics:**

- Warm ledger-paper ground with warehouse-green control ink
- Safety orange reserved for decisions, progress, evidence, and conversion
- Editorial serif declarations paired with compact sans-serif instrument labels
- Ruled matrices and registers instead of detached marketing cards
- Interactive controls that remain complete as static content and in print
- Responsive reduction that keeps high-value process and console records in two columns on mobile

## Colors

The palette combines warm archival paper with dark green-black control surfaces, using orange as a decision signal and teal as an operational indexing color.

### Primary

- **Safety Decision Orange** (`#f05a32`): Primary actions, progress rails, evidence numbers, flow accents, and the closing conversion field.
- **Active Decision Tint** (`#ff7049`): The primary-button hover response only.
- **Deep Decision Orange** (`#c84222`): Emphasized editorial phrases, delivery indices, and lower-intensity decision signals on paper.

### Secondary

- **Operations Teal** (`#0c6d64`): Step codes, metadata, stage labels, and structural operational cues that should read clearly without competing with decisions.

### Neutral

- **Ledger Paper** (`#f2efe7`): The principal document ground and stage-node fill.
- **Deep Ledger Paper** (`#e7e1d4`): Alternating section ground and blueprint rail backing.
- **Warehouse Control Ink** (`#102522`): Primary text, dark evidence fields, active stage nodes, and closing controls.
- **Control Ink Soft** (`#40504d`): Explanatory body copy on paper.
- **Control Ink Faint** (`#687571`): Secondary labels, metadata, and low-priority candidate details.
- **Document White** (`#fffdf8`): The lifted control sheet and high-value text on dark fields.
- **Rule Line** (`rgba(16, 37, 34, 0.18)`): Ledger dividers, cell edges, control borders, and structural registers.
- **On-Orange Ink** (`#210b05`): High-contrast copy and control text on safety-orange fields.

### Named Rules

**The Decision Signal Rule.** Orange marks a choice, progress, verified scale, or the next action; it is never a general-purpose decoration.

**The Ledger Contrast Rule.** Paper and control-ink fields may alternate to establish chapters, but every field retains the same ruled, auditable visual language.

## Typography

**Display Font:** Newsreader (with Georgia and serif fallbacks)  
**Body Font:** Manrope (with Arial and sans-serif fallbacks)  
**Label Font:** Manrope (bold, tracked, and usually uppercase)

**Character:** Newsreader gives the proposal the authority of a signed operating document rather than a software landing page. Manrope keeps dense process evidence, controls, and implementation detail precise. Both families ship as local WOFF2 assets through Fontsource and Vite rather than remote font requests.

### Hierarchy

- **Display** (500, `clamp(46px, 5vw, 74px)`, 0.94): The compact, project-led “A procurement system grounded in operational reality” declaration; mobile uses a shorter `41px–58px` range.
- **Headline** (500, `clamp(38px, 4.5vw, 64px)`, 0.98): Section declarations and the closing proposition, deliberately capped below the hero.
- **Title** (600, `28px`, 1): Blueprint steps; delivery phases use `31px`, while evidence titles scale only where operating proof leads.
- **Body** (400, `16px`, 1.65): Proposal explanation and evidence, with dense cell copy stepping down to `12px–13px`.
- **Label** (700–800, `8px–11px`, `0.08em–0.14em`, uppercase): Version labels, step codes, system state, metadata, and control headings.

### Named Rules

**The Editorial-to-Instrument Rule.** Newsreader makes the argument; Manrope operates the system. Never set long process explanations in the display face or let micro-labels become the primary reading voice.

## Layout

The desktop shell is capped at `1440px` with `32px` viewport gutters through `min(1440px, calc(100vw - 64px))`. The header is a compact `72px` centered three-part register: identity left, proposal navigation center, and the print control right. The hero no longer forces a full viewport; it uses `48px–76px` vertical padding, a `1.05fr / 0.95fr` split, and a `40px–72px` gap so the thesis and rotated control sheet remain decisive without manufacturing empty height. Hero lead, action, and availability gaps resolve at `22px`, `26px`, and `22px`.

Sections use a tighter `64px–108px` vertical cadence, with `44px` between a section heading and its records. Reusable structures include a two-column section heading, a three-column process matrix of `270px` cells, a `1.2fr / 0.8fr` evidence register, a `0.75fr / 1.25fr` builder proof split, a three-column delivery ledger, and five native disclosure rows placed `52px` below that delivery ledger. The closing field contracts to `68px–124px` vertical padding. Shared borders and zero-gap grids preserve the connected-record reading while materially reducing total page height.

At `1100px`, the header navigation hides, the hero and builder proof become single-column, and the process matrix reduces to two columns. At `780px`, gutters narrow to `14px`, the hero uses `42px` vertical padding, the control chain becomes five rectangular stage buttons, and the process ledger deliberately remains two columns with `228px` cells and hidden output chips. The evidence register stacks but its supporting records compress to `165px`; the builder console keeps a two-column `108px` grid; delivery records stack at `215px`; and the closing field uses `58px` vertical padding. Application answers move to a single-column heading, `72px` summary rows, `12px` body type, and a `54px` left answer inset; the two estimate records stack from two columns to one. The save control becomes icon-only and the footer becomes a single-column record. Print mode removes navigation and interactive actions, flattens dark fields to white, expands every application answer even when its native disclosure is closed, and compacts the proposal into a legible document.

## Elevation & Depth

The system is flat by default. Depth comes first from paper tone, dark chapter fields, shared borders, inset rules, and the control sheet's slight `1.2deg` rotation. Only the hero ledger and builder console use the primary lift shadow; ordinary cells and registers stay flush.

### Shadow Vocabulary

- **Ledger Lift** (`0 22px 54px rgba(36, 39, 32, 0.13)`): Used only for the interactive procurement sheet and the private-system console, where a physical artifact must separate from the page.

### Named Rules

**The Register Before Elevation Rule.** Establish hierarchy with rules, tonal fields, and connected cells before adding shadow; only a discrete working artifact may lift off the ledger.

## Shapes

The dominant form is a squared register: process cells, evidence fields, consoles, delivery phases, and the control sheet itself use sharp corners and one-pixel rules. Small utility controls use restrained `7px–8px` corners, process chips use `5px`, and the identity mark uses a directional `13px 13px 3px 13px` silhouette. Circular nodes are reserved for the desktop procurement chain and collapse into compact rectangular controls on mobile.

**The Functional Radius Rule.** Curves identify controls, stage nodes, or the project mark; operating records remain square so their shared boundaries stay visible.

## Components

Components feel like purchasing controls and ledger entries: tactile enough to operate, restrained enough to audit.

### Buttons

- **Shape:** Compact control corners (`8px`), `50px` primary height, and `20px` horizontal padding; every interactive control preserves at least a `44px` target.
- **Primary:** Safety-orange fill with dark on-orange text and a matching border; hover shifts to the active tint and lifts `2px`.
- **Secondary:** Paper-transparent with a control-ink border; hover reverses to control ink with document-white text.
- **Print:** A `44px` translucent utility control with an inline stroke icon; it becomes an icon-only square below `780px` and disappears in print.
- **Focus:** A global `3px` orange outline offset by `4px` makes keyboard position explicit on paper and dark fields.

### Chips

- **Style:** Process deliverables use one-pixel rule borders, tight `5px` corners, `5px 8px` padding, and compact bold uppercase labels.
- **State:** Chips are informational outputs, not filters; interactive state belongs to the procurement chain.

### Cards / Containers

- **Corner Style:** Process, evidence, builder, and delivery records are square; only utility controls and the brand mark are rounded.
- **Background:** Cells alternate between ledger paper, lightly lifted white, deep ledger paper, and warehouse-control ink according to chapter.
- **Shadow Strategy:** Flat by default, following the Register Before Elevation Rule.
- **Border:** One-pixel rules connect adjacent records; zero-gap grids preserve continuity.
- **Internal Padding:** Compact controls use `14px–22px`; desktop process records use `26px`; lead evidence uses `32px–52px`; delivery records use `28px`.

### Navigation

Desktop navigation is a centered row of `12px` bold links with an orange-deep hover color. It hides below `1100px` rather than competing with the proposal and print control. Identity remains visible, and the semantic document order continues to provide the full route.

### Procurement Control Sheet

The signature first-viewport artifact is a document-white sheet with an inset rule, a light ledger shadow, and a slight rotation on wide screens. Five connected stage nodes—Supplier, RFQ, PO, DC, KPI—update a dark detail field containing a numbered stage label, editorial title, and concise operating description. The active node reverses to control ink; inactive nodes stay on paper. On mobile the circular chain becomes five equal rectangular buttons, connector rules disappear, and supporting node copy hides to preserve touch clarity.

### System Blueprint

Six `270px` desktop process cells share one ruled matrix and an orange progress rail. Each cell combines a teal step code, `28px` Newsreader title, concise explanation, and a bottom-aligned set of output chips. Alternating lifted cells add cadence without breaking the ledger. Mobile preserves a two-column ledger at `228px` per cell, shortens titles to `22px`, and hides chips so the system remains scannable without extending the page unnecessarily.

### Evidence Register

The evidence chapter reverses to warehouse-control ink. One compact `500px` lead record uses an oversized orange operating metric and a three-column definition list; three adjacent records use `24px–38px` padding for fulfillment, analytics, and high-volume proof. A ruled local-advantage register follows, separating direct evidence from transferable Vietnam procurement context. On mobile the lead becomes `510px`, supporting evidence compresses to `165px`, and local-advantage content stacks without abandoning its internal two-column list.

### Builder Console

The private-system proof uses a near-black operations console with compact `118px` paired capability records and an orange flow path from Discover to Operate. Mobile retains the two-column console at `108px` per record instead of expanding it into a long single-column list. It is the second and final elevated artifact, visually connecting the procurement proposal to demonstrated system-building practice.

### Delivery Ledger

Three `310px` desktop phases connect paid discovery, working foundation, and pilot handover in one ruled row. Each record uses a large Newsreader index, teal phase label, compact explanation, and bottom-aligned output. Mobile stacks the sequence but reduces each phase to `215px`, preserving the implementation path while controlling page length.

### Application Answers

Five native named `<details>` records sit directly beneath the delivery plan so the required application responses remain part of the same ledger rather than becoming a separate FAQ card stack. Every row is collapsed initially; the shared `name="application-answer"` gives the group native single-open behavior without custom JavaScript. Each `76px` summary uses a `48px / 1fr / 28px` grid for its Newsreader question index, `14px` bold question, and CSS-only plus/minus. Opening a row rotates the vertical stroke to horizontal and applies the same lightly lifted paper tone used on hover.

Answer bodies use a readable `96ch` maximum, `13px` Manrope text, and `0 64px 30px 84px` padding so copy aligns under the question rather than its index. The sourcing estimate is a ruled two-column record with `94px` minimum cells, `18px` padding, `21px` Newsreader material names, and compact bold timing lines. Below `780px`, summaries tighten to a `34px / 1fr / 22px` grid, answer padding becomes `0 12px 24px 54px`, body copy becomes `12px`, and the estimate stacks to one column with `82px` minimum cells. Print forces closed answer content to display and avoids splitting disclosure records across pages.

### Named Rules

**The Static Truth Rule.** Interaction may reveal stage detail or reading progress, but all claims, evidence, and delivery commitments must remain understandable without motion and printable without dark-background dependence.

**The Native Disclosure Rule.** Application answers use named HTML disclosure elements for one-open-at-a-time behavior; do not replace their native keyboard semantics with a custom accordion script.

## Do's and Don'ts

### Do:

- **Do** reserve safety orange for decisions, progress, verified scale, and primary actions.
- **Do** structure related information with shared rules, aligned cells, and visible ownership labels.
- **Do** pair large Newsreader declarations with precise Manrope process detail.
- **Do** keep the Supplier → RFQ → PO → DC → KPI chain as the reusable visual model for procurement flow.
- **Do** preserve the responsive and print transformations so the proposal remains useful in short desktop, mobile, and PDF reviews.
- **Do** keep the visual distinction between verified evidence, proposed system controls, and phased delivery outputs.
- **Do** keep application answers in five ruled native disclosure rows and expand all answer content for print.

### Don't:

- **Don't** replace the ledger matrices with floating rounded SaaS cards or a generic applicant-profile grid.
- **Don't** use orange as passive decoration until its decision-making meaning is diluted.
- **Don't** add shadow to ordinary process cells, evidence rows, or delivery phases.
- **Don't** round every record; square shared boundaries are central to the operating-ledger language.
- **Don't** rely on hover, animation, or the interactive chain to carry information that is absent from the document.
- **Don't** introduce unsupported supplier, savings, negotiation, or procurement-performance claims into visual examples.
- **Don't** convert the application answers into floating FAQ cards or allow multiple named disclosure rows to remain open together.
