# Neovim Forge

Learn Neovim by building the app that teaches you Neovim.

## What This Is

Neovim Forge is a 30-day hands-on course stored entirely as a GitHub repo. You create your own copy, open it in Neovim, and start building. Every day you read a lesson (in Neovim — that's practice), learn new motions and plugin features, then apply them by building an Astro web app that renders the course itself. By Day 30 you've built a fully featured course website *and* you can fly on the keyboard.

The course content *is* the codebase. The codebase *is* the course. It dogfoods itself.

## How to Start

> **Important:** Don't clone this repo directly — you need your own copy to commit daily progress. Use one of the two options below.

### Option A: Use this template (recommended)

Click the green **"Use this template"** button at the top of this page and choose **"Create a new repository"**. This gives you a clean, independent copy with its own commit history — no link back to the original. Name it whatever you like (`neovim-forge`, `vim-30-days`, etc.) and make it public or private.

### Option B: Fork

Click **"Fork"** if you prefer the traditional GitHub fork workflow. This keeps a link to the upstream repo, which is useful if you want to pull future course updates, but means your daily commits are visible as "ahead of" the original.

### Then

1. **Clone your copy** and open it in Neovim: `nvim .`
2. **Read `course/day-01/index.md`** in your editor — navigating and searching the file is itself the practice
3. **Follow along with the drills** — focused 5-15 minute exercises for the day's vim skills
4. **Build the app feature** — apply what you learned to enhance the Astro site
5. **Commit your work** — the CI workflow validates your checkpoint
6. **Repeat for 30 days** and watch yourself go from navigation novice to vim expert

## Prerequisites

- **Neovim** with LazyVim installed
- **Node.js 20+** (for the Astro app)
- **Basic terminal comfort** — you can clone a repo and run `npm install`
- **Open mind** — the best way to learn vim is to *use* vim to learn vim

## Two Tracks

### Main Track: LazyVim (for everyone)

The primary content in each day's `index.md`. Covers core vim grammar, all major LazyVim keybindings, LSP workflow, and full-stack TypeScript development patterns. Works for anyone running Neovim + LazyVim with the standard plugin set.

### Corne Companion Track (optional)

Each day includes an optional `corne.md` for split keyboard users. Maps the day's vim and LazyVim shortcuts to specific physical key positions on a split keyboard. Written for the Corne MX Pro (46-key, QWERTY, no home-row mods) but useful as a reference for any split keyboard layout.

## Repo Structure

```
neovim-forge/
├── README.md                    # This file
├── COURSE.md                    # 30-day index with progress checklist
├── CONTRIBUTING.md              # How to contribute improvements
├── LICENSE                      # MIT
│
├── course/
│   ├── day-01/
│   │   ├── index.md             # Main lesson
│   │   ├── exercises.md         # Drills
│   │   ├── corne.md             # Split keyboard variant
│   │   └── checkpoint.md        # What to commit
│   ├── day-02/ ... day-30/
│   └── ...
│
├── challenges/                  # Challenge definitions (JSON)
├── reference/                   # Vim grammar, keymaps, cheatsheets
├── app/                         # Astro site (built progressively)
└── scripts/                     # Validation and build utilities
```

**Key insight:** Course content lives in `/course/` outside the app, so you can read Day 1 immediately in Neovim or on GitHub without needing to run the app first.

## Course Overview

The 30-day curriculum is split into five phases. Each day teaches vim skills and one app milestone — a new feature or component. For the full breakdown, see [COURSE.md](./COURSE.md).

### Phase 1: Foundations (Days 1–7)
Basic navigation, text editing, operators, text objects, visual mode, search, and the command-line. You build the scaffold and get all 30 days rendering on the page.

### Phase 2: LazyVim Power (Days 8–14)
The leader key, flash navigation, file explorer, buffers and windows, fuzzy finding, surround commands. You add interactive components and full-text search.

### Phase 3: Code Intelligence (Days 15–21)
LSP go-to-definition, diagnostics, formatting, git integration, registers, macros. You build the challenge system and type-safe course data.

### Phase 4: Mastery (Days 22–28)
Marks and jumps, folds, advanced text objects, project-wide find/replace, todo comments, AI assistance. Your app reaches feature-complete status.

### Phase 5: Flight (Days 29–30)
Session management, zen mode, UI toggles, and the final graduation challenge. You deploy the site and earn your certificate.

## The Dogfooding Concept

Every app feature is built using the vim skills you just learned. On Day 1 you learn `hjkl` and `gg`/`G`, then immediately use them to navigate the lesson in your editor. On Day 8 you learn the leader key and which-key, then build the file-based routing. On Day 15 you learn LSP, then add TypeScript types to the challenge system.

This creates a feedback loop: vim skills are immediately applied, the app gets better, and the course itself stays fresh because you're building it.

## Contributing

Found a typo or have a suggestion? Please read [CONTRIBUTING.md](./CONTRIBUTING.md) — we welcome issue reports and pull requests for course improvements.

## License

MIT — see [LICENSE](./LICENSE) for details.

---

Ready? Open this repo in Neovim and head to [COURSE.md](./COURSE.md) to start Day 1.
