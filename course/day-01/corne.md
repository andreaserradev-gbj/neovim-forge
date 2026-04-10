---
day: 1
track: "corne"
title: "Day 1 — Corne Companion"
---

[← Day 1: The First Keystrokes](index.md) | [Course Index](../../COURSE.md)

## The Home Row Advantage

On a standard keyboard, learning hjkl feels awkward at first. Your right hand's home row is `jkl;`. Only three of the four navigation keys are there. Your hand has to stretch slightly to reach them all smoothly.

On the Corne, you have a different advantage: your fingers are already positioned perfectly for Vim. The home row on the Corne right hand is `hjkl` by design (or on the recommended layout specifically, it's structured so these keys are natural reach). Your fingers rest on the home row, and the navigation keys are *right there*. This is not coincidence—Vim keyboards and split keyboards were made for each other.

This means you're getting the hardest part of Vim learning for free: the motor memory of hjkl. Standard keyboard users have to train this. You get it naturally from the Corne's design.

---

## Key Positions: Day 1 Motions on the Corne

### Navigation Cluster (Right Hand Home Row)

| Vim Key | Corne Layer | Position | Hand | Finger |
|---------|-------------|----------|------|--------|
| `h` | Base | Right home row, home index | Right | Index |
| `j` | Base | Right home row, home middle | Right | Middle |
| `k` | Base | Right home row, home ring | Right | Ring |
| `l` | Base | Right home row, home pinky | Right | Pinky |

These four keys are in a line on the right home row. No stretching. Home row is home.

### Word Motions (Right Side, Upper)

| Vim Key | Corne Layer | Position | Hand | Notes |
|---------|-------------|----------|------|-------|
| `w` | Base | Right upper, around index area | Right | Up from home |
| `b` | Base | Left side (shifted to left hand) | Left | Requires hand movement |
| `e` | Base | Right upper, middle area | Right | Up from home |
| `W` | Shift + `w` | — | — | Accessible via base layer shift |
| `B` | Shift + `b` | — | — | Accessible via base layer shift |
| `E` | Shift + `e` | — | — | Accessible via base layer shift |

**Ergonomic note:** `b` requires your left hand to move, since it's a common letter on the left side. This is a natural break: navigate right with `w/e`, navigate left with `b`. Your hands stay somewhat balanced.

### Line Motions (Right Side, Top Row)

| Vim Key | Corne Layer | Position | Hand | Notes |
|---------|-------------|----------|------|-------|
| `0` | Base | Right top row, pinky side | Right | "Zero" is on the edge |
| `$` | Shift + `4` | — | — | Standard shift on left |
| `^` | Shift + `6` | — | — | Standard shift on left |

**Ergonomic note:** `0` is on the number row (if your Corne has number access). `$` and `^` require shift, so your left pinky comes up to hold shift while your right hand types the number. This is a standard typing motion—nothing special, but it's a two-hand chord.

### Document Motions (Left Side, Shifted/Held)

| Vim Key | Corne Layer | Position | Hand | Notes |
|---------|-------------|----------|------|-------|
| `g` | Base | Left upper | Left | Standard key |
| `G` | Shift + `g` | — | — | Left pinky shift, left index `g` |
| `gg` | — | — | — | Two `g` presses (or you might have a layer key to macro this) |

**Ergonomic note:** On a standard keyboard, `gg` is awkward because `g` is reachable but not on the home row. On the Corne, `g` is on the left side, so `gg` is: press `g`, press `g` again. Easy. The rhythm is natural: tap-tap.

For `G`, it's Shift+`g`: left pinky holds shift, left index or middle taps `g`. This is comfortable because you're not stretching across the split.

### Line Number Motions ({count}G)

This requires typing a number, then `G`. On the Corne, numbers are accessible via a layer or shifted layer, depending on your setup. Your layout might have numbers on a dedicated number layer.

The pattern is:
1. Press number layer or shift for access
2. Type the number (e.g., `2`, `5`, or `4`, `2`)
3. Return to base layer
4. Press `G`

**Tip:** Some Corne users create a macro for `{count}G` navigation. For now, just practice the sequence. It's still faster than mouse clicking.

### Find Motions (Right Hand, Rapid Fire)

| Vim Key | Corne Layer | Position | Hand | Notes |
|---------|-------------|----------|------|-------|
| `f` | Base | Right lower | Right | Easy reach from home |
| `t` | Base | Left lower (shifted) | Left | Left index or middle |
| `F` | Shift + `f` | — | — | Right pinky shift + right lower |
| `T` | Shift + `t` | — | — | Left pinky shift + left lower |
| `;` | Base | Right pinky outer | Right | Easy repeat |
| `,` | Base | Left pinky outer | Left | Easy repeat on left |

**Ergonomic brilliance:** The find motions are designed for rapid, one-handed operation on the Corne:

- Your **right hand** stays on the home row to navigate (hjkl).
- You press `f` or `t`, type a character, and your right hand finds the character.
- Your **left hand** rests or navigates parallel.
- This is *different* from a standard keyboard, where `f` is on the left side, requiring your left hand to move to search.

On the Corne with the right-side `f` position, you can do pure right-hand search without breaking your navigation rhythm.

**Repeat motions (`; ,`):** Both are on the outer edges of each side (right pinky for `;`, left pinky for `,`). These are "rest" keys—you press them with minimal movement, one finger at a time.

---

## The Split Advantage for Motions

Here's why the Corne is secretly optimized for Vim:

1. **hjkl are on the right home row.** You navigate with your right hand without moving. Standard keyboard users have to train muscle memory.

2. **Find motions (`f/t`) work with the right hand.** Your right hand searches and navigates. Your left hand is free to position or rest.

3. **Word motions (`w/b/e`) balance both hands.** `w` and `e` with the right, `b` with the left. Natural distribution.

4. **Line motions (`0/$`) are on the number row.** Reach up slightly, or use a layer. Same rhythm as a standard keyboard.

5. **Escape (if using J+K combo) keeps you on the home row.** You never have to move your hands to hit Escape between normal and insert mode.

---

## Escape: J+K Combo

On the recommended Corne layout, Escape is `J+K` (right index + right middle, simultaneous press). This is a game-changer.

On a standard keyboard, you reach for the top-left corner (physical Escape key) every time you exit insert mode. Your hand leaves the home row. You lose momentum.

On the Corne with J+K = Escape:
- You're in insert mode editing
- You press J and K together
- Your fingers never left the home row
- You're back in normal mode instantly

**Practice:** When you do the drills today, practice exiting insert mode with J+K instead of reaching for Escape. It takes a few tries to get the timing right (both keys must press within a narrow window, usually 20-30ms). But once it's muscle memory, you'll find yourself faster in Vim overall because your hands never leave home.

**How to configure:** This depends on your Corne firmware. On Vial firmware, you can map this in the GUI. On QMK, you'd add a special process in `process_record_user()` to detect when J and K are both pressed within a time window. Check your keyboard's documentation for the exact config.

---

## Corne-Specific Drill: Home Row Lockdown

This drill combines all today's motions while staying on the home row as much as possible.

### Part 1: Navigation (5 min)

Open `course/day-01/index.md` in Neovim.

1. Start at the top (`gg`). Hands on home row.
2. Press `j` slowly and deliberately. Feel your right middle finger tapping. Don't move your hand.
3. Press `j` again. Tap. Tap. Tap. Build rhythm.
4. Alternate: `jjjk` down-down-down-up. Get the muscle feel.
5. Now introduce `hjkl` in random sequences: `hjjl kh lkkj`. No thinking, just fingers moving.
6. Stop. Hands rest on home row again. Do it again but faster.

**Goal:** After 3 minutes, hjkl should feel like they're controlled by your unconscious motor system, not conscious thought.

### Part 2: Escape Drill (2 min)

Still in the file.

1. Press `i` to enter insert mode.
2. Type a few characters: `test vim`.
3. Press `J` and `K` together (simultaneously) to exit insert mode.
4. If it doesn't work (you might just get the characters `J` or `K` in the text), undo with `u` and try again with tighter timing.
5. Repeat: insert, type, J+K, until it feels natural.

**Goal:** Get the timing locked in. The window is tight, but once you have it, it becomes a reflex faster than reaching for physical Escape.

### Part 3: Combined Navigation (3 min)

1. Now combine hjkl + J+K escaping.
2. Navigate to a word using `w`.
3. Press `i` to insert before that word.
4. Type a character.
5. Press `J+K` to escape.
6. Navigate with `j` and `k` to another line.
7. Repeat.

After this 5-minute drill, your hands should barely move. You're navigating, editing, and escaping all without leaving home row. That's the Corne advantage.

---

## Physical Comfort Check

The Corne is ergonomically superior to a standard keyboard, but posture still matters.

**After 30 minutes of use, check:**

1. **Wrist position:** Your wrists should be straight, not bent inward or outward. The column stagger of the Corne (each column is offset) means your fingers reach straight down, not at an angle.

2. **Shoulder position:** Shoulders relaxed, not hunched. If the Corne is positioned well, your arms should hang naturally, elbows at 90 degrees.

3. **Keyboard height:** The Corne should be at roughly the same height as your elbow (or slightly lower). If you're reaching down, it's too low. If you're reaching up, it's too high.

4. **Hand separation:** The split means your hands are naturally separated. You're not hunching toward the center like on a standard keyboard. This is good for your wrists and shoulders.

**If something hurts:** Stop. Adjust. The whole point of the Corne is that it should feel *better* than a standard keyboard after a few minutes. If it doesn't, the positioning or key chords might be wrong.

---

## Corne + Vim Philosophy

Here's the deeper insight: the Corne and Vim were both designed with the same philosophy—**minimize hand movement and maximize efficiency through composition.**

- Vim: motions compose with operators to form grammar
- Corne: keys are positioned so your hands stay home

When you combine them, you get a system where:
- Your hands never leave the home row to navigate (hjkl right there)
- You never leave home row to escape insert mode (J+K)
- Find motions happen with one hand while the other rests
- You're free to focus on *thinking* about the text, not *moving* to reach keys

This is why Vim and split keyboards have such a strong cultural overlap. They're both optimization for human hand position and movement. Using them together is like having the editor and the hardware agree on the same philosophy.

---

## Next Steps

By the end of Day 1, you should feel comfortable with:

- hjkl navigation without thinking
- J+K escape as natural as the physical Escape key
- Word and line motions as hand movements, not conscious commands

The Corne is doing its job: keeping you efficient. Now go build that muscle memory.

---

[← Day 1: The First Keystrokes](index.md) | [Day 1 Exercises](exercises.md) | [Day 1 Checkpoint](checkpoint.md)
