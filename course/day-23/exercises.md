---
day: 23
title: "Day 23 Exercises"
type: "exercises"
---

[← Day 23: Folds & Terminal](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Fold Exploration

Open `app/src/pages/index.astro` or any TypeScript file with multiple functions.

**Objective:** Understand how treesitter folds work.

1. Jump to the top: `gg`
2. Close all folds: `zM` — observe that the file collapses to show only function names
3. Navigate through folds: `zj` to jump to next fold
4. Open the fold at cursor: `zo`
5. Navigate inside the opened fold: use `j`/`k` to scroll
6. Close it: `zc`
7. Open all: `zR` — the entire file expands

**Challenge:** Close all folds, then use `zj` repeatedly to jump through every fold in the file. Count them.

**Expected outcome:** Treesitter folds let you scan a large file structure instantly. Collapsed, you see the architecture; expanded, you see the details.

---

## Exercise 2: Manual Fold Creation

Open `course/day-23/index.md`.

**Objective:** Create and delete manual folds.

1. Navigate to the "Folds" section: `/Code Folding`
2. Position cursor at the line "Fold operations:"
3. Create a fold down to the next paragraph: `zf` then navigate to the end (e.g., `zf10j`)
4. The fold is created. Press `za` to toggle it
5. Create another fold on a different section: navigate, then `zf` with a motion
6. Close all: `zM`
7. Delete one fold: navigate to it, press `zd`

**Challenge:** Create 3 folds, close all, then open only the middle one.

**Expected outcome:** Manual folds are useful for temporary organization. You can hide sections to focus on what you're editing.

---

## Exercise 3: Terminal Workflow

**Objective:** Use the terminal for a full build/test cycle.

1. Open a terminal: `<leader>ft`
2. Run your project's build command (e.g., `npm run build`, `cargo build`, etc.)
3. Watch the output—note if there are any errors
4. Exit terminal mode: `Escape`
5. If there were errors, search for the error location: `/error message` or `/file:line`
6. Navigate to the problematic code
7. Make a fix
8. Save: `:w`
9. Open terminal again: `<leader>ft` or `<C-/>`
10. Re-run the build command
11. Close terminal: `exit` or `Escape` then `q` on the terminal buffer

**Challenge:** Complete a full edit-build-fix cycle without leaving Neovim.

**Expected outcome:** The terminal is a seamless part of your editing workflow.

---

## Exercise 4: Collapsible Component Usage

Open `app/src/pages/dev-workflow.md` (the page you created in Build).

**Objective:** Verify the collapsible sections work.

1. Start `npm run dev`
2. Navigate to `http://localhost:4321/dev-workflow/`
3. Click on each collapsible section header
4. Verify they expand and collapse
5. Check the content inside each section

**Challenge:** Add a new collapsible section for "Debugging" with tips for debugging in Vim.

**Expected outcome:** Collapsible sections are a great UX pattern for documentation. You can now use this pattern in other pages.

---

## Exercise 5: Combining Folds and Terminal

**Objective:** Practice the workflow of folding code, running tests, and navigating errors.

1. Open a code file: `nvim app/src/components/SomeComponent.astro`
2. Use `zM` to collapse all folds—you see the structure
3. Open a terminal: `<leader>ft`
4. Run tests: `npm test` or a linter: `npx eslint .`
5. Watch for errors and note the file/line
6. Close terminal: `Escape` then exit
7. Navigate to the error file/line
8. Use `zR` to expand all folds and see context
9. Fix the error
10. Save and re-run

**Challenge:** Do this cycle 3 times with 3 different edits.

**Expected outcome:** Folds + terminal is a powerful combination. You can work cleanly and validate your work instantly.

---

## Exercise 6: Dev Workflow Reference

**Objective:** Build your personal cheat sheet.

The `/dev-workflow/` page you created is a reference. Add 3 more collapsible sections for:

1. Your most-used Vim commands
2. Common git operations
3. Debugging tips for your project

Update `app/src/pages/dev-workflow.md` to include these sections.

**Expected outcome:** You now have a living document of your workflow. It's a resource for your future self and anyone joining your project.

---

## Exercise 7: Reflection

Answer these:

1. Did you find folds useful for reducing visual clutter? When would you use them?
2. How did using the terminal inside Vim change your workflow?
3. Would you use collapsible sections in production documentation? Why or why not?
4. What else might you add to the dev workflow page?

Write your answers. This reflection helps you integrate these tools into your long-term practice.

---

[← Day 23: Folds & Terminal](index.md) | [Day 23 Checkpoint →](checkpoint.md)
