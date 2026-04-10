[← Day 2: Enter and Exit](index.md) | [Course Index](../../COURSE.md)

# Day 2 Checkpoint

## Commit Message

```
day-02: add base layout component and mdx pipeline
```

Use this exact format when committing:

```bash
git add app/src/layouts/Base.astro app/src/pages/index.astro app/src/content/config.ts app/src/pages/day/
git commit -m "day-02: add base layout component and mdx pipeline"
git push
```

---

## Expected Files

Your commit should include modifications or creation of:

- [ ] `app/src/layouts/Base.astro` — New file with HTML shell, head, body, and slot
- [ ] `app/src/pages/index.astro` — Modified to use Base layout
- [ ] `app/src/content/config.ts` — New content collection schema
- [ ] `app/src/pages/day/[slug].astro` — New dynamic day page template

### File Contents

#### Base.astro should contain:
- `<!DOCTYPE html>` declaration
- `<html>` tag with `lang="en"`
- `<head>` section with:
  - `<meta charset="UTF-8" />`
  - `<meta name="viewport" ... />`
  - `<meta name="description" ... />`
  - `<title>` tag (with prop interpolation)
- `<body>` section
- `<slot />` component (for page content injection)

#### index.astro should contain:
- Import of Base layout: `import Base from '../layouts/Base.astro';`
- `<Base>` wrapper around page content (not raw HTML)
- At least one heading (`<h1>`)
- At least one paragraph (`<p>`)
- At least one link (`<a>`)

#### config.ts should contain:
- Import of `defineCollection` and `z` from `astro:content`
- `course` collection definition
- Schema with fields: day, title, phase, summary, vim_skills, plugin_focus, app_milestone, estimated_time, prerequisites
- `export const collections` with the `course` collection

#### [slug].astro should contain:
- Import of `getCollection` and `getStaticPaths`
- `getStaticPaths()` function that returns array of day params
- Proper route slug format: `day-XX` (zero-padded)
- Rendering of MDX content via `Content` component

---

## Validation

The CI will check:

- [ ] All files exist with valid syntax (TypeScript, Astro, JSX)
- [ ] `app/src/layouts/Base.astro` has `<slot />`
- [ ] `app/src/pages/day/[slug].astro` uses `getStaticPaths` and renders `Content`
- [ ] `app/src/content/config.ts` exports a `course` collection
- [ ] No build errors: `npm run build` succeeds
- [ ] App serves without errors: `npm run dev` works
- [ ] Commit message starts with `day-02:`

**What if validation fails?** Check the GitHub Actions logs:
- TypeScript syntax errors: mismatched braces, missing imports
- Astro routing issues: check the `[slug].astro` filename (should be in square brackets)
- Content collection issues: ensure `config.ts` is in `src/content/` directory
- Build errors: run `npm run dev` locally to see the exact error message

---

## Self-Check

Before pushing your commit:

### 1. App Builds and Runs

```bash
cd app
npm run dev
```

Check for errors. You should see "ready in" message without errors.

### 2. Homepage Displays

Open `localhost:4321`. You should see:
- Your Day 1 welcome content
- Proper HTML structure (browser developer tools show no missing closing tags)
- Title in the browser tab matches your `<title>` tag

### 3. Dynamic Day Page Works

Try navigating to `/day/day-01` manually (or `localhost:4321/day/day-01`). You should see:
- The Day 1 lesson content rendered from MDX
- The page title matches the lesson title
- The layout (with meta tags, structure) applied

If you get a 404 or blank page, check:
- The `[slug].astro` file exists at `app/src/pages/day/[slug].astro`
- The course MDX files are in the correct location (`../../course/` from the pages directory, or configured in astro.config)
- Your `config.ts` properly defines the `course` collection

### 4. All Edits Used Vim Motions

Reflect: Did you create and edit all files using vim insert modes?

- Used `i` to insert before cursor
- Used `a` or `A` to append
- Used `o` or `O` to open new lines
- Exited with Escape (or J+K on Corne)
- Saved with `:w`

If you copy-pasted code, that's fine for learning. But next time, try typing it manually to build muscle memory.

---

## Commit Steps

Once verified locally:

```bash
# From the repo root
git status  # Verify the files you changed

# Stage the files
git add app/src/layouts/Base.astro
git add app/src/pages/index.astro
git add app/src/content/config.ts
git add app/src/pages/day/

# Commit with the Day 2 message
git commit -m "day-02: add base layout component and mdx pipeline"

# Push to your fork
git push
```

---

## If Something Goes Wrong

**"404 error when navigating to `/day/day-01`"**
- Check that `[slug].astro` uses the right filename format (square brackets matter)
- Verify the course MDX files exist at `/course/day-01/index.md`
- Check `astro.config.mjs` to confirm the content collection path

**"Content not rendering on day page"**
- The dynamic page template needs `const { Content } = await entry.render();`
- Ensure `<Content />` is in your JSX/Astro template
- Check that your MDX files are in the `course` collection directory

**"Build fails with TypeScript errors"**
- Ensure `config.ts` is in `src/content/` (exact path matters)
- Check for missing imports: `defineCollection`, `z`
- Ensure the `course` object is exported in `collections`

**"Styling looks broken or missing"**
- This is Day 2—styling comes later. A bare HTML page is fine.
- Ensure there are no HTML syntax errors (mismatched tags)

**"I forgot which insert mode to use for what"**
- `i` and `a` for inserting inline (before/after cursor)
- `I` and `A` for line-level edits (start/end of line)
- `o` and `O` for adding new lines (below/above)
- Use the one that requires the fewest hand movements in normal mode first

---

## What's Next

Once you've committed Day 2:
- Check off the checklist in "Today's Score"
- Day 3 introduces the operator grammar: `d` (delete), `c` (change), `y` (yank)
- The delete and change operators will make editing much faster
- You'll also learn the dot command (`.`) for repeating actions

The foundation is solid. Now you're ready for the power features.

---

[← Day 2: Enter and Exit](index.md) | [Day 3: The Operator Grammar →](../day-03/index.md)
