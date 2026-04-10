---
day: 28
title: "Week 4 Review"
phase: 4
summary: "Combine everything from Week 4 into a cohesive, fast workflow"
vim_skills: ["all-week-4-skills"]
plugin_focus: null
app_milestone: "Feature-complete integration testing"
estimated_time: "60-75 min"
prerequisites: ["day-27"]
---

[← Day 27: AI-Assisted Editing](../day-27/index.md) | [Course Index](../../COURSE.md) | [Day 29: Polish & Deploy →](../day-29/index.md)


## This Week's Skills

**Navigation & Context:**
- Marks & jumps (Day 22)
- Folds for managing complexity (Day 23)

**Editing & Refactoring:**
- Advanced text objects (Day 24)
- Project-wide replace (Day 25)
- Progress tracking with TODOs (Day 26)

**Collaboration & Integration:**
- AI-assisted code suggestions (Day 27)
- Full workflow integration (today)

## The Grand Challenge

Perform a complete edit-compile-test-commit cycle, using as many Week 4 skills as possible:

1. **Navigate** to a file using flash + marks + jump list
2. **Mark** key locations with `m{a-z}`
3. **Fold** the file to see structure: `zM` then `zo` on sections you need
4. **Edit** using advanced text objects: `daf`, `cic`, `yau`
5. **Refactor** using grug-far: `<leader>sr` to rename something
6. **Check progress** with TODOs: `]t` to find remaining work
7. **Open terminal**: `<leader>ft` to run tests
8. **Review diff**: `:!git diff` to see what changed
9. **Commit**: `:terminal git add . && git commit -m "day-28: ..."`

All keyboard-driven. Zero mouse. One fluid workflow.

## Drills

### Drill: Full Workflow Integration

Open your app's main component file.

**Task sequence:**

1. **Navigate:** Use `<leader>ff` to find the file, or `gd` to jump to definition
2. **Mark:** Set a mark at the top: `ma`
3. **Fold:** Close all: `zM`, then selectively open folds with `zo`
4. **Edit:** Make a small change using `daf` or `cic`
5. **Undo:** `u` to undo and practice again
6. **Search/Replace:** Use `<leader>sr` to rename a function
7. **Verify:** `npx tsc --noEmit` in terminal (`<leader>ft`)
8. **Commit:** In terminal, `git add . && git commit -m "day-28: practice workflow"`

---

## Build: Full Integration Testing

Review every component and page you've built:

1. **Component testing:** Do all extracted components (CardHeader, CardBody, etc.) render correctly?
2. **Page testing:** Do all new pages (dev-workflow, keyboard-shortcuts, ai-features) render?
3. **Links:** All navigation links work?
4. **Styling:** Everything looks consistent in light and dark mode?
5. **TypeScript:** `npx tsc --noEmit` passes with zero errors?
6. **Build:** `npm run build` completes successfully?

If anything is broken, fix it using the Week 4 skills.

---

## Checkpoint

**Commit message:** `day-28: complete feature integration and week 4`

**Your commit should include:**

- [ ] All components from Days 22-27 working
- [ ] All pages rendering
- [ ] Zero TypeScript errors
- [ ] App builds successfully

---

## Today's Score

- [ ] I completed a full edit-compile-test cycle
- [ ] I used marks to remember locations
- [ ] I folded to manage complexity
- [ ] I used advanced text objects
- [ ] I used grug-far to refactor
- [ ] I used the terminal for validation
- [ ] I integrated all Week 4 skills into one workflow
- [ ] Everything builds and renders correctly

**Reflection:** Which Week 4 skills felt most powerful? What felt most natural?

---

**Day 28 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 29: Polish & Deploy →](../day-29/index.md)
