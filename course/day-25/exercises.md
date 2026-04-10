---
day: 25
title: "Day 25 Exercises"
type: "exercises"
---

[← Day 25: Project-Wide Replace](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: grug-far Basics

Open `course/day-25/index.md`.

**Objective:** Get comfortable with the grug-far interface.

1. Open grug-far: `<leader>sr`
2. Type search: `find and replace` (literal)
3. Type replacement: `search and modify`
4. Review the preview
5. Confirm the change

Repeat with different patterns.

---

## Exercise 2: Regex Patterns

**Objective:** Use regex in grug-far.

1. Open grug-far
2. Search: `<.*>` (regex to match HTML tags)
3. Check matches
4. Try different patterns: `\d+`, `[a-z]+`, etc.

---

## Exercise 3: Component Rename in App

**Objective:** Rename another component using grug-far.

1. Create a new simple component: `app/src/components/SimpleButton.astro`
2. Use it somewhere in your app
3. Open grug-far and rename it to `PrimaryButton`
4. Verify all imports update

---

## Exercise 4: File Filtering

**Objective:** Practice restricting search to file types.

1. Search for a pattern like `interface` or `export`
2. Filter to only `.ts` files
3. Then filter to only `.astro` files
4. Observe how results change

---

## Exercise 5: Reflection

1. How is grug-far safer than `:s///g`?
2. When would you use regex vs literal patterns?
3. Did file filtering help you be more precise?
4. What large refactoring would you do next?

---

[← Day 25: Project-Wide Replace](index.md) | [Day 25 Checkpoint →](checkpoint.md)
