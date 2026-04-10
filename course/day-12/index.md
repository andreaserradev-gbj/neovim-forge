---
day: 12
title: "Find Everything"
phase: 2
summary: "Master the Snacks picker for instant searching of files, text, and commands"
vim_skills: ["<leader>sg", "<leader>sf", "<leader>sr", "<leader>sb", "<leader>sc", "<leader>sd", "<leader>sm", "<leader>so", "picker navigation"]
plugin_focus: "snacks.nvim picker"
app_milestone: "Full-text search across all course content, command palette component"
estimated_time: "55-70 min"
prerequisites: ["day-11"]
---

[← Day 11: Buffers & Windows](../day-11/index.md) | [Course Index](../../COURSE.md) | [Day 13: Surround & Transform →](../day-13/index.md)


## Today's Vim Skills

### The Snacks Picker

The Snacks picker is the most powerful search interface in Neovim. Unlike searching with `/` (which searches within the current file), the picker searches across your entire project, shows previews, and lets you fuzzy-match anything.

### Picker Motions

**`<leader>sg` / `<leader>/` — Live grep (search project text)**

Search for any text across all files in your project. As you type, matching lines appear. You can preview the context around each match and jump to it.

Use this when: you want to find where a variable or function is used.

**`<leader>sf` — File search**

Fuzzy search for files by name. Type partial names and matching files appear. Preview files as you browse.

Use this when: you want to find a file but prefer browsing over navigating the tree.

**`<leader>sr` — Find and replace**

Search for text and preview replacements before committing to the change. 

Use this when: you want to rename a variable or update text consistently across files.

**`<leader>sb` — Search buffers**

Search within open buffers (files you currently have loaded). Faster than project-wide search when you only care about open files.

**`<leader>sc` — Command search**

Search for any vim command. Type a partial command name and matching commands appear with descriptions.

**`<leader>sd` — Diagnostics**

Jump to error/warning locations. See LSP diagnostics across your project.

**`<leader>sm` — Key maps**

Search your keybindings. Useful for finding which keys do what.

**`<leader>so` — Options**

Search vim options (settings). Find config values and change them.

### Picker Navigation

Once the picker is open:

- **Type to filter:** Every keystroke narrows results
- `<C-n>` / `<C-p>` — Next/previous result
- `<C-j>` / `<C-k>` — Alternative next/previous
- Enter — Select current result
- `<C-s>` — Toggle selection (multi-select)
- `<C-a>` — Select all
- `<C-c>` / Escape — Close picker without selection

### Mental Model: Fuzzy = Intent Matching

The picker uses fuzzy matching: you type letters in any order, and it matches files/lines containing those letters in sequence (but not necessarily consecutively).

Example: You type `dli` and it matches `day-list-index.md` and `daily-index.ts` because they contain d, l, i in order.

This is vastly more powerful than prefix matching. You're expressing intent: "find something with these letters" rather than "find something starting with this prefix."

---

## Drills

### Drill 1: Live Grep (5 min)

Press `<leader>/` or `<leader>sg`. The grep picker opens.

1. Type a common word in your project: "export" or "function"
2. Results appear showing every line containing that word
3. Browse results with `<C-n>` and `<C-p>`
4. Press Enter to jump to one result
5. The picker closes and you're positioned at that line

Repeat this 5 times with different search terms.

**Expected outcome:** Live grep becomes your go-to for finding code patterns.

### Drill 2: Fuzzy File Search (5 min)

Press `<leader>sf`. The file search picker opens.

1. Type partial filenames: "day" should show all day-XX directories
2. Type "index" should show all index.md or index.astro files
3. Type a unique fragment like "corne" should narrow to corne-related files

Can you find "course/day-08/corne.md" by typing just "d8co"?

**Expected outcome:** Fuzzy file search is faster than browsing the tree.

### Drill 3: Command Search (3 min)

Press `<leader>sc`. The command palette opens.

1. Type "set" to find vim setting commands
2. Type "help" to find help commands
3. Type "format" to find formatting commands

This is useful when you know what you want to do but don't remember the exact command name.

**Expected outcome:** Command search is a safety net when you forget a name.

---

## Build: Full-Text Search Component & Command Palette

### What You're Building

1. A search interface component that lets you search course content
2. A command palette component for navigating the app

### Step-by-Step

#### Step 1: Create Search Data Index

Create `app/src/lib/search.ts`:

```typescript
import { getCollection } from "astro:content";

export interface SearchResult {
  title: string;
  url: string;
  content: string;
  type: "day" | "reference";
}

export async function buildSearchIndex(): Promise<SearchResult[]> {
  const days = await getCollection("day");
  const references = await getCollection("reference");

  const results: SearchResult[] = [];

  for (const day of days) {
    results.push({
      title: `Day ${day.data.day}: ${day.data.title}`,
      url: `/day/${String(day.data.day).padStart(2, "0")}/`,
      content: day.data.summary,
      type: "day",
    });
  }

  for (const ref of references) {
    results.push({
      title: ref.data.title,
      url: `/reference/${ref.slug}/`,
      content: ref.data.description || "",
      type: "reference",
    });
  }

  return results;
}
```

#### Step 2: Create Search Component

Create `app/src/components/Search.astro`:

```astro
---
import { buildSearchIndex } from "../lib/search";

const results = await buildSearchIndex();
---

<search-component data-results={JSON.stringify(results)}>
  <input type="text" placeholder="Search days and reference..." aria-label="Search" />
  <ul id="results"></ul>
</search-component>

<script>
  class SearchComponent extends HTMLElement {
    constructor() {
      super();
      const results = JSON.parse(this.dataset.results || "[]");
      const input = this.querySelector("input");
      const resultsList = this.querySelector("ul");

      input?.addEventListener("input", (e) => {
        const query = (e.target as HTMLInputElement).value.toLowerCase();
        const matches = results.filter((r: any) =>
          r.title.toLowerCase().includes(query) ||
          r.content.toLowerCase().includes(query)
        );

        resultsList!.innerHTML = matches
          .map(
            (m: any) =>
              `<li><a href="${m.url}">${m.title}</a><p>${m.content.substring(0, 100)}</p></li>`
          )
          .join("");
      });
    }
  }

  customElements.define("search-component", SearchComponent);
</script>

<style>
  search-component {
    display: block;
    margin: 2rem 0;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    font-size: 1rem;
  }

  #results {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
  }

  li {
    padding: 0.75rem;
    border-bottom: 1px solid var(--color-border);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: bold;
  }

  p {
    margin: 0.25rem 0 0 0;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
</style>
```

#### Step 3: Create a Search Page

Create `app/src/pages/search.astro`:

```astro
---
import Base from "../layouts/Base.astro";
import Search from "../components/Search.astro";
---

<Base title="Search">
  <article style="max-width: 800px; margin: 0 auto;">
    <h1>Search</h1>
    <p>Search through all course content and reference pages.</p>
    <Search />
  </article>
</Base>
```

#### Step 4: Add Search to Navigation

Update your main layout or navigation to include a link to `/search`

### Stretch Goal

Add keyboard shortcut `<leader>/` to open the search on the page (using JavaScript event listeners).

---

## Checkpoint

**Commit message:** `day-12: add full-text search and command palette`

**Your commit should include:**

- [ ] `app/src/lib/search.ts` — search index builder
- [ ] `app/src/components/Search.astro` — search component
- [ ] `app/src/pages/search.astro` — search page

**Validation**

- [ ] Search component renders on `/search` page
- [ ] Search input filters results as you type
- [ ] Results display with title, URL, and preview
- [ ] Clicking results navigates to the page
- [ ] No TypeScript errors

**Self-Check**

1. Used `<leader>sg` to search within vim for text patterns
2. Used `<leader>sf` to find files
3. Used `<leader>sc` to search commands
4. Made all edits using vim motions

---

## Today's Score

- [ ] I used `<leader>/` or `<leader>sg` to search project text
- [ ] I understood fuzzy matching and how it works
- [ ] I used `<leader>sf` to find files without browsing the tree
- [ ] I used `<leader>sc` to search commands
- [ ] I navigated picker results using `<C-n>` and `<C-p>`
- [ ] I selected a result with Enter
- [ ] I built a search component for the course content
- [ ] The app now has full-text search functionality

**Reflection:** When would you use grep (`<leader>/`) vs. file search (`<leader>sf`)? How does the picker change your workflow?

---

**Day 12 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 13: Surround & Transform →](../day-13/index.md)
