---
day: 20
title: "Macros"
phase: 3
summary: "Record and replay sequences of keystrokes — record once, repeat infinitely, transform code in bulk"
vim_skills: ["q{register}", "q", "@{register}", "@@", "{count}@{register}"]
plugin_focus: null
app_milestone: "Batch processing script (scripts/seed-challenge.ts) that generates challenge data from MDX frontmatter"
estimated_time: "45-60 min"
prerequisites: ["day-19"]
---

[← Day 19: Registers Deep Dive](../day-19/index.md) | [Course Index](../../COURSE.md) | [Day 21: Week 3 Review →](../day-21/index.md)


## Today's Vim Skills

### What Are Macros?

A macro is a recorded sequence of keystrokes that you can replay. Instead of typing the same edits 50 times, you record the edit once, then replay it 50 times.

**Example:** You have 50 function definitions that need documentation. They all need the same comment pattern:

```typescript
/**
 * TODO: Add description
 */
function myFunc() { }
```

You can't do this with search-and-replace because each function needs customized comment text. But they all follow the same pattern: position on the function name, add a comment block, move to the next function.

You record this sequence once (the macro), then replay it 50 times. Instant documentation frame for all functions.

### Recording: q{register}

To record a macro:

1. Press `q` followed by a register letter (e.g., `qa` to record into register a)
2. You're now recording. The status line shows "recording @a"
3. Type the keystrokes you want to record (navigate, edit, delete, whatever)
4. Press `q` again to stop recording

The register now contains the keystroke sequence.

**Example:** Record a macro to add a comment above the current line:

```
qa         Start recording into register a
O          Insert new line above, enter insert mode
// TODO   Type a comment
Escape     Exit insert mode
j          Move to next line
q          Stop recording
```

Now register `a` contains: "O // TODO Escape j"

### Replaying: @{register}, @@, {count}@{register}

- `@a` — replay the macro in register a (execute once)
- `@@` — replay the last macro you executed (useful for running the same macro repeatedly)
- `5@a` — replay register a five times

**Example (continuing above):**

```
@a      Execute the macro once (add comment on line 1, move to line 2)
@a      Execute again (line 2 gets a comment, move to line 3)
10@a    Execute 10 times (lines 3-12 each get a comment, move to line 13)
```

### Recursive Macros: Self-Referencing

A macro can call itself:

```
qa        Start recording
... (do some edits)
@a        Call the macro (reference itself)
q         Stop recording
```

Then running `@a` will keep calling itself until it fails (e.g., reaches end of file or encounters an error). Useful for transformations that need to apply repeatedly until done.

### Editing Macros

If you make a mistake recording a macro, you can edit it:

1. Paste the register's contents: `"ap`
2. Edit the text (fix the keystrokes)
3. Copy it back to the register: `"ayy` (or select and yank to the register)

This requires understanding keystroke syntax (Escape is Ctrl-V Escape in insert mode, etc.), so it's advanced. For most cases, just re-record.

### Mental Model: Recorded Actions

Think of a macro as a recording of your hands. You demonstrate an edit once (record it), then Vim plays back your hands 50 times automatically. The macro doesn't understand the intent — it just replays keystrokes exactly.

This is powerful but also limited: if the macro assumes your cursor is on a specific character, it will fail if that character isn't there. Macros are deterministic — they require predictable structure.

---

## Drills

### Drill 1: Record and Replay (5 min)

Create a simple test file:

```bash
nvim /tmp/macro-test.txt
```

Add multiple identical blocks:

```
name: function1
name: function2
name: function3
```

Record a macro to add "value: " before each line. Start on line 1:

```
qa        Start recording in register a
0         Go to start of line
w         Jump to next word (skip "name:")
i         Insert before cursor
value: 
Escape    Exit insert mode
j         Move to next line
q         Stop recording
```

Now replay:

```
@a        Execute once (line 1 is edited, cursor moves to line 2)
@a        Execute again (line 2 is edited, cursor moves to line 3)
@a        Execute again (line 3 is edited)
```

All three lines now have "value: " added.

**Expected outcome:** You recorded a sequence and replayed it exactly.

### Drill 2: Bulk Replay (5 min)

In the same file, create more identical blocks:

```
name: item4
name: item5
name: item6
...
```

Position on the first remaining block. Press:

```
10@a
```

The macro runs 10 times in quick succession. All 10 lines are transformed.

**Expected outcome:** You can replay a macro many times with a count.

### Drill 3: Repeat with @@ (5 min)

You've just run `@a` a few times. The last macro you ran was `@a`. Now press:

```
@@
```

It executes `@a` once. Press `@@` again, it runs again. This is faster than typing `@a` repeatedly.

**Expected outcome:** `@@` is a quick repeat for the last macro.

### Drill 4: Recursive Macro (Bonus, 5 min)

This is advanced and may not always work, but it's fun to try:

Create a file with numbers on separate lines:

```
1
2
3
4
5
```

Record a macro that adds a symbol to the current line, moves down, then calls itself:

```
qa        Start recording
A         Append at end of line
 →        Type an arrow (or any symbol)
Escape    Exit insert
j         Move down
@a        Call the macro again (recursive!)
q         Stop
```

Now press `@a` once. It starts, adds an arrow to line 1, moves to line 2, calls itself, which adds an arrow to line 2, moves to line 3, calls itself... until it reaches the end of the file and fails (because there's no line 6 to move to).

Result: all lines have arrows.

**Expected outcome:** Recursive macros handle repetition automatically until they fail.

---

## Build: Batch Processing Script

### What You're Building

Today you'll create a script that reads all your course content MDX files (which have frontmatter at the top), parses the frontmatter, and generates JSON challenge definitions. This is the kind of bulk data processing that macros are perfect for — if you were doing it manually, you'd record a macro and replay it.

Instead, we'll implement it in TypeScript, but the spirit is the same: define the transformation once, apply it to all inputs.

### Step-by-Step

#### Step 1: Create the seed script

Create `app/scripts/seed-challenge.ts`:

```bash
mkdir -p app/scripts
nvim app/scripts/seed-challenge.ts
```

```typescript
import * as fs from "fs";
import * as path from "path";

interface ChallengeSeed {
  day: number;
  title: string;
  skillsRequired: string[];
}

// Parse frontmatter from MDX file
function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter: Record<string, any> = {};
  const lines = match[1].split("\n");

  for (const line of lines) {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      const value = valueParts.join(":").trim();
      // Parse YAML-like values
      if (value === "null") {
        frontmatter[key.trim()] = null;
      } else if (value === "true") {
        frontmatter[key.trim()] = true;
      } else if (value === "false") {
        frontmatter[key.trim()] = false;
      } else if (value.startsWith("[") && value.endsWith("]")) {
        // Parse array
        frontmatter[key.trim()] = JSON.parse(value);
      } else {
        // Remove quotes if present
        frontmatter[key.trim()] = value.replace(/^["']|["']$/g, "");
      }
    }
  }

  return frontmatter;
}

// Seed challenges from course content
function seedChallenges() {
  const courseDir = path.join(__dirname, "../../course");
  const challenges: ChallengeSeed[] = [];

  const dayDirs = fs
    .readdirSync(courseDir)
    .filter((f) => f.startsWith("day-") && fs.statSync(path.join(courseDir, f)).isDirectory())
    .sort();

  for (const dayDir of dayDirs) {
    const indexPath = path.join(courseDir, dayDir, "index.md");
    if (!fs.existsSync(indexPath)) continue;

    const content = fs.readFileSync(indexPath, "utf-8");
    const frontmatter = parseFrontmatter(content);

    const day = parseInt(dayDir.match(/\d+/)?.[0] || "0", 10);

    challenges.push({
      day,
      title: frontmatter.title || `Day ${day}`,
      skillsRequired: frontmatter.vim_skills || [],
    });
  }

  return challenges;
}

// Main
const challenges = seedChallenges();
console.log(JSON.stringify(challenges, null, 2));

// Optionally, write to a file
const outputPath = path.join(__dirname, "../public/challenges.json");
fs.writeFileSync(outputPath, JSON.stringify(challenges, null, 2));
console.log(`Seeded ${challenges.length} challenges to ${outputPath}`);
```

#### Step 2: Add script to package.json

Edit `app/package.json` and add a seed script:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "seed-challenges": "tsx scripts/seed-challenge.ts",
    ...
  }
}
```

(You need `tsx` to run TypeScript scripts: `npm install --save-dev tsx`)

#### Step 3: Run the seed script

```bash
cd app
npm install --save-dev tsx
npm run seed-challenges
```

This generates `public/challenges.json` with all challenges from your course content MDX files. No manual transcription — it's automated.

#### Step 4: Create a ChallengeList component

Create `app/src/components/ChallengeList.astro`:

```bash
nvim app/src/components/ChallengeList.astro
```

```astro
---
interface Props {
  day?: number;
}

const { day } = Astro.props;

// In a real app, you'd load from public/challenges.json
// For now, hardcode or fetch dynamically
const challenges = [
  { day: 1, title: "The First Keystrokes", skillsRequired: ["h", "j", "k", "l"] },
  { day: 2, title: "Insert Mode", skillsRequired: ["i", "a", "o", "O"] },
];

const displayChallenges = day ? challenges.filter((c) => c.day === day) : challenges;
---

<div class="challenge-list">
  <h3>Challenges</h3>
  <ul>
    {displayChallenges.map((challenge) => (
      <li>
        <strong>Day {challenge.day}:</strong> {challenge.title}
        <br />
        <small>Skills: {challenge.skillsRequired.join(", ")}</small>
      </li>
    ))}
  </ul>
</div>

<style>
  .challenge-list {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 6px;
    background-color: #f9f9f9;
  }

  .challenge-list h3 {
    margin-top: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }

  li:last-child {
    border-bottom: none;
  }

  small {
    color: #666;
    font-size: 0.875rem;
  }
</style>
```

#### Step 5: Integrate into your pages

Edit `app/src/pages/index.astro` and add ChallengeList:

```astro
import ChallengeList from "../components/ChallengeList.astro";

<ChallengeList />
```

#### Step 6: Commit

```bash
git add app/scripts/seed-challenge.ts app/src/components/ChallengeList.astro app/package.json
git commit -m "day-20: add challenge seed script"
```

### Stretch Goal

If you finish early:

1. Extend the seed script to parse more frontmatter fields (difficulty, category, etc.)
2. Generate an actual challenges JSON file and serve it from the Astro app
3. Create a CLI tool that watches for changes to MDX files and auto-seeds challenges
4. Record a Vim macro that demonstrates a repetitive code transformation (then commit the before/after comparison)

---

## Checkpoint

**Commit message:** `day-20: add challenge seed script`

**Your commit should include:**

- [ ] `app/scripts/seed-challenge.ts` — Script that reads MDX files and generates challenge data
- [ ] Modified `app/package.json` — Adds `seed-challenges` script
- [ ] `app/src/components/ChallengeList.astro` — Component to display challenges

**Validation**

Before committing, verify:
1. You recorded a macro with `qa` ... `q`
2. You replayed it with `@a` and `@@`
3. You used a count to replay multiple times (`10@a`)
4. The seed script runs: `npm run seed-challenges`
5. The script generates or displays challenge data
6. ChallengeList component renders without errors
7. `npm run build` succeeds

**Self-Check**

- [ ] I understand what macros are (recorded keystroke sequences)
- [ ] I recorded a macro with q{register}
- [ ] I replayed a macro with @{register}
- [ ] I used @@ to repeat the last macro
- [ ] I used a count to replay many times ({count}@{register})
- [ ] I created a seed script for batch processing
- [ ] The script parses MDX frontmatter and generates data
- [ ] I integrated the script into package.json
- [ ] I created a component to display the seeded data
- [ ] The app builds and renders without errors

---

## Today's Score

- [ ] I recorded a macro with `qa`...`q`
- [ ] I replayed it with `@a`
- [ ] I used `@@` to repeat quickly
- [ ] I replayed a macro multiple times with `10@a`
- [ ] I created a batch processing script
- [ ] The script automates what a macro would do manually
- [ ] I integrated it into the app build process
- [ ] I created a component to display the results

**Reflection:** When would you use a macro instead of a script? When would you use a script instead of a macro? How does understanding both change your approach to repetitive tasks?

---

**Day 20 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 21: Week 3 Review →](../day-21/index.md)
