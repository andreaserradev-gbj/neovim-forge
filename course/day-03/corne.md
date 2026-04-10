---
day: 3
track: "corne"
title: "Day 3 — Corne Companion"
---

[← Day 3: The Operator Grammar](index.md) | [Course Index](../../COURSE.md)


## Operators on the Corne: All Base Layer, No Modifiers

Today's operators (`d`, `c`, `y`) are all single-letter keys on the base layer. This is perfect for the Corne: no modifiers needed, no layer shifting, just home-row navigation.

| Vim Key | Corne Key | Position | Hand | Finger |
|---------|-----------|----------|------|--------|
| `d` | d | Base left, home row | Left | Middle |
| `c` | c | Base left, home row | Left | Ring |
| `y` | y | Base right, home row | Right | Middle |
| `p` | p | Base right, upper area | Right | Ring (reach up slightly) |
| `P` | Shift + P | Left pinky Shift + right p | Both hands | Shift on left, p on right |

**Observation:** Operators are on home row keys. After you learn `hjkl` and basic text motions, adding delete/change/yank doesn't require new finger positions. You're reusing keys you already know.

- `d` is the left-middle key (right next to 's' and 'f')
- `c` is the left-ring key (below 'd')
- `y` is the right-middle key (mirror of 'd')

This symmetry is elegant. The Corne's split design mirrors Vim's philosophy: operators on the left (commanding), right hand free to navigate with hjkl.

---

## The Dot Command on Corne: Pinky Ring

The dot (`.`) repeats the last change. On the Corne:

| Vim Key | Corne Key | Position | Hand | Finger |
|---------|-----------|----------|------|--------|
| `.` | . (period) | Base right, bottom row outer | Right | Pinky |

The dot is on the right bottom corner—the outer pinky key. It's slightly out of the way, which is intentional: it's not a key you hit constantly, but when you need it, it's accessible.

**Rhythm:** After you perform a change (`dw`, `c$`, etc.), you navigate to the next position with hjkl (right hand), then press `.` with your right pinky. The flow is: operate (both hands), navigate (right hand), repeat (right pinky). All on the right side or home row.

---

## Counts on Corne: Lower Layer Numbers

Counts are numbers. On the Corne, numbers live on the Lower layer.

| Number | Corne Key | Layer | Position |
|--------|-----------|-------|----------|
| 1–5 | 1–5 | Lower | Left side, top row |
| 6–0 | 6–0 | Lower | Right side, top row |

**How to use a count:**

1. Hold the Lower layer (left thumb).
2. Tap the number (e.g., 3).
3. Release Lower.
4. Tap the operator (e.g., `d`).
5. Tap the motion (e.g., `w`).

**Example: Delete 3 words (`3dw`)**

1. Hold Lower, tap 3, release.
2. Tap `d` (left home row).
3. Tap `w` (left upper).

All three key presses are on the left side of the keyboard. The right hand is free to navigate or prepare for the next command.

**Alternative rhythm:** Some Vim users prefer `d3w` (operator first, then count, then motion). On the Corne:

1. Tap `d` (left home).
2. Hold Lower, tap 3, release.
3. Tap `w` (left upper).

Both work. Choose whichever feels more natural for your muscle memory.

---

## Delete and Copy Symmetry on Corne

There's an elegant symmetry in how delete and copy fall on the Corne:

- **`d` (delete):** Left hand, middle finger, home row. The most dexterous finger on the left side.
- **`y` (yank/copy):** Right hand, middle finger, home row. Mirror position on the right side.

When you learn the pattern on one side, you instantly have it on the other. This is Corne design excellence—keys are mirrored for motor symmetry.

**Muscle memory:** Your left-middle finger learns to delete (dw, d$, dd). Your right-middle finger learns to copy (yw, y$, yy). By Week 2, these are so automatic that you don't consciously choose—your fingers just go to the right position.

---

## Paste Keys: Across Both Sides

Paste is a bit different because `p` and `P` are not symmetric:

| Vim Key | Corne Key | Position | Hand | Notes |
|---------|-----------|----------|------|-------|
| `p` | p | Base right, upper area | Right | Ring finger, slight reach |
| `P` | Shift + P | Left pinky Shift + right p | Both hands | Requires cross-hand coordination |

**Observation:** `p` (paste after) is on the right side, making it the default when you're navigating with hjkl. You delete or copy something, navigate, then hit `p` on the right side. Smooth.

`P` (paste before) requires shift, so it's a bit slower, which makes sense—`p` is more common than `P` in typical editing.

---

## Operator Workflow on Corne: The Right-Hand Dominance

Here's the beautiful part of operators on the Corne: once you learn them, your right hand does most of the work.

**Typical editing sequence:**

1. **Operator (left hand):** Delete the word: `dw` (left `d` + left `w`)
2. **Navigate (right hand):** Find next location: `jjj` or `fff` (all right hand)
3. **Repeat (right hand):** Apply operator again: `.` (right pinky)
4. **Navigate (right hand):** Move to next location: `j` or `ww` (right hand hjkl or w)
5. **Repeat (right hand):** `.` again

Your left hand does the initial delete. Your right hand handles all navigation and repetition. This is why split keyboards shine with Vim: hands work in parallel, not competing for keys.

---

## Count Navigation: Efficient Number Entry

Counts are the one place where the Corne requires layer switching. Here's how to make it fast:

**Muscle memory for numeric entry:**

1. Your left thumb is already reaching for the Lower key (it's the base layer modifier).
2. Your left hand is home row.
3. Hold Lower with left thumb.
4. Tap the number with the same left hand (digits 1–5 are on the left side).
5. Release Lower.
6. Continue with operator (left hand) and motion (any hand).

**Example again: `3dw`**

```
Hold Lower (left thumb)
  ↓
Tap 3 (left top row, index/middle area)
  ↓
Release Lower
  ↓
Tap d (left home row, middle)
  ↓
Tap w (left upper area, middle/index)
```

All on the left hand. The right hand never moves. This is efficiency.

**For larger numbers:** If you want `25dw` (delete 25 words), the flow is:

```
Hold Lower
Tap 2, tap 5 (two number taps while holding Lower)
Release Lower
d, w
```

Both number taps happen while holding Lower. It's quick because you're not releasing and re-engaging.

---

## Dot Command Muscle Memory: Right Pinky Reflex

The dot command is one of the most important efficiency tools. On the Corne, it's your right pinky.

**Building the reflex:**

1. Perform an operation: `dw`, exit to normal mode, navigate.
2. Your cursor is on the next target.
3. Press `.` (right pinky bottom outer key).
4. Repeat step 2-3 multiple times.

After 10-20 repetitions, the rhythm becomes automatic. You navigate and press `.` without conscious thought. Your right pinky just knows: when you're in position, tap the outer key for repeat.

**Why the outer position is good:** The dot is slightly away from home row, so you don't accidentally hit it while navigating. But it's close enough that your pinky knows where it is.

---

## Corne-Specific Drill: Operator Sequences

This drill focuses on the left-hand operator efficiency and right-hand navigation/repeat.

### Part 1: Delete with Counts (3 min)

Open any file with multiple words per line.

1. Navigate to a line with at least 10 words.
2. Position your cursor at the start (use `0` or `^`).
3. Hold Lower, tap 2, release. Then tap `dw`. You've deleted 2 words.
4. Navigate right with `w` or `l` to the next target.
5. Hold Lower, tap 3, release. Then tap `dw`. Deleted 3 more words.
6. Repeat.

**Goal:** Get comfortable with the Lower-number-release-operator-motion rhythm. It should feel smooth by the end of 3 minutes.

### Part 2: Operator and Dot Combination (3 min)

1. Position your cursor at the start of a word.
2. Change it: `cw`, type replacement, `Escape` (J+K).
3. Navigate to the next similar word: `w` (or `f{char}` or `/pattern`).
4. Press `.` (right pinky). The change repeats.
5. Navigate to the next word.
6. Press `.` again.
7. Do this 5 times total (one `cw`, then four `.`).

**Goal:** Muscle memory for the dot. By the end, you shouldn't think about it—your pinky just presses the outer key when you're in position.

### Part 3: Delete and Paste (Move) (2 min)

1. Position your cursor on a line.
2. Delete it: `dd` (left hand, easy).
3. Navigate to a new location: `j` or `G` (right hand).
4. Paste: `p` (right hand, upper area).
5. The line reappears at the new location.
6. Repeat: delete a different line, navigate, paste.

**Goal:** You see that `dd` + navigate + `p` is the way to move lines. No thinking—delete on left, navigate on right, paste on right.

---

## Symmetry: The Gift of Split Design

Here's something that will strike you over the next few days:

**Left hand:**
- Navigate backward: `b` (left upper)
- Delete: `d` (left home)
- Enter insert: `i`, `a` (left home)
- Change: `c` (left home)

**Right hand:**
- Navigate forward: `w` (left upper, but can be reached from right during navigation phases)
- Navigate vertical: `hjkl` (right home)
- Copy: `y` (right home)
- Paste: `p` (right upper)
- Repeat: `.` (right pinky)

The Corne isn't just a keyboard. It's a *Vim keyboard*. The key positions align with Vim's philosophy: left hand for commanding and backward navigation, right hand for forward navigation and repetition.

Once you feel this alignment in your muscles, Vim stops being a tool you're learning and becomes a language your fingers speak.

---

## Next Steps

By the end of Day 3:

- `d`, `c`, `y` are reflex keys on the left home row
- Counts via Lower layer are smooth (no hesitation)
- Dot command with right pinky is automatic
- Delete and paste for moving text is second nature
- Navigation and operators work together seamlessly

The next day (Day 4) introduces text objects. They'll extend the operator grammar even further—you'll be able to delete "inside quotes" or "around parentheses" with surgical precision. This is where Vim moves from powerful to magical.

---

[← Day 3: The Operator Grammar](index.md) | [Day 3 Exercises](exercises.md) | [Day 3 Checkpoint](checkpoint.md)
