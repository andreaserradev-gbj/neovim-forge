---
day: 12
track: "corne"
title: "Day 12 — Corne Companion"
---

[← Day 12: Find Everything](index.md) | [Course Index](../../COURSE.md)


## Picker on the Corne

The Snacks picker uses the leader key (Space on left thumb) to activate, then typing to filter. On the Corne, this is beautifully ergonomic: your left thumb opens the picker, then your right hand does the typing.

---

## Key Positions: Picker Commands on Corne

| Command | Keys | Hand |
|---------|------|------|
| Live grep | Space / | Left thumb + symbol layer |
| File search | Space f f | Left thumb + right index (twice) |
| Command search | Space : | Left thumb + Raise + shift |
| Buffer search | Space b b | Left thumb + left index (twice) |
| Diagnostics | Space d d | Left thumb + left middle (twice) |

Once the picker is open, navigation is pure typing:

| Action | Keys | Hand |
|--------|------|------|
| Filter results | Regular typing | Right hand |
| Next result | Ctrl + n | iCtrl + right index |
| Prev result | Ctrl + p | iCtrl + right pinky |
| Select | Enter | Right thumb |
| Close | Escape | Right pinky (or J+K) |

---

## The Picker Workflow on Corne

1. **Open picker:** Space + command (left thumb + one more keystroke)
2. **Type filter:** Right hand (comfortable typing position)
3. **Navigate:** iCtrl + n/p (left inner + right hand)
4. **Select:** Enter (right thumb)

Entire workflow: left hand (leader, modifiers) + right hand (typing, navigation). Both hands contribute evenly.

---

## Fuzzy Matching Philosophy on Corne

Fuzzy matching means you can type short searches:

- Type "d1" instead of "day-01"
- Type "ai" instead of "app/index"
- Type "sr" instead of "src/reference"

On the Corne, shorter searches mean fewer keystrokes. Your typing speed doesn't need to be perfect—fuzzy matching rewards intentional, brief typing.

This is one more way the Corne's efficiency culture (minimal movement, intentional keypresses) aligns with Vim's philosophy.

---

## Common Picker Sequences on Corne

### Find a Day File

1. Space f f (`<leader>ff`)
2. Type "d10" (3 keystrokes)
3. Down arrow or Ctrl+n to select
4. Enter to open

Total: ~7-8 keystrokes, both hands balanced.

### Search for a Variable

1. Space / (`<leader>/`)
2. Type variable name (varies)
3. Ctrl+n to browse results
4. Enter to jump

Total: fewer keystrokes for common variables.

### Find a Command

1. Space : (or Space c, depending on config)
2. Type command name fragment
3. Ctrl+n to browse
4. Enter to execute

---

## Picker Navigation Alternatives

Standard picker navigation: iCtrl + n/p (left inner + right hand)

But you could also use:
- `j` / `k` to move down/up (depends on picker config)
- Mouse wheel (defeats the purpose, but possible)

The iCtrl + n/p is ideal because:
- Left hand already near Space (just move to iCtrl)
- Right hand is typing anyway
- Minimal hand movement between filtering and navigation

---

## Picker Performance

On the Corne, picker-based navigation is extremely fast because:

1. **Left thumb:** Already on Space for leader (from Days 8+)
2. **Right hand:** Already typing (filtering is your native motion)
3. **No new muscle memory:** You're using familiar patterns (leader, typing, Ctrl combos)
4. **Balanced:** Neither hand dominates; both stay engaged

By Day 12, you should feel that picker commands are *faster* than file tree browsing or manual navigation.

---

## Next Steps: Surround Operations

Day 13 introduces surround editing (adding, changing, deleting pairs like quotes, brackets, etc.). The picker will pair nicely with surround operations:

- Use picker to find a specific line
- Use surround to edit the text around that line
- All keyboard-driven, no mouse

The Corne supports both equally well.

---

[← Day 12: Find Everything](index.md) | [Day 12 Exercises](exercises.md) | [Day 12 Checkpoint](checkpoint.md)
