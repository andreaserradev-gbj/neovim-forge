---
day: 18
title: "Day 18 Exercises"
type: "exercises"
---

[← Day 18: Git in the Editor](index.md) | [Course Index](../../COURSE.md)


## Exercise 1: Navigate Hunks

**Objective:** Master hunk navigation with ]h and [h.

Make multiple edits to a file in your project. Create at least 3 separate hunks by editing different sections.

1. Press ]h to jump to the first hunk
2. Press ]h repeatedly to jump through all hunks
3. Press [h to go backward
4. Press ]H to jump to the last hunk
5. Press [H to jump to the first hunk

**Expected outcome:** You're fluent moving between changes.

---

## Exercise 2: Preview and Understand Changes

**Objective:** Use <leader>ghp to see what changed.

On each hunk you navigated in Exercise 1:

1. Press <leader>ghp to preview the diff
2. Read what changed: additions (+ lines), deletions (- lines)
3. Close the preview
4. Move to the next hunk

**Expected outcome:** You understand the diff format and can see changes at a glance.

---

## Exercise 3: Stage Individual Hunks

**Objective:** Use <leader>ghs to stage selectively.

With your modified file:

1. Position cursor on hunk 1
2. Press <leader>ghs to stage it
3. Move to hunk 2
4. Do NOT stage it (leave it unstaged)
5. Run `git status` in a terminal — you should see the file with staged and unstaged changes
6. Press <leader>ghs to stage hunk 2 as well
7. All hunks are now staged

**Expected outcome:** You can stage changes selectively, committing logical groups separately.

---

## Exercise 4: Undo a Hunk

**Objective:** Use <leader>ghu to discard changes.

Make an edit you regret. Position cursor on that hunk. Press <leader>ghu to undo it. Verify the change is reverted.

This is faster than editing the file manually or running git checkout.

**Expected outcome:** Undo at the hunk level is your safety net.

---

## Exercise 5: Blame Someone (or Learn History)

**Objective:** Use <leader>gb to see code history.

Open a file and press <leader>gb to enable blame. A sidebar shows who wrote each line.

Pick a line and use git to find the full commit message:

```bash
git show <commit-hash>
```

This shows the full commit message, author, date, and diff for that change.

**Expected outcome:** You understand code history and can trace changes back to their source.

---

## Exercise 6: Git-Based Workflow

**Objective:** Combine git navigation with editing.

Scenario: You have unstaged changes. You want to:
1. Review them with <leader>ghp
2. Stage the ones you like with <leader>ghs
3. Undo the ones you don't like with <leader>ghu
4. Commit the staged changes

Steps:

1. Make multiple edits to a file
2. Use ]h to jump between hunks
3. On the first hunk, press <leader>ghp to review
4. If you like it, press <leader>ghs to stage
5. Move to the next hunk with ]h
6. If you don't like it, press <leader>ghu to undo (or stage it with <leader>ghs)
7. When all desirable hunks are staged, exit Neovim
8. Run `git commit -m "day-18: ..."` to commit staged changes

**Expected outcome:** You've used gitsigns to selectively stage and commit changes — a professional workflow.

---

[← Day 18: Git in the Editor](index.md) | [Day 18 Checkpoint →](checkpoint.md)
