---
day: 11
title: "Day 11 Exercises"
type: "exercises"
---

[← Day 11: Buffers & Windows](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Window Navigation

Open a file and split it:

```bash
nvim app/src/pages/index.astro
```

Press `<leader>-` to split horizontally. Now you have two windows.

Navigate between them using `<C-k>` and `<C-j>`. Do this 20 times, alternating directions. Time yourself—can you do 20 switches in under 15 seconds?

---

## Exercise 2: Complex Layouts

Create a three-window layout:

1. Start with one window
2. Split horizontally: `<leader>-` (top and bottom)
3. Focus top window: `<C-k>`
4. Split vertically: `<leader>|` (top-left and top-right)
5. You now have three windows: top-left, top-right, bottom
6. Navigate to each window using `<C-hjkl>`
7. Close one window: `<C-w>d` or `:q`

Can you navigate from any window to any other in maximum 2 keypresses?

---

## Exercise 3: Resizing

In a three-window layout:

1. Focus the top-left window
2. Make it very tall: press `<C-Up>` several times
3. Make it very narrow: press `<C-Left>` several times
4. Focus another window and resize it
5. Try to distribute windows evenly

---

## Exercise 4: Buffer Navigation

Open multiple files:

```bash
nvim course/day-01/index.md course/day-02/index.md course/day-03/index.md
```

You now have three buffers open.

1. Use `<S-l>` to go to the next buffer
2. Use `<S-h>` to go to the previous buffer
3. Switch between buffers 10 times

Can you reach a specific buffer in under 5 keystrokes?

---

## Exercise 5: Closing Buffers

In a multi-buffer session:

1. Close one buffer: `<leader>bd`
2. Verify you're viewing a different buffer
3. Close all except one: `<leader>bo`

---

## Exercise 6: Window Layout Comparison

Compare horizontal vs. vertical splits:

**Horizontal:** Lesson on top, exercises below
**Vertical:** Lesson on left, exercises on right

Which is better for your screen size? Why?

---

## Exercise 7: Speed Test

Complete this workflow as fast as possible:

1. Open three files
2. Split the window horizontally
3. Navigate between windows using `<C-hjkl>`
4. Resize a window using `<C-Up>`/`<C-Down>`
5. Switch buffers using `<S-l>`
6. Close a buffer using `<leader>bd>`

Time yourself. Can you complete all steps in under 2 minutes?

---

## Exercise 8: Multi-File Editing

**Task:** Edit two files simultaneously using split windows.

1. Open two files with split
2. Edit left window
3. Move to right window with `<C-l>`
4. Edit right window
5. Compare the two edits

You've edited both without losing context.

---

[← Day 11: Buffers & Windows](index.md) | [Day 11 Checkpoint →](checkpoint.md)
