---
day: 13
title: "Day 13 Exercises"
type: "exercises"
---

[← Day 13: Surround & Transform](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Add Surround

Open a text file. Place cursor on words and add surround:

1. `saiw"` — add quotes
2. `saiw(` — add parens
3. `saiw[` — add brackets
4. `saw'` — add single quotes around a word (longer motion)

Repeat 10 times with different motions and targets.

---

## Exercise 2: Delete Surround

Find text with surrounding pairs and delete them:

1. `"hello"` → press `sd"` → `hello`
2. `(content)` → press `sd(` → `content`
3. `[item]` → press `sd[` → `item`

Repeat 5 times.

---

## Exercise 3: Replace Surround

1. `"hello"` → press `sr'"` → `'hello'`
2. `(hello)` → press `sr([` → `[hello]`
3. `'code'` → press `sr'"` → `"code"`

Practice all combinations.

---

## Exercise 4: Complex Operations

1. Find a function call: `myFunc("arg")`
2. Change the quotes: `myFunc('arg')` using `sr'"` inside the quotes
3. Change the parens: `myFunc['arg']` using `sr(]`

---

## Exercise 5: Surround with Targets

Try different targets:

1. `sa2w)` — surround 2 words with parens
2. `sa3w}` — surround 3 words with braces
3. `saiw<` — surround inner word with angle brackets

---

## Exercise 6: HTML Tag Surround

If you find HTML tags, try:

1. `sat` — surround with tag
2. Specify the tag name when prompted

This is advanced but powerful for JSX/Astro files.

---

## Exercise 7: Find Surround

Press `sf"` to find the next surrounding pair of quotes. Navigate with `;` and `,` to move between finds.

---

## Exercise 8: Speed Challenge

Complete these transformations as fast as possible:

1. `hello` → `"hello"` (add quotes)
2. `"world"` → `'world'` (replace quotes)
3. `(code)` → `[code]` (replace brackets)
4. `[item]` → `item` (delete brackets)

Time yourself. Under 1 minute is expert-level.

---

## Bonus: Surround + Other Skills

Combine surround with Flash or picker:

1. Use Flash (`s`) to jump to a specific word
2. Once positioned, use `saiw"` to add surround
3. All in one flow: jump + edit

Or:

1. Use picker (`<leader>/`) to find text
2. Use `sd"` to delete surrounding quotes
3. All keyboard-driven

---

[← Day 13: Surround & Transform](index.md) | [Day 13 Checkpoint →](checkpoint.md)
