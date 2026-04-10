[← Day 22: Marks & Jumps](index.md) | [Course Index](../../COURSE.md)

# Day 22 Checkpoint

## Commit Message

```
day-22: add challenge diff validation
```

Use this exact format when committing:

```bash
git add app/src/lib/types.ts
git add app/src/components/ChallengeDiff.astro
git add app/src/components/ChallengeRunner.astro
git add challenges/day-22.json
git commit -m "day-22: add challenge diff validation"
git push
```

---

## Expected Files

Your commit should include modifications or creation of:

- [ ] `app/src/lib/types.ts` — New or updated with `CodeEditingChallenge`, `ChallengeResult`, `computeDiff()`, `validateCodeChallenge()` functions
- [ ] `app/src/components/ChallengeDiff.astro` — New component that displays expected vs submitted code
- [ ] `app/src/components/ChallengeRunner.astro` — New or updated with code editor textarea, submit/reset buttons
- [ ] `challenges/day-22.json` — New challenge definition(s) with code-editing exercises

The types file should contain:
- `CodeEditingChallenge` interface extending the Challenge type
- `ChallengeResult` interface with diff output
- `computeDiff(from: string, to: string)` function that shows line-by-line differences
- `validateCodeChallenge(challenge, submitted)` function that returns a result with correctness boolean

The ChallengeDiff component should:
- Display a success/failure indicator
- Show expected code on the left
- Show submitted code on the right
- Display a line-by-line diff of any differences

The ChallengeRunner component should:
- Render a code editor with starting code
- Have submit and reset buttons
- Show results in a div below

---

## Validation

The CI will check:

- [ ] `app/src/lib/types.ts` exists and has proper TypeScript exports
- [ ] `ChallengeDiff.astro` is importable and uses proper Astro syntax
- [ ] `ChallengeRunner.astro` is importable and has proper event handlers
- [ ] `challenges/day-22.json` is valid JSON with expected schema
- [ ] TypeScript compiles with no errors (`npx tsc --noEmit`)
- [ ] App builds successfully (`npm run build`)
- [ ] Commit message starts with `day-22:`

---

## Self-Check

Before pushing:

### 1. TypeScript Compilation

```bash
cd app
npx tsc --noEmit
```

You should see no errors. If there are errors, they likely relate to:
- Missing type exports in `types.ts`
- Type mismatches in component props
- Missing interface fields

Fix them before committing.

### 2. App Build

```bash
npm run dev
```

Navigate to `http://localhost:4321` and check for errors in the browser console. The app should start without errors.

### 3. Challenge Data

Verify `challenges/day-22.json` is valid JSON:

```bash
cat challenges/day-22.json | jq .
```

Should output the JSON structure without parse errors.

### 4. Component Integration

In your browser, check that:
- Code-editing challenges load and display the starting code
- The submit button can be clicked
- The reset button works

If the challenge page doesn't exist, create `app/src/pages/challenges.astro`:

```astro
---
import ChallengeRunner from '../components/ChallengeRunner.astro';
---

<main>
  <h1>Code Challenges</h1>
  <p>Practice with code-editing challenges that test your vim skills.</p>
  <!-- Challenges will be rendered here -->
</main>
```

### 5. Vim Motions Check

Reflect: Did you use marks while building these files? For example:
- `m1` at the top of `types.ts` before adding interfaces
- `mC` in ChallengeDiff before switching to ChallengeRunner
- `'1` and `'C` to jump back to specific locations

If you navigated purely with `:e` and didn't use marks, try the build again using marks. It's practice for the day's skills.

---

## Commit Steps

Once all checks pass:

```bash
# From the repo root
git status  # Review what changed

# Stage the files
git add app/src/lib/types.ts
git add app/src/components/ChallengeDiff.astro
git add app/src/components/ChallengeRunner.astro
git add challenges/day-22.json

# Commit
git commit -m "day-22: add challenge diff validation"

# Push
git push
```

---

## If Something Goes Wrong

**"TypeScript errors: Cannot find name 'Challenge'"**
- Make sure `Challenge` interface is defined in `types.ts` (either locally or imported from a previous day's work)
- Check that `CodeEditingChallenge` extends it correctly: `interface CodeEditingChallenge extends Challenge`

**"app/src/components/ChallengeRunner.astro is missing"**
- Create it following the template in the Build section
- Make sure it exports properly for import in other components

**"JSON parse error in challenges/day-22.json"**
- Check for missing commas between object fields
- Verify all strings are quoted with double quotes
- Use `jq` or an online JSON validator to pinpoint the error

**"App won't build: 'ChallengeRunner' is not found"**
- Verify the file path matches the import: `import ChallengeRunner from '../components/ChallengeRunner.astro'`
- Check that the component is exported (Astro components export by default, but verify the filename)

**"Commit message rejected"**
- Use exact format: `day-22: add challenge diff validation`
- No capital letter after the colon
- Use a single space after the colon

---

## What's Next

Once Day 22 is committed:

- Check off the checklist in today's "Today's Score" section
- Review the marks you set during the build process—did they help?
- Read Day 23 when ready
- Day 23 covers **Folds & Terminal** — how to collapse code and work in the terminal

The challenge system now validates student work. By Day 23, students will be using this system to test their code transformations.

---

## Today's Score

Track your progress:

- [ ] I can set and jump to local marks with `m{a-z}` and `'`/`` ` ``
- [ ] I can set global marks with `m{A-Z}` and jump between files
- [ ] I understand the difference between `'` (line) and `` ` `` (exact position)
- [ ] I used `<C-o>` and `<C-i>` to navigate the jump list
- [ ] I jumped to the last edit location with `'.`
- [ ] I navigated changes with `g;` and `g,`
- [ ] I created the diff validation component for code challenges
- [ ] I used marks to remember locations while building multi-file code
- [ ] All 4 files are properly committed with the correct message
- [ ] CI validation passes (green check on your commit)

**Reflection:** Did marks change how you approached the multi-file build? Would you use them in your daily work, or do search and go-to-definition feel faster? This insight shapes how you'll use marks going forward.

---

[← Day 22: Marks & Jumps](index.md) | [Day 23: Folds & Terminal →](../day-23/index.md)
