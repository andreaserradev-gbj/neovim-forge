[← Day 18: Git in the Editor](index.md) | [Course Index](../../COURSE.md)

# Day 18 Checkpoint

## Commit Message
```
day-18: add git progress tracker
```

## Files to Include

Your commit should add or modify:

- [ ] `app/src/lib/progress.ts` — Utility functions that read git history
- [ ] `app/src/components/ProgressTracker.astro` — Component displaying progress
- [ ] Modified `app/src/layouts/Base.astro` — Imports ProgressTracker

## Validation Steps

1. **Git Functionality Works**
   - Open a file and press ]h to jump to next hunk
   - Press [h to jump to previous hunk
   - Press <leader>ghp to preview a hunk
   - Press <leader>ghs to stage a hunk
   - Press <leader>ghu to undo a hunk
   - All commands work without errors

2. **Progress Tracker Reads Git History**
   ```bash
   cd app
   npm run build
   ```
   Should build successfully

3. **Progress Tracker Displays Correctly**
   - Run `npm run dev` and visit localhost:4321
   - ProgressTracker component is visible
   - It shows a progress bar with percentage
   - It lists completed days (matching day-XX: commit patterns)

4. **Git Log Parsing Works**
   - Verify that commits with pattern `day-XX: message` are correctly identified
   - Commits without the pattern are ignored
   - Progress percentage is calculated correctly (highest day / 30 * 100)

## Self-Assessment

Before pushing, check:

- [ ] I understand git hunks (contiguous blocks of changes)
- [ ] I navigated hunks with ]h and [h
- [ ] I previewed hunks with <leader>ghp
- [ ] I staged hunks with <leader>ghs
- [ ] I undid hunks with <leader>ghu
- [ ] I viewed code blame with <leader>gb
- [ ] I created a progress.ts utility that reads git history
- [ ] I created a ProgressTracker component
- [ ] The component correctly identifies day-XX: commits
- [ ] The progress bar displays and updates correctly
- [ ] The app builds and renders without errors
- [ ] The commit message starts with `day-18:`

## Notes

- Progress tracking reads git log output. If git isn't available (e.g., not in a git repo or git isn't installed), the tracker gracefully returns an empty list.
- The pattern matching is case-insensitive: `day-15:`, `Day-15:`, `DAY-15:` all match.
- Progress percentage is calculated as: (highest completed day / 30) * 100. Adjust the total if your course has a different number of days.
- Gitsigns (for hunk navigation and staging) should be configured in your LazyVim setup. If ]h doesn't work, check that gitsigns.nvim is installed.

---

[← Day 18: Git in the Editor](index.md) | [Day 19: Registers Deep Dive →](../day-19/index.md)
