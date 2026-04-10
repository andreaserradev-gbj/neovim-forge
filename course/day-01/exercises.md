---
day: 1
title: "Day 1 Exercises"
type: "exercises"
---

[← Day 1: The First Keystrokes](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Navigate This File

**Objective:** Master scrolling and positioning using only hjkl.

Open this file (`course/day-01/exercises.md`) in Neovim. Your task is to jump to each heading below using only `j`, `k`, and `/` (search—we haven't formally taught this yet, but you can use it).

**Headings to find:**
1. Exercise 2: The package.json Expedition
2. Exercise 3: Character Hunt
3. Exercise 4: Multi-File Navigation
4. Exercise 5: Speed Run

**Rules:**
- Use `j` and `k` to scroll (or `/` to search for a heading)
- Time yourself
- Can you reach all four headings in under 2 minutes?

**Expected outcome:** Scrolling should feel natural. You're not hunting for the cursor—your fingers are just moving automatically.

---

## Exercise 2: The package.json Expedition

**Objective:** Use line-based motions to find specific content.

Open `app/package.json` in Neovim. Answer these questions using only vim motions:

1. **What's on line 8?** Use `8G` to jump to line 8. Read the content. Write it down.
2. **What's the last character on line 4?** Use `4G` to jump to line 4, then `$` to go to the end. What character is it?
3. **How many lines does this file have?** Jump to the bottom with `G`. What line number does Neovim show in the status bar?
4. **Find the "version" field.** Use `/version` to search for it, or use `w` repeatedly to jump through keys.

**Challenge:** Try to answer these questions without using `/` at all. Pure motions: `{count}G`, `$`, `w`, `b`.

**Expected outcome:** You're becoming comfortable with the "jump to line" reflex. You see a line number and instantly know how to get there.

---

## Exercise 3: Character Hunt

**Objective:** Master find motions within a line.

Open this file again (`course/day-01/exercises.md`).

**Task 1:** Find every occurrence of the letter `x` using `fx`. Start from the top using `gg`. Then press `fx`. Jump to the next `x` with `;`. Keep pressing `;` until you reach the end of the file (it will fail to find more, which is OK).

**Count:** How many `x` characters did you find? Write it down.

**Task 2:** Find every opening brace `{` using `f{`. Start from the top. Count them. Now try `F{` from the bottom of the file going backward. Does it work? (It should.)

**Task 3:** Search for the pattern "Exercise" using `/Exercise`. You'll jump to the first match. Press `n` (next) to jump to the next match. Keep going. How many exercises are there? (This introduces `n` for "next search"—a quick preview of search navigation.)

**Expected outcome:** You realize find motions are incredibly fast. You can position your cursor at any character on the visible screen in one or two keystrokes.

---

## Exercise 4: Multi-File Navigation

**Objective:** Practice switching between files (preview: Day 11 will formalize this).

This exercise is tricky because proper buffer management is Day 11. For now, here's a workflow:

1. Open `course/day-01/index.md` in Neovim:
   ```bash
   nvim course/day-01/index.md
   ```

2. From within Neovim, open a second file. Type:
   ```
   :e course/day-01/exercises.md
   ```
   Press Enter. Now you're in this file (exercises.md).

3. Switch back to the lesson using:
   ```
   :e course/day-01/index.md
   ```

4. You can also use `:bn` (next buffer) and `:bp` (previous buffer) to switch files.

5. Practice switching between the two files a few times. Use `gg` and `G` to jump around in each file, then switch to the other.

**What you're learning:** This is the foundation for multi-file editing. You're training the muscle memory: open file, navigate, switch file, navigate. All without the mouse.

**Expected outcome:** Switching between files feels natural. You're not thinking about it—just typing the command and continuing.

---

## Exercise 5: Speed Run

**Objective:** Combine all motions into a fast navigation challenge.

Open `app/src/pages/index.astro` in Neovim.

**Starting position:** Line 1, character 1. Think of your cursor blinking there.

**Navigation challenge:** Using only vim motions, navigate to these positions in order:

1. The `<title>` tag content (the text between `<title>` and `</title>`)
2. The `<h1>` tag content (if you created one during the Build section, or any heading tag)
3. The last `</html>` tag on the page

**Rules:**
- Use any motion: hjkl, w/b/e, gg/G, f/F/t/T, etc.
- No mouse
- No `/` search (pure motions)

**Bonus:** Time yourself. Try to reach all three positions in under 10 keystrokes total. This is aggressive—it teaches you to think ahead: "I need to get to the title, so I'll use `gg`, then `f<`, then `f>` to jump past the opening tag, then `w` to position on the first word of content."

**Expected outcome:** You're thinking about motions strategically, not mechanically. You're predicting your path instead of hunting visually.

---

## Exercise 6: Reflection

**Objective:** Build awareness of your learning.

Answer these honestly:

1. Which motion felt most natural today? hjkl? w? gg/G? Find motions?
2. Which one did you have to think about?
3. Did you catch yourself reaching for the mouse or arrow keys? If so, how did you redirect?
4. What surprised you about vim's navigation design?

Write your answers down. This reflection is how you learn the philosophy, not just the mechanics.

---

## Bonus Drill: The Vim Gauntlet

If you have extra time and want a challenge, try this:

**Setup:** Open `app/package.json`.

**Challenge:** Without using search (`/`) or arrow keys, navigate to every `"` (quote character) on the file and land your cursor exactly on it. Time yourself.

Use `f"` to find the first quote. Use `;` to jump to the next quote. Count all the quotes. Now try the same thing but land just *before* each quote using `t"` instead.

**Goal:** Under 30 seconds.

This might seem arbitrary, but it's training you to think in precise, single-keystroke commands. That precision is the essence of vim efficiency.

---

[← Day 1: The First Keystrokes](index.md) | [Day 1 Checkpoint →](checkpoint.md)
