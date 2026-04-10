---
day: 6
track: "corne"
title: "Day 6 — Corne Companion"
---

[← Day 6: Search & Destroy](index.md) | [Course Index](../../COURSE.md)


## Search Keys on the Corne

Search operators are accessible keys on the Corne:

| Vim Key | Corne Key | Position | Hand | Notes |
|---------|-----------|----------|------|-------|
| `/` | Raise + F | Right layer, left-middle area | Right | Forward search |
| `?` | Shift + ? | Left outer Shift + right ? (Shift+/) | Left/Right | Backward search |
| `n` | n | Base right, lower area | Right | Next match |
| `N` | Shift + N | Left outer Shift + right n | Left/Right | Previous match |
| `*` | Shift + 8 | Left outer Shift + left top row | Left | Search word forward |
| `#` | Shift + 3 | Left outer Shift + left top row | Left | Search word backward |

**Observation:** `/` and `n` are on the right side (right hand dominance for navigation). The question mark and shifted searches involve the left pinky for shift.

---

## Command Mode on the Corne

Command mode (`:`) is entered by pressing the colon key.

| Vim Key | Corne Key | Position | Hand | Notes |
|---------|-----------|----------|------|-------|
| `:` | Raise + G | Right layer, left-middle position | Right | Enter command mode |

On the Corne, the colon is on the Raise layer at the G position (left side, home row area in terms of reach). This is ergonomic: you hold Raise (right thumb), then tap the colon position with your left hand.

---

## Substitution Command Workflow

Substitution is a series of keystrokes in command mode. Here's the full sequence:

**Example: `:%s/old/new/g`**

```
1. Press Raise + G (iCtrl/Raise position) → ":"
2. Type % (on Base layer number row)
3. Type s (left home row)
4. Type / (Raise layer, symbol)
5. Type old, /, new, / (text and symbol)
6. Type g (left home row)
7. Press Enter (right thumb, base layer)
```

Most of this is typing (right hand), with Raise layer accesses for symbols.

---

## Search Navigation on Corne: Right-Hand Dominance

Here's the beautiful part: search navigation (`n`, `/`) keeps your right hand in the navigation area.

**Workflow:**

1. **Enter search:** Raise + / (Raise on right thumb, / on right side)
2. **Type pattern:** Right hand (home row alphabet)
3. **Press Enter:** Right hand (right thumb, space)
4. **Navigate matches:** Right hand (n, right pinky lower area)
5. **Next match:** Right hand (n again)
6. **Backward:** Left hand (Shift + N requires left pinky shift), but N is then on right hand

The split keyboard philosophy: left hand for mode changes, right hand for navigation. Search reinforces this.

---

## Reaching Symbols for Substitution

Substitution involves slashes and other symbols:

```
:%s/old/new/g

/ — slashes are on Raise layer
% — percent on Lower layer (or Shift + 5)
s — base layer (left home row)
g — base layer (left home row)
```

This is a few layer accesses (Raise for slashes), but most of the command is base-layer typing.

---

## The Colon Key Position

The colon (`:`) on the Corne is at the G position on the Raise layer. This is deliberate: putting the command-mode key on the Raise layer means:

1. You hold Raise (right thumb)
2. Tap the colon position (right hand, G position area)
3. Instantly in command mode

No reaching to the corner of the keyboard. No awkward left-pinky stretch. The colon is ergonomically positioned.

---

## Corne Drill: Search and Replace

### Part 1: Forward Search (2 min)

1. Open any file
2. Hold Raise, tap F (or find / on your layout) → "/"
3. Type a search term: "day" or "world"
4. Press Enter (right thumb)
5. Right hand navigate with `n` to next match
6. Press `n` again
7. Escape to clear search

**Goal:** Search entry and navigation are on the right side. Smooth.

### Part 2: Backward Search (1 min)

1. Press Raise (or find your ? key on the layout)
2. Type a search term
3. Press Enter
4. Navigate with `n` (continues backward)
5. Press Shift+N to go forward (this requires left pinky, but it works)

**Goal:** Understand that backward search is less common than forward, so it's fine that it requires more keys.

### Part 3: Substitution (2 min)

1. Hold Raise, tap colon (G position) → ":"
2. Type `%` (Shift or Lower layer for %)
3. Type `s` (left home, middle)
4. Hold Raise, tap `/` (Raise layer symbol)
5. Type `old` (left hand, alphabet)
6. Hold Raise, tap `/` again
7. Type `new`
8. Hold Raise, tap `/` again
9. Type `g` (global flag)
10. Press Enter (right thumb)

**Goal:** Substitution involves layers, but the pattern is rhythmic: base-layer text, Raise-layer symbols, repeat. By the end, it's second nature.

---

## Command Mode Philosophy on Corne

Command mode (`:`) is where Vim shifts from motion-based editing to language-based editing. On the Corne:

1. **Enter command mode:** Hold Raise (right thumb), tap G (left side) → ":"
2. **Type command:** Left hand for letters (base layer alphabet), layers for symbols
3. **Execute:** Press Enter (right thumb)

The Raise thumb key is always accessible for mode changes. The alphabet is always on the left. Symbols require layer shifts (acceptable for occasional use).

---

## Efficient Colon Key Access

Some Corne users map Escape (Ctrl-[) to the space bar or another key, and create a second way to access the colon. But the standard Raise+G position is very reasonable:

- Right thumb already holds Raise for symbols
- G position is left-middle, natural reach from Raise
- No corner stretch, no awkward finger position

This is why the Corne feels natural for Vim. The colon—a frequently used key—is positioned ergonomically, not in a corner.

---

## Next Steps

By the end of Day 6:

- Search forward (`/`) and backward (`?`) are automatic
- Navigation with `n` and `N` is reflex
- Substitution (`:s`, `:%s`) is part of your editing flow
- Command mode (`:`) is accessible and quick

Tomorrow is Day 7: Week 1 Review. You'll drill all the skills from Days 1–6, do speed challenges, and prepare for Week 2, where you'll learn LazyVim's plugin ecosystem and advanced Vim features.

The foundation is nearly complete. You've learned motions, insert modes, operators, text objects, visual mode, and search. These are the core. Everything else builds on them.

---

[← Day 6: Search & Destroy](index.md) | [Day 6 Exercises](exercises.md) | [Day 6 Checkpoint](checkpoint.md)
