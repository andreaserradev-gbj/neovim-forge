---
title: "Leader Keys Cheatsheet"
description: "Quick reference for all LazyVim leader key bindings organized by group"
---

# Leader Keys Cheatsheet

LazyVim organizes keybindings under the `<leader>` key (usually `,` or `<space>`). Press `<leader>` to open which-key and see all available mappings. This is a one-page quick reference organized by group.

## Quick Navigation

Most-used mappings you'll press 100+ times a day:

| Key | Effect | Notes |
|-----|--------|-------|
| `<leader>ff` | Find files | Fuzzy find any file in project |
| `<leader>/` | Search lines | Search text in current file |
| `<leader>sr` | Search/replace | Interactive find and replace |
| `<leader>e` | File explorer | Toggle file tree sidebar |
| `<leader>gg` | Git UI | Open lazygit for full git interface |
| `gd` | Go to definition | Jump to symbol definition |
| `<leader>ca` | Code actions | LSP quick fixes and refactors |

## Buffer Operations (`b`)

Manage open files.

| Key | Effect |
|-----|--------|
| `<leader>bb` | Switch to last buffer |
| `<leader>bd` | Delete buffer |
| `<leader>bo` | Delete other buffers |
| `<leader>bD` | Delete buffer and window |
| `<leader>bp` | Toggle buffer pin |
| `<leader>bh` | Close buffers to left |
| `<leader>bl` | Close buffers to right |

**Memory tip:** `b` = buffer, `d` = delete, `o` = others, `p` = pin, `h` = horizontal (left), `l` = line (right)

## Code/LSP (`c`)

Language server features and code intelligence.

| Key | Effect |
|-----|--------|
| `<leader>ca` | Code actions |
| `<leader>cr` | Rename symbol |
| `<leader>cf` | Format file |
| `<leader>cs` | Document symbols |
| `<leader>cS` | Workspace symbols |

**Alternative keybindings (vim-native):**
- `gd` — go to definition
- `gr` — go to references
- `gI` — go to implementation
- `gy` — go to type definition
- `gD` — go to declaration
- `K` — hover documentation

## File Operations (`f`)

Find, create, and manage files.

| Key | Effect |
|-----|--------|
| `<leader>ff` | Find files |
| `<leader>fg` | Find git files |
| `<leader>fr` | Find recent files |
| `<leader>fn` | New file |
| `<leader>ft` | Float terminal |
| `<leader>fT` | Terminal in split |

**Memory tip:** `f` = file, `g` = git, `r` = recent, `n` = new, `t` = terminal

## Git (`g`)

Git integration via gitsigns and lazygit.

| Key | Effect |
|-----|--------|
| `<leader>gg` | Open lazygit |
| `<leader>gb` | Show blame |
| `<leader>gl` | Show log |
| `<leader>gf` | File log |

**Also:**
- `]h` — next git hunk
- `[h` — previous git hunk
- `[H` — first hunk
- `]H` — last hunk

## Search/Surround (`s`)

Search, replace, and text surroundings.

| Key | Effect |
|-----|--------|
| `<leader>sr` | Search and replace |
| `<leader>sb` | Switch buffer |
| `<leader>sc` | Command palette |
| `<leader>sd` | Diagnostics |
| `<leader>sm` | Keymaps |
| `<leader>st` | Search todos |
| `<leader>sn` | Noice messages |
| `<leader>snl` | Last message |
| `<leader>snh` | Message history |
| `<leader>snd` | Dismiss notifications |

**Also (mini.surround):**
- `sa` — add surround
- `sd` — delete surround
- `sr` — replace surround
- `sf` — find surround
- `sh` — highlight surround

## Toggles (`u`)

Toggle editor features on/off.

| Key | Effect |
|-----|--------|
| `<leader>uf` | Toggle format-on-save |
| `<leader>us` | Toggle spell check |
| `<leader>uw` | Toggle word wrap |
| `<leader>ul` | Toggle line numbers |
| `<leader>uL` | Toggle relative line numbers |
| `<leader>ud` | Toggle diagnostics |
| `<leader>uh` | Toggle inlay hints |
| `<leader>uz` | Zen mode (focus) |

**Memory tip:** `u` = UI, then letter for feature

## Window/Split Operations (`w`, `-`, `|`)

Manage splits and windows.

| Key | Effect |
|-----|--------|
| `<leader>-` | Split horizontal |
| `<leader>\|` | Split vertical |
| `<leader>wd` | Delete window |
| `C-h/j/k/l` | Navigate windows |
| `C-Up/Down/Left/Right` | Resize windows |

## Tab Operations (`tab`)

Manage tabs (tab bar at top).

| Key | Effect |
|-----|--------|
| `<leader>tab<Tab>` | New tab |
| `<leader>tab-d` | Close tab |
| `<leader>tab-[` | Previous tab |
| `<leader>tab-]` | Next tab |

## Diagnostics/Trouble (`x`)

Show and navigate errors, warnings, diagnostics.

| Key | Effect |
|-----|--------|
| `<leader>xx` | Toggle diagnostics list |
| `<leader>xX` | Buffer diagnostics |
| `<leader>xL` | Location list |
| `<leader>xQ` | Quickfix list |

**Also:**
- `[d` — previous diagnostic
- `]d` — next diagnostic
- `[e` — previous error
- `]e` — next error
- `[w` — previous warning
- `]w` — next warning

## Todos (`t`)

Navigate and organize TODO markers.

| Key | Effect |
|-----|--------|
| `]t` | Next todo |
| `[t` | Previous todo |
| `<leader>xt` | Todos in trouble |
| `<leader>st` | Search todos |

## Other Operations

| Key | Effect |
|-----|--------|
| `<leader>qq` | Quit all (save session) |
| `<leader>e` | File explorer (toggle) |
| `<leader>E` | File explorer (root) |
| `<leader>cp` | Copy file path |
| `C-s` | Save file |
| `C-/` | Toggle terminal |

## Flash.nvim (Quick Jump)

Ultra-fast navigation without leader key.

| Key | Effect |
|-----|--------|
| `s` | Flash jump (find any char) |
| `S` | Treesitter jump (find scope) |
| `r` | Remote operator (delete, change) |
| `R` | Treesitter search |

## Which-Key Guide

To see all available keybindings, press `<leader>` and wait. A menu appears showing all groups:

```
<leader>b     Buffer operations
<leader>c     Code/LSP
<leader>f     Files
<leader>g     Git
<leader>s     Search
<leader>t     Toggles
<leader>w     Windows
<leader>x     Trouble
<leader>tab   Tabs
<leader>u     UI toggles
```

Explore by pressing the group letter. For example:
- `<leader>f` shows file operations
- `<leader>g` shows git commands
- `<leader>x` shows diagnostic lists

## Context-Dependent Bindings

Some bindings only work in specific modes:

### In Normal Mode

All bindings listed above work in normal mode.

### In Visual Mode

Select text first, then:
- `<leader>cf` — format selected text
- `<leader>ca` — code actions on selection

### In Command Mode (`:`)

- `C-k/j` — navigate command history
- `C-b/f` — move cursor in command
- `C-e` — go to end of command
- `C-a` — go to start of command

## Custom Bindings You Might Add

Here are common customizations:

```lua
-- Comment/uncomment (vim-commentary)
gc{motion}      toggle comment

-- Increment/Decrement
C-a             increment number
C-x             decrement number

-- Case toggle
~               toggle case of char
```

## Speed Tips

### Most Frequent Workflows

1. **Find and edit file:**
   - `<leader>ff` → filename → `<CR>`

2. **Search and replace in project:**
   - `<leader>sr` → pattern → replacement

3. **Code navigation:**
   - `gd` → jump to definition
   - `C-o` → jump back (vim built-in)

4. **Git workflow:**
   - `<leader>gg` → navigate commits
   - `q` or `:q` → quit lazygit

5. **Refactor and fix:**
   - Position on error
   - `<leader>ca` → apply fix

### Mental Models

**Memory by category:**
- `b` = buffers
- `c` = code/LSP
- `f` = files
- `g` = git
- `s` = search
- `u` = UI toggles
- `w` = windows
- `x` = errors (trouble)

**Remembering letter meanings:**
- Delete operations: `d`
- Search: `/` or `s`
- Replace: `r`
- Find: `f`

## Customization

You can customize any binding in your `~/.config/nvim/init.lua`:

```lua
vim.keymap.set('n', '<leader>xx', ':CustomCommand<CR>', { noremap = true })
```

Default keymaps are in your LazyVim config directory. Check `lua/plugins/` for plugin-specific maps.

## Quick Lookup by Use Case

### If you want to find something:

```
<leader>ff      find file
<leader>/       search in file
<leader>sr      search and replace
<leader>fg      find git file
<leader>st      search todos
```

### If you want to manage code:

```
gd              go to definition
gr              go to references
<leader>ca      code actions
<leader>cr      rename
<leader>cf      format
```

### If you want to manage files/buffers:

```
<leader>e       file explorer
<leader>ff      find file
<leader>bd      delete buffer
<leader>bb      switch buffer
```

### If you want git:

```
<leader>gg      lazygit UI
<leader>gb      blame
<leader>gl      log
]h / [h         next/prev hunk
```

### If you want to navigate windows:

```
C-hjkl          focus window
C-Up/Down/Left/Right resize
<leader>-       horizontal split
<leader>|       vertical split
<leader>wd      close window
```

### If you want to toggle features:

```
<leader>uf      format-on-save
<leader>uz      zen mode
<leader>ul      line numbers
<leader>ud      diagnostics
```

Press `<leader>` and explore. The which-key menu is your guide!
