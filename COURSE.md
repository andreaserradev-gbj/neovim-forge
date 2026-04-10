# Neovim Forge: 30-Day Course

Learn Neovim by building. This is your complete index with daily breakdowns, skills taught, app milestones, and links to each day's content.

Each day combines **vim skills** (what you practice), **app milestones** (what you build), and **plugins** (tools that unlock power). Daily completion includes drills and checkpoint validation.

---

## Phase 1: Foundations (Days 1–7)

Master vim's core grammar: navigation, text editing, operators, text objects, search. Your app grows from empty scaffold to a site rendering all 30 days.

- [ ] **Day 1**: The First Keystrokes — hjkl, w/b/e, 0/$/^, gg/G, line numbers. Scaffold the Astro project and render Day 1 content. [Start →](course/day-01/index.md)

- [ ] **Day 2**: Enter and Exit — i/a/I/A/o/O, J+K escape, u/Ctrl-r. Build base layout component and set up MDX rendering pipeline. [Start →](course/day-02/index.md)

- [ ] **Day 3**: The Operator Grammar — d/c/y + motions + counts + dot command. Create content collection schema and day listing page. [Start →](course/day-03/index.md)

- [ ] **Day 4**: Text Objects — iw/aw, i"/a", i(/a(, i{/a{, ip/ap + counts. Build day navigation component (prev/next) and sidebar. Plugin: mini.ai [Start →](course/day-04/index.md)

- [ ] **Day 5**: Visual Mode & Selection — v, V, Ctrl-v, gv. Add Tailwind styling, typography, and dark mode toggle. [Start →](course/day-05/index.md)

- [ ] **Day 6**: Search & Destroy — /, ?, n, N, *, #, :s/old/new/g, :%s, command-line grammar. Build search component that filters days by keyword. [Start →](course/day-06/index.md)

- [ ] **Day 7**: Week 1 Review — timed drills combining all above skills. Build progress dashboard page and verify Week 1 checkpoint. [Start →](course/day-07/index.md)

**What you can do after Week 1:** Navigate any file confidently. Edit text efficiently using the operator + count + motion grammar. Repeat with dot command. Search across files. Your app renders all 30 days as a browseable site.

---

## Phase 2: LazyVim Power (Days 8–14)

Unlock LazyVim's ecosystem: the leader key, flash navigation, file explorer, buffers, fuzzy finding, surround commands. Add interactive components and keyboard visualization.

- [ ] **Day 8**: The Leader Key — which-key discovery, leader groups, leader-ff, leader-/, leader-bb. Implement file-based routing for all course sections. Plugin: which-key [Start →](course/day-08/index.md)

- [ ] **Day 9**: Flash Navigation — s, S, r, Treesitter basics (syntax, incremental selection). Build keyboard shortcut reference component with interactive key display. Plugins: flash.nvim, treesitter [Start →](course/day-09/index.md)

- [ ] **Day 10**: The Explorer — leader-e/E, file operations, Y path copy. Create file tree sidebar for course structure with breadcrumb navigation. Plugin: snacks explorer [Start →](course/day-10/index.md)

- [ ] **Day 11**: Buffers & Windows — Ctrl-hjkl, leader-/|, Shift-h/l, leader-bd. Build multi-panel layout (lesson + exercise side-by-side). Plugin: bufferline [Start →](course/day-11/index.md)

- [ ] **Day 12**: Find Everything — snacks picker deep dive: leader-sg, leader-sf, leader-sr, leader-sc. Implement full-text search across all course content and command palette. Plugin: snacks picker [Start →](course/day-12/index.md)

- [ ] **Day 13**: Surround & Transform — sa/sd/sr + targets, pair manipulation. Build MDX component library (callouts, tips, warnings, key combos). Plugin: mini.surround [Start →](course/day-13/index.md)

- [ ] **Day 14**: Week 2 Review — navigation speed challenge, component building race. Create interactive vim cheatsheet page (clickable, grouped by category). [Start →](course/day-14/index.md)

**What you can do after Week 2:** Navigate your project like a pro. Flash-jump anywhere in visible code. Find any file or text in seconds. Your app has rich interactive components and full-text search.

---

## Phase 3: Code Intelligence (Days 15–21)

Master editor-aware development: LSP navigation and refactoring, diagnostics, formatting, git integration, registers, macros. Build the challenge system.

- [ ] **Day 15**: LSP Superpowers — gd, gr, gI, K, leader-ca, leader-cr. Add TypeScript type system for course data (Day, Exercise, Challenge interfaces). Plugin: nvim-lspconfig [Start →](course/day-15/index.md)

- [ ] **Day 16**: Diagnostics & Notifications — [d/]d, [e/]e, leader-xx, leader-xX, leader-snl/snh/snd. Build error boundary component and notification-aware UI. Plugins: trouble.nvim, noice.nvim [Start →](course/day-16/index.md)

- [ ] **Day 17**: Format & Flow — leader-cf, leader-uf/uF, prettier config, nvim-ts-autotag (HTML/JSX auto-close). Configure ESLint + Prettier, format-on-save, auto-closing tags in Astro/TSX. Plugins: conform.nvim, nvim-ts-autotag [Start →](course/day-17/index.md)

- [ ] **Day 18**: Git in the Editor — ]h/[h (hunks), leader-gg (lazygit), leader-gb (blame), leader-gf. Build git-based progress tracker that reads commit history. Plugin: gitsigns [Start →](course/day-18/index.md)

- [ ] **Day 19**: Registers Deep Dive — named ("a-z), unnamed (""), system clipboard ("+), expression ("=), :reg. Build reusable code snippet system with clipboard-aware copy/paste. [Start →](course/day-19/index.md)

- [ ] **Day 20**: Macros — q{reg}, @{reg}, @@, recursive macros, combining with registers. Create batch processing script that generates challenge data from MDX frontmatter. [Start →](course/day-20/index.md)

- [ ] **Day 21**: Week 3 Review — refactoring challenge (rename, extract, restructure). Complete challenge system MVP: timer + exercise runner. [Start →](course/day-21/index.md)

**What you can do after Week 3:** Full LSP workflow—jump to definitions, rename symbols across files, fix diagnostics. Record and replay macros. Your app has a working challenge system.

---

## Phase 4: Mastery (Days 22–28)

Polish and power: marks and jumps, folds, advanced text objects, project-wide refactoring, todo comments, AI assistance. App reaches feature-complete.

- [ ] **Day 22**: Marks & Jumps — m{a-z}, '{a-z}, global marks (A-Z), ` vs ', jumplist (Ctrl-o/Ctrl-i). Add code-editing challenges to challenge system (diff-based validation). [Start →](course/day-22/index.md)

- [ ] **Day 23**: Folds & Terminal — za/zc/zo/zR/zM, treesitter folds, fold methods, leader-ft/fT, Ctrl-/. Build collapsible sections component and dev workflow page. Plugin: snacks terminal [Start →](course/day-23/index.md)

- [ ] **Day 24**: Advanced Text Objects — mini.ai o/f/c/u/d (code block, function, class, call, digit). Build refactoring exercise: extract components using text object selection. Plugin: mini.ai advanced [Start →](course/day-24/index.md)

- [ ] **Day 25**: Project-Wide Replace — leader-sr, grug-far patterns, regex. Rename a component across the entire app using grug-far. Plugin: grug-far [Start →](course/day-25/index.md)

- [ ] **Day 26**: Todos & Custom Keys — ]t/[t, leader-xt/xT, leader-st, custom keymaps. Add progress tracking with TODO markers and keyboard shortcut page. Plugins: todo-comments, which-key [Start →](course/day-26/index.md)

- [ ] **Day 27**: AI-Assisted Editing — copilot accept/dismiss, inline suggestions, AI-assisted workflow. Create AI-assisted features page with Copilot tips integrated into lessons. Plugin: copilot.lua [Start →](course/day-27/index.md)

- [ ] **Day 28**: Week 4 Review — full workflow speed challenge (navigate, edit, refactor, commit). App reaches feature-complete: final integration testing, all components working. [Start →](course/day-28/index.md)

**What you can do after Week 4:** Operate Neovim at speed—marks, folds, custom objects, project-wide refactoring, terminal workflow, AI assist. Your app is feature-complete.

---

## Phase 5: Flight (Days 29–30)

Deployment, speed, and graduation. Deploy the site and complete the final challenge.

- [ ] **Day 29**: Polish & Deploy — session management (leader-qq), zen mode (leader-uz), UI toggles (leader-u*), speed workflow. Deploy to Vercel/Netlify with SEO, OG images, final polish. [Start →](course/day-29/index.md)

- [ ] **Day 30**: Graduation Flight — the final combined challenge (navigate, edit, refactor, commit, all timed). Build graduation page with certificate, final stats, and "What's Next" guide. [Start →](course/day-30/index.md)

**What you can do after Day 30:** You operate Neovim at speed across all 30 days of skills. You built a fully featured course website entirely in the editor. You have 30 green checkmarks in git proving it.

---

## Course Phases at a Glance

| Phase | Days | Focus | App State |
|-------|------|-------|-----------|
| Foundations | 1–7 | Core vim grammar, navigation, editing | Renders all 30 days |
| LazyVim Power | 8–14 | Leader key, plugins, fuzzy finding | Interactive components, search |
| Code Intelligence | 15–21 | LSP, git, macros, challenge system | Type-safe data, timer + runner |
| Mastery | 22–28 | Advanced motions, refactoring, polish | Feature-complete |
| Flight | 29–30 | Deployment and graduation | Live site + certificate |

---

## Tips for Success

- **Read in Neovim.** Open the lesson file in your editor. Searching for examples, jumping between sections—that's the practice.
- **Do the drills.** 5-15 minutes of focused repetition builds muscle memory faster than reading.
- **Apply the skills immediately.** The app features are designed to use today's skills. Use `Vjjjd` to delete lines, not just `dd`. This is the dogfooding.
- **Commit every day.** The CI workflow validates your checkpoint and gives you feedback.
- **If you fall behind,** the weekly review days (7, 14, 21, 28) have lighter vim content to catch up on the app.

---

## Additional Resources

- **[README.md](./README.md)** — Project overview and how to fork
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** — How to report issues and submit improvements
- **[reference/](./reference/)** — Vim grammar, LazyVim keymaps, and cheatsheets (available Day 1+)

---

Begin [Day 1: The First Keystrokes →](course/day-01/index.md)
