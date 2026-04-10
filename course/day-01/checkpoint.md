[← Day 1: The First Keystrokes](index.md) | [Course Index](../../COURSE.md)

# Day 1 Checkpoint

## Commit Message

```
day-01: scaffold project and create first page
```

Use this exact format when committing your work:

```bash
git add app/src/pages/index.astro
git commit -m "day-01: scaffold project and create first page"
git push
```

---

## Expected Files

Your commit should include modifications or creation of:

- [ ] `app/src/pages/index.astro` — Modified with Day 1 welcome content

The file should contain:
- A `<title>` tag with "Neovim Forge" or similar
- An `<h1>` heading with "Neovim Forge - Day 1" or similar
- At least one `<p>` paragraph with welcoming text
- Basic HTML structure (opening `<html>`, closing `</html>`, etc.)
- No broken tags or syntax errors

---

## Validation

The CI will check:

- [ ] `app/src/pages/index.astro` exists
- [ ] The file contains valid HTML (basic structure check)
- [ ] No TypeScript errors (checked via `astro check`)
- [ ] The commit message starts with `day-01:`

**What if validation fails?** Check the GitHub Actions logs in your fork. Common issues:
- Mismatched HTML tags (every `<tag>` needs a `</tag>`)
- Syntax error in the file (extra quotes, unclosed brackets)
- Commit message doesn't start with `day-01:` (use lowercase and the hyphen)

---

## Self-Check

Before pushing your commit, verify locally:

### 1. App Builds and Runs

```bash
cd app
npm install  # if not already done
npm run dev
```

Check for errors in the terminal. If you see "ready in" messages and no errors, you're good.

### 2. Page Displays

Open `localhost:4321` in your browser. You should see:
- The page title in your browser tab (from the `<title>` tag)
- Your Day 1 heading visible on the page
- Welcome text

If the page is blank or shows an error, check the file for typos.

### 3. File Edits Used Motions

Reflect: Did you make all edits using vim motions? No mouse, no arrow keys?

If you used arrow keys or the mouse, redo the edit using:
- `gg` to go to top
- `f<` to find tags
- `w` to jump words
- `i` to insert text
- `Escape` (or J+K if on Corne) to exit
- `:w` to save

---

## Commit Steps

Once verified locally:

```bash
# From the repo root
git status  # See what changed

# Stage the file
git add app/src/pages/index.astro

# Commit with the Day 1 message
git commit -m "day-01: scaffold project and create first page"

# Push to your fork
git push
```

Watch your GitHub repo. After pushing, GitHub Actions will run the checkpoint CI. You should see a green check next to your commit within a minute or two.

---

## If Something Goes Wrong

**"I see a red X on the commit"**
- Click the red X to see the error message
- Common issues: mismatched HTML tags, commit message format, missing file
- Fix the issue locally, commit again, push

**"The app won't start (npm run dev fails)"**
- Check `app/package.json` is present and valid
- Check `app/tsconfig.json` is present
- Run `npm install` again to reinstall dependencies
- Check for syntax errors in `index.astro`

**"I can't figure out what's wrong"**
- Open `app/src/pages/index.astro` in Neovim using the motions you learned
- Use `:syntax` to see Vim's syntax highlighting (any red squiggles?)
- Check for unclosed tags: every `<` should have a matching `>`
- Check the Astro docs: https://docs.astro.build/ (or navigate to it, don't just mouse around)

---

## What's Next

Once you've committed Day 1:
- Check off the checklist in today's "Today's Score" section
- Read through the Day 2 lesson when you're ready
- Day 2 covers insert mode and undo/redo—the next cornerstone of vim editing

You've forged the first keystroke. The rest is rhythm.

---

[← Day 1: The First Keystrokes](index.md) | [Day 2: Enter and Exit →](../day-02/index.md)
