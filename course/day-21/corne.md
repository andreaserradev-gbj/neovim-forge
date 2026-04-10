---
day: 21
track: "corne"
---

[← Day 21: Week 3 Review](index.md) | [Course Index](../../COURSE.md)


## Week 3 Skills on the Corne: Complete Summary

### All Week 3 Keybindings Quick Reference

| Skill | Vim Binding | Corne Ergonomics | Notes |
|-------|-------------|------------------|-------|
| **LSP Nav** | `gd` | Left g + d | Both left hand, comfortable |
| | `gr` | Left g + r | Both left hand, opens picker |
| | `gy` | Left g + y | Both left hand |
| | `K` | Right K | Single tap, instant |
| | `<leader>cr` | Thumb + c + r | Leader-friendly |
| **Diagnostics** | `]e` | Right Shift + bracket + e | Awkward, consider remapping |
| | `<leader>xx` | Thumb + x + x | Leader-friendly |
| **Formatting** | `<leader>cf` | Thumb + c + f | Leader-friendly |
| **Git** | `]h` | Right Shift + bracket + h | Awkward, consider remapping |
| | `<leader>ghs` | Thumb + g + h + s | Leader-friendly |
| **Registers** | `"ayy` | Shift+' + a + yy | Quote reach, acceptable for rare use |
| | `"+y` | Quote + Shift+= + y | Reach for clipboard |
| **Macros** | `qa...q` | Left q + a | Comfortable recording |
| | `@a` | Shift+2 + a | @ reach, acceptable for replay |

### The Pattern: Leader is Comfortable, Base Requires Reach

You'll notice that Week 3 heavily uses **leader commands** for the operations you perform frequently:

- `<leader>cr` (rename) — comfortable
- `<leader>cf` (format) — comfortable
- `<leader>xx` (diagnostics) — comfortable
- `<leader>ghs` (stage hunk) — comfortable

But some **base-layer operations** require reaches:

- `]e`, `[e` (bracket motions) — Shift on edge
- `"a` (registers) — quote on Shift position
- `@a` (macro replay) — @ requires Shift+2

### Corne Strategy for Week 3

**Frequent operations:** Always accessible via leader commands. You're comfortable.

**Occasional operations:** Accept the occasional reach for bracket motions, register prefix, macro replay. They're powerful but infrequent enough that the reach is tolerable.

**Optional customization:** If you find bracket motions or macro replays annoying, remap them:

```lua
-- Remap bracket nav to leader
vim.keymap.set('n', '<leader>e]', ']e')
vim.keymap.set('n', '<leader>e[', '[e')

-- Remap macro replay
vim.keymap.set('n', '<leader>@', '@')
```

Then `<leader>e]` instead of `]e`, and `<leader>@a` instead of `@a`.

### Ergonomic Wins on the Corne This Week

1. **LSP navigation (gd, gr, gy):** Both keys on left hand, no reach. Excellent.
2. **Leader commands (cr, xx, cf, ghs):** Thumb + left = perfect. This week is leader-heavy, which suits the Corne.
3. **K hover:** Single key on right middle (home row). Instant. No competition.
4. **Right-hand navigation in pickers:** When gr opens a picker, you navigate with j/k on the right hand. Natural flow.

### Weak Points on the Corne This Week

1. **Bracket motions:** [e, ]e, [h, ]h all require Shift on the outer column. Not terrible, but noticeable.
2. **Register prefix `"` :** Shift+' is a reach. Acceptable for occasional use, but if you're juggling many registers, it adds up.
3. **System clipboard `"+`:** Requires quote + Shift+=. Reach + layer. If you copy to clipboard frequently, remap: `<leader>y` and `<leader>p`.

### Corne Week 3 Mastery Checklist

- [ ] LSP navigation (gd, gr, K) is automatic, no thinking
- [ ] Leader commands (cr, cf, xx, ghs) feel natural
- [ ] You've accepted or remapped bracket motions to your comfort
- [ ] You're comfortable with registers (quote reach is tolerable)
- [ ] Macro recording (q) is painless, replay (@) is acceptable
- [ ] You understand which operations to optimize (leader) vs. accept (base-layer reaches)

By the end of Week 3, you're not just competent with these skills — you're fluent. The occasional reach or layer transition is automatic; your mind is on the code, not the keyboard.

---

[← Day 21: Week 3 Review](index.md) | [Day 21 Exercises](exercises.md) | [Day 21 Checkpoint](checkpoint.md)
