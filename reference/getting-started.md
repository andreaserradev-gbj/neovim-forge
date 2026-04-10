---
title: "Getting Started with Neovim"
description: "A quick primer for those new to Neovim — read this before Day 1 if you need a refresher on the absolute basics"
---

# Getting Started with Neovim

This page is for people who need a quick refresher before starting the 30-day course. If you can already open a file, move around with hjkl, type some text, and save/quit, skip this and go straight to Day 1.

## What is Neovim?

Neovim is a text editor that runs in your terminal. It evolved from Vim, which evolved from Vi, which has been around since 1976. The core idea: your keyboard is faster than your mouse. Instead of clicking menus and dragging selections, you speak a language of keystrokes.

Neovim extends Vim with Lua scripting, built-in LSP support, and a plugin ecosystem that makes it a full IDE. LazyVim is a pre-configured Neovim distribution that sets up all the plugins, keymaps, and defaults so you can be productive immediately.

## Installing the Prerequisites

### Neovim

You need Neovim 0.10 or later.

**macOS:**
```bash
brew install neovim
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt install neovim

# Or use the AppImage for the latest version
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
```

Verify with `nvim --version`.

### LazyVim

LazyVim is a Neovim configuration framework. If you already have a Neovim config, back it up first:

```bash
mv ~/.config/nvim ~/.config/nvim.backup
```

Then install LazyVim:

```bash
git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git
nvim
```

On first launch, LazyVim installs all plugins automatically. Wait for it to finish, then quit with `:q`.

### Node.js

You need Node.js 20 or later for the Astro project.

```bash
# macOS
brew install node

# Or use nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 20
```

Verify with `node --version`.

## The Two Modes You Need to Know

Neovim has multiple modes. For now, you only need two:

### Normal Mode

This is where you start and where you should spend most of your time. In Normal mode, every key is a command: `j` moves down, `d` deletes, `y` copies. You are not typing text — you are giving instructions.

### Insert Mode

This is where you type text, like any other editor. Press `i` to enter Insert mode. Press `Escape` (or `J+K` on a Corne keyboard) to return to Normal mode.

**The golden rule:** Do your thinking in Normal mode. Enter Insert mode only to type, then get out immediately.

## Survival Commands

These commands will keep you alive until Day 1 teaches you properly:

| Command | What It Does |
|---------|-------------|
| `nvim filename` | Open a file in Neovim |
| `i` | Enter Insert mode (start typing) |
| `Escape` | Return to Normal mode |
| `:w` | Save the file |
| `:q` | Quit (fails if unsaved changes) |
| `:wq` | Save and quit |
| `:q!` | Quit without saving (discard changes) |
| `h` `j` `k` `l` | Move left, down, up, right (in Normal mode) |
| `u` | Undo |
| `Ctrl-r` | Redo |

## Try It Right Now

1. Open a terminal
2. Type `nvim hello.txt`
3. Press `i` to enter Insert mode
4. Type "Hello from Neovim"
5. Press `Escape` to return to Normal mode
6. Type `:wq` and press Enter to save and quit
7. Type `cat hello.txt` to verify your file exists

If that worked, you are ready for Day 1.

## The Mindset Shift

Coming from a graphical editor (VS Code, IntelliJ, Sublime), Neovim feels strange. You will be slower for the first few days. This is normal. You are trading short-term speed for long-term velocity.

Think of it like learning to touch-type. At first, looking at the keyboard is faster. But nobody who learned to touch-type wishes they had not. The investment pays compound interest for the rest of your career.

The 30-day course is designed to get you through the awkward phase as quickly as possible by building something real. Every day you practice by doing, not by reading.

## Ready?

Go to [Day 1: The First Keystrokes](../course/day-01/).
