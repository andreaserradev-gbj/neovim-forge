---
title: "Text Objects Cheatsheet"
description: "Quick reference for all vim text objects"
---

# Text Objects Cheatsheet

Text objects describe semantic units of text. Use them with operators to make smart selections. This is a one-page quick reference.

## The Two Forms

Every text object has two variants:

- **`i`** (inner) — the contents only
- **`a`** (around) — the contents plus surrounding delimiters or whitespace

Example with quotes:
```
di"     delete text inside quotes (leave quotes)
da"     delete quotes and contents
```

## Built-in Text Objects

### Words

| Object | Effect | Example |
|--------|--------|---------|
| `iw` | Inner word | `diw` delete word, `ciw` change word |
| `aw` | A word (with space) | `daw` delete word + following space |
| `iW` | Inner WORD (non-whitespace) | `diW` delete WORD |
| `aW` | A WORD (with space) | `daW` delete WORD + space |

**Difference:** `w` respects word boundaries (punctuation). `W` only splits on whitespace.

Example:
```
inside-the-word     is 1 WORD but 3 words
```

### Sentences and Paragraphs

| Object | Effect | Example |
|--------|--------|---------|
| `is` | Inner sentence | `dis` delete sentence |
| `as` | A sentence | `das` delete sentence |
| `ip` | Inner paragraph | `dip` delete paragraph |
| `ap` | A paragraph (with blank line) | `dap` delete paragraph |

### Quotes and Delimiters

| Object | Effect | Example |
|--------|--------|---------|
| `i"` | Inside double quotes | `di"` delete quoted text |
| `a"` | Around double quotes | `da"` delete quotes + contents |
| `i'` | Inside single quotes | `di'` delete quoted text |
| `a'` | Around single quotes | `da'` delete quotes + contents |
| `` i` `` | Inside backticks | `` di` `` delete code text |
| `` a` `` | Around backticks | `` da` `` delete backticks + contents |

### Brackets and Parentheses

| Object | Effect | Example |
|--------|--------|---------|
| `i(` or `ib` | Inside parentheses | `di(` delete function args |
| `a(` or `ab` | Around parentheses | `da(` delete parens + contents |
| `i[` | Inside brackets | `di[` delete array contents |
| `a[` | Around brackets | `da[` delete brackets + contents |
| `i{` or `iB` | Inside braces | `di{` delete code block |
| `a{` or `aB` | Around braces | `da{` delete braces + contents |
| `i<` | Inside angle brackets | `di<` delete generic args |
| `a<` | Around angle brackets | `da<` delete angles + contents |

### HTML/XML Tags

| Object | Effect | Example |
|--------|--------|---------|
| `it` | Inside tag | `dit` delete content between `<tag>` and `</tag>` |
| `at` | Around tag | `dat` delete entire `<tag>content</tag>` |

## LazyVim Extended Objects (mini.ai)

LazyVim includes `mini.ai`, which adds semantic text objects. These are incredibly useful for code editing.

### Code Blocks and Functions

| Object | Effect | Example |
|--------|--------|---------|
| `io` | Inner code block (indented) | `dio` delete indented block |
| `ao` | Around code block | `dao` delete block with boundaries |
| `if` | Inner function | `dif` delete function body |
| `af` | Around function | `daf` delete entire function |
| `ic` | Inner class | `dic` delete class body |
| `ac` | Around class | `dac` delete entire class |

### Function Calls and Arguments

| Object | Effect | Example |
|--------|--------|---------|
| `iu` | Inside function call | `diu` delete function call contents |
| `au` | Around function call | `dau` delete entire function call |

### Numbers and Identifiers

| Object | Effect | Example |
|--------|--------|---------|
| `id` | Inside digit | `did` delete number |
| `ad` | Around digit | `dad` delete number |
| `ie` | Inside word with case | `die` delete camelCase chunk |
| `ae` | Around word with case | `dae` delete camelCase identifier |

### Entire Buffer and Navigation

| Object | Effect | Example |
|--------|--------|---------|
| `ig` | Inner (entire buffer) | `dig` delete all text |
| `ag` | Around (entire buffer) | `dag` delete all text |
| `in` | Inner (next object) | `din` delete next word, `vin` select next |
| `al` | Around (last object) | `dal` delete last word, `vil` select last |

**Note:** `in` and `il` combine with any other text object. Examples:
```
vin             select next word
vil             select last word
vin"            select next quoted string
vil(            select last set of parens
```

## Using Text Objects with Operators

### Delete

```
diw             delete word under cursor
daw             delete word + space
dis             delete sentence
dip             delete paragraph
di"             delete quoted string
di(             delete inside parens
di{             delete inside braces
dit             delete tag contents
dif             delete function (mini.ai)
```

### Change

```
ciw             change word (rename variable)
cis             change sentence
cip             change paragraph
ci"             change quoted text
ci(             change function arguments
cit             change tag contents
cif             change function body
```

### Yank

```
yiw             copy word
yip             copy paragraph
yi"             copy quoted text
yi{             copy code block
yif             copy function
```

### Case Operations

```
gUaw            uppercase word + space
gUip            uppercase paragraph
guaw            lowercase word + space
g~aw            toggle word case
```

### Indent

```
>ip             indent paragraph
<ap             dedent paragraph
=if             auto-indent function
```

### Surround (mini.surround)

```
saiw"           add quotes around word
sai("           add quotes inside parens
saip"           add quotes around paragraph
```

## Nested Text Objects

You can nest text objects for complex selections:

```
ci"             change inside quotes
ca(             change around parens
di(di(          delete two nested levels
```

Visual examples:

```
Text: "hello world"
di"   → delete: hello world
da"   → delete: "hello world"

Function: function foo(x, y) { return x + y }
dif   → delete: return x + y
daf   → delete: function foo(x, y) { return x + y }

camelCaseFunction:
die   → delete: Function (just the capital letter chunk in mini.ai)
dae   → delete: camelCaseFunction (entire identifier)
```

## Quick Reference by Task

### If you want to select/change a word:

```
diw             delete inner word (no space)
daw             delete word + space
ciw             change word (rename)
viw             select word
```

### If you want to work with quoted text:

```
di"             delete inside double quotes
da"             delete quotes + contents
ci'             change inside single quotes
ca'             change quotes + contents
vi`             select inside backticks
```

### If you want to work with brackets/parens:

```
di(             delete inside parens
da(             delete parens + contents
di{             delete inside braces
da[             delete brackets + contents
di<             delete inside angle brackets
```

### If you want to work with code blocks:

```
dif             delete function (mini.ai)
daf             delete entire function (mini.ai)
dic             delete inside class (mini.ai)
dio             delete code block (mini.ai)
```

### If you want to work with paragraphs/sentences:

```
dip             delete paragraph
dap             delete paragraph + blank line
dis             delete sentence
das             delete sentence
gqip            format paragraph
```

### If you want to work with HTML/XML:

```
dit             delete inside tags
dat             delete tags + contents
cit             change inside tags
```

## Text Object Speed Tips

### Cursor Position Matters

Text objects work from cursor position:

```
const name = "John";
                 ^ cursor here
di"             deletes: John
da"             deletes: "John"
```

### The `in` and `al` Objects

These are powerful for navigation:

```
position on word, then:
vin             select next word
vil             select last word
vin"            select next quoted string
```

### Combining with Operators

Any operator + text object:

```
yiw             copy word
giw             (not a real command, but syntax is valid)
>ip             indent paragraph
=af             auto-indent function
```

### Counts with Text Objects

Some text objects support counts:

```
d2iw            delete 2 words
3yaw            copy 3 words + spaces
c2ip            change 2 paragraphs
```

## Summary Table

| Category | Inner | Around | Use |
|----------|-------|--------|-----|
| Word | iw | aw | Rename, delete word |
| Sentence | is | as | Delete/change sentence |
| Paragraph | ip | ap | Format, delete paragraph |
| Quotes | i" / i' / i` | a" / a' / a` | Edit strings |
| Parens | i( / i[ / i{ | a( / a[ / a{ | Edit function args |
| Tags | it | at | Edit HTML/XML |
| Function | if | af | Edit function body/def (mini.ai) |
| Class | ic | ac | Edit class body/def (mini.ai) |
| Code block | io | ao | Edit indented block (mini.ai) |
| Number | id | ad | Edit digit (mini.ai) |
| Identifier | ie | ae | Edit camelCase chunk (mini.ai) |

## Memorization Strategy

1. Start with `d`, `c`, `y` operators
2. Learn `iw`, `i"`, `i(`, `ip` text objects
3. Expand to `a` variants (around)
4. Add mini.ai objects as you code: `if`, `ic`, `io`
5. Use `in` and `il` for smart navigation

You don't need to memorize all of these. Start with the ones you use daily, and the rest will become natural over time.
