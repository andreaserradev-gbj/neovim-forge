---
day: 23
title: "Folds & Terminal"
phase: 4
summary: "Hide irrelevant code and work in the terminal without leaving Vim"
vim_skills: ["za", "zc", "zo", "zR", "zM", "zf{motion}", "zd", "<leader>ft", "<leader>fT", "<C-/>", "terminal-mode"]
plugin_focus: ["snacks.nvim terminal"]
app_milestone: "Collapsible sections component, dev workflow documentation page"
estimated_time: "50-60 min"
prerequisites: ["day-22"]
---

[← Day 22: Marks & Jumps](../day-22/index.md) | [Course Index](../../COURSE.md) | [Day 24: Advanced Text Objects →](../day-24/index.md)


## Today's Vim Skills

### Code Folding

Folds collapse blocks of code so you can focus on the parts you're actually editing. This is crucial for large files where you want to hide implementation details.

**Fold operations:**

- `za` — toggle a fold (close if open, open if closed)
- `zc` — close the fold at cursor
- `zo` — open the fold at cursor
- `zR` — open all folds in the file
- `zM` — close all folds in the file
- `zf{motion}` — create a fold (e.g., `zf5j` folds the next 5 lines, `zfap` folds a paragraph)
- `zd` — delete the fold at cursor
- `zj` — jump to next fold
- `zk` — jump to previous fold

**Fold methods:** Vim supports different folding strategies:

- `manual` — you create folds with `zf`, they're saved in your session
- `indent` — folds based on indentation (great for Python, YAML)
- `marker` — folds based on markers like `{{{` and `}}}`
- `treesitter` — folds based on syntax tree (most accurate for code)
- `expr` — custom folding logic

By Day 23, your config likely has treesitter folds enabled, which automatically detects function/class/block boundaries.

**When to fold:**

- Hide imports at the top of a file so you can focus on the main logic
- Collapse function definitions you're not editing
- Hide test setup code while writing test expectations
- Reduce visual clutter in a large file

**Mental model:** Folds are not deletion—they're just visual hiding. The code is still there; it's just collapsed. When you close a fold, the entire block is represented by a single line (often shown with `...` or a summary). When you save, folds can be preserved in your session.

### Terminal Integration

Vim has a built-in terminal that lets you run commands without leaving the editor.

**Terminal operations:**

- `<leader>ft` — open a terminal at the current working directory
- `<leader>fT` — open a terminal at the project root
- `<C-/>` — toggle terminal (if mapped)
- Once in terminal mode, type commands normally
- Press `Escape` or `Ctrl+Backslash` to exit terminal mode and return to normal vim
- `exit` or `Ctrl+D` to close the terminal buffer

**Terminal mode vs normal mode:** When you open a terminal, you're in "terminal mode" where your keystrokes go to the shell, not Vim. This is important:

- In terminal mode, you type bash commands normally: `npm run build`, `git status`, etc.
- To exit terminal mode, press `Escape` (normal Vim command mode)
- To close the terminal window, type `exit` and Enter, or use `<C-d>`

**Use cases:**

- Run tests without switching windows: `<leader>ft`, then `npm test`
- Commit changes: `<leader>ft`, then `git add . && git commit -m "message"`
- Check git status: `<leader>ft`, then `git status`
- Build the app: `<leader>ft`, then `npm run build`

**Workflow:** The terminal is most useful in split windows. You might have code on the left and terminal on the right, so you edit, save, run tests, see output, and fix bugs without context switching.

### Key Bindings Summary

| Command | Effect | Notes |
|---------|--------|-------|
| `za` | Toggle fold | Open if closed, close if open |
| `zc` | Close fold | Collapse the fold at cursor |
| `zo` | Open fold | Expand the fold at cursor |
| `zR` | Open all folds | Expand entire file |
| `zM` | Close all folds | Collapse entire file |
| `zf{motion}` | Create fold | Manual fold (e.g., `zf3j` folds 3 lines down) |
| `zd` | Delete fold | Remove the fold definition |
| `zj` | Next fold | Jump to the start of next fold |
| `zk` | Previous fold | Jump to the start of previous fold |
| `<leader>ft` | Terminal at cwd | Open terminal in current directory |
| `<leader>fT` | Terminal at root | Open terminal at project root |
| `<C-/>` | Toggle terminal | Close/open terminal window |
| `exit` | Exit terminal | Close terminal (in terminal mode) |
| `Escape` | Exit terminal mode | Return to normal vim (in terminal) |

### Mental Model: Focus & Context

Today's skills are about *context*. Code folding and terminals let you:

1. **Collapse complexity** — hide code you're not editing so your screen shows only what matters
2. **Run without context-switching** — build, test, and commit from within the editor
3. **Work iteratively** — edit, run, see output, fix, repeat, all keyboard-driven

The combination is powerful: you might fold a file to show only the function you're editing, open a terminal to run tests, see the error, close the terminal, unfold the file to find the line that's wrong, fix it, and run tests again—all without touching the mouse.

---

## Drills

### Drill 1: Folding Basics (5 min)

Open a code file with a clear structure (`app/src/.../*.astro` or any TypeScript file with multiple functions).

**Task sequence:**

1. Jump to the top: `gg`
2. Use `zM` to close all folds — the file should collapse to show only top-level structures
3. Use `zj` to jump to the next fold and observe its position
4. Use `zo` to open the fold under your cursor
5. Use `zc` to close it again
6. Use `zR` to open all folds — the file expands completely
7. Repeat `zM` and `zR` a few times until it feels natural

**Challenge:** In a file with 10+ folds, close all folds with `zM`, then use `zj` to jump through each fold. Count how many folds are in the file.

**Expected outcome:** Folding becomes a quick way to reduce visual clutter. You can show or hide sections of code at will.

---

### Drill 2: Manual Fold Creation (5 min)

Open `course/day-23/index.md` (this file) in Neovim.

**Task sequence:**

1. Navigate to the "Folds" section: `/Code Folding`
2. Position your cursor at the start of "Fold operations:" line
3. Create a fold from here to the "Mental model" line: use `zf` and a motion like `zf10j` (fold the next 10 lines)
4. Now your fold is created. Use `zc` to close it
5. Use `zo` to open it again
6. Use `zd` to delete the fold

Repeat with a different section. Create a fold over "Mental model" paragraph.

**Challenge:** Create 3 overlapping folds in the same section, then close all with `zM` and open all with `zR`.

**Expected outcome:** Manual folds are useful for ad-hoc hiding of sections. You might use them when reviewing code to hide parts you're confident in.

---

### Drill 3: Terminal Commands (5 min)

Open a terminal inside Neovim:

1. Press `<leader>ft` to open a terminal at the current working directory
2. You're now in terminal mode. Type a few bash commands:
   - `pwd` (print working directory)
   - `ls` (list files)
   - `git status` (if in a git repo)
3. Press `Escape` to exit terminal mode and return to normal vim
4. The terminal is still open, but you can navigate in vim. Use `j` to scroll terminal output
5. Press `<leader>ft` or `<C-/>` to toggle the terminal closed

Repeat this a few times. Get comfortable with the context switch between terminal mode and vim.

**Challenge:** Open a terminal, run `npm run build` or similar (whatever your project needs), watch the output, then close it—all without leaving Neovim.

**Expected outcome:** The terminal is now a first-class tool in your workflow. You don't need to switch to a separate terminal window.

---

### Drill 4: Terminal + Folding Combined (5 min)

Open a code file and perform this workflow:

1. Use `zM` to close all folds in the file
2. Use `<leader>ft` to open a terminal
3. Run a test or build command: `npm test` or `npm run build`
4. Watch the output. If there's an error, note the filename and line number
5. Close the terminal with `Escape` and `<C-/>` or `exit`
6. Use `/` to search for the error location or navigate to the file mentioned
7. Use `zR` to open all folds and find the problematic line
8. Edit and save
9. Repeat: open terminal, run tests, see if it passes

**Expected outcome:** You now have a tight feedback loop: code, build, test, fix, repeat—all in Vim.

---

## Build: Collapsible Sections Component & Dev Workflow Page

### What You're Building

1. A reusable **collapsible section component** using HTML `<details>` and `<summary>` elements (which provide semantic HTML collapsing without JavaScript)
2. A **dev workflow documentation page** that lists common terminal commands and Vim operations, organized with collapsible sections

This teaches you how to structure content for scanning and focus—the same principles you use with code folding.

### Step-by-Step

#### Step 1: Create the Collapsible Component

Create `app/src/components/Collapsible.astro`:

```astro
---
interface Props {
  title: string;
  defaultOpen?: boolean;
  children?: any;
}

const { title, defaultOpen = false } = Astro.props;
---

<details class="collapsible" open={defaultOpen}>
  <summary class="collapsible-summary">{title}</summary>
  <div class="collapsible-content">
    <slot />
  </div>
</details>

<style>
  .collapsible {
    border: 1px solid #e5e7eb;
    border-radius: 0.25rem;
    margin: 1rem 0;
  }

  .collapsible-summary {
    padding: 1rem;
    background: #f3f4f6;
    cursor: pointer;
    font-weight: 500;
    user-select: none;
  }

  .collapsible-summary:hover {
    background: #e5e7eb;
  }

  .collapsible-summary::marker {
    color: #6b7280;
  }

  .collapsible-content {
    padding: 1rem;
    border-top: 1px solid #e5e7eb;
  }

  .collapsible:open .collapsible-summary {
    background: #e5e7eb;
  }
</style>
```

Use marks: `mC` before switching files.

#### Step 2: Create the Dev Workflow Page

Create `app/src/pages/dev-workflow.md`:

```mdx
---
title: "Dev Workflow Reference"
layout: "../layouts/Base.astro"
---

# Dev Workflow Reference

Terminal commands and Vim operations for common development tasks.

import Collapsible from "../components/Collapsible.astro";

<Collapsible title="Running Tests">
- Open terminal: `<leader>ft`
- Run tests: `npm test`
- Watch mode: `npm test -- --watch`
- Exit: Escape, then `exit`
</Collapsible>

<Collapsible title="Building the Project">
- Development server: `npm run dev`
- Production build: `npm run build`
- Check TypeScript: `npx tsc --noEmit`
</Collapsible>

<Collapsible title="Git Operations">
- Status: `git status`
- Add changes: `git add .`
- Commit: `git commit -m "message"`
- View log: `git log --oneline`
</Collapsible>

<Collapsible title="Code Navigation in Vim">
- Jump to definition: `gd`
- Find references: `gr`
- Open file explorer: `<leader>e`
- Find files: `<leader>ff`
- Search in files: `<leader>sg`
</Collapsible>

<Collapsible title="Code Folding">
- Toggle fold: `za`
- Close all: `zM`
- Open all: `zR`
- Create fold: `zf{motion}`
</Collapsible>

<Collapsible title="Formatting & Linting">
- Format file: `<leader>cf`
- View diagnostics: `<leader>xx`
- Fix diagnostics: `<leader>ca` (code action)
</Collapsible>
```

Navigate back to the Collapsible component location with `'C`.

#### Step 3: Update Navigation

Update `app/src/components/Nav.astro` or your main navigation to include a link to the dev workflow page:

```astro
<nav>
  <!-- existing links -->
  <a href="/dev-workflow/">Dev Workflow</a>
</nav>
```

#### Step 4: Style Improvements (Optional)

Update the Collapsible component with dark mode support:

```astro
<style>
  /* ... existing styles ... */

  :global(.dark) .collapsible-summary {
    background: #374151;
    border-color: #4b5563;
  }

  :global(.dark) .collapsible-summary:hover {
    background: #4b5563;
  }

  :global(.dark) .collapsible {
    border-color: #4b5563;
  }
</style>
```

### Stretch Goal

If you finish early:

1. Create a `.vim-tips.md` file in the course content that documents advanced Vim workflows (keyboard-driven git, testing, debugging)
2. Add keyboard shortcut visualization to the dev workflow page (show which keys to press, with visual indicators)
3. Create a "Troubleshooting" collapsible section with common errors and solutions
4. Add a code block inside a Collapsible to show actual terminal command examples

---

## Checkpoint

**Commit message:** `day-23: add collapsible sections and dev workflow page`

**Your commit should include modifications or creation of:**

- [ ] `app/src/components/Collapsible.astro` — Reusable details/summary component
- [ ] `app/src/pages/dev-workflow.md` — Dev workflow documentation with collapsible sections
- [ ] Modified `app/src/components/Nav.astro` or similar — Added link to dev workflow page

**Validation**

The CI will check:
- [ ] `Collapsible.astro` is valid Astro and renders without errors
- [ ] `dev-workflow.md` is valid MDX and imports the component correctly
- [ ] App builds successfully
- [ ] No TypeScript errors

**Self-Check**

Before committing:

1. Open the dev workflow page in your browser: `npm run dev`, navigate to `/dev-workflow/`
2. Click on each collapsible section—it should expand and collapse
3. Verify the styling looks good (proper spacing, colors, hover effects)
4. Try opening a terminal in Vim and running a command to test that it works
5. You used marks while building (e.g., `mC` for Collapsible, `mD` for dev-workflow)

---

## Today's Score

Track your progress:

- [ ] I can toggle folds with `za`, close with `zc`, open with `zo`
- [ ] I can close all folds with `zM` and open all with `zR`
- [ ] I can create manual folds with `zf{motion}`
- [ ] I can jump between folds with `zj` and `zk`
- [ ] I can open a terminal with `<leader>ft` and run commands
- [ ] I can exit terminal mode with Escape and return to Vim
- [ ] I created the Collapsible component
- [ ] I created the dev workflow documentation page
- [ ] I used folds and terminal together in a workflow

**Reflection:** Did you find yourself using folds to reduce cognitive load? Would you use terminal integration in your daily work, or do you prefer a separate terminal window? This shapes your long-term workflow.

---

**Day 23 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 24: Advanced Text Objects →](../day-24/index.md)
