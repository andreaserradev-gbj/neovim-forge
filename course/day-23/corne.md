---
day: 23
track: "corne"
title: "Day 23 — Corne Companion: Folds & Terminal"
---

[← Day 23: Folds & Terminal](index.md) | [Course Index](../../COURSE.md)


## Folding on the Corne

Fold commands are straightforward on the Corne because they're all on the base layer or simple sequences.

### Fold Command Execution

| Operation | Keys | Hand | Execution |
|---|---|---|---|
| `za` (toggle) | `z` + `a` | Right + Left | Right-side z, then left-side a |
| `zc` (close) | `z` + `c` | Right + Left | Right-side z, then left-side c |
| `zo` (open) | `z` + `o` | Right + Left | Right-side z, then left-side o |
| `zR` (open all) | `z` + Shift+r | Right + Left | Right-side z, left index shift+r |
| `zM` (close all) | `z` + Shift+m | Right + Left | Right-side z, left pinky shift+m |
| `zf` (create fold) | `z` + `f` | Right + Left | Right-side z, then left-side f, then motion |
| `zd` (delete fold) | `z` + `d` | Right + Left | Right-side z, then left-side d |
| `zj` (next fold) | `z` + `j` | Right + Left | Right-side z, right-side j |
| `zk` (prev fold) | `z` + `k` | Right + Left | Right-side z, right-side k |

**Ergonomic note:** All fold commands start with `z`, which is on the right hand (right-pinky lower area). This means:
- Your right hand initiates the fold command
- Your left hand completes it (a, c, o, f, d, m, etc.)
- For `zj`/`zk`, your right hand does both (z, then j/k)

This is a natural alternation. One hand starts, the other finishes (or right hand completes if the letter is also on the right).

### Creating Folds with Motion

Creating a fold combines `zf` with a motion:

| Fold Type | Keys | Execution |
|---|---|---|
| 5 lines down | `zf5j` | z + f + 5 + j |
| Paragraph | `zfap` | z + f + a + p |
| Function | `zf%` | z + f + % |
| Until end of file | `zfG` | z + f + Shift+g |

All motions work naturally on the Corne because you've practiced them all week. `zf` is just `z` (right) + `f` (left), then your motion (which could be anything: `j`, `ap`, `%`, `G`, etc.).

---

## Terminal on the Corne

Terminal access is where the Corne's leader key (thumb Space) really shines.

| Operation | Keys | Hand | Execution |
|---|---|---|---|
| `<leader>ft` | Space + f + t | Left thumb + right + right | Thumb (always accessible) + two quick taps |
| `<leader>fT` | Space + F + T | Left thumb + right (shifted) | Thumb + shifted keys |
| `<C-/>` | iCtrl + / | Left inner + right | Dedicated Ctrl + slash on right |
| `Escape` (exit terminal mode) | J+K combo or top-left key | — | Your configured escape method |
| `exit` (close terminal) | type normally in terminal mode | — | Terminal accepts normal bash |

**Workflow on Corne:**

1. You're editing code. Hands on home row.
2. You want to run a test. Press `Space` (left thumb) — very comfortable, no hand movement
3. Tap `f` (right hand index, upper row)
4. Tap `t` (right hand index, upper row)
5. Terminal opens at cwd, hands are still in roughly the home position
6. You're in terminal mode. Type your command: `npm test`
7. Watch output. When done, press Escape (your configured escape: J+K or other)
8. You're back in Vim, in normal mode
9. If you want to close the terminal, type `exit` and Enter, or `:q` to close the buffer

**Comparison to standard keyboard:**
- Standard: `leader` is often Spacebar, but reaching `f` then `t` requires right hand movement
- Corne: `Space` is the left thumb (always home), `f` and `t` are on the right side but the two taps are rhythmic and quick

The Corne advantage is that `<leader>` is a *dedicated thumb key* on both halves. Your left thumb never leaves its resting position on Space.

---

## Terminal Mode Specifics on the Corne

When you're inside terminal mode (after pressing `<leader>ft`), you're typing into a shell, not Vim:

| Action | How | Notes |
|---|---|---|
| Type commands | Normally | `npm test`, `git status`, etc. — standard bash |
| Interrupt (Ctrl+C) | iCtrl + C | Left inner key + c (very comfortable) |
| Exit mode without closing | Escape | J+K or your config |
| Close terminal | `exit` + Enter, or `:q` | Type `exit` in terminal, or quit the buffer in Vim |
| Scroll output | `j`/`k` in normal mode | After exiting terminal mode, use normal Vim navigation |

**Workflow detail:** The most common pattern is:

1. `<leader>ft` — Space + f + t (open terminal)
2. Type command, e.g., `npm run build` + Enter
3. Watch output (in terminal mode)
4. Escape (exit terminal mode)
5. Scroll the terminal output with `j`/`k` to review
6. `:q` to close the terminal buffer

Or:

1. `<leader>ft` — open terminal
2. Type `npm test`, watch for failures
3. Escape, find the error in the file using `/`
4. Fix the code
5. `:w` to save
6. `<leader>ft` again (or `<C-/>` to toggle) to reopen the terminal
7. Press up arrow (or `!!` in bash) to repeat the last command

---

## Ergonomic Pairing: Folds + Terminal

By Day 23, you have a powerful combination:

- Use `zM` to collapse all folds so you see only the structure of the file
- Use `<leader>ft` to open a terminal and run tests
- See an error? `Escape` to exit terminal mode, use `/` to find the error location
- Use `zR` to expand all folds, or `zo` to open just the fold with the error
- Edit and save
- Re-run the test in the terminal

**Hand movement analysis:**

- Folding: right hand `z`, then left hand letter (minimal movement)
- Terminal: left thumb `Space` (always home), right hand `ft` (quick tap)
- Finding errors: `/` to search (right hand, one keystroke)
- Editing: home row (no movement)
- Saving: `:w` (colon + left hand, then right hand)

By this point in the course, every operation is frictionless. Your hands stay roughly on the home row, and complex tasks are just a sequence of short, rehearsed finger movements.

---

## Full Workflow Example: Bug Fix on the Corne

Here's a realistic Day 23 workflow:

1. **Open file:** `nvim src/components/Button.tsx` (from terminal or file explorer)
2. **Collapse:** Press `zM` to close all folds
3. **Scan:** Use `zj` to jump through folds and find the render function
4. **Open:** Press `zo` to expand that fold
5. **Spot issue:** You see the code. Looks like a typo.
6. **Test:** Press Space + f + t (`<leader>ft`) to open terminal
7. **Run test:** Type `npm test -- Button` to run tests for this component
8. **Output:** See the error message. Note the line number.
9. **Exit terminal:** Press Escape (J+K or configured)
10. **Find error:** Use `G` to jump to the line mentioned in the error
11. **Edit:** Press `i` to insert, fix the typo, Escape
12. **Save:** `:w`
13. **Re-test:** Press Space + f + t (`<leader>ft` again, or `<C-/>` to toggle)
14. **Run test:** Press up arrow (bash history) to re-run the test
15. **Success:** Green. Close with `exit` or Escape + `:q`
16. **Collapse again:** Press `zM` to clean up the view before the next task

**Hand movement count:** Almost none. Everything is rhythm and muscle memory. Left thumb for leader, right hand for navigation, occasional left pinky for shift. No corner reaches, no awkward stretches.

This is the promise of Corne + Vim: keyboard-driven computing where the keyboard becomes transparent. You're not thinking about keys; you're just thinking about code.

---

## Corne Tips for Folds and Terminal

1. **Fold in read-only mode:** When reviewing code, use `zM` to scan structure without modifying anything. Use `zo` to open specific sections.

2. **Terminal for CI/CD checks:** Open terminal, run linter, type checker, tests. Fix errors immediately. This tight feedback loop is where the Corne + Vim combo excels.

3. **Sticky terminal:** You might prefer keeping the terminal open and just switching focus to it. Use `<C-h/j/k/l>` (iCtrl + hjkl) to switch between code window and terminal window.

4. **Terminal resize:** If the terminal is too small, use window commands (`<leader>-` and `<leader>|`) to resize it. It's all keyboard-driven.

5. **Escape reliability:** Make sure your J+K escape combo is tuned properly so you can exit terminal mode reliably. If it misfires, adjust the timing window in your firmware.

---

## Next Steps

By the end of Day 23, your Vim workflow includes:

- Fast navigation with motions, marks, and jumps
- Code folding to manage complexity
- Terminal integration for testing and running commands
- Collapsible UI components in your app

All on a keyboard with no mouse involvement. This is the essence of Vim mastery: not knowing every command, but having a cohesive system where tools compose together seamlessly.

Day 24 introduces advanced text objects, which take your editing power even further.

---

[← Day 23: Folds & Terminal](index.md) | [Day 23 Exercises](exercises.md) | [Day 23 Checkpoint](checkpoint.md)
