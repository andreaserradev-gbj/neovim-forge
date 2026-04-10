[← Day 10: The Explorer](index.md) | [Course Index](../../COURSE.md)

# Day 10 Checkpoint: The Explorer

## What You're Building

A file tree sidebar and breadcrumb navigation component for the app. The sidebar displays the course structure (days and references) in an explorable tree, and breadcrumbs show the current location.

## Commit Requirements

**Commit message:**
```
day-10: add file tree sidebar and breadcrumb navigation
```

## Files to Include

### Components (Required)

- [ ] `app/src/components/FileTree.astro` — Sidebar component showing course structure
  - Imports days and reference collections
  - Displays collapsible "Days" and "Reference" sections
  - Shows current page as highlighted/active
  - Links to day and reference pages

- [ ] `app/src/components/Breadcrumb.astro` — Breadcrumb navigation component
  - Accepts items array with label and optional href
  - Displays as "Home / Days / Day 5" with clickable links
  - Last item is not a link (current page)

### Updated Pages (Required)

- [ ] `app/src/pages/day/[slug].astro` — Updated with FileTree and Breadcrumb
  - Uses two-column layout (sidebar + main content)
  - Includes FileTree component with currentDay prop
  - Includes Breadcrumb component showing path
  - Updates styling to accommodate sidebar

- [ ] `app/src/pages/reference/[slug].astro` — Updated with FileTree and Breadcrumb
  - Same structure as day page
  - Includes FileTree with currentReference prop
  - Includes Breadcrumb component

## Validation Checklist

- [ ] FileTree component renders without errors
- [ ] Breadcrumb component renders without errors
- [ ] Day pages display sidebar and breadcrumb correctly
- [ ] Reference pages display sidebar and breadcrumb correctly
- [ ] File tree shows both "Days" and "Reference" sections
- [ ] File tree sections are collapsible (using `<details>`)
- [ ] Current page is highlighted in the file tree (active state styling)
- [ ] Breadcrumb links navigate correctly
- [ ] Clicking breadcrumb "Days" link goes to `/days/`
- [ ] Clicking breadcrumb "Home" link goes to `/`
- [ ] Layout is responsive (sidebar collapses or hides on small screens, optional)
- [ ] `npm run dev` runs without errors
- [ ] No TypeScript errors

## Vim Skills Used

You should have made every file edit using vim motions:

- [ ] Used `:e` to create new component files
- [ ] Used `o` and `O` to insert lines of JSX/Astro code
- [ ] Used `w` and `b` to navigate between words in JSX
- [ ] Used `f{char}` to jump to opening/closing braces or tags
- [ ] Used `$` to jump to end of line for edits
- [ ] Used `dd` or `d` motions to delete code blocks
- [ ] Used visual mode (`v`) to select text blocks if needed
- [ ] Used `<leader>e` to explore the project structure
- [ ] Used `hjkl` in the explorer to navigate directories
- [ ] Used `<leader>ff` to find and open files while editing

## Testing Steps

1. Start dev server:
   ```bash
   cd app
   npm run dev
   ```

2. Navigate to day pages:
   - `localhost:4321/day/01/`
   - `localhost:4321/day/10/`
   - Verify sidebar shows file tree with Days section expanded
   - Verify current day is highlighted in sidebar
   - Verify breadcrumb shows "Home / Days / Day X"

3. Navigate to reference pages:
   - `localhost:4321/reference/vim-grammar/` (or any reference page that exists)
   - Verify sidebar shows Reference section
   - Verify breadcrumb shows "Home / Reference / [Page Name]"

4. Test breadcrumb navigation:
   - Click "Days" in breadcrumb → should go to `/days/`
   - Click "Home" in breadcrumb → should go to `/`
   - Navigate back to day page and test again

5. Test sidebar navigation:
   - Click day titles in sidebar → should navigate to that day's page
   - Click reference titles in sidebar → should navigate to that reference page
   - Verify active state follows you as you navigate

## Success Criteria

Your commit is ready when:

1. Both FileTree and Breadcrumb components exist and render correctly
2. Day pages show sidebar and breadcrumb
3. Reference pages show sidebar and breadcrumb
4. Sidebar highlights the current page
5. Breadcrumb links navigate correctly
6. Layout looks reasonable (not broken or misaligned)
7. All edits were made using vim motions (no file dialogs or mouse)
8. Commit message starts with `day-10:`

## Common Issues & Fixes

**Issue:** Sidebar doesn't appear on page
- **Fix:** Verify FileTree component is imported in the page. Check that the layout div wraps both sidebar and main content.

**Issue:** Current page not highlighted in sidebar
- **Fix:** Ensure FileTree receives the currentDay or currentReference prop. Check that the conditional class (active) is applied: `class={currentDay === day.data.day ? "active" : ""}`

**Issue:** Breadcrumb links don't work
- **Fix:** Verify breadcrumb items have correct href values. Check that the href matches actual routes like `/days/`, `/`, `/day/01/`.

**Issue:** Layout is broken (sidebar and content overlap)
- **Fix:** Add CSS flexbox or grid layout. The layout div should use `display: flex` with sidebar having a fixed width or `max-width`.

**Issue:** TypeScript errors on collection imports
- **Fix:** Ensure config.ts has day and reference collections defined. Check import paths in pages are correct.

## What Comes Next

Day 11 introduces **Buffers & Windows**. You'll learn:
- How to open multiple files (`<leader>` commands)
- How to split windows horizontally and vertically
- How to navigate between windows using Ctrl+hjkl
- How to close windows and delete buffers

The file tree you built today will be complemented by buffer management. Today: explore structure. Tomorrow: manage multiple views.

---

[← Day 10: The Explorer](index.md) | [Day 11: Buffers & Windows →](../day-11/index.md)
