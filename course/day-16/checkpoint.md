[← Day 16: Diagnostics & Notifications](index.md) | [Course Index](../../COURSE.md)

# Day 16 Checkpoint

## Commit Message
```
day-16: add error boundary and diagnostics ui
```

## Files to Include

Your commit should add or modify:

- [ ] `app/src/components/ErrorBoundary.astro` — New error boundary component
- [ ] `app/src/components/DiagnosticsStatus.astro` — New diagnostics status widget
- [ ] `app/src/layouts/Base.astro` — Modified to use both components (or created if new)

## Validation Steps

1. **App Builds Successfully**
   ```bash
   cd app
   npm run build
   ```
   Should complete without errors.

2. **Diagnostic Navigation Works**
   - Open `app/src/lib/sample-data.ts`
   - Intentionally create a type error
   - Press `]e` to jump to the error
   - Press `[e` to jump backward
   - Press `]d` to jump to any diagnostic (errors or warnings)
   - All commands should work without errors

3. **Trouble Plugin Works**
   - Press `<leader>xx` to open Trouble for current buffer diagnostics
   - Press `<leader>xX` to open Trouble for workspace diagnostics
   - Press `<leader>cs` to show document symbols
   - Press `j/k` to navigate, Enter to jump to items
   - Close with `<leader>xx` or `:q`

4. **Components Render**
   - Run `npm run dev`
   - Visit `localhost:4321` in browser
   - ErrorBoundary and DiagnosticsStatus should be visible (if included in a page)
   - No console errors

5. **Type Checking Passes**
   ```bash
   npm run typecheck
   ```
   Should pass with no errors.

## Self-Assessment

Before pushing, check:

- [ ] I understand what diagnostics are (errors, warnings, info from LSP)
- [ ] I successfully used `]e`, `[e`, `]d`, `[d` to navigate errors and diagnostics
- [ ] I used `<leader>xx` to open Trouble panel and navigated with j/k
- [ ] I used `<leader>cs` to view document symbols
- [ ] I created an ErrorBoundary component that catches errors
- [ ] I created a DiagnosticsStatus component showing error/warning counts
- [ ] Both components are styled appropriately
- [ ] The app builds without errors
- [ ] The commit message starts with `day-16:`

## Component Requirements

**ErrorBoundary.astro should:**
- Accept a title prop (with default "Something went wrong")
- Wrap content in a visually distinct error container
- Include details/summary for error information
- Have error-specific styling (red border, background, etc.)

**DiagnosticsStatus.astro should:**
- Display error count (if > 0)
- Display warning count (if > 0)
- Show "All clear" if no errors/warnings
- Include a last-checked timestamp
- Use appropriate colors (red for errors, orange for warnings, green for success)

## Notes

- Trouble.nvim and Noice.nvim should be installed as part of your LazyVim setup. If `<leader>xx` doesn't open Trouble, check that the plugins are loaded.
- If you see "No diagnostics" when opening Trouble, that's OK — it means there are no errors in the current file. Create an error to test.
- Components are Astro-specific. If you want to make them work with Astro's integration with React/Vue, add `client:load` or similar as needed (though plain Astro is fine for these examples).

---

[← Day 16: Diagnostics & Notifications](index.md) | [Day 17: Format & Flow →](../day-17/index.md)
