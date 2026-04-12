---
day: 3
title: "The Operator Grammar"
phase: 1
summary: "Master the operator + motion grammar — the core insight of Vim's power"
vim_skills: ["d", "c", "y", "p", "P", "dw", "d$", "cw", "c$", "yy", "dd", "D", "C", "{count}d", ".", "3dw", "5j"]
plugin_focus: null
app_milestone: "Content collection schema finalization, day listing page showing all 30 days"
estimated_time: "45-60 min"
prerequisites: ["day-02"]
---

[← Day 2: Enter and Exit](../day-02/index.md) | [Course Index](../../COURSE.md) | [Day 4: Text Objects →](../day-04/index.md)


## Today's Vim Skills

### The Grammar: Operator + Motion = Action

This is the moment where Vim stops being a collection of tricks and starts being a *language*.

Until now, you've learned:
- **Motions:** hjkl, w/b/e, 0/$/^, gg/G, f/F/t/T
- **Insert modes:** i/a/I/A/o/O
- **Undo/Redo:** u/Ctrl-r

Motions move your cursor. Insert modes let you type. Undo/Redo manage history.

Today, you learn the thing that makes all those motions useful: **operators**. Operators act *on* motions.

The grammar is:

```
{operator}{count?}{motion}
```

This reads as: "Apply operator to count repetitions of motion."

For example:
- `dw` — delete the next word
- `d5w` — delete the next 5 words
- `d$` — delete to the end of line
- `cw` — change (delete and enter insert mode) the next word
- `3dw` — delete 3 words

Each combination is a command that transforms your text. And because motions compose with operators, learning a new motion means you instantly know how to delete it, copy it, change it, etc.

### The Operators

There are a few core operators:

#### `d` — Delete

Delete removes text and keeps it in a register (clipboard). You can paste it elsewhere.

- `dw` — delete the next word (starting from cursor position)
- `de` — delete to the end of the current word
- `dd` — delete the entire line
- `d$` — delete to the end of the line
- `dj` — delete this line and the next (down 2 lines total)
- `d5w` — delete the next 5 words

The pattern: `d` followed by any motion.

**Important:** The operator doesn't require you to enter insert mode. You're in normal mode, you delete something, the text vanishes, you're still in normal mode.

#### `c` — Change

Change means: delete the text *and* enter insert mode. You replace the deleted text with new text.

- `cw` — delete the next word and enter insert mode to replace it
- `c$` — delete to end of line and insert
- `cc` — change the entire line (delete it, enter insert mode at proper indent)
- `c5w` — delete 5 words and start typing

**The difference from `d`:** Delete leaves you in normal mode. Change enters insert mode so you can immediately type the replacement.

**In practice:** If you want to delete and leave the text gone, use `d`. If you want to delete and immediately type replacement text, use `c`.

#### `y` — Yank (Copy)

Yank copies text to a register without deleting it. The text stays in the buffer and is copied to your clipboard.

- `yw` — copy the next word
- `y$` — copy to end of line
- `yy` — copy the entire line
- `y5w` — copy the next 5 words

After yanking, you can paste with `p` (paste after cursor) or `P` (paste before cursor).

### Paste: `p` and `P`

After deleting, changing, or yanking, the text is in a register. You can paste it.

- `p` — paste *after* cursor
- `P` — paste *before* cursor

The difference: `p` puts the text after your current position. `P` puts it before.

**Example:**

```
Before: hello world
Cursor is on 'w' in 'world'
Delete the word: dw (now: "hello ")
Move to the end of the line: $
Paste: p (now: "hello world")
```

### Line Operators: `dd`, `cc`, `D`, `C`

Some operators have line-specific shortcuts:

- `dd` — delete the entire line (same as `d^d$` or other combinations, but shorter)
- `cc` — change the entire line (same as `c^c$`)
- `D` — delete from cursor to end of line (same as `d$`)
- `C` — change from cursor to end of line (same as `c$`)

These are shortcuts. They're included because they're so common that a shortcut makes sense.

### Counts: Multiplying Motions

Any motion can be prefixed with a count (a number). The motion repeats that many times.

- `3w` — move 3 words forward
- `5j` — move down 5 lines
- `10l` — move right 10 characters
- `2b` — move back 2 words

**Counts with operators:**

- `3dw` — delete 3 words
- `5dd` — delete 5 lines
- `2yy` — copy 2 lines
- `10d` — delete 10 lines

When you combine a count with an operator and a motion, the count *multiplies the motion*. So `3dw` means: apply delete to the next 3 words.

**Be careful:** The order matters. `d3w` means delete 3 words. `3dw` also means delete 3 words (the count can go before the operator or after, but position matters for clarity).

### The Dot Command: Repetition (`.`)

The dot (`.`) repeats the last change you made. It's one of the most powerful features in Vim.

After you make any change (delete, change, insert, etc.), pressing `.` repeats that exact change at your new cursor position.

**Example:**

```
Before: hello world hello again
Cursor on first 'hello'
Delete it: dw
Result: world hello again

Navigate to the second 'hello': w (or any motion to find it)
Press . (dot)
Result: world again
```

The dot command repeated the `dw` (delete word) operation at the new cursor position.

**Why this is powerful:** Instead of typing `dw` multiple times, you type it once, then press `.` for each repetition. And because you're navigating between repetitions, you're learning the structure of your text at the same time.

### Key Bindings Summary

| Binding | Effect | Notes |
|---------|--------|-------|
| `d{motion}` | Delete motion | e.g., `dw` (word), `d$` (end of line) |
| `dd` | Delete line | Entire line, keeps indentation register |
| `D` | Delete to end of line | Same as `d$` |
| `c{motion}` | Change motion | Delete + enter insert mode, e.g., `cw`, `c$` |
| `cc` | Change line | Delete line + enter insert mode |
| `C` | Change to end of line | Same as `c$` |
| `y{motion}` | Yank (copy) motion | e.g., `yw` (word), `y$` (end of line) |
| `yy` | Yank line | Copy entire line |
| `p` | Paste after cursor | Text from register appears after cursor |
| `P` | Paste before cursor | Text from register appears before cursor |
| `{count}{operator}{motion}` | Operator × count | e.g., `3dw` (delete 3 words) |
| `.` | Repeat last change | Repeats operator+motion at new cursor |

### Mental Model: Composition and Reuse

Here's why this grammar is so powerful:

You learn motions. You learn operators. You learn counts. Then, every combination is *new*.

- Learn `w` (next word). Now you know `dw`, `cw`, `yw`.
- Learn `$` (end of line). Now you know `d$`, `c$`, `y$`.
- Learn `d` (delete). Now you can delete anything: `d3w`, `dj`, `df"`, `d/pattern`, etc.

This is **compositional power**. You're not memorizing `dw`, `cw`, `yw` as separate commands. You understand the pattern: operator + motion. And you apply it everywhere.

The dot command amplifies this. You find a change you like, repeat it with `.` across your document. No retyping.

---

## Drills

### Drill 1: Delete and Yank (5 min)

Open `app/src/pages/index.astro` in Neovim.

**Task 1: Delete words**

1. Navigate to your first paragraph (the welcome text).
2. Find a word you want to delete (e.g., "Welcome").
3. Position your cursor on the first character of that word using `f` or `w`.
4. Press `dw` to delete the word.
5. The word vanishes. Undo with `u`.
6. Try again on a different word. Delete it with `dw`.

**Task 2: Delete to end of line**

1. Find a line with multiple words.
2. Position your cursor in the middle of the line.
3. Press `d$` to delete everything from the cursor to the end of the line.
4. Undo with `u`.
5. Try on a different line.

**Task 3: Delete entire lines**

1. Navigate to a line you want to delete.
2. Press `dd` to delete the entire line.
3. Undo with `u`.
4. Try `D` (same as `d$`, which removes to end of line, not the full line).

**Expected outcome:** You see that delete removes text. The text goes into a register (you can paste it with `p` if you wanted). Motions work: `w` (word), `$` (end of line), no motion needed for line operators.

### Drill 2: Change (5 min)

**Setup:** Stay in the same file.

1. Find a word or phrase you want to change.
2. Position your cursor on the first character.
3. Press `cw` to change the word (delete it, enter insert mode).
4. Type the replacement word.
5. Press Escape to exit insert mode.

**Challenge:** Do this 3 times with different words. Each time, use `cw` to delete and type the replacement.

**Task 2:** Try `c$` (change to end of line).

1. Position your cursor in the middle of a line.
2. Press `c$`.
3. You're in insert mode, and everything from your cursor to the end of the line is deleted. Type new content.
4. Press Escape.

**Expected outcome:** Change is delete + insert mode. You use it when you want to replace text quickly without manually deleting and re-inserting.

### Drill 3: Copy and Paste (5 min)

**Setup:** Stay in the same file.

1. Find a line you want to copy (e.g., the entire `<a>` tag).
2. Position your cursor anywhere on that line.
3. Press `yy` to yank (copy) the line.
4. Navigate to a new location (e.g., below the current location using `o`).
5. Press `p` to paste the line after your current position.
6. The copied line appears. Now you have a duplicate.
7. Press `u` to undo the paste (to clean up for the next task).

**Challenge:** Copy multiple words, not just a line.

1. Position your cursor at the start of a word.
2. Press `y3w` to yank 3 words.
3. Navigate to a new location.
4. Press `p` to paste.
5. The 3 words appear at the new location.

**Expected outcome:** Yank copies without deleting. Paste puts the copied text at your new location.

### Drill 4: The Dot Command (5 min)

**Setup:** Open a file with repeated elements (like your index.astro with multiple lines).

1. Position your cursor on the first word of a sentence.
2. Delete that word: `dw`.
3. Navigate to the first word of the next sentence: `w` several times, or `j` to go down and `0` to go to the start.
4. Press `.` (dot). The word is deleted at the new position.
5. Navigate to another similar position.
6. Press `.` again. Same deletion.

**Understanding:** You didn't type `dw` three times. You typed it once, then pressed `.` twice. This is the power. As you get more skilled, you'll often do a complex operation once, then repeat it with `.` multiple times.

**Expected outcome:** The dot command feels magical. You perform an action, move, and repeat. It's faster than retyping the command.

---

## Build: Content Collection and Day Listing Page

### What You're Building

1. **Finalize the content collection schema** — Make sure it's flexible and includes all data needed for 30 days.
2. **Create a "days" listing page** — A page at `/days` that shows all 30 course days as cards or a table, with links to each day.

By the end, anyone visiting your app can browse all 30 days and click through to any lesson.

### Step-by-Step

#### Step 1: Enhance the Content Collection Schema (Optional)

Your `app/src/content/config.ts` from Day 2 should be solid. If you want to add more fields for future days, do it now.

Open `app/src/content/config.ts`:

```bash
nvim app/src/content/config.ts
```

**Optional enhancements:**

Add fields for:
- `challenges_url` — link to the day's challenge (added later)
- `difficulty` — a rating for the day's difficulty
- `word_count` — estimate of reading time

Update the schema:

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
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    word_count: z.number().optional(),
  }),
});

export const collections = {
  course,
};
```

(If you don't want to add new fields yet, skip this step—the current schema is fine.)

#### Step 2: Create the Days Listing Page

Create a new page `app/src/pages/days.astro`:

```bash
nvim app/src/pages/days.astro
```

**File content:**

```astro
---
import { getCollection } from 'astro:content';
import Base from '../layouts/Base.astro';

const courseEntries = await getCollection('course');
const days = courseEntries.sort((a, b) => a.data.day - b.data.day);
---

<Base title="All Days — Neovim Forge" description="Browse all 30 days of the course">
  <h1>All Days</h1>
  <p>Explore the complete 30-day curriculum. Click any day to start the lesson.</p>
  
  <div class="days-grid">
    {days.map((day) => (
      <div class="day-card">
        <h3>
          <a href={`/day/day-${String(day.data.day).padStart(2, '0')}`}>
            Day {day.data.day}: {day.data.title}
          </a>
        </h3>
        <p class="summary">{day.data.summary}</p>
        <div class="meta">
          <span class="phase">Phase {day.data.phase}</span>
          <span class="time">{day.data.estimated_time}</span>
        </div>
      </div>
    ))}
  </div>
</Base>

<style>
  .days-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .day-card {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1.5rem;
    background: #f9f9f9;
  }
  
  .day-card h3 {
    margin-top: 0;
  }
  
  .day-card h3 a {
    text-decoration: none;
    color: #333;
  }
  
  .day-card h3 a:hover {
    color: #0066cc;
    text-decoration: underline;
  }
  
  .summary {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .meta {
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
    color: #999;
  }
</style>
```

**Build instructions:**

Don't copy-paste. Use vim motions to build this file:

1. Start with `nvim app/src/pages/days.astro`.
2. Use `i` to enter insert mode and type the structure.
3. Use `o` to open new lines within the JSX structure.
4. Use `I` to jump to line indentation and add proper spacing.
5. Use `$` and `A` to add content at the end of lines.
6. Use `.` (dot) to repeat complex insertions if needed.
7. Press Escape frequently to return to normal mode and verify structure.

#### Step 3: Test the Page

Run your dev server:

```bash
cd app
npm run dev
```

Navigate to `localhost:4321/days`. You should see a grid of all course days with:
- Day number and title
- Summary text
- Phase and estimated time

Click on a day link. It should take you to that day's lesson (if the MDX file exists).

#### Step 4: Link to the Days Page from Home

Update `app/src/pages/index.astro` to include a link to the days listing:

Open the file:

```bash
nvim app/src/pages/index.astro
```

Add a link to the days page. Navigate to the end of the body content (use `G` or `$`), then use `o` to open a new line:

```astro
<p>
  <a href="/days">View all 30 days</a>
</p>
```

Use vim motions to position and insert this text.

#### Step 5: Commit

```bash
git add app/src/pages/days.astro app/src/pages/index.astro app/src/content/config.ts
git commit -m "day-03: add content collection and day listing page"
```

### Stretch Goal

If you finish early:

1. Add a "phase" filter to the days page. Show buttons or links for "Phase 1", "Phase 2", etc., and filter the displayed days accordingly.
2. Add a counter showing how many days are in each phase.
3. Create a `/week/{weekNumber}` page that shows days from a specific week.

---

## Checkpoint

**Commit message:** `day-03: add content collection and day listing page`

**Your commit should include:**
- [ ] `app/src/pages/days.astro` — New listing page with day cards
- [ ] `app/src/pages/index.astro` — Updated with link to days page
- [ ] `app/src/content/config.ts` — Optionally enhanced with new fields

**Validation:**

The CI will check:
- [ ] `app/src/pages/days.astro` exists and uses `getCollection`
- [ ] Days are sorted by day number
- [ ] Links to day pages use correct slug format (`/day/day-XX`)
- [ ] No build errors
- [ ] Commit message starts with `day-03:`

**Self-Check:**

1. `npm run dev` builds successfully
2. `localhost:4321/days` displays all days as a grid
3. Clicking a day link navigates to `/day/day-XX`
4. Homepage has a link to the days page
5. All edits used vim operators: `d` for delete, `c` for change, `y` for yank
6. You used `.` (dot) to repeat at least one operation

---

## Today's Score

Track your progress:

- [ ] I can delete a word with `dw`
- [ ] I can delete to the end of a line with `d$`
- [ ] I can delete entire lines with `dd`
- [ ] I can change text with `cw` and `c$`
- [ ] I can copy text with `yy` and `y{motion}`
- [ ] I can paste with `p` (after) and `P` (before)
- [ ] I understand counts and can use `3dw` (delete 3 words)
- [ ] I can use the dot command (`.`) to repeat the last change
- [ ] I understand the composition: operator + motion + count
- [ ] I created the days listing page with all 30 days
- [ ] Homepage links to the days page

**Reflection:**

The operator grammar is the breakthrough moment in Vim. You've gone from "here are some commands" to "here's a compositional system." Every new motion you learn multiplies your power. Which motion are you most excited to combine with operators? (w for words? $ for end of line? f for find?)

---

**Day 3 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 4: Text Objects →](../day-04/index.md)
