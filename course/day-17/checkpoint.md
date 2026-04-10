[← Day 17: Format & Flow](index.md) | [Course Index](../../COURSE.md)

# Day 17 Checkpoint

## Commit Message
```
day-17: add eslint prettier config and format-on-save
```

## Files to Include

Your commit should add:

- [ ] `.prettierrc` — Prettier formatting configuration
- [ ] `.eslintrc.json` — ESLint linting configuration

Both files should be at the project root (same level as `app/`, `course/`, `README.md`, etc.).

## Validation Steps

1. **Prettier Configuration is Valid**
   ```bash
   # From project root
   npx prettier --check .prettierrc
   ```
   Should pass (or use a JSON validator).

2. **ESLint Configuration is Valid**
   ```bash
   # From app directory
   npx eslint --init
   ```
   or manually verify `.eslintrc.json` is valid JSON.

3. **Format-on-Demand Works**
   - Open `app/src/test-format.ts` (a file with intentional formatting issues)
   - In Neovim, press `<leader>cf`
   - The file should be reformatted according to `.prettierrc`
   - Delete test file after verification

4. **Auto-Format Toggle Works**
   - Press `<leader>uf` to enable format-on-save
   - Edit a file and press `:w` to save
   - The file should auto-format
   - Press `<leader>uf` to disable
   - Edit another file and save — it should NOT auto-format
   - Re-enable `<leader>uf` when done

5. **Auto-Closing Tags Work (if using nvim-ts-autotag)**
   - Open an Astro or JSX file
   - Type an opening tag like `<div>` and press `>`
   - A closing `</div>` should appear automatically

6. **Build Succeeds**
   ```bash
   cd app
   npm run build
   ```
   Should complete without errors related to formatting or linting (ignore any non-blocking warnings).

## Self-Assessment

Before pushing, check:

- [ ] I understand what Prettier does (auto-formats code)
- [ ] I understand what ESLint does (identifies code problems)
- [ ] I used `<leader>cf` to format a file and saw changes
- [ ] I toggled format-on-save with `<leader>uf` and verified it works
- [ ] I saw auto-closing tags work in Astro/JSX components
- [ ] `.prettierrc` contains sensible defaults (semi, quotes, tab width, etc.)
- [ ] `.eslintrc.json` extends a recommended ruleset and includes Astro support
- [ ] Both config files are valid JSON
- [ ] The commit message starts with `day-17:`

## Configuration File Guidelines

**.prettierrc should include:**
- `semi`: true or false (your preference)
- `singleQuote`: true or false (your preference)
- `tabWidth`: 2 or 4 (recommended: 2)
- `printWidth`: 80-120 (recommended: 100)
- `trailingComma`: "es5", "none", or "all"
- `bracketSpacing`: true (adds spaces in objects)
- `arrowParens`: "always" (parentheses around arrow function params)

**.eslintrc.json should:**
- Extend `eslint:recommended` or a framework-specific config
- Include environment settings (browser, es2021, node, astro)
- Define rules for your project (e.g., warn on unused vars)
- Include overrides for `.astro` files if using Astro

## Notes

- Prettier must be installed: `npm install --save-dev prettier` in the `app/` directory, or install globally.
- ESLint for Astro requires `eslint-plugin-astro` or `astro-eslint-parser`. If you see errors, ensure they're installed.
- Format-on-save is configured in your Neovim setup (LazyVim's `conform.nvim`). If `<leader>cf` works but `<leader>uf` doesn't toggle, check that `conform.nvim` is installed.
- If auto-closing tags don't work, ensure `nvim-ts-autotag` is installed in your Neovim plugins.

---

[← Day 17: Format & Flow](index.md) | [Day 18: Git in the Editor →](../day-18/index.md)
