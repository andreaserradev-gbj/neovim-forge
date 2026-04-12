---
day: 11
title: "Buffers & Windows"
phase: 2
summary: "Master multiple open files and split-screen editing"
vim_skills: ["<C-h/j/k/l>", "<leader>-", "<leader>|", "<leader>wd", "<C-Up/Down/Left/Right>", "<S-h>/<S-l>", "<leader>bd", "<leader>bo", "<leader>bp", "bufferline"]
plugin_focus: "bufferline.nvim"
app_milestone: "Multi-panel layout (lesson + exercise side-by-side view)"
estimated_time: "55-70 min"
prerequisites: ["day-10"]
---

[← Day 10: The Explorer](../day-10/index.md) | [Course Index](../../COURSE.md) | [Day 12: Find Everything →](../day-12/index.md)


## Today's Vim Skills

### Buffers vs. Windows vs. Tabs

Before diving into keybindings, let's clarify three concepts that confuse many vim learners:

**Buffer:** An open file in memory. It exists even if you're not looking at it.

**Window:** A view of a buffer. One buffer can be displayed in multiple windows. You see the file in the window.

**Tab:** A collection of windows. Most vim users don't use tabs much—buffers and windows are more powerful.

Think of it this way:
- You open three files: `file1.txt`, `file2.txt`, `file3.txt`. You now have three **buffers**.
- You split the screen horizontally. Now you have two **windows**, each showing a buffer.
- The tab contains both windows.

Vim's approach: focus on buffers and windows. Tabs are less useful in modern vim.

### Window Navigation: `<C-h/j/k/l>`

Use Ctrl+hjkl to move between windows:

- `<C-h>` — focus window to the left
- `<C-j>` — focus window below
- `<C-k>` — focus window above
- `<C-l>` — focus window to the right

These are the same hjkl directions you use for character navigation, just with Ctrl held down. They form a natural extension of your movement vocabulary.

### Window Splitting: `<leader>-` and `<leader>|`

**`<leader>-` — horizontal split (split current window top/bottom)**

Press Space, then minus. The current window splits horizontally. The new window shows the same buffer as the old one (you're viewing the file in two places). You can move between the windows with `<C-j>` and `<C-k>`.

**`<leader>|` — vertical split (split current window left/right)**

Press Space, then pipe (Shift+backslash on most keyboards). The current window splits vertically. Again, both windows show the same buffer initially. Move between them with `<C-h>` and `<C-l>`.

### Window Resizing: `<C-Up/Down/Left/Right>`

After splitting, you might want to resize windows:

- `<C-Up>` — increase height of current window
- `<C-Down>` — decrease height
- `<C-Left>` — decrease width
- `<C-Right>` — increase width

Press and hold to continuously resize, or tap to resize by small increments.

### Buffer Navigation: `<S-h>/<S-l>`

**`<S-h>` — previous buffer (Shift+h)**

Jump to the previous buffer in your buffer list. If you have files A, B, C open and you're viewing C, `<S-h>` takes you to B.

**`<S-l>` — next buffer (Shift+l)**

Jump to the next buffer. From B, `<S-l>` takes you to C.

These are different from `<leader>bb` (alternate buffer, which jumps to the last file you viewed). `<S-h/l>` navigate the buffer list in order.

### Buffer Management: `<leader>bd`, `<leader>bo`, `<leader>bp`

**`<leader>bd` — delete buffer (close current file)**

Close the current buffer without closing the window. If you're in a split, the window stays open but shows a different buffer.

**`<leader>bo` — delete other buffers**

Close all buffers except the current one. Useful when you've opened many files and want to clean up.

**`<leader>bp` — pin buffer (keep buffer)**

Mark a buffer as pinned so it won't be closed by `:bdelete` or other operations. Advanced feature, less commonly used.

### Bufferline Plugin

Bufferline is a plugin that shows your open buffers as tabs at the top of the editor. Each open buffer gets a tab, and the current buffer's tab is highlighted. You can:

- Click a tab to switch to that buffer
- Right-click to close a buffer
- See all open files at a glance

This is visual confirmation of your buffer state.

### Key Bindings Summary

| Binding | Effect | Context |
|---------|--------|---------|
| `<C-h>` | Focus left window | Any window |
| `<C-j>` | Focus down window | Any window |
| `<C-k>` | Focus up window | Any window |
| `<C-l>` | Focus right window | Any window |
| `<leader>-` | Horizontal split | Any buffer |
| `<leader>\|` | Vertical split | Any buffer |
| `<leader>wd` | Close window | Any window |
| `<C-Up>` | Increase window height | Any window |
| `<C-Down>` | Decrease window height | Any window |
| `<C-Left>` | Decrease window width | Any window |
| `<C-Right>` | Increase window width | Any window |
| `<S-h>` | Previous buffer | Any buffer |
| `<S-l>` | Next buffer | Any buffer |
| `<leader>bd` | Delete buffer | Any buffer |
| `<leader>bo` | Delete other buffers | Any buffer |

### Mental Model: Flexible Multi-View Editing

The key insight: **split windows let you see multiple parts of your code simultaneously.** This is powerful for:

- Comparing two functions side-by-side
- Viewing a file and its tests at once
- Editing a template and its styles together
- Having a reference file open while you code

Unlike tabs (which are sequential), windows are spatial. You can arrange them however you want.

---

## Drills

### Drill 1: Window Navigation (3 min)

1. Open Neovim with a file:
   ```bash
   nvim app/src/pages/index.astro
   ```

2. Split horizontally: `<leader>-`
3. You now have two windows stacked vertically. You're in the bottom one.
4. Press `<C-k>` (focus up window). The cursor moves to the top window.
5. Press `<C-j>` (focus down window). Back to the bottom.
6. Repeat 10 times, alternating between windows with `<C-k>` and `<C-j>`.
7. Time yourself. Can you do 10 switches in under 10 seconds?

**Expected outcome:** Window navigation is reflexive. You don't think about it.

### Drill 2: Vertical Splits (3 min)

1. Start with a single window showing a file.
2. Split vertically: `<leader>|`
3. You now have two windows side-by-side.
4. Press `<C-h>` (focus left window).
5. Press `<C-l>` (focus right window).
6. Repeat 10 times.

**Expected outcome:** Left-right navigation is as easy as up-down.

### Drill 3: Multiple Splits (5 min)

1. Start with a file.
2. Split horizontally: `<leader>-`. Now you have top and bottom windows.
3. Focus the top window: `<C-k>`.
4. Split that window vertically: `<leader>|`. Now you have three windows: top-left, top-right, bottom.
5. Navigate between all three using `<C-hjkl>`. Test all four directions.
6. Verify you can reach each window from each other window.

**Expected outcome:** You've created a complex window layout and can navigate it smoothly.

### Drill 4: Resizing Windows (3 min)

1. Open a split (horizontal or vertical).
2. Try resizing: `<C-Up>` to increase height, `<C-Down>` to decrease.
3. Try sideways: `<C-Left>` and `<C-Right>`.
4. Make your windows very asymmetrical (one huge, one tiny).
5. Resize them back to equal.

**Expected outcome:** You can adjust window sizes to fit your viewing preferences.

---

## Build: Multi-Panel Layout

### What You're Building

A layout component that renders lesson content and exercises side-by-side. This demonstrates window splitting in action and improves the learning experience—you can read instructions and write exercises simultaneously.

### Step-by-Step

#### Step 1: Create a Two-Column Layout Component

Create `app/src/components/LessonLayout.astro`:

```astro
---
interface Props {
  title: string;
  lessonContent: string; // HTML content
  exerciseContent: string; // HTML content
}

const { title, lessonContent, exerciseContent } = Astro.props;
---

<div class="lesson-layout">
  <h1>{title}</h1>
  <div class="split-container">
    <aside class="lesson-panel">
      <h2>Lesson</h2>
      <div class="content" set:html={lessonContent} />
    </aside>
    <aside class="exercise-panel">
      <h2>Exercises</h2>
      <div class="content" set:html={exerciseContent} />
    </aside>
  </div>
</div>

<style>
  .lesson-layout {
    width: 100%;
  }

  .split-container {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    min-height: 600px;
  }

  .lesson-panel,
  .exercise-panel {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    background: var(--color-bg-secondary);
    border-radius: 8px;
    border: 1px solid var(--color-border);
  }

  .lesson-panel h2,
  .exercise-panel h2 {
    margin-top: 0;
    font-size: 1.1rem;
    color: var(--color-primary);
  }

  .content {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 1200px) {
    .split-container {
      flex-direction: column;
      gap: 1.5rem;
      min-height: auto;
    }

    .lesson-panel,
    .exercise-panel {
      max-height: 400px;
    }
  }
</style>
```

#### Step 2: Create a Day Page with Lesson + Exercises

Update or create a new day page that combines lesson and exercises. First, you'll need a way to load both files.

Create `app/src/pages/day/[slug]/index.astro` (note: this replaces the single `[slug].astro` file):

```astro
---
import { getCollection, render } from "astro:content";
import Base from "../../../layouts/Base.astro";
import FileTree from "../../../components/FileTree.astro";
import Breadcrumb from "../../../components/Breadcrumb.astro";
import LessonLayout from "../../../components/LessonLayout.astro";

const { slug } = Astro.params;
const days = await getCollection("day");
const exercises = await getCollection("exercises");

const day = days.find((d) => String(d.data.day).padStart(2, "0") === slug);
if (!day) return Astro.redirect("/404");

const dayExercises = exercises.find((e) => e.data.day === day.data.day);

const { Content: DayContent } = await render(day);
const exerciseContent = dayExercises ? (await render(dayExercises)).Content : null;
---

<Base title={day.data.title}>
  <div class="layout">
    <FileTree currentDay={day.data.day} />
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Days", href: "/days/" },
          { label: `Day ${day.data.day}`, href: "" },
        ]}
      />
      {
        exerciseContent ? (
          <LessonLayout
            title={day.data.title}
            lessonContent={<DayContent />}
            exerciseContent={<exerciseContent />}
          />
        ) : (
          <article>
            <h1>{day.data.title}</h1>
            <p class="summary">{day.data.summary}</p>
            <DayContent />
          </article>
        )
      }
    </main>
  </div>
</Base>

<style>
  .layout {
    display: flex;
  }

  main {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  .summary {
    color: var(--color-text-secondary);
    margin: 1rem 0 2rem 0;
  }
</style>
```

#### Step 3: Configure Content Collection for Exercises

Update `app/src/content/config.ts` to include exercises:

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ... existing collections ...

const exercises = defineCollection({
  loader: glob({ pattern: "*/exercises.md", base: "../course" }),
  schema: z.object({
    day: z.number(),
    title: z.string(),
    type: z.literal("exercises"),
  }),
});

export const collections = { day, exercises, reference };
```

#### Step 4: Test the Layout

Run the dev server and navigate to a day page (e.g., `/day/11/`). You should see:
- Lesson content on the left
- Exercises on the right
- Both panels scrollable independently
- Responsive layout (stacks on smaller screens)

### Stretch Goal

Add a "Focus" toggle that hides one panel and expands the other for full-screen reading:

```astro
<button onclick="document.body.classList.toggle('focus-lesson')">
  Focus Lesson
</button>
```

---

## Checkpoint

**Commit message:** `day-11: add multi-panel layout with split view`

**Your commit should include:**

- [ ] `app/src/components/LessonLayout.astro` — two-column layout component
- [ ] `app/src/pages/day/[slug]/index.astro` — day page with multi-panel layout
- [ ] Updated `app/src/content/config.ts` — exercises collection schema (if using exercises)

**Validation**

- [ ] Components render without errors
- [ ] Day pages show lesson and exercises side-by-side
- [ ] Layout is responsive (stacks on smaller screens)
- [ ] Both panels are scrollable
- [ ] No TypeScript errors

**Self-Check**

1. Used `<C-hjkl>` to navigate between multiple windows
2. Used `<leader>-` to create horizontal splits
3. Used `<leader>|` to create vertical splits
4. Used `<C-Up/Down/Left/Right>` to resize windows
5. Made all edits using vim motions

---

## Today's Score

- [ ] I opened a split with `<leader>-` (horizontal)
- [ ] I opened a split with `<leader>|` (vertical)
- [ ] I navigated between windows using `<C-hjkl>`
- [ ] I resized windows using `<C-Up/Down/Left/Right>`
- [ ] I understand the difference between buffers and windows
- [ ] I used `<S-h>` and `<S-l>` to navigate the buffer list
- [ ] I closed a buffer with `<leader>bd`
- [ ] I closed other buffers with `<leader>bo`
- [ ] The app now renders lesson and exercises side-by-side
- [ ] I built the multi-panel layout using vim motions

**Reflection:** When would you use split windows vs. tab switching? What's the advantage of seeing two parts of your project simultaneously?

---

**Day 11 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 12: Find Everything →](../day-12/index.md)
