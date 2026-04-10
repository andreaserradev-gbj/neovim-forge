[← Day 9: Flash Navigation](index.md) | [Course Index](../../COURSE.md)

# Day 9 Checkpoint: Flash Navigation

## What You're Building

An interactive keyboard shortcut reference component that displays vim keybindings grouped by category. This will be displayed on the app to help learners visualize what keys they've learned.

## Commit Requirements

**Commit message format:**
```
day-09: add keyboard shortcut reference component
```

## Files to Include

### New Component & Data Files (Required)

- [ ] `app/src/components/KeyboardShortcuts.astro` — Astro component for displaying shortcuts
  - Imports shortcuts data from lib/shortcuts.ts
  - Displays shortcuts grouped by category in a table
  - Includes keys, description, and optional notes columns
  - Styled with Tailwind or CSS

- [ ] `app/src/lib/shortcuts.ts` — TypeScript data file with keybindings
  - Defines `KeyboardShortcut` and `shortcut` types
  - Contains shortcut data for Day 8 & 9 keys: leader groups, Flash motions
  - Organized by category (e.g., "Find & Navigate", "Flash Navigation", "Buffer Management")
  - Each shortcut includes keys, description, and optional notes

### Reference Content (Required)

- [ ] `course/reference/keyboard-shortcuts.md` — MDX content file
  - Title and description frontmatter
  - Introductory content about keyboard shortcuts
  - May include the component or reference it

### App Integration (Required)

- [ ] `app/src/pages/reference/keyboard-shortcuts.astro` — Reference page that displays the component
  - Uses the Base layout
  - Imports and displays KeyboardShortcuts component
  - Shows title and introductory text

## Validation Checklist

Before committing, verify:

- [ ] `app/src/lib/shortcuts.ts` exports a shortcuts array with proper TypeScript types
- [ ] `app/src/components/KeyboardShortcuts.astro` renders the shortcuts in a table or list format
- [ ] All Day 8 keybindings are present:
  - [ ] `<leader>ff`, `<leader>fg`, `<leader>fr` (find)
  - [ ] `<leader>e`, `<leader>E` (explorer)
  - [ ] `<leader>/`, `<leader>sg` (search)
  - [ ] `<leader>bb`, `<leader>bn`, `<leader>bp`, `<leader>bd`, `<leader>bo` (buffer)
  - [ ] `<leader>fn`, `<leader>fR` (file operations)
- [ ] All Day 9 keybindings are present:
  - [ ] `s` (Flash jump)
  - [ ] `S` (Flash Treesitter)
  - [ ] `r` (Flash + operator)
  - [ ] `R` (Flash Treesitter + operator)
- [ ] `npm run dev` starts without errors
- [ ] `/reference/keyboard-shortcuts` page loads in browser
- [ ] Component displays shortcuts in an organized, readable format
- [ ] No TypeScript errors

## Vim Skills Used

You should have made every file edit using vim motions:

- [ ] Used `:e` to create new files
- [ ] Used `o` and `O` to insert lines of code
- [ ] Used `w` and `b` to navigate between words
- [ ] Used `f{char}` to jump to specific characters (like `{` or `:`)
- [ ] Used `$` to jump to end of line for edits
- [ ] Used `s` to Flash jump to targets while editing
- [ ] Used `i`, `a`, `I`, `A` to enter insert mode at specific positions
- [ ] Used Escape or J+K to exit insert mode

## Stretch Goals (Optional)

If you completed the basic component and have time:

- [ ] Added client-side interactivity to filter shortcuts by category (Astro island with React)
- [ ] Added a search input that filters shortcuts by keys or description
- [ ] Added visual badges showing which day each shortcut is learned (e.g., "Day 8" badge)
- [ ] Added keyboard event listeners so clicking a key combo or pressing it shows help text
- [ ] Styled the component with CSS animations or hover effects
- [ ] Created additional category groupings (Leader groups, Flash, Operators, etc.)

## Testing Steps

1. Start the dev server:
   ```bash
   cd app
   npm run dev
   ```

2. In browser, navigate to:
   - `localhost:4321/reference/keyboard-shortcuts`
   - Verify the page loads without errors
   - Verify shortcuts are displayed in a table or list

3. Verify data structure:
   - Open `app/src/lib/shortcuts.ts`
   - Confirm shortcuts array has all expected entries
   - Confirm TypeScript types are properly defined

4. Test component rendering:
   - View page source in browser (right-click > View Page Source)
   - Confirm HTML table is generated correctly
   - Confirm all shortcuts are rendered

## Success Criteria

Your commit is ready when:

1. `KeyboardShortcuts.astro` component is present and exports correctly
2. `shortcuts.ts` defines and exports a shortcuts array with TypeScript types
3. Reference page at `/reference/keyboard-shortcuts` loads and displays the component
4. All Day 8 and Day 9 keybindings are present in the shortcuts data
5. Component renders without errors in the browser
6. Shortcuts are organized by category
7. You used vim motions (not the mouse or file dialogs) to make all edits
8. The commit message starts with `day-09:`

## Common Issues & Fixes

**Issue:** Component doesn't render or shows error
- **Fix:** Ensure KeyboardShortcuts.astro has valid JSX/Astro syntax. Check for missing closing tags, incorrect imports, or syntax errors.

**Issue:** Shortcuts data not appearing
- **Fix:** Verify shortcuts.ts exports the shortcuts array correctly. Check that the component imports it: `import { shortcuts } from "../lib/shortcuts"`

**Issue:** TypeScript errors about types
- **Fix:** Ensure KeyboardShortcut interface is defined in shortcuts.ts. Types should be: category (string), bindings (array of objects with keys, description, notes)

**Issue:** Page doesn't render or 404 error
- **Fix:** Verify the page file is at `app/src/pages/reference/keyboard-shortcuts.astro`. Check that the content collection includes the reference.

**Issue:** Content collection reference not found
- **Fix:** Ensure config.ts has a `reference` collection defined. Verify that course/reference/keyboard-shortcuts.md has proper frontmatter with title and description.

## What Comes Next

Day 10 will introduce the **Explorer** (`<leader>e`) for navigating the file tree. You'll use hjkl to move within the tree, press Enter to open files, and `q` to close the explorer. The component library you're building will get file tree and breadcrumb navigation components.

The keyboard shortcuts reference page you're building today will grow as you learn more keybindings in Days 10-14.

---

[← Day 9: Flash Navigation](index.md) | [Day 10: The Explorer →](../day-10/index.md)
