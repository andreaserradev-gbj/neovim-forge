---
day: 9
title: "Day 9 Exercises"
type: "exercises"
---

[← Day 9: Flash Navigation](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Flash Jump Basics

**Objective:** Get comfortable with the `s` motion and character labels.

Open a source file with visible code:

```bash
nvim app/src/pages/index.astro
```

1. Place your cursor at the top of the file (`gg`).
2. Press `s`. Every character on screen should get a label (usually two-letter labels like aa, ab, ac, ... az, ba, bb, etc.).
3. Find a word in the middle of the visible area. Type the label for the first character of that word.
4. Your cursor should jump to that character.
5. Repeat the process: press `s`, pick a different target, jump.
6. Do this 10 times, aiming to jump to different areas of the screen each time.

**Challenge:** Set a timer. Can you make 10 consecutive jumps in under 1 minute?

**Expected outcome:** Flash jumps are second nature. You don't think about line numbers—you see a target and jump to it.

---

## Exercise 2: Treesitter Jumps

**Objective:** Use `S` to jump to syntax nodes instead of random characters.

In the same file:

1. Press `S`. Flash now labels syntax nodes (function names, variable names, HTML tags, etc.) rather than every character.
2. You'll see fewer labels because Treesitter groups related characters.
3. Aim for a function name or variable name. Type the label to jump there.
4. Repeat 5 times, jumping to different named elements in the code.

**Challenge:** Compare character-level jumps (`s`) with syntax jumps (`S`). Which feels more natural for code? Why?

**Expected outcome:** You've experienced the power of Treesitter. Jumping to a named element is more useful than jumping to an arbitrary character.

---

## Exercise 3: Operator + Flash (Delete)

**Objective:** Combine Flash with the delete operator.

**Note:** Deletion is taught formally tomorrow, but you can use `d` now to delete text.

1. Position your cursor at the start of a line you want to partially delete.
2. Press `d` (delete operator). The screen might highlight or show some visual feedback.
3. Press `r` (Flash in operator-pending mode). Character labels appear.
4. Pick a label somewhere later in the line. The text from your cursor to that position deletes.
5. Undo with `u` (undo) to restore the text.
6. Repeat 3 more times with different targets.

**Challenge:** Delete a whole variable name using `dr` by targeting the character after the variable. So if you have `myVariable.property`, position before `my`, press `dr`, label the character just after `e` in `myVariable`.

**Expected outcome:** You've used an operator with Flash targeting. This is the power of Vim composition—operators + motions = flexible text manipulation.

---

## Exercise 4: Operator + Flash (Change)

**Objective:** Use Flash to change text with `cr`.

**Note:** Change is also taught tomorrow, but you can explore it here.

1. Position your cursor at the start of a word.
2. Press `c` (change operator). You're now in change mode.
3. Press `r` (Flash in operator mode). Labels appear.
4. Pick a label to designate the range. The text deletes and you enter insert mode.
5. Type a replacement word.
6. Press Escape to exit.
7. Undo with `u` to restore.

**Challenge:** Change a whole variable name using `cr`. Example: change `oldName` to `newName` using one `cr` motion.

**Expected outcome:** Change + Flash is powerful. You're not just navigating—you're transforming code.

---

## Exercise 5: Flash Speed Challenge

**Objective:** Test your Flash proficiency with a timed challenge.

Set a timer for 2 minutes.

**Starting position:** Top of the file (`gg`).

**Challenge:** Using only Flash (`s`, `S`, `r`, `R`), navigate to these targets in order:

1. Any function name in the first 10 lines.
2. A closing brace `}` somewhere in the middle of the file.
3. An opening tag `<` in the HTML section.
4. A semicolon `;` on the last visible line.

**Scoring:**
- Under 60 seconds: Expert
- 60-90 seconds: Proficient
- 90-120 seconds: Learning
- Over 120 seconds: Keep practicing

**Expected outcome:** You're thinking in Flash terms. You see a target and instantly know you can reach it in two keystrokes.

---

## Exercise 6: Flash vs. Other Motions

**Objective:** Compare Flash to traditional motions and understand when to use which.

Open a file:

```bash
nvim course/day-09/index.md
```

Try completing the same navigation task three ways:

**Task: Jump from the top of the file to the word "Treesitter" in the middle of the file.**

**Method 1: Using hjkl (character-level navigation)**
- Press `j` repeatedly to get to the right line (count the lines first)
- Press `w` or `b` to position on the word

**Method 2: Using search (`/`)**
- Press `/` and type "Treesitter"
- Press Enter to jump
- Count keystrokes

**Method 3: Using Flash (`s`)**
- Press `s` to activate Flash
- Type the label for the `T` in "Treesitter"
- Count keystrokes

Which was fastest? Write down the keystroke count for each method. This trains your intuition—for what distances or targets is Flash superior?

**Expected outcome:** You've internalized when Flash shines. (Spoiler: it's faster than search for visible targets, and way faster than repeated hjkl.)

---

## Exercise 7: Treesitter Mental Model

**Objective:** Understand how Treesitter structures code.

Open a TypeScript or JavaScript file:

```bash
nvim app/src/pages/index.astro
```

Press `S` to activate Flash with Treesitter.

**Observation exercise:**

1. How many syntax node labels did you see? (Estimate)
2. Can you identify the types of nodes labeled? (functions, variables, tags, strings, etc.)
3. What was labeled that surprised you?
4. What did you expect to be labeled but wasn't?

**Reflection:**

Write down three syntax node types you saw. For example:
- Function name
- HTML tag
- Variable declaration

This builds your mental model of how Treesitter sees code—as a structured tree, not just characters.

---

## Exercise 8: Flash in the Wild (Editing Task)

**Objective:** Use Flash as your primary navigation tool during a real editing task.

**Task:** Edit the file `course/day-09/index.md` using only Flash (`s` and `S`) for navigation. No search, no hjkl (except when already navigating within Flash's target area). No mouse.

1. Open the file.
2. Find the word "Treesitter" using `s`.
3. Find the section titled "Treesitter: The Syntax Engine" using `S`.
4. Edit a word in that section (use `i` to insert, `a` to append, or `x` to delete the character under cursor).
5. Find another section and make another edit.

**Challenge:** Complete 3 edits using Flash as your only navigation method. Time yourself.

**Expected outcome:** You're using Flash in realistic editing. It doesn't feel like a novelty—it's your primary tool.

---

## Exercise 9: Flash + Operator Combinations

**Objective:** Explore the full power of Flash combined with operators.

Operators are learned tomorrow, but you can experiment with:

- `ds` — delete to Flash-labeled position
- `cs` — change to Flash-labeled position
- `dS` — delete to Treesitter node
- `cS` — change to Treesitter node

Try each one 2-3 times:

1. Position your cursor.
2. Press the operator, then Flash.
3. Pick a target.
4. Text deletes or changes.
5. Undo to restore.

**Challenge:** Which combination felt most useful? `ds` (delete to character) or `dS` (delete to syntax node)? Why?

**Expected outcome:** You've played with the composition. You might not use all of these daily, but now you know they exist.

---

## Exercise 10: Reflection

**Objective:** Build awareness of Flash and how it fits into your vim workflow.

Answer these questions:

1. **When is Flash faster than search?** (Hint: when your target is visible on screen)
2. **When would you use `S` instead of `s`?** (Hint: when you're targeting semantic units like function names)
3. **How does Flash change your mental model of navigation?** (From "I need to count lines" to "I can see it, so I can jump to it")
4. **What surprised you most about Flash?** (Your honest reaction)
5. **How will you remember when to use `s` vs `S` vs `r` vs `R`?**

Write your answers. These reflections cement your understanding.

---

## Bonus: Flash Chaining

**Advanced challenge:** Use multiple Flash jumps in sequence to navigate a complex file.

1. Open `app/src/pages/index.astro`.
2. Flash jump (`s`) to a word in the first function.
3. Flash jump again to a different word.
4. Flash jump a third time.
5. You've now moved across three different lines without thinking about hjkl or line numbers.

This is Flash as a primary navigation tool. Not just a novelty—your actual workflow.

---

## Next Session

Tomorrow you'll learn about the **Explorer** and file tree navigation. You'll use `<leader>e` to open a tree view of your project, then use hjkl to navigate the tree. Flash and Explorer are complementary: Flash for jumping within files, Explorer for navigating between files.

---

[← Day 9: Flash Navigation](index.md) | [Day 9 Checkpoint →](checkpoint.md)
