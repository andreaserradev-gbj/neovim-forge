---
day: 6
title: "Day 6 Exercises"
type: "exercises"
---

[← Day 6: Search & Destroy](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Search Forward and Navigate

**Objective:** Master `/` and `n`/`N` for navigation.

Open any file with repeated words (like `course/day-06/index.md` or `app/src/pages/days.astro`).

**Task:**

1. Press `/` to open search
2. Type "day" (or any word that appears multiple times)
3. Press Enter
4. Your cursor jumps to the first match
5. Press `n` to jump to the next match
6. Press `n` repeatedly to visit all matches
7. Press `N` to go backward through matches
8. Press Escape to clear search highlight

**Expected outcome:** You navigate through all matches using `n` and `N`. This is how you find every occurrence of a word in a file.

---

## Exercise 2: Search Backward

**Objective:** Practice `?` for backward search.

**Setup:** Any file, cursor in the middle.

1. Press `?` to open backward search
2. Type a word you know appears earlier in the file
3. Press Enter
4. Cursor jumps backward to the first match (going toward the top)
5. Press `n` (continues backward)
6. Press `N` (goes forward)

**Expected outcome:** Backward search is the mirror of forward. `n` continues in the direction of the search.

---

## Exercise 3: Search Current Word with `*` and `#`

**Objective:** Learn the shortcut for searching the word under your cursor.

**Task:**

1. Navigate to any word using `w` or `f`
2. Position cursor on the word
3. Press `*` (search forward for this word)
4. Jump to next occurrence
5. Press `*` again to jump to the next
6. Press `#` to search backward from here
7. Jump to previous occurrence

**Expected outcome:** `*` and `#` are faster than typing `/word`. No need to type the pattern.

---

## Exercise 4: Single-Line Substitution

**Objective:** Practice `:s` for replacing on one line.

Create a test line:

```
hello world hello there hello
```

**Task 1: First match only**

1. Navigate to that line
2. Type `:s/hello/hi/` and press Enter
3. First "hello" becomes "hi"
4. Result: `hi world hello there hello`
5. Undo with `u`

**Task 2: All matches on line**

1. Type `:s/hello/hi/g` and press Enter
2. All "hello" become "hi"
3. Result: `hi world hi there hi`

**Expected outcome:** The `g` (global) flag replaces all occurrences on the line. Without it, only the first is replaced.

---

## Exercise 5: File-Wide Substitution

**Objective:** Replace text everywhere in the file.

**Setup:** Open a file with a word that appears on multiple lines.

**Task 1: Replace first on each line**

1. Type `:%s/old/new/` (substitute on every line, first occurrence)
2. Press Enter
3. First "old" on each line becomes "new"
4. Undo with `u`

**Task 2: Replace all everywhere**

1. Type `:%s/old/new/g` (substitute globally on every line)
2. Press Enter
3. Every "old" becomes "new" throughout the file
4. Undo with `u`

**Task 3: Replace with confirmation**

1. Type `:%s/old/new/gc` (substitute globally with confirm)
2. Press Enter
3. For each match, Vim asks "Replace? (y/n/a/q)"
4. Type `y` to replace, `n` to skip, `a` to replace all remaining, `q` to quit

**Expected outcome:** File-wide replace is powerful and fast. The confirm flag gives you safety.

---

## Exercise 6: Regex in Searches

**Objective:** Use regex patterns for advanced searching.

**Setup:** Any file, preferably with code (so you can find patterns like function definitions).

**Task 1: Search lines starting with a character**

1. Press `/^d` to search for lines starting with "d"
2. Each `n` jumps to the next line starting with "d"

**Task 2: Search lines ending with a character**

1. Press `/$` to search for lines ending with "$" (or any pattern)
2. Navigate with `n`

**Task 3: Search for a pattern**

1. Press `/hello.*world` to search for "hello" followed by anything, then "world"
2. This finds "hello beautiful world", "hello darling world", etc.

**Expected outcome:** Regex patterns extend search beyond exact matches. You can find patterns, not just words.

---

## Exercise 7: Combining Search with Operators

**Objective:** Use search to select regions for operators.

**Advanced task:**

1. Position cursor at the start of a line
2. Delete until the next "end": `d/end`
3. Your cursor jumps to "end" and everything in between is deleted

This is less common than operators + text objects, but it shows how search composes with editing.

---

## Exercise 8: Real-World Scenario — Refactoring with Search

**Objective:** Use search and replace for a realistic refactoring task.

**Scenario:** You have an old CSS class name used in multiple places, and you want to rename it.

Old: `class="old-button"`
New: `class="new-button"`

**Steps:**

1. Open a file with multiple instances of "old-button"
2. Type `:%s/old-button/new-button/g` and press Enter
3. All instances are replaced instantly
4. No need to navigate to each one manually

**Expected outcome:** Search and replace is the fastest way to refactor across files. This is a daily tool.

---

## Exercise 9: Reflection

**Objective:** Deepen your understanding of search.

Answer:

1. **Why is `*` faster than `/pattern`?** What's the trade-off?

2. **When would you use `?` (backward search) instead of `/` (forward)?** Can you think of a real scenario?

3. **What's the difference between `:s/old/new/` and `:s/old/new/g`?** Which is safer?

4. **Why is the confirm flag (`c`) useful?** When would you use it?

5. **How do search and replace extend Vim's power beyond local editing?**

---

## Bonus: Advanced Substitution

If you want to go deeper:

1. **Backreferences in replace:** `:%s/\(hello\) \(world\)/\2 \1/g` swaps "hello world" to "world hello"

2. **Conditional substitution:** `:%s/^/# /` adds "# " to the start of every line (useful for commenting)

3. **Delete lines matching pattern:** `:%s/pattern//g` removes all lines matching pattern

These are more advanced, but they show how powerful substitution can be.

---

[← Day 6: Search & Destroy](index.md) | [Day 6 Checkpoint →](checkpoint.md)
