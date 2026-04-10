---
day: 2
track: "corne"
title: "Day 2 — Corne Companion"
---

[← Day 2: Enter and Exit](index.md) | [Course Index](../../COURSE.md)


## Escape: J+K at Home Row

Yesterday's J+K combo for Escape becomes critical today, because today you're entering insert mode frequently. Every time you enter, you need to exit. And exiting with a corner key loses the split keyboard advantage.

On a standard keyboard, Escape is at the top-left, requiring your left pinky to stretch upward and outward. Every mode change is a hand movement.

On the Corne with J+K = Escape:
- You're at home row, in insert mode
- You press J (right index) and K (right middle) **simultaneously**
- Your hand doesn't move
- You're back in normal mode

This timing is tight: both keys must press within 20-50ms. But this drill window is *exactly* why the Corne is better for Vim than a standard keyboard.

---

## Insert Mode Key Positions on the Corne

### The Insert Modes: All on Base Layer

| Vim Key | Corne Key | Position | Hand | Finger |
|---------|-----------|----------|------|--------|
| `i` | i | Base left, home row | Left | Middle |
| `a` | a | Base left, home row | Left | Pinky |
| `I` | Shift + I | Left outer Shift + left middle i | Left | Pinky + middle |
| `A` | Shift + A | Left outer Shift + left pinky a | Left | Pinky + pinky |
| `o` | o | Base right, middle area | Right | Ring (or middle) |
| `O` | Shift + O | Left outer Shift + right o | Right | Shift on left, o on right |

**Ergonomic observation:** `i` and `a` are both on the left home row—your two most accessible left-hand keys. You reach for them without thinking. They're also home row for your muscle memory: `i` is middle finger (the most dexterous), `a` is pinky (strong). Good design.

**O and o:** Pressing `O` (shift+o) requires your left pinky to hold shift while your right hand reaches across slightly for `o`. This is the only insert mode entry that requires cross-hand coordination. It's fine—less common than `o` anyway.

### Shift Position for Capitals

On the Corne, Shift lives on the outer columns (left and right pinky edges). This means:

- `I` (Shift+i) is left pinky outer (shift) + left middle (i) — comfortable, one hand
- `A` (Shift+a) is left pinky outer (shift) + left pinky (a) — two pinky fingers, but vertical motion, no stretch
- `O` (Shift+o) is left pinky outer (shift) + right hand (o) — requires reaching across slightly

This is reasonable. You're not reaching far, and you're already on the left side, so the shift key is right there.

---

## Escape on the Corne: J+K Combo Deep Dive

The J+K combo is the crown jewel of Corne + Vim optimization.

### How to Configure (Vial Firmware)

If you're on Vial firmware (which the Corne MX Pro supports):

1. Open Vial
2. Navigate to the layout editor
3. Find the J and K keys on the right home row
4. Set J to: `Keycode: J | Special: Combo()`
5. Set K to: `Keycode: K | Special: Combo()`
6. Create a combo rule: "When J and K press simultaneously (within 50ms), send Escape"

The exact UI depends on your Vial version. Check the Corne MX Pro documentation for the precise steps.

### How to Configure (QMK Firmware)

If you're on raw QMK:

In your `keymaps/default/keymap.c`, add a combo definition:

```c
enum combo_events {
  J_K_ESCAPE,
  COMBO_LENGTH
};

const uint16_t PROGMEM j_k_combo[] = {KC_J, KC_K, COMBO_END};
combo_t key_combos[COMBO_LENGTH] = {
  [J_K_ESCAPE] = COMBO(j_k_combo, KC_ESC),
};
```

Then ensure `COMBO_ENABLE = yes` in `rules.mk`.

The timing window (COMBO_TERM) is typically 50ms but can be tuned down to 20ms if you want faster triggering (at the risk of accidental misfires).

### Timing Practice

The combo requires **simultaneous** pressing. Not sequential (J then K). Both at the same time.

**Training sequence:**

1. Place your hands on home row. Don't look at your hands.
2. Be in insert mode (type a character, then try to escape).
3. Think: "I need to press J and K together."
4. Press them. Both fingers should engage at nearly the same time.
5. If you get `J` or `K` in the text, your timing was off—they pressed sequentially instead of simultaneously.
6. Undo with `u` and try again.
7. The window is tight, but after 20-30 tries, it becomes muscle memory.

**What muscle memory means here:** Your right index and right middle develop a reflex to press together. After a week, you won't think about timing—your fingers will just know.

### Ergonomic Brilliance

Why is J+K = Escape so elegant?

1. **No corner reach:** Standard Escape is top-left, far from home row. Vim users press Escape hundreds of times a day. Each keystroke is a hand movement on a standard keyboard. On the Corne, zero movement.

2. **Natural finger pairing:** J and K are next to each other on the home row. Your right index and middle finger are the strongest and most coordinated on the right hand. They're natural for a simultaneous press.

3. **No mode confusion:** In normal mode, J and K are navigation keys (down and up). In insert mode, J and K are just characters. The combo recognizes the *mode* you're in and acts accordingly. This is sophisticated firmware-level design.

4. **Muscle memory alignment:** You already spend all day pressing J and K for navigation. Adding a simultaneous combo reuses that existing muscle memory rather than creating a new habit.

---

## Insert Mode Drill on the Corne

### Part 1: Entry Points (3 min)

Open `app/src/layouts/Base.astro`.

1. Navigate to the `<title>` tag.
2. Position your cursor inside the title text (use `f` or `w` to get there).
3. Press `i`. You're in insert mode, cursor on the same character.
4. Type `[` then **simultaneously press J+K** (don't use physical Escape).
5. If it worked, you exited. If you see `J` or `K`, undo and try with better timing.
6. Navigate to a different spot on the same tag.
7. Press `a` to append after cursor.
8. Type `]` then **J+K to escape**.
9. Do this 3 times total so the combo timing becomes automatic.

**Goal:** By the end, J+K escape should feel as natural as pressing any other key pair.

### Part 2: Open Line from Both Hands (3 min)

1. Navigate to the `<body>` line.
2. Press `o` (right hand middle). A new line opens below with proper indentation.
3. Type a comment: `<!-- Main -->`
4. Press J+K to escape (simultaneous, both right hand fingers).
5. Press `O` (this requires left pinky shift + right o). A new line opens above.
6. Type another comment: `<!-- Start -->`
7. Press J+K to escape.

This gives you practice with the more complex shift chords while keeping escape muscle memory sharp.

### Part 3: Undo/Redo Rhythm (2 min)

1. Press `i` to enter insert mode.
2. Type: `test change`
3. Press J+K to escape (should feel smooth now).
4. Press `u` to undo. The text vanishes.
5. Press `Ctrl-r` to redo. It comes back.
6. Repeat 5 times. Undo, redo, undo, redo, undo, redo.

The rhythm should feel fast: escape, undo, redo, escape, undo, redo. No thinking, just fingers moving.

---

## Hand Independence: Left/Right Balance

Today is a good moment to check your hand balance on the Corne.

### Left Hand Heavy Moves

- `i` (middle): Insert before cursor
- `a` (pinky): Insert after cursor
- `I` (Shift+i): Insert at line start
- `A` (Shift+a): Insert at line end

All of these are on the left side of the keyboard. Your left hand does a lot of work entering insert mode.

### Right Hand in Insert Mode

Once you're in insert mode, you're typing content. The right hand is dominant—it's typing the alphabet, numbers, symbols. The left hand handles shift for capitals and modifiers.

### The Balance

When you exit insert mode with J+K, you're using the *right* hand. This makes sense: left hand has been managing insert entry, right hand takes escape. It's a natural division.

Compare to standard keyboard: Escape is top-left (left pinky), so left hand is doing all the work (entry with left-hand keys like i/a, exit with left pinky). The Corne distributes this better.

---

## Corne-Specific Habits to Build

### Habit 1: Left-Hand Insert Entry

When you need to enter insert mode, reach to the left side without looking:

- `i` — left middle, home row, no thought
- `a` — left pinky, home row, no thought
- `I` — left pinky shift + left middle, smooth chord
- `A` — left pinky shift + left pinky, strong chord

These should become reflexes. You don't decide "I'll use `i`." Your left hand just reaches to the `i` position and presses.

### Habit 2: Right-Hand Escape

When you need to exit, your right hand does the work:

- J+K — right index + middle, home row, simultaneous press

This should also be reflexive. You finish typing, your right fingers press together, you're back in normal mode.

### Habit 3: Navigation from Home Row

Once you're back in normal mode:

- `hjkl` — all on right home row, never leave
- `w/b/e` — reach up slightly from home row, no big movement
- `gg/G` — left hand (for the `g` or `G` key), brief movement
- `o/O` — right hand (for the `o` key), no movement from home row

Your home row is your base. You navigate from there, return to there, repeat.

---

## Physical Posture Check for Today

After 45 minutes of insert/exit cycling, check:

1. **Wrist alignment:** Are you angling your wrists to reach the letters? The Corne is column-staggered, so your wrists should be straight. If you're bent, your keyboard positioning might be off.

2. **Escape timing:** Are you pressing J+K naturally, or are you consciously timing it? After 30 tries, it should feel automatic. If you're still thinking about timing, it's not muscle memory yet—keep drilling.

3. **Shift usage:** When you use shift for `I` or `A`, does your left pinky move smoothly to the outer column and back? Or is it a reach? The outer column should be within natural reach.

4. **Hand rest position:** Between keystrokes, where do your hands sit? Ideally, on home row. If they're floating or in weird positions, you're working too hard.

The Corne should feel *restful* compared to a standard keyboard. Your hands stay home, keys come to you. If you're reaching or stretching, something's not optimized.

---

## The Philosophy: Escape Should Disappear

Here's the deeper insight: by the end of this week, escape should become so automatic that you stop thinking about it. You won't notice when you press J+K. It's just part of the rhythm: type, escape, navigate, insert, type, escape, repeat.

On a standard keyboard, escape is always "reach up, pinky stretch, come back down." You feel it every time. On the Corne, escape is just two fingers on home row pressing together. It becomes part of the flow.

This is why Vim on the Corne feels smoother than Vim on a standard keyboard. The hardware is aligned with the editor's design philosophy.

---

## Next Steps

By the end of Day 2, you should:

- Enter insert mode with the correct key (`i`, `a`, `I`, `A`, `o`, `O`) without thinking
- Exit with J+K simultaneously, feeling the exact timing window
- Have your hands rest on home row between actions
- Move only when necessary, and only as far as needed

The rest of the course builds on this foundation. You'll add delete, change, copy—all normal mode operations. But insert mode entry/exit should be so smooth by now that it's invisible. It's just the rhythm of Vim.

---

[← Day 2: Enter and Exit](index.md) | [Day 2 Exercises](exercises.md) | [Day 2 Checkpoint](checkpoint.md)
