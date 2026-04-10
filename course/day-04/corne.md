---
day: 4
track: "corne"
title: "Day 4 — Corne Companion"
---

[← Day 4: Text Objects](index.md) | [Course Index](../../COURSE.md)


## Text Objects on the Corne: Letters, No Special Keys

Text objects are some of the easiest keys to reach on the Corne because they're all letter-based. No special modifiers, no layer shifting. Just your letters on the base layer.

| Text Object | Vim Key | Corne Key | Position | Hand | Finger |
|-------------|---------|-----------|----------|------|--------|
| Word | `w` | w | Base left, middle area | Left | Middle |
| WORD | `W` | Shift + w | Left pinky Shift + left w | Left | Shift + middle |
| Sentence | `s` | s | Base left, home row | Left | Ring |
| Paragraph | `p` | p | Base right, home row | Right | Middle |
| Double quote | `"` | Shift + '(quote key) | Right pinky Shift + right quote key | Right | Shift + pinky |
| Single quote | `'` | ' (quote key) | Base right, home row area | Right | Pinky |
| Backtick | `` ` `` | `` ` `` | Base left, top left corner | Left | Pinky |
| Parenthesis | `(` / `)` | Shift + 9 / Shift + 0 | — | — | Needs Shift (Lower layer or outer Shift) |
| Bracket | `[` / `]` | Raise + ? / Raise + ? | Right layers | Right | Depends on layout |
| Brace | `{` / `}` | Shift + [ / Shift + ] | — | — | Needs Shift |
| Angle bracket | `<` / `>` | Shift + , / Shift + . | — | — | Needs Shift |
| Tag | `t` | t | Base left, home row | Left | Index |

**Key insight:** Most text objects are on the base layer or reachable with a single layer:
- `iw` (inside word) — left hand, middle finger, no shift
- `i'` (inside single quote) — right hand, pinky, base layer
- `is` (inside sentence) — left hand, ring finger, base layer
- `ip` (inside paragraph) — right hand, middle finger, base layer

Quoted strings (double quotes, backticks) need shift, which is a second hand (your left pinky for shift on the standard layout). Brackets and braces are typically on symbol layers (Raise/Lower).

---

## Using `i` and `a` Prefixes: No Stretching

The `i` and `a` prefixes are both single letters on the base layer:

| Prefix | Corne Key | Position | Hand | Finger |
|--------|-----------|----------|------|--------|
| `i` | i | Base left, home row | Left | Middle |
| `a` | a | Base left, home row | Left | Pinky |

So when you type `diw` (delete inside word):
1. Tap `d` (left home, middle)
2. Tap `i` (left home, middle)
3. Tap `w` (left upper, middle)

All on the left side. Your right hand is free to rest or prepare for navigation.

**Ergonomic brilliance:** Both `i` and `a` are on the home row, adjacent to `d` and `c`. Your left hand barely moves. You're building operator + prefix + object in three rapid taps, all within a small area.

---

## Reaching Delimiters: Shift and Layers

Reaching bracket and brace delimiters requires layer access. Here's how different delimiters are positioned:

### Double Quotes: Shift + Single Quote

Double quote is Shift + single quote on most keyboards.

```
di"  →  Left d, left i, Shift (left pinky) + right quote key
```

This is a cross-hand operation: left hand for d and i, then left pinky holds shift while right hand types the quote.

### Parentheses and Brackets: Symbol Layers

On the Corne, parentheses, brackets, and braces live on the Raise layer (or Lower, depending on your layout). Using them in text objects requires:

```
di(  →  Left d, left i, then navigate to Raise layer for (
```

This is slower than `diw` or `di"` because you need a layer change. But it's still fast compared to a standard keyboard.

### Single Quotes: Direct Key

Single quote is often on the base layer. Check your layout.

```
di'  →  Left d, left i, right pinky single quote (base layer, no shift)
```

Very fast.

### Backtick: Often Top Row

Backtick might be in the top left corner of your board.

```
di`  →  Left d, left i, left pinky (top left backtick)
```

Quick if it's on the base layer.

---

## Corne-Specific Pattern: Left Operator + Right Delimiter Navigation

Here's a workflow that plays to the Corne's strengths:

1. **Operator (left hand):** `d`, `c`, `y` are all on the left home row.
2. **Prefix (left hand):** `i` or `a` are on the left home row.
3. **Delimiter (right hand, usually):** Most delimiters require layer shifts, but once you're on the layer, the right hand can tap the symbol.

**Example: `ci"`**

1. Left hand: `c`, `i`
2. Layer shift: Left pinky to Shift (for the second `i`, not the first)
3. Right hand: Quote key (Shift + quote on most layouts)

Alternatively, depending on your layout, `"` might be a direct key without shift.

---

## Mini.ai Extended Objects on Corne

Mini.ai adds new objects: `f` (function), `c` (class), `o` (code block), etc. These are all letter keys on the base layer.

```
dif  →  d (left home), i (left home), f (left lower)
dao  →  d (left home), a (left home), o (right home)
dic  →  d (left home), i (left home), c (left lower)
```

All base layer or close to it. Mini.ai text objects are very ergonomic on the Corne.

---

## Corne Drill: Text Object Sequences

### Part 1: Letter-Based Objects (3 min)

Open any file with multiple words and paragraphs.

1. Delete inside word: `diw` (left d, left i, left w)
2. Navigate right with `l` or `w` (right hand)
3. Change inside word: `ciw`, type replacement, Escape
4. Navigate down with `j` (right hand)
5. Delete around word: `daw` (left d, left a, left w)
6. Repeat 5 times

**Goal:** Get comfortable with the all-left-hand operator+prefix+object sequence.

### Part 2: Quoted Objects (2 min)

Find quoted content in HTML or code.

1. Position cursor inside quotes
2. Change inside quotes: `ci"` (left d, left i, Shift on left + right quote)
3. Type replacement
4. Escape (J+K on right hand)
5. Find another quoted string
6. Delete around quotes: `da"` (left d, left a, Shift on left + right quote)
7. Repeat 3 times

**Goal:** Master the left-hand operator, prefix, then shift+right-hand delimiter pattern.

### Part 3: Paragraph Objects (2 min)

Find multi-line paragraphs.

1. Delete around paragraph: `dap` (left d, left a, right p)
2. Undo
3. Yank around paragraph: `yap` (right y, left a, right p)
4. Navigate to new location
5. Paste: `p` (right hand)
6. Repeat

**Goal:** Larger structures are quick because most letters are accessible. You're not doing complex layer management for paragraph objects.

---

## The Hand Distribution: Left Commands, Right Results

Over the next few days, a pattern will emerge on the Corne:

- **Left hand:** Operators (`d`, `c`), prefixes (`i`, `a`), backward motions (`b`)
- **Right hand:** Navigation (`hjkl`), paste (`p`), forward motions (`w`, `e`), repeat (`.`)

Text objects reinforce this: left hand commands the operation, right hand is free to navigate to the next target.

This is why the Corne feels so natural for Vim. The hardware architecture aligns with Vim's operational flow.

---

## Physical Comfort Check

After using text objects for 45 minutes:

1. **Hand rest position:** Are your hands resting on home row when not typing? They should be.
2. **Shift usage:** When you press shift for symbols (quotes, braces), does it feel natural? Your left pinky shouldn't be straining.
3. **Layer access:** If you're using layer keys (Lower, Raise), are they accessible with your thumbs? They should be, no hand movement.

Text objects are syntactically complex but ergonomically simple. If something feels awkward, check your posture or layout positioning.

---

## Next Steps

By the end of Day 4, you're thinking in terms of Vim grammar:

- Motions (hjkl, w/b, $, etc.)
- Operators (d, c, y)
- Text objects (iw, i", ip, etc.)
- Composition: operator + text object + optional count

On the Corne, this compositional power is backed by ergonomic key positioning. You're not reaching far. You're tapping rapidly in predictable patterns.

The next day (Day 5) introduces visual mode, which is a different way to select before operating. Visual mode is the "see what you're deleting" approach vs. text objects' "know what you want to delete" approach.

Both are useful. Both work beautifully on the Corne.

---

[← Day 4: Text Objects](index.md) | [Day 4 Exercises](exercises.md) | [Day 4 Checkpoint](checkpoint.md)
