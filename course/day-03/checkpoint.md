[← Day 3: The Operator Grammar](index.md) | [Course Index](../../COURSE.md)

# Day 3 Checkpoint

## Commit Message

```
day-03: add content collection and day listing page
```

Use this exact format when committing:

```bash
git add app/src/pages/days.astro app/src/pages/index.astro app/src/content/config.ts
git commit -m "day-03: add content collection and day listing page"
git push
```

---

## Expected Files

Your commit should include modifications or creation of:

- [ ] `app/src/pages/days.astro` — New page displaying all 30 days
- [ ] `app/src/pages/index.astro` — Updated with link to days listing
- [ ] `app/src/content/config.ts` — Optionally enhanced with new fields

### File Contents

#### days.astro should contain:
- Import of `getCollection` from `astro:content`
- Import of Base layout
- Async `getCollection('course')` to fetch all days
- Sorting days by `data.day`
- Grid layout (CSS Grid or Flexbox) displaying day cards
- Each card showing:
  - Day number and title (as a link to `/day/day-XX`)
  - Summary text
  - Metadata (phase, estimated time)
- Basic styling (CSS in `<style>` block)

#### index.astro should contain:
- Link to `/days` page (e.g., "View all 30 days")
- Updated welcome content using Base layout

#### config.ts should contain:
- `defineCollection` and `z` imports
- `course` collection with schema
- All required fields: day, title, phase, summary, vim_skills, plugin_focus, app_milestone, estimated_time
- Optional fields (difficulty, word_count, etc.) if you enhanced it

---

## Validation

The CI will check:

- [ ] `app/src/pages/days.astro` exists and is syntactically valid
- [ ] File uses `getCollection('course')` and `getStaticPaths` correctly
- [ ] Day links use format `/day/day-XX` (zero-padded)
- [ ] No TypeScript errors
- [ ] App builds with `npm run build`
- [ ] App serves with `npm run dev`
- [ ] Commit message starts with `day-03:`

**What if validation fails?**

**"Build fails with 'getCollection is not defined'"**
- Ensure `app/src/content/config.ts` exists (exact filename and directory matter)
- Ensure `config.ts` exports the collection: `export const collections = { course };`

**"Days page returns 404"**
- Verify `days.astro` is in `app/src/pages/` (not nested in subdirectories)
- Check that the filename is `days.astro` (lowercase)

**"No days display on the page"**
- Ensure course MDX files exist in `/course/day-01/`, `/course/day-02/`, etc.
- Verify each MDX file has proper YAML frontmatter with the fields from your schema
- Check that the collection is named `course` in both config and the import

**"Links to individual days return 404"**
- Verify `app/src/pages/day/[slug].astro` exists from Day 2
- Check that the slug format matches: `day-XX` (with two-digit day numbers)
- Ensure Day 1, Day 2, Day 3 MDX files are present in the course directory

---

## Self-Check

Before pushing your commit:

### 1. App Builds and Runs

```bash
cd app
npm run dev
```

Should complete without errors.

### 2. Days Page Displays Correctly

Open `localhost:4321/days`. You should see:
- A grid (or list) of day cards
- Each card shows the day number, title, summary, phase, and time estimate
- At least 3 days visible (Day 1, Day 2, Day 3 if you've created them)
- Day cards are clickable links

### 3. Links Work

Click on "Day 1" link on the days page. You should be taken to `/day/day-01` and see the Day 1 lesson content.

Click "View all 30 days" link from homepage. You should reach the days page.

### 4. All Edits Used Vim Operators

Reflect:
- Did you delete content with `d{motion}`?
- Did you change content with `c{motion}`?
- Did you copy content with `y{motion}`?
- Did you use counts (e.g., `3dw` to delete 3 words)?
- Did you use the dot command (`.`) to repeat operations?

If you copy-pasted the entire days.astro template, that's fine for learning. But try manually typing at least some of it using vim motions.

### 5. Content Collection Works

Edit `app/src/content/config.ts` and add a new optional field. For example:

```typescript
difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
```

Then add that field to one of your course MDX frontmatter:

```yaml
---
day: 1
title: "The First Keystrokes"
difficulty: beginner
...
---
```

The app should still build without errors. This tests that your schema is flexible and your collection is working.

---

## Commit Steps

Once verified locally:

```bash
# From the repo root
git status  # Verify the files you changed

# Stage the files
git add app/src/pages/days.astro
git add app/src/pages/index.astro
git add app/src/content/config.ts

# Commit with the Day 3 message
git commit -m "day-03: add content collection and day listing page"

# Push to your fork
git push
```

GitHub Actions will run the checkpoint CI. You should see a green check within a minute or two.

---

## If Something Still Goes Wrong

**"I see an error about 'astro:content'"**
- Ensure you have the `@astrojs/react` integration (if using JSX in Astro)
- Ensure `astro.config.mjs` has the content collection configured
- The exact line should look like: `import.meta.glob` or similar collection setup

**"The days page shows a blank grid"**
- Run `npm run dev` and check the browser console for errors (F12 Developer Tools)
- Verify the course MDX files are being read by checking logs: `astro info`
- Check that your frontmatter fields match the schema (e.g., `day` must be a number, not a string)

**"I forgot to add a link from index.astro to the days page"**
- Open `app/src/pages/index.astro`
- Navigate to the end of the body content using `G`
- Use `o` to open a new line
- Type: `<p><a href="/days">View all 30 days</a></p>`
- Save with `:w`

---

## What's Next

Once you've committed Day 3:
- Check off the "Today's Score" checklist
- Day 4 introduces text objects: `iw`, `aw`, `i"`, `a"`, `i(`, `a)`, etc.
- Text objects will let you delete "inside quotes" or "around parentheses" with surgical precision
- The combination of operators + text objects is where Vim becomes truly powerful

You've now mastered:
- **Day 1:** Motions (navigation)
- **Day 2:** Insert modes (entering and exiting)
- **Day 3:** Operators (transforming text)

The foundation is solid. Next, you add the ability to target *structures* instead of just motions. That's Day 4.

---

[← Day 3: The Operator Grammar](index.md) | [Day 4: Text Objects →](../day-04/index.md)
