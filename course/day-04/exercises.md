---
day: 4
title: "Day 4 Exercises"
type: "exercises"
---

[← Day 4: Text Objects](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Inside vs. Around — Muscle Memory

**Objective:** Internalize the difference between `i` (inside) and `a` (around).

Open `app/src/pages/days.astro` in Neovim.

**Task 1: Delete inside word**

1. Find any word in the page (e.g., "Days", "Browse", etc.).
2. Position your cursor anywhere inside that word.
3. Press `diw` to delete inside word.
4. The word vanishes; whitespace remains.
5. Undo and try on 3 different words.

**Task 2: Delete around word**

1. Find a word again.
2. Position your cursor inside the word.
3. Press `daw` to delete around word.
4. The word AND trailing space vanish.
5. Undo and compare: `diw` left spaces, `daw` cleaned them up.

**Task 3: Prediction exercise**

Before you delete, predict what will happen:
- "I'm about to `diw` the word 'Days'. Will the spaces around it be affected?" (Answer: No, only the word.)
- "I'm about to `daw` this word. Will the space after it disappear?" (Answer: Yes.)

Make these predictions for 3 words, then verify by executing.

**Expected outcome:** You see the structural difference. `diw` targets the content. `daw` targets the structure including delimiters.

---

## Exercise 2: Quotes and Parentheses — Real-World Editing

**Objective:** Practice text objects for common structures in code.

**Setup:** Create or find code with quoted strings and parentheses. For example, in any HTML:
```html
<a href="/days">View all 30 days</a>
```

**Task 1: Change quoted string**

1. Find a quoted string (like `href="/days"`).
2. Position cursor inside the quotes (on the `/`).
3. Press `ci"` to change inside quotes.
4. You enter insert mode. The old content is deleted.
5. Type new content: `/day-01`
6. Press Escape.

Result: `href="/day-01"`

**Task 2: Delete around quotes**

1. Find another quoted string.
2. Position cursor inside.
3. Press `da"` to delete around quotes.
4. The quotes AND content vanish.
5. Undo.

**Task 3: Parentheses and single quotes**

1. Find content with parentheses or single quotes.
2. If parentheses: position cursor inside, press `di(` to see the structure change.
3. If single quotes: position cursor inside, press `ci'`, type replacement, Escape.

**Expected outcome:** You're editing code structures (attributes, strings) surgically. You don't have to manually position to the quote character—`ci"` does it for you.

---

## Exercise 3: Paragraphs and Larger Structures

**Objective:** Understand text objects for multi-line content.

Open `course/day-04/index.md` (this lesson file).

**Task 1: Delete paragraph**

1. Find a paragraph (multiple lines separated by blank lines).
2. Position cursor anywhere in the paragraph.
3. Press `dap` to delete around paragraph (paragraph + blank line).
4. Entire paragraph vanishes.
5. Undo.

**Task 2: Delete inside paragraph**

1. Find another paragraph.
2. Position cursor inside.
3. Press `dip` to delete inside paragraph.
4. Content is deleted, but blank line structure remains.
5. Undo.

**Task 3: Copy paragraph**

1. Position cursor in a paragraph.
2. Press `yap` to yank around paragraph.
3. Navigate to a new location (use `G` or `/` to search).
4. Press `p` to paste.
5. The paragraph appears at the new location.

**Expected outcome:** Larger structures (paragraphs, blocks) are manageable. You can move entire sections with `yap` + navigate + `p`.

---

## Exercise 4: Text Objects with All Operators

**Objective:** Confirm that text objects work with delete, change, and yank.

**Setup:** Any file with varied content.

**Sequence:**

1. Delete inside word: `diw`
2. Change inside quotes: `ci"`
3. Yank around word: `yaw`
4. Delete paragraph: `dap`
5. Change inside parentheses: `ci(`
6. Yank around braces: `ya}`

Do all of these, pressing Escape after inserts, undoing after operations, to confirm the patterns.

**Expected outcome:** Text objects are operator-agnostic. Once you know `i` and `a`, they work with d, c, y, and any other operator.

---

## Exercise 5: Combining Text Objects with Counts (Rare but Useful)

**Objective:** Understand that counts work with text objects.

**Setup:** Any file with multiple words on one line.

1. Find a line with 6+ words.
2. Position cursor at the start of a word.
3. Press `daw` to delete a word (around).
4. Press `3daw` to delete the next 3 words in sequence.

**Note:** This is less common than `3dw` (which uses motions), but it works and can be useful.

---

## Exercise 6: Real Editing Challenge — Refactor HTML Attributes

**Objective:** Practice text objects on realistic code.

**Scenario:** You have an HTML element with attributes:

```html
<div class="old-class" id="my-element" data-value="test">Content</div>
```

**Tasks:**

1. **Change the class value:** Cursor on "old-class", press `ci"`, type "new-class", Escape. Result: `class="new-class"`

2. **Delete the id attribute:** Cursor anywhere on `id="my-element"`, press `daw` or `da"` to remove just the attribute value, then manually clean up.

3. **Change the data-value:** Cursor inside the quotes of data-value, press `ci"`, type "new-value", Escape.

**Expected outcome:** You're using text objects for real refactoring. Not just exercises—actual editing that you'd do in production code.

---

## Exercise 7: Reflection

**Objective:** Deepen your understanding of text objects.

Answer these questions:

1. **Why are text objects called "objects"?** Think about how you describe code: "this word", "this function", "this string". Objects are things with structure.

2. **When would you use `ciw` (change inside word) vs. `caw` (change around word)?** (Hint: Almost always `caw`, because you want to replace the whole word.)

3. **Can you think of a scenario where `i` (inside) would be preferable to `a` (around)?** (Hint: When you want to preserve the structure—like deleting inside quotes but keeping the quotes as a placeholder.)

4. **What's the relationship between text objects and the operator grammar?** How do they extend what you learned on Day 3?

5. **Look at your code. What structures do you see that could be text objects?** Words, quoted strings, parentheses, code blocks. Which ones appear most often in your work?

---

## Bonus: mini.ai Extended Objects

If you're running LazyVim (which includes mini.ai), you have access to extended text objects. Try these on code:

1. **`if` / `af`** — Inside/around function. Find a function definition, position cursor inside, press `dif` to delete the function body (not the signature).

2. **`ic` / `ac`** — Inside/around class. Similar idea for class structures.

3. **`io` / `ao`** — Inside/around code block (markdown fences, etc.). Find a code block, press `dio` to delete its content.

These require plugin support and will work in LazyVim out of the box. If they don't work, you might be in a buffer type that mini.ai doesn't support (like plain markdown without plugin context).

---

## Bonus Challenge: Building Intuition

**Challenge:** Look at these lines and predict which command you'd use:

1. `const greeting = "Hello, World!";`
   - I want to change "Hello, World!" to just "Hi". Command: `_______`
   - I want to delete the entire string including quotes. Command: `_______`

2. `function myFunction(param1, param2) { ... }`
   - I want to select and yank the parameters (param1, param2). Command: `_______`
   - I want to delete param1 and replace it. Command: `_______`

3. `<div class="container" id="main">Content</div>`
   - I want to change the class value. Command: `_______`
   - I want to delete the entire id attribute. Command: `_______`

**Answers:**
1. `ci"` (change inside quotes), `da"` (delete around quotes)
2. `yi(` or `ya(` (depends if you want parens), `diw` (delete inside word for param)
3. `ci"` (change inside quotes of class value), `daw` to start (might need manual cleanup)

This challenge shows how text objects are the language you think in when editing structured text.

---

[← Day 4: Text Objects](index.md) | [Day 4 Checkpoint →](checkpoint.md)
