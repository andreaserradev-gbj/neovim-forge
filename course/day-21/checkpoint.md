[← Day 21: Week 3 Review](index.md) | [Course Index](../../COURSE.md)

# Day 21 Checkpoint: Week 3 Complete

## Commit Message
```
day-21: add challenge system mvp and complete week 3
```

## Files to Include

Your commit should add or modify:

- [ ] `app/src/components/ChallengeTimer.astro` — Timer component for challenges
- [ ] `app/src/components/ChallengeRunner.astro` — Challenge display and runner
- [ ] `app/src/pages/challenge.astro` — Challenge page

## Validation Steps

1. **All Week 3 Skills Demonstrate in Your Code**
   - Use `gd` to jump to a definition
   - Use `gr` to find references
   - Use `<leader>cr` to rename a symbol
   - Use `]e` to navigate errors
   - Use `<leader>xx` to open Trouble
   - Use `<leader>cf` to format
   - Use `]h` to navigate git hunks
   - Use `<leader>ghs` to stage hunks
   - Use `"ayy` and `"ap` with named registers
   - Use `qa...q` and `@a` with macros

2. **Challenge Components Render**
   ```bash
   npm run dev
   ```
   - Visit `localhost:4321/challenge`
   - ChallengeTimer is visible and displays time
   - ChallengeRunner displays the challenge
   - Both components are styled
   - No console errors

3. **Build Succeeds**
   ```bash
   npm run build
   ```

## Self-Assessment

Before pushing, check:

- [ ] I performed a complete refactoring using LSP, diagnostics, formatting, git
- [ ] I demonstrated all Week 3 vim skills in my daily work
- [ ] I created ChallengeTimer component
- [ ] I created ChallengeRunner component
- [ ] I created challenge page
- [ ] All components render correctly
- [ ] The app builds without errors
- [ ] I understand when to use each skill (LSP for meaning, diagnostics for errors, git for changes, etc.)
- [ ] I've accepted or customized my Corne layout for Week 3 skills
- [ ] The commit message starts with `day-21:`

## Week 3 Mastery Checklist

- [ ] LSP navigation (gd, gr, gI, gD, gy, K) is reflexive
- [ ] Code actions (<leader>ca, <leader>cr) are part of my workflow
- [ ] Diagnostic navigation ([d, ]d, [e, ]e, <leader>xx) guides my debugging
- [ ] Format-on-save (<leader>uf) keeps code beautiful
- [ ] Auto-closing tags work seamlessly
- [ ] Hunk navigation ([h, ]h, <leader>ghp, <leader>ghs) is my staging workflow
- [ ] Git blame (<leader>gb) helps me understand code history
- [ ] Registers (named, clipboard, black hole) give me powerful copy-paste
- [ ] Macros (qa...q, @a, @@) automate repetition
- [ ] I can combine all these skills in a single refactoring workflow

## Notes

- This is the end of Week 3 (Phase 3). You've completed Days 15-21.
- By now, your Astro app should have:
  - TypeScript types (Day 15)
  - Error boundary and diagnostics components (Day 16)
  - Prettier + ESLint config (Day 17)
  - Progress tracker (Day 18)
  - Code snippet component (Day 19)
  - Challenge seed script (Day 20)
  - Challenge system MVP (Day 21)
- Week 4 will focus on polish, deployment, advanced features, and your graduation challenge.
- The skills you've learned this week are professional-grade. You can now work in any TypeScript/Vim project with confidence.

## Challenge System MVP Criteria

**Timer:**
- Displays elapsed time or countdown
- Shows in MM:SS format
- Updates (or static is acceptable for MVP)

**ChallengeRunner:**
- Displays challenge title and description
- Shows starting code
- Shows expected result
- Has a submit button
- Is styled clearly

**Challenge Page:**
- Combines Timer and ChallengeRunner
- Links from your main navigation
- Renders without errors

## Post-Week 3 Reflection

You now have professional-grade vim skills. Over 21 days, you've learned:

- **Week 1 (Days 1-7):** Navigation and editing (motions, operators, text objects)
- **Week 2 (Days 8-14):** Plugin power and navigation (leader, flash, explorer, buffers, surround)
- **Week 3 (Days 15-21):** Code intelligence and workflow (LSP, diagnostics, formatting, git, registers, macros)

You're no longer learning vim as a text editor. You're operating it as a code IDE, with semantic understanding, real-time feedback, and professional workflows.

**Week 4** will bring you to mastery: deployment, advanced features, marks and folds, AI assistance, and your final graduation challenge.

---

[← Day 21: Week 3 Review](index.md) | [Day 22: Marks & Jumps →](../day-22/index.md)
