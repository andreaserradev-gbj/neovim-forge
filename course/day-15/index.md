---
day: 15
title: "LSP Superpowers"
phase: 3
summary: "Navigate code by meaning, not by name — jump to definitions, find all references, rename symbols globally"
vim_skills: ["gd", "gr", "gI", "gD", "gy", "K", "<leader>ca", "<leader>cA", "<leader>cr"]
plugin_focus: "nvim-lspconfig"
app_milestone: "TypeScript type system for course data — Day, Exercise, Challenge interfaces with LSP-verified types"
estimated_time: "45-60 min"
prerequisites: ["day-14"]
---

[← Day 14: Week 2 Review & Interactive Vim Cheatsheet](../day-14/index.md) | [Course Index](../../COURSE.md) | [Day 16: Diagnostics & Notifications →](../day-16/index.md)

## Today's Vim Skills

### What Is LSP?

LSP stands for Language Server Protocol. It's a standard way for text editors to talk to language intelligence servers — tools that understand code deeply. When you use `gd` to jump to a function's definition, or `<leader>cr` to rename a symbol everywhere it's used, you're using LSP.

Before LSP, editors required custom plugins for every language. Now, any editor can speak to any language server using the same protocol. Neovim uses `nvim-lspconfig` to wire up language servers and expose their features as vim keybindings.

Here's why it matters: **Code is about meaning, not just text.** When you rename a variable, you don't want to replace every occurrence of that text — you want to rename every place that variable is used. LSP understands the difference between a variable named `count` in one function and a variable named `count` in another. It knows which references you're actually changing.

### Navigation: gd, gr, gI, gD, gy

These motions jump you to related code using semantic understanding:

- `gd` — **go to definition** — Jump to where a symbol is defined. From a function call, jump to the function. From a variable usage, jump to its declaration.
- `gr` — **go to references** — Show every place a symbol is used. Opens a picker so you can jump to any reference.
- `gI` — **go to implementation** — For interfaces or abstract methods, jump to the concrete implementation. (Often the same as `gd` for regular functions.)
- `gD` — **go to declaration** — Like `gd`, but follows a slightly different priority. Often the same, sometimes different for complex type systems.
- `gy` — **go to type definition** — Jump to the type of a symbol. If your cursor is on a variable `x: MyType`, `gy` jumps to the definition of `MyType`.

**Example:** You're editing TypeScript and see this:

```typescript
const result = calculateTotal(items);
```

Your cursor is on `calculateTotal`. Press `gd`. Neovim jumps to the line where `calculateTotal` is defined, even if it's in another file. LSP handles the file jump automatically.

Then you want to see everywhere `calculateTotal` is called. Press `gr`. A picker (Snacks picker, from Day 12) opens showing all references. You can jump to any one.

### K: Hover Documentation

Press `K` (capital K, no leader) with your cursor on any symbol to see its documentation. Neovim opens a floating window showing the type, JSDoc comments, or signature of that symbol.

```typescript
function greet(name: string): void {
  //...
}
```

Cursor on `greet`, press `K`. A window appears: `function greet(name: string): void`.

This is instant. No searching, no documentation site lookup. Just press K and understand what you're looking at.

### Code Actions: <leader>ca, <leader>cA

LSP can suggest fixes or transformations:

- `<leader>ca` — **code action** — Show suggestions at the cursor. Common suggestions: "Extract to function", "Add type annotation", "Fix eslint error". These are context-aware and vary by file type.
- `<leader>cA` — **code action (line)** — Same as `<leader>ca` but operates on the whole line, not just the word under the cursor.

When you trigger a code action, Neovim opens a picker showing available actions. Select one and it auto-applies. For example, if your linter says you have an unused variable, one code action might be "Remove unused variable" — select it and the variable is deleted.

### Rename: <leader>cr

`<leader>cr` is the most powerful refactoring tool for coders who don't have a full IDE:

- **Position your cursor on any symbol** (variable name, function name, type name)
- **Press `<leader>cr`**
- **Type the new name**
- **Press Enter**

Neovim uses LSP to find every occurrence of that symbol in your entire project and renames them all, respecting scope. If you have two variables named `count` (one in function A, one in function B), `<leader>cr` on one won't rename the other. LSP knows they're different symbols.

This is the vim equivalent of "Find and Replace All" in an IDE, but smarter: it understands code structure.

### Key Bindings Summary

| Motion | Effect | Notes |
|--------|--------|-------|
| `gd` | Go to definition | Jump to where symbol is defined |
| `gr` | Go to references | Show all uses of symbol (picker) |
| `gI` | Go to implementation | Jump to concrete implementation |
| `gD` | Go to declaration | Jump to declaration (sometimes same as gd) |
| `gy` | Go to type definition | Jump to the type of a symbol |
| `K` | Hover docs | Show type info and docs in floating window |
| `<leader>ca` | Code action | Show context-aware suggestions (picker) |
| `<leader>cA` | Code action (line) | Code action for entire line |
| `<leader>cr` | Rename symbol | Rename symbol everywhere it's used |

### Mental Model: Code as a Web of Meanings

When you write code, you're building a web of connections: functions call other functions, variables have types, classes implement interfaces. Traditional editing treats code as text. Vim + LSP treats code as a semantic graph.

When you press `gd`, you're traversing that graph — "show me the definition node." When you press `gr`, you're asking "show me all nodes that reference this one." When you press `<leader>cr`, you're saying "update this node and all edges pointing to it."

This is what makes LSP transformative: you're thinking in terms of meaning, not text patterns.

---

## Drills

### Drill 1: Definition Jumping (5 min)

Open `app/src/lib/types.ts` in Neovim (this file doesn't exist yet — you'll create it today). For now, open any TypeScript file in your project (e.g., `app/astro.config.mjs` or `app/tsconfig.json`).

Actually, let's use a real file. Open `app/src/pages/index.astro`:

```bash
nvim app/src/pages/index.astro
```

Navigate to any imported component or function. If there's an import like:

```typescript
import { Something } from '../components/...'
```

Position your cursor on `Something`. Press `gd`. LSP jumps you to the file where `Something` is defined.

**Goal:** Jump to 3 different definitions using `gd`. Each jump should be instant — if it takes more than a second or shows an error, LSP might not be configured for that file type yet.

**Expected outcome:** You understand that `gd` is instant code-aware navigation, not text search.

### Drill 2: Finding References (5 min)

Still in the same file, pick any imported name. Press `gr` to see all references.

Neovim opens a picker (Snacks picker from Day 12) showing a list. Each line is a file and a line number where that symbol is referenced. Navigate through the list with `j`/`k` and press Enter to jump to a reference.

**Goal:** Use `gr` on 2 symbols and explore at least 2 references each.

**Expected outcome:** You realize `gr` is how you understand code impact — "what breaks if I change this?"

### Drill 3: Hover Documentation (5 min)

Position your cursor on any identifier (variable, function, type). Press `K`.

A floating window appears showing the symbol's type or JSDoc comment. If nothing appears, the language server might not have docs for that symbol (which is fine).

**Goal:** Press `K` on 5 different symbols. Read what's shown. One should have meaningful documentation.

**Expected outcome:** `K` becomes your reflexive "what is this?" command. You no longer need to hunt for documentation.

---

## Build: TypeScript Type System

### What You're Building

Today you'll create the type system that describes the course data: what is a Day? What is an Exercise? What is a Challenge? You'll write TypeScript interfaces, and as you write them, you'll use LSP features to jump between related types, hover to see definitions, and verify everything is correct using the type system itself.

By the end, your `app/src/lib/types.ts` will be the single source of truth for all course data shapes. The app will use these types to ensure data consistency.

### Step-by-Step

#### Step 1: Create the types file

In Neovim (in the `app` directory):

```bash
nvim src/lib/types.ts
```

If the file doesn't exist, Neovim will create it. If `src/lib/` doesn't exist, create the directory first:

```bash
mkdir -p app/src/lib
```

#### Step 2: Define the Day interface

Start with the simplest type: a Day represents a single lesson. Based on the MDX frontmatter you've seen (day, title, phase, etc.), write:

```typescript
export interface Day {
  day: number;
  title: string;
  phase: 1 | 2 | 3 | 4;
  summary: string;
  vim_skills: string[];
  plugin_focus: string | null;
  app_milestone: string;
  estimated_time: string;
  prerequisites: string[];
}
```

Type this out by hand. Use `i` to enter insert mode, then type each field. When you're done, press Escape.

#### Step 3: Define the Exercise interface

Below the Day interface, add:

```typescript
export interface Exercise {
  title: string;
  description: string;
  skills: string[];
  estimated_time: string;
}
```

#### Step 4: Define the Challenge interface

Add the full Challenge type:

```typescript
export interface Challenge {
  id: string;
  week: 1 | 2 | 3 | 4;
  day: number;
  title: string;
  type: "editing" | "navigation" | "refactoring" | "speed";
  description: string;
  startingCode: string;
  expectedCode: string;
  optimalKeystrokes: number;
  hints: string[];
  skills: string[];
}
```

#### Step 5: Use LSP to verify your types

Now that you've written the interfaces, use LSP to understand them better:

1. Position your cursor on the word `Day` in the interface definition (the first `Day` in `interface Day`). Press `gd`. It should jump to the interface declaration (the line you're on or nearby). This confirms LSP sees the definition.

2. Position your cursor on `string` (the type used in several fields). Press `K`. You'll see that `string` is a built-in TypeScript type. LSP shows its definition.

3. Position your cursor on `exercise` in `Exercise`. Press `gy` to see its type definition.

#### Step 6: Save and verify

Press Escape to exit insert mode. Type `:w` and Enter to save.

Open another terminal and run TypeScript check:

```bash
cd app
npm run typecheck
```

(If there's no typecheck script, you can use `npx tsc --noEmit` to check types without building.)

If there are errors, LSP will have shown them. Fix any syntax errors and save again.

#### Step 7: Create a test usage file

Create `app/src/lib/sample-data.ts` to test your types:

```bash
nvim app/src/lib/sample-data.ts
```

Import your types and create sample data:

```typescript
import type { Day, Exercise, Challenge } from './types';

export const sampleDay: Day = {
  day: 1,
  title: "The First Keystrokes",
  phase: 1,
  summary: "Learn hjkl movement",
  vim_skills: ["h", "j", "k", "l", "w", "b"],
  plugin_focus: null,
  app_milestone: "Project scaffold",
  estimated_time: "45-60 min",
  prerequisites: [],
};

export const sampleExercise: Exercise = {
  title: "hjkl Gauntlet",
  description: "Navigate using only hjkl",
  skills: ["h", "j", "k", "l"],
  estimated_time: "5 min",
};

export const sampleChallenge: Challenge = {
  id: "day-15-lsp-jump",
  week: 3,
  day: 15,
  title: "LSP Navigation Sprint",
  type: "navigation",
  description: "Jump to 10 definitions using gd",
  startingCode: "",
  expectedCode: "",
  optimalKeystrokes: 20,
  hints: ["Use gd to jump", "Open multiple files"],
  skills: ["gd", "gr"],
};
```

As you type, LSP will help you:
- When you type `Day`, Neovim auto-completes to `type Day` (showing it's a type from your file)
- When you assign fields, Neovim checks the types — if you put a number where a string is expected, it shows an error
- If you hover with `K` over `type`, LSP shows you that keyword's meaning

#### Step 8: Rename a type using <leader>cr

Now that you have types defined, practice renaming. Position your cursor on the word `Challenge` in `interface Challenge`. Press `<leader>cr`. Type a new name (e.g., `Exercise2`, then immediately undo with `u` and go back to `Challenge`).

The point is to see that `<leader>cr` would rename every occurrence of `Challenge` in your project, not just this one.

#### Step 9: Commit

```bash
git add app/src/lib/types.ts app/src/lib/sample-data.ts
git commit -m "day-15: add typescript types and interfaces"
```

### Stretch Goal

If you finish early:

1. Add more fields to the Challenge type — maybe a `tags` array for categorization, or a `difficulty` level (easy/medium/hard).
2. Create a `ContentCollection` interface that describes the structure of all course content.
3. Use `<leader>ca` to see if TypeScript suggests any quick fixes for your types.

---

## Checkpoint

**Commit message:** `day-15: add typescript types and interfaces`

**Your commit should include:**

- [ ] `app/src/lib/types.ts` — Day, Exercise, Challenge interfaces
- [ ] `app/src/lib/sample-data.ts` — Sample data using the types (verifies types are correct)

**Validation**

Before committing, verify:
1. `cd app && npm run typecheck` (or `npx tsc --noEmit`) passes with no errors
2. You used `gd` to jump to at least one type definition
3. You used `K` to hover over at least one symbol
4. You used `<leader>cr` to rename at least one symbol

**Self-Check**

- [ ] I understand what LSP does and why it's useful
- [ ] I can jump to a definition with `gd`
- [ ] I can see all references to a symbol with `gr`
- [ ] I can hover on any symbol with `K` to see its type
- [ ] I can rename a symbol everywhere it's used with `<leader>cr`
- [ ] My TypeScript types are correct and pass type checking
- [ ] I created sample data that validates my types

---

## Today's Score

- [ ] I pressed `gd` and jumped to 3+ definitions
- [ ] I pressed `gr` and saw references for 2+ symbols
- [ ] I pressed `K` and read documentation for 5+ symbols
- [ ] I wrote TypeScript interfaces for Day, Exercise, and Challenge
- [ ] I used `<leader>cr` to rename a symbol
- [ ] Type checking passes with no errors
- [ ] I understand the mental model: code as a graph of meanings, LSP as the navigator

**Reflection:** How does LSP change the way you think about refactoring? When you need to rename something, you used to search-and-replace text. Now you can rename symbols with semantic understanding. What fears did that resolve?

---

**Day 15 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 16: Diagnostics & Notifications →](../day-16/index.md)
