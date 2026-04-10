---
day: 19
title: "Day 19 Exercises"
type: "exercises"
---

[← Day 19: Registers Deep Dive](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Master Named Registers

**Objective:** Store and retrieve multiple snippets using named registers.

Open a file with multiple short code blocks (or create one with several functions/objects).

1. Copy a block to register a: `"ayy` (or `"ay$` to copy to end of line)
2. Copy another block to register b: `"byy`
3. Copy a third block to register c: `"cyy`
4. Navigate to a blank area
5. Paste register a: `"ap`
6. Paste register b: `"bp`
7. Paste register c: `"cp`
8. Verify all three blocks appeared in the order you pasted them

**Expected outcome:** You can juggle multiple snippets without losing any.

---

## Exercise 2: System Clipboard Integration

**Objective:** Copy from Vim to external apps and vice versa.

1. Copy something outside Vim (text from browser, terminal, etc.)
2. In Vim, paste it: `"+p`
3. Verify it appears correctly
4. Copy a line in Vim: `"+yy`
5. Paste it in another app
6. Verify the Vim text appears correctly

**Expected outcome:** System clipboard bridges Vim and the rest of your OS.

---

## Exercise 3: Black Hole Register

**Objective:** Delete without polluting your clipboard.

1. Copy a line: `yy`
2. Delete a different line cleanly (to black hole): `"_dd`
3. Paste your copy: `p`
4. Verify your copied line appears (not the deleted one)

**Expected outcome:** Black hole register lets you delete freely.

---

## Exercise 4: Last Yank Register

**Objective:** Recover your last copy even after deletion.

1. Copy a line: `yy`
2. Delete another line: `dd` (this overwrites unnamed register)
3. Paste from unnamed: `p` — the deleted line appears
4. Use last yank register: `"0p`
5. Verify your original copied line appears

**Expected outcome:** Last yank register is your backup clipboard.

---

## Exercise 5: Register Inspection

**Objective:** View and understand register contents.

Type `:reg` and press Enter. You see:
- `""` — unnamed register
- `"a`, `"b`, etc. — named registers you've used
- `"0` — last yank
- `"+` — system clipboard
- Other read-only registers

Review what's stored where. Close with `:q` or Escape.

**Expected outcome:** `:reg` is your register dashboard.

---

## Exercise 6: Expression Register

**Objective:** Use the expression register to insert computed values.

Type `:` to enter command mode (command line at bottom of screen).

```
="hello" + " world"<CR>
```

(This evaluates the expression "hello" + " world" which evaluates to "hello world".)

Wait, that won't work directly. Let me revise:

In insert mode, press Ctrl-R (register paste) then = (expression):

```
Ctrl-R = 
```

Then type: `1+1` and press Enter. The cursor inserts `2`.

**Expected outcome:** Expression register lets you insert dynamic values.

---

[← Day 19: Registers Deep Dive](index.md) | [Day 19 Checkpoint →](checkpoint.md)
