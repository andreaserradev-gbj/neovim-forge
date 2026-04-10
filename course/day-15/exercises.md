---
day: 15
title: "Day 15 Exercises"
type: "exercises"
---

[← Day 15: LSP Superpowers](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Jump and Verify

**Objective:** Use LSP navigation to understand a codebase without reading line by line.

Open `app/src/lib/types.ts` that you created today. Pick any interface (Day, Exercise, or Challenge).

1. Position your cursor on the interface name. Press `gd`. Where does it jump? (It should jump to the interface declaration itself, since you're on the declaration.)
2. Position your cursor on the first field (e.g., `day: number;`). What is its type? Press `K` on the type name (`number`). LSP shows you it's a built-in type.
3. Now open `app/src/lib/sample-data.ts`. Position your cursor on `Day` in the import. Press `gd`. It should jump to the types file showing the interface.
4. Position your cursor on `sampleDay`. Press `gr`. How many references exist? (You should see at least the definition in sample-data.ts.)

**Expected outcome:** You're fluent with LSP navigation. You can jump between definitions and see references instantly.

---

## Exercise 2: Type Exploration

**Objective:** Understand types deeply using hover documentation.

In `app/src/lib/sample-data.ts`, position your cursor on different parts and press `K`:

1. Cursor on `Day` (in the type annotation `sampleDay: Day`) — what does K show?
2. Cursor on `string` (in any type) — what does K show?
3. Cursor on `1` (in `day: 1`) — what does K show?
4. Cursor on `null` (in `plugin_focus: null`) — what does K show?

These hovers show you the underlying types and definitions. Build confidence that K is your tool for understanding anything on screen.

**Expected outcome:** K becomes reflexive. You no longer wonder "what is this?" — you just press K.

---

## Exercise 3: Rename Practice

**Objective:** Master `<leader>cr` to rename symbols safely.

In `app/src/lib/types.ts`:

1. Position cursor on `interface Day` (the word `Day` on the interface declaration line).
2. Press `<leader>cr`.
3. Type a test name like `LessonDay`.
4. Press Enter. Neovim renames `Day` everywhere. Check `sample-data.ts` — does the import update? Does `sampleDay: Day` become `sampleDay: LessonDay`?
5. Undo the rename with `u`. Verify it goes back to `Day`.

Repeat with the `Challenge` interface — rename it to `ChallengeDef` and verify all usages update, then undo.

**Expected outcome:** You trust `<leader>cr`. You know it's safe and comprehensive. No more manual find-and-replace for code symbols.

---

## Exercise 4: Code Actions

**Objective:** Try LSP code suggestions.

In `app/src/lib/sample-data.ts`, create an intentional error to see code actions:

1. On the `sampleExercise` object, change one field to have the wrong type. For example, change `skills: ["h", "j"]` to `skills: "h"` (a string instead of an array).
2. TypeScript will show an error. Position your cursor on the error line.
3. Press `<leader>ca`. A picker appears showing available code actions.
4. Explore the suggestions (there might be a "fix" option or "convert to array" suggestion).
5. You don't have to apply it — just see what's offered.
6. Undo your change with `u` to restore the correct type.

**Expected outcome:** You've seen LSP code actions in action. You know it's available when you get type errors.

---

## Exercise 5: Full Workflow Drill

**Objective:** Combine all LSP skills in a realistic refactoring.

Scenario: You realize `plugin_focus` should be required (not null), and you want to rename the `Exercise` interface to `LessonExercise` to avoid confusion with the `Exercise` component type.

Steps:

1. Open `app/src/lib/types.ts`.
2. Hover over `plugin_focus: string | null;` in the Day interface. Press `K` to see the type.
3. Change `string | null` to just `string`. This makes the field required.
4. Position cursor on `interface Exercise`. Press `<leader>cr` to rename it to `LessonExercise`.
5. Verify that `app/src/lib/sample-data.ts` updates: the type annotation `Exercise` becomes `LessonExercise`.
6. Run `npm run typecheck` (from the app directory). Verify no errors.
7. Undo both changes with `uu` (press u twice) to restore the original state.

**Expected outcome:** You've performed a multi-file refactoring using LSP. It was instant and safe.

---

## Exercise 6: Challenge Reference Exploration

**Objective:** Navigate the Challenge interface to understand its design.

In `app/src/lib/types.ts`, position cursor on `type: "editing" | "navigation" | "refactoring" | "speed";`.

1. Press `K` on `type`. What does it show? (It shows the field declaration and its allowed values.)
2. Position cursor on `editing`. This is a string literal type. Press `K`. Does anything show? (Probably not — it's just a literal value, not a named type.)
3. Position cursor on the word `Challenge` in `interface Challenge`. Press `gr` to see all references to the Challenge interface. You should see the import in sample-data.ts and the sampleChallenge definition.

**Expected outcome:** You navigate the type system confidently. You understand that LSP knows about type literals, unions, and interfaces.

---

[← Day 15: LSP Superpowers](index.md) | [Day 15 Checkpoint →](checkpoint.md)
