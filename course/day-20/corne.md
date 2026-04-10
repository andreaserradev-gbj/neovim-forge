---
day: 20
track: "corne"
---

[← Day 20: Macros](index.md) | [Course Index](../../COURSE.md)


## Macros on the Corne

### Macro Recording and Replay: Base Layer

All macro operations are base layer on the Corne:

| Operation | Keys | Execution |
|-----------|------|-----------|
| `qa` | q + a | Left index top + left pinky (home row) |
| `q` (stop) | q | Left index top |
| `@a` | shift+2 + a | Left shift outer + left index (for @) + left pinky |
| `@@` | shift+2 + shift+2 | Left shift outer twice (for @@) |
| `5@a` | 5 + @ + a | Lower layer (5) + shift for @ + letter |

### Ergonomic Notes

**Record key (`q`):** Easy, base layer. No reach.

**Replay with `@`:** The `@` symbol requires `shift+2` on most keyboards. On the Corne, this is left Shift (outer column) + left index (for the number 2). Slightly awkward, but acceptable because you don't replay very frequently (maybe a few times per session).

**Bulk replay count (e.g., `20@a`):** Requires typing the count first (base layer number), then `@a`. If numbers are on the Lower layer, you might need: Lower + number, then @ + letter. More involved, but not a bottleneck — you do this infrequently.

### Corne-Specific Shortcut: Leader for Replay

If `@` feels awkward, remap it:

```lua
vim.keymap.set('n', '<leader>@', '@')
vim.keymap.set('n', '<leader>l', '@@')  -- quick repeat
```

Then:
- `<leader>@a` to replay register a (thumb-friendly)
- `<leader>l` to quick-repeat (single leader command)

### Corne-Specific Drill

1. Record a macro with `qa`...`q` (comfortable base layer)
2. Replay with `@a` (accept the shift+2 reach) or use `<leader>@a` (if you've remapped)
3. Quick-repeat with `@@` (or `<leader>l` if remapped)
4. Bulk-replay with `20@a` or `20<leader>@a`

The Corne is strong at **recording** (q is simple) and **understanding** macros (sequential editing is comfortable). The **replay** syntax (`@`) is slightly awkward, but macros are episodic — you record once, replay several times, then move on. The occasional @ reach is acceptable.

---

[← Day 20: Macros](index.md) | [Day 20 Exercises](exercises.md) | [Day 20 Checkpoint](checkpoint.md)
