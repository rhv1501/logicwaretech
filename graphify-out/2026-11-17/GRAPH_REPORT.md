# Graph Report - logicwaretech  (2026-11-17)

## Corpus Check
- 39 files · ~657,459 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 283 nodes · 292 edges · 32 communities (20 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1021b7bf`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Next.js UI Dependencies
- UI UX Pro Max Core Scripts
- UI UX Pro Max Design System
- Tooling and Types
- TSConfig Setup
- Design System Generator
- App Layout and Navbar
- TS Type Definitions
- NPM Scripts and Package
- Home Page and Mermaid
- App Preloader Store
- Compliance Page
- Services Page
- About Page
- Contact Page
- ESLint Config
- Tailwind Utils
- PostCSS Config
- postcss.config.mjs
- 🚀 Logicware — Company Profile
- README.md
- page.tsx
- AGENTS.md
- layout.tsx
- layout.tsx
- layout.tsx
- layout.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `DesignSystemGenerator` - 11 edges
3. `🚀 Logicware — Company Profile` - 11 edges
4. `ui-ux-pro-max` - 9 edges
5. `_search_csv()` - 8 edges
6. `Logicware` - 8 edges
7. `BM25` - 7 edges
8. `search()` - 7 edges
9. `generate_design_system()` - 7 edges
10. `include` - 7 edges

## Surprising Connections (you probably didn't know these)
- `_generate_intelligent_overrides()` --calls--> `search()`  [INFERRED]
  .agent/skills/ui-ux-pro-max/scripts/design_system.py → .agent/skills/ui-ux-pro-max/scripts/core.py
- `Preloader()` --calls--> `setGlobalInitialLoadComplete()`  [EXTRACTED]
  components/Preloader.tsx → utils/store.ts
- `ContactPage()` --calls--> `submitContactForm()`  [EXTRACTED]
  app/contact/page.tsx → app/actions/contact.ts
- `OdooPage()` --calls--> `submitContactForm()`  [EXTRACTED]
  app/odoo/page.tsx → app/actions/contact.ts

## Import Cycles
- None detected.

## Communities (32 total, 12 thin omitted)

### Community 0 - "Next.js UI Dependencies"
Cohesion: 0.10
Nodes (21): clsx, framer-motion, lenis, mermaid, next, nodemailer, dependencies, clsx (+13 more)

### Community 1 - "UI UX Pro Max Core Scripts"
Cohesion: 0.15
Nodes (15): BM25, detect_domain(), _load_csv(), Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, Load CSV and return list of dicts, Core search function using BM25 (+7 more)

### Community 2 - "UI UX Pro Max Design System"
Cohesion: 0.14
Nodes (18): _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides(), persist_design_system() (+10 more)

### Community 3 - "Tooling and Types"
Cohesion: 0.11
Nodes (19): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+11 more)

### Community 4 - "TSConfig Setup"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 5 - "Design System Generator"
Cohesion: 0.16
Nodes (9): DesignSystemGenerator, Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation., Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Find matching reasoning rule for a category. (+1 more)

### Community 6 - "App Layout and Navbar"
Cohesion: 0.11
Nodes (8): metadata, playfair, plusJakartaSans, spaceGrotesk, Footer(), NAV_LINKS, Preloader(), setGlobalInitialLoadComplete()

### Community 7 - "TS Type Definitions"
Cohesion: 0.18
Nodes (11): Artificial Intelligence, Business Process Automation, Compliance, Digital Transformation, DPDPA Compliance, Enterprise Solutions, Governance & Risk, Information Security (+3 more)

### Community 8 - "NPM Scripts and Package"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 9 - "Home Page and Mermaid"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 10 - "App Preloader Store"
Cohesion: 0.33
Nodes (4): ARCHITECTURES, FAQS, MermaidChart(), MermaidChartProps

### Community 11 - "Compliance Page"
Cohesion: 0.07
Nodes (29): Accessibility, Available Domains, Available Stacks, Common Rules for Professional UI, Example Workflow, How to Use This Skill, Icons & Visual Elements, Interaction (+21 more)

### Community 15 - "Contact Page"
Cohesion: 0.48
Nodes (4): submitContactForm(), ContactPage(), SERVICES, OdooPage()

### Community 22 - "🚀 Logicware — Company Profile"
Cohesion: 0.08
Nodes (24): Areas, Consent Management, Data Privacy Governance, 📦 Deliverables, 📋 DPDPA Compliance, 🔄 Engagement Methodology, Engagement Methodology, 🏗️ Enterprise Solutions (+16 more)

### Community 64 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **125 isolated node(s):** `metadata`, `metadata`, `PILLARS`, `SERVICES`, `metadata` (+120 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Next.js UI Dependencies` to `Home Page and Mermaid`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Tooling and Types` to `Home Page and Mermaid`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `DesignSystemGenerator` connect `Design System Generator` to `UI UX Pro Max Design System`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `PILLARS` to the rest of the system?**
  _125 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Next.js UI Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `UI UX Pro Max Core Scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `UI UX Pro Max Design System` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._