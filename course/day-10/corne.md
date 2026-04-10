---
day: 10
track: "corne"
title: "Day 10 — Corne Companion"
---

[← Day 10: The Explorer](index.md) | [Course Index](../../COURSE.md)


## Explorer on the Corne

The explorer (`<leader>e`) uses hjkl to navigate the tree, which is a perfect fit for the Corne's right-hand home row. Pressing Space with your left thumb, then `e`, then using hjkl with your right hand—this is a model vim workflow on the Corne.

---

## Key Positions: Day 10 Explorer on the Corne

| Action | Keys | Hand Position |
|--------|------|---------------|
| Open explorer | Space + e | Left thumb + left middle |
| Navigate down | j (in explorer) | Right middle |
| Navigate up | k (in explorer) | Right ring |
| Collapse dir | h (in explorer) | Right index |
| Expand dir | l (in explorer) | Right pinky |
| Open file | Enter (in explorer) | Right thumb |
| Close explorer | q (in explorer) | Left ring |
| Copy path | Y (in explorer) | Left outer shift + Y |

The critical point: once you press Space-e and the explorer is open, your right hand stays on hjkl (the exact same position it uses for normal vim navigation). You navigate the tree without moving your hand position.

---

## The Right-Hand Advantage for Tree Navigation

The Corne's split design makes explorer navigation elegant:

1. **Left thumb presses Space, left middle presses e:** Explorer opens.
2. **Your right hand immediately uses hjkl:** Navigate the tree using the same muscle memory as normal vim navigation.
3. **No hand switching:** Your right hand stays on home row throughout.
4. **Left hand rests:** While your right hand navigates, your left hand is free or resting on the Space key.

Compare this to a standard keyboard where pressing `e` means reaching across or off-home, and then hjkl navigation feels less natural because your hand might have moved.

---

## Explorer Workflow on Corne

### Workflow: Open → Navigate → Open File → Close

1. **Open explorer:** Space + e (left hand)
2. **Navigate tree:** j/k (right hand on home row)
3. **Expand/collapse:** h/l (right hand on home row)
4. **Select file:** Enter (right thumb)
5. **Back to editing:** Cursor is in the file, right hand positioned to continue editing

This entire workflow is beautiful on the Corne: your hands stay in optimal positions throughout.

### Alternate: Using `q` to Close

If you open the explorer and decide to close it without opening a file:

1. **Close explorer:** q (left ring, from home row)

`q` is on the left side, so closing the explorer is a left-hand motion. Your right hand can be anywhere—it's not involved in closing.

---

## Y (Copy Path) Command

`Y` copies the path to your clipboard. On the Corne:

- **Y:** You're in the explorer, at a file position.
- **Press Shift + Y:** Left outer Shift + left ring `y`.
- **Path is copied:** You can now paste it in insert mode, or in a terminal, or anywhere else.

This is a high-value command. The Corne makes it reachable: outer Shift is easy for the pinky to find, and `y` is naturally reachable with your ring finger.

---

## File Operations: c, d, r

Explorer file operations (create, delete, rename) are all accessed with single keys from the home row or nearby:

| Operation | Key | Hand | Notes |
|-----------|-----|------|-------|
| Create | c | Left middle | Home row key |
| Delete | d | Left middle | Home row key |
| Rename | r | Right ring (or left middle for left-side typing) | Accessible |

These are left-hand keys, so you can perform them while your right hand rests on hjkl, ready to navigate the result.

---

## A Complete Explorer Session on the Corne

Here's a realistic workflow:

1. **Press Space e** (left thumb + left middle): Explorer opens.
2. **Press j, j, j** (right middle, three times): Navigate down through directories.
3. **Press l** (right pinky): Expand a directory.
4. **Press j, j** (right middle, twice): Navigate to a file.
5. **Press Y** (shift + y): Copy the path.
6. **Press q** (left ring): Close explorer.
7. **Enter** (right thumb): Open a new file for editing.
8. **Type `:paste`** or use your insert-mode paste hotkey: Paste the path you copied.

Entire workflow: left hand (Space, shift, q) coordinates with right hand (navigation, copy confirmation, subsequent editing). Neither hand dominates. Neither hand stays idle too long. It's balanced and efficient.

---

## Physical Positioning

During explorer navigation:

- **Eyes:** Focused on the screen (the tree structure)
- **Right hand:** Resting on hjkl, moving fingers to navigate
- **Left hand:** Light touch on Space, or resting above the shift key
- **Posture:** Relaxed. You're not reaching. You're not straining.

If the explorer session feels strained, your keyboard position might need adjustment.

---

## Weekly Integration

By end of Day 10:

- **Leader key** (`<leader>e`): Left thumb (automatic now)
- **hjkl navigation** (in explorer or code): Right hand home row (automatic now)
- **File search** (`<leader>ff`): Complements explorer (both tools in your toolkit)
- **Flash** (`s`): Right-hand jumping within files (yesterday)

Together, these form your complete navigation toolkit:
- **Explorer:** Browse project structure
- **File search:** Find a file by name
- **Flash:** Jump within a file
- **hjkl:** Fine-tuning movement

---

## Corne-Specific Stretch Goal

Try this workflow and time yourself:

1. Open explorer: `<leader>e`
2. Navigate to `course/day-10/`
3. Expand and view files
4. Position on a file and press Y to copy its path
5. Close explorer: q
6. In insert mode, paste the path
7. Use Flash (s) to navigate within the pasted text

This demonstrates how multiple Corne-optimized tools (explorer, copy, Flash) work together in a real editing session.

---

## Next Steps

Day 11 introduces window splitting and buffer management. You'll be:
- **Opening multiple files:** Using explorer or leader keys
- **Splitting the screen:** Using `<leader>-` (horizontal) or `<leader>|` (vertical)
- **Navigating between panes:** Using Ctrl+hjkl (iCtrl + home row, from Day 1)

The explorer prepares you for this—you know how to manage multiple files. Tomorrow you'll manage multiple *views* of those files.

---

[← Day 10: The Explorer](index.md) | [Day 10 Exercises](exercises.md) | [Day 10 Checkpoint](checkpoint.md)
