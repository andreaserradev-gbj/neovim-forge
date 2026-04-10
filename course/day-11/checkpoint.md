[← Day 11: Buffers & Windows](index.md) | [Course Index](../../COURSE.md)

# Day 11 Checkpoint: Buffers & Windows

## What You're Building

A multi-panel layout component that displays lesson content and exercises side-by-side, demonstrating window splitting and multi-view editing.

## Commit Requirements

**Commit message:**
```
day-11: add multi-panel layout with split view
```

## Files to Include

### Components (Required)

- [ ] `app/src/components/LessonLayout.astro` — Two-column layout component
  - Accepts title, lessonContent, exerciseContent
  - Displays lesson on left, exercises on right
  - Both panels independently scrollable
  - Responsive (stacks on smaller screens)

### Updated Pages (Required)

- [ ] `app/src/pages/day/[slug]/index.astro` — Day page with multi-panel layout
  - Loads both day and exercises collections
  - Renders LessonLayout component with both contents
  - Shows breadcrumb and file tree (previous days' work)
  - Fallback to single-panel view if exercises don't exist

### Configuration (If Using Exercises Collection)

- [ ] Updated `app/src/content/config.ts` — exercises collection schema
  - Defines exercises collection type and schema
  - Exports exercises in collections object

## Validation Checklist

- [ ] LessonLayout component renders correctly
- [ ] Day pages display lesson and exercises side-by-side
- [ ] Both panels are independently scrollable
- [ ] Layout is responsive (stacks on mobile/small screens)
- [ ] Page title and breadcrumb are visible above the split
- [ ] No TypeScript errors
- [ ] `npm run dev` runs without errors
- [ ] Day pages display correctly in browser
- [ ] Single-panel fallback works if exercises don't exist

## Vim Skills Used

- [ ] Used `<C-hjkl>` to navigate between split windows in vim
- [ ] Used `<leader>-` to create horizontal splits
- [ ] Used `<leader>|` to create vertical splits
- [ ] Used `<C-Up/Down/Left/Right>` to resize windows
- [ ] Used `<S-h>` and `<S-l>` to navigate buffer list
- [ ] Used `<leader>bd` to delete buffers during testing
- [ ] Made all edits using vim motions

## Testing Steps

1. Start dev server:
   ```bash
   cd app
   npm run dev
   ```

2. Navigate to a day page:
   - `localhost:4321/day/11/` (or any day with both lesson and exercises)
   - Verify lesson content appears on left
   - Verify exercises content appears on right
   - Verify both panels are scrollable

3. Test responsiveness:
   - Resize browser window to small width
   - Verify layout stacks vertically
   - Verify content is still readable

4. Test fallback:
   - Navigate to a day without exercises
   - Verify single-panel view renders
   - No errors or layout issues

## Success Criteria

Your commit is ready when:

1. LessonLayout component exists and renders correctly
2. Day pages show lesson and exercises in side-by-side view
3. Both panels are scrollable independently
4. Layout is responsive and looks good on small screens
5. Fallback to single-panel view works
6. All edits were made using vim motions
7. Commit message starts with `day-11:`

## Common Issues & Fixes

**Issue:** Exercises don't render or show "undefined"
- **Fix:** Verify exercises collection is defined in config.ts. Check that exercise MDX file has proper day number in frontmatter.

**Issue:** Layout doesn't show side-by-side on large screens
- **Fix:** Ensure LessonLayout uses flexbox with `flex: 1` on both panels. Check that `.split-container { display: flex; gap: 2rem; }`

**Issue:** Responsive layout doesn't stack on mobile
- **Fix:** Add `@media (max-width: 1200px)` rule with `flex-direction: column` on `.split-container`

**Issue:** Page looks broken or misaligned
- **Fix:** Check that main content area has `flex: 1` or appropriate sizing. Verify margins and padding aren't causing overflow.

**Issue:** TypeScript errors on collection imports
- **Fix:** Ensure config.ts has all collections defined. Check that collection import paths match filesystem structure.

## What Comes Next

Day 12 introduces **Snacks Picker** — the ultimate search interface. You'll learn:
- `<leader>sg` for live grep (search project text)
- `<leader>sf` for file search with fuzzy matching
- `<leader>sc` for command palette
- Multi-select and preview functionality

The picker is the fastest way to find anything in your project.

---

[← Day 11: Buffers & Windows](index.md) | [Day 12: Find Everything →](../day-12/index.md)
