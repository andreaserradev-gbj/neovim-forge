---
day: 6
title: "Search & Destroy"
phase: 1
summary: "Master search and replace — turn Vim into a document-wide editor"
vim_skills: ["/", "?", "n", "N", "*", "#", ":s", ":s/old/new/g", ":%s", ":%s/old/new/gc", ":", ":w", ":q", ":wq", ":e"]
plugin_focus: null
app_milestone: "Search component (basic client-side filter for days by keyword)"
estimated_time: "45-60 min"
prerequisites: ["day-05"]
---

[← Day 5: Visual Mode & Selection](../day-05/index.md) | [Course Index](../../COURSE.md) | [Day 7: Week 1 Review →](../day-07/index.md)


## Today's Vim Skills

### Search: Navigation and Editing Combined

Search in Vim serves two purposes:

1. **Navigation:** Find text and jump to it
2. **Editing:** Combined with operators, find patterns and delete/change them

You've learned motions (`w`, `$`, `j`) and text objects (`iw`, `i"`). Search is another way to navigate.

### Forward Search: `/`

Press `/` to open the search prompt. Type a pattern. Press Enter.

Vim jumps to the first match. Your cursor lands on the match.

- `/hello` — search for "hello" forward
- `/function` — search for "function"
- `/^def` — search for lines starting with "def" (regex)
- `/$` — search for end of line (regex)

The pattern is a regular expression by default.

After searching, you're positioned at the match. You can:
- Continue editing from that position
- Press `n` to find the next match
- Press `N` to find the previous match
- Press Escape to cancel and return to normal position

### Backward Search: `?`

Press `?` to search backward (toward the beginning of the file).

- `?hello` — search for "hello" backward
- `?function` — search for "function" going toward the top

After a backward search, `n` continues backward, and `N` goes forward.

### Next/Previous Match: `n` and `N`

After any search (forward or backward), press:

- `n` — jump to the **n**ext match (in the direction of the search)
- `N` — jump to the previous match (opposite direction)

**Example:**

```
File content:
line 1: hello
line 5: hello
line 10: hello

Cursor at line 1.
Press /hello
Jump to first match (line 1)
Press n
Jump to next match (line 5)
Press n
Jump to next match (line 10)
Press N
Jump back (line 5)
Press N
Jump back (line 1)
```

This is how you navigate between all matches in a file.

### Search Current Word: `*` and `#`

These are shortcuts for searching:

- `*` — search for the word under your cursor (forward)
- `#` — search for the word under your cursor (backward)

**Example:**

```
File content:
hello world
test hello
world hello

Cursor on "hello" in line 1.
Press *
Jump to next "hello" (line 2)
Press *
Jump to next "hello" (line 3)
Press #
Jump back (line 2)
```

This is faster than typing `/hello`.

### Substitution: `:s`

The colon (`:`) enters command mode. `:s` is the substitute (find-and-replace) command.

#### Single-Line Substitution

```
:s/old/new/    — Replace first occurrence of "old" with "new" on current line
:s/old/new/g   — Replace all occurrences on current line (g = global)
```

**Example:**

```
Line: hello world hello
Cursor on the line.
:s/hello/hi/
Result: hi world hello (only first occurrence)

:s/hello/hi/g
Result: hi world hi (all occurrences)
```

#### Document-Wide Substitution

```
:%s/old/new/    — Replace first occurrence on every line
:%s/old/new/g   — Replace all occurrences everywhere
:%s/old/new/gc  — Replace all, but ask for confirmation on each
```

The `%` means "all lines in the file."

**Example:**

```
File with many "old" words.
:%s/old/new/g
All "old" replaced with "new" everywhere.
```

The `c` flag (confirm) is useful for irreversible changes:

```
:%s/old/new/gc
For each match, Vim asks: "Replace? (y/n/a/q)"
y - yes
n - no
a - all (replace remaining without asking)
q - quit (stop replacing)
```

### Command Mode: `:` Commands

The colon (`:`) enters command mode. Common commands:

- `:w` — **w**rite (save) the file
- `:q` — **q**uit (close) the file
- `:wq` — write and quit
- `:e {file}` — **e**dit a different file
- `:!{command}` — run a shell command (e.g., `:!npm run build`)

**Important:** After typing a command, press Enter to execute.

```
:w
(Enter)
File is saved.

:q
(Enter)
File is closed (if saved).

:%s/old/new/g
(Enter)
All replacements done.
```

### Regex in Searches and Substitutions

By default, `/` and `:s` use regular expressions. Common patterns:

- `.` — any character
- `*` — zero or more of previous
- `+` — one or more of previous
- `^` — start of line
- `$` — end of line
- `[abc]` — any of a, b, or c
- `[^abc]` — anything except a, b, or c
- `\w` — word character
- `\s` — whitespace
- `(...)` — group

Examples:

- `^def` — lines starting with "def"
- `hello.*world` — "hello" followed by anything, then "world"
- `\w+` — one or more word characters (a word)

For complex patterns, `:help regexp` in Vim.

### Key Bindings Summary

| Binding | Effect | Notes |
|---------|--------|-------|
| `/pattern` | Search forward | Regex pattern, Enter to execute |
| `?pattern` | Search backward | Same regex syntax |
| `n` | Next match | Direction depends on last search |
| `N` | Previous match | Opposite direction of last search |
| `*` | Search current word forward | Shortcut, no regex needed |
| `#` | Search current word backward | Shortcut, no regex needed |
| `:s/old/new/` | Substitute on line | First occurrence |
| `:s/old/new/g` | Substitute on line, all | All occurrences |
| `:%s/old/new/g` | Substitute file-wide | All occurrences, all lines |
| `:%s/old/new/gc` | Substitute file-wide with confirm | Ask before each replace |
| `:w` | Write (save) | Save current file |
| `:q` | Quit | Close current file |
| `:wq` | Write and quit | Save and close |
| `:e {file}` | Edit file | Open a different file |

### Mental Model: Search as Navigation + Editing

Search is powerful because it combines navigation and editing:

- **Navigation:** `/pattern` jumps to the first match. `n` jumps to the next.
- **Editing:** `:%s/old/new/g` finds and replaces everywhere without navigation.

You can also combine search with operators (advanced):

- `d/pattern` — delete from cursor until pattern
- `c?pattern` — change from cursor back to pattern

These are less common but show the compositional power.

---

## Drills

### Drill 1: Forward Search (5 min)

Open `course/day-06/index.md` (this file).

**Task:**

1. Press `/` to open search
2. Type `Search` (the section heading)
3. Press Enter
4. Your cursor jumps to "Search"
5. Press `n` to find the next occurrence
6. Press `n` again (if there is one)
7. Press `N` to go back
8. Press Escape to clear the search highlight

**Expected outcome:** Search navigation is immediate. You jump to any text in the file.

### Drill 2: Backward Search (3 min)

**Setup:** Stay in the same file. Position cursor somewhere in the middle.

1. Press `?` to open backward search
2. Type a word you saw earlier in the file
3. Press Enter
4. Your cursor jumps backward to that word
5. Press `n` (continues backward)
6. Press `N` (goes forward)

**Expected outcome:** Backward search is the mirror of forward search.

### Drill 3: Search Current Word (3 min)

**Setup:** Any file.

1. Navigate to any word (use `w` or `f`)
2. Position your cursor on that word
3. Press `*` to search for that word forward
4. You jump to the next occurrence
5. Press `*` again to jump to the next
6. Press `N` to jump back

**Expected outcome:** `*` is faster than typing `/word`. No regex needed.

### Drill 4: Single-Line Substitution (3 min)

**Setup:** Create a test line with repeated words:

```
hello hello hello
```

1. Navigate to that line
2. Type `:s/hello/hi/` and press Enter
3. First "hello" becomes "hi"
4. Undo with `u`
5. Type `:s/hello/hi/g` and press Enter
6. All "hello" become "hi"

**Expected outcome:** `g` flag is the difference between one and all.

### Drill 5: File-Wide Substitution (3 min)

**Setup:** Open a file with several instances of a word.

1. Type `:%s/old/new/g` (substitute "old" with "new" everywhere)
2. Press Enter
3. All "old" become "new" throughout the file
4. Undo with `u` to revert

**Expected outcome:** File-wide replace is one command.

---

## Build: Search Component for Days Page

### What You're Building

A component that filters the days listing by keyword. When you type in a search box, the days page shows only days whose title or summary matches the search.

This is client-side filtering (not a server search), but it teaches the principle.

### Step-by-Step

#### Step 1: Create Search Component

Create `app/src/components/Search.astro`:

```bash
nvim app/src/components/Search.astro
```

**Content:**

```astro
---
// Server-side: no props needed, this is a client-side component
---

<div class="search-container">
  <input
    type="text"
    id="day-search"
    placeholder="Search days by title or summary..."
    class="search-input"
  />
  <div id="search-results" class="search-results"></div>
</div>

<script>
  const searchInput = document.getElementById('day-search');
  const dayCards = document.querySelectorAll('[data-day-card]');
  
  searchInput?.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    
    dayCards.forEach((card) => {
      const title = card.getAttribute('data-day-title')?.toLowerCase() || '';
      const summary = card.getAttribute('data-day-summary')?.toLowerCase() || '';
      
      if (title.includes(query) || summary.includes(query) || query === '') {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
</script>

<style>
  .search-container {
    margin: 2rem 0;
  }
  
  .search-input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    background-color: var(--color-bg);
    color: var(--color-text);
  }
  
  .search-input:focus {
    outline: none;
    border-color: var(--color-accent);
  }
</style>
```

#### Step 2: Update Days Page to Use Search

Open `app/src/pages/days.astro`:

```bash
nvim app/src/pages/days.astro
```

Add the Search component import and include it above the day cards:

```astro
---
import { getCollection } from 'astro:content';
import Base from '../layouts/Base.astro';
import Search from '../components/Search.astro';

const courseEntries = await getCollection('course');
const days = courseEntries.sort((a, b) => a.data.day - b.data.day);
---

<Base title="All Days — Neovim Forge" description="Browse all 30 days of the course">
  <h1>All Days</h1>
  
  <Search />
  
  <div class="days-grid">
    {days.map((day) => (
      <div class="day-card" data-day-card data-day-title={day.data.title} data-day-summary={day.data.summary}>
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
  /* ... existing styles ... */
</style>
```

**Key changes:**

- Import Search component
- Add `<Search />` above the day cards
- Add `data-day-card`, `data-day-title`, and `data-day-summary` attributes to each card for the JavaScript to filter

#### Step 3: Test

Run dev server:

```bash
npm run dev
```

Navigate to `/days`. You should see:
- A search input at the top
- Type in the search box
- Day cards filter in real-time
- Type "visual" and only days with "visual" in title or summary appear
- Clear the search and all days reappear

#### Step 4: Commit

```bash
git add app/src/components/Search.astro app/src/pages/days.astro
git commit -m "day-06: add search component and keyword filtering"
```

### Stretch Goal

1. Add a "clear search" button
2. Show a count of matching days
3. Highlight the matched text in the results

---

## Checkpoint

**Commit message:** `day-06: add search component and keyword filtering`

**Your commit should include:**
- [ ] `app/src/components/Search.astro` — Search input and filter logic
- [ ] `app/src/pages/days.astro` — Updated to include Search and data attributes

**Validation:**

CI checks:
- [ ] Search component exists with client-side script
- [ ] Days page includes Search component
- [ ] Data attributes on day cards (data-day-card, data-day-title, data-day-summary)
- [ ] No build errors
- [ ] Commit message starts with `day-06:`

**Self-Check:**

1. Navigate to `/days`
2. Type in search input
3. Cards filter in real-time
4. Search is case-insensitive
5. Clearing search shows all days again

---

## Today's Score

- [ ] I can search forward with `/pattern`
- [ ] I can search backward with `?pattern`
- [ ] I can navigate with `n` and `N`
- [ ] I understand `*` for searching the current word
- [ ] I can substitute on a line with `:s/old/new/g`
- [ ] I can substitute file-wide with `:%s/old/new/g`
- [ ] I understand the confirm flag: `:%s/old/new/gc`
- [ ] I created the Search component
- [ ] Search filtering works on the days page
- [ ] I'm comfortable with command mode (`:`)

**Reflection:** Search transforms Vim from a local editor to a document-wide editor. You can find patterns and replace them instantly, across hundreds of lines. This is where Vim's speed really shines.

---

**Day 6 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 7: Week 1 Review →](../day-07/index.md)
