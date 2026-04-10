---
day: 16
title: "Day 16 Exercises"
type: "exercises"
---

[← Day 16: Diagnostics & Notifications](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Error Navigation Sprint

**Objective:** Practice navigating errors with `]e` and `[e`.

Open `app/src/lib/sample-data.ts`.

1. Intentionally create 3 type errors:
   - Line with `day: "one"` (should be number)
   - Line with `week: "3"` (should be number)
   - Line with `skills: "h"` (should be array)

2. From the top of the file, press `]e` to jump to the first error. Note which line. Fix it.
3. Press `]e` to jump to the next error. Fix it.
4. Press `]e` to jump to the third error. Fix it.
5. Press `]e` again — no more errors, so nothing happens.
6. Press `[e` to jump to the last error. (This goes backward.) Verify it's a fixed line.

**Expected outcome:** You're fast at jumping between errors. `]e` and `[e` are your reflex commands for "next error" and "previous error".

---

## Exercise 2: Diagnostic Filtering

**Objective:** Understand the difference between `]d` (any), `]e` (errors), and `]w` (warnings).

Create a file with both errors and warnings. Open `app/src/lib/types.ts`:

1. Change one field to trigger a type error: `day: string` (should be number).
2. Add an unused variable to trigger a warning: `const unused = 5;` (at module level, after interfaces).

Save. TypeScript reports both: one error, one warning.

3. From the top, press `]d`. It jumps to the first diagnostic (either the error or warning, whichever comes first).
4. Press `]d` again to jump to the next diagnostic (the other one).
5. Go back to the top. Press `]e`. It jumps only to the error, skipping the warning.
6. From the error, press `]e`. It tries to jump to the next error — if there are none, nothing happens.
7. From the top, press `]w`. It jumps only to the warning.

**Expected outcome:** You understand filtering. When you only care about errors (not warnings), use `]e`. When you want all diagnostics, use `]d`.

---

## Exercise 3: Trouble Workspace View

**Objective:** Navigate multiple files of errors with `<leader>xX`.

Keep both files from Exercise 2 with their errors and warnings. In Neovim:

1. Open `app/src/lib/types.ts`.
2. Press `<leader>xX` to open workspace diagnostics.

The Trouble panel shows all diagnostics from both files:
- type-error in types.ts
- unused-variable warning in types.ts
- type-errors in sample-data.ts (if you didn't fix them all)

3. In the Trouble panel, use `j/k` to navigate the list.
4. Press Enter on the first diagnostic. You jump to that file and line in the source buffer.
5. The cursor is now at the diagnostic location. Fix it. The Trouble panel updates.
6. In Trouble, press `j` to select the next diagnostic.
7. Press Enter to jump to it in the source. Fix it.
8. Continue until all diagnostics are fixed.
9. The Trouble panel becomes empty. Press `<leader>xX` to close it.

**Expected outcome:** Workspace diagnostics is your master error list. With multiple files open, it shows you where all problems are and lets you jump to any one instantly.

---

## Exercise 4: Document Symbols

**Objective:** Use `<leader>cs` to navigate a file's structure.

In `app/src/lib/types.ts`:

1. Press `<leader>cs` to show document symbols.

The Trouble panel lists:
- Day (interface)
- Exercise (interface)
- Challenge (interface)

2. Your cursor is on one of them. Press `j` to move to the next symbol.
3. Press Enter to jump to that symbol's definition in the source buffer.
4. You land at the `interface Challenge` line (or whichever you selected).
5. Close Trouble: press `<leader>cs` again (toggle off) or `:q` in the Trouble pane.

**Expected outcome:** Document symbols is your file navigator. For long files with many definitions, this beats searching.

---

## Exercise 5: Notification History

**Objective:** Manage notifications with Noice.

Trigger some notifications by doing various actions:

1. Run a type check: `npm run typecheck` in a terminal (or let Neovim's LSP provide type errors, which Noice captures).
2. In Neovim, press `<leader>snh` to open Noice history.

A panel or floating window appears showing recent messages. You see messages like:
- "Type checking passed"
- "LSP started"
- Build output, etc.

3. Use `j/k` to navigate the notifications.
4. Press Enter on one to expand it or jump to its context.
5. Press `<leader>snd` to dismiss all notifications and clear the history panel.

**Expected outcome:** You can review messages without them cluttering your editor. Noice keeps them available but out of the way.

---

## Exercise 6: Multi-Error Fixes

**Objective:** Use `]e` in a real refactoring scenario.

Scenario: You're renaming the `Challenge` interface (from Day 15) to `ChallengeDefinition`, but you only update the interface, not all usages.

1. In `app/src/lib/types.ts`, change `interface Challenge` to `interface ChallengeDefinition`.
2. Save. TypeScript reports errors: all usages of `Challenge` (in sample-data.ts, anywhere else) are now invalid type references.
3. In Neovim, press `]e` to jump to the first error.
4. The error is on a line in sample-data.ts: `const sampleChallenge: Challenge = { ... }` — now invalid because `Challenge` doesn't exist.
5. Change `Challenge` to `ChallengeDefinition`. Save.
6. Press `]e` to jump to the next error (if any). Repeat.
7. When no more errors, press `]e` and it does nothing — you've fixed them all.
8. Run `npm run typecheck` to confirm.
9. Undo: press `u` multiple times to restore `Challenge` to `interface Challenge` in types.ts.

**Expected outcome:** You've used error navigation in a real refactoring. Error-driven development: make a change, let LSP catch the breakage, jump to each error, fix it.

---

[← Day 16: Diagnostics & Notifications](index.md) | [Day 16 Checkpoint →](checkpoint.md)
