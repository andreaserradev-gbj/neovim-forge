[← Day 5: Visual Mode & Selection](index.md) | [Course Index](../../COURSE.md)

# Day 5 Checkpoint

## Commit Message

```
day-05: add tailwind styling and dark mode
```

```bash
git add app/src/styles/global.css app/src/components/ThemeToggle.astro app/src/layouts/Base.astro
git commit -m "day-05: add tailwind styling and dark mode"
git push
```

---

## Expected Files

- [ ] `app/src/styles/global.css` — Base Tailwind styles + CSS variables for theming
- [ ] `app/src/components/ThemeToggle.astro` — Dark mode toggle component
- [ ] `app/src/layouts/Base.astro` — Updated with header, imports, and theme toggle

### File Contents

#### global.css should contain:
- `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`
- CSS custom properties (variables) for light theme (--color-bg, --color-text, etc.)
- Dark theme overrides: `html.dark { ... }`
- Body transitions for smooth theme switching

#### ThemeToggle.astro should contain:
- Button element with id="theme-toggle"
- Inline script that:
  - Loads saved theme from localStorage
  - Adds/removes "dark" class from html element
  - Saves preference on toggle
- Basic styling for the button (border, hover states)

#### Base.astro should contain:
- Import of global.css: `import '../styles/global.css';`
- Import of ThemeToggle component
- Header element with navigation title
- ThemeToggle component rendered in header
- CSS for header layout (flexbox for title + toggle)
- Main element wrapping slot content

---

## Validation

CI checks:
- [ ] CSS files have valid Tailwind directives
- [ ] ThemeToggle component exists with script tag
- [ ] Base layout imports and uses ThemeToggle
- [ ] No build errors: `npm run build`
- [ ] App runs: `npm run dev`
- [ ] Commit message starts with `day-05:`

---

## Self-Check

### 1. Dark Mode Toggle Works

- Open localhost:4321
- Click the theme toggle button
- Background and text color change
- Click again to toggle back
- Refresh the page
- Theme persists (localStorage working)

### 2. Styling is Applied

- Page has a header with "Neovim Forge" title
- Theme toggle visible in header
- Content area has proper spacing
- Body text is readable in both light and dark modes
- Links are styled and visible

### 3. Tailwind is Integrated

- Tailwind classes are used (or pure CSS, either works)
- No style errors in browser console (F12)
- Responsive design basics work (not required to be perfect)

### 4. All Edits Used Visual Mode or Operators

Reflect: Did you use visual mode to select regions? Did you use `di"` to change quoted strings? Did you use `dap` for larger changes?

---

## Commit Steps

```bash
git status
git add app/src/styles/global.css
git add app/src/components/ThemeToggle.astro
git add app/src/layouts/Base.astro
git commit -m "day-05: add tailwind styling and dark mode"
git push
```

---

## If Something Goes Wrong

**"Dark mode toggle doesn't appear"**
- Check that ThemeToggle is imported and rendered in Base.astro
- Verify the component file exists at `app/src/components/ThemeToggle.astro`

**"Clicking toggle does nothing"**
- Open browser console (F12)
- Check for JavaScript errors
- Verify the script in ThemeToggle is not wrapped in a condition that prevents it from running

**"Theme doesn't persist on refresh"**
- Browser console: check for localStorage errors
- Verify localStorage is not disabled (privacy settings)
- Check that `localStorage.setItem` is being called

**"Styles look broken or ugly"**
- This is fine for Day 5—you're learning functionality, not design
- Make sure dark mode colors are readable (no white text on white background, etc.)
- CSS syntax errors would appear in browser console

---

## What's Next

Day 6: Search and Destroy. You'll learn `/` and `?` for finding text, `n` and `N` for navigating matches, and `:s` for substitution (find and replace). This extends your editing power from local to document-wide.

---

[← Day 5: Visual Mode & Selection](index.md) | [Day 6: Search & Destroy →](../day-06/index.md)
