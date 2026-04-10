---
day: 17
title: "Day 17 Exercises"
type: "exercises"
---

[← Day 17: Format & Flow](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Format-on-Demand

**Objective:** Use `<leader>cf` to instantly beautify code.

Create a messy file in your project:

```bash
cd app
nvim src/test-messy.ts
```

Write intentionally unformatted code:

```typescript
const x=1+2;const y=3*4
function bad(a,b){return a+b}
const obj={x:1,y:2,z:3}
const array=[1,2,3,4,5]
```

Save. Now press `<leader>cf`.

The file is reformatted to match your `.prettierrc`:

```typescript
const x = 1 + 2;
const y = 3 * 4;
function bad(a, b) {
  return a + b;
}
const obj = { x: 1, y: 2, z: 3 };
const array = [1, 2, 3, 4, 5];
```

Verify the spacing, indentation, and semicolons match your Prettier config. Delete the file when done.

**Expected outcome:** `<leader>cf` is your instant formatter. You write code without worrying about style.

---

## Exercise 2: Toggle Format-on-Save

**Objective:** Master the on/off toggle for auto-formatting.

In any file, press `<leader>uf`.

A message appears: "Auto-format enabled" (or "disabled" if it was on).

1. Enable format-on-save: `<leader>uf` → enabled
2. Make a small edit in the file (add spaces, change indentation)
3. Save with `:w`
4. Does the file auto-format? (Check for extra spaces being removed, indentation being fixed)
5. Disable: `<leader>uf` → disabled
6. Make another edit with deliberate bad formatting
7. Save with `:w`
8. Does the file stay formatted as you wrote it (no auto-fix)?

The difference shows you understand the toggle.

**Expected outcome:** Format-on-save is a deliberate choice. You can turn it on for entire sessions or off when you need creative freedom.

---

## Exercise 3: Auto-Closing Tags

**Objective:** Practice auto-closing tag insertion and renaming.

Open an Astro component:

```bash
nvim app/src/components/Test.astro
```

In insert mode, type various opening tags and watch the closing tags appear:

1. Type `<div>` and press `>`. Does `</div>` appear?
2. Type `<section>` and press `>`. Does `</section>` appear?
3. Type `<Component>` and press `>`. Does `</Component>` appear?

Now test tag renaming:

1. Position cursor on the opening tag name (the `d` in `<div>`).
2. Press `cw` to change the word. Type `main`. Press Escape.
3. Does the closing tag update from `</div>` to `</main>`?

**Expected outcome:** Auto-closing tags save you typing and keep your markup in sync.

---

## Exercise 4: Verify Prettier Configuration

**Objective:** Ensure your `.prettierrc` is being used.

Create a file that violates your Prettier rules:

```bash
nvim src/test-config.ts
```

Write code with single quotes (if your config requires double quotes):

```typescript
const greeting = 'hello';
const name = 'world';
```

Save. Press `<leader>cf`.

Prettier rewrites it according to your config:

```typescript
const greeting = "hello";
const name = "world";
```

If it doesn't change (single quotes remain), then either:
- Prettier isn't installed or configured for TypeScript
- Your `.prettierrc` allows single quotes

Check your `.prettierrc` file and verify it has `"singleQuote": false`.

Delete the test file when done.

**Expected outcome:** You've verified that your `.prettierrc` config is actively being used.

---

## Exercise 5: ESLint Warnings

**Objective:** See ESLint flagging issues.

Create a file with an ESLint violation:

```bash
nvim src/test-eslint.ts
```

Declare an unused variable:

```typescript
const unused = 42;
const used = 10;
console.log(used);
```

Save. Neovim's LSP shows a diagnostic (warning or info, depending on your ESLint setup): "Variable 'unused' is declared but never used".

Use `]w` to jump to the next warning. You land on the `unused` line.

This is ESLint in action. It's not formatting (that's Prettier's job) — it's warning you about issues.

Delete the test file when done.

**Expected outcome:** You've experienced ESLint's diagnostic feedback. It's the "quality checker" while Prettier is the "beautifier".

---

## Exercise 6: Multi-File Formatting

**Objective:** Format multiple files in your project.

Open several files in your project (e.g., a TypeScript component, an Astro page, a utility). In each:

1. Press `<leader>cf` to format.
2. Verify it respects your Prettier config (spacing, quotes, indentation).
3. Enable format-on-save: `<leader>uf`.
4. Make a change in one file, save, and see it auto-format.
5. Switch to another file, make a change, save, and see it auto-format.

Disable when done: `<leader>uf`.

**Expected outcome:** Formatting works consistently across different file types and locations in your project.

---

[← Day 17: Format & Flow](index.md) | [Day 17 Checkpoint →](checkpoint.md)
