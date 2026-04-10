[← Day 25: Project-Wide Replace](index.md) | [Course Index](../../COURSE.md)

# Day 25 Checkpoint

## Commit Message

```
day-25: complete project-wide refactoring exercise
```

---

## Expected Files

Your commit should update:

- [ ] `app/src/components/ProductCard.astro` — Renamed from LargeCard
- [ ] All files importing ProductCard (imports updated)
- [ ] No broken references

---

## Validation

CI will check:

- [ ] No TypeScript errors
- [ ] App builds successfully
- [ ] Commit message starts with `day-25:`

---

## Self-Check

1. **TypeScript:** `npx tsc --noEmit` — no errors
2. **Search:** `/LargeCard` to verify all references changed
3. **Build:** `npm run dev` — app works

---

## Commit Steps

```bash
git add -A
git commit -m "day-25: complete project-wide refactoring exercise"
git push
```

---

## Today's Score

- [ ] I opened grug-far and saw a preview
- [ ] I used regex patterns in find/replace
- [ ] I filtered results by file type
- [ ] I renamed a component across the entire codebase
- [ ] TypeScript validation passed
- [ ] All imports were updated correctly

**Reflection:** How did using grug-far change your confidence in refactoring?

---

[← Day 25: Project-Wide Replace](index.md) | [Day 26: Todos & Custom Keys →](../day-26/index.md)
