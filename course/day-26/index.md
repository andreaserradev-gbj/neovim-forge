---
day: 26
title: "Todos & Custom Keys"
phase: 4
summary: "Track progress with TODO markers and build your own keyboard shortcuts"
vim_skills: ["]t", "[t", "<leader>xt", "<leader>xT", "<leader>st", "<leader>sT", "todo-comments", "custom-keymaps"]
plugin_focus: "todo-comments.nvim, which-key.nvim"
app_milestone: "Progress tracking using TODO markers, keyboard shortcut reference page"
estimated_time: "50-60 min"
prerequisites: ["day-25"]
---

[← Day 25: Project-Wide Replace](../day-25/index.md) | [Course Index](../../COURSE.md) | [Day 27: AI-Assisted Editing →](../day-27/index.md)

## Today's Vim Skills

### Todo Comments: Quick Progress Tracking

todo-comments.nvim recognizes special comments in your code:

**Recognized keywords:**
- `TODO` — something to do later
- `HACK` — hacky solution, revisit
- `BUG` — known bug, needs fix
- `NOTE` — important note for future readers
- `FIX` — specific issue to fix
- `FIXME` — same as FIX

**Navigating TODOs:**

- `]t` — jump to next TODO
- `[t` — jump to previous TODO
- `<leader>xt` — open trouble window with all TODOs
- `<leader>xT` — open all TODO/HACK/BUG/FIX/FIXME
- `<leader>st` — search for TODOs (fuzzy find)
- `<leader>sT` — search for TODO/HACK/BUG/FIX/FIXME

**Mental model:** TODOs are inline bookmarks. As you code, you leave notes for yourself: `TODO: refactor this`, `HACK: quick fix for demo`. Later, you can jump through them with `]t`/`[t` or view them all in the trouble list.

### Custom Keymaps

By Day 26, you're ready to create your own keybindings. In your `nvim/init.lua` or `keymaps.lua`:

```lua
-- Create a new keymap
vim.keymap.set('n', '<leader>mh', function()
  -- Your custom action here
  vim.cmd('echom "Hello from custom keymap!"')
end, { noremap = true, silent = true })
```

**Registering with which-key:**

```lua
local wk = require('which-key')
wk.register({
  m = { name = "+custom", h = "Say hello" },
}, { prefix = '<leader>' })
```

This adds your custom binding to the which-key menu, so `<leader>?` will show it.

---

## Drills

### Drill 1: TODO Navigation (5 min)

Add TODO comments to `course/day-26/index.md` and navigate them.

1. Add some TODO comments: `# TODO: improve this explanation`
2. Use `]t` to jump to the next TODO
3. Use `[t` to jump back
4. Use `<leader>xt` to open the trouble window
5. Click or jump through each TODO in the list

---

### Drill 2: Custom Keymap Creation (5 min)

Create a simple custom keymap in your Neovim config:

1. Open `~/.config/nvim/init.lua` or wherever your config is
2. Add a custom binding (in the keymaps section if it exists):
   ```lua
   vim.keymap.set('n', '<leader>tc', ':terminal<CR>', { noremap = true, silent = true })
   ```
3. Source the config: `:source %` or restart Vim
4. Test it: `<leader>tc` should open a terminal
5. Register it with which-key so it shows up in help

---

## Build: Keyboard Shortcut Reference Page

Create `app/src/pages/keyboard-shortcuts.md`:

```mdx
---
title: "Keyboard Shortcuts"
layout: "../layouts/Base.astro"
---

# Keyboard Shortcuts Reference

- `hjkl` — Move cursor
- `gg` — Top of file
- `G` — Bottom of file
- `<C-o>` — Jump back
- `<C-i>` — Jump forward

## Editing

- `i` — Insert mode
- `d` + motion — Delete
- `c` + motion — Change
- `y` + motion — Yank (copy)

## Marks & Jumps

- `m{a-z}` — Set mark
- `'{a-z}` — Jump to mark
- `` `{a-z} `` — Jump to exact position

## Code Folding

- `za` — Toggle fold
- `zM` — Close all
- `zR` — Open all

## Text Objects

- `daf` — Delete function
- `cic` — Change class
- `yau` — Yank function call

## Find & Replace

- `<leader>sr` — Search/replace (grug-far)
- `/pattern` — Find
- `:%s/old/new/g` — Replace all

## Project Navigation

- `<leader>ff` — Find files
- `<leader>sg` — Search grep
- `<leader>e` — File explorer

## Git

- `<leader>gg` — Git (lazygit)
- `<leader>gb` — Blame
- `]h` — Next hunk
- `[h` — Previous hunk

## Code Intelligence

- `gd` — Go to definition
- `gr` — References
- `K` — Hover
- `<leader>ca` — Code action

## Window & Buffer Management

- `<C-h/j/k/l>` — Navigate windows
- `<leader>bd` — Delete buffer
- `<leader>-/|` — Split window

## Leader Key Groups

- `<leader>f` — File operations
- `<leader>s` — Search
- `<leader>g` — Git
- `<leader>d` — Diagnostics
- `<leader>c` — Code (LSP)
- `<leader>l` — Linter/Format
- `<leader>u` — UI toggles
- `<leader>q` — Quit/Session
```

Add this to your navigation so users can reference it.

---

## Checkpoint

**Commit message:** `day-26: add progress tracking and shortcut page`

**Your commit should include:**

- [ ] `app/src/pages/keyboard-shortcuts.md` — Keyboard shortcut reference
- [ ] Modified `app/src/components/Nav.astro` — Link to shortcuts page
- [ ] Updated `app/nvim/keymaps.lua` or config — Custom keymaps registered with which-key

---

## Today's Score

- [ ] I can navigate TODOs with `]t` and `[t`
- [ ] I can view all TODOs with `<leader>xt`
- [ ] I created a custom keymap
- [ ] I registered it with which-key
- [ ] I created the keyboard shortcuts reference page
- [ ] The shortcuts page is linked in navigation

**Reflection:** What custom keymaps would make your workflow faster?

---

**Day 26 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 27: AI-Assisted Editing →](../day-27/index.md)
