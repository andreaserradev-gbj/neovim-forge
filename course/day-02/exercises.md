---
day: 2
title: "Day 2 Exercises"
type: "exercises"
---

[← Day 2: Enter and Exit](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Insert Mode Precision

**Objective:** Master choosing the right insert mode for the situation.

Open `app/src/layouts/Base.astro` in Neovim.

**Task 1 (i vs a):** Navigate to the `<title>` tag content.

1. Find `<title>` using `f<`.
2. Jump to the opening `>` and move to the character after it using `l` or `a`.
3. Now: the cursor is between `>` and `N` in `Neovim Forge`. Press `i` to insert before cursor.
4. Type `[` and exit with Escape.
5. Now position your cursor on the `N` again. Press `a` to insert after cursor.
6. Type `]` and exit.
7. The content should now be `[Neovim] Forge`. Undo both changes with `uu`.

**Understanding:** You see the difference. `i` puts the cursor exactly where it is. `a` moves one character right. For surgical positioning, you need both.

**Task 2 (I vs A):** Navigate to the `<meta name="description"` line.

1. Find the line using `f<` or search with `/description`.
2. Position your cursor in the middle of the line (doesn't matter where).
3. Press `I`. Your cursor jumps to the first non-blank character (the `<`). This is insert-at-beginning. Type `<!-- ` (with space and dash).
4. Press Escape.
5. Press `A`. Your cursor jumps to the end of the line (after the `>`). Type ` -->`.
6. Press Escape.
7. Undo both changes with `uu`.

**Understanding:** `I` and `A` are shortcuts that combine navigation and insertion. Instead of jumping to the start with `^`, then pressing `i`, you just press `I`. One keystroke instead of two.

---

## Exercise 2: The Open Line Workflow

**Objective:** Practice `o` and `O` for adding new content.

Stay in `app/src/layouts/Base.astro`.

**Task:** Navigate to the `<body>` line. Position your cursor anywhere on it.

1. Press `o`. A new line appears below `<body>`, properly indented.
2. Type a comment: `<!-- Main content slot -->`
3. Press Escape.
4. Press `o` again. Another new line opens.
5. Type: `<main>`
6. Press Escape.
7. Now move your cursor to the `<slot />` line. Press Escape to make sure you're in normal mode.
8. Press `o` to open a line below `<slot />`.
9. Type: `</main>`
10. Press Escape.

Your page structure should now be:
```html
<body>
  <!-- Main content slot -->
  <main>
    <slot />
  </main>
</body>
```

**Challenge:** Now try `O`. Navigate to the `<main>` line. Press `O` to open a line above it. Type a comment explaining what the main tag is for. Undo with `u`.

**Expected outcome:** You see that `o` and `O` handle indentation automatically. You never have to manually count spaces or tabs. This is a massive productivity win.

---

## Exercise 3: Undo/Redo Chains

**Objective:** Build comfort with Vim's undo tree.

Open a new file in the `course/` directory (any file you want to practice in, like `app/src/pages/test.astro`).

**Sequence:**
1. Press `i` to enter insert mode.
2. Type: `First change`
3. Press Escape.
4. Press `i` again. Type: ` second change`
5. Press Escape.
6. Press `i` again. Type: ` third change`
7. Press Escape.

Your text should read: `First change second change third change`

**Now undo:**
1. Press `u`. The third change disappears.
2. Press `u`. The second change disappears.
3. Press `u`. Everything is gone.

**Now redo:**
1. Press `Ctrl-r`. The first change comes back.
2. Press `Ctrl-r`. The second change reappears.
3. Press `Ctrl-r`. The third change comes back.

**Understanding:** Each insert session is one undo node. If you had typed all three things in a single insert session (without exiting with Escape), it would be one undo. By exiting and re-entering, you created three separate nodes.

**Challenge:** What happens if you undo three times, then make a new change? In most editors, you lose the three undone changes. Try it in Vim. You don't lose them—they're still in the undo tree, just on a different branch. This is why Vim's undo is so powerful.

---

## Exercise 4: Multi-Mode Editing Workflow

**Objective:** Combine normal mode navigation with insert mode entry.

Open `app/src/pages/index.astro` in Neovim.

**Task:**
1. Navigate to the closing `</a>` tag of your Day 1 link using `f<` or `/a`.
2. Position your cursor on the `<` of `</a>`.
3. Press `O` to open a line above it (don't press `o`, use capital O).
4. Type: `<p>Day 1 is complete. Move on to Day 2.</p>`
5. Press Escape.
6. Now navigate back to the same spot and press `o` (lowercase) to open a line below.
7. Type: `<hr />`
8. Press Escape.

Your page now has more content between the link and the closing tags. You've practiced both `O` (above) and `o` (below).

**Expected outcome:** You see the difference in action. `O` jumps above, `o` jumps below. You're choosing the direction surgically.

---

## Exercise 5: Escape Muscle Memory (Corne Only)

**Objective:** Lock in the J+K combo for Escape.

If you're on the Corne keyboard, this is critical practice.

**Setup:** Open any file in Neovim.

**Drill:**
1. Press `i` to enter insert mode.
2. Type a single character: `a`
3. Press **J and K simultaneously** (both right hand, right index and middle at the same time).
4. If it worked, you exited insert mode. The character is in the buffer.
5. If it didn't work, you might see `J`, `K`, or `jk` in the text. Undo with `u` and try again.
6. The timing window is tight (about 20-50ms). Practice until it feels natural.

Repeat this 10 times. By the end, the combo should feel reflexive. You shouldn't have to think about it—your fingers just know to press them together.

**Why it matters:** Standard keyboard users press Escape at the top-left corner. Your hand leaves home. Corne users with the J+K combo stay on the home row. Over the course of a day, that's hundreds of hand movements you don't have to make.

---

## Exercise 6: Reflection

**Objective:** Build metacognitive awareness of insert modes.

Answer these questions:

1. **Which insert mode did you find yourself using most today?** Was it `i`? `a`? `o`?
2. **Why do you think `o` is the most common in actual coding?** Think about your workflow when writing HTML or code.
3. **Did you catch yourself entering insert mode without a clear intention?** If so, what did you do to recover?
4. **What's the advantage of exiting insert mode immediately instead of staying in and navigating?** (Hint: think about what keystrokes mean in normal mode vs insert mode.)
5. **Try this mental exercise:** You're on line 5 of a file. You want to add text at the end of line 3. Would you:
   - Option A: Press `k` twice, then `A`, type text, exit?
   - Option B: Navigate to line 3 with `3G`, then `A`, type text, exit?
   - Option C: Go to line 3 with `/pattern`, then `A`, type text, exit?

   Which is fastest? Why? (The answer might depend on context, which is the point—Vim is about choosing the right tool.)

Write your thoughts down. This reflection is how you build intuition, not just muscle memory.

---

## Bonus Drill: The Escape Race

If you want an extra challenge:

**Setup:** Open a file. Enter insert mode with `i`. Type this sentence: `The quick brown fox jumps over the lazy dog.`

**Race 1 (Standard keyboard):** Press Escape to exit. Measure how far your right pinky has to travel from the home row to the Escape key.

**Race 2 (Corne):** Do the same but use J+K to exit. Measure how far your hands moved. (Ideally, 0 movement.)

This physical awareness is why split keyboards are optimized for Vim. The hardware and the editor align in philosophy: minimize unnecessary hand movement.

---

## Bonus Reflection: The Insert Mode Philosophy

Here's a deeper question for your learning journal:

**Why does Vim separate normal mode and insert mode?**

Most modern editors don't. In VS Code, you just type. Backspace deletes, arrow keys move, etc. Everything is always insert mode.

But Vim deliberately separates them. Why?

Because the separation enables a different way of thinking:
- In normal mode, every keystroke is a command. Motions, operators, counts, repetition with dot.
- In insert mode, every keystroke is a character (with a few exceptions like Escape).

This separation means:
- Your fingers can be positioned for navigation (hjkl on home row) without worrying about accidentally typing characters.
- You can perform complex edits (delete, copy, paste, repeat) without touching insert mode at all.
- When you do enter insert mode, you're focused on typing, not navigating.

Is this more efficient? Research suggests yes—experienced Vim users edit faster than experienced editors users, even when both have access to all the same features.

Think about this: why do you think that is?

---

## Bonus Exercise: Refactoring with Insert Modes

If you want to challenge yourself:

**Scenario:** You have a list of function names in your code:

```
hello_world
test_function
another_function
```

**Task:** Convert each to camelCase with a leading `const `. Result should be:

```
const helloWorld = () => {};
const testFunction = () => {};
const anotherFunction = () => {};
```

Do this using only insert modes (no delete or change operators—those are Day 3). You'll need to:
1. Use `I` to insert at the beginning of each line.
2. Use `a` or `A` to append ` = () => {};` at the end.
3. Manually (this is tedious—that's the point) edit the middle to convert to camelCase.

This is intentionally cumbersome. By Day 3, you'll have delete and change operators that make this trivial. But doing it the hard way today teaches you why those operators matter.

---

[← Day 2: Enter and Exit](index.md) | [Day 2 Checkpoint →](checkpoint.md)
