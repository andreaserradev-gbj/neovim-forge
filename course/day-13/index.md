---
day: 13
title: "Surround & Transform"
phase: 2
summary: "Add, delete, and change surrounding pairs of characters instantly"
vim_skills: ["sa", "sd", "sr", "sf/sF", "sh", "surround targets", "mini.surround"]
plugin_focus: "mini.surround"
app_milestone: "MDX component library with callouts and key combo display"
estimated_time: "55-70 min"
prerequisites: ["day-12"]
---

[← Day 12: Find Everything](../day-12/index.md) | [Course Index](../../COURSE.md) | [Day 14: Week 2 Review & Interactive Vim Cheatsheet →](../day-14/index.md)


## Today's Vim Skills

### The Surround Concept

Surround is a plugin that lets you manipulate pairs of characters (quotes, brackets, tags, etc.) instantly. Instead of manually deleting and retyping pairs, you use motions to change what's around your text.

Examples:
- Change `"hello"` to `'hello'` (swap quotes)
- Change `(function)` to `[function]` (swap brackets)
- Add quotes around a word: `hello` → `"hello"`
- Delete brackets: `[content]` → `content`

### Surround Motions

**`sa{motion}{char}` — add surround**

Add a character pair around a motion. `saiw"` means "add quotes around the inner word."

**`sd{char}` — delete surround**

Delete the specified character pair. `sd"` means "delete surrounding quotes."

**`sr{old}{new}` — replace surround**

Change one character pair to another. `sr")` means "replace surrounding parens with closing paren (making it a new type)."

**`sf{char}` / `sF{char}` — find surround**

Jump to the next/previous occurrence of a surrounding character pair. `sf"` finds the next quoted string.

**`sh{char}` — highlight surround**

Highlight the surrounding pair. `sh"` highlights the surrounding quotes.

### Surround Targets

These are the character pairs you can surround with:

- `(` `)` — parentheses
- `[` `]` — brackets
- `{` `}` — braces
- `<` `>` — angle brackets
- `"` — double quotes
- `'` — single quotes
- `` ` `` — backticks
- `t` — XML/HTML tags
- `f` — function calls

### Examples

| Operation | Command | Effect |
|-----------|---------|--------|
| Add quotes around word | `saiw"` | `hello` → `"hello"` |
| Delete surrounding quotes | `sd"` | `"hello"` → `hello` |
| Change parens to brackets | `sr(]` | `(hello)` → `[hello]` |
| Add function call | `saiw)` | `myFunc` → `myFunc()` |
| Change single to double quotes | `sr'"` | `'hello'` → `"hello"` |

### Mental Model: Pairs as Modifiable Units

Surround transforms how you think about text:

Instead of: "I need to delete these quotes"
Think: "I need to delete the surrounding quotes" → `sd"`

Instead of: "I need to add brackets around this"
Think: "I need to add surround brackets" → `sa{motion}[`

Pairs become first-class editing targets, not incidental characters.

---

## Drills

### Drill 1: Add Surround (3 min)

1. Open any text file
2. Place your cursor on a word
3. Press `saiw"` (add surround inner word with quotes)
4. The word is now quoted
5. Try other targets: `saiw)`, `saiw]`, `saiw}`
6. Try different motions: `saw"` (surround a word, not just inner), `sa2w[` (surround 2 words)

**Expected outcome:** Adding surround feels natural. You're expressing the shape you want.

### Drill 2: Delete Surround (3 min)

1. Find a quoted string or bracketed expression
2. Position cursor inside it
3. Press `sd"` to delete quotes, `sd(` to delete parens, etc.
4. The pair disappears, content remains
5. Repeat with different characters: `sd[`, `sd)`, `sd>`

**Expected outcome:** Deleting surround is instant. No need to manually delete both characters.

### Drill 3: Replace Surround (3 min)

1. Find a quoted string: `"hello"`
2. Position cursor inside
3. Press `sr'"` (replace single quote with double)
   - Actually: the string is already double-quoted, so try `sr"'` (replace double with single)
4. The quotes change
5. Try other replacements: `sr([`, `sr{)`, `sr<>`

**Expected outcome:** You can change any pair to any other pair instantly.

### Drill 4: Complex Surround Operations (5 min)

Combine surround with other operations:

1. Find a function call: `myFunc(arg1, arg2)`
2. You want to change it to `myFunc([arg1, arg2])`
3. Position inside the parens and press `sr()` (replace parens with brackets)
4. Done

This shows how surround composes with your intent.

---

## Build: MDX Component Library

### What You're Building

Reusable Astro components for common course elements:
- **Callout:** tip, warning, note boxes
- **KeyCombo:** visual display of keyboard shortcuts
- **Code block enhancements:** better formatting

### Step-by-Step

#### Step 1: Callout Component

Create `app/src/components/Callout.astro`:

```astro
---
interface Props {
  type: "tip" | "warning" | "note" | "info";
  title?: string;
}

const { type, title } = Astro.props;
const icons = {
  tip: "💡",
  warning: "⚠️",
  note: "📝",
  info: "ℹ️",
};
---

<aside class={`callout callout-${type}`}>
  <div class="callout-header">
    <span class="icon">{icons[type]}</span>
    <strong>{title || type.toUpperCase()}</strong>
  </div>
  <div class="callout-content">
    <slot />
  </div>
</aside>

<style>
  .callout {
    padding: 1rem;
    border-radius: 6px;
    border-left: 4px solid;
    margin: 1.5rem 0;
  }

  .callout-tip {
    background: var(--color-tip-bg);
    border-color: var(--color-tip-border);
  }

  .callout-warning {
    background: var(--color-warning-bg);
    border-color: var(--color-warning-border);
  }

  .callout-note {
    background: var(--color-note-bg);
    border-color: var(--color-note-border);
  }

  .callout-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .icon {
    font-size: 1.2rem;
  }
</style>
```

#### Step 2: KeyCombo Component

Create `app/src/components/KeyCombo.astro`:

```astro
---
interface Props {
  keys: string;
  description?: string;
}

const { keys, description } = Astro.props;
const keyList = keys.split("+").map((k) => k.trim());
---

<span class="key-combo" title={description}>
  {
    keyList.map((key, idx) => (
      <>
        <kbd>{key}</kbd>
        {idx < keyList.length - 1 && <span class="plus">+</span>}
      </>
    ))
  }
  {description && <span class="description">{description}</span>}
</span>

<style>
  .key-combo {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-family: monospace;
  }

  kbd {
    background: var(--color-kbd-bg);
    border: 1px solid var(--color-kbd-border);
    border-radius: 3px;
    padding: 0.25rem 0.5rem;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .plus {
    margin: 0 0.25rem;
    color: var(--color-text-secondary);
  }

  .description {
    margin-left: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
</style>
```

#### Step 3: Update MDX Config

Create `app/src/lib/mdx.ts` to register components:

```typescript
import Callout from "../components/Callout.astro";
import KeyCombo from "../components/KeyCombo.astro";

export const mdxComponents = {
  Callout,
  KeyCombo,
};
```

#### Step 4: Use Components in Course Content

Update course MDX files to use components:

```mdx
<Callout type="tip" title="Pro Tip">
  Use the surround motion `sa` to add pairs instantly.
</Callout>

To navigate windows, use <KeyCombo keys="Ctrl+h" description="Focus left window" />.
```

---

## Checkpoint

**Commit message:** `day-13: add mdx component library with callouts and key combos`

**Your commit should include:**

- [ ] `app/src/components/Callout.astro`
- [ ] `app/src/components/KeyCombo.astro`
- [ ] Updated course MDX files using the components (at least 3 examples)

**Validation**

- [ ] Components render without errors
- [ ] Callouts display with correct colors and icons
- [ ] KeyCombo displays keyboard shortcuts correctly
- [ ] Components look good in browser
- [ ] No TypeScript errors

**Self-Check**

1. Used `sa` to add surround pairs around motions
2. Used `sd` to delete surround pairs
3. Used `sr` to replace surround pairs
4. Made all edits using vim motions

---

## Today's Score

- [ ] I used `saiw"` to add quotes around a word
- [ ] I used `sd"` to delete surrounding quotes
- [ ] I used `sr')` to change parens to brackets
- [ ] I understand surround targets (parentheses, brackets, quotes, tags)
- [ ] I created the Callout component for MDX
- [ ] I created the KeyCombo component for displaying shortcuts
- [ ] The app now has an extensible component library

**Reflection:** How does surround change your editing workflow? When would you use it vs. manual deletion?

---

**Day 13 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 14: Week 2 Review & Interactive Vim Cheatsheet →](../day-14/index.md)
