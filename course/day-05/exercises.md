---
day: 5
title: "Day 5 Exercises"
type: "exercises"
---

[← Day 5: Visual Mode & Selection](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Character Visual Mode Basics

**Objective:** Get comfortable with `v` for character-wise selection.

Open any file with multiple sentences or words.

**Task 1:**

1. Position cursor at the start of a word
2. Press `v` (enter visual mode)
3. Press `w` to extend selection one word
4. See the highlight (color in your terminal)
5. Press `y` to yank (copy) the selection
6. Navigate to a new location with `j` or `/`
7. Press `p` to paste
8. The word appears at the new location

**Task 2:**

1. Enter visual mode again: `v`
2. Press `$` to extend to end of line
3. Press `d` to delete (not just yank, but delete)
4. Undo with `u`

**Task 3:**

1. Try `vf"` (enter visual, extend to next quote)
2. Delete with `d`
3. Undo

**Expected outcome:** Visual selection with `v` is straightforward. You see exactly what you're selecting before operating.

---

## Exercise 2: Line Visual — Multi-Line Deletes

**Objective:** Practice `V` for selecting full lines.

Open `app/src/pages/index.astro` or any file with multiple lines.

**Task:**

1. Position cursor on a line
2. Press `V` (line visual)
3. Press `j` (down) — two full lines are selected
4. Press `j` again — three full lines selected
5. Press `d` to delete all three
6. Undo with `u`

**Variation:**

1. Press `V` to enter line visual
2. Press `G` to extend selection to end of file
3. See how much is selected
4. Undo (if you accidentally deleted something important)

**Expected outcome:** Line visual always selects complete lines. Useful for deleting blocks of code.

---

## Exercise 3: Block Visual — Column Editing

**Objective:** Use `Ctrl-v` for rectangular selections.

Create a temporary file with columns of text:

```
hello  world  test
foo    bar    baz
alpha  beta   gamma
```

**Task:**

1. Position cursor at the first column of "hello"
2. Press `Ctrl-v` (block visual)
3. Press `j` twice to extend down to the third line
4. Press `l` four times to extend right to "world"
5. A rectangle of text is selected (hello, foo, alpha, and the spaces)
6. Press `d` to delete the rectangle
7. Undo

**Challenge:**

Use `Ctrl-v` to select only the middle column (world, bar, beta). This requires precise positioning.

**Expected outcome:** Block visual creates rectangular selections. Essential for aligning code, removing columns of text, etc.

---

## Exercise 4: Motions in Visual Mode

**Objective:** Confirm that all motions work to extend selections.

**Task sequence:**

1. Enter visual: `v`
2. Extend with `w` (one word)
3. Extend with `w` again (another word)
4. Extend with `$` (to end of line)
5. See the selection grow
6. Press `d` to delete
7. Undo

1. Enter visual: `v`
2. Extend with `f"` (to next quote character)
3. Delete with `d`

**Expected outcome:** Any motion extends a visual selection. You're not limited to simple selections.

---

## Exercise 5: Toggle Endpoint with `o`

**Objective:** Use `o` to adjust selection without restarting.

**Task:**

1. Position cursor at the start of a word
2. Press `v`
3. Extend to several words ahead: `wwww`
4. Realize you've selected too much
5. Press `o` to toggle endpoint
6. Now you're at the other end of the selection
7. Press `b` to shrink the selection backward
8. The selection is now smaller, from the opposite end
9. Delete with `d`

**Expected outcome:** `o` lets you adjust selections interactively. You don't have to restart the selection.

---

## Exercise 6: Reselect with `gv`

**Objective:** Use `gv` to restore the last visual selection.

**Task:**

1. Make a visual selection: `vwww`
2. Delete with `d`
3. You're back in normal mode
4. Immediately press `gv`
5. The exact same region you just deleted is selected again
6. This is useful for "oops, I deleted the wrong thing" moments

**Expected outcome:** `gv` is your safety net. You can restore and examine a selection you just operated on.

---

## Exercise 7: Visual vs. Operators — Comparison

**Objective:** Compare speed and precision between visual mode and operators.

**Setup:** Three identical tasks on three different sections of text.

**Task 1 (Visual):** Delete a word using visual mode.
- Enter visual: `v`
- Extend to word boundary: `w`
- Delete: `d`
- Total: 3 keys

**Task 2 (Text object):** Delete the same word using text objects.
- Delete inside word: `diw`
- Total: 3 keys

**Task 3 (Motion):** Delete the same word using motion.
- Delete word: `dw`
- Total: 2 keys

Same outcome, different paths:
- Motion is fastest: 2 keys
- Text object is clear: 3 keys (and you don't need cursor on the word start)
- Visual is safest: 3 keys (you see what you're deleting)

**Expected outcome:** You see the trade-offs. Operators are fastest, visual is safest, text objects are structural.

---

## Exercise 8: Styling with Visual Mode

**Objective:** Use visual mode to select and style HTML elements.

Open `app/src/pages/index.astro` or any HTML file.

**Task:**

1. Find an HTML element (like a `<p>` tag)
2. Select the entire element using visual mode: `V` (line visual, full lines)
3. No styling yet (Day 5 is about the mechanics), but see how visual selection works for HTML structures

**Challenge:**

1. Select just the content inside a tag (between `>` and `<`)
2. Use `v` to enter visual
3. Extend with `f>` to the close of opening tag
4. Continue extending to select content
5. This is more complex than `di>`, but it's how visual selection works

**Expected outcome:** Visual mode works for any text structure. HTML is a common case.

---

## Exercise 9: Reflection

**Objective:** Deepen your understanding of visual mode.

Answer:

1. **When would you use visual mode instead of operators?** (Think: complex selections, multiple lines, non-uniform patterns)

2. **What's the advantage of seeing the selection before operating?** (Think: confidence, ability to adjust)

3. **What's the disadvantage compared to operators?** (Think: more keystrokes, slower for known structures)

4. **How do you decide: visual, operators, or text objects?** What factors matter to you?

5. **Try this scenario:** You want to delete a sentence that spans two lines. Would you use visual mode or a combination of operators/text objects? Why?

---

## Bonus: Block Visual for Indentation

If you work with code that needs indentation adjustments, block visual is magical.

**Scenario:** Multiple lines that need to be un-indented:

```python
def hello():
    if True:
        print("hello")
        print("world")
```

You want to remove one level of indentation from lines 3-4.

1. Position cursor at the start of the indent on line 3
2. Press `Ctrl-v`
3. Extend down to line 4: `j`
4. Extend right to the end of the indent (4 spaces): `llll`
5. Press `d` to delete the indent
6. Lines shift left by 4 spaces

Block visual is how you handle multi-line indentation edits visually.

---

[← Day 5: Visual Mode & Selection](index.md) | [Day 5 Checkpoint →](checkpoint.md)
