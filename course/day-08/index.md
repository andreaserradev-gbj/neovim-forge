---
day: 8
title: "The Leader Key"
phase: 2
summary: "Discover the power of the leader key and which-key for organized, discoverable keybindings"
vim_skills: ["<leader>", "which-key", "<leader>ff", "<leader>/", "<leader>bb", "<leader>fn", "<leader>e", "<leader>bd"]
plugin_focus: "which-key.nvim"
app_milestone: "File-based routing for all course sections (days, reference, challenges)"
estimated_time: "50-65 min"
prerequisites: ["day-07"]
---

[← Day 7: Week 1 Review](../day-07/index.md) | [Course Index](../../COURSE.md) | [Day 9: Flash Navigation →](../day-09/index.md)


## Today's Vim Skills

### The Leader Key Concept

In Vim, the **leader key** is a prefix that doesn't do anything by itself. You assign it to a key (commonly Space in modern Neovim configs), and then you build keybindings that start with that prefix followed by other keys. The beauty is that leader keybindings live in their own namespace—they don't conflict with Vim's default commands.

Think of it like this: Vim has hjkl for navigation. Those are sacred—they're part of the language. But leader gives you a huge sandbox where you can create your own language without stepping on Vim's toes.

In LazyVim, the leader key is Space. This means every custom command starts with Space followed by one or more characters. So `<leader>ff` means "press Space, then press f, then press f again."

The magic happens when you use **which-key**—a plugin that shows you a popup menu whenever you pause after pressing Space. You don't have to memorize every keybinding. You start typing, and the menu reveals what's available. It's like command discovery built into your keyboard.

### The Leader Concept: Namespace for Custom Power

Before which-key, you'd press Space and nothing would happen—you'd just have to know or search your config. With which-key, you press Space and a popup appears showing all leader-prefixed commands grouped by category:

```
┌─────────────────────────────────────┐
│ Leader Key Groups                   │
├─────────────────────────────────────┤
│ [f] find     [b] buffer             │
│ [d] delete   [e] explorer           │
│ [/] search   [r] refactor           │
│ [l] lsp      [g] git                │
└─────────────────────────────────────┘
```

You see `[f] find` and know that `<leader>f` opens a menu of find-related commands. You see `[b] buffer` and know that `<leader>b` has buffer operations. This is **discoverability**—the keyboard teaches itself.

### Common Leader Groups in LazyVim

These are the leader groups you'll use most:

**File & Project Navigation:**
- `<leader>ff` — find files (fuzzy search in current project)
- `<leader>fg` — find git files (staged/unstaged files in repo)
- `<leader>fr` — find recent (jump to recently opened files)
- `<leader>e` — explorer (open file tree at project root)
- `<leader>E` — explorer at cwd (current working directory)

**Searching & Grep:**
- `<leader>/` — search in file (live grep, search text in current project)
- `<leader>sg` — grep (same as `/`, alternate binding)
- `<leader>sb` — search buffers (find text in open buffers)

**Buffer Management:**
- `<leader>bb` — alternate buffer (jump to last file you were editing)
- `<leader>bn` — next buffer (navigate to next open buffer)
- `<leader>bp` — previous buffer (navigate to previous open buffer)
- `<leader>bd` — delete buffer (close current buffer without closing window)
- `<leader>bo` — delete other buffers (close all except current)

**File Operations:**
- `<leader>fn` — new file (create new file in current directory)
- `<leader>fR` — rename file (rename current file with validation)

**General:**
- `<leader>:` — command palette (find and run any command)

### Mental Model: Organization & Discoverability

The leader key transforms Vim from "memorize all keybindings" to "explore as you type." With which-key active, you don't need to memorize everything. You learn by discovering—pressing Space shows you what's available, you pick an option, and muscle memory builds naturally.

This is the essence of **organized power**: group related commands under a prefix, show the menu when you're curious, and let your fingers learn the paths you use most often.

### Key Bindings Summary

| Binding | Effect | Category |
|---------|--------|----------|
| `<leader>ff` | Find files in project | Find |
| `<leader>fg` | Find git files | Find |
| `<leader>fr` | Find recent files | Find |
| `<leader>e` | Open explorer at project root | Explorer |
| `<leader>E` | Open explorer at cwd | Explorer |
| `<leader>/` | Live grep (search project) | Search |
| `<leader>sg` | Grep (alias for /) | Search |
| `<leader>sb` | Search buffers | Search |
| `<leader>bb` | Alternate buffer (jump back) | Buffer |
| `<leader>bn` | Next buffer | Buffer |
| `<leader>bp` | Previous buffer | Buffer |
| `<leader>bd` | Delete buffer | Buffer |
| `<leader>bo` | Delete other buffers | Buffer |
| `<leader>fn` | New file | File |
| `<leader>fR` | Rename file | File |
| `<leader>:` | Command palette | Command |

---

## Drills

### Drill 1: Leader Discovery (5 min)

Open Neovim in any project (or the neovim-forge repo).

1. Press Space. A which-key popup should appear showing all leader-prefixed commands.
2. Don't press anything yet. Study the popup. Notice the groupings: find, buffer, delete, etc.
3. Now press `f`. The popup should narrow to show all `<leader>f*` commands: ff, fg, fr, fn, fR, etc.
4. Press `f` again (so `<leader>ff`). This should open the file finder.
5. Type a filename like "index.md". The fuzzy finder should show matching files.
6. Press Escape to close the finder without selecting.

**Expected outcome:** You understand the structure. Leader is a prefix. Which-key shows you options. Drilling down through the popup is how you discover keybindings.

### Drill 2: Buffer Hopping (5 min)

1. Open two files:
   ```bash
   nvim app/src/pages/index.astro course/day-08/index.md
   ```
2. You're in the second file. Press `<leader>bb` (alternate buffer). You should jump to the first file.
3. Press `<leader>bb` again. You should jump back to the second file.
4. Press `<leader>bp` (previous buffer). Jump to the first file.
5. Press `<leader>bn` (next buffer). Jump to the second file.
6. Press `<leader>bd` (delete buffer). Close the current buffer. You're now viewing the first file.

**Expected outcome:** Buffer navigation is muscle memory. You can jump between files without thinking, and close buffers without closing windows.

### Drill 3: File Finding Speed (5 min)

1. Start in the neovim-forge project root.
2. Press `<leader>ff` to open file finder.
3. Search for "day-01". The finder should show all Day 1 files.
4. Select `course/day-01/index.md` and press Enter.
5. Now press `<leader>ff` again and search for "corne". Select `reference/corne-layout.md`.
6. Again: `<leader>ff`, search "package.json", select `app/package.json`.

Time yourself. Can you do all three file jumps in under 30 seconds? That's the goal—finding files should be second nature.

**Expected outcome:** The file finder becomes your primary navigation tool. Faster than any mouse-based file explorer.

---

## Build: File-Based Routing for All Course Sections

### What You're Building

Today you'll set up the app's routing structure so every course section (days, reference, challenges) is accessible via URLs. The app should have:

1. `/` — home page
2. `/day/1/`, `/day/2/`, ..., `/day/30/` — individual lesson pages
3. `/reference/` — listing of all reference pages
4. `/challenges/` — listing of all challenges
5. Dynamic routing based on the file structure in `/course/`

This is file-based routing: the URL structure mirrors the file structure, which teaches a real skill—mapping files to URLs is core web development, and it reinforces your vim navigation knowledge.

### Step-by-Step

#### Step 1: Understand the Current Structure

Open the app directory in Neovim:

```bash
cd app
nvim .
```

Navigate to `src/pages/`. Use `<leader>e` to open the explorer. You should see:
- `index.astro` (home page)

This is where pages live in Astro. Every `.astro` or `.md` file in `pages/` becomes a URL.

**Using vim:** From the explorer, use `j` and `k` to navigate the tree, press Enter to open files, `q` to close the explorer.

#### Step 2: Create Dynamic Day Pages

Create a new file `src/pages/day/[slug].astro`. This is Astro's dynamic routing syntax—anything matching `/day/{slug}` will use this file.

In Neovim, from the pages directory:

```bash
:e day/[slug].astro
```

Add this code:

```astro
---
import { getCollection, render, type CollectionEntry } from "astro:content";
import Base from "../../layouts/Base.astro";

const { slug } = Astro.params;
const days = await getCollection("day");
const day = days.find((d) => String(d.data.day).padStart(2, "0") === slug);

if (!day) {
  return Astro.redirect("/404");
}

const { Content } = await render(day);
---

<Base title={day.data.title}>
  <article>
    <h1>{day.data.title}</h1>
    <p>{day.data.summary}</p>
    <Content />
  </article>
</Base>
```

**Using vim:** This requires typing code. Use `:e` to create the file, `o` or `O` to insert lines, type the content. Navigate with `w` and `b` to fix typos. Use `dd` (tomorrow's lesson) if you need to delete lines for now.

#### Step 3: Create a Day Listing Page

Create `src/pages/days/index.astro` for listing all days:

```astro
---
import { getCollection } from "astro:content";
import Base from "../../layouts/Base.astro";

const days = (await getCollection("day")).sort(
  (a, b) => a.data.day - b.data.day
);
---

<Base title="Days">
  <h1>30-Day Course</h1>
  <ul>
    {
      days.map((day) => (
        <li>
          <a href={`/day/${String(day.data.day).padStart(2, "0")}`}>
            Day {day.data.day}: {day.data.title}
          </a>
          <p>{day.data.summary}</p>
        </li>
      ))
    }
  </ul>
</Base>
```

**Using vim:** Repeat the process: `:e src/pages/days/index.astro`, then type and navigate with motions. Focus on accuracy—use `f{char}` to jump to positions for quick edits.

#### Step 4: Create Reference Pages Directory

Create `src/pages/reference/[slug].astro` for reference content:

```astro
---
import { getCollection, render } from "astro:content";
import Base from "../../layouts/Base.astro";

const { slug } = Astro.params;
const refs = await getCollection("reference");
const ref = refs.find((r) => r.slug === slug);

if (!ref) {
  return Astro.redirect("/404");
}

const { Content } = await render(ref);
---

<Base title={ref.data.title}>
  <article>
    <h1>{ref.data.title}</h1>
    {ref.data.description && <p>{ref.data.description}</p>}
    <Content />
  </article>
</Base>
```

And a listing page `src/pages/reference/index.astro`:

```astro
---
import { getCollection } from "astro:content";
import Base from "../../layouts/Base.astro";

const references = await getCollection("reference");
---

<Base title="Reference">
  <h1>Reference Pages</h1>
  <ul>
    {
      references.map((ref) => (
        <li>
          <a href={`/reference/${ref.slug}`}>{ref.data.title}</a>
          {ref.data.description && <p>{ref.data.description}</p>}
        </li>
      ))
    }
  </ul>
</Base>
```

#### Step 5: Update Content Collections Config

Open `src/content/config.ts` and ensure you have collection definitions:

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const day = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "../course" }),
  schema: z.object({
    day: z.number(),
    title: z.string(),
    phase: z.number(),
    summary: z.string(),
    vim_skills: z.array(z.string()),
    plugin_focus: z.string().optional(),
    app_milestone: z.string(),
    estimated_time: z.string(),
    prerequisites: z.array(z.string()).optional(),
  }),
});

const reference = defineCollection({
  loader: glob({ pattern: "*.md", base: "../reference" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { day, reference };
```

**Using vim:** Edit the file using `o` for insert lines, `w` to jump between words, `:w` to save.

#### Step 6: Verify astro.config.mjs

Ensure the config includes both MDX and Tailwind integrations:

```javascript
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [mdx(), tailwind()],
});
```

The content collection paths are defined in `src/content/config.ts` via the `glob` loader, so `astro.config.mjs` doesn't need content-specific configuration.

#### Step 7: Test the Build

In your terminal:

```bash
npm run dev
```

Open `localhost:4321` in your browser. You should see:
- `/` — home page
- `/days/` — listing of all days
- `/day/01/` — Day 1 lesson rendered from MDX
- `/reference/` — reference listing

Use vim to navigate and fix any import errors or typos.

### Stretch Goal

If you finish early, create a navigation component that shows prev/next day links:

1. Create `src/components/DayNav.astro`:

```astro
---
const { currentDay } = Astro.props;
const prevDay = currentDay > 1 ? currentDay - 1 : null;
const nextDay = currentDay < 30 ? currentDay + 1 : null;
---

<nav>
  {prevDay && <a href={`/day/${String(prevDay).padStart(2, "0")}`}>← Previous</a>}
  {nextDay && <a href={`/day/${String(nextDay).padStart(2, "0")}`}>Next →</a>}
</nav>
```

2. Import and use it in the day page:

```astro
<DayNav currentDay={day.data.day} />
```

---

## Checkpoint

**Commit message:** `day-08: add file-based routing for all course sections`

**Your commit should include:**

- [ ] `app/src/pages/day/[slug].astro` — dynamic day page
- [ ] `app/src/pages/days/index.astro` — day listing page
- [ ] `app/src/pages/reference/[slug].astro` — dynamic reference page
- [ ] `app/src/pages/reference/index.astro` — reference listing page
- [ ] `app/src/content/config.ts` — updated with day and reference collection schemas
- [ ] `app/src/layouts/Base.astro` — base layout (may already exist, but verify)

**Validation**

The CI will check:
- [ ] All routing pages exist and are valid Astro files
- [ ] Content collection config defines `day` and `reference` collections
- [ ] `app/src/pages/day/[slug].astro` uses dynamic routing
- [ ] No TypeScript or Astro errors (checked via `astro check`)
- [ ] The commit message starts with `day-08:`

**Self-Check**

Before committing:
1. `cd app && npm run dev` starts without errors
2. `localhost:4321` loads
3. `/days/` shows a list of all days
4. `/day/01/` renders the Day 1 lesson
5. `/reference/` shows reference pages
6. Navigated to each page using vim motions and `<leader>ff` to find files

---

## Today's Score

Track your progress:

- [ ] I pressed Space and saw the which-key popup
- [ ] I understand that leader is a namespace for custom keybindings
- [ ] I used `<leader>ff` to find and open a file
- [ ] I used `<leader>e` to open the explorer
- [ ] I used `<leader>bb` to jump between two buffers
- [ ] I used `<leader>bd` to delete a buffer
- [ ] I created dynamic routing pages using Astro's `[slug].astro` syntax
- [ ] The app now shows all course content in organized, routable URLs
- [ ] I made all edits using only vim motions (no mouse)

**Reflection:** Which leader group did you use most today? `<leader>f*` for files, or `<leader>b*` for buffers? Where do you see gaps in the leader organization that might be useful later in the course?

---

**Day 8 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 9: Flash Navigation →](../day-09/index.md)
