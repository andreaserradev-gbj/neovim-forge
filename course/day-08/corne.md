---
day: 8
track: "corne"
title: "Day 8 — Corne Companion"
---

[← Day 8: The Leader Key](index.md) | [Course Index](../../COURSE.md)


## The Leader Key on the Corne

On the Corne, the leader key is Space on the left thumb. This is the most ergonomic position for a frequently-used prefix—your thumb rests there naturally, and you press Space without moving your hand.

Every leader keybinding starts with the same motion: thumb presses Space. Then your fingers continue on the base layer. This consistency is beautiful. Your thumbs become the "gateway" to all your custom commands.

---

## Key Positions: Day 8 Motions on the Corne

### Leader Key Position

| Vim Key | Corne Layer | Position | Hand | Finger |
|---------|-------------|----------|------|--------|
| `<leader>` (Space) | Base | Left thumb cluster | Left | Thumb |

The left thumb Space is always accessible. You never reach. You never strain.

### Common Leader Sequences

Once you press Space with your thumb, the next keystrokes are all base layer, reachable by your fingers without moving your hand.

| Sequence | Keys | Fingers | Notes |
|----------|------|---------|-------|
| `<leader>ff` | Space → f f | Left thumb + Right index (twice) | Find files: press Space with thumb, tap f twice with right index. Fluid. |
| `<leader>fg` | Space → f g | Left thumb + Right index, then left middle | Find git files. |
| `<leader>e` | Space → e | Left thumb + Left middle | Explorer: thumb + adjacent finger. Very close. |
| `<leader>bb` | Space → b b | Left thumb + Left index (twice) | Alternate buffer: thumb + b twice. Quick rhythm. |
| `<leader>bd` | Space → b d | Left thumb + Left index, then left middle | Delete buffer. |
| `<leader>/` | Space → / | Left thumb + Raise + ? | Live grep. Need Raise layer for `/`. |

---

## Ergonomic Pattern: Thumb Gateway

The Corne design makes the leader key beautifully ergonomic:

1. **Thumb rests on Space.** Your left thumb naturally hovers over the Space thumb key.
2. **Fingers handle the rest.** Once Space is pressed, you use your fingers to type the secondary keys (f, f, e, b, d, etc.).
3. **No hand movement.** Your hands stay in place throughout the entire leader sequence.

Compare this to a standard keyboard where:
- Space is under your thumb, good.
- But then reaching `ff` means stretching your left hand to the far side, or reaching your right hand across the keyboard.

On the Corne, `<leader>ff` is: left thumb presses Space, right index finger taps f twice. That's it. Your hand movement is minimal, your rhythm is smooth.

---

## Which-Key Popup Positioning

When you press Space and which-key shows the popup menu, take advantage of the Corne's symmetry:

- The popup is usually centered on screen.
- Your left hand is on the left side of the keyboard.
- Your right hand is on the right side.
- You can read the menu and press keys on either hand without looking down.

This is different from a standard keyboard where which-key popup positioning might force your eye to one side.

---

## Practice Sequences

### Sequence 1: File Finding (2 min)

1. Press Space (left thumb). The which-key popup appears.
2. Press `f` (right index, base layer). The popup narrows to show find commands.
3. Press `f` again (right index). Opens the file finder.
4. Type a filename.
5. Press Enter to open. The entire sequence used your left thumb once, then your right hand.

Repeat this sequence until it's automatic. By Day 10, `<leader>ff` should be a reflex: thumb-tap-tap.

### Sequence 2: Buffer Hopping (2 min)

1. Open multiple files using the above sequence.
2. Press Space (left thumb).
3. Press `b` (left index). The popup narrows to buffer commands.
4. Press `b` (left index). Jump to alternate buffer.
5. Repeat: Space, `b`, `b`. Jump back to the other file.

Notice: all three keypresses are left side. Left thumb, left index, left index. This is a purely left-hand sequence. Your right hand can rest.

### Sequence 3: Explore Project (2 min)

1. Press Space (left thumb).
2. Press `e` (left middle). Opens the explorer.
3. Use `hjkl` (right hand) to navigate the tree.
4. Press Enter (right thumb) to open a file.

This sequence demonstrates the split advantage: left hand (Space + e) opens the explorer, right hand (hjkl) navigates it. Your hands work independently.

---

## The Left Thumb as Gateway

By Day 8, your left thumb should develop a strong muscle memory for Space. Think of it as the "gateway" to your custom commands:

- **Space-f**: Find things
- **Space-b**: Manage buffers
- **Space-e**: Explore files
- **Space-d**: Delete things
- **Space-/**: Search

Your thumb presses Space. Your fingers choose the category. This is organized, ergonomic efficiency.

---

## Common Mistakes & Fixes

**Mistake 1: Stretching to reach secondary keys.**

If you find yourself reaching your thumb toward the f key or reaching your right hand to the left side, you're working too hard.

**Fix:** Keep both hands on their sides of the keyboard. Space is left thumb only. Everything after Space uses normal finger positions.

**Mistake 2: Treating leader sequences as "holding Space."**

On a standard keyboard, some people accidentally hold Space while pressing f-f, worrying that releasing Space breaks the sequence.

**Fix:** On the Corne, you press and release Space, then press your next keys. Space doesn't need to be held. The sequence is: Space (press-release), f (press-release), f (press-release). Three separate keypresses.

**Mistake 3: Forgetting that some leader commands need a layer.**

`<leader>/` requires Raise because `/` is on the Raise layer. You can't do `Space /` on base layer—the `/` key isn't there.

**Fix:** Remember that secondary keys follow normal layer rules. If a key is on Raise, you use Raise to access it. Space is just the prefix; it doesn't bypass layer rules.

---

## Weekly Progression

By the end of this week:

- **Day 8 (today):** Space becomes muscle memory. `<leader>ff`, `<leader>e`, `<leader>bb` are automatic.
- **Day 9:** Flash keybindings (s, S, r, R) use the right index, complementing Space on the left thumb.
- **Day 10:** Explorer navigation (hjkl inside the tree) pairs with `<leader>e`.
- **Day 11:** Window navigation (`Ctrl-hjkl`) uses iCtrl on the left inner key; leader is for buffer ops.
- **Day 12:** Picker sequences (`<leader>sg`, `<leader>sf`) become rapid because Space is always there.

The pattern: Space becomes your left thumb's home. Once that's automatic, every new leader command feels natural.

---

## Corne-Specific Stretch Goal

Try this workflow, timing yourself:

1. Press Space + f + f. Find a file (e.g., "package.json").
2. Open the file. Navigate to a line using j and k.
3. Press Space + e. Open the explorer.
4. Navigate the tree to a different file.
5. Press Enter to open it.
6. Press Space + b + b. Jump back to the first file.
7. Press Space + b + d. Delete the second file's buffer.

This entire workflow should feel smooth and take under 30 seconds once you're practiced. It combines left-hand leader keys with right-hand navigation and buffer ops.

**The goal:** Prove to yourself that the Corne's split design and the leader key's thumb positioning make you faster than a standard keyboard.

---

## Escape: J+K Combo (Review)

Remember from Day 1: J+K (simultaneous press with right index and middle) escapes insert mode. By Day 8, this should be automatic.

In today's which-key work, you'll press Escape to close the popup several times. Each time, you have two choices:

1. Reach to the physical Esc key (slow, off-home-row)
2. Press J+K (fast, on-home-row)

Train yourself to use J+K even for the which-key popup. It's a small optimization that compounds.

---

## Physical Comfort

After a long which-key exploration session, check your hands:

1. **Wrist alignment:** Should be straight. Space on the left thumb, hjkl on the right, no twisting.
2. **Thumb position:** Your left thumb should rest on the Space key naturally. If you're reaching up to Space, your Corne might be too low.
3. **Finger positioning:** Your fingers should curl naturally over the home row. If you're flattening your fingers or curling them too much, adjust your wrist angle or keyboard angle.

The Corne is designed to feel better than a standard keyboard. If your thumb hurts pressing Space, something is wrong. Adjust.

---

[← Day 8: The Leader Key](index.md) | [Day 8 Exercises](exercises.md) | [Day 8 Checkpoint](checkpoint.md)
