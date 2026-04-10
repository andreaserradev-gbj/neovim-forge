# Contributing to Neovim Forge

Thank you for your interest in improving Neovim Forge! This guide explains how to report issues and submit pull requests.

## What We Welcome

- **Course content fixes** — typos, unclear explanations, incorrect vim commands
- **Better drills** — new exercises, clearer step-by-step instructions, interesting code snippets
- **App improvements** — bug fixes, performance enhancements, UI polish
- **Corne companion improvements** — corrections to split keyboard mappings, new layouts, ergonomic notes
- **Documentation** — clearer README, better guides, examples

## How to Report Issues

1. **Check existing issues** to avoid duplicates
2. **Open a new issue** with:
   - A clear title (e.g., "Day 5 example code has syntax error")
   - What day/section it affects
   - What's wrong and what should happen instead
   - Any error messages or screenshots

## How to Submit a Pull Request

1. **Fork the repo** and create a new branch with a descriptive name
   ```bash
   git checkout -b fix/day-05-typo
   git checkout -b feature/add-emacs-cheatsheet
   ```

2. **Make focused changes** — each PR should address one concern
   - Fix multiple typos? Fine, group them in one PR.
   - Rewrite two days + add a new component? Split into two PRs.

3. **Edit course content** in `/course/day-XX/`:
   - `index.md` — main lesson (Main Track)
   - `exercises.md` — drills and timed challenges
   - `corne.md` — split keyboard companion (optional)
   - `checkpoint.md` — what the commit should contain

4. **Edit app code** in `/app/`:
   - New components in `src/components/`
   - New pages in `src/pages/`
   - Styles in `src/styles/`

5. **Run the app locally** to verify your changes:
   ```bash
   cd app
   npm install
   npm run dev
   ```

6. **Commit with a clear message:**
   ```bash
   git commit -m "day-05: fix syntax error in example code"
   git commit -m "feat: add Emacs keybinding cheatsheet in reference/"
   ```

7. **Push and open a PR** against the main branch with:
   - A clear title
   - Description of what changed and why
   - Any context about why this improvement matters

## Corne Companion Track

If you use a different split keyboard layout (Moonlander, Ergodox, Kyria, etc.), we welcome additions or variants to the Corne track:

- Submit a new `corne.md` variant for your layout
- Or create a separate companion file (e.g., `ergodox.md`)
- Include physical key positions and ergonomic notes just like the Corne version

The goal is to help anyone with a split keyboard map vim skills to their layout.

## Code Style

- **Course MDX**: Clear, conversational tone. Use examples. Show the expected output.
- **App TypeScript**: Strict mode, descriptive names, comments for non-obvious logic
- **Formatting**: Prettier runs on-save (configured in the app). New PRs should be formatted.

## Questions?

Open an issue or start a discussion if you're unsure about anything. We're here to help.

---

**Thank you for helping make Neovim Forge better!**
