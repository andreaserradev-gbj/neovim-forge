---
day: 24
title: "Day 24 Exercises"
type: "exercises"
---

[← Day 24: Advanced Text Objects](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Text Object Exploration

Open `app/src/components/LargeCard.astro` (from the Build section).

**Objective:** Understand different text objects on real code.

1. Find a function call: `/onclick` or similar
2. Position inside the parentheses
3. Select inside parens with `viu` — see what gets selected
4. Expand with `vau` to include the function name

Repeat with:
- A code block `{ ... }` using `vio` and `vao`
- Any object literal or property assignment

**Challenge:** Use 5 different text objects and visualize each selection.

---

## Exercise 2: Deletion with Text Objects

Open the same file.

**Objective:** Delete using text objects instead of manual selection.

1. Find a simple function or block you don't need
2. Position inside it
3. Use `dif` to delete the contents (keep the signature)
4. Undo with `u`
5. Use `daf` to delete the entire thing
6. Undo
7. Use `diu` to delete the arguments of a function call
8. Undo

Repeat 3 times with different code sections.

**Expected outcome:** Deletion with text objects is precise and fast.

---

## Exercise 3: Component Extraction

Open `app/src/components/LargeCard.astro`.

**Objective:** Extract another component like you did in Build.

You've extracted CardHeader and CardFooter. Now extract CardBody:

1. Find the card-body div
2. Use `vao` to select it completely
3. `y` to yank
4. Create new file: `:e app/src/components/CardBody.astro`
5. Paste and structure it as a proper component
6. Go back to LargeCard: `:e app/src/components/LargeCard.astro`
7. Delete the card-body div using `dao` or `dif`
8. Import and use the new CardBody component

**Challenge:** Complete extraction and verify TypeScript compiles.

---

## Exercise 4: Text Object Navigation

Open `app/src/components/LargeCard.astro`.

**Objective:** Use `g[` and `g]` to navigate between objects.

1. Position your cursor inside a code block or function
2. Press `g[` to jump to the start of that object
3. Press `g]` to jump to the end
4. Move to a different object
5. Repeat `g[` and `g]`

**Challenge:** Jump between 5 different text objects using `g[` and `g]`.

---

## Exercise 5: Combining with Operators

**Objective:** Chain text objects with different operators.

1. `yaf` — yank an entire function
2. `p` — paste it somewhere
3. `=af` — format the function
4. `c2io` — change inside two nested objects
5. `dau` — delete around a function call

Experiment with different combinations.

---

## Exercise 6: Real-World Refactoring

Take a large file from your app and practice extracting components using text objects. Each time:
- Identify a logical unit (header, footer, card item, etc.)
- Use `vao` or `vif` to select it
- Extract to a new file
- Update imports

This is real refactoring. You're improving code structure.

---

## Exercise 7: Reflection

1. Which text object felt most useful? `if/af`, `io/ao`, or `iu/au`?
2. When would you use text objects vs manual selection (`v` + motion)?
3. How has your refactoring workflow changed?
4. What other code patterns would benefit from custom text objects?

---

[← Day 24: Advanced Text Objects](index.md) | [Day 24 Checkpoint →](checkpoint.md)
