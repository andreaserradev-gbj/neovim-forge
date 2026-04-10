---
day: 21
title: "Week 3 Review"
phase: 3
summary: "Week 3 synthesis — combine LSP, diagnostics, formatting, git, registers, and macros into a professional workflow"
vim_skills: ["gd", "gr", "gI", "gD", "gy", "K", "<leader>ca", "<leader>cr", "]d", "[d", "]e", "[e", "<leader>xx", "<leader>cf", "]h", "[h", "<leader>ghs", "\"a", "\"+", "@a"]
plugin_focus: null
app_milestone: "Challenge system MVP — timer + exercise runner assembled from prior components"
estimated_time: "60 min"
prerequisites: ["day-20"]
---

[← Day 20: Macros](../day-20/index.md) | [Course Index](../../COURSE.md) | [Day 22: Marks & Jumps →](../day-22/index.md)


## Week 3 Review: Complete LSP-Driven Professional Workflow

### What You've Learned

**Day 15 — LSP Navigation:** You learned to jump to definitions (`gd`), find all references (`gr`), hover for documentation (`K`), and rename symbols globally (`<leader>cr`). Code is now navigable by meaning, not text search.

**Day 16 — Diagnostics:** You navigate errors and warnings (`]e`, `[e`, `]d`, `[d`), view them in Trouble (`<leader>xx`), and understand code problems instantly. Build errors are no longer surprises — they're visible in real time.

**Day 17 — Formatting:** You format code on-demand (`<leader>cf`) and automatically on save (`<leader>uf`). Prettier and ESLint keep your code beautiful and correct without you thinking about style.

**Day 18 — Git:** You navigate changes (`]h`, `[h`), preview them (`<leader>ghp`), stage them selectively (`<leader>ghs`), and see code history (`<leader>gb`). Your commits are atomic (one logical change per commit) and your progress is tracked.

**Day 19 — Registers:** You juggle multiple snippets with named registers (`"a`, `"b`), integrate with system clipboard (`"+y`, `"+p`), and understand that Vim has multiple clipboards, not just one.

**Day 20 — Macros:** You record sequences (`qa...q`), replay them (`@a`, `@@`), and understand when to automate with scripts instead. Repetitive work is no longer tedious.

### The Integration: A Complete Day 21 Workflow

Here's a realistic scenario: You're refactoring a component. You want to:

1. Navigate to a function using LSP (`gd` to jump to definition)
2. See everywhere it's used (`gr` to find references)
3. Rename it safely (`<leader>cr` to rename globally)
4. Check for type errors (`]e` to navigate errors)
5. Review your changes (`]h` to see git hunks)
6. Stage your changes (`<leader>ghs` to stage selectively)
7. Format before committing (`<leader>cf` to format)
8. Commit (`git commit -m "day-21: ..."`)

This entire workflow is code-aware, error-aware, and git-aware. You never leave Neovim. You never use a mouse. You never manually search for something — the editor finds it for you.

### Drills: Real-World Scenarios

#### Scenario 1: Refactor a Component Name

**Task:** You have a component called `OldName` that's used in 5 files. You want to rename it to `NewName`.

**Workflow:**

1. Open the file where `OldName` is defined: `nvim app/src/components/OldName.astro`
2. Position cursor on `OldName` in the export statement
3. Press `gd` to go to the definition (stays on same line, confirms LSP knows it)
4. Press `<leader>cr` to rename. Type `NewName` and press Enter
5. LSP updates the component name and all imports in other files
6. Press `]e` to check for type errors. Should find none.
7. Press `]h` to navigate your changes. See all the files that were modified.
8. Review the first hunk with `<leader>ghp`
9. Stage all hunks with `<leader>ghs` (repeat for each hunk)
10. Format the file with `<leader>cf`
11. Exit Neovim and commit: `git commit -m "day-21: rename OldName to NewName"`

**Time:** 2-3 minutes. Without Vim: 10-15 minutes in an IDE with mouse clicking.

#### Scenario 2: Fix Multiple Type Errors

**Task:** You've made changes that introduce 3 type errors. You want to find and fix them all.

**Workflow:**

1. Open any file in the project: `nvim app/src/lib/types.ts`
2. Open Trouble diagnostics: `<leader>xx` (shows all errors in current buffer)
3. Or open workspace diagnostics: `<leader>xX` (shows all errors across all files)
4. In Trouble, press `j` to select the first error
5. Press Enter to jump to the error in the source file
6. Fix it (add a missing type, change a value type, etc.)
7. The Trouble panel updates in real time
8. Press `]` or `j` to move to the next error in the list
9. Press Enter to jump to it
10. Fix it. Repeat until all errors are gone.
11. Close Trouble with `<leader>xx`
12. Format the file with `<leader>cf`
13. Commit: `git commit -m "day-21: fix type errors"`

**Time:** 5 minutes for 3 errors. With IDE dialogs: 15 minutes.

#### Scenario 3: Bulk Code Transformation

**Task:** You have 10 similar function definitions. Each needs the same documentation comment added above it.

**Workflow:**

1. Open the file: `nvim app/src/lib/functions.ts`
2. Position cursor on the first function
3. Record a macro: `qa` (start recording)
   - `O` (insert line above)
   - `/** TODO: Add description */` (type comment)
   - Escape (exit insert)
   - `j` (move to next function)
   - `q` (stop recording)
4. Position cursor on the second function
5. Replay the macro 9 times: `9@a`
6. All functions now have the comment
7. Format with `<leader>cf`
8. Check for errors with `]e` (should find none)
9. Review changes with `]h`
10. Stage with `<leader>ghs`
11. Commit: `git commit -m "day-21: add documentation comments"`

**Time:** 3 minutes for 10 functions. Manually: 10 minutes.

---

## Build: Challenge System MVP

### What You're Building

You'll assemble the challenge system from components you've built over the past week. The MVP includes:

1. **Timer component** — Counts down or displays elapsed time
2. **Exercise runner** — Takes starting code, expected result, shows diff
3. **Integration** — Reads challenge definitions from your seeded data
4. **Validation** — Checks that user's edits match expected result

By the end, users can open the app, see a challenge, and practice vim skills with real-time feedback.

### Step-by-Step

#### Step 1: Create Timer Component

Create `app/src/components/ChallengeTimer.astro`:

```astro
---
interface Props {
  startTime: Date;
  duration?: number; // in seconds
}

const { startTime, duration = 300 } = Astro.props;
const elapsed = Math.floor((Date.now() - startTime.getTime()) / 1000);
const remaining = Math.max(0, duration - elapsed);
const minutes = Math.floor(remaining / 60);
const seconds = remaining % 60;
---

<div class="timer">
  <span class="time">
    {minutes}:{String(seconds).padStart(2, "0")}
  </span>
  {remaining === 0 && <span class="expired">Time's up!</span>}
</div>

<style>
  .timer {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    background-color: #fff9e6;
    border: 1px solid #ffd700;
    border-radius: 4px;
    font-weight: bold;
  }

  .time {
    font-size: 1.5rem;
    font-family: monospace;
  }

  .expired {
    color: #cc0000;
  }
</style>
```

#### Step 2: Create Challenge Runner Component

Create `app/src/components/ChallengeRunner.astro`:

```astro
---
interface Props {
  challenge: {
    title: string;
    description: string;
    startingCode: string;
    expectedCode: string;
  };
}

const { challenge } = Astro.props;
---

<div class="challenge-runner">
  <h2>{challenge.title}</h2>
  <p>{challenge.description}</p>

  <div class="code-view">
    <div class="starting">
      <h3>Starting Code</h3>
      <pre><code>{challenge.startingCode}</code></pre>
    </div>

    <div class="expected">
      <h3>Expected Result</h3>
      <pre><code>{challenge.expectedCode}</code></pre>
    </div>
  </div>

  <button class="submit">Check Solution</button>
</div>

<style>
  .challenge-runner {
    border: 1px solid #0066cc;
    border-radius: 8px;
    padding: 1.5rem;
    background-color: #f0f7ff;
  }

  .challenge-runner h2 {
    margin-top: 0;
    color: #0066cc;
  }

  .code-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1rem 0;
  }

  .code-view h3 {
    margin: 0 0 0.5rem 0;
    font-size: 0.875rem;
  }

  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 0;
  }

  .submit {
    padding: 0.75rem 1.5rem;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .submit:hover {
    background-color: #0052a3;
  }
</style>
```

#### Step 3: Create Challenge Page

Create `app/src/pages/challenge.astro`:

```astro
---
import ChallengeRunner from "../components/ChallengeRunner.astro";
import ChallengeTimer from "../components/ChallengeTimer.astro";

const sampleChallenge = {
  title: "Rename a Symbol",
  description: "Rename the variable 'count' to 'total' throughout the file using LSP rename",
  startingCode: `const count = 0;
let count = count + 1;
console.log(count);`,
  expectedCode: `const total = 0;
let total = total + 1;
console.log(total);`,
};

const startTime = new Date();
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Challenge</title>
</head>
<body>
  <h1>Neovim Forge Challenges</h1>
  
  <ChallengeTimer startTime={startTime} duration={300} />
  
  <ChallengeRunner challenge={sampleChallenge} />
</body>
</html>
```

#### Step 4: Integrate with Your Data

Update the ChallengeRunner to accept data from your seeded challenges (from Day 20's script):

```astro
---
interface Challenge {
  title: string;
  description: string;
  startingCode: string;
  expectedCode: string;
}

interface Props {
  challenge: Challenge;
  onSubmit?: (code: string) => boolean;
}

const { challenge, onSubmit } = Astro.props;
---

<!-- Same as before, but now receives data from seeded challenges -->
```

#### Step 5: Test the MVP

```bash
npm run dev
```

Visit `localhost:4321/challenge`. You should see:

- A challenge title and description
- Timer counting down
- Starting code and expected code side-by-side
- A "Check Solution" button

This is the MVP. Users can see the challenge, understand what they need to do, and have a framework to work in.

#### Step 6: Commit

```bash
git add app/src/components/ChallengeTimer.astro app/src/components/ChallengeRunner.astro app/src/pages/challenge.astro
git commit -m "day-21: add challenge system mvp and complete week 3"
```

### Stretch Goals

If you finish early:

1. Add a diff viewer that shows the difference between user's code and expected code
2. Implement keystroke counter (count how many keys the user typed to reach the solution)
3. Add leaderboard (compare your keystrokes to par for the challenge)
4. Create multiple challenges that chain together (complete one, unlock the next)

---

## Checkpoint

**Commit message:** `day-21: add challenge system mvp and complete week 3`

**Your commit should include:**

- [ ] `app/src/components/ChallengeTimer.astro` — Timer component
- [ ] `app/src/components/ChallengeRunner.astro` — Challenge display and interaction
- [ ] `app/src/pages/challenge.astro` — Challenge page that uses both components

**Validation**

Before committing, verify:

1. **Complete a Day 21 refactoring drill (in your code):**
   - Use `gd` to jump to a definition
   - Use `<leader>cr` to rename a symbol
   - Check for errors with `]e`
   - Review changes with `]h`
   - Stage with `<leader>ghs`
   - Format with `<leader>cf`

2. **Components render:**
   ```bash
   npm run dev
   ```
   - Visit `localhost:4321/challenge`
   - ChallengeTimer displays
   - ChallengeRunner displays
   - Both are styled correctly

3. **Build succeeds:**
   ```bash
   npm run build
   ```

**Self-Check**

- [ ] I understand and can execute all Week 3 skills (LSP, diagnostics, formatting, git, registers, macros)
- [ ] I can combine them into a coherent workflow
- [ ] I created a Timer component that displays elapsed/remaining time
- [ ] I created a ChallengeRunner component that displays challenges
- [ ] I created a challenge page that integrates both
- [ ] The app builds and renders without errors
- [ ] I performed a real refactoring using this week's skills
- [ ] All components are styled and functional
- [ ] The commit message starts with `day-21:`

---

## Today's Score

- [ ] I performed all Week 3 vim skills in a single refactoring workflow
- [ ] I created a Timer component
- [ ] I created a ChallengeRunner component
- [ ] I created a challenge page
- [ ] All components integrate cleanly
- [ ] The app builds and renders
- [ ] I completed a real refactoring using LSP, diagnostics, formatting, git
- [ ] I understand when to use macros vs. scripts

---

## Week 3 Reflection

Over the past week, you learned to:

- **Navigate by meaning** (LSP): Jump to definitions and references, understand code deeply
- **Catch errors early** (Diagnostics): See problems in real time, fix them immediately
- **Keep code beautiful** (Formatting): Style is automatic, you focus on logic
- **Track your progress** (Git): Every hunk, every change, every commit is intentional
- **Copy smartly** (Registers): Multiple clipboards, OS integration, precision control
- **Automate repetition** (Macros): Record once, replay infinitely

These skills transform the editor from a text editor into a code IDE. You now code with the speed and confidence of someone using a professional IDE — but with all the efficiency and power of Vim.

**What's next (Week 4):** Polish, deployment, advanced features, and graduation.

**Reflection:** How has your editing speed improved? How many times did you open your browser to search when you could have used LSP? How often did you juggle multiple edits with registers instead of copy-paste?

The real learning isn't the keystrokes — it's the mindset shift. You now think of code as navigable, semantically meaningful, and subject to precision automation. That mindset is the superpower.

---

**Day 21 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 22: Marks & Jumps →](../day-22/index.md)
