---
day: 13
track: "corne"
title: "Day 13 — Corne Companion"
---

[← Day 13: Surround & Transform](index.md) | [Course Index](../../COURSE.md)


## Surround on the Corne

Surround motions (`sa`, `sd`, `sr`) start with `s` (right home row), which makes them pure right-hand operations on the Corne. This is the same ergonomic advantage as Flash—your right hand does the work while your left rests.

---

## Key Positions: Surround on Corne

| Operation | Keys | Hand |
|-----------|------|------|
| Add surround | s + motion + char | Right hand (s) + composition |
| Delete surround | s d + char | Right middle + right ring + target |
| Replace surround | s r + old + new | Right hand all the way |

The critical point: `s`, `d`, and `r` are all on the right home row. You never need your left hand for surround operations (except if you need Shift for special characters like `{` or `<`).

---

## Surround Workflow on Corne

1. **Position cursor:** Using hjkl or Flash
2. **Press `s`:** Right index (home row)
3. **Press operation:** Right middle (delete) or ring (replace)
4. **Press target:** Right hand types the character pair

Example: Delete surrounding quotes from inside a quoted string:

1. **Position inside quotes:** Using any navigation
2. **Press `s`:** Right index
3. **Press `d`:** Right middle
4. **Press `"`:** Right hand types quote (Shift if needed)

Entire operation: three right-hand keystrokes, all from home row area.

---

## Complex Surround: `saiw{char}`

Adding surround with a motion requires:

1. **Press `s`:** Right index
2. **Press `a`:** Left ring (motion requires left hand)
3. **Press `i`:** Right ring (continue motion)
4. **Press `w`:** Left ring (motion letter)
5. **Press `{char}`:** Right hand (the target)

This is split: left hand (motion) and right hand (surround + target). It's natural because:
- Your left hand is already involved in specifying the motion
- Your right hand adds the surround target
- It's a natural composition

---

## Surround Compared to Manual Editing

Manual approach:
1. Position before opening pair
2. Delete the opening pair
3. Position after closing pair
4. Delete the closing pair

Surround approach:
1. Position anywhere inside
2. Press `sd{char}`

The Corne makes surround especially appealing because:
- All operations use the right hand's home row position
- No reaching or shifting
- Instant, precise

---

## Pairing Surround with Flash

On the Corne, a natural workflow is:

1. **Flash jump (`s`):** Right hand labels
2. **Surround operation (`s`):** Right hand again

Both start with `s`, which means you're already in the right position. The difference is what comes next.

Example:
1. Press `s` (Flash mode) → label a target → jump
2. Now you're at that target
3. Press `sa{motion}{char}` (surround) to modify it

Seamless composition.

---

## Shift Handling for Special Targets

Some surround targets require Shift:

- `{` requires Shift+[ on standard keys
- `<` requires Shift+,  on standard keys
- `(` is Shift+9, or `)` is Shift+0

On the Corne with Raise or Shift layers:

- Left outer Shift + target character
- Accessible but requires leaving home row momentarily

For common targets like `"`, `'`, `)`, `]`, `}` (which don't need Shift on standard layouts), you can operate purely from home row.

---

## Next Steps: Week 2 Review

Day 14 is a review of all Week 2 skills: leader key, Flash, explorer, buffers/windows, picker, surround. The Corne advantages you've learned:

- **Leader:** Left thumb (Space)
- **Flash:** Right hand (`s`)
- **Explorer:** Right hand (hjkl navigation)
- **Windows:** iCtrl + hjkl (left inner + right hand)
- **Picker:** Left thumb (Space) + right hand (typing)
- **Surround:** Right hand (`s` + operations)

All of these work together on the Corne without conflict. Your hands stay balanced, never leaving the home row unnecessarily.

---

[← Day 13: Surround & Transform](index.md) | [Day 13 Exercises](exercises.md) | [Day 13 Checkpoint](checkpoint.md)
