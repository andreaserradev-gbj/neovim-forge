---
title: "LazyVim Keymap Reference"
description: "Complete keymap reference for LazyVim with default plugins"
---

# LazyVim Keymap Reference

LazyVim comes with a curated set of plugins and keybindings optimized for a modern development workflow. This reference covers all default keymaps organized by category.

## Core Navigation

Navigate files, buffers, and windows with muscle memory.

| Command | Effect | Notes |
|---------|--------|-------|
| `j` | Down (smart: respects word wrap) | Configured in LazyVim |
| `k` | Up (smart: respects word wrap) | Configured in LazyVim |
| `C-h` | Focus left window | Move between split windows |
| `C-j` | Focus down window | Move between split windows |
| `C-k` | Focus up window | Move between split windows |
| `C-l` | Focus right window | Move between split windows |
| `C-Up` | Increase window height | Resize |
| `C-Down` | Decrease window height | Resize |
| `C-Left` | Decrease window width | Resize |
| `C-Right` | Increase window width | Resize |
| `A-j` | Move line down | Move entire line |
| `A-k` | Move line up | Move entire line |
| `S-h` | Previous buffer | Navigate buffers |
| `S-l` | Next buffer | Navigate buffers |

## Buffer Management

Manage multiple open files.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>bb` | Switch to previous buffer | Quick toggle |
| `<leader>bd` | Delete buffer | Close current buffer |
| `<leader>bo` | Delete other buffers | Keep only current |
| `<leader>bD` | Delete buffer and window | Close + close split |
| `<leader>bp` | Toggle buffer pin | Pin buffer (don't close with `:bd`) |
| `<leader>bh` | Close buffer to left | Close all buffers left of cursor |
| `<leader>bl` | Close buffer to right | Close all buffers right of cursor |

## Search and Navigation

Find errors, diagnostics, and navigate lists.

| Command | Effect | Notes |
|---------|--------|-------|
| `n` | Next search result | Repeat search forward |
| `N` | Previous search result | Repeat search backward |
| `<Esc>` | Clear search highlight | Remove highlighted matches |
| `[d` | Previous diagnostic | Navigate LSP diagnostics |
| `]d` | Next diagnostic | Navigate LSP diagnostics |
| `[e` | Previous error | Jump to error |
| `]e` | Next error | Jump to error |
| `[w` | Previous warning | Jump to warning |
| `]w` | Next warning | Jump to warning |
| `[q` | Previous quickfix | Quickfix list |
| `]q` | Next quickfix | Quickfix list |

## File Operations

Create files, copy paths, save.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>fn` | New file | Create new file in current dir |
| `<leader>cp` | Copy file path | Copy absolute path to clipboard |
| `C-s` | Save file | Write to disk |

## Window and Tab Management

Manage splits and tabs.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>-` | Split window horizontal | Create horizontal split |
| `<leader>\|` | Split window vertical | Create vertical split |
| `<leader>wd` | Delete window | Close current split |
| `<leader>tab<Tab>` | New tab | Create new tab |
| `<leader>tab-d` | Close tab | Delete current tab |
| `<leader>tab-[` | Previous tab | Navigate tabs |
| `<leader>tab-]` | Next tab | Navigate tabs |

## Git Integration (Gitsigns + LazyGit)

Work with git without leaving the editor.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>gg` | Open LazyGit | Full git UI in terminal |
| `<leader>gb` | Show blame | Show who changed each line |
| `<leader>gl` | Show log | Commit history (current file) |
| `<leader>gf` | File log | Commit history with diff |
| `]h` | Next hunk | Jump to next changed block |
| `[h` | Previous hunk | Jump to previous changed block |
| `[H` | First hunk | Jump to first change |
| `]H` | Last hunk | Jump to last change |

## LSP (Language Server Protocol)

Code intelligence and refactoring.

| Command | Effect | Notes |
|---------|--------|-------|
| `gd` | Go to definition | Jump to symbol definition |
| `gr` | Go to references | Show all usages |
| `gI` | Go to implementation | Jump to implementation |
| `gD` | Go to declaration | Jump to declaration |
| `gy` | Go to type definition | Jump to type |
| `K` | Hover documentation | Show type info and docs |
| `<leader>ca` | Code actions | LSP quick fixes and refactors |
| `<leader>cr` | Rename symbol | Rename variable/function across project |
| `<leader>cf` | Format | Format file (prettier, etc.) |

## Flash.nvim

Lightning-fast motion and search.

| Command | Effect | Notes |
|---------|--------|-------|
| `s` | Jump | Flash jump to any character |
| `S` | Treesitter jump | Jump using treesitter scopes |
| `r` | Remote operator | Remote jump operator (delete, change) |
| `R` | Treesitter search | Search and jump with treesitter |
| `C-s` | Toggle in cmdline | Activate flash in command-line mode |

## Snacks

Modern UI improvements with picker, explorer, and terminal.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>e` | Explorer | File tree (current dir) |
| `<leader>E` | Explorer (root) | File tree (project root) |
| `<leader>ff` | Find files | Fuzzy find files |
| `<leader>fg` | Git files | Find git-tracked files |
| `<leader>fr` | Recent files | Find recently opened |
| `<leader>/` | Search lines | Search current file lines |
| `<leader>sb` | Buffers | Switch buffers |
| `<leader>sc` | Commands | Command palette |
| `<leader>sd` | Diagnostics | Show all diagnostics |
| `<leader>sm` | Keymaps | Search keymaps |

### File operations in explorer:

When in the explorer (`<leader>e`):
- `c` — Create file/folder
- `d` — Delete
- `r` — Rename
- `y` — Copy (to clipboard)
- `x` — Cut
- `p` — Paste
- `a` — Toggle hidden files
- `<CR>` — Open file or enter directory
- `<Esc>` — Close explorer

## Trouble.nvim

Organized diagnostic and reference lists.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>xx` | Diagnostics | Show all diagnostics |
| `<leader>xX` | Buffer diagnostics | Show buffer diagnostics |
| `<leader>cs` | Document symbols | Outline of current file |
| `<leader>cS` | Workspace symbols | All symbols in project |
| `<leader>xL` | Location list | Show location list |
| `<leader>xQ` | Quickfix list | Show quickfix list |

## Grug-far

Search and replace with live preview.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>sr` | Search and replace | Interactive find/replace |

## Todo-comments

Navigate and organize TODO markers.

| Command | Effect | Notes |
|---------|--------|-------|
| `]t` | Next todo | Jump to next TODO/FIXME/NOTE |
| `[t` | Previous todo | Jump to previous TODO/FIXME/NOTE |
| `<leader>xt` | Todos (trouble) | Show todos in trouble list |
| `<leader>st` | Search todos | Find todos in project |

## mini.surround

Manipulate surrounding delimiters (quotes, brackets, tags).

| Command | Effect | Notes |
|---------|--------|-------|
| `sa` | Add surround | Add quotes/brackets around selection |
| `sd` | Delete surround | Remove surrounding delimiters |
| `sr` | Replace surround | Change surrounding delimiters |
| `sf` | Find surround | Find next surrounding pair |
| `sF` | Find surround (backward) | Find previous surrounding pair |
| `sh` | Highlight surround | Highlight surrounding pair |

**Usage:** After `sa` or `sr`, specify target and delimiter:
- `saiw"` — add quotes around word
- `srb]` — change parentheses to brackets
- `sd"` — delete surrounding quotes

## mini.ai Text Objects

Extended text objects for semantic code selection.

| Command | Effect | Notes |
|---------|--------|-------|
| `io` / `ao` | Code block | Indented block, surrounding lines |
| `if` / `af` | Function | Function definition and body |
| `ic` / `ac` | Class | Class definition and body |
| `iu` / `au` | Function call | Function arguments and call |
| `id` / `ad` | Digit | Number |
| `ie` / `ae` | Word with case | camelCase or snake_case chunk |
| `ig` / `ag` | Entire buffer | All text in file |
| `in` / `an` | Next object | Next occurrence of any text object |
| `il` / `al` | Last object | Last occurrence of any text object |

**Note:** These augment vim's built-in text objects (iw, i", i), not replace them.

## Completion (blink.cmp)

Autocomplete and snippet navigation.

| Command | Effect | Notes |
|---------|--------|-------|
| `C-b` | Scroll docs backward | Scroll completion docs up |
| `C-f` | Scroll docs forward | Scroll completion docs down |
| `C-space` | Toggle completion | Open/close menu |
| `C-e` | Abort completion | Close menu without selecting |
| `<Tab>` | Accept selection | Pick completion or jump to next snippet placeholder |
| `<S-Tab>` | Previous snippet placeholder | Jump backward in snippet |

## UI Toggles

Toggle editor features on/off.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>uf` | Toggle format-on-save | Enable/disable autoformat |
| `<leader>us` | Toggle spell check | Enable/disable spellcheck |
| `<leader>uw` | Toggle word wrap | Wrap long lines |
| `<leader>ul` | Toggle line numbers | Show/hide line numbers |
| `<leader>uL` | Toggle relative line numbers | Relative vs absolute |
| `<leader>ud` | Toggle diagnostics | Show/hide errors and warnings |
| `<leader>uh` | Toggle inlay hints | Show/hide LSP type hints |
| `<leader>uz` | Zen mode | Distraction-free editing |

## Noice

Enhanced command-line and notification UI.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>snl` | Last message | Show last notification |
| `<leader>snh` | Message history | Show all notifications |
| `<leader>snd` | Dismiss notifications | Clear current notifications |

## Terminal

Quick terminal access.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>ft` | Float terminal | Open floating terminal |
| `<leader>fT` | Terminal in split | Open terminal in window |
| `C-/` | Toggle terminal | Toggle last terminal |

**In terminal mode:**
- `C-/` or `<Esc>` — Return to normal mode

## Session Management

Save and restore editor state.

| Command | Effect | Notes |
|---------|--------|-------|
| `<leader>qq` | Quit all | Quit Neovim (saves session) |

**Note:** LazyVim with persistence plugin auto-saves and restores your session across launches.

## Reference by Category

### Which-key Groups

LazyVim organizes keymaps under `<leader>` groups. Here's the structure:

| Prefix | Category | Examples |
|--------|----------|----------|
| `<leader>b` | Buffers | `<leader>bb`, `<leader>bd`, `<leader>bp` |
| `<leader>c` | Code/Comments | `<leader>ca`, `<leader>cr`, `<leader>cs` |
| `<leader>f` | Files/Find | `<leader>ff`, `<leader>fg`, `<leader>ft` |
| `<leader>g` | Git | `<leader>gg`, `<leader>gb`, `<leader>gl` |
| `<leader>s` | Search/Surround/Snacks | `<leader>sr`, `<leader>sf`, `<leader>sb` |
| `<leader>tab` | Tabs | `<leader>tab<Tab>`, `<leader>tab-d` |
| `<leader>u` | UI toggles | `<leader>uf`, `<leader>us`, `<leader>uz` |
| `<leader>w` | Windows | `<leader>wd`, `<leader>w-`, `<leader>w\|` |
| `<leader>x` | Trouble/Errors | `<leader>xx`, `<leader>xX`, `<leader>xl` |

Press `<leader>` to open which-key and see all available mappings.

## Workflow Tips

### Most-Used Keys (Muscle Memory)

These are the keymaps you'll use 100+ times a day:

- `<leader>ff` — Find file (navigation foundation)
- `<leader>/` — Search current file
- `<leader>sr` — Find/replace
- `<leader>e` — Open file tree
- `gd` — Go to definition
- `<leader>ca` — Code actions
- `<leader>gg` — Open git UI
- `]h` / `[h` — Jump between git hunks

### Common Workflows

**Rename a variable across project:**
1. Position cursor on variable
2. `<leader>cr` — rename
3. Type new name, `<Enter>`

**Search and replace in project:**
1. `<leader>sr` — open grug-far
2. Enter search pattern
3. Enter replacement
4. Confirm changes

**Jump to definition and back:**
1. `gd` — go to definition
2. `C-o` — jump back (vim built-in)

**Review git changes:**
1. `<leader>gg` — open lazygit
2. Navigate commits
3. `:q` or `q` to quit lazygit

**Format and fix diagnostics:**
1. `<leader>cf` — format file
2. `<leader>xx` — see diagnostics
3. Position on error, `<leader>ca` — apply fix

## Customization

These are the defaults. You can customize keymaps in your `init.lua`:

```lua
vim.keymap.set('n', '<leader>xx', ':SomeCommand<CR>', { noremap = true, silent = true })
```

For more, see the LazyVim documentation and your plugin configs in `~/.config/nvim/lua/plugins/`.
