[← Day 20: Macros](index.md) | [Course Index](../../COURSE.md)

# Day 20 Checkpoint

## Commit Message
```
day-20: add challenge seed script
```

## Files to Include

Your commit should add or modify:

- [ ] `app/scripts/seed-challenge.ts` — Script that parses MDX frontmatter and generates challenge data
- [ ] `app/package.json` — Adds `seed-challenges` script
- [ ] `app/src/components/ChallengeList.astro` — Component to display challenges

## Validation Steps

1. **Macro Recording and Replay Works in Vim**
   - Record a macro: `qa ... q`
   - Replay it: `@a`
   - Quick-repeat: `@@`
   - Bulk-replay: `10@a`
   - All commands execute without errors

2. **Seed Script Runs**
   ```bash
   cd app
   npm run seed-challenges
   ```
   Should output challenge data (to console or to a file)

3. **Script Parses Frontmatter**
   - The script reads MDX files from `../course/day-XX/`
   - Extracts frontmatter (day, title, vim_skills, etc.)
   - Generates or displays JSON structure

4. **ChallengeList Component Renders**
   - Run `npm run dev`
   - Visit localhost:4321
   - ChallengeList component is visible
   - Displays challenges from the data

5. **Build Succeeds**
   ```bash
   npm run build
   ```
   Should complete without errors.

## Self-Assessment

Before pushing, check:

- [ ] I recorded a macro with `q{register}` and stopped with `q`
- [ ] I replayed a macro with `@{register}`
- [ ] I used `@@` to quick-repeat
- [ ] I replayed a macro multiple times with `{count}@{register}`
- [ ] I created a batch processing script (seed-challenge.ts)
- [ ] The script parses MDX files and extracts frontmatter
- [ ] The script generates challenge data in JSON format
- [ ] I added the script to package.json as a runnable command
- [ ] I created a ChallengeList component
- [ ] The component displays data from the seeded challenges
- [ ] The app builds and renders without errors
- [ ] The commit message starts with `day-20:`

## Script Requirements

**seed-challenge.ts should:**
- Read all `course/day-XX/` directories
- Find and parse `index.md` files
- Extract frontmatter (YAML section at the top)
- Generate a JSON structure with day, title, skillsRequired, etc.
- Output to console and/or save to a file (e.g., `public/challenges.json`)

**ChallengeList.astro should:**
- Accept optional `day` prop to filter challenges
- Display challenges in a readable format
- Show day number, title, and skills required
- Have clean styling

## Notes

- The seed script automates what macros would do manually. Instead of recording a macro and replaying it 30 times to transform 30 files, the script does it programmatically.
- Macro recordings in Vim are separate from the script — they're in your daily work (transforming local code, test files, etc.). The script is the "production" version.
- If the seed script fails, check that the `course/` directory exists and contains properly formatted MDX files with frontmatter.
- The script can be run manually with `npm run seed-challenges` or automatically as part of the build process (if desired).

---

[← Day 20: Macros](index.md) | [Day 21: Week 3 Review →](../day-21/index.md)
