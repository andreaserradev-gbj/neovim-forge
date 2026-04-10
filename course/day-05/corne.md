---
day: 5
track: "corne"
title: "Day 5 — Corne Companion"
---

[← Day 5: Visual Mode & Selection](index.md) | [Course Index](../../COURSE.md)


## Visual Mode Keys on the Corne

Visual mode keys are all base-layer letters, making them accessible from any hand position.

| Vim Key | Corne Key | Position | Hand | Notes |
|---------|-----------|----------|------|-------|
| `v` | v | Base left, middle area | Left | Easy reach, left index |
| `V` | Shift + V | Left outer Shift + left middle v | Left | Shift + v requires shift on left |
| `Ctrl-v` | iCtrl + v | Left inner iCtrl + left middle v | Left | iCtrl on left inner, v on base |

**Key insight:** All visual mode entries are on the left side. This makes sense: left hand to enter visual, right hand to navigate and extend the selection.

---

## Extending Selections: Right Hand Navigation

Once in visual mode, you extend with motions. These are the same motions you learned on Day 1:

| Motion | Hand | Notes |
|--------|------|-------|
| `hjkl` | Right | Home row, naturally extend selection |
| `w` / `b` | Left/Right | Word motions, familiar from Day 1 |
| `$` / `0` | Right/Right | Line end/start, right side keys |
| `G` / `gg` | Left | Document motion, left hand |
| `f{char}` / `t{char}` | Right | Find motions, right hand |

**Workflow on Corne:**

1. Enter visual with left hand: `v`
2. Extend with right hand navigation: `hjkl`, `w`, `$`
3. Operate with left hand: `d` (left home, middle), `y` (right home, middle)

Your left hand enters and exits. Your right hand navigates. This is the natural hand distribution.

---

## Ctrl-v on Corne: Two-Key Combo

Block visual (`Ctrl-v`) requires iCtrl + v on the Corne.

```
Ctrl-v  →  Left inner iCtrl (top) + left middle v
```

The iCtrl is a dedicated key, so no timing issues. You press iCtrl and v together (or close enough), and you enter block visual.

**Practice:** This is the one multi-key combination in today's visual modes. Make sure the combo is comfortable for you.

---

## Extending Block Selections: Perfect on Split

Block visual on the Corne is particularly nice because:

1. Enter with left hand: `Ctrl-v` (iCtrl + v)
2. Extend down with right hand: `j`, `j`, `j`
3. Extend right with right hand: `l`, `l`, `l`
4. See rectangular selection form

You're building a rectangle with your right hand while the left hand rests or prepares to delete. This is efficient and comfortable.

---

## Reselect: `gv` on Home Row

The `gv` (go to last visual selection) command is two letters on the left hand:

```
gv  →  g (left upper) + v (left middle, base)
```

Quick and accessible. When you need to "undo that visual selection", `gv` is one keystroke pattern.

---

## Corne-Specific Workflow: Visual + Operate

Here's the optimal rhythm on the Corne:

1. **Enter visual (left hand):** `v` for character, `V` for line, `Ctrl-v` for block
2. **Extend selection (right hand):** Use hjkl, word motions, find motions — all on the right
3. **Operate (left hand):** `d`, `c`, `y` — back to the left home row
4. **Undo if needed (anywhere):** `u` (left hand, top left area)

Left hand for commanding (enter visual, operate, undo). Right hand for navigating to the extent you want. This mirrors Vim's philosophy of hand specialization.

---

## Why Block Visual is Underrated

On a standard keyboard, block visual (`Ctrl-v`) requires reaching for Ctrl, which is in the corner. Uncomfortable.

On the Corne, `Ctrl-v` is iCtrl (left inner) + v (base). Your fingers barely move. Block visual becomes a first-class tool, not a corner-case feature.

You'll find yourself using block visual more on the Corne than on a standard keyboard, simply because it's ergonomic.

---

## Corne Drill: Visual Modes

### Part 1: Character Visual (2 min)

1. Press `v` (left middle, base)
2. Extend with `w` (left upper)
3. Extend with `w` again
4. See selection grow
5. Delete: `d` (left home, middle)
6. Undo: `u` (left upper)
7. Repeat 3 times

**Goal:** Character visual is reflexive. Left hand enters, right hand extends, left hand deletes.

### Part 2: Line Visual (2 min)

1. Press `V` (Shift on left pinky + v on left middle)
2. Extend down: `j` (right hand)
3. Extend down again: `j`
4. Delete: `d` (left home)
5. Undo: `u`
6. Repeat

**Goal:** Line visual is muscle memory. You select entire lines with full-hand motion from the right.

### Part 3: Block Visual (2 min)

1. Press `Ctrl-v` (iCtrl on left inner + v on left middle)
2. Extend down: `j` (right hand)
3. Extend right: `l` (right hand)
4. See rectangle form
5. Delete: `d` (left home)
6. Undo: `u`

**Goal:** Block visual is comfortable because the Corne's iCtrl doesn't require corner reaching.

### Part 4: Reselect with gv (1 min)

1. Do a visual selection: `vww`
2. Delete: `d`
3. Immediately: `gv` (left upper g + left base v)
4. Selection is restored
5. Delete again or press Escape to examine

**Goal:** `gv` is your safety recovery.

---

## Physical Comfort with Visual Mode

After doing visual selections for 45 minutes:

1. **Left hand:** Did it feel natural entering visual modes? The reaches should be minimal.

2. **Right hand:** Were the extensions comfortable? hjkl navigation should feel fluid.

3. **Shift usage for V (line visual):** Does pressing Shift + V feel natural? Your left pinky should be on the shift key, left middle on v. One smooth motion.

4. **iCtrl for Ctrl-v:** Does the inner iCtrl feel precise? No timing delays, just press both fingers together.

If anything felt strained, check your posture. The Corne is designed so visual mode should feel effortless.

---

## Visual Mode Philosophy on Split Keyboards

Visual mode on the Corne embodies the "left commands, right navigates" philosophy:

- Left hand enters visual (v, V, Ctrl-v)
- Right hand extends selection (hjkl, motions)
- Left hand operates (d, c, y)
- Both hands coordinate: left commands, right executes, left finalizes

This split of labor is why split keyboards like the Corne feel natural with Vim. The hardware structure mirrors the editor's design.

---

## Next Steps

By the end of Day 5:

- Visual mode (all three variants) is smooth
- You understand when to use visual vs. operators
- Block visual is a tool you reach for, not a corner case
- Tailwind styling is applied, dark mode works

Tomorrow is Day 6: Search and Destroy. You'll learn `/`, `?`, `n`, `N`, `*`, `#`, and `:s` for find and replace. This extends your power from local edits to document-wide transformations.

---

[← Day 5: Visual Mode & Selection](index.md) | [Day 5 Exercises](exercises.md) | [Day 5 Checkpoint](checkpoint.md)
