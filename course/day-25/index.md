---
day: 25
title: "Project-Wide Replace"
phase: 4
summary: "Transform your entire codebase with grug-far.nvim — find and replace with precision and preview"
vim_skills: ["<leader>sr", "grug-far patterns", "grug-far regex", "quickfix-list", ":copen", ":cnext", ":cprev"]
plugin_focus: "grug-far.nvim"
app_milestone: "Major refactoring exercise — rename a core component and all references using grug-far"
estimated_time: "50-60 min"
prerequisites: ["day-24"]
---

[← Day 24: Advanced Text Objects](../day-24/index.md) | [Course Index](../../COURSE.md) | [Day 26: Todos & Custom Keys →](../day-26/index.md)


## Today's Vim Skills

### grug-far.nvim: Find & Replace

grug-far is a visual search-and-replace plugin that previews changes before applying them. It replaces the need for manual `:%s/old/new/g` when you want to see what you're changing.

**Opening grug-far:**

- `<leader>sr` — open search/replace interface (splits the window)

Once open, you'll see:
- Left: Search pattern input field
- Right: Preview pane showing matches
- Bottom: Results and file list

**Workflow:**

1. Type your search pattern in the left field (regex or literal string)
2. grug-far highlights all matches in the preview
3. Type your replacement pattern
4. Review the changes (you see a diff before committing)
5. Press your confirm key (default `:q` or similar) to apply
6. Changes are applied across all matched files

**Features:**

- **Live preview:** As you type the pattern, matches update in real-time
- **Regex support:** Full regex patterns like `(component)\(([^)]*)\)` to capture groups
- **File filtering:** Restrict search to specific file globs: `*.tsx`, `src/**/*.ts`, etc.
- **Diff view:** See exactly what will change before applying
- **Undo:** If you apply changes, you can `u` (undo) in Vim as usual

**Mental model:** grug-far is safer and more visual than `:s//g`. You see matches highlighted before you commit to the change. For refactoring across a large codebase, this gives you confidence.

### Quickfix List

When you search or run tools that produce results, Vim populates the quickfix list:

- `:copen` — open the quickfix list in a window
- `:cclose` — close the quickfix window
- `:cnext` — jump to the next result in the list
- `:cprev` — jump to the previous result
- `:cc {number}` — jump to a specific result

The quickfix list is useful when you want to iterate through all matches manually.

### Key Bindings Summary

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>sr` | Open search/replace | grug-far interface |
| `(in grug-far)` Type pattern | Search for text | Regex or literal |
| `(in grug-far)` Type replacement | Replace with text | Supports capture groups |
| `(in grug-far)` Confirm | Apply changes | Usually `:q` or `<CR>` |
| `:copen` | Open quickfix list | View all search results |
| `:cnext` | Next result | Jump to next match location |
| `:cprev` | Previous result | Jump to previous match |
| `:cfdo {cmd}` | Run command on all results | Batch operations |

---

## Drills

### Drill 1: Basic Find & Replace with grug-far (5 min)

Open `course/day-25/index.md` (this file).

**Task sequence:**

1. Press `<leader>sr` to open grug-far
2. Type search pattern: `Vim Skills` (literal string, no regex)
3. Observe: grug-far highlights all matches
4. Type replacement: `Neovim Skills`
5. Review the preview pane — you'll see the before/after
6. Confirm the change (check grug-far docs for exact keybinding)
7. Undo with `u` if you want to revert

**Challenge:** Complete the search and replace in under 30 seconds.

**Expected outcome:** grug-far feels safer than `:s` because you see the preview first.

---

### Drill 2: Regex Patterns (5 min)

Use grug-far with regex to match and replace complex patterns.

Open the same file.

**Task sequence:**

1. Open grug-far: `<leader>sr`
2. Type regex pattern: `day-(\d+)` (matches "day-" followed by digits)
3. Observe matches in the preview
4. Type replacement: `day-0$1` (adds a leading zero: "day-01", "day-02", etc.)
5. Review and confirm

**Challenge:** Write a regex that matches function declarations and replace them.

**Expected outcome:** Regex find/replace lets you do sophisticated transformations.

---

### Drill 3: Filtering by File Glob (5 min)

grug-far lets you restrict searches to certain files.

**Task sequence:**

1. Open grug-far: `<leader>sr`
2. Search for: `export`
3. In the file filter field, type: `*.tsx` (or `**/*.ts` for all TypeScript)
4. grug-far now only shows matches in those files
5. Observe how results are filtered

**Challenge:** Search for a pattern in only `.md` files, then only in `src/components/`.

**Expected outcome:** File filtering makes large refactorings precise. You affect only the files you intend.

---

## Build: Component Rename Refactoring

### What You're Building

Rename a component across your entire codebase using grug-far:

1. **Original component:** LargeCard (created Day 24)
2. **New name:** ProductCard
3. **Update:** File name, export, imports, and references everywhere using grug-far

This is a realistic refactoring you'd do in production code.

### Step-by-Step

#### Step 1: Rename the Component File

In the terminal (or in Vim with `:!`):

```bash
mv app/src/components/LargeCard.astro app/src/components/ProductCard.astro
```

Or do it in Vim:
1. Open file explorer: `<leader>e`
2. Navigate to LargeCard.astro
3. Press `r` to rename (if using snacks explorer)
4. Type new name: `ProductCard.astro`

#### Step 2: Update the Component Name and Export

Open the renamed file: `nvim app/src/components/ProductCard.astro`

Change the component name if it's exported or documented:

```astro
// Change if there's a comment or JSDoc
// export component ProductCard
```

#### Step 3: Find and Replace All References

Now use grug-far to find every reference to "LargeCard" and replace with "ProductCard":

1. Open grug-far: `<leader>sr`
2. Search pattern: `LargeCard` (case-sensitive literal)
3. Replacement: `ProductCard`
4. File filter: `*.tsx`, `*.ts`, `*.astro`, `*.md` (all relevant file types)
5. Review the matches — you should see imports and usage
6. Confirm the replacement

grug-far will:
- Update all imports: `import LargeCard from ...` → `import ProductCard from ...`
- Update all usages: `<LargeCard />` → `<ProductCard />`
- Update any comments or documentation mentioning the old name

#### Step 4: Verify No Broken References

Run TypeScript check:

```bash
cd app && npx tsc --noEmit
```

Should have no errors. If there are any lingering references (e.g., string names), handle them manually.

#### Step 5: Build and Test

```bash
npm run dev
```

Navigate your app to make sure it still works. If the renamed component was used, verify it renders correctly.

---

## Checkpoint

**Commit message:** `day-25: complete project-wide refactoring exercise`

**Your commit should include:**

- [ ] `app/src/components/ProductCard.astro` — Renamed from LargeCard
- [ ] All files with updated imports (e.g., pages using ProductCard)
- [ ] No broken TypeScript references

**Validation**

CI will check:
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] App builds (`npm run build`)
- [ ] Commit message starts with `day-25:`

**Self-Check**

Before committing:

1. **TypeScript:** `npx tsc --noEmit` — no errors
2. **Search:** Use `<leader>/` or `/LargeCard` to search for any remaining old names
3. **Verification:** Did you update all imports, usages, and references?

---

## Today's Score

- [ ] I opened grug-far with `<leader>sr`
- [ ] I wrote a search pattern and saw it highlighted
- [ ] I wrote a replacement pattern
- [ ] I reviewed the diff before applying
- [ ] I used grug-far to rename a component across the codebase
- [ ] I used file filtering to restrict the search
- [ ] I verified the refactoring with TypeScript
- [ ] All references to the old name were updated

**Reflection:** How did grug-far compare to find-and-replace in other editors? Would you use it for large refactorings in production?

---

**Day 25 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 26: Todos & Custom Keys →](../day-26/index.md)
