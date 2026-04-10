[← Day 6: Search & Destroy](index.md) | [Course Index](../../COURSE.md)

# Day 6 Checkpoint

## Commit Message

```
day-06: add search component and keyword filtering
```

```bash
git add app/src/components/Search.astro app/src/pages/days.astro
git commit -m "day-06: add search component and keyword filtering"
git push
```

---

## Expected Files

- [ ] `app/src/components/Search.astro` — Search input with client-side filtering script
- [ ] `app/src/pages/days.astro` — Updated to include Search and data attributes

### File Contents

#### Search.astro should contain:
- Input element with id="day-search" and placeholder text
- Client-side script that:
  - Gets search input element
  - Queries all day cards with data-day-card attribute
  - Filters cards based on title/summary match
  - Shows/hides cards using display CSS
- Basic styling for input and results

#### days.astro should contain:
- Import of Search component
- Search component rendered above day cards
- Day cards with data attributes:
  - `data-day-card` (marks the card for JavaScript filtering)
  - `data-day-title` (day title for search matching)
  - `data-day-summary` (day summary for search matching)

---

## Validation

CI checks:
- [ ] Search component exists with valid Astro syntax
- [ ] Client-side script is present (querySelector, addEventListener)
- [ ] Days page imports and uses Search component
- [ ] Day cards have required data attributes
- [ ] No build errors: `npm run build`
- [ ] App runs: `npm run dev`
- [ ] Commit message starts with `day-06:`

---

## Self-Check

### 1. Search Functionality Works

- Navigate to `/days`
- Type in the search input (e.g., "visual")
- Day cards filter in real-time
- Only days with "visual" in title or summary appear
- Clear the search → all days reappear

### 2. Search is Case-Insensitive

- Type "VISUAL" (all caps)
- Results still show days containing "visual"
- Case doesn't matter

### 3. Both Title and Summary are Searchable

- Type a word that appears in titles (e.g., "Day")
- Results include all days (all have "Day" in title)
- Type a word that appears only in summaries (if any)
- Results filter correctly

### 4. All Edits Used Vim Skills from Day 6

Reflect:
- Did you use `/` to search for existing code before copying?
- Did you use `:s` to replace parts of the template?
- Did you use visual mode to select and edit regions?

---

## Commit Steps

```bash
git status
git add app/src/components/Search.astro
git add app/src/pages/days.astro
git commit -m "day-06: add search component and keyword filtering"
git push
```

---

## If Something Goes Wrong

**"Search input doesn't filter anything"**
- Open browser console (F12)
- Check for JavaScript errors
- Verify the data attributes exist on day cards
- Test the JavaScript manually: open console, type `document.querySelectorAll('[data-day-card]')` and check if elements are found

**"Typing in search causes errors"**
- Check browser console for JavaScript syntax errors
- Verify the `addEventListener` code is correct
- Ensure the input value is being read correctly: `e.target.value`

**"Some days don't appear even when search is empty"**
- Make sure the JavaScript sets `display: ''` (not `display: 'block'`) to show hidden elements
- Verify there are no CSS styles hiding cards

**"Search is case-sensitive"**
- The script should use `.toLowerCase()` on both the query and the text being searched
- Check that this method call is present in the JavaScript

---

## What's Next

Day 7: Week 1 Review. This is a lighter day for vim skills (mostly drilling what you've learned) but heavier on consolidation. You'll:

- Create a progress dashboard page
- Drill all Week 1 skills with speed challenges
- Prepare for Week 2 (which starts with LazyVim and plugins)

By the end of Week 1, you'll have:
- Built a functioning course website
- Learned all core Vim skills: motions, operators, text objects, visual mode, search
- Practiced every skill in the context of real editing

You're ready for the power features of Week 2.

---

[← Day 6: Search & Destroy](index.md) | [Day 7: Week 1 Review →](../day-07/index.md)
