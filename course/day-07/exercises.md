---
day: 7
title: "Day 7 Exercises"
type: "exercises"
---

[← Day 7: Week 1 Review](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Navigation Gauntlet

**Objective:** Test and drill navigation reflexes.

Open any file with 50+ lines (or a large MDX file from the course).

**Speed Challenge:**

Set a timer for 5 minutes. Complete as many of these as possible:

1. Go to the top: `gg`
2. Go to the bottom: `G`
3. Go to line 25: `25G`
4. Jump forward 10 lines: `10j`
5. Jump backward 5 lines: `5k`
6. Jump to start of line: `^` or `0`
7. Jump to end of line: `$`
8. Find the next "the": `*` or `/the` + `n`
9. Find previous "the": `#` or `/the` + `N`
10. Jump to next word: `w`
11. Jump back word: `b`

Repeat this gauntlet 3 times. How many can you complete accurately in 5 minutes?

**Expected outcome:** Navigation becomes a reflex. You don't think about the keystrokes—they happen automatically.

---

## Exercise 2: Operator Composition

**Objective:** Chain operators, motions, and counts fluidly.

**Scenarios:**

1. **Delete 3 words and undo:** `3dw`, `u` (under 2 seconds)
2. **Delete line and redo:** `dd`, `u`, `Ctrl-r` (under 2 seconds)
3. **Change word and repeat:** `cw` + type + `Escape`, navigate, `.` (under 5 seconds)
4. **Yank paragraph and paste:** `yap`, navigate, `p` (under 5 seconds)
5. **Delete to end of line and undo:** `D`, `u` (under 2 seconds)
6. **Change inside quotes:** `ci"` + type + `Escape` (under 3 seconds)

Do each scenario 3 times. Can you do them smoothly without hesitating on the keystrokes?

**Expected outcome:** Operators are second nature. You don't assemble the keystrokes—you think "delete this word" and your fingers do `daw`.

---

## Exercise 3: Text Objects vs Motions — Choose the Fastest

**Objective:** Internalize when to use what.

**Scenario:** You want to delete a word. Compare:

**Option A: Operator + motion**
- Navigate cursor to the word start with `w` or `f`
- Delete with `dw`
- Total: 2 keystrokes (if cursor is positioned)

**Option B: Operator + text object**
- From anywhere in the word: `diw` or `daw`
- Total: 3 keystrokes (but cursor doesn't need to be at word start)

**Option C: Visual mode**
- Enter visual: `v`
- Extend to word: `w` or `aw`
- Delete: `d`
- Total: 3 keystrokes (plus you see the selection)

**Takeaway:** Depends on cursor position and confidence. Develop the habit of choosing based on context.

---

## Exercise 4: Visual Mode for Complex Selections

**Objective:** Practice visual mode for selections that don't fit neat categories.

**Scenarios:**

1. Select from middle of one line to middle of another: `v` + navigate, `$`, `j`, `l...`
2. Select multiple lines with irregular boundaries: `V` + `j...`, adjust with `o` if needed
3. Select a rectangular region: `Ctrl-v` + `j...l...`

Do each 3 times on different targets.

**Expected outcome:** Visual mode is your safety net for unusual selections. You see what you're operating on.

---

## Exercise 5: Search and Replace Speed Run

**Objective:** Complete realistic refactoring tasks quickly.

**Task 1:** Replace a word throughout the file in under 10 seconds
- `:` to enter command mode
- `%s/old/new/g` type the command
- Enter
- Done.

**Task 2:** Find all instances of a function and navigate through them in under 15 seconds
- `*` to search the function name
- `n`, `n`, `n` to navigate
- Done.

**Task 3:** Replace on the current line only in under 5 seconds
- `:s/word/new/g`
- Enter

Repeat each 3 times.

**Expected outcome:** Search and replace is a muscle memory operation. No thinking, just execution.

---

## Exercise 6: Mixed Drills — Real-World Edits

**Objective:** Simulate real editing, not just isolated commands.

**Scenario 1: Move a line up**
1. Delete current line: `dd`
2. Move up: `k`
3. Open line below: `o` or navigate and paste
4. Paste: `p`

**Scenario 2: Duplicate and modify**
1. Copy line: `yy`
2. Paste below: `o` + `p` or paste then reposition
3. Modify pasted line: `cw` or `ci"` or other edits

**Scenario 3: Find and fix all instances**
1. Find word: `*`
2. Fix on current line: `caw` + type replacement + Escape
3. Find next: `n`
4. Repeat fix: `.` (dot)
5. Repeat steps 3-4 for each instance

Do all three scenarios once. They should feel natural.

**Expected outcome:** Real editing is a flow of motions, operators, and corrections. Not isolated commands.

---

## Exercise 7: Speed Challenges with Time Limits

**Objective:** Build speed and confidence.

**Challenge 1: Delete a paragraph (under 3 seconds)**
- `dap`

**Challenge 2: Change all instances of a word on a line (under 5 seconds)**
- `:%s/word/new/g` + Enter

**Challenge 3: Select and delete a sentence (under 4 seconds)**
- `Vis` or `d + f. + Shift+.` (harder) or `vis` + `d`

**Challenge 4: Undo then redo a change (under 2 seconds)**
- `u` then `Ctrl-r`

**Challenge 5: Find and jump to the 3rd occurrence of a word (under 5 seconds)**
- `*` then `n` then `n`

Do each challenge 5 times. Your goal is to do them without thinking about the keystrokes.

---

## Exercise 8: Reflection — Your Vim Style

**Objective:** Develop self-awareness about your editing preferences.

Answer these questions:

1. **Which operator do you use most?** d (delete), c (change), or y (yank)? Why?

2. **Which text object feels most natural to you?** iw? i"? ip?

3. **Do you prefer operators+motions or visual mode?** Why?

4. **How often do you use the dot command (.)?** Is it automatic for you, or do you forget about it?

5. **Which search feature do you rely on most?** / (forward), * (word), or :%s (replace)?

6. **What surprised you most about Vim this week?** What's different from other editors you've used?

Your answers will shape how you evolve as a Vim user. There's no "right" style—just your style.

---

## Bonus: Speed Benchmarking

If you want to measure your progress, time yourself on this sequence:

**Starting condition:** File open, cursor at line 1.

**Task:** Move to line 50, find "hello", delete the word, undo, search again, replace all instances, save, and quit.

**Estimated time for a beginner:** 30 seconds
**Estimated time for an intermediate user:** 10 seconds
**Estimated time for an experienced user:** 5 seconds

Where are you now? Benchmark today. Return to this benchmark in a few weeks and see how much faster you've become.

---

[← Day 7: Week 1 Review](index.md) | [Day 7 Checkpoint →](checkpoint.md)
