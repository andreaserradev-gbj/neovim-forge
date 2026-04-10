---
day: 18
track: "corne"
---

[← Day 18: Git in the Editor](index.md) | [Course Index](../../COURSE.md)


## Git in the Editor on the Corne

### Key Positions for Day 18 Skills

| Vim Key | Corne Physical | Hand | Execution |
|---------|----------------|------|-----------|
| `]h` | ] + h | Right hand, base | Shift+] (right Shift outer + right index), then h (right middle) |
| `[h` | [ + h | Right hand, base | Shift+[ (left Shift + right index), then h (right middle) |
| `]H` | ] + Shift+H | Right hand | Right Shift + h (uppercase H) |
| `[H` | [ + Shift+H | Right hand | Left Shift + right index, then Shift+H |
| `<leader>ghp` | Space → g → h → p | Left thumb + 4 keys | Thumb Space, g (left ring), h (right middle), p (right index outer) |
| `<leader>ghs` | Space → g → h → s | Left thumb + 4 keys | Thumb Space, g, h, s (left ring) |
| `<leader>ghu` | Space → g → h → u | Left thumb + 4 keys | Thumb Space, g, h, u (left ring) |
| `<leader>ghr` | Space → g → h → r | Left thumb + 4 keys | Thumb Space, g, h, r (left index) |
| `<leader>ghd` | Space → g → h → d | Left thumb + 4 keys | Thumb Space, g, h, d (left middle) |
| `<leader>ghb` | Space → g → h → b | Left thumb + 4 keys | Thumb Space, g, h, b (left index) |
| `<leader>gg` | Space → g → g | Left thumb + 3 keys | Thumb Space, g, g (left ring) |
| `<leader>gG` | Space → g → Shift+G | Left thumb + 3 keys | Thumb Space, g, left Shift + g |

### Hand Positions & Flow

**Bracket motions ([h, ]h):** These start with bracket keys (requiring Shift):
- `]h`: Right Shift (outer column) + right index, then h (right middle). Awkward but doable.
- `[h`: Left Shift (outer column) + right index, then h (right middle).

The bracket motions are the weak point here, same as Day 16. Workaround: remap them to leader commands in your Neovim config:

```lua
vim.keymap.set('n', '<leader>h]', ']h')
vim.keymap.set('n', '<leader>h[', '[h')
```

Then you can use `<leader>h]` instead, which is easier on the split keyboard.

**Leader-gh commands:** Start with thumb Space, then g (left ring), then h (right middle), then a letter. This is a longer sequence but very comfortable: thumb anchors the command, then left-hand g and right-hand h and final letter work together.

**Leader-gg:** Space → g → g. Quick left-hand sequence.

### Ergonomic Note: Bracket vs Leader Sequences

The Corne's weakness is bracket navigation (requires Shift on outer column). Its strength is leader commands (thumb + left-hand combinations).

Real-world: You don't press ]h very frequently. You press it during review-and-stage workflows, which are episodic (not constant). It's worth remapping to a leader command if it bugs you, or accepting the awkwardness as a trade-off for split keyboard benefits elsewhere.

### Tip: Combine Hunk Navigation with Staging

Here's the comfortable flow on the Corne:

1. Position cursor on a hunk (or use <leader>h] to jump to next, if you've remapped it)
2. Press <leader>ghp to preview (comfortable leader sequence)
3. Press <leader>ghs to stage (comfortable leader sequence)
4. Jump to next hunk with <leader>h] (your remapped motion)
5. Repeat

The leader-gh commands are the star of this day on the Corne. The bracket motions are the awkward part — remap if you find them annoying.

### Corne-Specific Drill

1. Open a file with multiple hunks (make edits in different places)
2. If bracket motions feel awkward, add these remaps to your Neovim config:
   ```lua
   vim.keymap.set('n', '<leader>h]', ']h')
   vim.keymap.set('n', '<leader>h[', '[h')
   ```
3. Use your chosen motion (either ]h or <leader>h]) to navigate hunks
4. On each hunk, practice the comfortable flow: preview, review, stage

The goal is to get comfortable reviewing changes and staging them selectively — a professional workflow that feels natural on your Corne.

---

[← Day 18: Git in the Editor](index.md) | [Day 18 Exercises](exercises.md) | [Day 18 Checkpoint](checkpoint.md)
