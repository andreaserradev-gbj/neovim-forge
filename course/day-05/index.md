---
day: 5
title: "Visual Mode & Selection"
phase: 1
summary: "Master visual selection to see before you act — the safe way to select complex regions"
vim_skills: ["v", "V", "Ctrl-v", "v{motion}", "V{count}", "o", "gv", "visual+d", "visual+c", "visual+y"]
plugin_focus: null
app_milestone: "Tailwind styling system, typography, dark mode toggle component"
estimated_time: "45-60 min"
prerequisites: ["day-04"]
---

[← Day 4: Text Objects](../day-04/index.md) | [Course Index](../../COURSE.md) | [Day 6: Search & Destroy →](../day-06/index.md)


## Today's Vim Skills

### Visual Mode: See Before You Act

Visual mode is a different approach to selection. Instead of thinking "delete this word" (text objects) or "delete to here" (motion), you *select first* and then *operate*.

It's the "see what you're deleting" approach.

This feels slower at first compared to operators + text objects, which are faster because you don't have to see. But visual mode is safer (you verify your selection) and is essential for complex selections that don't fit neat text object categories.

### Three Visual Modes

#### `v` — Character Visual

Press `v` to enter character-wise visual mode. Your cursor becomes a selection starting point. Move with any motion, and the selection expands.

- `v` then move with `w`, `l`, `$`, `f`, etc. — the selection follows
- Press `y` to yank the selection
- Press `d` to delete the selection
- Press `c` to delete and enter insert mode

**Example:**

```
Text: hello world
Cursor on 'h'
Press v
Move with w (next word)
Selection now includes "hello"
Press d to delete
Result: world
```

#### `V` — Line Visual

Press `V` (Shift+v) to enter line-wise visual mode. Each motion selection is in complete lines.

- `V` then `j` or `k` — select multiple full lines
- `V` then `G` — select from current line to end of file
- `V` then `gg` — select from current line to beginning of file

**Example:**

```
Multiple lines of code
Line 1
Line 2
Line 3
Line 4

Cursor on Line 2
Press V
Press j (down one line)
Lines 2 and 3 are selected (entire lines)
Press d to delete
Result: Lines 2 and 3 are gone
```

#### `Ctrl-v` — Block Visual

Press `Ctrl-v` to enter block-wise visual mode. Selection is rectangular. This is for column editing.

- `Ctrl-v` then navigate with `hjkl` to form a rectangle
- Useful for selecting columns of text, multiple lines of indentation, aligning comments, etc.

**Example:**

```
def hello():
def world():
def test():

Cursor at first column
Press Ctrl-v
Move down to third line (jj)
Move right 3 characters (lll)
A 3×3 block is selected (the "def" part on each line)
Press d to delete
Result: All "def" is gone
```

Block visual is incredibly useful for tabular data or multi-line edits.

### Motions in Visual Mode

Once you're in visual mode, any motion extends the selection:

- `w` — extend selection by one word
- `$` — extend to end of line
- `f"` — extend to next quote character
- `j` — extend down one line (in line visual, entire line; in character visual, cursor moves)
- `G` — extend to end of file

The selection stays anchored at the start and grows as you move.

### Toggle Endpoint with `o`

While in visual mode, press `o` to toggle which end of the selection is the "active" end.

**Example:**

```
Text: hello world test
Cursor on 'h', press v
Move to end of "world" with w w
Selection: "hello world"
Press o
Now cursor is at the other end. Your selection is the same, but you can extend from the end.
Move left with b
Selection shrinks: "hello "
```

This is useful when you've selected too much and want to shrink the selection without restarting.

### Reselect Previous Selection: `gv`

After you exit visual mode (by operating or pressing Escape), you can reselect your last visual selection with `gv`.

**Example:**

```
Press v to enter visual
Select something
Press d to delete
Now you're back in normal mode
Press gv to reselect what you just deleted (useful if you realized you selected wrong)
```

This is powerful for "oops, wrong selection" moments.

### Visual Mode + Operators

Once you've selected text in visual mode:

- Press `d` to delete
- Press `c` to change (delete and enter insert mode)
- Press `y` to yank

No special syntax. Just operator key.

**Important:** The operator applies to the *entire selection*, regardless of text objects or motions. This is why visual mode is valuable for complex selections.

### When to Use Visual Mode vs. Operators

**Use operators + text objects/motions when:**
- You know the structure (word, line, paragraph, quote)
- You want speed (fewer keystrokes)
- You don't need to see the selection

**Use visual mode when:**
- You want to verify the selection before acting
- The selection doesn't fit neat categories
- You're refactoring and need precision
- Multiple lines with non-uniform patterns

In practice, you'll use operators more often (they're faster), but visual mode is your safety net.

### Key Bindings Summary

| Binding | Effect | Notes |
|---------|--------|-------|
| `v` | Enter character visual | Selection follows cursor |
| `V` | Enter line visual | Full lines selected |
| `Ctrl-v` | Enter block visual | Rectangular selection |
| `{motion}` in visual | Extend selection | e.g., `w`, `$`, `G` |
| `o` | Toggle selection endpoint | Switch which end is active |
| `gv` | Reselect last selection | After exiting visual |
| `d` in visual | Delete selection | Exit visual, apply delete |
| `c` in visual | Change selection | Delete + insert mode |
| `y` in visual | Yank selection | Copy to register |

### Mental Model: Three Ways to Select

You now have three ways to select and operate on text:

1. **Motions:** `dw` (operator + motion). Fast, position-based.
2. **Text objects:** `diw` (operator + text object). Structural, automatic boundaries.
3. **Visual mode:** `v...d` (select, then operate). Explicit, visible, flexible.

All three lead to the same outcome. Choose based on speed, confidence, and context.

---

## Drills

### Drill 1: Character Visual (5 min)

Open `app/src/pages/index.astro` in Neovim.

**Task:**

1. Position cursor at the start of a word (e.g., "Welcome").
2. Press `v` to enter character visual.
3. Press `w` to extend selection to the next word boundary.
4. You should see the selection highlight (color will vary by terminal theme).
5. Press `d` to delete the selection.
6. Undo with `u`.
7. Repeat with different words: `v`, extend with `$` (to end of line), `d`.

**Expected outcome:** Visual selection is transparent. You see exactly what you're deleting before you press `d`.

### Drill 2: Line Visual (5 min)

**Setup:** Stay in the same file or switch to a file with multiple lines.

1. Position cursor on any line.
2. Press `V` to enter line visual.
3. Press `j` to extend selection down one line.
4. Two full lines are selected.
5. Press `d` to delete both lines.
6. Undo with `u`.

**Challenge:** Use `V` then `G` to select from current line to end of file. See how much is selected. Undo.

**Expected outcome:** Line visual always selects complete lines. Useful for deleting blocks of code.

### Drill 3: Block Visual (3 min)

Find content with multiple lines of indentation or columns (HTML tags, code blocks, etc.).

1. Position cursor at a column position.
2. Press `Ctrl-v` to enter block visual.
3. Navigate down with `j` and right with `l` to form a rectangle.
4. You should see a rectangular selection.
5. Press `d` to delete the rectangle.
6. Undo with `u`.

**Expected outcome:** Block visual creates rectangular selections. Incredibly useful for multi-line edits.

### Drill 4: Motions in Visual Mode (3 min)

1. Enter visual mode with `v`.
2. Use `w` to extend by words.
3. Use `$` to extend to line end.
4. Use `f"` to extend to next quote.
5. Use `j` to extend down (line boundaries respect mode—character mode extends character, line mode extends line).

**Expected outcome:** Visual mode accepts all motions. Selecting is just moving while in visual mode.

### Drill 5: Reselect with `gv` (2 min)

1. Select something with `v...w...w` (a few words).
2. Delete with `d`.
3. You're back in normal mode.
4. Press `gv` to reselect.
5. The last selection is restored.
6. If you made a mistake, this lets you fix it.

**Expected outcome:** `gv` is your "oops" recovery key.

---

## Build: Tailwind Styling and Dark Mode

### What You're Building

1. **Tailwind CSS setup** — Configure Tailwind in your Astro project (usually pre-configured, but we'll verify).
2. **Global CSS** — Create `global.css` with base styles and theme variables.
3. **ThemeToggle component** — A component that switches between light and dark mode.
4. **Apply styles to existing components** — Update Base, DayNav, Sidebar, and other components to use Tailwind.

By the end, your app will have a polished, styled appearance with a working dark mode toggle.

### Step-by-Step

#### Step 1: Verify Tailwind Setup

Open `app/tailwind.config.mjs`:

```bash
nvim app/tailwind.config.mjs
```

It should exist and be configured. If not, create it with Tailwind defaults. Check that it includes:

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Step 2: Create Global CSS

Create `app/src/styles/global.css`:

```bash
nvim app/src/styles/global.css
```

**Content:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #ffffff;
  --color-text: #333333;
  --color-border: #ddd;
  --color-accent: #0066cc;
}

html.dark {
  --color-bg: #1a1a1a;
  --color-text: #f0f0f0;
  --color-border: #444;
  --color-accent: #66b3ff;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.3s, color 0.3s;
}
```

#### Step 3: Create ThemeToggle Component

Create `app/src/components/ThemeToggle.astro`:

```bash
nvim app/src/components/ThemeToggle.astro
```

**Content:**

```astro
---
// This is a client-side component for dark mode toggle
---

<button id="theme-toggle" class="theme-toggle">
  <span class="sr-only">Toggle theme</span>
  <span class="icon">🌙</span>
</button>

<script>
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  }
  
  // Toggle on click
  toggle?.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
</script>

<style>
  .theme-toggle {
    background: none;
    border: 1px solid var(--color-border);
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: all 0.3s;
  }
  
  .theme-toggle:hover {
    background-color: var(--color-border);
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
```

**Build instructions:** Use vim motions:
- Use `o` to open new lines for the script and style blocks
- Use `ci"` to change quoted strings (like "theme-toggle")
- Use `dap` to delete paragraphs and rewrite them

#### Step 4: Update Base Layout

Open `app/src/layouts/Base.astro`:

```bash
nvim app/src/layouts/Base.astro
```

Add imports and update the structure:

```astro
---
import '../styles/global.css';
import ThemeToggle from '../components/ThemeToggle.astro';

interface Props {
  title?: string;
  description?: string;
}

const { title = "Neovim Forge", description = "Learn Neovim by building the course that teaches you." } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title}</title>
  </head>
  <body>
    <header class="header">
      <h1><a href="/">Neovim Forge</a></h1>
      <ThemeToggle />
    </header>
    <main class="main">
      <slot />
    </main>
  </body>
</html>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 2rem;
  }
  
  .header h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .header a {
    text-decoration: none;
    color: var(--color-accent);
  }
  
  .main {
    padding: 1rem 0;
  }
</style>
```

#### Step 5: Apply Tailwind Classes to Components

Update DayNav, Sidebar, and other components to use Tailwind classes. For example, in `DayNav.astro`, replace inline `<style>` with Tailwind classes:

**Before:**
```astro
<nav class="day-nav">
  <style>
    .day-nav { display: flex; ... }
  </style>
</nav>
```

**After:**
```astro
<nav class="flex justify-between items-center py-6 border-t border-b border-color-border my-8">
  ...
</nav>
```

Use Tailwind's utility classes: `flex`, `justify-between`, `items-center`, `py-`, `border-`, etc.

#### Step 6: Test

```bash
npm run dev
```

Visit `localhost:4321`. You should see:
- Styled layout with header and theme toggle
- Dark mode toggle button (moon emoji or similar)
- Click the toggle to switch themes
- Styles persist on refresh (localStorage)

#### Step 7: Commit

```bash
git add app/src/styles/global.css app/src/components/ThemeToggle.astro app/src/layouts/Base.astro app/tailwind.config.mjs
git commit -m "day-05: add tailwind styling and dark mode"
```

### Stretch Goal

1. Create a theme indicator showing current theme
2. Add more color variables for success, warning, error states
3. Apply Tailwind to all remaining components (days page, day nav, sidebar)
4. Add typography variables for heading sizes

---

## Checkpoint

**Commit message:** `day-05: add tailwind styling and dark mode`

**Your commit should include:**
- [ ] `app/src/styles/global.css` — Base Tailwind + CSS variables
- [ ] `app/src/components/ThemeToggle.astro` — Dark mode toggle
- [ ] `app/src/layouts/Base.astro` — Updated header with theme toggle
- [ ] Modified/verified `app/tailwind.config.mjs`

**Validation:**

CI checks:
- [ ] Files exist with valid CSS/Astro
- [ ] Tailwind directives present (@tailwind)
- [ ] No build errors
- [ ] App runs: `npm run dev`
- [ ] Commit message starts with `day-05:`

**Self-Check:**

1. Dark mode toggle appears on every page
2. Clicking it switches theme visually
3. Refresh page — theme persists
4. Both light and dark themes are readable
5. All edits used visual mode or operators + text objects

---

## Today's Score

- [ ] I can enter character visual with `v`
- [ ] I can enter line visual with `V`
- [ ] I can enter block visual with `Ctrl-v`
- [ ] I can extend selections with motions
- [ ] I can reselect with `gv`
- [ ] I understand when to use visual vs. operators
- [ ] I built the ThemeToggle component
- [ ] I set up Tailwind styling
- [ ] Dark mode toggle works and persists
- [ ] App has a polished, styled appearance

**Reflection:** Visual mode is the safe way. You see what you're operating on. Which feels more natural to you: operators + text objects (fast, blind) or visual mode (slower, explicit)? The answer will shape your Vim style.

---

**Day 5 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 6: Search & Destroy →](../day-06/index.md)
