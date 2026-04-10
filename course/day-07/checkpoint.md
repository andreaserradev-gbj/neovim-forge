[← Day 7: Week 1 Review](index.md) | [Course Index](../../COURSE.md)

# Day 7 Checkpoint

## Commit Message

```
day-07: add progress dashboard and complete week 1
```

```bash
git add app/src/pages/progress.astro app/src/pages/index.astro
git commit -m "day-07: add progress dashboard and complete week 1"
git push
```

---

## Expected Files

- [ ] `app/src/pages/progress.astro` — Progress dashboard showing Week 1 completion
- [ ] `app/src/pages/index.astro` — Updated with link to progress page

### File Contents

#### progress.astro should contain:
- Fetches all Phase 1 days from content collection
- Displays a progress bar (shows all 7/7 days completed)
- Shows "Week 1 Complete!" badge
- Lists all Week 1 days with links to each day
- Basic styling with progress bar, badge styling, day list layout

#### index.astro should contain:
- New link to `/progress` page (e.g., "View your progress")

---

## Validation

CI checks:
- [ ] Progress page exists with valid Astro syntax
- [ ] Fetches Phase 1 days correctly
- [ ] Progress bar and badge render
- [ ] Day links are formatted correctly
- [ ] No build errors: `npm run build`
- [ ] App runs: `npm run dev`
- [ ] Commit message starts with `day-07:`

---

## Self-Check

### 1. Dashboard Displays Correctly

- Navigate to `/progress`
- See a progress bar showing 7/7 (or 7/7 if all days exist)
- See "Week 1 Complete!" badge
- See all 7 days listed with links

### 2. Links Work

- Click on any day in the progress page
- Navigate to `/day/day-XX` correctly
- Can go back and click other days

### 3. Navigation

- Homepage has link to `/progress`
- Progress page is discoverable from homepage

---

## Commit Steps

```bash
git status
git add app/src/pages/progress.astro
git add app/src/pages/index.astro
git commit -m "day-07: add progress dashboard and complete week 1"
git push
```

---

## Week 1 Complete!

You've now learned:

**Vim Skills:**
- All navigation motions (hjkl, w/b/e, 0/^/$, gg/G, f/t)
- All insert modes (i/a/I/A/o/O)
- All operators (d/c/y) and how they compose with motions, text objects, and counts
- All text objects (iw, aw, i", a", etc.)
- All visual modes (v, V, Ctrl-v)
- Search and replace (/, ?, :s, :%s)
- Undo/Redo and the dot command

**App Features:**
- Homepage with welcome content
- Base layout with consistent structure
- Dynamic day pages rendering MDX content
- Day listing page showing all 30 days
- Day navigation component (prev/next)
- Sidebar with day links
- Search/filter component on days page
- Tailwind styling and dark mode toggle
- Progress dashboard

**Physical Skills (especially on Corne):**
- Muscle memory for home-row navigation
- Reflex-level insert mode entry/exit
- Automatic operator usage
- Fluent text object selection
- Visual mode for complex selections
- Search navigation without thinking
- J+K Escape (on Corne) as automatic as physical Escape

---

## What's Next: Week 2 Preview

Week 2 shifts from **Vim fundamentals** to **LazyVim ecosystem**. You'll learn:

- **Leader key** (Space) and which-key plugin (organized keybindings)
- **Flash.nvim** (jump to any visible text with 's')
- **File explorer** (navigate project structure)
- **Buffers & windows** (working with multiple files)
- **Snacks picker** (fuzzy file/text search)
- **LSP basics** (go to definition, hover info)

The Vim grammar you learned this week will apply immediately. You'll just be learning *where the keys are* in LazyVim, not *how to think about editing* — that's already second nature.

---

## Celebration

You've completed **7 days** of intensive Vim training. You've learned the language, built muscle memory, and created a working web application entirely in Neovim.

How does Vim feel now compared to Day 1? You've gone from learning hjkl to composing multi-key operations fluidly. That's massive progress.

Take a moment. You deserve it. Week 2 brings power features, but you've already mastered the hardest part: the mental model and reflexes.

On to Week 2.

---

[← Day 7: Week 1 Review](index.md) | [Day 8: The Leader Key →](../day-08/index.md)
