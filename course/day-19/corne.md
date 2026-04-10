---
day: 19
track: "corne"
---

[← Day 19: Registers Deep Dive](index.md) | [Course Index](../../COURSE.md)


## Registers on the Corne

### Register Operations: All Base Layer

Registers don't require special keys — they all use the quote prefix `"` followed by a register letter. On the Corne, both are base layer:

| Operation | Keys | Execution |
|-----------|------|-----------|
| `"ayy` | " + a + y + y | Left ring (shift+'), left pinky, double yank |
| `"ap` | " + a + p | Left ring, left pinky, p (right ring) |
| `"+y` | " + shift+= + y | Left ring, right ring (shift+=), y |
| `"+p` | " + shift+= + p | Left ring, right ring, p (right ring) |
| `"0p` | " + 0 + p | Left ring, number 0 (Lower layer), p |
| `"_dd` | " + _ + d + d | Left ring, shift+-, middle + middle |
| `:reg` | : + r + e + g | Shift+; (raise+: or shift), r, e, g |

### Ergonomic Notes

**Quote key position:** On the Corne, `"` is typically `Shift+'` (right pinky shift + left pinky quote), or it might be on a Raise layer. Check your Corne layout.

If quote is awkward to reach, this can feel clunky. But registers are low-frequency operations — you don't press them every few seconds. When you do, you're copying a snippet or switching registers, which is intentional, deliberate work.

**System clipboard prefix `"+`:** This requires `"` + `Shift+=`. The shift is on the outer column, `=` is on the Raise layer (right side). So: reach for shift + reach for =/+, then the operation. Slightly involved but acceptable for occasional use.

### Corne-Specific Workaround: Leader-Alias

If `"` feels awkward, you can alias it to a leader command:

```lua
vim.keymap.set('n', '<leader>"', '"')
```

Then `<leader>ayy` instead of `"ayy`. This trades a reach for quote with a thumb-led leader sequence, which might feel more natural on the Corne.

### System Clipboard: Special Consideration

`"+y` is "copy to system clipboard." If `+` (shift+=) is hard to reach on your Corne, you might prefer:

```lua
vim.keymap.set('n', '<leader>y', '"+y')
vim.keymap.set('n', '<leader>p', '"+p')
```

Then `<leader>y` and `<leader>p` become your system clipboard shortcuts. Thumb-friendly.

### Corne-Specific Drill

1. Set up a leader alias if quote feels awkward:
   ```lua
   vim.keymap.set('n', '<leader>"', '"')
   ```

2. Or set up system clipboard shortcuts:
   ```lua
   vim.keymap.set('n', '<leader>+y', '"+y')
   vim.keymap.set('n', '<leader>+p', '"+p')
   ```

3. Practice: Copy a snippet to register a, then paste it with `<leader>a` (if you've aliased it).

4. Copy to system clipboard and paste in another app.

The Corne strategy: Use leader for frequent actions, accept base-layer reach for rare actions (registers).

---

[← Day 19: Registers Deep Dive](index.md) | [Day 19 Exercises](exercises.md) | [Day 19 Checkpoint](checkpoint.md)
