---
day: 16
title: "Diagnostics & Notifications"
phase: 3
summary: "Find and fix errors before they break your build — navigate diagnostics, manage notifications"
vim_skills: ["[d", "]d", "[e", "]e", "[w", "]w", "<leader>xx", "<leader>xX", "<leader>cs", "<leader>cS", "<leader>xL", "<leader>xQ", "<leader>snl", "<leader>snh", "<leader>snd"]
plugin_focus: "trouble.nvim, noice.nvim"
app_milestone: "Error boundary component, notification-aware UI (show when builds fail)"
estimated_time: "45-60 min"
prerequisites: ["day-15"]
---

[← Day 15: LSP Superpowers](../day-15/index.md) | [Course Index](../../COURSE.md) | [Day 17: Format & Flow →](../day-17/index.md)


## Today's Vim Skills

### What Are Diagnostics?

Diagnostics are linter errors, type errors, and warnings that LSP provides in real time. As you type TypeScript, the LSP server checks your code and reports issues: "This variable has type `string` but you're passing it to a function that expects `number`" or "This variable is unused."

Vim shows diagnostics as red squiggles (virtual text) in your code. But to fix them, you need to navigate them. That's where these motions come in.

### Navigating Diagnostics: [d, ]d, [e, ]e, [w, ]w

These motions jump between diagnostics in the current buffer:

- `[d` — jump to **previous diagnostic** (any severity)
- `]d` — jump to **next diagnostic** (any severity)
- `[e` — jump to **previous error** (errors only, not warnings)
- `]e` — jump to **next error**
- `[w` — jump to **previous warning** (warnings only)
- `]w` — jump to **next warning**

**Example:** Your file has 3 diagnostics: a type error on line 5, a warning on line 12, and another type error on line 20. You're on line 8.

- Press `]d` to jump to line 12 (next diagnostic, any type)
- Press `]d` again to jump to line 20 (next diagnostic after that)
- Press `[d` to jump back to line 12
- Press `[e` to jump to line 5 (next error going backward)

The difference between `[d`, `[e`, `[w` is filtering: `[d` is "any diagnostic," `[e` is "only errors," `[w` is "only warnings." When you only care about errors (not warnings), use `[e` and `]e` to navigate faster.

### Trouble.nvim: The Diagnostic Browser

Trouble.nvim is a plugin that shows all diagnostics in a split panel. With Trouble open, you see every error and warning in your file at a glance, and you can jump to any one instantly.

The commands are all `<leader>x*`:

- `<leader>xx` — toggle **Trouble diagnostics list** (shows all diagnostics in current buffer)
- `<leader>xX` — toggle **Trouble workspace diagnostics** (shows errors across all open files)
- `<leader>cs` — show **document symbols** (functions, types, variables in current file) in Trouble panel
- `<leader>cS` — show **LSP references** (all references to the symbol under cursor) in Trouble panel
- `<leader>xL` — show **location list** (used by various vim tools to collect positions)
- `<leader>xQ` — show **quickfix list** (another vim construct for collecting errors/matches)

When you open a Trouble panel, it takes over a split. Navigate with `j/k` to select a diagnostic, press Enter to jump to it in the source buffer, and press `?` (inside Trouble) to see more actions.

### Noice.nvim: Notification Management

Noice.nvim captures notifications, messages, and command output and displays them beautifully. More importantly, it lets you review them with vim motions.

Commands are all `<leader>sn*` (sn = search notifications):

- `<leader>snl` — show **last notification** in a popup window
- `<leader>snh` — show **history** of all recent notifications in Noice history panel (like Trouble but for messages)
- `<leader>snd` — **dismiss all** notifications (clears the popups off your screen)

When Noice history opens, you can navigate with `j/k` and press Enter to jump to a notification's source or expand it for more detail.

### Key Bindings Summary

| Motion | Effect | Notes |
|--------|--------|-------|
| `[d` | Previous diagnostic | Any type (error, warning, info) |
| `]d` | Next diagnostic | Any type |
| `[e` | Previous error | Errors only |
| `]e` | Next error | Errors only |
| `[w` | Previous warning | Warnings only |
| `]w` | Next warning | Warnings only |
| `<leader>xx` | Trouble diagnostics | Current buffer |
| `<leader>xX` | Trouble workspace | All open files |
| `<leader>cs` | Document symbols | Functions/types in file |
| `<leader>cS` | LSP references | All references to symbol (from Day 15) |
| `<leader>xL` | Location list | Vim location list view |
| `<leader>xQ` | Quickfix list | Vim quickfix view |
| `<leader>snl` | Last notification | Latest message |
| `<leader>snh` | Notification history | Browse all messages |
| `<leader>snd` | Dismiss all | Clear notifications |

### Mental Model: Workflow With Errors

Here's the real-world flow: You're editing TypeScript. You make a change. Immediately, LSP re-checks and reports 3 new errors. You want to find and fix them.

**Old way (no Vim):** Look at your IDE's error panel, spot the first error, click it, navigate to the code, fix it, repeat.

**Vim way:** Press `]e` to jump to the first error. The cursor is now on the problematic code. You read the error message (shown in the command line or a Noice notification) and fix it. Press `]e` again to jump to the next error. Repeat until `]e` fails to find another error (which means you've reached the end).

The key insight: You're not context-switching to an error panel. The error is presented in context — you see the exact line and the surrounding code. You fix and move on.

---

## Drills

### Drill 1: Create and Navigate Errors (5 min)

Open `app/src/lib/sample-data.ts` (created yesterday):

```bash
nvim app/src/lib/sample-data.ts
```

Introduce a type error intentionally. Change one field to the wrong type:

```typescript
export const sampleDay: Day = {
  day: "one",  // Should be number, not string
  // ... rest of fields
};
```

Save the file. LSP immediately reports an error. Now practice:

1. Press `]e` to jump to the error. Your cursor lands on the `"one"` line.
2. Look at the error message (shown inline or in the command line). It says something like "Type 'string' is not assignable to type 'number'".
3. Fix the error by changing `"one"` back to `1`. Save.
4. Press `]e` again. If there are no more errors, it does nothing (which is the goal).

**Expected outcome:** You're fluent with error navigation. Errors don't panic you — you jump to them and fix them.

### Drill 2: Trouble Diagnostics Panel (5 min)

Keep the file from Drill 1. Re-introduce the same error (change `day: 1` to `day: "one"`).

Now open the Trouble panel: Press `<leader>xx`.

A split panel appears on the left (or another location) showing all diagnostics in the current buffer. You should see your type error listed.

1. In the Trouble panel, use `j/k` to navigate the list.
2. Press Enter on the error to jump to it in the source buffer.
3. The source buffer jumps to the line with the error. Your cursor is on the problematic code.
4. Fix the error. The Trouble panel updates in real time, removing the error from the list.
5. Press `<leader>xx` to close Trouble.

**Expected outcome:** Trouble gives you an overview of all issues at a glance. For small files, it's overkill. For large files with many errors, it's invaluable.

### Drill 3: Workspace Diagnostics (5 min)

Now open `app/src/lib/types.ts` and introduce another type error:

```typescript
export interface Day {
  day: "one";  // Errors — should be number
  // ... rest
}
```

Open workspace diagnostics: Press `<leader>xX`.

The Trouble panel now shows errors from both `types.ts` and `sample-data.ts` (if sample-data still has errors from Drill 1). Navigate with `j/k` and press Enter to jump to any error in any file.

**Expected outcome:** Workspace diagnostics gives you a single view of all errors across your entire project.

### Drill 4: Document Symbols (5 min)

In `app/src/lib/types.ts`, press `<leader>cs` to show all symbols (interfaces, types, exports) in the current file.

The Trouble panel opens showing a list of symbols:

```
Day (interface)
Exercise (interface)
Challenge (interface)
```

Use `j/k` to navigate. Press Enter on any symbol to jump to its definition in the buffer.

**Expected outcome:** Document symbols is your "table of contents" for a file. Great for jumping to a specific function or type without searching.

### Drill 5: Dismiss Notifications (5 min)

As you've been working, Noice has been capturing messages. Open Noice history: Press `<leader>snh`.

A panel appears showing recent notifications (type checks, build messages, etc.). Navigate with `j/k`. Press `<leader>snd` to dismiss all notifications and close the history panel.

**Expected outcome:** You can review and manage the notification stream without letting it distract you.

---

## Build: Error Boundary Component

### What You're Building

Today you'll create an Error Boundary component in React/Astro that wraps your day content. If anything errors (LSP error, type mismatch, missing data), the boundary catches it and displays a fallback UI instead of breaking the whole page.

You'll also add a UI element that shows when the latest type check found errors — something like "Type errors: 3 warnings: 1" so a user knows they need to check their code.

### Step-by-Step

#### Step 1: Create the ErrorBoundary component

Create `app/src/components/ErrorBoundary.astro`:

```bash
cd app
nvim src/components/ErrorBoundary.astro
```

Write a basic Astro component that wraps content:

```astro
---
interface Props {
  title?: string;
}

const { title = "Something went wrong" } = Astro.props;
---

<div class="error-boundary">
  <div class="error-content">
    <h2>{title}</h2>
    <p>An error occurred while rendering this page.</p>
    <details>
      <summary>Details (for developers)</summary>
      <pre><code><slot /></code></pre>
    </details>
  </div>
</div>

<style>
  .error-boundary {
    border: 2px solid #cc0000;
    border-radius: 8px;
    padding: 1rem;
    background-color: #fee;
    margin: 1rem 0;
  }

  .error-content h2 {
    color: #cc0000;
    margin: 0 0 0.5rem 0;
  }

  details {
    margin-top: 1rem;
    font-size: 0.875rem;
  }

  summary {
    cursor: pointer;
    color: #666;
  }

  pre {
    background-color: #f5f5f5;
    padding: 0.5rem;
    border-radius: 4px;
    overflow-x: auto;
  }
</style>
```

#### Step 2: Create a DiagnosticsStatus component

Create `app/src/components/DiagnosticsStatus.astro` — a small widget that shows the number of errors and warnings detected:

```bash
nvim src/components/DiagnosticsStatus.astro
```

```astro
---
interface Props {
  errors?: number;
  warnings?: number;
  lastChecked?: Date;
}

const { 
  errors = 0, 
  warnings = 0, 
  lastChecked = new Date() 
} = Astro.props;
---

<div class="diagnostics-status">
  {errors > 0 && (
    <span class="errors">
      <strong>{errors}</strong> error{errors !== 1 ? 's' : ''}
    </span>
  )}
  {warnings > 0 && (
    <span class="warnings">
      <strong>{warnings}</strong> warning{warnings !== 1 ? 's' : ''}
    </span>
  )}
  {errors === 0 && warnings === 0 && (
    <span class="success">All clear</span>
  )}
  <span class="timestamp">
    Last checked: {lastChecked.toLocaleTimeString()}
  </span>
</div>

<style>
  .diagnostics-status {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #f9f9f9;
    border-radius: 4px;
    font-size: 0.875rem;
  }

  .errors {
    color: #cc0000;
  }

  .warnings {
    color: #ff8800;
  }

  .success {
    color: #00aa00;
  }

  .timestamp {
    color: #999;
    margin-left: auto;
  }
</style>
```

#### Step 3: Use ErrorBoundary in a layout

Open `app/src/layouts/Base.astro` (created in an earlier day, or create it now if it doesn't exist):

```bash
nvim src/layouts/Base.astro
```

Wrap your content with the ErrorBoundary:

```astro
---
import ErrorBoundary from '../components/ErrorBoundary.astro';
import DiagnosticsStatus from '../components/DiagnosticsStatus.astro';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Neovim Forge</title>
</head>
<body>
  <DiagnosticsStatus errors={0} warnings={1} />
  <main>
    <h1>{title}</h1>
    <slot />
  </main>
</body>
</html>
```

#### Step 4: Test with intentional error

Introduce a data error in `app/src/lib/sample-data.ts` that might cause rendering issues (optional field missing):

```typescript
export const sampleDay: Day = {
  day: 1,
  title: "Test",
  phase: 1,
  summary: "Test",
  vim_skills: [],
  plugin_focus: null,
  app_milestone: "Test",
  estimated_time: "45 min",
  // Missing: prerequisites
};
```

If your Day interface requires `prerequisites`, TypeScript will error. This is the diagnostic telling you something is wrong.

#### Step 5: Navigate errors in the app code

Now that you have type errors in your app code:

1. In Neovim, open `app/src/lib/sample-data.ts`.
2. Press `]e` to jump to the type error.
3. Fix it by adding the missing field: `prerequisites: [],`
4. Save.
5. Press `]e` again to confirm there are no more errors.

#### Step 6: Commit

```bash
git add app/src/components/ErrorBoundary.astro app/src/components/DiagnosticsStatus.astro app/src/layouts/Base.astro
git commit -m "day-16: add error boundary and diagnostics ui"
```

### Stretch Goal

If you finish early:

1. Add a "Debug Info" component that shows diagnostic details in development mode only (Astro has an `isDev` flag).
2. Create a utility function `getDiagnosticsForFile(filePath: string)` that reads TypeScript diagnostics from a JSON file and returns them (simulating what a build tool would provide).
3. Implement a refresh button on DiagnosticsStatus that simulates re-running type checks.

---

## Checkpoint

**Commit message:** `day-16: add error boundary and diagnostics ui`

**Your commit should include:**

- [ ] `app/src/components/ErrorBoundary.astro` — Error boundary wrapper component
- [ ] `app/src/components/DiagnosticsStatus.astro` — Diagnostic status widget
- [ ] Modified `app/src/layouts/Base.astro` — Uses both components

**Validation**

Before committing, verify:
1. `cd app && npm run build` succeeds (or `npm run dev` runs without crashes)
2. You used `]e` and `[e` to navigate errors in your own code
3. You opened `<leader>xx` to see the Trouble panel
4. You used `<leader>cs` to see document symbols
5. Type checking passes with `npm run typecheck`

**Self-Check**

- [ ] I can jump between errors with `]e` and `[e`
- [ ] I understand the difference between `]d` (any diagnostic) and `]e` (errors only)
- [ ] I opened Trouble.nvim and navigated diagnostics
- [ ] I used `<leader>cs` to see document symbols
- [ ] I created an ErrorBoundary component that wraps content
- [ ] I created a DiagnosticsStatus component showing errors/warnings
- [ ] The app builds and renders without crashes

---

## Today's Score

- [ ] I jumped between errors using `]e` and `[e`
- [ ] I opened Trouble with `<leader>xx` and navigated the diagnostics list
- [ ] I opened workspace diagnostics with `<leader>xX`
- [ ] I used `<leader>cs` to view document symbols
- [ ] I dismissed notifications with `<leader>snd`
- [ ] I created an ErrorBoundary component
- [ ] I created a DiagnosticsStatus widget
- [ ] The app builds successfully with both components integrated

**Reflection:** How does having errors visible in a list (via Trouble) change your debugging workflow? Does seeing all errors at once help you prioritize?

---

**Day 16 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 17: Format & Flow →](../day-17/index.md)
