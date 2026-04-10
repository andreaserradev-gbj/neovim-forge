---
day: 3
title: "Day 3 Exercises"
type: "exercises"
---

[← Day 3: The Operator Grammar](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Delete, Change, Copy — All Motions

**Objective:** Practice operators with different motions.

Open `app/src/pages/index.astro` in Neovim.

**Task 1: Delete with word motions**

1. Find the welcome paragraph (the `<p>` tag with your intro text).
2. Navigate to the first word of the paragraph content.
3. Press `dw` to delete the word.
4. Navigate to the second word.
5. Press `dw` again.
6. Undo both with `uu`.

**Task 2: Delete with line motions**

1. Find a line with content (e.g., the `<a>` link tag).
2. Position your cursor in the middle of the line.
3. Press `d$` to delete from cursor to end of line.
4. Undo with `u`.
5. Now delete the entire line with `dd`.
6. Undo with `u`.

**Task 3: Change with motions**

1. Find a word you want to replace (e.g., "Welcome" or "Start").
2. Position your cursor on the first character of that word.
3. Press `cw` to change the word (delete and enter insert mode).
4. Type a replacement word.
5. Press Escape.
6. Undo with `u`.

**Expected outcome:** Delete removes text and leaves you in normal mode. Change removes text and enters insert mode so you can type immediately. Both use the same motions (w, $, etc.).

---

## Exercise 2: Yank and Paste

**Objective:** Copy and move text.

Stay in the same file.

**Task 1: Copy and paste a word**

1. Find a word you want to duplicate (e.g., in the link text).
2. Position your cursor on the word.
3. Press `yw` to yank (copy) the word.
4. Navigate to a new location using `j`, `w`, or other motions.
5. Press `p` to paste the word after your cursor.
6. The word appears at the new location.
7. Undo with `u`.

**Task 2: Copy and paste a line**

1. Find a complete line (e.g., `<h1>` or `<p>` tag).
2. Position your cursor anywhere on that line.
3. Press `yy` to yank the entire line.
4. Navigate to a new location (use `j` to go to the next line, then `o` to create space).
5. Press `p` to paste.
6. The line is duplicated below your current location.
7. Press `u` to undo.

**Task 3: Paste before cursor with `P`**

1. Yank a word or line again (use `yw` or `yy`).
2. Navigate to a new location.
3. Press `P` (capital p) to paste *before* the cursor (instead of after).
4. The pasted text appears before your cursor position.
5. Undo.

**Understanding:** `p` (paste after) and `P` (paste before) give you control over where the text lands. Use whichever fits your editing flow.

---

## Exercise 3: Delete + Paste = Move

**Objective:** Understand how delete and paste combine for moving text.

Create a new temporary file or stay in index.astro.

**Scenario:** You have three lines:
```
<p>Line 1</p>
<p>Line 2</p>
<p>Line 3</p>
```

You want to move Line 2 below Line 3.

**Steps:**
1. Navigate to Line 2 (the middle line).
2. Press `dd` to delete the line (it goes into a register).
3. Navigate to Line 3.
4. Press `o` to open a new line below.
5. Press `p` to paste. The deleted Line 2 appears.

Result:
```
<p>Line 1</p>
<p>Line 3</p>
<p>Line 2</p>
```

You've moved a line by deleting it and pasting at a new location. This is a fundamental Vim workflow.

**Challenge:** Now move Line 3 back to the middle position using the same technique.

---

## Exercise 4: Counts and Operators

**Objective:** Practice combining counts with operators.

Open any file with multiple lines (like index.astro or days.astro).

**Task 1: Delete multiple words**

1. Find a line with at least 5 words.
2. Position your cursor at the start of a word.
3. Press `3dw` to delete 3 words at once.
4. Three words vanish in one keystroke.
5. Undo with `u`.

**Understanding:** The count (3) multiplies the motion (w). So `3dw` is "delete 3 words" in one command, not "delete word, delete word, delete word" three times.

**Task 2: Delete multiple lines**

1. Find a section with several lines.
2. Position your cursor on one line.
3. Press `5dd` to delete 5 lines.
4. Five lines disappear.
5. Undo with `u`.

**Task 3: Copy multiple lines**

1. Position your cursor on a line.
2. Press `2yy` to yank 2 lines.
3. Navigate to a new location.
4. Press `p` to paste both lines.

**Expected outcome:** Counts are incredibly powerful. Instead of pressing `dw` multiple times, you press `3dw` once. It's faster and feels more natural once you get used to predicting the count.

---

## Exercise 5: The Dot Command Repetition

**Objective:** Master the dot (`.`) command for repeating actions.

Stay in a file with multiple similar elements.

**Setup:** Imagine you have multiple paragraphs starting with the same word:

```html
<p>Welcome to the course</p>
<p>Welcome to day 3</p>
<p>Welcome to vim</p>
```

**Task:**
1. Navigate to the first "Welcome" word.
2. Delete it: `dw`.
3. Your first paragraph now reads: `<p>to the course</p>`.
4. Navigate to the second "Welcome".
5. Press `.` (dot) — the dot command.
6. That "Welcome" is deleted too, without typing `dw` again.
7. Navigate to the third "Welcome".
8. Press `.` again.
9. Deleted again.

You've deleted three words by typing the command once and pressing dot twice.

**Understanding:** The dot command is your repetition key. After any change (delete, change, insert, etc.), pressing `.` repeats that exact change at your new cursor position. This is speed. Skilled Vim users rely on the dot command heavily.

**Challenge:** Try a more complex change:

1. Find a word.
2. Change it: `cw` and type a replacement.
3. Press Escape.
4. Navigate to another similar word.
5. Press `.` — the change repeats.

The dot command repeated a change operation, not just a delete. This works because the dot doesn't care *what* you changed—it just repeats whatever happened last.

---

## Exercise 6: Operator Grammar in Real Code

**Objective:** See how operators shine in real editing.

Create a new HTML structure in a temp file or in index.astro:

```html
<div class="container">
  <h2>Section 1</h2>
  <p>Content here</p>
  <h2>Section 2</h2>
  <p>Content here</p>
  <h2>Section 3</h2>
  <p>Content here</p>
</div>
```

**Task 1: Delete all the `<h2>` tags**

1. Navigate to the first `<h2>`.
2. Select and delete the entire line: `dd`.
3. Navigate to the next `<h2>` (now on a different line because you deleted one).
4. Press `.` (dot) to repeat the delete.
5. Press `.` again for the next one.

All three heading tags are gone in 5 keystrokes (one `dd`, then three dots, then navigate with j or f).

**Task 2: Change the class name on a div**

1. Find `class="container"`.
2. Navigate to "container" (use `f"` or `w`).
3. Change the word: `cw` and type a new class name.
4. Press Escape.
5. If you had multiple divs with the same class, you could use `.` to repeat the change on each one.

**Understanding:** Operators + counts + dot command = speed. You're not thinking about individual characters. You're thinking about *chunks of text*: words, lines, phrases. The operators manipulate those chunks surgically.

---

## Exercise 7: Reflection

**Objective:** Build awareness of operator patterns.

Answer these questions:

1. **Which operator did you use most?** Delete (d)? Change (c)? Copy (y)?
2. **Which motion felt most natural with operators?** Word (w)? End of line ($)? Line (no motion)?
3. **Why is the dot command powerful?** Think about scenarios where you'd repeat the same edit multiple times in a file. How does `.` save you keystrokes?
4. **Can you think of a real-world code task where you'd use operators?** For example: renaming a variable, deleting commented-out lines, moving functions around.
5. **What's the mental difference between:**
   - `dw` then `p` at a new location (delete and paste = move)
   - `yw` then `p` at a new location (copy and paste = duplicate)

---

## Bonus: Operator Math Challenge

If you want to get deep into composition:

**Write down the vim command for each task:**

1. Delete the next 7 words: `_______`
2. Change the current line: `_______`
3. Copy from here to the end of the line: `_______`
4. Delete 3 lines below this one: `_______`
5. Change the word starting here, then repeat with dot on the next similar word: `cw`, type replacement, `Escape`, navigate, `.`
6. Delete everything from here to the next occurrence of a specific character: `d` + `f{char}`

**Answers:**
1. `7dw` or `d7w` (both work)
2. `cc` or `c^c$` (cc is the shortcut)
3. `y$` (yank to end of line)
4. `3dd` or `d3d` (delete 3 lines)
5. `cw`, type, `Escape`, navigate, `.`
6. `df{char}` (delete to find character)

This shows the compositionality: you understand the parts, and you can combine them infinitely.

---

[← Day 3: The Operator Grammar](index.md) | [Day 3 Checkpoint →](checkpoint.md)
