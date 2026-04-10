---
day: 18
title: "Git in the Editor"
phase: 3
summary: "Manage changes without leaving Neovim — stage hunks, view blame, navigate history"
vim_skills: ["]h", "[h", "]H", "[H", "<leader>ghp", "<leader>ghs", "<leader>ghu", "<leader>ghr", "<leader>ghd", "<leader>ghb", "<leader>gg", "<leader>gG"]
plugin_focus: "gitsigns.nvim"
app_milestone: "Git-based progress tracker — reads commit history, shows completed days using day-XX: commit patterns"
estimated_time: "45-60 min"
prerequisites: ["day-17"]
---

[← Day 17: Format & Flow](../day-17/index.md) | [Course Index](../../COURSE.md) | [Day 19: Registers Deep Dive →](../day-19/index.md)


## Today's Vim Skills

### What Is Git in the Editor?

Git is version control. Normally you use the terminal: `git add`, `git commit`, `git log`. But Neovim can show you git information inline: which lines changed, who wrote them (blame), commit messages. More powerfully, you can stage changes (hunks) directly in Neovim without touching the terminal.

Gitsigns.nvim shows a small marker (sign) next to changed lines, and provides motions to jump between changes (hunks). A hunk is a contiguous block of changes — when you add 3 lines, that's one hunk. When you change 5 lines in one place and 2 in another, that's two hunks.

### Navigating Hunks: ]h, [h, ]H, [H

These motions jump between git changes in the current buffer:

- `]h` — jump to **next hunk** (next changed block)
- `[h` — jump to **previous hunk** (previous changed block)
- `]H` — jump to **last hunk** (last changed block in file)
- `[H` — jump to **first hunk** (first changed block in file)

**Example:** You've edited a file and changed lines 10–12 (adding some code) and lines 45–47 (modifying a function). You're on line 5.

- Press `]h` → jump to line 10 (first hunk)
- Press `]h` → jump to line 45 (second hunk)
- Press `]h` → nothing (you're at the last hunk; it fails silently)
- Press `[h` → jump back to line 10

### Hunk Preview & Staging: <leader>gh*

The `<leader>gh` group provides hunk operations:

- `<leader>ghp` — **preview hunk** — Show a floating window with the diff of the hunk under the cursor (what changed, what was there before)
- `<leader>ghs` — **stage hunk** — Add this hunk to git staging area (like `git add` for just this hunk)
- `<leader>ghu` — **undo hunk** — Discard this hunk's changes (restore to last committed version)
- `<leader>ghr` — **reset hunk** — Same as undo, different name
- `<leader>ghd` — **show deleted** — Show what was deleted in this hunk

### Blame and History: <leader>gb, <leader>gl, <leader>gf

- `<leader>gb` — **blame** — Show who wrote each line and when. A sidebar appears showing commit hash and author for every line.
- `<leader>gl` — **log** — Show the commit history for the current file
- `<leader>gf` — **file log** — Show the log filtered to changes affecting the current line

These are context-aware: they show history for the current file, not the entire project.

### Lazygit: <leader>gg, <leader>gG

For full git workflow (staging multiple files, rebasing, cherry-picking), Neovim can open Lazygit, a full-featured git TUI:

- `<leader>gg` — **open lazygit in cwd** — Open Lazygit in the current working directory
- `<leader>gG` — **open lazygit at git root** — Open Lazygit at the project's git root (useful if you're in a subdirectory)

Lazygit is a full terminal UI with its own keybindings. You navigate, stage files, write commit messages, all without leaving your terminal. It's powerful but out of scope for today — we're focusing on Gitsigns (hunk-level operations) and basic commit.

### Mental Model: Hunks as Atomic Changes

When you work, you make multiple kinds of changes: bug fixes, refactoring, new features. Ideally, each commit is one logical change (one feature, one bug fix). But you might edit the same file for multiple reasons.

Gitsigns lets you stage changes **selectively**: "I fixed two bugs in this file, but I want them in separate commits." You stage the first bug's hunk with `<leader>ghs`, commit, then stage the second bug's hunk, commit again. Same file, two commits, each with a clear purpose.

---

## Drills

### Drill 1: Create Hunks (5 min)

Open a file in your project (any TypeScript or Astro file):

```bash
nvim app/src/lib/types.ts
```

Make several distinct edits:

1. Go to line 5. Add a new line with `export const testValue = 42;`
2. Go to line 15. Delete an existing line or change it.
3. Go to line 25. Add a comment: `// Day 18 test`

Save the file. Gitsigns shows colored signs (usually `+` for additions, `~` for changes) next to modified lines.

Now navigate:

- Press `]h` to jump to the next hunk. You land on line 5 (first addition).
- Press `]h` to jump to the next hunk. You land on line 15 or 25 (depending on your edits).
- Press `[h` to jump backward.

**Expected outcome:** You're comfortable jumping between hunks.

### Drill 2: Preview a Hunk (5 min)

On any hunk, press `<leader>ghp`. A floating window appears showing the diff:

```
+export const testValue = 42;
```

(Plus sign shows additions. Minus would show deletions.)

This is your instant view of "what changed here?" without running `git diff`.

Close the preview by pressing Escape or clicking outside the window.

**Expected outcome:** `<leader>ghp` is your "show me what changed" command.

### Drill 3: Stage a Hunk (5 min)

Position cursor on one hunk. Press `<leader>ghs` to stage it.

The sign changes (usually disappears, indicating the change is staged). Run:

```bash
git status
```

in a terminal. You'll see the file appears as modified, with some changes staged and others unstaged (depending on whether you staged all hunks or just one).

This is the power: you can commit part of a file without committing all of it.

Unstage the hunk (or reset the file) so it's back to untracked for the next drill:

```bash
git reset
```

### Drill 4: Undo a Hunk (5 min)

Make a change to the file (add a line, change something). You see the hunk. Press `<leader>ghu` to undo it.

The change is discarded. The line reappears as it was in the last commit. This is like `git checkout <file>` but for just one hunk.

**Expected outcome:** You can discard accidental changes without resetting the whole file.

### Drill 5: Show Blame (5 min)

Press `<leader>gb` to show blame. A sidebar appears showing author and commit hash for each line.

This answers "who wrote this line and when?" — useful when you're trying to understand code or when you want to ask a colleague "what were you thinking here?"

Press `<leader>gb` again to toggle it off.

**Expected outcome:** Blame is available and shows you code history inline.

---

## Build: Git-Based Progress Tracker

### What You're Building

Today you'll create a component that reads your git commit history and shows which days you've completed. When you commit with `day-15: add typescript types`, the progress tracker recognizes the `day-15:` pattern and marks Day 15 as complete.

By the end, visitors to your app can see your progress: "You've completed Days 1-18. Keep going!"

### Step-by-Step

#### Step 1: Create a progress utility function

Create `app/src/lib/progress.ts`:

```bash
cd app
nvim src/lib/progress.ts
```

```typescript
import { execSync } from "child_process";

export interface CompletedDay {
  day: number;
  completedAt: Date;
  message: string;
}

export function getCompletedDays(): CompletedDay[] {
  try {
    // Get all commits with their messages
    const output = execSync(
      'git log --oneline --all 2>/dev/null || echo ""',
      { encoding: "utf-8" }
    );

    const commits = output.trim().split("\n").filter(Boolean);
    const completedDays = new Map<number, CompletedDay>();

    for (const commit of commits) {
      // Match pattern: day-XX: message
      const match = commit.match(/day-(\d+):/i);
      if (match) {
        const day = parseInt(match[1], 10);
        if (!completedDays.has(day)) {
          completedDays.set(day, {
            day,
            completedAt: new Date(),
            message: commit,
          });
        }
      }
    }

    // Return sorted by day
    return Array.from(completedDays.values()).sort((a, b) => a.day - b.day);
  } catch (error) {
    // Git might not be available at build time
    return [];
  }
}

export function getHighestCompletedDay(): number {
  const days = getCompletedDays();
  return days.length > 0 ? Math.max(...days.map((d) => d.day)) : 0;
}
```

This function:
1. Reads git history with `git log`
2. Searches for commits matching `day-XX:` pattern
3. Returns an array of completed days

#### Step 2: Create a ProgressTracker component

Create `app/src/components/ProgressTracker.astro`:

```bash
nvim app/src/components/ProgressTracker.astro
```

```astro
---
import { getCompletedDays, getHighestCompletedDay } from "../lib/progress";

const completedDays = getCompletedDays();
const highest = getHighestCompletedDay();
const totalDays = 30;
const percentage = Math.round((highest / totalDays) * 100);
---

<div class="progress-tracker">
  <div class="header">
    <h2>Your Progress</h2>
    <span class="percentage">{percentage}%</span>
  </div>

  <div class="bar">
    <div class="fill" style={`width: ${percentage}%`}></div>
  </div>

  <div class="stats">
    <p>Completed: Day <strong>{highest}</strong> of <strong>{totalDays}</strong></p>
    {completedDays.length > 0 && (
      <details>
        <summary>View completed days</summary>
        <ul>
          {completedDays.map((day) => (
            <li>
              Day {day.day}: <code>{day.message}</code>
            </li>
          ))}
        </ul>
      </details>
    )}
  </div>
</div>

<style>
  .progress-tracker {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    background-color: #f9f9f9;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .header h2 {
    margin: 0;
  }

  .percentage {
    font-size: 1.5rem;
    font-weight: bold;
    color: #0066cc;
  }

  .bar {
    width: 100%;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .fill {
    height: 100%;
    background-color: #0066cc;
    transition: width 0.3s ease;
  }

  .stats p {
    margin: 0.5rem 0;
  }

  details {
    margin-top: 1rem;
  }

  summary {
    cursor: pointer;
    color: #666;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0 0;
  }

  li {
    padding: 0.25rem 0;
    font-size: 0.875rem;
  }

  code {
    background-color: #f0f0f0;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
  }
</style>
```

#### Step 3: Use the ProgressTracker in your layout

Edit `app/src/layouts/Base.astro` and add the ProgressTracker component:

```astro
---
import ProgressTracker from '../components/ProgressTracker.astro';
// ... other imports
---

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... -->
</head>
<body>
  <ProgressTracker />
  <!-- ... rest of page -->
</body>
</html>
```

#### Step 4: Test the progress tracker

Build and run:

```bash
npm run build
npm run preview
```

or

```bash
npm run dev
```

Visit your site and check: does the progress bar show? Does it show the right percentage based on your commits?

If you haven't made any `day-XX:` commits yet, create one to test:

```bash
git commit --allow-empty -m "day-18: add git progress tracker"
```

Rebuild. The tracker should show Day 18 as complete.

#### Step 5: Commit

```bash
git add app/src/lib/progress.ts app/src/components/ProgressTracker.astro app/src/layouts/Base.astro
git commit -m "day-18: add git progress tracker"
```

### Stretch Goal

If you finish early:

1. Add a "next milestone" feature: show "Complete Day 20 for the next milestone!"
2. Create a visual calendar showing which days are completed (green) vs. remaining (gray).
3. Add a feature that shows your streak: "15 consecutive days completed!"

---

## Checkpoint

**Commit message:** `day-18: add git progress tracker`

**Your commit should include:**

- [ ] `app/src/lib/progress.ts` — Utility functions to read git history and extract completed days
- [ ] `app/src/components/ProgressTracker.astro` — Component displaying progress bar and list
- [ ] Modified `app/src/layouts/Base.astro` — Imports and uses ProgressTracker

**Validation**

Before committing, verify:
1. You used `]h` and `[h` to navigate hunks in a modified file
2. You used `<leader>ghp` to preview a hunk
3. You used `<leader>ghs` to stage a hunk
4. You used `<leader>ghu` to undo a hunk's changes
5. You used `<leader>gb` to show blame information
6. `npm run build` succeeds
7. The progress tracker displays correctly on your site
8. The tracker correctly identifies days with `day-XX:` commit patterns

**Self-Check**

- [ ] I understand git hunks and how to navigate them
- [ ] I can stage individual hunks without committing entire files
- [ ] I used gitsigns motions to jump between changes
- [ ] I created a progress tracker that reads git history
- [ ] The tracker shows completed days based on commit messages
- [ ] The app builds and renders the progress tracker

---

## Today's Score

- [ ] I navigated hunks with `]h`, `[h`, `]H`, `[H`
- [ ] I previewed hunks with `<leader>ghp`
- [ ] I staged hunks with `<leader>ghs`
- [ ] I undid hunks with `<leader>ghu`
- [ ] I viewed blame information with `<leader>gb`
- [ ] I created a progress tracker that reads git history
- [ ] I committed the tracker component successfully
- [ ] The progress bar shows accurate completion status

**Reflection:** How does seeing your progress visually change your motivation? Does the progress tracker make the 30-day course feel more achievable?

---

**Day 18 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 19: Registers Deep Dive →](../day-19/index.md)
