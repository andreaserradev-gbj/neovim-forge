---
day: 16
track: "corne"
---

[← Day 16: Diagnostics & Notifications](index.md) | [Course Index](../../COURSE.md)


## Diagnostics & Notifications on the Corne

### Key Positions for Day 16 Skills

| Vim Key | Corne Physical | Hand | Execution |
|---------|----------------|------|-----------|
| `[d` | [ + d | Right hand, base | Shift+[ (left Shift outer + right index) then d (right middle) |
| `]d` | ] + d | Right hand, base | Shift+] (right Shift outer + right index) then d (right middle) |
| `[e` | [ + e | Left hand + right | Left Shift outer + right index, then tap e (right index) |
| `]e` | ] + e | Right hand | Shift+] + right index (top row) |
| `[w` | [ + w | Right hand | Left Shift + right index, then tap w (right index) |
| `]w` | ] + w | Right hand | Right Shift + right index, then tap w |
| `<leader>xx` | Space → x → x | Left thumb + 2 keys | Thumb Space, x (left middle), x |
| `<leader>xX` | Space → x → Shift+X | Left thumb + 3 keys | Thumb Space, x, left Shift + x |
| `<leader>cs` | Space → c → s | Left thumb + 3 keys | Thumb Space, c (left middle), s (left ring) |
| `<leader>cS` | Space → c → Shift+S | Left thumb + 3 keys | Thumb Space, c, left Shift + s |
| `<leader>xL` | Space → x → L | Left thumb + 3 keys | Thumb Space, x, uppercase L (right middle, home row) |
| `<leader>xQ` | Space → x → Q | Left thumb + 3 keys | Thumb Space, x, uppercase Q (left outer top) |
| `<leader>snl` | Space → s → n → l | Left thumb + 4 keys | Thumb Space, s (left ring), n (right index), l (right middle) |
| `<leader>snh` | Space → s → n → h | Left thumb + 4 keys | Thumb Space, s, n, h (right middle) |
| `<leader>snd` | Space → s → n → d | Left thumb + 4 keys | Thumb Space, s, n, d (right middle) |

### Hand Positions & Flow

**Bracket motions ([d, ]d, etc.):** These start with a bracket key, which requires Shift:
- `[d`: Left Shift (outer column) + right index (to type [), then d (right middle). Or: right Shift + left index + d.
- `]d`: Right Shift (outer column) + right index (to type ]), then d (right middle).

The bracket keys feel awkward on the Corne because they're shifted symbols. Comfort tip: Use the Raise layer if brackets are positioned there, or practice the shift-reach until it's natural. On this layout, brackets are on Raise, so [d would be: Raise (right thumb) + [ position, then d.

**Leader-x commands (Trouble):** All start with left thumb Space, then tap commands on the left side. `<leader>xx` is "space, x, x" — rapid-fire on the left hand.

**Leader-sn commands (Noice):** "Space, s, n" prefix, then a suffix letter. These are longer sequences, but they cluster on the left (s, n are left ring and right index).

### Ergonomic Challenge: Bracket Navigation

The bracket motions are uncomfortable on the Corne because they require Shift + index on the edge. On a standard keyboard, [ and ] are easily accessible on the right pinky. On the Corne's split layout, they're either:
1. Shifted symbols (hard to reach)
2. Remapped to a layer (like Raise)

**Workaround 1:** Use the Raise layer. Configure [ to be on Raise instead of shift+. Then `[d` becomes: Raise + [ position + d. Smoother.

**Workaround 2:** Remap bracket navigation. Some people use `{d` and `}d` (brace-d instead of bracket-d) if braces feel more accessible. This requires custom Neovim keybindings.

**Workaround 3:** Accept the awkwardness as part of mastery. The bracket motions aren't used every second — mostly during debugging. Getting good at them is fine.

### Trouble and Noice: Primarily Left-Hand

Once you open Trouble or Noice:
- Navigation is j/k (right hand)
- Selection is Enter (right thumb)
- Closing is <leader>xx (left thumb)

The initial trigger uses your left hand (leader command), then right hand takes over for navigation. This is comfortable on the split keyboard because each hand has a clear role.

### Tip: Layer Optimization

If you find bracket motions annoying, consider adding custom keybindings in your Neovim config:

```lua
-- Instead of [d, use <leader>d[
vim.keymap.set('n', '<leader>d[', '[d')
vim.keymap.set('n', '<leader>d]', ']d')
```

This way, bracket-navigation becomes a leader command, which is thumb-friendly on the Corne.

### Corne-Specific Drill

1. Open a file with type errors (create them intentionally).
2. Try the bracket motions: `]e` and `[e`. Notice the Shift reach.
3. If it feels awkward, switch to `<leader>xx` (Trouble) instead. Open Trouble and navigate errors with j/k (much more comfortable on split keyboard).
4. Practice both: sometimes use bracket motions when you're already typing, sometimes jump to Trouble when you have multiple errors to review.

The split keyboard's strength is navigation with hjkl. Use that strength: Trouble (picker list) + j/k is very Corne-friendly.

---

[← Day 16: Diagnostics & Notifications](index.md) | [Day 16 Exercises](exercises.md) | [Day 16 Checkpoint](checkpoint.md)
