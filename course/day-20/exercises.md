---
day: 20
title: "Day 20 Exercises"
type: "exercises"
---

[← Day 20: Macros](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Record and Replay

**Objective:** Master the record/replay cycle.

Create a test file with identical structures that need transformation:

```
function test1() { }
function test2() { }
function test3() { }
```

Record a macro to add a comment above each function:

```
qa        Record to register a
O         Insert line above
// TODO: Add description
Escape    Exit insert mode
j         Move to next function
q         Stop recording
```

Replay the macro:

```
@a        Replay once
@a        Replay again
@@        Quick replay of last macro
```

All three functions now have a comment.

**Expected outcome:** You record edits and replay them.

---

## Exercise 2: Bulk Replay with Count

**Objective:** Use {count}@{register} for many repetitions.

Create a file with 20 identical lines:

```
value
value
value
...
```

Record a macro to transform each line (e.g., add a number):

```
qa
I1.
Escape
j
q
```

Now replay 20 times in one command:

```
20@a
```

All 20 lines are transformed instantly.

**Expected outcome:** You can apply a macro to many items with a count.

---

## Exercise 3: Quick Repeat with @@

**Objective:** Use @@ as a shortcut for repeating the last macro.

After running `@a`, press `@@` to run `@a` again. Press `@@` multiple times in sequence — it keeps running the last macro.

This is faster than typing `@a` repeatedly.

**Expected outcome:** @@ is your quick-repeat button.

---

## Exercise 4: Recursive Macro (Advanced)

**Objective:** Record a macro that calls itself.

Create a file with numbers 1-10. Record a macro:

```
qa
A
 ×
Escape
j
@a        Recursive call
q
```

Position on line 1 and press `@a`. It will:
1. Add " ×" to line 1
2. Move to line 2
3. Call itself (@a)
4. Which adds " ×" to line 2, moves to line 3, calls itself
5. ... continues until reaching end of file

**Expected outcome:** Recursive macros handle repetition automatically.

---

## Exercise 5: Real-World Macro

**Objective:** Use a macro for an actual code transformation.

Scenario: You have a list of old variable names that need to be transformed:

```
var_name_1
var_name_2
var_name_3
```

Need to become camelCase:

```
varName1
varName2
varName3
```

Record a macro using substitution or text objects to perform the transformation. This is complex, but it demonstrates the power of macros for real refactoring.

**Expected outcome:** You've done a realistic refactoring with macros.

---

## Exercise 6: Script-Based Bulk Processing

**Objective:** Compare macros to scripts.

Think about the seed script you created today. It does what a macro would do if you manually:
1. Opened each MDX file
2. Copied the frontmatter
3. Pasted it into a JSON structure

But a script does this automatically for 30 files instantly. When would you use a macro instead of a script? (Answer: when the transformation is interactive, visual, or when you don't need automation.)

**Expected outcome:** You understand when macros are the right tool vs. scripts.

---

[← Day 20: Macros](index.md) | [Day 20 Checkpoint →](checkpoint.md)
