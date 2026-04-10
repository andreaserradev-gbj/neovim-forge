---
day: 9
title: "Flash Navigation"
phase: 2
summary: "Jump to any visible character on screen in two keystrokes using Flash"
vim_skills: ["s", "S", "r", "R", "treesitter", "incremental selection"]
plugin_focus: "flash.nvim, treesitter"
app_milestone: "Keyboard shortcut reference component — interactive display showing key combos"
estimated_time: "50-65 min"
prerequisites: ["day-08"]
---

[← Day 8: The Leader Key](../day-08/index.md) | [Course Index](../../COURSE.md) | [Day 10: The Explorer →](../day-10/index.md)


## Today's Vim Skills

### The Flash Concept

Vim has the `f` motion for finding characters within a line. But what if you want to jump to a character on a different line, or across multiple lines?

**Flash** is a plugin that extends this idea: you press `s`, and every visible character on the screen gets a label (usually a letter or pair of letters). You type the label, and your cursor jumps there. Instantly. It's the fastest way to move your cursor when you can see the destination.

The mental model: instead of counting lines and using motions, you just point at where you want to go and let Flash take you there.

### Flash Motions: s, S, r, R

Flash provides four motions, each with a different scope:

**`s` — Flash jump (within visible screen)**

Press `s`. Every visible character gets a label (try to use single letters: a, b, c, ... z, then pairs like aa, ab, ac).

Type the label for the character you want to reach. Your cursor jumps there. You're now in the position of that character, ready to edit.

Use this when: you can see the target on screen and want to jump to it instantly.

**`S` — Flash jump via Treesitter (syntax-aware)**

Instead of labeling every character, `S` labels syntax nodes. Treesitter parses your code into an AST (abstract syntax tree), so instead of jumping to a random character, you jump to function names, variable declarations, HTML tags, or other syntactic units.

Use this when: you want to jump to the next function, the next class definition, the next closing brace, etc. More intelligent than `s`.

**`r` — Flash in operator-pending mode (remote flash)**

Press an operator like `d` (delete) or `c` (change), then press `r`. Flash activates. You pick your target with labels, and the operator applies to the motion.

Example: `dr` — delete to the labeled position. `cr` — change to the labeled position. Combines operators (tomorrow's topic) with flash targeting.

Use this when: you're deleting or changing text to a specific position that's visible on screen.

**`R` — Flash via Treesitter in operator-pending mode**

Same as `r`, but targets syntax nodes instead of characters. `dR` — delete to the next function. `cR` — change to the next class.

Use this when: you need to apply an operator with syntax-aware targeting.

### Treesitter: The Syntax Engine

Treesitter is a parsing library that builds a tree of your code's syntax. Instead of seeing your code as a flat sequence of characters, it understands structure:

```
function hello(name) {
  return `Hello, ${name}`;
}
```

Treesitter parses this as:

```
function_declaration
├── identifier: "hello"
├── parameter_list
│   └── identifier: "name"
└── block
    └── return_statement
        └── template_string
```

When Flash uses Treesitter (`S` motion), it labels these nodes:

- `a` — the function_declaration
- `b` — the identifier "hello"
- `c` — the parameter_list
- `d` — the block
- `e` — the return_statement

This is way more useful than labeling every character. You're jumping to semantically meaningful positions in the code.

### Incremental Selection (Preview)

Treesitter also powers incremental selection. In Vim, you can select text with `v` (visual mode). With Treesitter, you can expand your selection to the next semantic unit:

- Start with the cursor on a variable
- Press some keybinding (varies by config, often `Ctrl-Shift-Space` or a custom leader sequence)
- Your selection expands to the whole variable
- Press again to expand to the parent function
- Press again to expand to the whole file

This is a sneak peek—tomorrow you'll use it more. For now, know that Treesitter understands structure, and Flash leverages that to make jumping and selecting smarter.

### Key Bindings Summary

| Binding | Effect | Scope |
|---------|--------|-------|
| `s` | Flash jump (label every character) | Character-level |
| `S` | Flash jump via Treesitter | Syntax node level |
| `r` | Flash in operator-pending (e.g., `dr`, `cr`) | Character-level with operator |
| `R` | Flash Treesitter in operator-pending (e.g., `dR`, `cR`) | Syntax node level with operator |

### Mental Model: Visible Target = Instant Jump

The core insight: if you can see it on screen, Flash gets you there in two to four keystrokes. This is faster than:

- Counting lines and using `j` repeatedly
- Searching with `/` and pressing `n` multiple times
- Using motions like `w` and `b` repeatedly

Flash is the fastest way to move when your target is visible.

---

## Drills

### Drill 1: Flash Jumps (5 min)

Open any source file in Neovim with code visible:

```bash
nvim app/src/pages/index.astro
```

1. Place your cursor at the start of the file (`gg`).
2. Press `s`. Every character on screen gets a label.
3. Pick a character somewhere in the middle of the screen (e.g., the `T` in a tag name). Type its label.
4. Your cursor jumps there. Good.
5. Repeat: press `s`, pick a different character, jump to it.
6. Repeat five more times. Try to jump to characters in different parts of the screen.

**Challenge:** Can you make 10 jumps in under 30 seconds? Time yourself.

**Expected outcome:** Flash becomes your primary navigation method for visible targets. You realize it's faster than thinking about line counts or using hjkl repeatedly.

### Drill 2: Treesitter Jumps (5 min)

Still in the same file.

1. Press `S`. Flash labels syntax nodes instead of characters.
2. You should see labels on function names, variable names, HTML tags, etc. The labels might be fewer because Treesitter groups related characters.
3. Press the label for a function name you want to jump to.
4. Repeat: press `S` and jump to another node.
5. Try jumping to different types of nodes: function declarations, variable declarations, HTML elements.

**Challenge:** How many unique syntax node types did you see? Can you identify the difference between jumping to a character and jumping to a node?

**Expected outcome:** You've experienced syntax-aware jumping. It feels more intentional than character-level jumping—you're not aiming for a random letter, you're aiming for a meaningful unit.

### Drill 3: Flash with Operators (5 min)

Now combine Flash with deletion (you'll learn deletion more formally tomorrow, but you can use it here).

1. Press `d` (delete operator), then press `r` (flash in operator-pending).
2. Every character on screen gets a label (like `s`, but in operator mode).
3. Pick a character at the end of a word. Type its label.
4. The text from your cursor to that character deletes.
5. Repeat: `dr`, pick a target, delete up to it.
6. Try `cr` (change to): `cr`, pick a target, and the text changes. You're left in insert mode.

**Challenge:** Without using the mouse, delete a whole line using `dr` with Flash. Pick the newline character at the end of the line. (The newline might not have a label; in that case, pick the last visible character and continue.)

**Expected outcome:** Operators + Flash are powerful. You're combining two Vim concepts (operator-pending mode and Flash targeting) into one efficient motion.

---

## Build: Keyboard Shortcut Reference Component

### What You're Building

An interactive React/Astro component that displays keybindings grouped by category. When you hover over a key combo or click it, the component shows what it does. This will be displayed on a reference page so learners can see all their leader keybindings and plugin shortcuts at a glance.

The component will show:

```
┌─────────────────────────────────┐
│ Keyboard Shortcuts              │
├─────────────────────────────────┤
│ Find & Navigate:                │
│  <Space> f f   →  Find Files    │
│  <Space> / g   →  Live Grep     │
│  <Space> e     →  Explorer      │
├─────────────────────────────────┤
│ Flash Navigation:               │
│  s       →  Flash Jump          │
│  S       →  Flash (Treesitter)  │
│  r       →  Flash + Operator    │
├─────────────────────────────────┤
│ [more categories...]            │
└─────────────────────────────────┘
```

### Step-by-Step

#### Step 1: Create the Keyboard Shortcut Data

Create a new file `app/src/lib/shortcuts.ts` with keybinding data:

```typescript
export interface KeyboardShortcut {
  category: string;
  bindings: {
    keys: string;
    description: string;
    notes?: string;
  }[];
}

export const shortcuts: KeyboardShortcut[] = [
  {
    category: "Find & Navigate",
    bindings: [
      { keys: "<leader>ff", description: "Find files", notes: "Fuzzy search project" },
      { keys: "<leader>fg", description: "Find git files", notes: "Staged/modified files" },
      { keys: "<leader>fr", description: "Find recent", notes: "Recently opened" },
      { keys: "<leader>e", description: "Explorer", notes: "File tree at root" },
    ],
  },
  {
    category: "Flash Navigation",
    bindings: [
      { keys: "s", description: "Flash jump", notes: "Label every character" },
      { keys: "S", description: "Flash (Treesitter)", notes: "Jump to syntax nodes" },
      { keys: "r", description: "Flash + Operator", notes: "e.g., dr, cr" },
      { keys: "R", description: "Flash Treesitter + Op", notes: "e.g., dR, cR" },
    ],
  },
  {
    category: "Buffer Management",
    bindings: [
      { keys: "<leader>bb", description: "Alternate buffer", notes: "Jump to last file" },
      { keys: "<leader>bd", description: "Delete buffer", notes: "Close current file" },
      { keys: "<leader>bn", description: "Next buffer", notes: "Next open file" },
      { keys: "<leader>bp", description: "Prev buffer", notes: "Prev open file" },
    ],
  },
];
```

Use vim to create and edit this file. Use `o` to add lines, `w` to navigate, `f{` to jump to braces.

#### Step 2: Create the Component

Create `app/src/components/KeyboardShortcuts.astro`:

```astro
---
import { shortcuts } from "../lib/shortcuts";

interface Props {
  category?: string;
}

const { category } = Astro.props;
const displayShortcuts = category
  ? shortcuts.filter((s) => s.category === category)
  : shortcuts;
---

<div class="keyboard-shortcuts">
  <h2>Keyboard Reference</h2>
  {
    displayShortcuts.map((group) => (
      <section class="shortcut-group">
        <h3>{group.category}</h3>
        <table class="shortcuts-table">
          <tbody>
            {group.bindings.map((binding) => (
              <tr>
                <td class="keys">{binding.keys}</td>
                <td class="description">{binding.description}</td>
                {binding.notes && <td class="notes">{binding.notes}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    ))
  }
</div>

<style>
  .keyboard-shortcuts {
    max-width: 800px;
    margin: 2rem 0;
  }

  .shortcut-group {
    margin-bottom: 2rem;
  }

  .shortcut-group h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  .shortcuts-table {
    width: 100%;
    border-collapse: collapse;
  }

  .keys {
    font-family: monospace;
    font-weight: bold;
    background: var(--color-bg-secondary);
    padding: 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
  }

  .description {
    padding: 0.5rem;
    text-align: left;
  }

  .notes {
    padding: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }

  tr {
    border-bottom: 1px solid var(--color-border);
  }

  tr:last-child {
    border-bottom: none;
  }
</style>
```

Navigate through this file using vim motions. Use `f<` to jump to tags, `w` to move between words, `$` to go to end of line for edits.

#### Step 3: Create a Reference Page for Shortcuts

Create `course/reference/keyboard-shortcuts.md`:

```mdx
---
title: "Keyboard Shortcuts Reference"
description: "Complete guide to keybindings used in Neovim Forge"
---

## Keyboard Shortcuts

This reference page lists all the keyboard shortcuts you'll learn throughout the course, organized by category.

## Day 8 & 9: Navigation & Flash

[The component will be imported here]

## Day 10-14: Advanced Navigation

[More shortcuts added as course progresses]

Each key combination is optimized for the Corne keyboard layout, but works on any standard keyboard with Neovim.
```

#### Step 4: Use the Component in a Page

Update `app/src/pages/reference/keyboard-shortcuts.astro` (or create it):

```astro
---
import { getCollection } from "astro:content";
import Base from "../../layouts/Base.astro";
import KeyboardShortcuts from "../../components/KeyboardShortcuts.astro";

const refs = await getCollection("reference");
const shortcutsRef = refs.find((r) => r.slug === "keyboard-shortcuts");
---

<Base title="Keyboard Shortcuts">
  <article>
    <h1>Keyboard Shortcuts Reference</h1>
    <p>A guide to all keybindings used in Neovim Forge.</p>
    
    <KeyboardShortcuts />
  </article>
</Base>
```

#### Step 5: Test the Component

Run the app:

```bash
npm run dev
```

Navigate to `/reference/keyboard-shortcuts` in your browser. You should see the keyboard shortcut reference rendered as a table.

### Stretch Goal

If you finish early:

1. Add interactive filtering—clicking a category name shows only shortcuts from that category.
2. Add a search box that filters shortcuts by description or keys.
3. Add Visual indicators (badges) showing which day each shortcut is learned.

This requires a client-side component (Astro island). You can make it a `.tsx` file with `client:load` to enable JavaScript interactivity.

---

## Checkpoint

**Commit message:** `day-09: add keyboard shortcut reference component`

**Your commit should include:**

- [ ] `app/src/components/KeyboardShortcuts.astro` — shortcut display component
- [ ] `app/src/lib/shortcuts.ts` — keybinding data (Day 8 & 9 shortcuts)
- [ ] `app/src/pages/reference/keyboard-shortcuts.astro` — reference page
- [ ] `course/reference/keyboard-shortcuts.md` — MDX content for reference (optional but recommended)

**Validation**

- [ ] Component renders without errors
- [ ] Shortcuts are displayed in a clear, organized table
- [ ] `/reference/keyboard-shortcuts` page loads in browser
- [ ] All Day 8 & 9 keybindings are listed

**Self-Check**

Before committing:
1. Used `s` to flash-jump to at least 10 different positions on screen
2. Used `S` to jump to syntax nodes (Treesitter)
3. Used `dr` or `cr` to delete/change with Flash targeting
4. Made all component edits using vim motions (no mouse)

---

## Today's Score

Track your progress:

- [ ] I pressed `s` and saw character labels appear on the screen
- [ ] I jumped to a labeled character and the cursor moved there
- [ ] I used `S` to jump via Treesitter (syntax nodes)
- [ ] I understand the difference between `s` (character) and `S` (syntax)
- [ ] I used `dr` (delete with Flash) to delete to a position
- [ ] I used `cr` (change with Flash) to change to a position
- [ ] I understand that Flash is faster than repeated hjkl or motions
- [ ] I created the KeyboardShortcuts component and component
- [ ] The keyboard reference page displays shortcuts correctly

**Reflection:** Which Flash motion do you think you'll use most: `s` for characters or `S` for Treesitter nodes? Why?

---

**Day 9 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 10: The Explorer →](../day-10/index.md)
