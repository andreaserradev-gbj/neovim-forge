---
day: 10
title: "Day 10 Exercises"
type: "exercises"
---

[← Day 10: The Explorer](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Explorer Opening & Closing

**Objective:** Make opening and closing the explorer automatic.

Open Neovim in the neovim-forge project:

```bash
nvim .
```

1. Press `<leader>e`. The explorer opens on the left.
2. Press `q`. The explorer closes.
3. Repeat 10 times, alternating between opening and closing.
4. Time yourself. Can you open and close the explorer 10 times in under 20 seconds?

**Expected outcome:** Opening the explorer becomes a reflex.

---

## Exercise 2: Tree Navigation

**Objective:** Navigate deeply nested directories using hjkl.

1. Open the explorer with `<leader>e`.
2. Use `j` and `k` to navigate down to the `course/` directory.
3. Press `l` to expand `course/`.
4. Navigate down to `day-05/`.
5. Press `l` to expand `day-05/`. You should see the day files.
6. Navigate to `index.md`.
7. Repeat for another day (e.g., day-08, day-09).

**Challenge:** Do this 3 times, timing yourself. Can you navigate to day-08's index.md in under 30 seconds?

**Expected outcome:** Tree navigation feels natural. You can explore complex structures quickly.

---

## Exercise 3: Opening Files from Explorer

**Objective:** Open files directly from the explorer.

1. Open the explorer with `<leader>e`.
2. Navigate to `course/day-10/index.md`.
3. Press Enter to open it. The file opens in the editor and the explorer closes.
4. Repeat: `<leader>e`, navigate to a different day, press Enter.
5. Do this 5 times with different files.

**Challenge:** How fast can you navigate to and open a specific file using the explorer? Compare this speed to using `<leader>ff` (file search).

**Expected outcome:** You've experienced both workflows: search (fast for known files) vs. browse (good for exploration).

---

## Exercise 4: Copy Path with Y

**Objective:** Use the Y command to copy file paths.

1. Open the explorer.
2. Navigate to `app/src/components/FileTree.astro` (or any component file).
3. Press `Y`. The full path is copied to your clipboard.
4. Open a text editor or terminal and paste the path.
5. You should see something like: `app/src/components/FileTree.astro`
6. Repeat this 5 times with different files, varying between course files and app files.

**Challenge:** Copy the path to `course/day-01/index.md`. Then use that path in your terminal to open the file: `nvim course/day-01/index.md`

**Expected outcome:** The Y command is a quick way to grab paths. It integrates with your clipboard and other tools.

---

## Exercise 5: File Operations

**Objective:** Create, rename, and delete files using the explorer.

1. Open the explorer.
2. Navigate to `app/src/pages/`.
3. Press `c` (create). Type: `test-component.astro`
4. Press Enter. The file is created.
5. Verify it appears in the explorer.
6. Press `r` (rename). Change the name to `test-page.astro`.
7. Verify the new name in the explorer.
8. Press `d` (delete). Confirm the deletion.
9. Verify the file is removed.

**Challenge:** Can you create, rename, and delete a file in under 30 seconds using only the explorer?

**Expected outcome:** File operations are fast. You don't need a terminal for basic file management.

---

## Exercise 6: Explorer vs. File Search

**Objective:** Understand when to use each tool.

**Scenario 1: You want to find a file called `package.json`**
- Using explorer: Navigate to project root, look in the list.
- Using search: Press `<leader>ff`, type "package", press Enter.

Which is faster for you?

**Scenario 2: You want to browse the structure of the `course/` directory to see what day folders exist**
- Using explorer: Open explorer, navigate to course, expand it.
- Using search: You'd have to search for multiple things.

Which makes more sense?

**Reflection:** Write down three scenarios where you'd prefer the explorer, and three where `<leader>ff` is better.

---

## Exercise 7: Breadcrumb Navigation

**Objective:** Test the breadcrumb component (will be rendered in app after you build it).

After building the FileTree and Breadcrumb components:

1. Navigate to any day page (e.g., `/day/05/`)
2. Observe the breadcrumb at the top: "Home / Days / Day 5"
3. Click "Days" in the breadcrumb. You should navigate to `/days/`
4. Click "Home" in the breadcrumb. You should navigate to `/`
5. Repeat for reference pages. Check that breadcrumbs show "Home / Reference / [Page Name]"

**Challenge:** Navigate using only breadcrumbs. Start at a day page, go to home, go to reference, go to a reference page, go back to days, go to another day. All using breadcrumb clicks.

**Expected outcome:** Breadcrumb navigation is intuitive and helps you understand your location in the hierarchy.

---

## Exercise 8: Keyboard-Only Navigation

**Objective:** Navigate and open files using only vim and the explorer (no mouse).

**Starting position:** Open Neovim in the project root.

**Challenge:**
1. Open the explorer with `<leader>e`
2. Navigate to and open `course/day-10/index.md`
3. Without using the mouse, read the file and find the word "Breadcrumb"
4. Open the explorer again, navigate to `app/src/components/Breadcrumb.astro`
5. Compare the two files (switch between them using `<leader>bb`)

All navigation using vim motions, explorer, and leader keys. No mouse, no file dialogs.

**Expected outcome:** You can navigate your entire project keyboard-only, using the explorer as your primary file browser.

---

## Exercise 9: Exploring Real Codebases

**Objective:** Apply what you've learned to a real project structure.

If you have another project locally (or you can initialize a simple one), explore it using vim and the explorer:

1. Open it: `nvim .`
2. Use `<leader>e` to explore the structure
3. Navigate directories that surprise you or that you haven't seen before
4. Open random files and skim them
5. Use Y to copy paths you might need

This isn't about editing—it's about understanding the shape of a codebase using only the keyboard.

---

## Bonus: Performance Comparison

**Challenge:** Complete the same task three ways and compare speed.

**Task:** Find and open the file `course/reference/vim-grammar.md`

**Method 1: Using Explorer**
- Press `<leader>e`, navigate, open file
- Record time elapsed

**Method 2: Using File Search**
- Press `<leader>ff`, type "vim-grammar", press Enter
- Record time elapsed

**Method 3: Using Terminal**
- Open a terminal, use `find` command or `ls` to locate file
- Open it: `nvim course/reference/vim-grammar.md`
- Record time elapsed

Which method was fastest? Slowest? Why do you think that is?

---

## Next Session

Tomorrow you'll learn about **Buffers & Windows** — how to manage multiple open files, split your screen, and navigate between panes. The explorer showed you the file tree; tomorrow you'll master the buffer list and window layout.

---

[← Day 10: The Explorer](index.md) | [Day 10 Checkpoint →](checkpoint.md)
