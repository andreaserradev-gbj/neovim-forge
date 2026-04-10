---
day: 22
track: "corne"
title: "Day 22 — Corne Companion: Marks & Jumps"
---

[← Day 22: Marks & Jumps](index.md) | [Course Index](../../COURSE.md)


## Mark Navigation on the Corne

Marks are pure keyboard sequences with no tricky timing or stretching. The recommended Corne layout makes mark operations especially smooth.

### Setting Marks

| Operation | Keys | Hand | Notes |
|---|---|---|---|
| `m` | Base layer m (left side) | Left | Standard key |
| `ma` (set mark a) | `m` + `a` | Left | Two taps, no reach |
| `mZ` (set global mark Z) | `m` + Shift+z | Left | Shift+left pinky + tap |

All mark-setting is on the left hand. This is natural since `m` is on the left side.

### Jumping to Marks

| Operation | Keys | Hand | Notes |
|---|---|---|---|
| `'` (apostrophe) | Shift+` on right pinky area | Right | One key |
| `'a` (jump to mark a) | `'` + `a` | Right + Left | Two separate taps |
| `` ` `` (backtick) | Base layer `` ` `` on Raise layer | Right | One key combo |
| `` `a `` (jump to exact position) | `` ` `` + `a` | Right + Left | Two taps |

**Key difference:** On a standard keyboard, apostrophe and backtick require reaching to different places. On the Corne, both are accessible from the right hand with minimal movement:
- `'` (apostrophe) is often mapped to the right pinky area (easier reach)
- `` ` `` (backtick) is on Raise+right-top-area

Once you've pressed `'` or `` ` ``, the mark letter comes from either hand naturally: `a` is left side, so you tap left; `Z` is left side shifted.

---

## Jump List Navigation on the Corne

| Operation | Keys | Hand | Execution |
|---|---|---|---|
| `<C-o>` (jump back) | iCtrl + o | Left + Right | Left inner key (no timing) + right-hand o |
| `<C-i>` (jump forward) | iCtrl + i | Left + Right | Left inner key + right-hand i |
| `:jumps` | Colon command | — | Type normally |

**Ergonomic advantage:** `<C-o>` and `<C-i>` use the dedicated iCtrl inner key on the left, eliminating any timing ambiguity. You press iCtrl (which sits in the perfect position for your left index), then tap `o` or `i` on the right side. It's a rhythm: left index + right hand tap.

This is *extremely* comfortable on the Corne because you're not reaching for the corner Ctrl key like on a standard keyboard. It's right there at the inner key position.

---

## Change List Navigation on the Corne

| Operation | Keys | Hand | Execution |
|---|---|---|---|
| `g;` (previous change) | `g` + `;` | Left + Right | Left-hand g, then right-pinky ; |
| `g,` (next change) | `g` + `,` | Left + Right | Left-hand g, then right-side , |

The `;` key on the Corne is typically on the right pinky outer position (same position as the standard keyboard). The `,` is on the right side as well (above the period key in most layouts). Both are comfortable one-handed sequences: `g` on left, then the character on right.

---

## Special Marks on the Corne

| Mark | Operation | Execution | Notes |
|---|---|---|---|
| `''` | Back to last jump | `'` + `'` | Right pinky twice (rhythm) |
| `'`` | Back to last jump (exact) | `` ` `` + `` ` `` | Right side twice (rhythm) |
| `'.` | Jump to last edit | `'` + `.` | Right pinky + right pinky (same hand) |
| `'^` | Jump to last insert exit | `'` + Shift+6 | Right pinky + shift combo |
| `'[` | Start of last change | `'` + `[` | Right + right (both comfortable reaches) |
| `']` | End of last change | `'` + `]` | Right + right (both comfortable reaches) |

The beautiful thing about special marks on the Corne: almost all of them use the right hand. `'` (apostrophe) is on the right, so `'` + letter is almost always a right-hand sequence:
- `'.` — right pinky + right side period
- `'[` — right pinky + right side bracket
- `']` — right pinky + right side bracket

This means *you never leave home position* to use special marks. Your right hand handles the entire operation while your left rests.

---

## Full Workflow Example on the Corne

Here's a realistic multi-file refactoring on the Corne:

1. **Start:** You're editing `App.tsx`. Find a section to remember.
   - Use `/function` to search, land on the function definition
   - Press `m` (left), then `F` (left, shift), set global mark F

2. **Switch files:** You realize you need to check another file.
   - `:e components/Button.tsx` (colon command, type normally)
   - Find the Button component definition
   - Press `m` (left), then `B` (left, shift), set global mark B

3. **Navigate back and forth:** You jump between the two locations using jump list history.
   - `<C-o>` — iCtrl (left inner) + o (right) — back to App.tsx
   - `<C-i>` — iCtrl (left inner) + i (right) — forward to Button.tsx
   - Or directly jump: `'F` to App, `'B` to Button

4. **Refactor:** You edit code and want to review all your changes.
   - After several edits: press `g;` (g left, ; right) to jump to the previous change
   - Keep pressing `g;` or switch direction with `g,` to walk through your edit history

5. **Exit:** Done with your work.
   - `:w` to save (colon command)
   - `<leader>qq` to quit and save session (Space thumb + q + q)

**Hand position analysis:** Throughout this workflow, your hands barely leave the home row. Mark operations stay on the right side (for jumps) or alternate left-right naturally. The Corne layout makes this feel fluid because every key is within reach.

---

## Marks vs Jump List: When to Use Each

On the Corne, both marks and the jump list are equally accessible (both use comfortable key combinations). Here's when to use each:

### Use Marks When:
- You're working across 2+ files and want to remember specific positions in each
- You need to return to the exact same position repeatedly
- You're doing a complex refactoring and want to preserve your "mental anchors"

**Example:** Editing a component and its parent file. `mC` for component, `mP` for parent. You can jump between them instantly with `'C` and `'P` without relying on your jump history.

### Use Jump List When:
- You want to "undo" your navigation (like browser back button)
- You're exploring code and want to retrace your path
- You don't care where you go; you just want to get back to where you were

**Example:** You jumped into 3 definitions (`gd` twice), explored some code with searches, and now you want to go back. `<C-o>` retraces all your jumps automatically.

### Use Change List When:
- You want to review all the places you edited (without revisiting the jump list)
- You're doing multi-location edits and want to verify coverage
- You want to jump between changes in chronological order

**Example:** You edited 5 locations in a file. `g;` walks backward through all 5 changes in the order you made them. Good for verification before committing.

---

## Corne-Specific Drill: Marks Across Files

This drill practices marks and jump list with the Corne's strengths.

### Setup

Open three files in buffers:
- `course/day-22/index.md`
- `course/day-22/exercises.md`
- `course/day-22/corne.md`

Use `:e` to switch between them.

### Drill Sequence (5 min)

1. In index.md, find "Key Bindings Summary" (`/Key Bindings`).
   - Set global mark K: `m` (left) + Shift+k (left)

2. Switch to exercises.md: `:e course/day-22/exercises.md`
   - Find "Exercise 5": `/Exercise 5`
   - Set global mark E: `m` (left) + Shift+e (left)

3. Switch to corne.md: `:e course/day-22/corne.md`
   - Find "Full Workflow": `/Full Workflow`
   - Set global mark W: `m` (left) + Shift+w (left)

4. Now jump between them using marks:
   - `'K` — back to Key Bindings in index.md
   - `'E` — to Exercise 5 in exercises.md
   - `'W` — to Full Workflow in corne.md
   - `''` — back to the file you were just in

5. Use the jump list to verify:
   - `<C-o>` — go back through your file switches
   - `<C-i>` — go forward through your switches

**Expected outcome:** You realize marks let you work across files without losing your place, and the Corne makes these operations smooth because both hands contribute naturally (left for mark-setting, right for mark-jumping).

---

## The Corne Advantage for Navigation

By Day 22, you've learned a lot of navigation systems:
- **Motions** (hjkl, w/b, gg/G, f/F/t/T)
- **Flash.nvim** (from Day 9)
- **Fuzzy find** (from Day 12)
- **LSP go-to-definition** (from Day 15)
- **Marks** (today)
- **Jump list** (today)

On a standard keyboard, some of these feel slow because they require unusual hand positions (reaching for marks, holding Ctrl for jump list navigation).

On the Corne:
- Marks are one-handed sequences from the right side
- Jump list uses the comfortable iCtrl inner key
- Every navigation method is equally fast and comfortable

By the end of Week 4, your Corne-based Vim workflow should feel like an extension of your hands. Navigation should be automatic—your brain thinks "jump to mark F," and your fingers just execute the key sequence without conscious thought.

That's the promise of keyboard-driven computing: the keyboard disappears, and you're just thinking and moving through code.

---

[← Day 22: Marks & Jumps](index.md) | [Day 22 Exercises](exercises.md) | [Day 22 Checkpoint](checkpoint.md)
