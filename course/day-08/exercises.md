---
day: 8
title: "Day 8 Exercises"
type: "exercises"
---

[← Day 8: The Leader Key](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Which-Key Discovery

**Objective:** Familiarize yourself with the which-key popup and leader groupings.

Open Neovim in the neovim-forge project root:

```bash
nvim .
```

Now follow this sequence:

1. Press Space (leader). The which-key popup appears showing all available leader groups.
2. Study the popup for 10 seconds. Read all the group names.
3. Press `f`. The popup narrows to show all `<leader>f` commands (ff, fg, fr, fn, fR).
4. Press Escape to close.
5. Press Space again, then press `b`. The popup narrows to buffer commands (bb, bn, bp, bd, bo).
6. Press Escape.
7. Press Space, then press `/`. The popup narrows to search commands.
8. Press Escape.

**Challenge:** Without opening the popup again, try to list (on paper) all the leader groups you saw. Then press Space and verify your list.

**Expected outcome:** You've memorized the top-level leader groups. You don't need to memorize every keybinding—which-key will remind you. But knowing the main groups (`f`, `b`, `d`, `e`, `/`, etc.) means you can navigate to features quickly.

---

## Exercise 2: Leader Keybinding Speed Test

**Objective:** Practice using leader keybindings to navigate between multiple files quickly.

Setup: Open the neovim-forge project root.

**Challenge sequence:**

1. Press `<leader>ff` and search for "day-01". Select `course/day-01/index.md`.
2. Without closing the file, press `<leader>ff` again and search for "package.json". Select `app/package.json`.
3. Again: `<leader>ff`, search "day-02", select the index file.
4. Again: `<leader>ff`, search "corne-layout", select the reference file.
5. Now, without using `<leader>ff`, press `<leader>bb` to jump back to the previous file.
6. Press `<leader>bp` twice to go back two more buffers.

**Time yourself.** Can you complete all seven steps in under 2 minutes?

**Expected outcome:** Leader keybindings are fast. You reach for them instinctively instead of fumbling with the mouse or file dialogs.

---

## Exercise 3: Buffer Management

**Objective:** Master the buffer-related leader keybindings.

Open this file in Neovim, then open two other files:

```bash
nvim course/day-08/exercises.md course/day-08/index.md app/src/pages/index.astro
```

Now you have three buffers open. Your buffer list should show all three.

**Sequence:**

1. You're in `index.astro`. Press `<leader>bb` to jump to the "alternate buffer" (the file you were just viewing). You should go to `index.md`.
2. Press `<leader>bb` again. You should jump back to `index.astro`.
3. Press `<leader>bn` (next buffer). You should go to the next buffer in the list (probably `exercises.md`).
4. Press `<leader>bp` (previous buffer). Go back to `index.astro`.
5. Press `<leader>bo` (delete other buffers). This should close all buffers except the current one.
6. Verify using `:ls` command—only one buffer remains.

**Expected outcome:** Buffer navigation is muscle memory. You understand the difference between `bb` (alternate), `bn` (next), `bp` (previous), and `bo` (delete others).

---

## Exercise 4: Explorer Navigation

**Objective:** Use the explorer to navigate the project structure.

1. Open any file: `nvim course/day-08/index.md`
2. Press `<leader>e`. The explorer should open on the left side showing the project tree at the root.
3. Use `j` and `k` to navigate the tree. Move down to the `course/` directory.
4. Press Enter on `course/` to expand it. Use `j` to move down and see the day directories.
5. Move to `day-01/` and press Enter to expand it.
6. Select `index.md` (from day-01) and press Enter. The file opens in a window.
7. Press `<leader>e` again to reopen the explorer.
8. Navigate to a different file, like `app/package.json`. Select it and press Enter.

**Expected outcome:** The explorer is now a familiar tool. You understand how to navigate the tree, expand directories, and open files without leaving vim.

---

## Exercise 5: File Creation via Leader

**Objective:** Use the leader keybinding to create a new file.

1. Press `<leader>fn` (new file).
2. A prompt should appear asking for a filename. Type: `test-file.txt`
3. Neovim opens a new, empty buffer with that name.
4. Type some content: `This is a test file.`
5. Press Escape to exit insert mode.
6. Type `:w` and Enter to save the file.
7. Use `:ls` to verify the file is in your buffer list.
8. Now delete this file: `:!rm test-file.txt` and press Enter.

**Expected outcome:** You've used a leader keybinding to create a file—reinforcing that leader commands are discoverable and powerful. You understand the workflow: create, edit, save, clean up.

---

## Exercise 6: Search via Leader

**Objective:** Use `<leader>/` to search project content.

1. Press `<leader>/` (or `<leader>sg` for grep).
2. A search prompt appears. Type: `vim_skills`
3. The searcher should show all files containing "vim_skills" (these are the frontmatter keys in all day files).
4. Select one of the results. The file opens and the cursor jumps to the matching line.
5. Press Escape and try again: `<leader>/`, search for "Build:", find all the "Build" sections across day files.

**Expected outcome:** Project-wide search is fast. You can find any text without manually opening files.

---

## Exercise 7: Mental Model Check

**Objective:** Verify you understand the leader key philosophy.

Answer these questions without opening Neovim:

1. What does it mean to say "leader is a namespace"? Why is that better than using bare vim commands?
2. How does which-key help you discover keybindings?
3. Name three leader groups (`<leader>X`) that you learned today.
4. If you forgot what `<leader>ff` does, how would you find out (without looking in the vim config)?
5. What's the difference between `<leader>bb` and `<leader>bn`?

Write your answers down. This reflection cements the concepts.

**Expected outcome:** You've internalized why the leader key is so powerful—it organizes custom commands, which-key makes them discoverable, and the mental model is "press space, then explore."

---

## Exercise 8: Keystroke Count Challenge

**Objective:** Minimize keystrokes to complete a task.

**Starting position:** You're in Neovim, any file open.

**Goal:** Open the file `app/src/pages/index.astro` and navigate to the `<title>` tag using only leader keybindings and motions. Count your keystrokes.

**Steps to try:**

Method 1 (using find):
- Press `<leader>ff` (2 keystrokes: Space f)
- Type "index.ast" to filter (9 keystrokes)
- Press Enter (1 keystroke)
- Use `f<` to find the title tag (2 keystrokes)
- **Total: 14 keystrokes**

Method 2 (using grep):
- Press `<leader>/` (Space /)
- Type "<title>" (8 keystrokes)
- Press Enter, select result (1 keystroke)
- The cursor is at the title. Done.
- **Total: 10 keystrokes**

Can you find a method with fewer keystrokes? The point is to think strategically about tool choice. Grep is faster when you're searching for specific text.

**Expected outcome:** You understand when to reach for which tool. `<leader>ff` for files, `<leader>/` for text.

---

## Bonus Challenge: Build a Mental Map

Draw or write out a map of the leader groups:

```
Space (Leader)
├── f (find/file)
│   ├── ff (files)
│   ├── fg (git files)
│   ├── fr (recent)
│   ├── fn (new file)
│   └── fR (rename)
├── b (buffer)
│   ├── bb (alternate)
│   ├── bn (next)
│   ├── bp (previous)
│   ├── bd (delete)
│   └── bo (delete other)
├── e (explorer)
├── / (search)
└── [other groups...]
```

By building this map, you're creating a visual memory aid. Your brain will start to predict what keys do before you press them.

---

## Next Session Preview

Tomorrow you'll learn about **Flash** — a plugin that lets you jump to any visible character on the screen with just two or three keystrokes. It's like find motions on steroids. But for now, press Space and let which-key be your guide.

---

[← Day 8: The Leader Key](index.md) | [Day 8 Checkpoint →](checkpoint.md)
