---
day: 11
track: "corne"
title: "Day 11 — Corne Companion"
---

[← Day 11: Buffers & Windows](index.md) | [Course Index](../../COURSE.md)


## Window Navigation on the Corne

The Corne's iCtrl (inner control key) is perfectly positioned for `<C-hjkl>` window navigation. Your left index finger rests on iCtrl, and your right hand navigates with hjkl. This is one of the cleanest Vim workflows on a split keyboard.

---

## Key Positions: Day 11 Windows on Corne

| Action | Keys | Hand |
|--------|------|------|
| Focus left window | iCtrl + h | Left inner + right index |
| Focus down window | iCtrl + j | Left inner + right middle |
| Focus up window | iCtrl + k | Left inner + right ring |
| Focus right window | iCtrl + l | Left inner + right pinky |
| Horizontal split | Space + minus | Left thumb + layer/symbol |
| Vertical split | Space + pipe | Left thumb + layer/symbol |
| Resize height | Ctrl + Up/Down | Varies (arrows on Lower layer) |
| Resize width | Ctrl + Left/Right | Varies (arrows on Lower layer) |

The critical insight: `<C-hjkl>` on the Corne is a perfect cross-hand motion. Left index holds iCtrl while right hand navigates. Neither hand moves otherwise.

---

## iCtrl for Window Navigation

Using iCtrl (inner control key on left index) for window navigation is ergonomic:

1. **Left index rests on iCtrl:** Zero timing ambiguity (it's a dedicated key, not a home-row mod).
2. **Right hand navigates:** hjkl are second nature now.
3. **Split operation:** Left hand (modifier) + right hand (direction) coordinate perfectly.

Example: You're in a split window setup with three panes. To navigate:
- Top window to left: iCtrl + h
- Left window to bottom: iCtrl + j
- Bottom window to right: iCtrl + l

All motion comes from your right hand. Your left hand just holds the modifier.

---

## Split Creation on Corne

Creating splits uses the leader key (left thumb):

- **`<leader>-` (horizontal split):** Space + minus
  - Left thumb presses Space
  - Continue with minus (on Raise layer, or directly accessible)
  
- **`<leader>|` (vertical split):** Space + pipe (Shift+backslash)
  - Left thumb presses Space
  - Left pinky shifts + right hand types backslash

The splits themselves are quick—fewer keystrokes than navigating to open the explorer. Most of the work is done with your left hand (leader + modifiers).

---

## Multi-Window Workflow on Corne

Here's a realistic session:

1. **Open first file:** `nvim page1.astro`
2. **Split horizontally:** Space + minus (left hand)
3. **Open second file in split:** Can use `<leader>ff` to find, or just start editing
4. **Navigate top window:** iCtrl + k (left inner + right up)
5. **Resize window:** Ctrl + Up arrows (requires Lower layer for arrows)
6. **Navigate back:** iCtrl + j (left inner + right down)
7. **Edit in second window**

The entire workflow is balanced: left hand manages modifiers and commands, right hand navigates and edits.

---

## The Three-Window Layout on Corne

Creating and navigating a three-window layout:

1. **Initial split:** Space + minus → `<leader>-` (horizontal)
2. **Focus top window:** iCtrl + k
3. **Split that window:** Space + pipe → `<leader>|` (vertical)
4. **Navigate the three:** iCtrl + hjkl in any combination

Now you have:
- Top-left window
- Top-right window
- Bottom window

Your hands stay in the same position throughout. The iCtrl + hjkl pattern works for all navigation.

---

## Resizing on Corne

Resizing windows uses `<C-Up/Down/Left/Right>`. These require arrow keys, which are on the Lower layer:

1. **Increase height:** iCtrl (left inner) + Lower (left thumb) + up arrow
   - This is a three-key combo, but all left hand
   - Left index holds iCtrl, left thumb activates Lower, right hand would navigate

Actually, more commonly:
1. **Hold Lower:** Left thumb
2. **Press direction:** Arrows are on the Lower layer
3. **With iCtrl:** Left inner Ctrl + Lower arrow combo

This is a bit complex, which is why most Corne users either:
- Use the mouse to drag window separators (defeats the purpose)
- Use `:wincmd =` to auto-balance windows
- Accept asymmetrical window sizes

---

## Workflow Pattern: iCtrl as Window Navigator

By Day 11, iCtrl should feel like a "window navigation modifier":

- **iCtrl + h/j/k/l:** Navigate windows (consistent with hjkl movement)
- **iCtrl + c:** Interrupt/escape
- **iCtrl + n/p:** Next/previous (scrolling, history)
- **iCtrl + other keys:** Standard Ctrl combos

You're training muscle memory: "I need to move between windows" → "iCtrl + direction"

---

## Physical Setup for Multi-Window Work

During heavy split window work:

1. **Screen positioning:** Both halves of your Corne visible, screen centered
2. **Eye movement:** You're looking at different quadrants of your monitor
3. **Hand positioning:** Left hand on left half (iCtrl, Space), right hand on right half (hjkl, navigation)
4. **Posture:** Your torso can be centered; the split keyboard doesn't force hunching toward the center like a standard keyboard

The Corne shines during window-heavy workflows because the split keeps your hands balanced and comfortable.

---

## Next Steps: Buffers

Day 11 also introduces buffer navigation with `<S-h>` and `<S-l>` (Shift+h and Shift+l).

On the Corne:
- **Shift:** Outer columns or iShift if available
- **h/l:** Right hand home row

So `<S-h>` = left outer Shift + right index h
And `<S-l>` = left outer Shift + right pinky l

These are one-hand operations (once Shift is engaged), which is efficient for buffer navigation while your other hand rests or manages other tasks.

---

## Corne-Specific Stretch Goal

Try this window management session, timing yourself:

1. Open neovim with two files
2. Create a split: `<leader>-`
3. Navigate between windows 5 times: iCtrl + hjkl
4. Switch buffers using `<S-h>` and `<S-l>`
5. Close one window: `:q` or window delete command
6. Return to single window state

Total workflow should feel smooth and take under 1 minute once practiced.

---

[← Day 11: Buffers & Windows](index.md) | [Day 11 Exercises](exercises.md) | [Day 11 Checkpoint](checkpoint.md)
