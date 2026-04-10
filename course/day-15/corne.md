---
day: 15
track: "corne"
---

[← Day 15: LSP Superpowers](index.md) | [Course Index](../../COURSE.md)


## LSP Navigation on the Corne

### Key Positions for Day 15 Skills

| Vim Key | Corne Physical | Hand | Execution |
|---------|----------------|------|-----------|
| `gd` | g + d | Left hand, base | Tap g (left index), tap d (left middle) |
| `gr` | g + r | Left hand, base | Tap g, tap r (left index) |
| `gI` | g + I | Shift + Left I | Left Shift (outer) + Left I (outer) |
| `gD` | g + D | Shift + Left D | Left Shift (outer) + Left D (left middle) |
| `gy` | g + y | Left hand, base | Tap g, tap y (left index) |
| `K` | K | Right hand, base | Single tap (right middle, home row) |
| `<leader>ca` | Space → c → a | Left thumb + 3 keys | Thumb Space, tap c (left middle), tap a (left pinky) |
| `<leader>cA` | Space → c → Shift+A | Left thumb + 3 keys | Thumb Space, tap c, left Shift + a |
| `<leader>cr` | Space → c → r | Left thumb + 3 keys | Thumb Space, tap c, tap r (left index) |

### Hand Positions & Flow

**gd / gr / gy workflow:** All start with `g` on the left index, then tap the second letter (d/r/y) also on the left hand. This keeps you on the left side — no hand movement. The right hand stays ready for navigation in the picker that appears.

**K (hover):** Single key on right middle, home row. Instant. No modifiers.

**Leader-c commands:** Start with left thumb pressing Space, then tap c + the action letter on the left hand. leader-ca is "space, c, a" — three sequential taps starting from the thumb.

### Ergonomic Notes

**LSP is a comfort zone on the Corne:** Most navigation (gd, gr, gI, gD, gy) are two-key combos on the left hand, leaving your right hand free to navigate pickers and move around. The K key is a single tap — extremely fast.

The leader-c sequences (ca, cA, cr) require thumb + two left-hand taps. They feel natural because you're building a "command" with your thumb as the prefix.

### Corne-Specific Drill

**Goal:** Feel the difference between left-hand navigation and right-hand confirmation.

1. Open `app/src/lib/types.ts`.
2. Position cursor on the word `Day` in the interface. Press `g` (left index), then `d` (left middle). Both taps happen on the left side. Your cursor jumps (or stays, since you're on the declaration).
3. Now position on `Challenge` in sample-data.ts. Press `g + r`. The left hand navigates, then a picker appears on screen. Your right hand takes over — use `j/k` on the right to scroll the picker.
4. Repeat with `g + y` to see type definitions.

The pattern: left hand proposes the action (gd/gr/gy), right hand confirms the selection from the picker. This split-hand workflow is the Corne's strength.

### Modifier Access for gI and gD

Both require capital letters, so they involve Shift:

- **gI:** Left Shift (outer column) + left I (outer top). Two keys both accessible from the left, though the shift is on the far edge. Not heavily used in early days.
- **gD:** Left Shift + left D (middle, home row). Shift is one reach away from home, D is home row. More accessible than gI.

Most of the time, `gd` is sufficient. Use `gI` and `gD` when you need the fine distinction between implementation and declaration.

### Code Action Sequences on Corne

**<leader>ca:** Space (left thumb) → c (left middle) → a (left pinky). Three keys, all typed sequentially. Feels like building a command: "leader-code-action".

**<leader>cr:** Space → c → r. Same structure, different final key.

These feel natural on the Corne because the thumb anchors the command, and the left hand finishes it.

### Tip: Combine with Picker Navigation

When `gd` opens a picker (or `<leader>ca` shows code actions), you're now using the right hand. The right hjkl keys are arrows in the picker. Use `j/k` to move down/up through options, `l/h` to jump or select in some contexts. Then press Enter to confirm.

Practice this split: left hand for vim command, right hand for picker confirmation.

---

[← Day 15: LSP Superpowers](index.md) | [Day 15 Exercises](exercises.md) | [Day 15 Checkpoint](checkpoint.md)
