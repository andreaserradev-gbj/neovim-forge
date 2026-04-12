---
day: 2
title: "Enter and Exit"
phase: 1
summary: "Master all insert modes and undo/redo — the discipline of staying in Normal mode"
vim_skills: ["i", "a", "I", "A", "o", "O", "Escape", "u", "Ctrl-r", "U"]
plugin_focus: null
app_milestone: "Base layout component (Base.astro), MDX rendering pipeline setup"
estimated_time: "45-60 min"
prerequisites: ["day-01"]
---

[← Day 1: The First Keystrokes](../day-01/index.md) | [Course Index](../../COURSE.md) | [Day 3: The Operator Grammar →](../day-03/index.md)


## Today's Vim Skills

### The Insert Mode Discipline

Yesterday you moved without touching the mouse. Today you learn the most important discipline in Vim: **spend minimal time in insert mode.**

This sounds backwards. Isn't insert mode where you do work? Yes. But the secret is that you *choose precisely when to enter and exit insert mode*. You don't drift in and out of insert mode. You make a surgical decision: "I need to insert text here, at this exact position." You enter insert mode, type your text, and exit immediately.

This discipline separates people who use Vim from people who *fly* on Vim.

The six ways to enter insert mode are each suited to a specific situation:

- `i` — insert **i**mmediately before the cursor
- `a` — insert **a**fter the cursor
- `I` — insert at the **I**ndentation (first non-blank character of the line)
- `A` — insert at the end of the line (**A**ppend at end)
- `o` — open a new line below and insert
- `O` — open a new line above and insert

Each one positions your cursor in the exact place you need to start typing. This means less cursor movement once you're in insert mode. In and out.

### Insert Modes in Detail

#### `i` — Insert Before Cursor

Press `i` to enter insert mode with the cursor at its current position. Type. The text appears before the cursor.

**When to use:** You're sitting on a character that you want to precede with text. For example, your cursor is on the `s` in `string` and you want to add `my` before it, making it `mystring`.

```
Before: my[cursor]string
Press i, type "my"
After: my[cursor]mystring
```

#### `a` — Append After Cursor

Press `a` to move the cursor one character to the right and enter insert mode. Text inserted will appear after the character the cursor was on.

**When to use:** You want to add text after the current character. Your cursor is on `g` in `string` and you want to add `s` to make it `strings`.

```
Before: strin[cursor]g
Press a, type "s"
After: strings[cursor]
```

**The difference between `i` and `a` in practice:** If you're on a character and want to add before it, use `i`. If you want to add after it, use `a`. Muscle memory: `i` is before, `a` is after (and yes, `a` comes after `i` alphabetically).

#### `I` — Insert at Beginning of Line (First Non-Blank)

Press `I` (capital i, which is Shift+i) to jump to the first non-blank character on the current line and enter insert mode.

**When to use:** You want to add something at the logical start of a line (ignoring indentation). Your cursor is somewhere in the middle of an indented line: `    hello = world`. You press `I` and the cursor jumps to the `h` in `hello`. You can now type something before it, like a comment marker.

```
Before:     [cursor in middle]hello = world
Press I
After:     [cursor at first char]hello = world
Type "// "
Result:     // hello = world
```

This is incredibly useful for code: adding comment markers, adding type annotations before code blocks, adding decorators before function definitions.

#### `A` — Append at End of Line

Press `A` (capital a) to jump to the end of the current line and enter insert mode.

**When to use:** You're anywhere on a line and want to add something at the end. Don't use `$` then `a`. Use `A` directly. It's one keystroke instead of two.

```
Before: hello = world[cursor in middle]
Press A
After: hello = world[cursor at end]
Type ";"
Result: hello = world;
```

#### `o` — Open New Line Below

Press `o` to create a new line below the current line and enter insert mode on that new line, at the proper indentation level.

**When to use:** You want to add a new line of code below the current line. This is the most common insert operation. Your cursor is anywhere on line 5. Press `o`. A new line 6 is created, and your cursor is at the indentation level of line 5.

```
Before:
    function hello() {
        console.log("hi")[cursor in middle]
    }

Press o
After:
    function hello() {
        console.log("hi")
        [cursor with proper indent]
    }

Type: console.log("bye")
Result:
    function hello() {
        console.log("hi")
        console.log("bye")[cursor]
    }
```

Vim matches the indentation of the line you came from. This saves you from manually adding spaces or tabs.

#### `O` — Open New Line Above

Press `O` (capital o) to create a new line above the current line and enter insert mode.

**When to use:** Less common than `o`, but useful when you realize you need to add something before the current line. Your cursor is on a function definition line and you want to add a docstring or decorator above it.

```
Before:
        def hello():
            pass

Press O
After:
        [cursor with indent]
        def hello():
            pass

Type: """My docstring"""
Result:
        """My docstring"""
        def hello():
            pass
```

### Exiting Insert Mode: The Critical Habit

You've entered insert mode. You've typed your text. Now **exit immediately**.

The standard way: press **Escape** (top-left corner of your keyboard, far from home row).

The Corne way: press **J+K simultaneously** (right index and middle, right home row). No corner reach. Instant return to normal mode.

**Why exiting matters:** In normal mode, every keystroke is a command. You navigate, delete, copy, paste, repeat actions with the dot command. In insert mode, keystrokes go into the buffer. You're typing, not commanding. The faster you exit, the faster you get back to commanding.

This is the discipline: enter for a reason, exit immediately. Not "enter and stay in for a while." Surgical and brief.

### Undo and Redo: Vim's Undo Tree

Vim's undo system is more powerful than most editors. Most editors have linear undo: undo, undo, undo. Then you do something new, and all your undone changes are gone forever.

Vim has an **undo tree**. Every change you make is a node. Undo branches. You can navigate the tree and recover anything you ever typed.

#### `u` — Undo

Press `u` to undo the last change.

**Important:** In Vim, a "change" is the entire text you typed in one insert session. You enter insert mode, type ten words, exit. That's one change. You press `u` once, and all ten words vanish.

This is different from character-by-character undo in most apps.

#### `Ctrl-r` — Redo

Press `Ctrl-r` to redo the last undone change.

#### `U` — Line Undo

Press `U` (capital u) to undo all changes on the current line. This is a legacy feature (undo used to be per-line). Modern editors don't have this, but Vim kept it for compatibility. Use `u` instead.

### Key Bindings Summary

| Binding | Effect | Notes |
|---------|--------|-------|
| `i` | Insert before cursor | Cursor stays on same character |
| `a` | Insert after cursor | Cursor moves one character right |
| `I` | Insert at line start (first non-blank) | Shift+i, jumps to indentation |
| `A` | Insert at line end | Shift+a, jumps to end of line |
| `o` | Open new line below | Creates new line, proper indent |
| `O` | Open new line above | Shift+o, same indent as current |
| `Escape` | Exit insert mode | Top-left corner, slow but standard |
| `J+K` | Exit insert mode (Corne only) | Home row combo, no reach |
| `u` | Undo | Undoes one insert session or command |
| `Ctrl-r` | Redo | Redoes the last undone change |
| `U` | Undo all on line (legacy) | Use `u` instead in modern workflow |

### Mental Model: Position Before Insert

Here's the principle that separates good Vim users from great ones:

**In normal mode, position your cursor exactly where you need to start typing. Only then enter insert mode.**

Don't enter insert mode and then navigate inside insert mode. That's slow and breaks your flow.

For example:
- If you need to add text before a word, navigate to that word in normal mode, then press `i`.
- If you need to add a line of code below the current line, press `o` (which creates the line *and* enters insert mode at the right indent).
- If you need to add something at the end of the line, press `A` rather than `$` then `a`.

The goal: every keystroke is intentional. Movement in normal mode (with `hjkl`, `w`, etc.), typing in insert mode, and exit immediately to get back to commanding.

---

## Drills

### Drill 1: Insert Mode Entry Points (5 min)

Open `app/src/pages/index.astro` in Neovim.

**Task 1:** Find the `<h1>` tag you created on Day 1 (use `f<` or search).

1. Position your cursor on the opening `<` of `<h1>`.
2. Press `i`. The cursor should remain on the `<`, and you should be in insert mode (check the status bar—it should say `-- INSERT --`).
3. Type a character (any character—it will appear before the `<`). You've inserted before the cursor.
4. Press Escape to exit.
5. Undo with `u`. The character should vanish. (Redo with `Ctrl-r` to bring it back.)

**Task 2:** Now position your cursor on the same `<` again.

1. Press `a`. The cursor should move one character to the right (onto the `h` of `h1`), and you're in insert mode.
2. Type a space. It should appear after the `<`.
3. Press Escape. Undo.

**Task 3:** Find the closing `</h1>` tag.

1. Navigate your cursor inside the `1` of the closing `</h1>`.
2. Press `A`. The cursor should jump to the end of the line (after the `>`), and you should be in insert mode.
3. Type a comment (e.g., ` <!-- day 1 -->`).
4. Press Escape. Verify it appears at the end of the line.

**Expected outcome:** You understand the difference between `i` (before), `a` (after), and `A` (line end). You're comfortable entering and exiting insert mode.

### Drill 2: The Open Line (o and O) (5 min)

**Setup:** Stay in `app/src/pages/index.astro`.

1. Find the line with your `<h1>` tag.
2. Position your cursor anywhere on that line (doesn't matter where—`o` and `O` jump to the line start anyway, with proper indent).
3. Press `o`. A new line appears below the `<h1>` line, with your cursor at the indentation level of the `<h1>` line.
4. Type: `<p>Welcome to Neovim Forge.</p>`
5. Press Escape.

Now your HTML structure has both a heading and a paragraph.

**Challenge:** Without using `o` or `O`, would you have done this differently? You would have navigated to the end of the `<h1>` line with `$` or `A`, pressed Escape to exit insert mode, then created a new line with `:new` or something. Three steps. Using `o`, it's one keystroke plus your text.

**Expected outcome:** You see the power of `o`. It's not just "open a new line." It's "open a new line at the right indentation, ready to type." You'll use `o` dozens of times a day when coding.

### Drill 3: Undo and Redo Workflow (5 min)

**Setup:** Stay in the same file.

1. Position your cursor anywhere and press `o` to open a new line.
2. Type a sentence: `This is a temporary line that I will undo.`
3. Press Escape.
4. Now press `u`. The entire sentence should vanish. That's undo.
5. Press `u` again (if there's something to undo before that insert). You're rewinding through your changes.
6. Press `Ctrl-r`. The sentence comes back. You've redone.
7. Do this a few times: undo a change, redo it, undo it again. Get comfortable with the rhythm.

**Expected outcome:** Undo and redo feel natural. You realize you can fearlessly type, then undo if you don't like it.

---

## Build: Base Layout Component and MDX Pipeline

### What You're Building

Today you'll create two critical pieces:

1. **Base.astro** — A layout component that wraps all pages with consistent HTML structure, head, meta tags, and body.
2. **MDX rendering** — Set up Astro's content collection to render the course MDX files.

By the end, your homepage and day pages will use a shared layout, and all 30 course days will be accessible and renderable.

### Step-by-Step

#### Step 1: Create the Base Layout

In your Neovim instance (or a new terminal), navigate to create a new file at `app/src/layouts/Base.astro`:

```bash
nvim app/src/layouts/Base.astro
```

Neovim will create the file for you. Now enter insert mode and type the structure. Use `o` to open new lines and proper indentation.

**Here's the full Base.astro layout:**

```astro
---
import type { AstroComponentFactory } from 'astro';

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
    <slot />
  </body>
</html>
```

**Build instructions:** Do NOT copy-paste. Use these vim motions:

1. Start with `nvim app/src/layouts/Base.astro`.
2. You're in normal mode (empty file). Press `i` to enter insert mode.
3. Type the code, or use these guides:
   - Press `o` to create a new line when needed (inside HTML tags, for example)
   - Use `I` to indent properly (Shift+i, jump to line start, add indent)
   - Press Escape frequently to exit insert mode and navigate
4. Once the full file is entered, press Escape and save with `:w`.

If you know vim well enough, you can also:
- Copy the code from this lesson (visually select with `v`, yank with `y`, paste with `p`)
- But try to type it manually—that's the skill practice

#### Step 2: Update index.astro to Use the Layout

Open `app/src/pages/index.astro`:

```bash
nvim app/src/pages/index.astro
```

At the very top of the file (after any YAML frontmatter if present), add:

```astro
---
import Base from '../layouts/Base.astro';
---
```

Then, wrap your existing HTML content with the Base layout. Use vim motions:

1. Navigate to the opening `<html>` tag with `gg` and `f<`.
2. Delete the `<!DOCTYPE>` and `<html>` lines using `dj` (delete current line and next line).
3. Similarly, delete the closing `</html>` tag at the bottom using `G` (go to bottom) and `dd` (delete line).
4. Delete the `<head>` section entirely since Base.astro handles it.

Now your index.astro should look like:

```astro
---
import Base from '../layouts/Base.astro';
---

<Base title="Neovim Forge">
  <h1>Neovim Forge - Day 1</h1>
  <p>Welcome. Today you unlearn the mouse.</p>
  <a href="/day/1/">Start Lesson</a>
</Base>
```

**Vim motions for this:**
- `gg` to go to top
- `dj` to delete current line and the next (delete is Day 3, but this is a preview—we'll formalize it tomorrow)
- `dd` to delete current line
- `i` to insert the import statement

#### Step 3: Set Up the Content Collection

Create `app/src/content/config.ts`:

```bash
nvim app/src/content/config.ts
```

**File content:**

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const course = defineCollection({
  loader: glob({ pattern: '*/index.md', base: '../course' }),
  schema: z.object({
    day: z.number(),
    title: z.string(),
    phase: z.number(),
    summary: z.string(),
    vim_skills: z.array(z.string()),
    plugin_focus: z.string().nullable(),
    app_milestone: z.string(),
    estimated_time: z.string(),
    prerequisites: z.array(z.string()).optional(),
  }),
});

export const collections = {
  course,
};
```

This tells Astro how to structure course data. The `glob` loader pulls content from the `course/` directory at the repository root, loading only the `index.md` files (not exercises or companion files).

#### Step 4: Create the Day Page Template

Create `app/src/pages/day/[slug].astro`:

```bash
mkdir -p app/src/pages/day
nvim app/src/pages/day/[slug].astro
```

**File content:**

```astro
---
import { getCollection, render } from 'astro:content';
import Base from '../../layouts/Base.astro';

export async function getStaticPaths() {
  const courseEntries = await getCollection('course');
  return courseEntries.map(entry => ({
    params: { slug: `day-${String(entry.data.day).padStart(2, '0')}` },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await render(entry);
---

<Base title={entry.data.title} description={entry.data.summary}>
  <article>
    <h1>{entry.data.title}</h1>
    <p>{entry.data.summary}</p>
    <Content />
  </article>
</Base>
```

This creates dynamic pages for each day's lesson.

#### Step 5: Test the Build

In your terminal, run:

```bash
cd app
npm run dev
```

Navigate to `localhost:4321`. You should see your homepage with the Day 1 content using the Base layout.

Click on or navigate to `/day/day-01` to see if the day page renders (you may need to adjust the URL if Astro routes differently).

#### Step 6: Commit Your Work

```bash
git add app/src/layouts/Base.astro app/src/pages/index.astro app/src/content/config.ts app/src/pages/day/
git commit -m "day-02: add base layout component and mdx pipeline"
```

### Stretch Goal

If you finish early:

1. Create a simple navbar component (`app/src/components/Nav.astro`) that appears in the Base layout.
2. Add a link in the navbar back to the homepage.
3. Add a simple footer component.
4. Use `I` to add comments at the top of Base.astro explaining what each section does.

---

## Checkpoint

**Commit message:** `day-02: add base layout component and mdx pipeline`

**Your commit should include:**
- [ ] `app/src/layouts/Base.astro` — HTML shell with meta tags, head, body
- [ ] `app/src/pages/index.astro` — Updated to use Base layout
- [ ] `app/src/content/config.ts` — Astro content collection schema for course data
- [ ] `app/src/pages/day/[slug].astro` — Dynamic day page template

**Validation:**

The CI will check:
- [ ] All files exist with valid TypeScript/Astro syntax
- [ ] `app/src/layouts/Base.astro` contains `<!DOCTYPE html>` and `<slot />`
- [ ] `app/src/pages/day/[slug].astro` uses `getStaticPaths` and `getCollection`
- [ ] No build errors: `npm run build` succeeds

**Self-Check:**

Before committing:
1. `npm run dev` starts without errors
2. `localhost:4321` displays your homepage
3. Navigating to `/day/day-01` renders the Day 1 lesson content
4. All edits were made using vim insert modes (`i`, `a`, `I`, `A`, `o`, `O`)
5. You exited insert mode with Escape (or J+K if on Corne)

---

## Today's Score

Track your progress:

- [ ] I can enter insert mode before the cursor with `i`
- [ ] I can append text after the cursor with `a`
- [ ] I can insert at the beginning of a line with `I`
- [ ] I can append at the end of a line with `A`
- [ ] I can open a new line below with `o`
- [ ] I can open a new line above with `O`
- [ ] I know when to use each insert mode (i vs a vs I vs A vs o vs O)
- [ ] I can undo a change with `u` and redo with `Ctrl-r`
- [ ] I exit insert mode immediately after typing (no drifting)
- [ ] I built the Base layout and set up the MDX pipeline
- [ ] The day page renders course content correctly

**Reflection:** Which insert mode did you use most today? Do you see yourself using `o` constantly when coding? That's the sign of good vim discipline—you enter, you type, you exit, you move to the next location.

---

**Day 2 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 3: The Operator Grammar →](../day-03/index.md)
