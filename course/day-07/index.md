---
day: 7
title: "Week 1 Review"
phase: 1
summary: "Review and speed-drill all Week 1 skills — cementing muscle memory before Week 2"
vim_skills: ["hjkl", "w/b/e", "i/a/I/A/o/O", "d/c/y", "diw/ci\"/yap", "v/V/Ctrl-v", "//?/n/N", ":s", ".", "u/Ctrl-r"]
plugin_focus: null
app_milestone: "Progress dashboard showing completed days, Week 1 completion badge"
estimated_time: "45-60 min"
prerequisites: ["day-06"]
---

[← Day 6: Search & Destroy](../day-06/index.md) | [Course Index](../../COURSE.md) | [Day 8: The Leader Key →](../day-08/index.md)


## Today's Vim Skills

No new skills today. Instead, you're reviewing and speed-drilling all of Week 1.

### The Skills You've Learned

**Day 1: Motions**
- hjkl (character navigation)
- w/b/e (word motions)
- 0/^/$ (line motions)
- gg/G/{count}G (document motions)
- f/F/t/T (find motions)

**Day 2: Insert Modes**
- i/a (insert before/after cursor)
- I/A (insert at line start/end)
- o/O (open new line below/above)
- Escape / J+K (exit insert mode)
- u/Ctrl-r (undo/redo)

**Day 3: Operator Grammar**
- d/c/y (delete/change/yank)
- dd/cc (line operators)
- D/C (delete/change to line end)
- p/P (paste after/before)
- {count}{operator}{motion} (composition)
- . (dot command, repeat)

**Day 4: Text Objects**
- iw/aw (inside/around word)
- i"/a" (inside/around quotes)
- i(/a) (inside/around parens)
- ip/ap (inside/around paragraph)
- diw/ci"/ya( (text object + operator)
- mini.ai (extended objects)

**Day 5: Visual Mode**
- v (character visual)
- V (line visual)
- Ctrl-v (block visual)
- o (toggle selection endpoint)
- gv (reselect last selection)
- visual + operator

**Day 6: Search & Replace**
- / (forward search)
- ? (backward search)
- n/N (next/previous match)
- * (search word forward)
- :s/old/new/ (single-line replace)
- :%s/old/new/g (file-wide replace)

### Mental Model: The Vim Grammar

Vim is a language with these components:

1. **Verbs (Operators):** d (delete), c (change), y (yank)
2. **Nouns (Text Targets):** Motions (w, $, G), Text objects (iw, i", ip), Searches (/pattern)
3. **Adjectives (Counts):** Numbers that multiply (3dw, 5j, 2dd)
4. **Grammar:** Verb + Adjective? + Noun = Transformation

Examples:
- `dw` = delete [the next] word
- `3dw` = delete 3 words
- `d$` = delete to end of line
- `diw` = delete inside word
- `d/pattern` = delete until pattern
- `:%s/old/new/g` = replace all "old" with "new" file-wide

This grammar is compositional. Learn new motions or commands, and you instantly know how to combine them.

### Speed Drills: Testing Your Reflexes

The goal today is **automaticity**. You shouldn't think about these commands. Your fingers should know where to go.

Test yourself:
- Can you navigate 10 lines down and 5 words right without counting? (`10j5w` or `j...j...w...w...`)
- Can you delete a word and paste it elsewhere in under 5 keystrokes? (`daw`, navigate, `p`)
- Can you change every instance of a word in the file in under 10 keystrokes? (`:%s/word/new/g` + Enter)
- Can you select a paragraph and copy it in under 8 keystrokes? (`vap` or `Vip`, then `y`)

If you hesitate on any of these, you need more drilling.

---

## Drills

### Drill 1: Navigation Speed (5 min)

**Objective:** Navigate without thinking.

Open any file. Set a timer for 5 minutes.

**Challenges:**

1. Go to line 1, then line 50 (if it exists): `gg`, `50G`
2. Find the word "the" and jump to the next 5 occurrences: `*`, `n`, `n`, `n`, `n`, `n`
3. Jump to the last character of the current line: `$`
4. Jump backward 10 lines: `10k` or `kkkkk...`
5. Jump to the first non-blank character of the line: `^`

Repeat these 5 times. How fast can you do all 5? The goal is to do it without thinking.

**Expected outcome:** Navigation is automatic. You don't plan the keystrokes—your fingers just move.

### Drill 2: Edit and Undo Speed (5 min)

**Objective:** Edit changes and undo them quickly.

1. Delete a word: `daw`
2. Undo: `u`
3. Delete the current line: `dd`
4. Undo: `u`
5. Change a word: `cw`, type replacement, Escape
6. Undo: `u`
7. Yank a line: `yy`
8. Paste it: `p`
9. Undo: `u`
10. Repeat the last change: `.` (dot)

Do all of these 3 times without pausing to think.

**Expected outcome:** Undo, redo, and repeat are reflexes. You use them constantly.

### Drill 3: Text Objects Speed (5 min)

**Objective:** Text objects should be faster than motions for deletions.

Open a file with varied text (code, sentences, paragraphs).

**Challenge:**

1. Delete inside a word: `diw`
2. Change inside quotes: `ci"`
3. Delete around a paragraph: `dap`
4. Yank inside parentheses: `yi(`
5. Change a sentence: `cis` (if text object for sentence exists)
6. Delete around a function call: `daw` (the function name)

Do each 2-3 times on different targets.

**Expected outcome:** Text objects are faster than manually selecting with motions. You reach for them automatically.

### Drill 4: Visual Selection Speed (3 min)

**Objective:** Visual mode for quick selections.

1. Enter character visual: `v`, select 3 words with `w...`, delete with `d`
2. Enter line visual: `V`, select 2 lines with `jj`, delete with `d`
3. Enter block visual: `Ctrl-v`, select a 3×3 block with `jjlll`, delete with `d`
4. Reselect last selection: `gv`, delete again with `d`

Repeat each 2 times.

**Expected outcome:** All three visual modes are accessible. You choose the right one for the selection.

### Drill 5: Search and Replace Speed (3 min)

**Objective:** Find and replace without typing the full word multiple times.

Open a file with repeated words.

1. Search for a word: `/word`, navigate with `n`, `n`, `n`
2. Replace on a line: `:s/word/new/` (Enter), undo
3. Replace file-wide: `:%s/word/new/g` (Enter), undo
4. Search current word: position cursor on a word, press `*`, navigate with `n`

Do each 2 times.

**Expected outcome:** Search is faster than manually navigating. Replace is faster than manual editing.

### Drill 6: Combined Operations (5 min)

**Objective:** Chain multiple operations together.

Realistic scenarios:

1. **Move a line:** `dd` (delete), navigate with `j`, `p` (paste)
2. **Delete and redo:** `daw`, navigate, `.` (dot to repeat delete on next word)
3. **Find and replace around cursor:** `/pattern`, position cursor at replacement target, `cw`, type replacement, Escape
4. **Select and transform:** `V` (line visual), select a paragraph with `j...`, `d` (delete)

Each scenario should take under 10 seconds.

**Expected outcome:** Vim becomes a language you speak. You chain operations fluidly.

---

## Build: Progress Dashboard

### What You're Building

A dashboard page (`/progress` or `/dashboard`) that shows:
- All Week 1 days with completion status
- A progress bar (X/7 days completed)
- Links to each day
- A "Week 1 Complete" badge (appears when all 7 are done)

This is your first app feature that *tracks state*, teaching a pattern for future weeks.

### Step-by-Step

#### Step 1: Create Dashboard Page

Create `app/src/pages/progress.astro`:

```bash
nvim app/src/pages/progress.astro
```

**Content:**

```astro
---
import { getCollection } from 'astro:content';
import Base from '../layouts/Base.astro';

const course = await getCollection('course');
const week1Days = course.filter((day) => day.data.phase === 1).sort((a, b) => a.data.day - b.data.day);
const totalDays = week1Days.length;

const padded = (day: number) => String(day).padStart(2, '0');
---

<Base title="Progress — Neovim Forge" description="Track your Week 1 progress">
  <h1>Progress Dashboard</h1>
  
  <div class="progress-container">
    <h2>Week 1: Foundations</h2>
    
    <div class="progress-bar">
      <div class="progress-fill" style={`width: ${(week1Days.length / totalDays) * 100}%`}></div>
    </div>
    
    <p class="progress-text">{week1Days.length} of {totalDays} days completed</p>
    
    {week1Days.length === totalDays && (
      <div class="badge">
        <p>Week 1 Complete!</p>
      </div>
    )}
    
    <div class="days-list">
      <h3>Your Days</h3>
      {week1Days.map((day) => (
        <div class="day-item">
          <span class="day-number">Day {day.data.day}</span>
          <span class="day-title">{day.data.title}</span>
          <a href={`/day/day-${padded(day.data.day)}`} class="day-link">→</a>
        </div>
      ))}
    </div>
  </div>
</Base>

<style>
  .progress-container {
    max-width: 600px;
    margin: 2rem auto;
  }
  
  .progress-bar {
    background-color: var(--color-border);
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem 0;
  }
  
  .progress-fill {
    background-color: var(--color-accent);
    height: 100%;
    transition: width 0.3s;
  }
  
  .progress-text {
    text-align: center;
    color: var(--color-text);
  }
  
  .badge {
    background-color: var(--color-accent);
    color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
    margin: 1.5rem 0;
  }
  
  .days-list {
    margin-top: 2rem;
  }
  
  .day-item {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 1rem;
  }
  
  .day-number {
    font-weight: bold;
    color: var(--color-accent);
    min-width: 60px;
  }
  
  .day-title {
    flex: 1;
  }
  
  .day-link {
    text-decoration: none;
    color: var(--color-accent);
    font-size: 1.5rem;
  }
</style>
```

#### Step 2: Link to Progress Page from Home

Update `app/src/pages/index.astro`:

Add a link to the progress page:

```astro
<p>
  <a href="/progress">View your progress</a>
</p>
```

#### Step 3: Test

Run dev server:

```bash
npm run dev
```

Navigate to `/progress`. You should see:
- A progress bar (currently showing 7/7 if all 7 days exist)
- A "Week 1 Complete!" badge
- A list of all Week 1 days with links

#### Step 4: Commit

```bash
git add app/src/pages/progress.astro app/src/pages/index.astro
git commit -m "day-07: add progress dashboard and complete week 1"
```

### Stretch Goal

1. Make the progress percentage dynamic (only count days that have been "completed" by checking git commits)
2. Add a "Week 2 Preview" section showing the next 7 days
3. Add an estimated completion time for the week based on individual day estimates

---

## Checkpoint

**Commit message:** `day-07: add progress dashboard and complete week 1`

**Your commit should include:**
- [ ] `app/src/pages/progress.astro` — New progress dashboard
- [ ] `app/src/pages/index.astro` — Link to progress page

**Validation:**

CI checks:
- [ ] Progress page exists and renders
- [ ] Phase 1 days are displayed
- [ ] No build errors
- [ ] Commit message starts with `day-07:`

**Self-Check:**

1. Navigate to `/progress`
2. See a progress bar and "Week 1 Complete!" badge
3. See all 7 Week 1 days listed
4. Click links to navigate to each day

---

## Week 1 Self-Assessment

Rate yourself on each skill (1 = need more practice, 5 = automatic):

**Motions:**
- [ ] hjkl navigation (1-5)
- [ ] w/b/e word motions (1-5)
- [ ] 0/^/$ line motions (1-5)
- [ ] gg/G document motions (1-5)
- [ ] f/t find motions (1-5)

**Insert Modes:**
- [ ] i/a character insert (1-5)
- [ ] I/A line insert (1-5)
- [ ] o/O open new line (1-5)
- [ ] Escape / J+K exit (1-5)

**Operators:**
- [ ] d/c/y operators (1-5)
- [ ] Operator + motion grammar (1-5)
- [ ] Counts with operators (1-5)
- [ ] Dot command (.) (1-5)

**Text Objects:**
- [ ] iw/aw word objects (1-5)
- [ ] i"/a" quote objects (1-5)
- [ ] i(/a) paren objects (1-5)
- [ ] ip/ap paragraph objects (1-5)
- [ ] When to use text objects vs motions (1-5)

**Visual Mode:**
- [ ] v character visual (1-5)
- [ ] V line visual (1-5)
- [ ] Ctrl-v block visual (1-5)
- [ ] gv reselect (1-5)
- [ ] When to use visual vs operators (1-5)

**Search & Replace:**
- [ ] / forward search (1-5)
- [ ] ? backward search (1-5)
- [ ] n/N navigation (1-5)
- [ ] * word search (1-5)
- [ ] :s substitution (1-5)
- [ ] :%s file-wide replace (1-5)

Any skill rated below 3? Spend tomorrow drilling that one. Vim is built on muscle memory. The more automatic it is, the faster you'll be.

---

## Today's Score

- [ ] I can navigate without thinking
- [ ] I can enter and exit insert mode reflexively
- [ ] I can combine operators + motions + counts smoothly
- [ ] I understand and use text objects naturally
- [ ] I use visual mode for complex selections
- [ ] I can find and replace text file-wide
- [ ] I built the progress dashboard
- [ ] I've completed Week 1

**Reflection:**

You've learned the foundation of Vim. Every keystroke from here builds on these skills. Are you surprised at how much you can do with simple key combinations? How does Vim feel compared to a standard editor now?

Take a moment and celebrate. Week 1 down. Week 2 brings plugins, LazyVim, and the power features that make Vim legendary.

---

**Day 7 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 8: The Leader Key →](../day-08/index.md)
