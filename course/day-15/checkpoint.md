[← Day 15: LSP Superpowers](index.md) | [Course Index](../../COURSE.md)

# Day 15 Checkpoint

## Commit Message
```
day-15: add typescript types and interfaces
```

## Files to Include

Your commit should add or modify:

- [ ] `app/src/lib/types.ts` — New file with Day, Exercise, and Challenge interfaces
- [ ] `app/src/lib/sample-data.ts` — New file with sample data validating the types

## Validation Steps

1. **Type Checking Passes**
   ```bash
   cd app
   npm run typecheck
   ```
   or
   ```bash
   npx tsc --noEmit
   ```
   Should output no errors.

2. **LSP Navigation Works**
   - Open `app/src/lib/types.ts`
   - Position cursor on the `Day` interface name
   - Press `gd` — should jump to (or stay near) the declaration
   - Position cursor on `Challenge`
   - Press `gr` — a picker should appear showing references
   - These commands should not error

3. **Hover Documentation Works**
   - In either types file, press `K` on any symbol
   - A floating window should appear showing the type or docs
   - No timeout or error

4. **Type Definitions Are Complete**
   - `Day` interface has at least 8 fields (day, title, phase, summary, vim_skills, plugin_focus, app_milestone, estimated_time, prerequisites)
   - `Exercise` interface has at least 4 fields (title, description, skills, estimated_time)
   - `Challenge` interface has at least 10 fields (id, week, day, title, type, description, startingCode, expectedCode, optimalKeystrokes, hints, skills)

5. **Sample Data Uses the Types**
   - `sample-data.ts` imports from `types.ts`
   - At least one sample of each type is created (sampleDay, sampleExercise, sampleChallenge)
   - All samples match their interface definitions (types are correct)

## Self-Assessment

Before pushing, check:

- [ ] I understand what LSP is and why it's useful for code navigation
- [ ] I successfully used `gd` to jump to definitions in my own code
- [ ] I used `gr` to find references and navigated the picker
- [ ] I pressed `K` to hover and read type information
- [ ] I used `<leader>cr` to rename a symbol and saw it update across files
- [ ] My TypeScript interfaces accurately describe the course data structures
- [ ] Type checking passes with zero errors
- [ ] The commit message starts with `day-15:`

## Notes

- LSP must be configured for TypeScript in your Neovim setup. If `gd`, `gr`, or `K` don't work, check that `nvim-lspconfig` is installed and `typescript-language-server` is available. (It should be if you're following LazyVim defaults.)
- If you see "No references" when pressing `gr`, that's OK — it means the symbol isn't referenced elsewhere in the indexed files yet.
- `<leader>cr` will prompt you for a new name. If it doesn't work, ensure LSP is active and your cursor is on a symbol.

---

[← Day 15: LSP Superpowers](index.md) | [Day 16: Diagnostics & Notifications →](../day-16/index.md)
