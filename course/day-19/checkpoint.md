[← Day 19: Registers Deep Dive](index.md) | [Course Index](../../COURSE.md)

# Day 19 Checkpoint

## Commit Message
```
day-19: add code snippet component with clipboard support
```

## Files to Include

Your commit should add or modify:

- [ ] `app/src/components/CodeSnippet.astro` — Code snippet display component
- [ ] Modified `app/src/pages/index.astro` — Example usage of CodeSnippet

## Validation Steps

1. **Register Operations Work in Vim**
   - Use `"ayy` to copy to register a
   - Use `"ap` to paste from register a
   - Use `"+yy` to copy to system clipboard
   - Use `"+p` to paste from system clipboard
   - Use `"_dd` to delete to black hole
   - Use `"0p` to paste from last yank
   - Type `:reg` to see all registers

2. **CodeSnippet Component Renders**
   ```bash
   cd app
   npm run dev
   ```
   - Visit localhost:4321
   - CodeSnippet components are visible
   - Code blocks display with proper formatting

3. **Copy Button Works**
   - Click "Copy" button on a code snippet
   - Verify text is copied (button shows "Copied!" feedback)
   - Paste into another app and verify content is correct

4. **Build Succeeds**
   ```bash
   npm run build
   ```
   Should complete without errors.

## Self-Assessment

Before pushing, check:

- [ ] I understand what registers are (Vim clipboards)
- [ ] I used named registers (a, b, c) to store multiple snippets
- [ ] I copied to system clipboard with "+y and pasted with "+p
- [ ] I used black hole register "_ to delete without saving
- [ ] I used last yank register "0p to recover a copy
- [ ] I viewed registers with :reg
- [ ] I created a CodeSnippet component
- [ ] The component has a copy button that works
- [ ] The copy button integrates with system clipboard (in browser)
- [ ] I demonstrated register usage in my Vim work
- [ ] The app builds and renders without errors
- [ ] The commit message starts with `day-19:`

## Component Requirements

**CodeSnippet.astro should:**
- Accept `code`, `language`, and `filename` props
- Display the code in a `<pre><code>` block
- Include a "Copy" button
- Show "Copied!" feedback when clicked
- Use browser's clipboard API (navigator.clipboard.writeText)
- Have clean styling with visible button

## Notes

- The CodeSnippet component uses browser clipboard API, which requires HTTPS or localhost (for development).
- The copy button is interactive (client-side), so ensure the `<script>` tag is included and Astro is configured to allow client scripts.
- Register operations (in Vim) don't require the component — they're parallel vim skills demonstrated by your daily work.
- If system clipboard (`"+y`, `"+p`) doesn't work in your Vim, ensure your Neovim is compiled with clipboard support (`nvim --version` should show `+clipboard`).

---

[← Day 19: Registers Deep Dive](index.md) | [Day 20: Macros →](../day-20/index.md)
