[← Day 8: The Leader Key](index.md) | [Course Index](../../COURSE.md)

# Day 8 Checkpoint: The Leader Key

## What You're Building

File-based routing for the entire course: days, reference content, and challenges are now accessible via clean URLs that mirror the project file structure.

## Commit Requirements

**Commit message format:**
```
day-08: add file-based routing for all course sections
```

## Files to Include

Your commit must include these files:

### Routing Pages (Required)

- [ ] `app/src/pages/day/[slug].astro` — Dynamic page for individual lessons
  - Loads a day from the content collection
  - Renders the day's MDX content
  - Shows day title, summary, and full lesson
  - Handles 404 if day not found

- [ ] `app/src/pages/days/index.astro` — Day listing page
  - Displays all 30 days in order
  - Shows day number, title, and summary for each
  - Links to individual day pages

- [ ] `app/src/pages/reference/[slug].astro` — Dynamic page for reference content
  - Loads a reference page from the content collection
  - Renders the reference's MDX content
  - Shows reference title and description

- [ ] `app/src/pages/reference/index.astro` — Reference listing page
  - Lists all reference pages with titles and descriptions
  - Links to individual reference pages

### Configuration (Required)

- [ ] `app/src/content/config.ts` — Content collection schema
  - Defines `day` collection with schema for: day, title, phase, summary, vim_skills, plugin_focus, app_milestone, estimated_time, prerequisites
  - Defines `reference` collection with schema for: title, description
  - Exports collections object with both day and reference

### Layout (May Already Exist)

- [ ] `app/src/layouts/Base.astro` — Base layout component
  - Provides HTML shell and head structure
  - Accepts `title` prop and renders `<slot/>`

## Validation Checklist

Before committing, verify:

- [ ] All four routing pages exist and are valid Astro files (no syntax errors)
- [ ] Content collections are properly defined in `config.ts`
- [ ] Day pages render correctly with dynamic slug routing
- [ ] Reference pages render correctly with dynamic slug routing
- [ ] `npm run dev` starts without errors
- [ ] `localhost:4321/days/` shows a list of all days
- [ ] `localhost:4321/day/01/` renders Day 1 content
- [ ] `localhost:4321/reference/` shows reference pages
- [ ] No TypeScript errors (run `astro check` if available)
- [ ] All navigation links are clickable and route correctly

## Vim Skills Used

You should have made every file edit using vim motions:

- [ ] Used `:e {path}` to create/open new files
- [ ] Used `o` and `O` to insert lines
- [ ] Used `w` and `b` to navigate between words
- [ ] Used `f{char}` to jump to specific characters
- [ ] Used `$` to jump to end of line for edits
- [ ] Used `<leader>ff` to find and navigate between project files
- [ ] Used `<leader>e` to open the explorer and browse directories

## Stretch Goals (Optional)

If you completed the basic routing and have time:

- [ ] Created `app/src/components/DayNav.astro` for prev/next navigation
- [ ] Integrated DayNav into the day page template
- [ ] Created `app/src/components/BreadcrumbNav.astro` showing current location
- [ ] Added links on the home page (`/`) to `/days/` and `/reference/`
- [ ] Styled the listing pages with basic CSS (even if just Tailwind classes)

## Testing Steps

1. Start the dev server:
   ```bash
   cd app
   npm run dev
   ```

2. Navigate using vim and leader keys:
   ```bash
   nvim .
   # In neovim:
   # Press Space-f-f, find "package.json"
   # Open it, then Space-f-f find "index.astro"
   # Press Space-b-b to jump back
   ```

3. In browser, verify these URLs work:
   - `localhost:4321` (home)
   - `localhost:4321/days/` (all days listed)
   - `localhost:4321/day/01/` (Day 1 rendered)
   - `localhost:4321/day/08/` (Day 8 should render the file you just created)
   - `localhost:4321/reference/` (reference listing, if reference content exists)

## Success Criteria

Your commit is ready when:

1. All four routing pages are present and have valid Astro syntax
2. Content collections are configured with the correct schemas
3. The dev server runs without errors
4. You can navigate to `/days/01/`, `/day/08/`, `/reference/` in the browser and see content
5. You used vim motions (not the mouse or file dialogs) to make all edits
6. The commit message starts with `day-08:`

## Common Issues & Fixes

**Issue:** "Content collection not found" error
- **Fix:** Ensure `config.ts` is in `app/src/content/` and properly exports the collections

**Issue:** Dynamic routes not rendering (404)
- **Fix:** Check that the slug parameter matches the data property used in the find() call. Days might need zero-padded numbers.

**Issue:** MDX content not rendering
- **Fix:** Make sure the Base layout uses `<slot />` to render children, and dynamic pages use `<Content />` from the render() result

**Issue:** TypeScript errors on Astro.params
- **Fix:** This is a known Astro type inference issue. You can add `// @ts-ignore` if needed, but the page should still build and run

## What Comes Next

Day 9 will add a keyboard shortcut reference component that visualizes which-key groups and keybindings. You'll use Flash to jump around code, and the interactive component will teach people what keys to press.

---

[← Day 8: The Leader Key](index.md) | [Day 9: Flash Navigation →](../day-09/index.md)
