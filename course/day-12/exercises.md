---
day: 12
title: "Day 12 Exercises"
type: "exercises"
---

[← Day 12: Find Everything](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Live Grep

Press `<leader>/` and search for:
1. "export" — find all exported items
2. "function" — find all function definitions
3. "Day" — find all day references

Browse results with `<C-n>` / `<C-p>` and jump to one with Enter.

**Challenge:** Can you find all occurrences of "vim_skills" in the course frontmatter?

---

## Exercise 2: Fuzzy File Search

Press `<leader>sf` and try these fuzzy searches:

1. Type "d1" — should find Day 1 files
2. Type "corne" — should find Corne-related files
3. Type "astro" — should find .astro files
4. Type "index" — should find all index files

**Challenge:** Find "app/src/components/Breadcrumb.astro" using only "bc" as your search.

---

## Exercise 3: Search Within Buffers

Open multiple files, then press `<leader>sb` to search within open buffers only. This is faster when you have a small set of open files.

---

## Exercise 4: Command Search

Press `<leader>sc` and search for:
1. "set" — setting commands
2. "write" — file writing commands
3. "grep" — search commands

This is your safety net when you forget command names.

---

## Exercise 5: Search Speed Test

Time yourself:

1. Open `<leader>sg` and search for "breadcrumb"
2. Jump to a result with Enter
3. Open `<leader>sf` and find "package.json"
4. Open `<leader>sc` and search for "help"
5. Complete all three in under 2 minutes

---

## Exercise 6: Find and Replace

Press `<leader>sr` to open find and replace:

1. Search for a common word (e.g., "day")
2. See all matches previewed
3. Practice navigating matches
4. Don't actually replace (just preview)

This is a preview of Day 13's surround operations.

---

## Exercise 7: Diagnostics Search

Press `<leader>sd` to see all LSP diagnostics (errors, warnings) in your project. Navigate to different error locations using the picker.

---

## Exercise 8: Options Search

Press `<leader>so` to search vim options. Try:
1. Search for "number" — line numbering options
2. Search for "wrap" — text wrapping options
3. Try changing a setting using the picker

---

## Exercise 9: Keymaps Search

Press `<leader>sm` to search your keybindings. Try:
1. Search for "leader" — all leader-prefixed keys
2. Search for "buffer" — buffer-related keys
3. Find a key you've learned and verify its binding

---

## Exercise 10: Multi-Select Challenge

In the picker, press `<C-s>` to toggle selection on multiple items. Try:

1. Open `<leader>sf`
2. Find several "index" files
3. Select multiple with `<C-s>`
4. Try `<C-a>` to select all

This is useful for batch operations (though actually executing batch actions requires more setup).

---

## Bonus: Search Pattern Practice

Use grep to find:
1. All imports: search for "import"
2. All exports: search for "export"
3. All TODOs: search for "TODO"
4. All functions: search for "function " or "const.*=.*=>"

This teaches you how to think about project-wide patterns.

---

[← Day 12: Find Everything](index.md) | [Day 12 Checkpoint →](checkpoint.md)
