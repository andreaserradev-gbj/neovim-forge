---
day: 22
title: "Marks & Jumps"
phase: 4
summary: "Navigate files with precision using marks and the jump list — the advanced positioning system"
vim_skills: ["m{a-z}", "'{a-z}", "`{a-z}", "m{A-Z}", "''", "'.", "'^", "'[", "']", "<C-o>", "<C-i>", ":jumps", "g;", "g,", ":changes"]
plugin_focus: null
app_milestone: "Challenge system: add code-editing challenges with diff-based validation"
estimated_time: "50-60 min"
prerequisites: ["day-21"]
---

[← Day 21: Week 3 Review](../day-21/index.md) | [Course Index](../../COURSE.md) | [Day 23: Folds & Terminal →](../day-23/index.md)


## Today's Vim Skills

### The Mark System

Marks are bookmarks in your buffer that you can jump to instantly. Think of them as labeled cursor positions you can save and revisit. There are two types: local marks (file-specific) and global marks (persistent across files).

**Local marks** use lowercase letters (a–z):

- `m{a-z}` — set a mark at the current cursor position (e.g., `ma` sets mark "a")
- `'{a-z}` — jump to the mark (lands on the line start)
- `` `{a-z} `` — jump to the mark's exact position (character-precise)

The difference between `'` and `` ` ``: `'` (apostrophe) jumps to the line, `` ` `` (backtick) jumps to the exact character. For example, if you mark a position in the middle of a line with `mx`, then `'x` takes you to the start of that line, while `` `x `` takes you to that exact column.

**Global marks** use uppercase letters (A–Z):

- `m{A-Z}` — set a global mark that persists across files
- `'{A-Z}` — jump to the global mark (even if it's in a different file)

Global marks are useful when you're working across multiple files and want to remember a position in each. For example, `mF` sets a mark "F" for the main function in one file, and later you can jump back to it from anywhere with `'F`.

**Special marks** that Vim maintains automatically:

- `''` — jump to the last line you jumped from (useful for "undo" navigation)
- `'`` — identical to `''` but character-precise
- `'.` — jump to the last position where you made an edit
- `'^` — jump to the last position where you were in insert mode
- `'[` — jump to the start of the last changed or yanked text
- `']` — jump to the end of the last changed or yanked text

These special marks are automatic. You don't set them—Vim tracks them for you.

### The Jump List

Every time you jump in Vim (using `gg`, `G`, `/search`, `gd`, or navigating between files), that position is recorded in the jump list. You can navigate backward through your jump history:

- `<C-o>` — jump back (go to the previous jump position)
- `<C-i>` — jump forward (go to the next jump position)
- `:jumps` — show the entire jump list with line numbers

This is similar to browser history: `<C-o>` is the back button, `<C-i>` is forward. Every jump you make creates a breadcrumb trail you can retrace.

**Mental model:** The jump list records *navigation events*, not just positions. If you jump to line 50 with `50G`, that jump is recorded. If you then navigate around within that line using `hjkl`, those are *not* recorded as jumps—they're just movement. When you jump again (with a motion like `w` followed by `f` find, or a new `G`), that new position is added to the jump list.

### The Change List

The change list is similar to the jump list but records *edits* instead of jumps:

- `g;` — jump to the previous change location
- `g,` — jump to the next change location
- `:changes` — show the entire change list

If you made edits at line 10, line 50, and line 100, then `g;` will jump backward through those positions. This is useful when you've finished editing and want to review what you changed or jump back to the last area you modified.

### Key Bindings Summary

| Command | Effect | Notes |
|---------|--------|-------|
| `m{a-z}` | Set local mark {a-z} | File-specific, persists in session |
| `'{a-z}` | Jump to mark line | Lands on line start |
| `` `{a-z} `` | Jump to mark exact pos | Character-precise |
| `m{A-Z}` | Set global mark {A-Z} | Persists across files |
| `'{A-Z}` | Jump to global mark | File navigation included |
| `''` | Jump to last jump start | Toggle between two jump points |
| `'`` | Jump to last jump start (exact) | Character-precise version |
| `'.` | Jump to last edit position | Where you made your last change |
| `'^` | Jump to last insert position | Last place you were in insert mode |
| `'[` | Start of last change | First char of changed region |
| `']` | End of last change | Last char of changed region |
| `<C-o>` | Jump back in history | One step earlier in jump list |
| `<C-i>` | Jump forward in history | One step forward in jump list |
| `:jumps` | List all jumps | Shows jump history with line numbers |
| `g;` | Go to prev change | Earlier position in change list |
| `g,` | Go to next change | Later position in change list |
| `:changes` | List all changes | Shows change history |

### Mental Model: Navigation Layering

You now have *three* navigation systems:

1. **Motions** (hjkl, w/b, gg/G, f/F, etc.) — move within the current context
2. **Marks & Jumps** — remember positions and navigate between them
3. **Search & Go-to-Definition** (/, gd, etc.) — find by pattern or symbol

When you're deep in refactoring, you might:
1. Set a mark at the start of the function you're editing: `ma`
2. Jump to the LSP definition of a helper: `gd`
3. Edit the helper
4. Jump back using `<C-o>` or `'a` to return to where you were
5. Use `g;` to review all the places you edited

Marks let you be intentional about your navigation. Instead of "I need to jump back," you're saying "I'm going to remember this spot so I can return to it."

---

## Drills

### Drill 1: Setting and Returning to Marks (5 min)

Open `course/day-22/index.md` (this very file) in Neovim.

**Task sequence:**

1. Press `gg` to go to the top of the file
2. Use `/Today's Vim Skills` to find the first main heading
3. While your cursor is on that heading, press `ma` to set mark "a"
4. Now press `G` to jump to the bottom of the file
5. Press `'a` to return to mark "a" (you'll land at the start of that line)
6. Press `` `a `` to jump to the exact position where you set the mark

Repeat the sequence a few times. Notice the difference between `'a` (line start) and `` `a `` (exact position).

**Challenge:** Can you set and jump to 3 different marks on the same file in under 30 seconds?

**Expected outcome:** Setting and jumping to marks becomes second nature. You realize you can create mental "bookmarks" as you navigate.

---

### Drill 2: Jump List Navigation (5 min)

Stay in the same file. Perform this sequence:

1. Press `gg` (jump recorded)
2. Press `50G` (jump recorded)
3. Press `100G` (jump recorded)
4. Press `G` (jump recorded)
5. Now press `<C-o>` four times, and you should return to position 1 (the top)
6. Press `<C-i>` to go forward again

**Challenge:** Create a random sequence of 5 jumps (using `G`, `/pattern`, `w` combined with other motions). Then use `<C-o>` to backtrack through them. Count how many `<C-o>` presses it takes to get back to the start.

**Expected outcome:** You understand that `<C-o>` and `<C-i>` act like browser history for your editor. You can always "undo" navigation if you go somewhere unexpectedly.

---

### Drill 3: Automatic Special Marks (5 min)

Open `course/day-22/exercises.md` in a new buffer (`:e course/day-22/exercises.md`).

**Task sequence:**

1. Use `i` to enter insert mode and type: `vim is fast`
2. Press Escape (or J+K on Corne) to exit insert mode
3. Now press `'.` (jump to last edit). You should land at the end of the text you just typed
4. Press `'^` to jump to where you exited insert mode. Should be very close to `'.`
5. Delete the text you typed: `dd` or select and delete
6. Now press `'[` and `']` to jump to the start and end of what you just deleted

**Expected outcome:** You realize Vim automatically tracks where you edit. This lets you quickly navigate to areas you recently modified without manually setting marks.

---

### Drill 4: Global Marks Across Files (5 min)

Open two files in buffers:
- `:e course/day-22/index.md`
- `:e course/day-22/exercises.md`

**Task sequence:**

1. In the first file, navigate to an interesting line (e.g., using `/Drills` to find a heading)
2. Press `mF` to set a global mark "F" at that position
3. Switch to the second file (`:e course/day-22/exercises.md`)
4. Go to a different interesting line
5. Press `mG` to set a global mark "G" at that position
6. Now press `'F` — you should jump back to the first file at mark F
7. Press `'G` — you should jump to the second file at mark G

**Expected outcome:** Global marks let you work across multiple files and jump between specific positions without losing context.

---

## Build: Challenge System — Code Editing Challenges with Diff Validation

### What You're Building

The challenge system (introduced in Week 3) needs an enhancement: **code-editing challenges** that validate student work using diffs. Instead of just timed keystroke counting, challenges need to verify that the student transformed the code correctly.

Today you'll add:

1. A `ChallengeValidator` component that performs diff-based validation
2. A `CodeEditingChallenge` type that extends the Challenge interface with expected output
3. Integration with the existing challenge runner to show diffs and validation results

This lets students practice "transform this code in under X keystrokes" exercises with automatic correctness checking.

### Step-by-Step

#### Step 1: Create Challenge Interfaces

Navigate to `app/src/lib/types.ts` (or create it if it doesn't exist).

Add these TypeScript interfaces for code-editing challenges:

```typescript
export interface CodeEditingChallenge extends Challenge {
  type: "code-editing";
  startingCode: string;
  expectedCode: string;
  explanation?: string;
}

export interface ChallengeResult {
  isCorrect: boolean;
  startingCode: string;
  submittedCode: string;
  expectedCode: string;
  diff?: string;
  keystrokeCount?: number;
  hint?: string;
}

export function computeDiff(from: string, to: string): string {
  // Simple line-by-line diff
  const fromLines = from.split('\n');
  const toLines = to.split('\n');
  const maxLen = Math.max(fromLines.length, toLines.length);
  
  const diffs = [];
  for (let i = 0; i < maxLen; i++) {
    const f = fromLines[i] || '';
    const t = toLines[i] || '';
    if (f !== t) {
      diffs.push(`Line ${i + 1}: "${f}" → "${t}"`);
    }
  }
  
  return diffs.join('\n');
}

export function validateCodeChallenge(
  challenge: CodeEditingChallenge,
  submitted: string
): ChallengeResult {
  const isCorrect = submitted.trim() === challenge.expectedCode.trim();
  
  return {
    isCorrect,
    startingCode: challenge.startingCode,
    submittedCode: submitted,
    expectedCode: challenge.expectedCode,
    diff: computeDiff(submitted, challenge.expectedCode),
    hint: !isCorrect ? challenge.hint || "Try again" : undefined,
  };
}
```

Navigate using marks: set `mT` at the top of the file, then jump back to it with `'T` after each edit.

#### Step 2: Create the Diff Display Component

Create `app/src/components/ChallengeDiff.astro`:

```astro
---
interface Props {
  expected: string;
  submitted: string;
  isCorrect: boolean;
}

const { expected, submitted, isCorrect } = Astro.props;
const expectedLines = expected.split('\n');
const submittedLines = submitted.split('\n');
---

<div class="challenge-diff">
  <div class="diff-result" class:list={[{ correct: isCorrect, incorrect: !isCorrect }]}>
    {isCorrect ? "✓ Correct!" : "✗ Try again"}
  </div>
  
  <div class="diff-container">
    <div class="diff-column expected">
      <h4>Expected</h4>
      <pre><code>{expected}</code></pre>
    </div>
    
    <div class="diff-column submitted">
      <h4>Your code</h4>
      <pre><code>{submitted}</code></pre>
    </div>
  </div>
</div>

<style>
  .challenge-diff {
    margin: 1rem 0;
  }
  
  .diff-result {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .diff-result.correct {
    background: #dcfce7;
    color: #166534;
  }
  
  .diff-result.incorrect {
    background: #fee2e2;
    color: #991b1b;
  }
  
  .diff-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  
  .diff-column {
    border: 1px solid #e5e7eb;
    border-radius: 0.25rem;
    overflow: hidden;
  }
  
  .diff-column h4 {
    background: #f3f4f6;
    padding: 0.5rem 1rem;
    margin: 0;
    font-size: 0.875rem;
  }
  
  .diff-column pre {
    padding: 1rem;
    margin: 0;
    background: #fafafa;
    overflow-x: auto;
  }
  
  .diff-column code {
    font-family: monospace;
    font-size: 0.875rem;
  }
</style>
```

Use marks to navigate between files: `mC` in types.ts before switching to create this component.

#### Step 3: Integrate with Challenge Runner

Open `app/src/components/ChallengeRunner.astro` (or create it if missing). Add a code editor section:

```astro
---
import ChallengeDiff from './ChallengeDiff.astro';

interface Props {
  challenge: any;
}

const { challenge } = Astro.props;
---

<div class="challenge-runner">
  <div class="challenge-header">
    <h3>{challenge.title}</h3>
    <p>{challenge.description}</p>
  </div>
  
  <div class="challenge-editor">
    <textarea 
      id="code-input" 
      class="code-editor"
      data-challenge-id={challenge.id}
      placeholder="Edit the code here..."
    >{challenge.startingCode}</textarea>
  </div>
  
  <div class="challenge-actions">
    <button id="submit-btn" class="btn btn-primary">Submit</button>
    <button id="reset-btn" class="btn btn-secondary">Reset</button>
  </div>
  
  <div id="result-container"></div>
</div>

<script>
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');
  const codeInput = document.getElementById('code-input') as HTMLTextAreaElement;
  const resultContainer = document.getElementById('result-container');

  submitBtn?.addEventListener('click', () => {
    const submitted = codeInput.value;
    // Send to validation endpoint or do client-side validation
    // This will be connected to the actual challenge data
    console.log('Submitted code:', submitted);
  });

  resetBtn?.addEventListener('click', () => {
    const original = codeInput.getAttribute('placeholder');
    codeInput.value = '';
  });
</script>

<style>
  .challenge-runner {
    margin: 2rem 0;
  }
  
  .challenge-header {
    margin-bottom: 1.5rem;
  }
  
  .challenge-header h3 {
    margin: 0 0 0.5rem 0;
  }
  
  .challenge-editor {
    margin: 1rem 0;
  }
  
  .code-editor {
    width: 100%;
    min-height: 200px;
    padding: 1rem;
    font-family: monospace;
    font-size: 0.875rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.25rem;
    background: #fafafa;
  }
  
  .challenge-actions {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-weight: 500;
  }
  
  .btn-primary {
    background: #3b82f6;
    color: white;
  }
  
  .btn-secondary {
    background: #e5e7eb;
    color: #1f2937;
  }
</style>
```

Use `mR` (mark Runner) before switching back to types.ts to verify everything is consistent.

#### Step 4: Create a Sample Challenge

Create `challenges/day-22.json`:

```json
{
  "id": "day-22-editing-1",
  "week": 4,
  "day": 22,
  "title": "Variable Rename",
  "type": "code-editing",
  "description": "Rename the variable `oldName` to `newName` throughout this code block. Use marks to remember the function boundaries.",
  "startingCode": "function example() {\n  let oldName = 'value';\n  console.log(oldName);\n  return oldName;\n}",
  "expectedCode": "function example() {\n  let newName = 'value';\n  console.log(newName);\n  return newName;\n}",
  "optimalKeystrokes": 18,
  "explanation": "Use `:%s/oldName/newName/g` to replace all occurrences, or navigate with marks to each location.",
  "skills": ["marks", "find-replace", "visual-mode"]
}
```

#### Step 5: Add to the Challenge Page

Update `app/src/pages/challenges.astro` to import and render code-editing challenges:

```astro
---
import ChallengeRunner from '../components/ChallengeRunner.astro';
import challenges from '../../challenges/day-22.json';
---

<main>
  <h1>Code Challenges</h1>
  
  {challenges.map((challenge) => (
    <ChallengeRunner challenge={challenge} />
  ))}
</main>
```

### Stretch Goal

If you finish early:

1. Add more sample challenges for Days 20–22 to `challenges/` (create day-20.json, day-21.json if they don't exist)
2. Implement the `validateCodeChallenge` function as actual TypeScript with tests
3. Add a keystroke counter that tracks how many edits the student made and compares to optimalKeystrokes
4. Create a hints system: show progressive hints if the student is stuck (hint after 30 seconds, another at 60 seconds)

---

## Checkpoint

**Commit message:** `day-22: add challenge diff validation`

**Your commit should include modifications or creation of:**

- [ ] `app/src/lib/types.ts` — Challenge interfaces with `CodeEditingChallenge` and validation functions
- [ ] `app/src/components/ChallengeDiff.astro` — Diff display component
- [ ] `app/src/components/ChallengeRunner.astro` — Code editor with submit/reset
- [ ] `challenges/day-22.json` — Sample code-editing challenge

**Validation**

The CI will check:
- [ ] TypeScript compiles (no type errors in new interfaces)
- [ ] Components are properly exported and importable
- [ ] Challenge JSON is valid (parseable)
- [ ] `app` builds successfully

**Self-Check**

Before committing:

1. Verify the types compile: `cd app && npx tsc --noEmit`
2. Check that the challenge page renders without errors: `npm run dev` and navigate to `/challenges`
3. You added and used marks while navigating between multiple files (e.g., `mT` in types, `mC` in components)
4. All edits were done with vim motions, not mouse

---

## Today's Score

Track your progress:

- [ ] I can set local marks with `m{a-z}` and jump to them with `'{a-z}` and `` `{a-z} ``
- [ ] I understand the difference between `'` (line) and `` ` `` (exact position)
- [ ] I can set global marks with `m{A-Z}` to persist across files
- [ ] I can navigate the jump list with `<C-o>` and `<C-i>`
- [ ] I can jump to the last edit location with `'.`
- [ ] I can navigate the change list with `g;` and `g,`
- [ ] I added diff-based validation to the challenge system
- [ ] I used marks to remember positions while building multi-component code

**Reflection:** Where did you use marks most effectively today? Was it jumping between the types and components files, or navigating within a single large file? This tells you when marks are most valuable.

---

**Day 22 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 23: Folds & Terminal →](../day-23/index.md)
