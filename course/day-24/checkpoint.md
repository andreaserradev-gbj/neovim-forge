[← Day 24: Advanced Text Objects](index.md) | [Course Index](../../COURSE.md)

# Day 24 Checkpoint

## Commit Message

```
day-24: refactor components using text objects
```

---

## Expected Files

Your commit should include:

- [ ] `app/src/components/LargeCard.astro` — Refactored to use CardHeader and CardFooter
- [ ] `app/src/components/CardHeader.astro` — Extracted header component
- [ ] `app/src/components/CardFooter.astro` — Extracted footer component
- [ ] Optional: `app/src/components/CardBody.astro` — If extracted in Exercise 3

---

## Validation

CI will check:

- [ ] All component files exist
- [ ] TypeScript compiles with no errors
- [ ] App builds successfully
- [ ] Commit message starts with `day-24:`

---

## Self-Check

1. **TypeScript:** `cd app && npx tsc --noEmit` — no errors
2. **Build:** `npm run dev` — app starts cleanly
3. **Refactoring:** You extracted components using `vao`, `daf`, `yau`, or similar text objects
4. **Vim motions:** All edits used text objects, not mouse selection

---

## Commit Steps

```bash
git add app/src/components/LargeCard.astro
git add app/src/components/CardHeader.astro
git add app/src/components/CardFooter.astro
git commit -m "day-24: refactor components using text objects"
git push
```

---

## Today's Score

- [ ] I can select code blocks with `io`/`ao`
- [ ] I can select functions with `af` and bodies with `if`
- [ ] I can select function calls with `iu`/`au`
- [ ] I extracted components using text objects
- [ ] TypeScript validation passed
- [ ] I used text objects (not mouse) for all refactoring

**Reflection:** Did text objects make refactoring faster and more confident?

---

[← Day 24: Advanced Text Objects](index.md) | [Day 25: Project-Wide Replace →](../day-25/index.md)
