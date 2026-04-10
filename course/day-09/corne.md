---
day: 9
track: "corne"
title: "Day 9 — Corne Companion"
---

[← Day 9: Flash Navigation](index.md) | [Course Index](../../COURSE.md)


## Flash Navigation on the Corne

Flash (`s`, `S`, `r`, `R`) on the Corne is a revelation. The `s` key sits on the right home row, within easy reach of your right hand. When you press `s`, every visible character gets a label, and you continue with your right hand—your left hand can rest.

This is one of the clearest examples of how the Corne is *designed* for efficient vim workflows.

---

## Key Positions: Day 9 Flash on the Corne

### Flash Motions

| Vim Key | Corne Layer | Position | Hand | Finger |
|---------|-------------|----------|------|--------|
| `s` | Base | Right home row, lower area | Right | Index/middle |
| `S` (Shift+s) | Base + Shift | — | Right + Left outer | Right index + left pinky |
| `r` | Base | Right lower area | Right | Lower area |
| `R` (Shift+r) | Base + Shift | — | Right + Left | Right lower + left outer |

The critical point: `s` and `r` are both on the right side, base layer. Your right hand can navigate and jump without moving your left hand.

---

## The Right-Hand Advantage for Flash

Unlike left-biased keys (like `f` for find, which requires your left hand to move), Flash's `s` key keeps your right hand on the home row area:

1. **Press `s` (right index/middle):** Every visible character gets a label.
2. **Type the label (right hand alone):** Two to four keystrokes, all on the right side.
3. **Jump:** Your cursor moves to the labeled position.
4. **Your left hand hasn't moved:** It's still resting or on the home row.

This is the Corne's advantage: Flash is a pure right-hand motion.

### Comparison: Standard Keyboard vs. Corne

**Standard keyboard:**
- `s` is on the home row (home position reached naturally)
- But once you press `s`, you might reach your right hand across to other letters for labels
- If you need capitals (Shift+s for `S`), you need your left pinky

**Corne:**
- `s` is right home row, natural reach
- Labels are typed with your right hand (a, b, c, d, etc. — all accessible)
- `S` needs Shift (left outer column), which is less ergonomic but rare enough to not be a problem
- `r` and `R` are also right-side, part of the same navigation flow

---

## Flash Sequences on the Corne

### Sequence 1: Jump to Character (Right Hand Only)

1. **Press `s` (right index):** Flash activates.
2. **View labels on screen:** Identify your target and its label.
3. **Type label (right hand, 2-4 keys):** e.g., "ah" or "f" for the label.
4. **Cursor jumps:** Stay right-hand focused.

Entire motion: right hand only, under 1 second.

### Sequence 2: Jump via Treesitter (Right Hand Only)

1. **Press `S` (right index + left outer shift):** Shift comes from the left outer column (less frequent, so acceptable).
2. **View syntax node labels:** Fewer, more semantic targets.
3. **Type label (right hand):** Minimal keystrokes.
4. **Cursor jumps to the node.**

### Sequence 3: Delete to Flash Target (Operator + Flash)

1. **Press `d` (left middle):** Delete operator, left hand.
2. **Press `r` (right lower area):** Flash in operator-pending, right hand.
3. **Type label (right hand):** Target position.
4. **Text deletes from cursor to target.**

Split advantage: left hand (operator) + right hand (flash targeting) work together.

### Sequence 4: Change to Flash Target

1. **Press `c` (left middle):** Change operator, left hand.
2. **Press `r` (right lower area):** Flash, right hand.
3. **Type label (right hand):** Target.
4. **Text changes, enter insert mode.**

---

## Hand Movement Patterns

The Corne's split design means Flash creates a natural pattern:

**Reading the screen:**
- Left and right hands are separated, so each can read "their side" without head turning.

**Activating Flash (`s`):**
- Right index presses `s` (home row).
- No hand movement.

**Labeling the target:**
- Your right hand's fingers type the label (a-z, then pairs).
- Home row letters are reachable without moving your wrist.

**Jumping:**
- Your cursor moves; your hands stay still.

Contrast this with a standard keyboard where reaching `s` means your right hand is slightly off-home, and then typing a label might require hand shifting.

---

## Muscle Memory Development

By the end of Day 9, `s` (Flash jump) should feel as automatic as hjkl navigation:

**Week 1 (Days 1-7):**
- hjkl navigation becomes muscle memory.
- Fingers stay on home row for movement.

**Week 2, Day 9 (today):**
- Flash jumps are added to your navigation toolkit.
- `s` becomes the fast option for visible targets.
- Your fingers transition from hjkl (movement) to Flash labels (targeting) seamlessly.

---

## Treesitter on the Corne

Treesitter parsing is the same on all keyboards—the plugin understands your code's structure regardless of hardware. But the Corne's advantage is the reach:

- On a standard keyboard, Shift+s (for `S`) requires pinky movement and shift timing.
- On the Corne, Shift+s uses the left outer Shift (easier reach for the pinky than the standard keyboard's corner position) + right index `s` (no movement since `s` is already home row).

It's not a huge difference, but it's one more example of the Corne being optimized for efficient vim workflows.

---

## Common Pitfalls

**Pitfall 1: Forgetting that `S` requires Shift.**

If you're in the middle of right-hand navigation and want to switch from `s` (characters) to `S` (syntax nodes), you need Shift. This breaks the "right hand only" flow.

**Solution:** `S` is useful but less frequent. Reserve it for times when syntax-aware jumping is critical. Most of the time, `s` will be fast enough.

**Pitfall 2: Reaching to type labels.**

When Flash labels appear, your right hand needs to type the labels (a, b, c, etc.). These are all on the base layer, reachable from home row. Don't reach. Don't move your wrist. Just tap the letters.

**Solution:** Practice typing labels while your hand stays on home row. The labels are two-letter sequences from the base layer—exactly what your fingers are trained to type.

**Pitfall 3: Operator + Flash confusion.**

When you press `d` (left) then `r` (right), it feels like a split motion. It is—that's intentional. But some people accidentally press `dr` expecting a different motion.

**Solution:** Remember: `d` = delete (left hand operator), `r` = flash targeting (right hand). They're separate. The split is the point.

---

## The Escape Reflex (J+K Reminder)

Throughout today's drills, if you end up needing to exit a mode (which you shouldn't, Flash doesn't require insert mode), remember J+K for escape:

- Right index + right middle, simultaneous press
- Keeps you on the home row
- Faster than reaching to physical Escape

---

## Weekly Flash Development

**Today (Day 9):**
- Learn `s` for character jumps (right hand, base layer)
- Experiment with `S` for Treesitter jumps
- Try `r` and `R` with operators (less frequent)

**Days 10-14:**
- Flash becomes part of your daily navigation alongside Explorer and buffer management
- You'll alternate: Flash for jumps within files, Explorer for jumping between files, leader keys for project-wide operations

By Day 14, your hand positioning for navigation will be:
- **Leader key** (project-wide): left thumb (Space)
- **Flash jumps** (within file): right hand (`s`)
- **hjkl movement** (fine-tuning): right hand
- **Operators + motions** (editing): both hands

The Corne lets all four layers of navigation coexist without conflict.

---

## Physical Comfort Check

After Flash drilling:

1. **Right wrist:** Should be straight, not bent. You're typing labels without twisting.
2. **Fingers:** Resting on home row when Flash activates. Not reaching up or out.
3. **Eyes:** You're looking at the screen for labels, not at your hands.

If anything hurts, stop. Flash should feel more ergonomic than moving your entire hand to reach target characters. If it's causing strain, your keyboard position might need adjustment.

---

## Bonus: Flash + Corne Philosophy

The Corne and Flash share the same philosophy: **minimize hand movement, maximize precision through composition.**

- Vim: operators compose with motions
- Flash: instantly labels any visible target
- Corne: split keyboard puts each hand in its natural position

Together, they create a system where:
- Your right hand navigates (hjkl) and jumps (Flash `s`)
- Your left hand handles operators and modifiers
- Your thumbs manage leader keys and layer switching
- You're never reaching or straining

This is the deep ergonomic gain of combining a split keyboard with an efficient editor.

---

[← Day 9: Flash Navigation](index.md) | [Day 9 Exercises](exercises.md) | [Day 9 Checkpoint](checkpoint.md)
