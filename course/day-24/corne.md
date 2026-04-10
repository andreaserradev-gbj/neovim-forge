---
day: 24
track: "corne"
title: "Day 24 — Corne Companion: Advanced Text Objects"
---

[← Day 24: Advanced Text Objects](index.md) | [Course Index](../../COURSE.md)


## Text Objects on the Corne

Advanced text objects are all base-layer sequences with no special modifier complexity.

| Object | Keys | Hand Sequence | Comfort |
|---|---|---|---|
| `io`/`ao` | `i/a` + `o` | Left + Right | Very smooth |
| `if`/`af` | `i/a` + `f` | Left + Right | Very smooth |
| `ic`/`ac` | `i/a` + `c` | Left + Right | Very smooth |
| `iu`/`au` | `i/a` + `u` | Left + Right | Very smooth |
| `id`/`ad` | `i/a` + `d` | Left + Right | Very smooth |
| `ie`/`ae` | `i/a` + `e` | Left + Right | Very smooth |
| `ig`/`ag` | `i/a` + `g` | Left + Right | Requires left shift for `a`, then `g` |
| `iq`/`aQ` | `i/a` + `q` | Left + Right | Very smooth |

All of these follow the pattern: left hand initiates (`i` or `a`), right hand completes the semantic unit (letter indicating what to select).

**Corne advantage:** On a standard keyboard, text objects require reaching across the keyboard or doing awkward finger combinations. On the Corne with a columnar layout:
- `i` (left home) and `a` (left home) are *right there*
- The letter that follows (o, f, c, u, d, e, g, q) is typically on the right side
- The sequence is: left tap, right tap—natural alternation, minimal movement

### Examples with Operators

All the editing you learned combines naturally with text objects:

| Command | Execution | Hand Movement |
|---|---|---|
| `dif` | `d` (left) + `i` (left) + `f` (right) | Left, left (same finger), right—very rhythmic |
| `daf` | `d` (left) + `a` (left) + `f` (right) | Same pattern |
| `yau` | `y` (right) + `a` (left) + `u` (right) | Right, left, right—hand alternation |
| `cic` | `c` (left) + `i` (left) + `c` (right) | Left, left, right |
| `=af` | `=` (shift+; right) + `a` (left) + `f` (right) | Right shift+pinky, left, right |

Once you're in the rhythm, these are incredibly fast. You're doing:
- Press operator (left, mostly)
- Press `i` or `a` (left home row)
- Press semantic letter (right, depending on what you want)

The Corne's columnar layout makes this smooth because there's no horizontal reach—just vertical taps and hand alternation.

---

## Refactoring Workflow on the Corne

Here's a full refactoring workflow using text objects:

**Extracting a component:**

1. **Open file:** `nvim src/components/LargeCard.astro`
2. **Find block:** `/card-header` (search left hand)
3. **Select:** `vao` (v=left, a=left, o=right)—visual select the block
4. **Copy:** `y` (right)
5. **Delete:** `d` (left)—now you have it copied and removed from the original
6. **Create file:** `:e src/components/CardHeader.astro` (colon command)
7. **Paste:** `p` (right)
8. **Edit structure:** insert component wrapper, adjust props
9. **Back to original:** `:e src/components/LargeCard.astro`
10. **Import:** `i` to insert the import line at the top
11. **Use component:** navigate to where the block was, type the component tag

**Hand movement analysis:**
- Search: left hand
- Selection: left-left-right pattern
- Copy: right hand (one key)
- Delete: left hand
- File commands: colon (right), then type
- Paste: right hand
- Editing: mix of left and right, all comfortable

By this point in the course, you're not thinking about hands anymore. The Corne layout is just the interface between your brain and the code.

---

## Speed Gains from Text Objects

On a standard keyboard, refactoring requires:
1. Find the block (search or manual navigation)
2. Manually select with mouse or by holding Shift and pressing arrow keys
3. Copy, cut, or delete
4. Navigate to new location
5. Paste and adjust

On Vim + Corne with text objects:
1. Find the block: `/{pattern}` (one search command)
2. Select semantically: `vao` (three keys, knows what you want)
3. Copy/delete: `y` or `d` (one key)
4. File switching: `:e` (one command, one path)
5. Paste: `p` (one key)

The difference is that Vim + Corne understand *what* you're selecting (a function, a block, a call), not just *where* you're clicking. This semantic awareness is what makes text objects so powerful.

---

## Combining Text Objects with Other Skills

By Day 24, you know:
- **Motions:** hjkl, w/b, gg/G, f/F/t/T
- **Marks:** m{a-z}, '{a-z}
- **Jumps:** <C-o>, <C-i>
- **Folds:** za, zM, zR
- **Text objects:** io/ao, if/af, etc.

These all compose. Example workflow:

1. **Mark key locations:** `mA` at the start of component A
2. **Navigate:** `gd` to jump to definition of a helper function
3. **Edit:** `dif` to delete the function body, then `if` + insert to rewrite it
4. **Fold:** `zM` to collapse the file and see structure
5. **Jump back:** `'A` to return to the component
6. **Refactor:** `vao` to select a block, `d` to delete, navigate to new file, `p` to paste

Every tool you've learned now combines with every other tool. That's the power of learning Vim systematically—you're building a composable system.

---

## Corne Tips for Text Objects

1. **Rhythm:** Once you know the pattern (operator + i/a + letter), text objects become automatic. Practice the rhythm: left-left-right or left-right-right, depending on the command.

2. **Nesting:** You can use counts with text objects. `d2io` deletes inside two nested braces. The count comes before the text object: `operator + count + i/a + letter`.

3. **Visual before destructive:** When learning text objects, use `v` first to see what gets selected. `vif` before `dif`. This prevents accidents.

4. **Treesitter accuracy:** Make sure your Neovim config has treesitter installed and configured for your language. This makes text objects like `if`/`af` accurate for your code.

---

## Next Up

Day 25 introduces **Project-Wide Replace** with grug-far.nvim. By then, you'll have the skills to:
- Find patterns (search)
- Edit them locally (operators + text objects)
- Replace them everywhere (grug-far)

The combination of Day 24's refactoring skills and Day 25's find-replace is where you become truly efficient at large-scale code changes.

---

[← Day 24: Advanced Text Objects](index.md) | [Day 24 Exercises](exercises.md) | [Day 24 Checkpoint](checkpoint.md)
