---
day: 25
track: "corne"
title: "Day 25 — Corne Companion: Project-Wide Replace"
---

[← Day 25: Project-Wide Replace](index.md) | [Course Index](../../COURSE.md)


## grug-far on the Corne

Opening grug-far is the only new motion:

| Operation | Keys | Hand |
|---|---|---|
| `<leader>sr` | Space + s + r | Left thumb + right-hand taps |

Once in grug-far, you're typing in input fields, so no special Vim motions apply. Standard typing and Escape to exit.

---

## Full Refactoring Workflow

1. **Identify what to rename:** Scan your codebase
2. **Open grug-far:** Space + s + r (left thumb, right hand)
3. **Type search:** Your old name or pattern
4. **Type replace:** Your new name or pattern
5. **Review:** Look at the diff preview
6. **Confirm:** Press the confirmation key (default `:q`)
7. **Undo if needed:** `u` to revert

This is a seamless keyboard workflow. By Day 25, all your refactoring is keyboard-driven.

---

## The Big Picture

You've now learned:
- **Navigation** (Days 1-9): hjkl, motions, flash, jumps, marks
- **Editing** (Days 3-5): operators, text objects, visual mode
- **Code intelligence** (Days 15-17): LSP, diagnostics, formatting
- **Git & workflow** (Days 18-20): gitsigns, macros, terminal
- **Advanced editing** (Days 22-25): marks, folds, advanced text objects, project-wide replace

By Day 25, you can open a codebase and refactor it at speed—rename components, extract functions, fix bugs—all at the keyboard, no context switching.

The Corne makes all of this frictionless because every operation fits naturally on the 46 keys.

---

[← Day 25: Project-Wide Replace](index.md) | [Day 25 Exercises](exercises.md) | [Day 25 Checkpoint](checkpoint.md)
