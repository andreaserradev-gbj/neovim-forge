---
day: 14
title: "Week 2 Review & Interactive Vim Cheatsheet"
phase: 2
summary: "Master Week 2 skills and build an interactive cheatsheet for rapid reference"
vim_skills: ["<leader>*", "flash", "explorer", "buffers", "windows", "picker", "surround", "combined workflows"]
plugin_focus: "Review all Week 2 plugins"
app_milestone: "Interactive vim cheatsheet page (clickable groups showing keymaps by category)"
estimated_time: "60-75 min"
prerequisites: ["day-13"]
---

[← Day 13: Surround & Transform](../day-13/index.md) | [Course Index](../../COURSE.md) | [Day 15: LSP Superpowers →](../day-15/index.md)


## Week 2 Skills Review

### What You've Learned

**Day 8: Leader Key**
- `<leader>ff`, `<leader>fg`, `<leader>fr` — file finding
- `<leader>e`, `<leader>E` — explorer
- `<leader>/`, `<leader>sg` — grep
- `<leader>bb`, `<leader>bd`, `<leader>bn`, `<leader>bp` — buffer management
- which-key popup for discovering commands

**Day 9: Flash Navigation**
- `s` — jump to any visible character
- `S` — jump to syntax nodes (Treesitter)
- `r`, `R` — Flash in operator mode
- Two-keystroke jumps to visible targets

**Day 10: Explorer**
- `<leader>e` / `<leader>E` — open file tree
- `hjkl` — navigate tree
- `Y` — copy paths
- `c`, `d`, `r` — file operations

**Day 11: Buffers & Windows**
- `<C-hjkl>` — navigate windows
- `<leader>-`, `<leader>|` — split windows
- `<C-Up/Down/Left/Right>` — resize
- `<S-h>`, `<S-l>` — navigate buffers
- `<leader>bd`, `<leader>bo` — manage buffers

**Day 12: Picker (Find Everything)**
- `<leader>sg` — live grep
- `<leader>sf` — file search
- `<leader>sb` — buffer search
- `<leader>sc` — command palette
- Fuzzy matching and multi-select

**Day 13: Surround**
- `sa{motion}{char}` — add pairs
- `sd{char}` — delete pairs
- `sr{old}{new}` — change pairs
- Quick pair manipulation

### Composite Workflows

The real power of Week 2 is *combining* these skills:

**Workflow 1: Find and Edit**
1. Use `<leader>sf` to find a file
2. Use Flash (`s`) to jump within the file
3. Use surround (`sd"`) to modify text
4. Use `<leader>bd` to close the buffer when done

**Workflow 2: Multi-File Editing**
1. Use `<leader>e` to browse project structure
2. Open multiple files
3. Use `<C-hjkl>` to navigate split windows
4. Edit in each pane independently

**Workflow 3: Global Search and Replace**
1. Use `<leader>/` to find text across project
2. Jump to matches
3. Use surround or other edits to fix
4. Move to next match with `;` or picker nav

**Workflow 4: Buffer Juggling**
1. Use `<leader>ff` to open several files
2. Use `<S-h>`, `<S-l>` to navigate buffer list
3. Use `<leader>bb` to jump back to previous file
4. Use `<leader>bd` to close what you don't need

---

## Drills: Combined Skills

### Drill 1: The Flash-Edit Combo (5 min)

1. Open a file with visible code
2. Press `s` (Flash)
3. Jump to a word you want to edit
4. Without exiting, press `saiw"` (add quotes)
5. The word is now quoted
6. Repeat 5 times

**Expected outcome:** Flash + surround feel like one seamless motion.

### Drill 2: Window + Picker Navigation (5 min)

1. Create a split with `<leader>-`
2. Use `<leader>ff` to find a file in the left window
3. Use `<C-l>` to move to the right window
4. Use `<leader>/` to grep in the right window
5. Switch back to left with `<C-h>`

**Expected outcome:** Multiple windows + picker = powerful multi-task editing.

### Drill 3: Explorer + Buffer Management (5 min)

1. Open explorer with `<leader>e`
2. Navigate to a directory
3. Open several files (pressing Enter on each)
4. Close the explorer
5. Use `<S-h>` and `<S-l>` to cycle through the open files
6. Use `<leader>bo` to close all but one

**Expected outcome:** You've opened, navigated, and managed multiple files without friction.

---

## Build: Interactive Vim Cheatsheet

### What You're Building

A clickable page showing all Week 2 keybindings grouped by category. Clicking a group expands/collapses to show details.

### Step-by-Step

#### Step 1: Create Cheatsheet Data

Create `app/src/lib/cheatsheet.ts`:

```typescript
export interface CheatsheetGroup {
  name: string;
  description: string;
  bindings: {
    keys: string;
    description: string;
    example?: string;
  }[];
}

export const cheatsheet: CheatsheetGroup[] = [
  {
    name: "Leader Groups",
    description: "Commands prefixed with Space",
    bindings: [
      { keys: "<leader>ff", description: "Find files" },
      { keys: "<leader>e", description: "Explorer at root" },
      { keys: "<leader>/", description: "Live grep" },
      { keys: "<leader>bb", description: "Alternate buffer" },
    ],
  },
  {
    name: "Flash Navigation",
    description: "Jump to visible targets",
    bindings: [
      { keys: "s", description: "Flash jump (character)" },
      { keys: "S", description: "Flash jump (syntax)" },
      { keys: "r", description: "Flash + operator" },
    ],
  },
  {
    name: "Windows",
    description: "Multi-pane editing",
    bindings: [
      { keys: "<C-h>", description: "Focus left window" },
      { keys: "<C-j>", description: "Focus down" },
      { keys: "<C-k>", description: "Focus up" },
      { keys: "<C-l>", description: "Focus right" },
      { keys: "<leader>-", description: "Horizontal split" },
      { keys: "<leader>|", description: "Vertical split" },
    ],
  },
  {
    name: "Surround",
    description: "Pair manipulation",
    bindings: [
      { keys: "sa{m}{c}", description: "Add pairs", example: "saiw\"" },
      { keys: "sd{c}", description: "Delete pairs", example: "sd\"" },
      { keys: "sr{o}{n}", description: "Replace pairs", example: "sr\"'" },
    ],
  },
];
```

#### Step 2: Create Cheatsheet Component

Create `app/src/components/VimCheatsheet.astro`:

```astro
---
import { cheatsheet } from "../lib/cheatsheet";

interface Props {
  expanded?: string[];
}

const { expanded = [] } = Astro.props;
---

<div class="cheatsheet">
  {
    cheatsheet.map((group) => (
      <details open={expanded.includes(group.name)}>
        <summary class="group-title">{group.name}</summary>
        <p class="group-description">{group.description}</p>
        <table>
          <tbody>
            {group.bindings.map((binding) => (
              <tr>
                <td class="keys">{binding.keys}</td>
                <td class="description">{binding.description}</td>
                {binding.example && <td class="example">{binding.example}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    ))
  }
</div>

<style>
  .cheatsheet {
    max-width: 100%;
  }

  details {
    margin-bottom: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: 1rem;
  }

  .group-title {
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    color: var(--color-primary);
  }

  .group-description {
    margin: 0.5rem 0;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  tr {
    border-bottom: 1px solid var(--color-border);
  }

  .keys {
    font-family: monospace;
    font-weight: bold;
    width: 30%;
    padding: 0.5rem;
  }

  .description {
    padding: 0.5rem;
  }

  .example {
    font-family: monospace;
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    padding: 0.5rem;
    width: 25%;
  }
</style>
```

#### Step 3: Create Cheatsheet Page

Create `app/src/pages/cheatsheet.astro`:

```astro
---
import Base from "../layouts/Base.astro";
import VimCheatsheet from "../components/VimCheatsheet.astro";
---

<Base title="Vim Cheatsheet">
  <article style="max-width: 1000px; margin: 0 auto;">
    <h1>Vim Cheatsheet — Week 2</h1>
    <p>All keybindings from Week 2: Leader, Flash, Explorer, Windows, Picker, Surround.</p>
    <p>Click any section to expand and see details.</p>
    
    <VimCheatsheet expanded={["Leader Groups", "Flash Navigation"]} />
  </article>
</Base>

<style>
  article {
    padding: 2rem;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-text-secondary);
    margin: 0.5rem 0;
  }
</style>
```

#### Step 4: Add Link to Main Navigation

Update your navigation to link to `/cheatsheet`

---

## Checkpoint

**Commit message:** `day-14: add interactive vim cheatsheet page and complete week 2`

**Your commit should include:**

- [ ] `app/src/lib/cheatsheet.ts` — cheatsheet data
- [ ] `app/src/components/VimCheatsheet.astro` — cheatsheet component
- [ ] `app/src/pages/cheatsheet.astro` — cheatsheet page
- [ ] Updated navigation or home page with link to cheatsheet

**Validation**

- [ ] Cheatsheet page renders at `/cheatsheet`
- [ ] Groups expand/collapse correctly
- [ ] All Week 2 keybindings are listed
- [ ] Layout is readable and well-organized
- [ ] No TypeScript errors

**Self-Check**

1. Used all Week 2 vim skills in combination
2. Built the interactive cheatsheet using vim
3. Made all edits using vim motions

---

## Today's Score

- [ ] I can open files with `<leader>ff`
- [ ] I can jump within a file with Flash (`s`)
- [ ] I can navigate windows with `<C-hjkl>`
- [ ] I can split windows with `<leader>-` and `<leader>|`
- [ ] I can search project text with `<leader>/`
- [ ] I can manage buffers with `<leader>b*` commands
- [ ] I can manipulate pairs with surround (`sa`, `sd`, `sr`)
- [ ] I can combine these skills into fluid workflows
- [ ] I built an interactive cheatsheet for reference
- [ ] Week 2 is complete

**Reflection:** Which Week 2 skill has transformed your workflow the most? What would you like to master next?

---

## What Comes Next

Week 3 (Days 15-21) focuses on **Code Intelligence**: LSP integration, diagnostics, refactoring, git workflows, and macros. You'll learn to understand your code structure, jump to definitions, rename symbols across files, and record/replay editing sequences.

You've built the navigation and editing foundation. Now you'll add intelligence to your editing.

---

**Day 14 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 15: LSP Superpowers →](../day-15/index.md)
