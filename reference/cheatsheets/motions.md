---
title: "Motions Cheatsheet"
description: "Quick reference for all vim motions"
---

# Motions Cheatsheet

Motions move the cursor and define the scope of operations with operators. This is a one-page quick reference.

## Character Motions

Move by single characters.

```
h ← left      j ↓ down      k ↑ up      l → right
```

| Motion | Effect |
|--------|--------|
| `h` | Left one character |
| `l` | Right one character |
| `j` | Down one line |
| `k` | Up one line |
| `5h` | Left 5 characters |
| `3j` | Down 3 lines |

## Word Motions

Move between words. `w/b/e` respect word boundaries. `W/B/E` only split on whitespace.

### Forward

| Motion | Effect | Example |
|--------|--------|---------|
| `w` | Next word start | Jump over punctuation |
| `W` | Next WORD start | Jump only on whitespace |
| `e` | End of word | Useful for `ce` (change word) |
| `E` | End of WORD | Respects only whitespace |

### Backward

| Motion | Effect | Example |
|--------|--------|---------|
| `b` | Previous word start | Jump back over punctuation |
| `B` | Previous WORD start | Jump back on whitespace only |

### Usage

```
dw          delete word          cw          change word
3w          jump 3 words         5b          jump 5 words back
de          delete to word end   ce          change to word end
dW          delete WORD (no punctuation boundary)
```

## Line Motions

Move within a line.

| Motion | Effect | Example |
|--------|--------|---------|
| `0` | Start of line | `d0` delete from cursor to line start |
| `^` | First non-whitespace | `d^` delete whitespace to cursor |
| `$` | End of line | `d$` delete to line end |
| `g_` | Last non-whitespace | `dg_` delete to last visible char |
| `\|` (pipe) | Column N | `\|50` go to column 50 |

### Usage

```
0           jump to line start        $           jump to line end
d$          delete to end of line     c0          change to line start
^           jump to first letter      A$          append at line end
```

## Document Motions

Move through entire file.

| Motion | Effect | Example |
|--------|--------|---------|
| `gg` | Top of file | `dgg` delete to top |
| `G` | Bottom of file | `dG` delete to bottom |
| `50G` | Line 50 (absolute) | `:50<Enter>` (command mode) |
| `50%` | 50% through file | Jump to middle |

### Usage

```
gg              go to top of file       G               go to end
50G             go to line 50           gG              top of file
dG              delete to end           gg=G            format entire file
```

## Search Motions

Find text and jump.

### Forward Search

| Motion | Effect | Usage |
|--------|--------|-------|
| `/pattern` | Search forward | `d/const` delete until "const" |
| `n` | Next match | Repeat last search forward |
| `N` | Previous match | Repeat last search backward |
| `*` | Search word under cursor | Jump to next occurrence |
| `#` | Search backward for word | Jump to previous occurrence |

### Backward Search

| Motion | Effect | Usage |
|--------|--------|-------|
| `?pattern` | Search backward | `d?function` delete backward |

### Character Search (on line)

| Motion | Effect | Usage |
|--------|--------|-------|
| `f{char}` | Find char forward | `dfa` delete until 'a' |
| `F{char}` | Find char backward | `dFa` delete back to 'a' |
| `t{char}` | Till char forward (before) | `dta` delete before 'a' |
| `T{char}` | Till char backward | `dTa` delete before 'a' back |
| `;` | Repeat f/F/t/T forward | Jump to next occurrence |
| `,` | Repeat f/F/t/T backward | Jump to previous occurrence |

### Usage

```
/function       search forward          ?return         search backward
n               next match              N               previous match
*               search word at cursor   f"              find quote
ta              delete before "a"       f(              find paren
dt)             delete before ")"       ci)             change inside parens
```

## Sentence and Paragraph Motions

Move by semantic blocks.

| Motion | Effect | Example |
|--------|--------|---------|
| `(` | Previous sentence start | `d(` delete to sentence start |
| `)` | Next sentence end | `d)` delete to sentence end |
| `{` | Previous paragraph start | `d{` delete to paragraph start |
| `}` | Next paragraph end | `d}` delete to paragraph end |

### Usage

```
dip             delete paragraph        cip             change paragraph
yap             copy paragraph + blank  vi{             select inside braces
```

## Bracket and Brace Motions

Jump to matching brackets/braces.

| Motion | Effect |
|--------|--------|
| `%` | Jump to matching bracket (`[]{}()`) |

### Usage

```
d%              delete to matching bracket
v%              select to matching bracket
c%              change to matching bracket
```

## Useful Combinations

### Common Recipes

| Recipe | Effect |
|--------|--------|
| `dw` | Delete word |
| `daw` | Delete word + space |
| `diw` | Delete word (no space) |
| `d5w` | Delete 5 words |
| `c$` | Change to end of line |
| `d0` | Delete to start of line |
| `d^` | Delete to first letter |
| `dd` | Delete line |
| `5dd` | Delete 5 lines |
| `dj` | Delete current and next line |
| `d3j` | Delete current + 3 below |
| `yy` | Copy line |
| `3yy` | Copy 3 lines |
| `yip` | Copy paragraph |
| `dG` | Delete to end of file |
| `gg=G` | Auto-indent entire file |
| `:%s/old/new/g` | Replace all (command mode) |
| `gUaw` | Uppercase word |
| `guw` | Lowercase word |

### Workflow Tips

**Find and delete until character:**
```
dt)     delete until closing paren (cursor stays before paren)
df)     delete including closing paren
```

**Jump and yank:**
```
/pattern        search
y2j             yank current + 2 lines below
```

**Format paragraph:**
```
gqip            format paragraph (wraps to textwidth)
```

**Indent multiple lines:**
```
>5j             indent current and 5 below
<3k             dedent current and 3 above
```

## Motion Summary Table

| Type | Keys | Direction | Scope |
|------|------|-----------|-------|
| Character | h/l/j/k | Single char | Current line |
| Word | w/b/e/W/B/E | Word boundary | Multiple words |
| Line | 0/^/$/g_ | Line extent | Current line |
| Document | gg/G | File extent | Entire file |
| Search | /{char}/?/{pattern} | Found text | Whole file |
| Bracket | f/F/t/T/; | Char on line | Current line |
| Semantic | (/)/{/}/%/{} | Block boundary | Block or file |

## The Grammar

Remember: `[count] operator [count] motion`

```
3dw             delete 3 words
d5w             delete 5 words (same)
d$              delete to end of line
5dd             delete 5 lines
dG              delete to end of file
gg=G            auto-indent entire file
gUaw            uppercase a word
```

Motions are reusable with any operator. Once you know motions, you can combine them with operators to make any edit.
