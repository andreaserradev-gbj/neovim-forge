---
day: 27
title: "AI-Assisted Editing"
phase: 4
summary: "Integrate GitHub Copilot into your Vim workflow — let AI suggest, you review and refine"
vim_skills: ["Tab", "Escape", "<C-]>", "copilot-cycle", "copilot-panel"]
plugin_focus: "copilot.lua"
app_milestone: "AI-assisted features page documenting workflow tips"
estimated_time: "45-60 min"
prerequisites: ["day-26"]
---

[← Day 26: Todos & Custom Keys](../day-26/index.md) | [Course Index](../../COURSE.md) | [Day 28: Week 4 Review →](../day-28/index.md)


## Today's Vim Skills

### GitHub Copilot in Neovim

Copilot suggests code as you type. It's not perfect, but it's often useful.

**Using Copilot:**

- Start typing a function, class, or comment
- Copilot suggests completion (ghost text, shown lightly)
- `Tab` — accept the suggestion
- `Escape` or `<C-]>` — dismiss the suggestion
- `<C-]>` or custom key — cycle through alternatives if multiple suggestions exist
- `<leader>cp` — open Copilot panel (if configured)

**Best practices:**

1. **Let it suggest, but review critically** — Copilot can be wrong
2. **Use on familiar patterns** — Function bodies, test cases, repetitive code
3. **Verify logic** — Don't trust security-sensitive or complex logic
4. **Refine with Vim skills** — Accept, then edit with d/c/y as needed

**Mental model:** Copilot is a co-pilot, not an autopilot. It speeds up typing for obvious patterns, but you remain in control. You review, edit, and refine.

---

## Drills

### Drill 1: Accepting Suggestions (5 min)

Open a code file. Start typing a function:

```typescript
function fetchUserData(
```

Copilot will likely suggest the rest of the function. Press `Tab` to accept. Then immediately edit with `dif` to change the body, `cic` to rename, etc.

**Goal:** Get comfortable with the accept → refine → move on rhythm.

---

### Drill 2: Dismissing Bad Suggestions (5 min)

Type incomplete code and trigger a bad suggestion (on purpose). Press `Escape` to dismiss. Start fresh.

This builds the habit of rejecting suggestions that don't match your intent.

---

## Build: AI Features Documentation

Create `app/src/pages/ai-features.md`:

```mdx
---
title: "AI-Assisted Features"
layout: "../layouts/Base.astro"
---

# AI-Assisted Features in Neovim

## GitHub Copilot Integration

This course uses GitHub Copilot to assist with code suggestions.

### Workflow

1. **Type a comment or start code:** `// Fetch user data from API`
2. **Copilot suggests:** Ghost text appears
3. **Review:** Does the suggestion match your intent?
4. **Accept or dismiss:**
   - `Tab` — accept
   - `Escape` — dismiss
   - `<C-]>` — cycle alternatives
5. **Refine:** Use Vim skills to edit the suggestion

### Best Practices

- Use on repetitive patterns (test cases, boilerplate)
- Review suggestions carefully, especially for logic
- Don't trust Copilot for security-sensitive code
- Refine suggestions with Vim editing (faster than retyping)

### Limitations

- Copilot can hallucinate (generate plausible-looking but wrong code)
- Performance code might not be optimal
- Complex algorithms might need manual implementation
- Context window is limited (can't always see your full codebase)

## Ethical Considerations

Copilot is trained on public code. Using it means:
- You should review and understand all suggestions
- Always attribute help from Copilot in comments if needed
- Some organizations have policies about AI-generated code
- Respect licenses of code in the training set

## The Keyboard-Driven Approach

The best use of Copilot is when you can:
1. Quickly accept/dismiss with `Tab`/`Escape`
2. Immediately refine with Vim motions
3. Maintain full control without context-switching

This is only possible on the keyboard. With a mouse, the friction makes Copilot less useful.

## Tips for Maximum Productivity

- **Context comments:** Write clear comments; Copilot uses them to suggest
- **Named functions:** Use descriptive function names; Copilot infers intent
- **Partial code:** Type the start of a pattern, let Copilot complete
- **Verify first:** Don't accept and move on; review at least the first 2 lines
```

---

## Checkpoint

**Commit message:** `day-27: add ai features page`

**Your commit should include:**

- [ ] `app/src/pages/ai-features.md` — New page documenting Copilot workflow

---

## Today's Score

- [ ] I accepted a Copilot suggestion with `Tab`
- [ ] I dismissed a suggestion with `Escape`
- [ ] I cycled alternatives with `<C-]>`
- [ ] I reviewed suggestions before accepting
- [ ] I created the AI features documentation page
- [ ] I understand the limitations of AI assistance

**Reflection:** When is AI-assisted coding helpful? When is manual coding better?

---

**Day 27 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 28: Week 4 Review →](../day-28/index.md)
