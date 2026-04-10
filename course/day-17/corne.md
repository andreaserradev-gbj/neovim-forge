---
day: 17
track: "corne"
---

[← Day 17: Format & Flow](index.md) | [Course Index](../../COURSE.md)


## Formatting on the Corne

### Key Positions for Day 17 Skills

| Vim Key | Corne Physical | Hand | Execution |
|---------|----------------|------|-----------|
| `<leader>cf` | Space → c → f | Left thumb + 3 keys | Thumb Space, c (left middle), f (left index) |
| `<leader>cF` | Space → c → Shift+F | Left thumb + 3 keys | Thumb Space, c, left Shift + f |
| `<leader>uf` | Space → u → f | Left thumb + 3 keys | Thumb Space, u (left ring), f (left index) |
| `<leader>uF` | Space → u → Shift+F | Left thumb + 3 keys | Thumb Space, u, left Shift + f |

### Hand Positions & Flow

All formatting commands are **leader-based**, which means they start with the left thumb pressing Space. Then:

- `<leader>cf`: Space → c (left middle) → f (left index). Stays on the left side. Quick left-hand sequence.
- `<leader>uf`: Space → u (left ring) → f (left index). Similar — left-hand sequence after thumb.
- Capital versions (`cF`, `uF`): Same structure but the last key requires Shift. Space → c/u → Shift + f. The Shift is on the outer left column.

### Ergonomic Notes

**Formatting is rare-action friendly on the Corne:** You don't press `<leader>cf` every few seconds. It's a once-per-file or once-per-session command. The left-hand leader sequences are comfortable for occasional use.

**Auto-format-on-save is the real win:** Once you enable `<leader>uf`, formatting happens automatically on `:w`. You don't need to press `<leader>cf` repeatedly. This means the formatting keybindings are low-traffic — you use `<leader>uf` once per session, then let it work invisibly.

### Auto-Closing Tags: No Special Keys

`nvim-ts-autotag` works by watching what you type. When you type `<div>`, the plugin detects the closing `>` and inserts a closing tag. No special keybinding is involved — it's automatic.

The only keys you press are the characters you'd normally type:

- `<div>` — four keys (angle, d, i, v, angle)
- Auto-close adds `</div>` instantly, cursor positioned between the tags

No Corne-specific ergonomics here — it just works for everyone.

### Tip: Lean on Auto-Format

The Corne's split layout isn't optimized for precise spacing (reaching for spaces, operators, indentation). That's exactly why auto-formatting is so valuable: you type roughly, let Prettier fix the style automatically on save.

This is the Corne's philosophy: optimize for **navigation** and **motions** (where the split keyboard shines), then let tools handle presentation details (where a split keyboard is less efficient).

### Corne-Specific Drill

1. Create a file with intentionally messy code (no spaces, bad indentation).
2. Press `<leader>uf` to enable format-on-save.
3. Make a change to the file and press `:w`.
4. Watch it auto-format (no manual `<leader>cf` needed).
5. Enable and disable `<leader>uf` a few times to get the muscle memory for the thumb + left-hand sequence.

The drill teaches: **formatting is often a one-time setup (enable auto-format) rather than a per-file manual action.**

---

[← Day 17: Format & Flow](index.md) | [Day 17 Exercises](exercises.md) | [Day 17 Checkpoint](checkpoint.md)
