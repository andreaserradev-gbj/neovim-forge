---
day: 10
title: "The Explorer"
phase: 2
summary: "Navigate your project's file tree without leaving the editor"
vim_skills: ["<leader>e", "<leader>E", "explorer navigation", "Y (copy path)", "file operations"]
plugin_focus: "snacks.nvim explorer"
app_milestone: "File tree sidebar for course structure, breadcrumb navigation component"
estimated_time: "50-65 min"
prerequisites: ["day-09"]
---

[← Day 9: Flash Navigation](../day-09/index.md) | [Course Index](../../COURSE.md) | [Day 11: Buffers & Windows →](../day-11/index.md)


## Today's Vim Skills

### The Explorer Concept

The **Explorer** is a sidebar that shows your project's file tree. It's like a file browser built into Neovim. You open it, navigate with hjkl, select files with Enter, and close it with `q`. It's faster and more integrated than typing paths or using `<leader>ff` when you want to browse the structure rather than search for a specific file.

Think of it as complementary to Flash and leader keys:

- **Flash (`s`):** Jump to a visible position within a file
- **Leader (`<leader>ff`):** Search for a file by name
- **Explorer (`<leader>e`):** Browse the directory structure and visually explore your project

### Explorer Motions: `<leader>e` and `<leader>E`

**`<leader>e` — Open explorer at project root**

Press Space (leader), then `e`. The explorer opens on the left side showing your project's root directory. You're now in explorer mode where hjkl navigates the tree.

**`<leader>E` — Open explorer at current working directory**

Same as `<leader>e`, but it opens at the current directory (cwd) instead of the project root. Useful if you've navigated into a subdirectory and want to explore from there.

### Explorer Navigation

Once the explorer is open, you're in a special mode where:

- `j` — move down to next item
- `k` — move up to previous item
- `h` — collapse directory (or move to parent)
- `l` — expand directory (or open file)
- Enter — open selected file or toggle directory
- `q` — close explorer
- `.` — toggle hidden files
- `Y` — copy full path of selected item to clipboard
- `c` — create new file
- `d` — delete file or directory
- `r` — rename

These are default keybindings; they may vary depending on your plugin config.

### The Y (Copy Path) Command

One unique explorer feature: `Y` copies the full path of the selected file to your clipboard. This is invaluable for:

- Opening files in other tools
- Adding import statements that know the correct path
- Sharing file paths with teammates

Example: You're in the explorer, you see `app/src/components/DayNav.astro`. Press `Y` to copy `app/src/components/DayNav.astro` to your clipboard.

### File Operations in Explorer

The explorer lets you create, delete, and rename files without leaving Vim:

- `c` — create new file (prompts for name)
- `d` — delete file (requires confirmation)
- `r` — rename file (prompts for new name)

This is useful for quick file management during development. Instead of opening a terminal, you use the vim explorer.

### Mental Model: Structured Navigation

The explorer teaches a mental model: **your project is a tree, and you can navigate it visually.**

This is different from:
- Search (which is good for finding something you know exists)
- Motions (which are good for editing within a file)

The explorer is good for exploration—understanding structure, discovering files you forgot about, and browsing the shape of your codebase.

### Key Bindings Summary

| Binding | Effect | Context |
|---------|--------|---------|
| `<leader>e` | Open explorer at project root | Anywhere |
| `<leader>E` | Open explorer at cwd | Anywhere |
| `j` (in explorer) | Move down | Explorer mode |
| `k` (in explorer) | Move up | Explorer mode |
| `h` (in explorer) | Collapse directory | Explorer mode |
| `l` (in explorer) | Expand directory | Explorer mode |
| Enter (in explorer) | Open file or toggle directory | Explorer mode |
| `q` (in explorer) | Close explorer | Explorer mode |
| `Y` (in explorer) | Copy full path to clipboard | Explorer mode |
| `c` (in explorer) | Create new file | Explorer mode |
| `d` (in explorer) | Delete file | Explorer mode |
| `r` (in explorer) | Rename file | Explorer mode |

---

## Drills

### Drill 1: Explorer Opening (3 min)

Open Neovim in the neovim-forge project:

```bash
nvim .
```

1. Press `<leader>e`. The explorer opens on the left showing your project root.
2. Study the tree structure. You should see directories like `app/`, `course/`, `reference/`, `scripts/`, etc.
3. Use `j` and `k` to move up and down the tree.
4. Move to a directory like `course/`. Press `l` to expand it. You should see day directories.
5. Press `h` to collapse the directory.
6. Press `q` to close the explorer.

**Expected outcome:** Opening and closing the explorer is automatic. Tree navigation feels natural.

### Drill 2: Navigating Nested Directories (5 min)

1. Open the explorer again with `<leader>e`.
2. Navigate down to `course/`.
3. Press `l` to expand `course/`.
4. Move down with `j` to find `day-01/`.
5. Press `l` to expand `day-01/`. You should see `index.md`, `exercises.md`, `corne.md`, `checkpoint.md`.
6. Move to `index.md` and press Enter. The file opens in the main editor window. The explorer closes.
7. Open the explorer again and navigate back to the same location. Can you do it faster this time?

**Expected outcome:** You can navigate nested directories efficiently and open files from the explorer.

### Drill 3: Copy Path (3 min)

1. Open the explorer again.
2. Navigate to a file like `app/src/pages/index.astro`.
3. Position your cursor on that file.
4. Press `Y`. The path is copied to your clipboard.
5. Open a terminal or another app and paste the path. You should see the full path: `app/src/pages/index.astro`.
6. Repeat this 3 times with different files.

**Expected outcome:** The Y command is a quick way to grab a file path. Useful when you need it elsewhere.

### Drill 4: File Operations (3 min)

1. Open the explorer.
2. Navigate to `app/src/pages/`.
3. Press `c` (create new file). A prompt appears asking for a filename.
4. Type: `test.astro`
5. Press Enter. The file is created.
6. The explorer now shows `test.astro` in the list.
7. Position on `test.astro` and press `r` (rename). Rename it to `test-page.astro`.
8. Press `d` (delete). A confirmation appears. Confirm the deletion.
9. The file is removed from the explorer.

**Expected outcome:** File operations within the explorer are fast. You don't need to use your terminal for basic file management.

---

## Build: File Tree Sidebar & Breadcrumb Navigation

### What You're Building

Two UI components:

1. **FileTree sidebar** — shows the course/reference directory structure as a collapsible tree
2. **Breadcrumb navigation** — shows your current location in the structure (e.g., "Home > Days > Day 8 > Lesson")

### Step-by-Step

#### Step 1: Create the FileTree Component

Create `app/src/components/FileTree.astro`:

```astro
---
import { getCollection } from "astro:content";

const days = (await getCollection("day")).sort(
  (a, b) => a.data.day - b.data.day
);
const references = await getCollection("reference");

interface Props {
  currentDay?: number;
  currentReference?: string;
}

const { currentDay, currentReference } = Astro.props;
---

<aside class="file-tree">
  <nav>
    <details open>
      <summary>Days</summary>
      <ul>
        {
          days.map((day) => (
            <li>
              <a
                href={`/day/${String(day.data.day).padStart(2, "0")}`}
                class={currentDay === day.data.day ? "active" : ""}
              >
                Day {day.data.day}: {day.data.title}
              </a>
            </li>
          ))
        }
      </ul>
    </details>
    
    <details open>
      <summary>Reference</summary>
      <ul>
        {
          references.map((ref) => (
            <li>
              <a
                href={`/reference/${ref.slug}`}
                class={currentReference === ref.slug ? "active" : ""}
              >
                {ref.data.title}
              </a>
            </li>
          ))
        }
      </ul>
    </details>
  </nav>
</aside>

<style>
  .file-tree {
    background: var(--color-bg-secondary);
    padding: 1rem;
    border-right: 1px solid var(--color-border);
    max-width: 300px;
    max-height: 100vh;
    overflow-y: auto;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
    padding: 0.5rem 0;
    user-select: none;
  }

  summary:hover {
    background: var(--color-bg-tertiary);
    border-radius: 4px;
  }

  ul {
    list-style: none;
    padding-left: 1rem;
    margin: 0.5rem 0;
  }

  li {
    padding: 0.25rem 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }

  a:hover {
    background: var(--color-bg-tertiary);
  }

  a.active {
    background: var(--color-primary);
    color: var(--color-text-on-primary);
    font-weight: bold;
  }
</style>
```

Create this file using vim: `:e app/src/components/FileTree.astro`, then use `o` to add lines, `w` to navigate words, `f{` to jump to braces.

#### Step 2: Create the Breadcrumb Component

Create `app/src/components/Breadcrumb.astro`:

```astro
---
interface Props {
  items: { label: string; href?: string }[];
}

const { items } = Astro.props;
---

<nav class="breadcrumb" aria-label="Breadcrumb">
  <ol>
    {
      items.map((item, index) => (
        <li>
          {item.href ? (
            <>
              <a href={item.href}>{item.label}</a>
              {index < items.length - 1 && <span> / </span>}
            </>
          ) : (
            <>
              <span>{item.label}</span>
              {index < items.length - 1 && <span> / </span>}
            </>
          )}
        </li>
      ))
    }
  </ol>
</nav>

<style>
  .breadcrumb {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin: 1rem 0;
  }

  ol {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    margin: 0 0.5rem;
  }
</style>
```

#### Step 3: Update Day Page Layout

Update `app/src/pages/day/[slug].astro` to include the breadcrumb:

```astro
---
import { getCollection, type CollectionEntry } from "astro:content";
import Base from "../../layouts/Base.astro";
import FileTree from "../../components/FileTree.astro";
import Breadcrumb from "../../components/Breadcrumb.astro";

const { slug } = Astro.params;
const days = await getCollection("day");
const day = days.find((d) => String(d.data.day).padStart(2, "0") === slug);

if (!day) {
  return Astro.redirect("/404");
}

const { Content } = await day.render();
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
      <article>
        <h1>{day.data.title}</h1>
        <p class="summary">{day.data.summary}</p>
        <Content />
      </article>
    </main>
  </div>
</Base>

<style>
  .layout {
    display: flex;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  .summary {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    margin: 0.5rem 0 1.5rem 0;
  }
</style>
```

Navigate through this file using vim motions. Use `f<` to jump to tags, `w` to move between words, `:w` to save.

#### Step 4: Update Reference Page Layout

Create `app/src/pages/reference/[slug].astro` with the same structure:

```astro
---
import { getCollection } from "astro:content";
import Base from "../../layouts/Base.astro";
import FileTree from "../../components/FileTree.astro";
import Breadcrumb from "../../components/Breadcrumb.astro";

const { slug } = Astro.params;
const refs = await getCollection("reference");
const ref = refs.find((r) => r.slug === slug);

if (!ref) {
  return Astro.redirect("/404");
}

const { Content } = await ref.render();
---

<Base title={ref.data.title}>
  <div class="layout">
    <FileTree currentReference={slug} />
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Reference", href: "/reference/" },
          { label: ref.data.title, href: "" },
        ]}
      />
      <article>
        <h1>{ref.data.title}</h1>
        {ref.data.description && <p class="description">{ref.data.description}</p>}
        <Content />
      </article>
    </main>
  </div>
</Base>

<style>
  .layout {
    display: flex;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  .description {
    font-size: 1.05rem;
    color: var(--color-text-secondary);
    margin: 0.5rem 0 1.5rem 0;
  }
</style>
```

#### Step 5: Test the Layout

Run the dev server:

```bash
npm run dev
```

Navigate to `localhost:4321/day/01/`. You should see:
- A file tree sidebar on the left with Days and Reference sections
- A breadcrumb navigation at the top
- The lesson content on the right

Test the breadcrumb links—they should navigate back to parent pages.

### Stretch Goal

If you finish early, add collapsible file tree interactivity:

1. In FileTree component, wrap days and references in `<details>` tags (which already supports click to expand/collapse)
2. Add styling to make the current page's tree item highlighted
3. Add an expand/collapse icon next to each section

---

## Checkpoint

**Commit message:** `day-10: add file tree sidebar and breadcrumb navigation`

**Your commit should include:**

- [ ] `app/src/components/FileTree.astro` — collapsible file tree component
- [ ] `app/src/components/Breadcrumb.astro` — breadcrumb navigation component
- [ ] Updated `app/src/pages/day/[slug].astro` — uses FileTree and Breadcrumb
- [ ] Updated `app/src/pages/reference/[slug].astro` — uses FileTree and Breadcrumb
- [ ] Updated `app/src/pages/reference/keyboard-shortcuts.astro` or relevant reference pages with new layout

**Validation**

- [ ] Components render without errors
- [ ] Day pages show file tree sidebar and breadcrumb
- [ ] Reference pages show file tree sidebar and breadcrumb
- [ ] Clicking breadcrumb links navigates correctly
- [ ] File tree shows Days and Reference sections
- [ ] Current page is highlighted in the file tree
- [ ] No TypeScript errors

**Self-Check**

Before committing:
1. Used `<leader>e` to explore the project structure
2. Navigated directories using hjkl in the explorer
3. Created and deleted test files using `c` and `d` in the explorer
4. Copied a file path using `Y` in the explorer
5. Made all component edits using vim motions

---

## Today's Score

- [ ] I opened the explorer with `<leader>e`
- [ ] I navigated the file tree using hjkl
- [ ] I collapsed and expanded directories using `h` and `l`
- [ ] I opened a file from the explorer using Enter
- [ ] I copied a file path using `Y`
- [ ] I created a new file using `c` in the explorer
- [ ] I deleted a file using `d` in the explorer
- [ ] I renamed a file using `r` in the explorer
- [ ] I understand when to use `<leader>e` (explorer) vs `<leader>ff` (search)
- [ ] The app now displays a file tree sidebar and breadcrumb navigation

**Reflection:** When would you prefer using the explorer vs. the file search? When do you want to *browse* structure vs. *search* for a specific file?

---

**Day 10 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 11: Buffers & Windows →](../day-11/index.md)
