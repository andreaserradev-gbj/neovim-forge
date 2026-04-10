---
day: 21
title: "Day 21 Exercises"
type: "exercises"
---

[← Day 21: Week 3 Review](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Full LSP Workflow

**Objective:** Navigate, understand, and refactor using LSP.

1. Open a TypeScript file in your project
2. Find a function or type name
3. Press `gd` to go to its definition
4. Press `gr` to see all references
5. Press `K` to see its documentation
6. Position on the name and press `<leader>cr` to rename it
7. Verify all references update
8. Press `]e` to check for type errors
9. All errors should be resolved by the rename

**Expected outcome:** LSP is your navigation and refactoring tool.

---

## Exercise 2: Error-Driven Development

**Objective:** Use diagnostics to find and fix problems.

1. Intentionally introduce a type error (wrong type value, missing field, etc.)
2. Open Trouble with `<leader>xx`
3. Navigate to each error with `j/k`
4. Press Enter to jump to the error
5. Fix it in the source file
6. The Trouble panel updates
7. Repeat until all errors are gone
8. Close Trouble

**Expected outcome:** Errors guide your fixes.

---

## Exercise 3: Git-Aware Refactoring

**Objective:** Make changes, review them, stage them, commit them.

1. Make 3 distinct edits to a file (create 3 separate hunks)
2. Press `]h` to jump to each hunk
3. On each hunk, press `<leader>ghp` to preview it
4. Press `<leader>ghs` to stage it
5. Format the file with `<leader>cf`
6. Exit Neovim and commit: `git commit -m "day-21: refactor..."`

**Expected outcome:** Your workflow is code-aware, error-aware, and git-aware.

---

## Exercise 4: Register Management

**Objective:** Use registers to juggle snippets during refactoring.

1. Copy three different code blocks to registers a, b, c:
   - `"ayy` (copy to register a)
   - `"byy` (copy to register b)
   - `"cyy` (copy to register c)
2. Later, paste them in any order:
   - `"ap` then `"cp` then `"bp`
3. Use system clipboard to copy code outside Vim:
   - `"+yy` (copy to OS clipboard)
   - Paste in another app
4. Use black hole to discard:
   - `"_dd` (delete without saving)

**Expected outcome:** You have multiple clipboards at your fingertips.

---

## Exercise 5: Macro-Driven Automation

**Objective:** Record and replay a macro to automate repetitive work.

1. Create 5 identical structures that need transformation
2. Record a macro: `qa ... q`
3. Position on the first unprocessed structure
4. Replay 4 times: `4@a`
5. All 5 structures are now transformed

**Expected outcome:** Macros handle repetition automatically.

---

## Exercise 6: Integrated Workflow Challenge

**Objective:** Combine all Week 3 skills in a single scenario.

**Scenario:** You need to:
1. Refactor a component name (uses gd, gr, <leader>cr)
2. Fix type errors introduced (uses ]e, <leader>xx, LSP understanding)
3. Format the code (uses <leader>cf)
4. Copy useful snippets for later (uses named registers)
5. Review and stage changes (uses ]h, <leader>ghp, <leader>ghs)
6. Commit (uses git commit)

Complete this entire flow in under 10 minutes. Time yourself. This is the professional vim workflow.

**Expected outcome:** You're fluent with all Week 3 skills working together.

---

[← Day 21: Week 3 Review](index.md) | [Day 21 Checkpoint →](checkpoint.md)
