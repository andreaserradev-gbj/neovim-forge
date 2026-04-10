---
day: 14
title: "Day 14 Exercises — Week 2 Integration"
type: "exercises"
---

[← Day 14: Week 2 Review & Interactive Vim Cheatsheet](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: The Full Workflow

Complete this integrated task:

1. Use `<leader>ff` to find "day-08"
2. Open the file
3. Use Flash (`s`) to jump to the word "keybindings"
4. Use surround `saiw"` to add quotes
5. Close the buffer with `<leader>bd`

Repeat 3 times with different files.

---

## Exercise 2: Multi-Window Editing

1. Create two split windows: `<leader>-`
2. In the left window, use `<leader>ff` to find one file
3. In the right window, use `<leader>/` to grep for text
4. Edit in both windows using `<C-hjkl>` to navigate
5. Resize windows using `<C-Up>` / `<C-Down>`

---

## Exercise 3: Buffer Navigation Blitz

1. Open 5 files: `nvim file1 file2 file3 file4 file5`
2. Use `<S-l>` and `<S-h>` to cycle through all 5 buffers
3. Use `<leader>bb` to jump back to the last file
4. Use `<leader>bo` to close all but one

Complete this in under 2 minutes.

---

## Exercise 4: Explorer + Picker Comparison

Complete the same task two ways:

**Method 1: Explorer**
- Use `<leader>e` to open explorer
- Navigate with hjkl
- Open a specific file

**Method 2: Picker**
- Use `<leader>ff` to search
- Type the filename
- Open it

Which was faster? Which felt more natural?

---

## Exercise 5: Speed Challenge

Time yourself completing this sequence:

1. Find a file with `<leader>ff`
2. Jump to a word with Flash (`s`)
3. Add quotes around it with `sa`
4. Split the window with `<leader>|`
5. Open another file in the new pane
6. Search for text with `<leader>/`
7. Close one window

Total time target: Under 3 minutes.

---

## Exercise 6: Surround Mastery

1. Find 10 different text items (quotes, brackets, parens)
2. Delete surround on 5 of them (`sd`)
3. Replace surround on the other 5 (`sr`)

Time yourself. This tests your surround fluency.

---

## Exercise 7: Composite Vim Thinking

Write down answers to:

1. When would you use Flash (`s`) vs. picker (`<leader>/`)?
2. When would you use explorer vs. file search?
3. How do windows (`<C-hjkl>`) and buffers (`<S-h>/<S-l>`) differ?
4. What's a task that requires all Week 2 skills combined?

---

## Exercise 8: Teach Someone Else

Pick one Week 2 feature and explain it to someone else (or write it down):
- How it works
- When to use it
- Example of how it saves time

Teaching deepens your understanding.

---

## Bonus: Create Your Own Workflow

Design a personal workflow that combines multiple Week 2 skills for a task you do frequently:

Example: "Renaming a variable across a project"
1. Use `<leader>/` to find all occurrences
2. Use Flash to position within each match
3. Use surround to change quotes if needed
4. Use buffers to view multiple files side-by-side

Document your workflow and time yourself.

---

[← Day 14: Week 2 Review & Interactive Vim Cheatsheet](index.md) | [Day 14 Checkpoint →](checkpoint.md)
