[← Day 4: Text Objects](index.md) | [Course Index](../../COURSE.md)

# Day 4 Checkpoint

## Commit Message

```
day-04: add day navigation and sidebar components
```

Use this exact format:

```bash
git add app/src/components/DayNav.astro app/src/components/Sidebar.astro app/src/pages/day/[slug].astro
git commit -m "day-04: add day navigation and sidebar components"
git push
```

---

## Expected Files

Your commit should include:

- [ ] `app/src/components/DayNav.astro` — Navigation between consecutive days
- [ ] `app/src/components/Sidebar.astro` — Sidebar listing all/many days
- [ ] `app/src/pages/day/[slug].astro` — Updated to import and include the components

### File Contents

#### DayNav.astro should contain:
- Props interface with `currentDay` and optional `totalDays`
- Logic to calculate `prevDay` and `nextDay`
- Conditional rendering (show links only if they exist)
- Links formatted as `/day/day-XX` (zero-padded)
- Basic styling with borders, spacing, alignment
- Text like "← Day N" and "Day N →"

#### Sidebar.astro should contain:
- `getCollection('course')` to fetch days
- Sorting by day number
- List of day links (showing at least 10 days)
- Links formatted as `/day/day-XX`
- Basic styling (background, padding, list layout)
- Heading "Course Days" or similar

#### [slug].astro should contain:
- Imports for `DayNav` and `Sidebar` components
- Usage of both components in the template
- DayNav passed `currentDay={entry.data.day}`
- Sidebar displayed in the layout (typically as aside or separate section)

---

## Validation

The CI will check:

- [ ] All component files exist with valid Astro syntax
- [ ] DayNav correctly handles boundary days (Day 1 has no prev, Day 30 has no next)
- [ ] No broken links (slug formatting is consistent)
- [ ] Sidebar renders without errors (getCollection works)
- [ ] App builds: `npm run build` succeeds
- [ ] App runs: `npm run dev` succeeds
- [ ] Commit message starts with `day-04:`

**Common issues:**

**"DayNav shows broken links"**
- Check that `prevDay` and `nextDay` are calculated correctly
- Verify the slug format matches: `/day/day-01`, `/day/day-02`, etc. (two digits)
- Ensure zero-padding is applied: `String(day).padStart(2, '0')`

**"Sidebar doesn't render"**
- Verify `getCollection('course')` is called correctly
- Check that course MDX files exist for the days you're listing
- Ensure the collection name matches: `'course'` (in `config.ts`, `getCollection`, and imports)

**"App builds but pages show "undefined" or empty components"**
- Check props passing: `<DayNav currentDay={entry.data.day} />`
- Verify component imports are correct: `import DayNav from '../../components/DayNav.astro';`

---

## Self-Check

Before committing:

### 1. Build and Run

```bash
cd app
npm run dev
```

No errors should appear.

### 2. Navigate to a Day Page

Open `localhost:4321/day/day-01`. You should see:
- The Day 1 content (heading, summary, full lesson text)
- A sidebar showing available days as links
- Navigation at the bottom showing "Day 2 →" (no "← Day 0" for Day 1)
- All links are clickable and formatted correctly

### 3. Test Navigation

- Click "Day 2 →". You should navigate to `/day/day-02` with updated nav (now showing "← Day 1" and "Day 3 →")
- Click a day in the sidebar. You should navigate to that day's page

### 4. Verify Edits Used Text Objects

Reflect on how you created and edited the components:
- Did you use `diw` to delete words while creating components?
- Did you use `ci"` to change quoted strings (like filenames, prop names)?
- Did you use `dap` or `da}` to delete larger structures?

Text objects should be automatic by now—you shouldn't have to think about them.

### 5. Check Component Styling

The components don't need to be beautifully styled yet (that's Day 5). They just need to be readable and functional:
- DayNav should show navigation links with clear spacing
- Sidebar should be distinct from main content (different background color is fine)
- No broken layout

---

## Commit Steps

Once verified:

```bash
# From repo root
git status

# Stage the new and modified files
git add app/src/components/DayNav.astro
git add app/src/components/Sidebar.astro
git add app/src/pages/day/[slug].astro

# Commit
git commit -m "day-04: add day navigation and sidebar components"

# Push
git push
```

---

## If Something Goes Wrong

**"Sidebar shows 'undefined' where days should be"**
- Open browser dev tools (F12) and check the console for errors
- Verify that at least one course MDX file (day-01, day-02, etc.) exists
- Check that the frontmatter in the MDX matches your schema (all required fields present)

**"DayNav doesn't appear at all"**
- Verify the component is imported at the top of `[slug].astro`
- Check that the component is actually used in the JSX: `<DayNav currentDay={...} />`
- Open browser dev tools and look for errors

**"Styling looks broken (elements overlapping or hidden)"**
- This is fine for Day 4. Styling comes in Day 5
- As long as the components render and links work, the checkpoint is valid
- The CI doesn't check styling, only functionality

**"I forgot to update [slug].astro to include the components"**
- Open the file: `nvim app/src/pages/day/[slug].astro`
- Add imports at the top: `import DayNav from '../../components/DayNav.astro';`
- Add `<DayNav currentDay={entry.data.day} />` after the article content
- Add `<Sidebar />` somewhere in the layout (before or after the article)
- Save with `:w`

---

## What's Next

Once you've committed Day 4:
- Check off the "Today's Score" checklist
- Day 5 introduces visual mode (`v`, `V`, `Ctrl-v`)
- Day 5 also brings Tailwind styling and a dark mode toggle
- Visual mode lets you select before operating (different from text objects, but complementary)

You've now covered:
- **Day 1:** Motions (navigation)
- **Day 2:** Insert modes (entering/exiting)
- **Day 3:** Operators (transforming text)
- **Day 4:** Text objects (structural selection)

These four pillars form the complete Vim grammar. Days 5-7 reinforce and extend them. You're over halfway through the foundation week.

---

[← Day 4: Text Objects](index.md) | [Day 5: Visual Mode & Selection →](../day-05/index.md)
