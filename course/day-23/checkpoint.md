[← Day 23: Folds & Terminal](index.md) | [Course Index](../../COURSE.md)

# Day 23 Checkpoint

## Commit Message

```
day-23: add collapsible sections and dev workflow page
```

Use this exact format:

```bash
git add app/src/components/Collapsible.astro
git add app/src/pages/dev-workflow.md
git add app/src/components/Nav.astro  # if modified
git commit -m "day-23: add collapsible sections and dev workflow page"
git push
```

---

## Expected Files

Your commit should include:

- [ ] `app/src/components/Collapsible.astro` — New component using `<details>` and `<summary>` HTML elements
- [ ] `app/src/pages/dev-workflow.md` — New documentation page with collapsible sections for dev workflows
- [ ] Modified `app/src/components/Nav.astro` (or your main navigation) — Added link to dev workflow page

The Collapsible component should:
- Accept `title` prop and optional `defaultOpen` prop
- Use HTML `<details>` for semantic collapsing
- Use `<summary>` for the clickable header
- Support slot content inside
- Have proper styling (background color, hover effect, cursor pointer)

The dev-workflow page should:
- Render at `/dev-workflow/`
- Include at least 6 collapsible sections covering:
  - Running tests
  - Building the project
  - Git operations
  - Code navigation in Vim
  - Code folding
  - Formatting and linting

---

## Validation

The CI will check:

- [ ] `Collapsible.astro` is valid Astro syntax and renderable
- [ ] `dev-workflow.md` imports and uses Collapsible component correctly
- [ ] App builds successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] Commit message starts with `day-23:`

---

## Self-Check

Before committing:

### 1. Component Renders

```bash
cd app
npm run dev
```

Navigate to `http://localhost:4321/dev-workflow/` in your browser.

### 2. Collapsibles Work

Click on each section header. Verify:
- Clicking expands the section
- Clicking again collapses it
- Content is readable when expanded
- Styling looks good (colors, spacing, borders)

### 3. Navigation Link Works

Check that the link in your main navigation (or Nav component) points to `/dev-workflow/` and works.

### 4. Dark Mode (Optional)

If your site has dark mode, verify collapsible sections look good in both light and dark modes.

### 5. TypeScript Check

```bash
npx tsc --noEmit
```

Should have no errors.

### 6. Vim Motions Check

Reflect: Did you use folds while editing the new files? For example:
- Open the component, use `zM` to see structure
- Open the page, use `zf` to create test folds
- Use terminal (`<leader>ft`) to run `npm run dev`

If you didn't, try using folds and terminal for the next day's work.

---

## Commit Steps

Once all checks pass:

```bash
git status  # Review changes

git add app/src/components/Collapsible.astro
git add app/src/pages/dev-workflow.md
git add app/src/components/Nav.astro  # if you modified it

git commit -m "day-23: add collapsible sections and dev workflow page"

git push
```

---

## If Something Goes Wrong

**"Collapsible component not found"**
- Verify the file path: `app/src/components/Collapsible.astro`
- Verify the import path in dev-workflow.md matches

**"Details/summary not expanding"**
- Make sure you're using HTML `<details>` and `<summary>`, not a custom implementation
- The browser handles this natively—no JavaScript needed

**"Styling looks broken"**
- Check the CSS in the component—make sure there are no syntax errors
- Verify that the Tailwind classes or inline styles are correct
- Use browser DevTools to inspect the elements

**"dev-workflow page won't render"**
- Verify `dev-workflow.md` is in `app/src/pages/`
- Check that the frontmatter is valid YAML
- Verify the layout import is correct

**"Link to dev workflow doesn't work"**
- Make sure the href is `/dev-workflow/` (with leading and trailing slashes)
- Verify the page is built (run `npm run dev` to test)

---

## What's Next

Once Day 23 is committed:

- Check off the checklist in "Today's Score"
- Try using folds in your daily work (especially with large files)
- Practice the terminal workflow for builds and tests
- Read Day 24 when ready

Day 24 covers **Advanced Text Objects** — more powerful ways to select and edit code.

---

## Today's Score

Track your progress:

- [ ] I can toggle folds with `za`
- [ ] I can close all folds with `zM` and open all with `zR`
- [ ] I can create manual folds with `zf{motion}` and delete with `zd`
- [ ] I can jump between folds with `zj` and `zk`
- [ ] I can open a terminal with `<leader>ft` and run commands
- [ ] I can exit terminal mode with Escape and return to Vim
- [ ] I created the Collapsible component
- [ ] I created the dev workflow documentation page
- [ ] The page renders correctly and links work
- [ ] I practiced using folds and terminal together

**Reflection:** Did folds help you manage code complexity? Did the terminal feel natural as part of your workflow? These tools compound over time—the more you use them, the more natural they become.

---

[← Day 23: Folds & Terminal](index.md) | [Day 24: Advanced Text Objects →](../day-24/index.md)
