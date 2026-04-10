[← Day 14: Week 2 Review & Interactive Vim Cheatsheet](index.md) | [Course Index](../../COURSE.md)

# Day 14 Checkpoint: Week 2 Complete

## What You're Building

An interactive vim cheatsheet showcasing all Week 2 keybindings with expandable/collapsible categories. This serves as a reference for everything learned from Days 8-14.

## Commit Requirements

**Commit message:**
```
day-14: add interactive vim cheatsheet page and complete week 2
```

## Files to Include

### Components & Data (Required)

- [ ] `app/src/lib/cheatsheet.ts` — Cheatsheet data structure
  - CheatsheetGroup interface with name, description, bindings
  - Bindings include keys, description, and optional example
  - All Week 2 groups: Leader, Flash, Explorer, Windows, Picker, Surround

- [ ] `app/src/components/VimCheatsheet.astro` — Reusable cheatsheet component
  - Accepts optional expanded prop to set which groups are open by default
  - Renders collapsible `<details>` sections for each group
  - Displays bindings in a table with keys, descriptions, and examples
  - Styled for readability with keyboard styling for keys

### Pages (Required)

- [ ] `app/src/pages/cheatsheet.astro` — Cheatsheet page
  - Uses Base layout
  - Imports and displays VimCheatsheet component
  - Includes title and instructions
  - Links from main navigation

## Validation Checklist

- [ ] Cheatsheet page renders at `/cheatsheet`
- [ ] All Week 2 keybindings are listed:
  - [ ] Day 8: `<leader>ff`, `<leader>e`, `<leader>/`, `<leader>bb`, `<leader>bd`, `<leader>bo`, `<leader>bn`, `<leader>bp`, `<leader>fn`
  - [ ] Day 9: `s`, `S`, `r`, `R`
  - [ ] Day 10: `<leader>e`, `<leader>E`, `Y`, `c`, `d`, `r` (in explorer)
  - [ ] Day 11: `<C-hjkl>`, `<leader>-`, `<leader>|`, `<S-h>`, `<S-l>`, `<C-Up/Down/Left/Right>`
  - [ ] Day 12: `<leader>sg`, `<leader>sf`, `<leader>sb`, `<leader>sc`, `<leader>sd`, `<leader>sm`, `<leader>so`, navigation with `<C-n>`/`<C-p>`
  - [ ] Day 13: `sa`, `sd`, `sr`, `sf`, `sF`, `sh`
- [ ] Groups expand/collapse correctly with `<details>`
- [ ] Table displays keys in monospace font
- [ ] Examples are shown where applicable
- [ ] Layout is responsive and readable
- [ ] No TypeScript errors
- [ ] Cheatsheet is accessible from navigation or home page

## Vim Skills Used

Throughout this week and today:

- [ ] Used `<leader>ff` to find and open files during development
- [ ] Used Flash (`s`) to jump to positions within files while editing
- [ ] Used `<leader>e` to explore project structure
- [ ] Used `<C-hjkl>` to navigate between multiple windows during multi-file editing
- [ ] Used `<leader>-` and `<leader>|` to create splits for viewing multiple files
- [ ] Used `<leader>sg` to search for text across the project
- [ ] Used `<leader>bd` to delete buffers when needed
- [ ] Used surround (`sa`, `sd`, `sr`) for pair manipulation in code
- [ ] Made every edit using vim motions (no file dialogs, no mouse)

## Testing Steps

1. Start dev server:
   ```bash
   cd app
   npm run dev
   ```

2. Navigate to cheatsheet:
   - `localhost:4321/cheatsheet`
   - Verify page loads

3. Test interactivity:
   - Click group titles to expand/collapse
   - Verify all sections open and close correctly

4. Verify content:
   - Check that all Day 8-14 keybindings are listed
   - Verify descriptions match what you learned
   - Check that examples are present for complex bindings

5. Check styling:
   - Keys are displayed in monospace font
   - Tables are readable
   - Layout works on mobile (if responsive)

## Success Criteria

Your commit is ready when:

1. All three files exist and have valid code
2. Cheatsheet page renders at `/cheatsheet`
3. Groups expand/collapse correctly
4. All Week 2 keybindings are listed with descriptions
5. Examples are shown for complex operations
6. Layout is clean and readable
7. No TypeScript or Astro errors
8. All edits were made using vim motions
9. Commit message starts with `day-14:`

## Common Issues & Fixes

**Issue:** Groups don't expand/collapse
- **Fix:** Ensure you're using `<details>` and `<summary>` HTML elements. The `open` attribute on `<details>` controls initial state.

**Issue:** Cheatsheet data isn't showing
- **Fix:** Verify cheatsheet.ts exports the cheatsheet array. Check that VimCheatsheet component imports it correctly.

**Issue:** Keys aren't styled in monospace
- **Fix:** Add `font-family: monospace;` to the `.keys` CSS class.

**Issue:** Page is unstyled or broken
- **Fix:** Ensure you're importing styles in the component. Check that Tailwind CSS variables exist (or update to hardcoded colors).

**Issue:** TypeScript errors on data structure
- **Fix:** Ensure CheatsheetGroup interface is exported from cheatsheet.ts. Check that binding objects match the interface.

## What Comes Next

**Week 3 (Days 15-21): Code Intelligence**

You've mastered navigation and basic editing. Now you'll learn:
- **Day 15:** LSP integration — jump to definitions, see type info, refactoring
- **Day 16:** Diagnostics — find and fix errors
- **Day 17:** Formatting — automatic code formatting
- **Day 18:** Git integration — view changes, blame, history
- **Day 19:** Registers and clipboard — save/paste text intelligently
- **Day 20:** Macros — record and replay editing sequences
- **Day 21:** Week 3 Review — bringing it all together

By the end of Week 3, you'll be able to navigate and refactor entire codebases with precision. Your Vim will feel like an IDE, but faster.

## Reflection

Week 2 is complete. Reflect on:

1. Which skill has been most transformative?
2. What workflows have you discovered?
3. Where are you still slow or hesitant?
4. How has the Corne (if you're using one) affected your learning?
5. What would you like to learn next?

Write these down. They'll guide your practice.

---

**Congratulations on completing Week 2!**

You can now:
- Navigate any project without touching the mouse
- Find files and text across your codebase instantly
- Edit with precision using multiple windows and buffers
- Manipulate text structures (surround) effortlessly
- Compose these skills into powerful workflows

You're ready for the intelligence layer. Week 3 awaits.

---

[← Day 14: Week 2 Review & Interactive Vim Cheatsheet](index.md) | [Day 15: LSP Superpowers →](../day-15/index.md)
