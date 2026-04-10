---
title: "The Vim Grammar"
description: "Understanding vim's language: operators, motions, text objects, and counts"
---

# The Vim Grammar

Vim operates like a language. Once you understand the grammar, seemingly complex commands become natural combinations of simple, reusable pieces. This reference explains how vim's language works.

## The Formula

The core of vim's grammar is:

```
[count] operator [count] motion/text-object
```

Each part is optional, and each can be repeated. Examples:

- `dw` — delete word
- `3dw` — delete 3 words
- `d3w` — delete 3 words (count before operator)
- `3d3w` — delete 3 times 3 words = 9 words
- `2yy` — yank 2 lines
- `gUaw` — uppercase a word

**Key insight:** The operator (d, c, y, etc.) + motion (w, j, e, etc.) combination is what makes vim powerful. Once you know the operators and motions, you can combine them freely.

## Operators

Operators are actions. They require a motion or text object to specify *what* to operate on.

| Operator | Key | Effect | Example |
|----------|-----|--------|---------|
| Delete | `d` | Delete (cut) text | `dw` delete word, `dd` delete line |
| Change | `c` | Delete and enter insert mode | `cw` change word, `c$` change to end of line |
| Yank | `y` | Copy text | `yw` copy word, `yy` copy line |
| Swap Case | `g~` | Swap case (upper<->lower) | `g~w` swap word case |
| Lowercase | `gu` | Convert to lowercase | `guw` lowercase word |
| Uppercase | `gU` | Convert to uppercase | `gUw` uppercase word |
| Indent Right | `>` | Indent (add whitespace) | `>j` indent line below |
| Indent Left | `<` | Dedent (remove whitespace) | `<k` dedent line above |
| Auto-indent | `=` | Auto-indent using language rules | `=j` auto-indent line below |
| Format | `gq` | Wrap and format text | `gqip` format paragraph |

### Special Cases: Doubling the Operator

When you double an operator, it usually acts on the current line:

| Command | Effect |
|---------|--------|
| `dd` | Delete entire line |
| `cc` | Change entire line |
| `yy` | Yank entire line |
| `>>` | Indent entire line |
| `<<` | Dedent entire line |
| `==` | Auto-indent entire line |

## Motions

Motions move the cursor. When used with an operator, they define the scope of the operation.

### Character Motions

| Motion | Effect | Example |
|--------|--------|---------|
| `h` | Left one character | `dh` delete left |
| `j` | Down one line | `5j` move down 5 lines |
| `k` | Up one line | `dk` delete above |
| `l` | Right one character | `dl` delete right |

### Word Motions

| Motion | Effect | Example |
|--------|--------|---------|
| `w` | Forward to start of next word | `dw` delete word |
| `W` | Forward to start of next WORD (whitespace-delimited) | `dW` delete WORD |
| `b` | Backward to start of word | `db` delete word backward |
| `B` | Backward to start of WORD | `dB` delete WORD backward |
| `e` | Forward to end of word | `de` delete to end of word |
| `E` | Forward to end of WORD | `dE` delete to end of WORD |

**Difference:** `w/b/e` respect punctuation. `W/B/E` only split on whitespace. Example: `inside-the-word` is 1 WORD but 3 words.

### Line Motions

| Motion | Effect | Example |
|--------|--------|---------|
| `0` | Start of line | `d0` delete from cursor to start of line |
| `^` | First non-whitespace character | `d^` delete from cursor to first non-whitespace |
| `$` | End of line | `d$` delete from cursor to end of line |
| `g_` | Last non-whitespace character | `dg_` delete to last non-whitespace |

### Document Motions

| Motion | Effect | Example |
|--------|--------|---------|
| `gg` | Start of document | `dgg` delete from cursor to top |
| `G` | End of document | `dG` delete from cursor to bottom |
| `{n}G` | Go to line N | `50G` go to line 50, `d50G` delete to line 50 |
| `{n}gg` | Go to line N (alternative) | `50gg` same as above |

### Search Motions

| Motion | Effect | Example |
|--------|--------|---------|
| `f{char}` | Find next character on line | `dfa` delete until 'a' |
| `F{char}` | Find previous character on line | `dFa` delete until 'a' backward |
| `t{char}` | Till next character (one before) | `dta` delete until before 'a' |
| `T{char}` | Till previous character | `dTa` delete until before 'a' backward |
| `;` | Repeat last f/F/t/T | `dta;` delete to char, then repeat |
| `,` | Repeat last f/F/t/T backward | `dt,` |
| `/pattern` | Search forward | `d/const` delete to "const" |
| `?pattern` | Search backward | `d?function` delete to "function" |

### Bracket Motions

| Motion | Effect | Example |
|--------|--------|---------|
| `(` | Backward to start of sentence | `d(` delete to sentence start |
| `)` | Forward to end of sentence | `d)` delete to sentence end |
| `{` | Backward to start of paragraph | `d{` delete to paragraph start |
| `}` | Forward to end of paragraph | `d}` delete to paragraph end |
| `%` | Jump to matching bracket | `d%` delete to matching bracket |

## Text Objects

Text objects describe semantic units of text (words, sentences, paragraphs, code blocks). They come in two flavors:

- **`i`** (inner) — select the contents only
- **`a`** (around) — select the contents plus surrounding whitespace/delimiters

### Built-in Text Objects

| Object | Effect | Example |
|--------|--------|---------|
| `iw` | Inner word | `diw` delete word, `ciw` change word |
| `aw` | A word (with space) | `daw` delete word + space |
| `iW` | Inner WORD | `diW` delete WORD |
| `aW` | A WORD (with space) | `daW` delete WORD + space |
| `is` | Inner sentence | `dis` delete sentence |
| `as` | A sentence | `das` delete sentence |
| `ip` | Inner paragraph | `dip` delete paragraph |
| `ap` | A paragraph | `dap` delete paragraph |
| `i"` | Inside double quotes | `di"` delete quoted text |
| `a"` | Around double quotes | `da"` delete quotes + contents |
| `i'` | Inside single quotes | `di'` delete quoted text |
| `a'` | Around single quotes | `da'` delete quotes + contents |
| `` i` `` | Inside backticks | `` di` `` delete code text |
| `` a` `` | Around backticks | `` da` `` delete backticks + contents |
| `i(` or `ib` | Inside parentheses | `di(` delete inside parens |
| `a(` or `ab` | Around parentheses | `da(` delete parens + contents |
| `i[` | Inside brackets | `di[` delete inside brackets |
| `a[` | Around brackets | `da[` delete brackets + contents |
| `i{` or `iB` | Inside braces | `di{` delete inside braces |
| `a{` or `aB` | Around braces | `da{` delete braces + contents |
| `i<` | Inside angle brackets | `di<` delete inside angles |
| `a<` | Around angle brackets | `da<` delete angles + contents |
| `it` | Inside HTML/XML tag | `dit` delete tag contents |
| `at` | Around HTML/XML tag | `dat` delete tags + contents |

### LazyVim Extras (mini.ai)

With `mini.ai` plugin enabled, you get additional text objects:

| Object | Effect | Example |
|--------|--------|---------|
| `io` | Inside code block (indented) | `dio` delete code block |
| `ao` | Around code block | `dao` delete code block |
| `if` | Inside function | `dif` delete function body |
| `af` | Around function | `daf` delete function def |
| `ic` | Inside class | `dic` delete class body |
| `ac` | Around class | `dac` delete class def |
| `iu` | Inside function call | `diu` delete call contents |
| `au` | Around function call | `dau` delete function call |
| `id` | Inside digit/number | `did` delete number |
| `ad` | Around digit | `dad` delete number |
| `ie` | Inside word with case (camelCase chunk) | `die` delete camelCase part |
| `ae` | Around word with case | `dae` delete camelCase chunk |
| `ig` | Inside entire buffer | `dig` delete all (same as gg+dG) |
| `ag` | Around entire buffer | `dag` delete all |
| `in` | Inside next text object | `din` delete next object |
| `il` | Inside last text object | `dil` delete last object |

**Note:** `in` and `il` work with any motion. For example, `vin` selects the next word, `vil` selects the last paragraph.

## Counts

Counts modify operators and motions to repeat them N times.

### Count Before Operator

```
5dd     — delete 5 lines
3dw     — delete 3 words
10j     — move down 10 lines
2yy     — yank 2 lines
```

### Count After Operator

```
d5w     — delete 5 words (same as 5dw)
y3j     — yank 3 lines down
c2e     — change 2 words forward
```

### Both Count and Motion

```
3d5w    — delete 3 times 5 words = 15 words
2y3j    — yank 3 lines, 2 times (unusual; counts stack)
```

### Line Count Shorthand

When you double an operator with a count, it applies the count to lines:

```
5dd     — delete 5 lines
5yy     — yank 5 lines
5cc     — change 5 lines (enter insert, replace 5 lines)
5>>     — indent 5 lines
```

## The Dot Command

The dot `.` repeats your last change. This is one of vim's most powerful features.

```
dw          — delete a word
.           — delete the next word (repeat dw)
.           — delete the next word again

3dw         — delete 3 words
.           — delete 3 more words

cw          — change word
(type new text)
<Esc>       — exit insert mode
.           — change the next word
```

**Why it matters:** You can make a complex edit once, then repeat it instantly across your file.

## Combining Everything: Common Recipes

### Select and Operate

Many operations combine a visual selection (`v` or `V`) with an operator:

| Recipe | Effect |
|--------|--------|
| `vip` + `d` | Select paragraph, then delete |
| `V3j` + `>` | Select 3 lines down, then indent |
| `vi"` + `y` | Select text in quotes, then yank |
| `V` + `gU` | Select line, then uppercase |

### Change and Navigate

```
cw              — change word, enter insert, move to next word
gUaw            — uppercase a word, including space
3dd             — delete 3 lines, stay on current line
d3w             — delete 3 words, stay at cursor
```

### Text Object Recipes

| Recipe | Effect |
|--------|--------|
| `diw` | Delete word under cursor (useful for refactoring) |
| `ciw` | Change word under cursor (rename a variable) |
| `ci"` | Change text in quotes (edit string) |
| `di(` | Delete function arguments |
| `cip` | Change paragraph (rewrite a block) |
| `dap` | Delete paragraph + blank line |
| `yip` | Copy paragraph |
| `gUaw` | Uppercase a word |
| `2diw` | Delete 2 words |

### Multi-line Recipes

| Recipe | Effect |
|--------|--------|
| `5dd` | Delete 5 lines |
| `V3jd` | Delete 4 lines (current + 3 below) |
| `dG` | Delete to end of file |
| `gg` + `dG` | Delete entire file |
| `d10l` | Delete next 10 characters |
| `10x` | Delete next 10 characters (x = delete char) |

### Case Manipulation

| Recipe | Effect |
|--------|--------|
| `~` | Toggle case of character under cursor |
| `gUw` | Uppercase word |
| `guw` | Lowercase word |
| `g~w` | Toggle word case |
| `gUU` | Uppercase line |
| `guu` | Lowercase line |
| `gUip` | Uppercase paragraph |

### Indentation

| Recipe | Effect |
|--------|--------|
| `>j` | Indent current and next line |
| `3>>` | Indent 3 lines |
| `<` + motion | Dedent by motion |
| `=ip` | Auto-indent paragraph |
| `gg=G` | Auto-indent entire file |
| `gv=` | Re-indent last selection |

### Formatting

| Recipe | Effect |
|--------|--------|
| `gqip` | Wrap paragraph to textwidth |
| `gq5j` | Wrap 5 lines |
| `gG` | Format entire file |

## Quick Reference by Task

### If you want to...

**Delete something:**
- `x` — delete character under cursor
- `dw` — delete word
- `dd` — delete line
- `d$` — delete to end of line
- `dip` — delete paragraph
- `di"` — delete text in quotes

**Change something:**
- `r{char}` — replace character
- `cw` — change word
- `cc` — change line
- `c$` — change to end of line
- `cip` — change paragraph
- `ci"` — change text in quotes

**Copy something:**
- `yw` — copy word
- `yy` — copy line
- `yip` — copy paragraph
- `y$` — copy to end of line

**Move something:**
- `dd` — cut line
- `daw` — cut word + space
- `p` — paste after
- `P` — paste before

**Make something uppercase/lowercase:**
- `gUw` — uppercase word
- `guw` — lowercase word
- `g~w` — toggle word case
- `gUU` — uppercase line

**Indent something:**
- `>>` — indent line
- `>j` — indent this line and next
- `>ip` — indent paragraph
- `>G` — indent to end of file

## The Grammar in Action

Here's a complex example broken down:

```
3gUw
```

- `3` — count: repeat 3 times
- `gU` — operator: uppercase
- `w` — motion: word

**Effect:** Uppercase the next 3 words.

Another example:

```
2diw
```

- `2` — count: repeat 2 times
- `d` — operator: delete
- `iw` — text object: inner word

**Effect:** Delete 2 words.

One more:

```
gci(
```

- `gc` — operator: toggle comment (vim-commentary)
- `i(` — text object: inside parentheses

**Effect:** Comment/uncomment code inside parentheses.

## Mental Model: Vim as a Language

Think of vim commands as sentences:

- **Verb** = operator (d, c, y, etc.)
- **Noun** = motion or text object (w, j, i", ap, etc.)
- **Modifier** = count (3, 5, etc.)

Just like in English, you can say:
- "Delete word" (`dw`)
- "Delete three words" (`3dw` or `d3w`)
- "Delete paragraph" (`dip`)
- "Change sentence" (`cis`)

Once you internalize this grammar, vim stops feeling like memorizing hotkeys and starts feeling like composing sentences. You don't memorize "delete three words" — you compose it from "delete" + "three times" + "word."

This is why vim users are fast: we're not remembering thousands of commands. We're combining a handful of operators with dozens of motions in new ways every day.
