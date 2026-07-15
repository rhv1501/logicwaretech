# Graph Report - /mnt/data/logicwaretech  (2026-07-15)

## Corpus Check
- 67 files · ~350,309 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 195 nodes · 212 edges · 21 communities (15 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 1,000 input · 500 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 17
- Community 19
- Community 20

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `DesignSystemGenerator` - 11 edges
3. `_search_csv()` - 8 edges
4. `Logicware` - 8 edges
5. `BM25` - 7 edges
6. `search()` - 7 edges
7. `generate_design_system()` - 7 edges
8. `include` - 7 edges
9. `persist_design_system()` - 5 edges
10. `_generate_intelligent_overrides()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `_generate_intelligent_overrides()` --calls--> `search()`  [INFERRED]
  .agent/skills/ui-ux-pro-max/scripts/design_system.py → .agent/skills/ui-ux-pro-max/scripts/core.py
- `Preloader()` --calls--> `setGlobalInitialLoadComplete()`  [EXTRACTED]
  components/Preloader.tsx → utils/store.ts

## Import Cycles
- None detected.

## Communities (21 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (21): clsx, framer-motion, lenis, mermaid, next, nodemailer, dependencies, clsx (+13 more)

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (15): BM25, detect_domain(), _load_csv(), Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query, Load CSV and return list of dicts, Core search function using BM25 (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.14
Nodes (18): _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides(), persist_design_system() (+10 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (19): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 5 - "Community 5"
Cohesion: 0.16
Nodes (9): DesignSystemGenerator, Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation., Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Find matching reasoning rule for a category. (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (6): metadata, playfair, plusJakartaSans, spaceGrotesk, Footer(), NAV_LINKS

### Community 7 - "Community 7"
Cohesion: 0.18
Nodes (11): Artificial Intelligence, Business Process Automation, Compliance, Digital Transformation, DPDPA Compliance, Enterprise Solutions, Governance & Risk, Information Security (+3 more)

### Community 8 - "Community 8"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 9 - "Community 9"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (4): ARCHITECTURES, FAQS, MermaidChart(), MermaidChartProps

## Knowledge Gaps
- **72 isolated node(s):** `PILLARS`, `SERVICES`, `plusJakartaSans`, `spaceGrotesk`, `playfair` (+67 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 0` to `Community 9`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 3` to `Community 9`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `DesignSystemGenerator` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `PILLARS`, `SERVICES`, `plusJakartaSans` to the rest of the system?**
  _72 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._