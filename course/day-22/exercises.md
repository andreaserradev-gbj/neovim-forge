---
day: 22
title: "Day 22 Exercises"
type: "exercises"
---

[← Day 22: Marks & Jumps](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Mark Tour

Open `course/day-22/index.md` in Neovim.

**Objective:** Set marks at strategic locations and practice jumping between them.

1. Jump to the "Key Bindings Summary" table using `/Key Bindings`
2. Set mark "K" at that location: `mK`
3. Jump to the "Drills" section using `G` (jump to bottom), then `?Drills` to search backward
4. Set mark "D" at that location: `mD`
5. Jump to the "Build" section using `/Build`
6. Set mark "B": `mB`
7. Now perform these jumps:
   - `'D` to jump to Drills
   - `'K` to jump to Key Bindings
   - `'B` to jump to Build
   - `''` to jump back to your last jump location

**Challenge:** Complete all 7 jumps in under 20 seconds.

**Expected outcome:** You've created a mental map of the file using marks. You can now jump between major sections instantly.

---

## Exercise 2: Jump List Challenge

Open the same file. Perform this sequence and track the jump list:

1. Press `gg` (jump 1)
2. Use `/Mental Model` to find a section (jump 2)
3. Press `G` to go to the bottom (jump 3)
4. Press `3G` to jump to line 3 (jump 4)
5. Use `/Vim Skills` to search (jump 5)

Now you have 5 jumps in your history. Test navigation:

1. Press `<C-o>` four times to go back to jump 1
2. Press `<C-i>` twice to go forward to jump 3
3. Type `:jumps` to see your entire jump history

**Challenge:** Can you predict which jump you'll land on before pressing `<C-o>`?

**Expected outcome:** You understand the jump list as a traversable history. You can use `<C-o>/<C-i>` to undo navigation mistakes.

---

## Exercise 3: Last Edit Navigation

Open `course/day-22/exercises.md` in a new buffer.

**Objective:** Use automatic marks to track your edits.

1. Navigate to a random line in the middle: `50G`
2. Press `i` to insert mode, type `// Added comment`, then Escape
3. This creates a change at that location—Vim marks it with `'.`
4. Navigate to the top: `gg`
5. Now press `'.` to jump back to where you just edited
6. Press `'[` and `']` to jump to the start and end of your added text
7. Delete the text: position on the line and press `dd`
8. Press `'[` and `']` again to jump to the deleted region

**Challenge:** Make 3 edits in different locations, then use `g;` and `g,` to navigate backward and forward through your change history.

**Expected outcome:** You realize Vim tracks everything. You never have to manually mark an edit location—Vim does it for you.

---

## Exercise 4: Multi-File Mark Jumping

**Objective:** Use global marks to navigate across multiple files.

Open two files in buffers:

```bash
nvim course/day-22/index.md
```

Then inside Neovim:
```
:e course/day-22/exercises.md
:e course/day-22/corne.md
```

Now you have 3 buffers open. Perform this sequence:

1. In `index.md`, search for `Local marks` using `/Local marks`
2. Set a global mark: `mM` (mark M for "Marks")
3. Switch to `exercises.md`: `:b exercises.md` or `<leader>bf`
4. Search for `Exercise 4`: `/Exercise 4`
5. Set a global mark: `mE` (mark E for "Exercises")
6. Switch to `corne.md`: `:e course/day-22/corne.md`
7. Search for a section (e.g., `/Marks`): `/Marks`
8. Set a global mark: `mC` (mark C for "Corne")

Now test the marks:

- `'M` jumps to the Marks section in index.md
- `'E` jumps to Exercise 4 in exercises.md
- `'C` jumps to the Corne section in corne.md

**Challenge:** Jump between all three marks in under 15 seconds.

**Expected outcome:** Global marks feel like bookmarks across your entire project. You can work in multiple files and instantly jump between specific locations.

---

## Exercise 5: Marks + Text Objects

Open `app/src/pages/index.astro` (or any code file with multiple functions).

**Objective:** Combine marks with editing to refactor code.

1. Find the first function or code block: `gg` then `/function` or `/const`
2. Set a mark at the start of the block: `ma`
3. Jump to the end of the block (or a specific line within it): `G` or use `f}` to find the closing brace
4. Set another mark: `mb`
5. Now navigate to a different part of the file: `50G`
6. Edit something: `i` and add a comment, then Escape
7. Jump back to your marks:
   - `'a` to the start of the first block
   - `'b` to the end of the first block
   - `'.` to where you just edited

**Challenge:** Edit 3 different locations in the file, then use `g;` to walk backward through all 3 edits.

**Expected outcome:** Marks let you focus on editing without losing your place. You can jump between the areas you're working on instantly.

---

## Exercise 6: The Backtick Difference

Open `course/day-22/index.md` again.

**Objective:** Understand the difference between `'` (line) and `` ` `` (character).

1. Navigate to the middle of a line: `50G` then `w` to move to a word
2. Set a mark: `mx`
3. Jump away: `G`
4. Now jump back with `'x` — you land at the *start* of the line
5. Jump back with `` `x `` — you land at the *exact* column where you set the mark

Repeat this a few times with different lines and column positions. Notice that:
- `'` is useful when you remember "which line" but not "which position"
- `` ` `` is useful when you need the exact character

**Challenge:** In a code file (`app/src/...`), set a mark in the middle of a line. Use `'` vs `` ` `` to jump between line-start and exact-position. Which one feels more natural for your workflow?

**Expected outcome:** You now use both appropriately. For most code editing, `'` is faster; for precise insertions, `` ` `` is essential.

---

## Exercise 7: Challenge Integration

Open the challenge runner in the app (if you built it in the Step-by-Step section).

**Objective:** Test the diff-based validation you added.

1. Open `localhost:4321/challenges` in your browser (or `npm run dev` to start the app)
2. Find the Day 22 code-editing challenge (or a similar one)
3. Edit the code in the textarea to match the expected output
4. Click "Submit"
5. Review the diff that appears — does it show the expected vs submitted code?

If the challenge page doesn't exist yet, this drill validates that you need to finish the Build section.

**Expected outcome:** The challenge system now validates code changes, not just keystroke counts. Students can learn through trial and error with instant feedback.

---

## Exercise 8: Reflection

Answer these honestly:

1. When did you use local marks vs global marks today? What's the difference in your workflow?
2. Did `<C-o>` help you "undo" a navigation mistake? How?
3. Which automatic mark (`'.`, `'^`, `'[`, `']`) felt most useful?
4. How would marks change your refactoring workflow in a real project?

Write your answers down. This teaches you when marks are essential vs when simple motions are faster.

---

[← Day 22: Marks & Jumps](index.md) | [Day 22 Checkpoint →](checkpoint.md)
