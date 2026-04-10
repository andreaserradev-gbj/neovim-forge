---
title: "Operators Cheatsheet"
description: "Quick reference for all vim operators"
---

# Operators Cheatsheet

Operators are actions. They require a motion or text object to specify what to operate on. This is a one-page quick reference.

## The Grammar

Operators form the core of vim's composable language:

```
[count] operator [count] motion/text-object
```

Examples:
- `dw` — delete word
- `3dw` — delete 3 words
- `d3w` — delete 3 words (alternative count placement)
- `yy` — yank line
- `5dd` — delete 5 lines

## Core Operators

| Operator | Key | Effect | Double | Example |
|----------|-----|--------|--------|---------|
| Delete | `d` | Cut text | `dd` line | `dw` delete word, `d$` delete to EOL |
| Change | `c` | Delete + insert | `cc` line | `cw` change word, `c0` change to start |
| Yank | `y` | Copy text | `yy` line | `yw` copy word, `yip` copy paragraph |
| Swap Case | `g~` | Upper↔Lower | `g~~` line | `g~w` swap word case |
| Lowercase | `gu` | Make lowercase | `guu` line | `guw` lowercase word |
| Uppercase | `gU` | Make uppercase | `gUU` line | `gUw` uppercase word |
| Indent Right | `>` | Add indent | `>>` line | `>j` indent below |
| Indent Left | `<` | Remove indent | `<<` line | `<k` dedent above |
| Auto-indent | `=` | Format indent | `==` line | `=ip` reformat paragraph |
| Format | `gq` | Wrap text | `gqq` line | `gqip` format paragraph |

## Doubling Operators

When you double an operator, it acts on the current line:

```
dd              delete entire line
yy              copy entire line
cc              change entire line (replace entire line with new text)
>>              indent line
<<              dedent line
==              auto-indent line
g~~             toggle case of line
guu             lowercase line
gUU             uppercase line
gqq             format line
```

With counts:

```
5dd             delete 5 lines
10yy            copy 10 lines
3cc             replace 3 lines
5>>             indent 5 lines
```

## Operators with Motions

Combine operators with any motion:

### Delete Operator `d`

| Combo | Effect |
|-------|--------|
| `dw` | Delete word |
| `d3w` | Delete 3 words |
| `daw` | Delete word + space |
| `d0` | Delete to line start |
| `d$` | Delete to line end |
| `dj` | Delete current + next line |
| `dG` | Delete to file end |
| `d/pattern` | Delete to search pattern |
| `df)` | Delete until closing paren (inclusive) |
| `dt)` | Delete before closing paren (exclusive) |

### Change Operator `c`

| Combo | Effect |
|-------|--------|
| `cw` | Change word (delete + insert) |
| `c$` | Change to line end |
| `c0` | Change to line start |
| `cip` | Change paragraph |
| `ci"` | Change inside quotes (enter insert mode) |
| `ca(` | Change around parens |
| `cc` | Replace entire line |
| `C` | Change to line end (shorthand for c$) |

### Yank Operator `y`

| Combo | Effect |
|-------|--------|
| `yw` | Copy word |
| `yy` | Copy line |
| `y5j` | Copy current + 5 below |
| `yip` | Copy paragraph |
| `y0` | Copy to line start |
| `y$` | Copy to line end |
| `yG` | Copy to file end |

### Case Operators

```
gUw             uppercase word
guw             lowercase word
g~w             toggle word case
gUU             uppercase line
guu             lowercase line
g~~             toggle line case
gUip            uppercase paragraph
guap            lowercase paragraph around
```

### Indent Operators

```
>j              indent line below
>5j             indent 5 lines below
<k              dedent line above
<3k             dedent 3 above
>>              indent current line
<<              dedent current line
>ip             indent paragraph
=ip             auto-indent paragraph
gg=G            auto-indent entire file
```

### Format Operator

```
gqip            wrap and format paragraph
gqq             format current line
gq5j            format current + 5 below
gG              format entire file
```

## Operators with Text Objects

Text objects are semantic selections. They work with all operators:

### Delete with Text Objects

| Combo | Effect |
|-------|--------|
| `diw` | Delete word under cursor |
| `daw` | Delete word + space |
| `dis` | Delete sentence |
| `dip` | Delete paragraph |
| `di"` | Delete inside quotes |
| `da"` | Delete quotes + contents |
| `di(` | Delete inside parens |
| `da)` | Delete parens + contents |
| `di{` | Delete inside braces |
| `dit` | Delete inside tags (HTML) |
| `dat` | Delete tags + contents |

### Change with Text Objects

| Combo | Effect |
|-------|--------|
| `ciw` | Change word (rename variable) |
| `ci"` | Change quoted string |
| `ci(` | Change function args |
| `cip` | Change paragraph |
| `cit` | Change tag contents |

### Case with Text Objects

| Combo | Effect |
|-------|--------|
| `gUaw` | Uppercase word + space |
| `gUip` | Uppercase paragraph |
| `guip` | Lowercase paragraph |
| `g~aw` | Toggle word case |

### Indent with Text Objects

| Combo | Effect |
|-------|--------|
| `>ip` | Indent paragraph |
| `<ap` | Dedent paragraph |
| `=ip` | Auto-indent paragraph |

## Special Operators

### Comment (vim-commentary - default in LazyVim)

| Operator | Effect |
|----------|--------|
| `gc` | Toggle comment on motion/text-object |

Examples:
```
gcw             toggle comment on word
gcip            toggle comment on paragraph
gcc             toggle comment on line
5gcc            toggle comment on 5 lines
```

### Surround (mini.surround - default in LazyVim)

| Operator | Effect |
|----------|--------|
| `sa` | Add surround |
| `sd` | Delete surround |
| `sr` | Replace surround |

Examples:
```
saiw"           add quotes around word
sd"             delete surrounding quotes
sr"'            change quotes to apostrophes
```

## The Dot Command

Repeat your last change with `.`

```
dw              delete word
.               repeat (delete next word)
.               repeat again
```

Works with any operator:

```
cw              change word
new text
<Esc>
.               change next word to "new text"
.               and next word
```

Extremely powerful for repetitive edits.

## Common Workflows

### Rename a Variable

```
ciw             change word under cursor
new_name
<Esc>
```

Then use `.` to repeat on other occurrences (though `<leader>cr` in LazyVim is faster for project-wide rename).

### Delete Multiple Words

```
dw              delete first word
.               delete next word (if not in sequence)
3w.             jump 3 words, then delete
```

Or use count:
```
3dw             delete 3 words
```

### Uppercase Function Names

```
gUaw            uppercase word
j               move to next
.               repeat
.               repeat
```

Or use count:
```
gU3aw           uppercase 3 words
```

### Format Code Block

```
=ip             auto-indent paragraph
```

Or entire file:
```
gg=G            go to top, then auto-indent to bottom
```

### Comment Out Lines

```
gcc             comment current line
j               move down
.               repeat
```

Or use count:
```
5gcc            comment 5 lines
```

### Add Quotes

```
saiw"           surround word with quotes
j               move to next
.               repeat
```

Or operate on text object:
```
sawb"           surround word with quotes
sai("           surround inside parens with quotes
```

## Operator Reference by Task

### If you want to delete...

```
x               delete char under cursor
dw              delete word
daw             delete word + space
d0              delete to line start
d$              delete to line end
dd              delete line
5dd             delete 5 lines
dip             delete paragraph
dG              delete to file end
di"             delete text in quotes
di(             delete function arguments
```

### If you want to change...

```
r{char}         replace single char
cw              change word
cc              change line
c$              change to EOL
cip             change paragraph
ci"             change quoted text
ci(             change function args
```

### If you want to copy...

```
yw              copy word
yy              copy line
yip             copy paragraph
y$              copy to EOL
yG              copy to EOF
```

### If you want to indent...

```
>>              indent line
<<              dedent line
5>>             indent 5 lines
>ip             indent paragraph
gg=G            format entire file
```

### If you want to change case...

```
~               toggle char (vim built-in)
gUw             uppercase word
guw             lowercase word
g~w             toggle word
gUU             uppercase line
guu             lowercase line
```

## Summary

Operators are verbs. Motions and text objects are nouns. Together they form a language:

- `operator` + `motion` = `command`
- `d` (delete) + `w` (word) = `dw` (delete word)
- `d` (delete) + `3w` (3 words) = `d3w` (delete 3 words)
- `gu` (lowercase) + `aw` (a word) = `guaw` (lowercase word)

Master the operators and motions listed here, and you can compose infinite edits.
