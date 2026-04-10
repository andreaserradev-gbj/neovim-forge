---
day: 4
title: "Text Objects"
phase: 1
summary: "Master text objects to select structures — turn Vim into a structural editor"
vim_skills: ["i{object}", "a{object}", "iw", "aw", "iW", "aW", "is", "as", "ip", "ap", "i\"", "a\"", "i'", "a'", "i`", "a`", "i(", "a)", "i[", "a]", "i{", "a}", "i<", "a>", "it", "at", "diw", "ci\"", "ya(", "dap", "mini.ai"]
plugin_focus: "mini.ai"
app_milestone: "Day navigation component (DayNav.astro with prev/next), sidebar component"
estimated_time: "45-60 min"
prerequisites: ["day-03"]
---

[← Day 3: The Operator Grammar](../day-03/index.md) | [Course Index](../../COURSE.md) | [Day 5: Visual Mode & Selection →](../day-05/index.md)


## Today's Vim Skills

### The Breakthrough: From Motion to Structure

Until now, you've used motions to select text: `w` for word, `$` for end of line, `j` for line down. Motions are based on *position*.

Text objects are different. They're based on *structure*.

A text object answers the question: "What is the thing I want to edit?" Not "where is my cursor?"

With motions, you think: "I need to delete from here to the end of the word."

With text objects, you think: "I need to delete this word."

The syntax is: `{operator}{text-object}` or `{operator}i/a{text-object-type}`

Where `i` means "inside" and `a` means "around."

### Inside vs. Around

This is the most important distinction in text objects.

#### `i` — Inside

`i` selects the content *inside* delimiters or structures, but not the delimiters themselves.

- `iw` — inside word (the word content, but not whitespace around it)
- `i"` — inside quotes (the text between quotes, but not the quotes themselves)
- `i(` — inside parentheses (content between parens, but not the parens)
- `i{` — inside braces (content between braces, but not the braces)
- `ip` — inside paragraph (all lines in the paragraph, but not the blank line after)

#### `a` — Around

`a` selects the content *and* the delimiters or structures.

- `aw` — around word (the word plus trailing whitespace)
- `a"` — around quotes (the text AND the quotes themselves)
- `a(` — around parentheses (content AND the parens)
- `a{` — around braces (content AND the braces)
- `ap` — around paragraph (all lines in the paragraph, plus the blank line after)

### Examples in Context

#### `iw` vs `aw`

```
Text: hello world

Cursor on 'h' in hello.

Delete with diw: "hello" is deleted, "world" remains. Space remains.
Result: world

Delete with daw: "hello " (with trailing space) is deleted.
Result: world
```

**When to use:** If you want to delete a word and not leave an extra space, use `daw`. If you want to delete the word but keep the spacing structure, use `diw`.

#### `i"` vs `a"`

```
Text: say "hello world" to me

Cursor anywhere inside the quotes.

Delete with di": "hello world" is deleted, quotes remain.
Result: say "" to me

Delete with da": the entire quoted phrase including quotes is deleted.
Result: say to me
```

#### `i(` vs `a)`

```
Text: call(argument)

Cursor inside the parens.

Delete with di(: "argument" is deleted, parens remain.
Result: call()

Delete with da(: the entire thing including parens is deleted.
Result: call
```

### Core Text Objects

| Text Object | What It Selects | Inside | Around |
|-------------|-----------------|--------|--------|
| `w` | Word (word boundary) | `iw` | `aw` |
| `W` | WORD (whitespace boundary) | `iW` | `aW` |
| `s` | Sentence | `is` | `as` |
| `p` | Paragraph | `ip` | `ap` |
| `"` | Double-quoted string | `i"` | `a"` |
| `'` | Single-quoted string | `i'` | `a'` |
| `` ` `` | Backtick-quoted string | ``i` `` | ``a` `` |
| `(` / `)` | Parentheses | `i(` | `a)` |
| `[` / `]` | Brackets | `i[` | `a]` |
| `{` / `}` | Braces | `i{` | `a}` |
| `<` / `>` | Angle brackets | `i<` | `a>` |
| `t` | Tags (HTML/XML) | `it` | `at` |

The delimiters (parentheses, brackets, quotes) can be reached from either direction. `i(` and `i)` do the same thing: select inside parentheses. Vim figures it out.

### Text Objects + Operators = Structural Editing

Remember the operator grammar: `{operator}{motion}`.

Now, text objects fill the motion slot.

- `diw` — **d**elete **i**nside **w**ord
- `ci"` — **c**hange **i**nside **"**uotes
- `ya(` — **y**ank **a**round **(** parentheses
- `dap` — **d**elete **a**round **p**aragraph
- `ca}` — **c**hange **a**round **}** braces

Each one is surgical. You're not deleting "from here to there." You're deleting "this word" or "this quoted string."

### Combining with Counts

Text objects work with counts too.

- `2iw` — select 2 words (less common, but works)
- `3ap` — select 3 paragraphs around the current position

Counts with text objects are rare, but they exist.

### mini.ai: Extended Text Objects

The `mini.ai` plugin extends Vim's text objects with more targets:

- `io` / `ao` — **o**utput (code blocks, markdown code fences)
- `if` / `af` — **f**unction (selects a function body or entire function)
- `ic` / `ac` — **c**lass (selects a class body or entire class)
- `u` — **u**nclosed bracket (selects content between mismatched brackets—useful for buggy code)
- `d` / `ad` — **d**igit (selects a number)

`mini.ai` is included in LazyVim by default. You don't need to configure anything.

### Searching Within Text Objects

You can also use search patterns as quasi-text objects:

- `d/pattern` — delete from cursor until the next occurrence of pattern
- `c?pattern` — change from cursor back to the previous occurrence of pattern

This is less commonly used than standard text objects, but it's useful when structure isn't available.

### Key Bindings Summary

| Binding | Effect | Type |
|---------|--------|------|
| `iw` | Inside word | Text object |
| `aw` | Around word | Text object |
| `i"` / `a"` | Inside/around double quotes | Text object |
| `i'` / `a'` | Inside/around single quotes | Text object |
| ``i` `` / ``a` `` | Inside/around backticks | Text object |
| `i(` / `a)` | Inside/around parens | Text object |
| `i[` / `a]` | Inside/around brackets | Text object |
| `i{` / `a}` | Inside/around braces | Text object |
| `i<` / `a>` | Inside/around angle brackets | Text object |
| `it` / `at` | Inside/around tags | Text object |
| `is` / `as` | Inside/around sentence | Text object |
| `ip` / `ap` | Inside/around paragraph | Text object |
| `io` / `ao` | Inside/around code block (mini.ai) | Text object |
| `if` / `af` | Inside/around function (mini.ai) | Text object |
| `d{text-object}` | Delete text object | Operator + object |
| `c{text-object}` | Change text object | Operator + object |
| `y{text-object}` | Yank text object | Operator + object |

### Mental Model: Thinking in Terms of Structure

This is a shift in how you think about editing.

**Old way (motions only):** "I need to delete from here to the space, so I'll use `dw`."

**New way (text objects):** "I need to delete this word, so I'll use `diw`."

The old way is position-based. The new way is structure-based. And structure-based thinking is faster because it matches how you think about your code or writing.

You're not positioning your cursor for surgery. You're saying "delete this thing" and Vim finds the boundaries automatically.

---

## Drills

### Drill 1: Inside vs. Around (5 min)

Open `app/src/pages/index.astro` in Neovim.

**Task 1: Delete inside word**

1. Find a word in your content (e.g., "Welcome" or "Forge").
2. Position your cursor anywhere inside that word.
3. Press `diw` to delete inside word.
4. The word vanishes. Whitespace around it remains.
5. Undo with `u`.

**Task 2: Delete around word**

1. Position your cursor on the same word (or a different word).
2. Press `daw` to delete around word.
3. The word AND trailing whitespace vanish.
4. Undo with `u`.

**Task 3: Compare the results**

Do both on the same word. Notice the difference:
- `diw` leaves you with extra spaces.
- `daw` cleans up the spacing.

In practice, you'll use `daw` more often because it leaves your document cleaner.

### Drill 2: Quotes and Parentheses (5 min)

**Setup:** Create or find content with quoted strings or parentheses.

In your HTML, you have attributes with quotes: `class="container"`

1. Find a quoted string in an attribute or in text.
2. Position your cursor inside the quotes (between the quote characters).
3. Press `di"` to delete inside the quotes.
4. The content inside vanishes. Quotes remain.
5. Type new content to replace what you deleted.
6. Press Escape.

Now try `da"`:

1. Position your cursor inside the quotes again.
2. Press `da"` to delete around quotes.
3. The quotes AND content vanish completely.
4. Type your replacement content (without quotes—you deleted those too).
5. Undo a few times to reset.

**Understanding:** `di"` is useful when you want to change the content but keep the structure (the quotes). `da"` is useful when you want to remove the entire quoted thing.

### Drill 3: Paragraphs and Sentences (5 min)

**Setup:** In the course directory, open `course/day-04/index.md` (this file).

1. Find a paragraph (multiple lines separated by blank lines).
2. Position your cursor anywhere in the paragraph.
3. Press `dap` to delete around paragraph.
4. The entire paragraph (including the blank line after) vanishes.
5. Undo with `u`.

**Task 2: Delete inside paragraph**

1. Position your cursor in the same paragraph.
2. Press `dip` to delete inside paragraph.
3. The paragraph content vanishes, but the blank line structure remains.
4. Undo.

**Understanding:** Paragraphs are larger-scale structures. Using `dap` and `dip` on multi-line content is much faster than deleting line by line.

### Drill 4: Combining Text Objects with Operators (5 min)

**Setup:** Stay in your file.

**Task 1: Change inside quotes**

1. Find a quoted string: `"some text"`
2. Position your cursor inside the quotes.
3. Press `ci"` to change inside quotes.
4. The content inside is deleted, and you enter insert mode.
5. Type replacement text.
6. Press Escape.

**Task 2: Yank around parentheses**

1. Find content with parentheses: `(something)`
2. Position your cursor inside.
3. Press `ya(` to yank around parentheses.
4. The parentheses and content are copied to your register.
5. Navigate to a new location using `j` or `G`.
6. Press `p` to paste.
7. The parentheses and content appear at the new location.

**Expected outcome:** Text objects work with all operators, not just delete. You can change, yank, or perform any operator on a text object.

---

## Build: Day Navigation and Sidebar Components

### What You're Building

1. **DayNav.astro** — A component showing previous/next day links. Appears at the bottom or top of each day's lesson.
2. **Sidebar.astro** — A sidebar showing all days (or a subset). Used for quick navigation.

These components will be integrated into the day page layout, making it easy to browse between lessons.

### Step-by-Step

#### Step 1: Create DayNav Component

Create `app/src/components/DayNav.astro`:

```bash
nvim app/src/components/DayNav.astro
```

**File content:**

```astro
---
interface Props {
  currentDay: number;
  totalDays?: number;
}

const { currentDay, totalDays = 30 } = Astro.props;

const prevDay = currentDay > 1 ? currentDay - 1 : null;
const nextDay = currentDay < totalDays ? currentDay + 1 : null;

const padded = (day: number) => String(day).padStart(2, '0');
---

<nav class="day-nav">
  {prevDay ? (
    <a href={`/day/day-${padded(prevDay)}`} class="nav-link prev">
      ← Day {prevDay}
    </a>
  ) : (
    <div />
  )}
  
  <span class="day-counter">
    Day {currentDay} of {totalDays}
  </span>
  
  {nextDay ? (
    <a href={`/day/day-${padded(nextDay)}`} class="nav-link next">
      Day {nextDay} →
    </a>
  ) : (
    <div />
  )}
</nav>

<style>
  .day-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 2rem 0;
  }
  
  .day-counter {
    font-size: 0.9rem;
    color: #666;
  }
  
  .nav-link {
    text-decoration: none;
    color: #0066cc;
    font-weight: 500;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
</style>
```

**Build instructions:**

1. Create the file with `nvim app/src/components/DayNav.astro`.
2. Type the structure using `o` to open lines, `I` to indent, `i` to insert text.
3. Use text objects to edit: `di"` to change quoted strings, `daw` to delete words, etc.
4. Save with `:w`.

#### Step 2: Create Sidebar Component

Create `app/src/components/Sidebar.astro`:

```bash
nvim app/src/components/Sidebar.astro
```

**File content:**

```astro
---
import { getCollection } from 'astro:content';

const course = await getCollection('course');
const days = course.sort((a, b) => a.data.day - b.data.day).slice(0, 10); // Show first 10 days for brevity

const padded = (day: number) => String(day).padStart(2, '0');
---

<aside class="sidebar">
  <h3>Course Days</h3>
  <nav class="day-list">
    {days.map((day) => (
      <a href={`/day/day-${padded(day.data.day)}`} class="day-link">
        Day {day.data.day}
      </a>
    ))}
  </nav>
</aside>

<style>
  .sidebar {
    background: #f5f5f5;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
  
  .sidebar h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .day-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .day-link {
    text-decoration: none;
    color: #333;
    padding: 0.5rem 0;
    border-left: 3px solid transparent;
    padding-left: 0.5rem;
  }
  
  .day-link:hover {
    color: #0066cc;
    border-left-color: #0066cc;
  }
</style>
```

#### Step 3: Update the Day Page Layout to Include Components

Modify `app/src/pages/day/[slug].astro` to use the DayNav and Sidebar:

```bash
nvim app/src/pages/day/[slug].astro
```

**Changes to make:**

1. Add imports for the new components at the top:
   ```astro
   import DayNav from '../../components/DayNav.astro';
   import Sidebar from '../../components/Sidebar.astro';
   ```

2. Wrap the article content with the components. The structure should be:
   ```astro
   <Base title={entry.data.title} description={entry.data.summary}>
     <article>
       <h1>{entry.data.title}</h1>
       <p>{entry.data.summary}</p>
       <Content />
       
       <DayNav currentDay={entry.data.day} />
     </article>
     
     <Sidebar />
   </Base>
   ```

**Use vim motions to edit:**
- Use `i` to insert the import statements at the top.
- Use `di(` to delete inside parentheses if you need to modify the Base tag.
- Use `da"` to delete and replace quoted strings.

#### Step 4: Test the Changes

Run the dev server:

```bash
npm run dev
```

Navigate to `/day/day-01`. You should see:
- The day content
- A sidebar showing the first 10 days (clickable links)
- Navigation at the bottom showing "← Day 0" (disabled for Day 1) and "Day 2 →"

Click "Day 2 →" link. You should navigate to Day 2's page.

#### Step 5: Commit

```bash
git add app/src/components/DayNav.astro app/src/components/Sidebar.astro app/src/pages/day/[slug].astro
git commit -m "day-04: add day navigation and sidebar components"
```

### Stretch Goal

1. Make the sidebar highlight the current day (add a special class like `active`).
2. Extend the sidebar to show all 30 days (instead of just 10) with a scrollable list.
3. Add a "Return to Days" button at the top of each day page.

---

## Checkpoint

**Commit message:** `day-04: add day navigation and sidebar components`

**Your commit should include:**
- [ ] `app/src/components/DayNav.astro` — Navigation between days
- [ ] `app/src/components/Sidebar.astro` — Sidebar with day list
- [ ] `app/src/pages/day/[slug].astro` — Updated to import and use the components

**Validation:**

The CI will check:
- [ ] All component files exist with valid Astro syntax
- [ ] DayNav correctly handles first and last days (no broken links)
- [ ] Sidebar imports and uses `getCollection`
- [ ] Day page template includes both components
- [ ] No build errors
- [ ] Commit message starts with `day-04:`

**Self-Check:**

1. `npm run dev` builds successfully
2. `/day/day-01` displays the day content, sidebar, and day nav
3. Clicking day links in the sidebar navigates correctly
4. Day nav shows correct previous/next links
5. All edits used text objects: `diw`, `daw`, `di"`, `da"`, `dap`, `ci"`, etc.

---

## Today's Score

Track your progress:

- [ ] I can delete inside a word with `diw`
- [ ] I can delete around a word with `daw`
- [ ] I understand the difference between "inside" and "around"
- [ ] I can change text inside quotes with `ci"`
- [ ] I can yank around parentheses with `ya(`
- [ ] I can delete entire paragraphs with `dap`
- [ ] I can use text objects with any operator (d, c, y)
- [ ] I know when to use `i` vs `a` (inside vs. around)
- [ ] I created the DayNav component with prev/next links
- [ ] I created the Sidebar with day listings
- [ ] Day pages now have navigation between lessons

**Reflection:**

Text objects are the moment Vim shifts from "fast editor" to "structural editor." You're no longer thinking about cursor positions. You're thinking about *what* you want to edit. How does that feel? Can you see yourself using text objects daily?

---

**Day 4 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 5: Visual Mode & Selection →](../day-05/index.md)
