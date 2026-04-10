---
day: 1
title: "The First Keystrokes"
phase: 1
summary: "Rebuild your movement foundation — navigate without touching the mouse"
vim_skills: ["h", "j", "k", "l", "w", "b", "e", "W", "B", "E", "0", "$", "^", "gg", "G", "{count}G", "f", "F", "t", "T", ";", ","]
plugin_focus: null
app_milestone: "Project scaffold, first page renders Day 1 content"
estimated_time: "45-60 min"
prerequisites: []
---

[Course Index](../../COURSE.md) | [Day 2: Enter and Exit →](../day-02/index.md)


## Today's Vim Skills

### The Foundation

Today you unlearn the mouse. Not permanently—just in Neovim. The mouse is useful for many things. For navigating text, it's a trap. It's slow. Your hands leave the keyboard. You hunt for the cursor on the screen. Vim was designed for a world where mice didn't exist, and that's not a limitation—it's genius.

Here's the core insight: **Vim movement is a language, not memorization.** You're learning a vocabulary of motions that compose together. Once you understand how these pieces fit, you'll navigate faster than your eyes can track.

The foundation is this: stay home. Your fingers' home position is the middle four keys on the home row. On a standard keyboard, that's `asdf` (left hand) and `jkl;` (right hand). In Vim, the right hand home row is your navigation console. This is not random. When Vim was created, keyboards were mechanical and had precise, satisfying key feel. The home row *is* where your hands naturally rest.

Let's build from there.

### Character Motions: h, j, k, l

These four keys move the cursor one character or line at a time:

- `h` — left (across keys: `j` is below, `l` is to the right, `h` is to the left)
- `j` — down (the letter `j` has a descender that hangs down)
- `k` — up (mnemonic: just remember it's not `h`, not `l`, so it must be up)
- `l` — right (next to home row)

They're on your right hand home row. No stretching. No reaching. Just rest your fingers there.

**Why not arrow keys?** Arrow keys work in Vim. But they're:
1. Far from the home row (your hand moves)
2. Slow to develop muscle memory (they're not in a logical pattern)
3. Not composable (you'll learn why in Day 3)

Commit to hjkl from day one. It feels weird for maybe 30 minutes. Then your fingers just know where to go.

**Practice:** Open this very file (`course/day-01/index.md`) in Neovim now. Place your fingers on the home row. Use `j` and `k` to scroll through the text. Get the muscle feeling. Your fingers should barely move. The cursor moves, your hand stays still.

### Word Motions: w, b, e and W, B, E

These motions jump by whole words. This is where Vim starts to feel like flight.

**Lowercase word motions (treat punctuation as word boundaries):**

- `w` — jump to the **w**ord ahead (start of next word)
- `b` — jump **b**ack to the start of current or previous word
- `e` — jump to the **e**nd of current or next word

**WORD motions (treat whitespace as word boundaries):**

- `W` — jump to next WORD (skips over punctuation)
- `B` — jump back to previous WORD
- `E` — jump to end of current or next WORD

The difference: `w` stops at every punctuation mark. `W` only stops at whitespace. For example, in `hello-world`:

- From the start: `w` goes to `-`, `w` again goes to `world`
- From the start: `W` jumps directly to the next whitespace-separated word

When do you use which? Default to lowercase `w/b/e` for general navigation. Use `W/B/E` when you want to leap over hyphenated words or code with special characters.

**Practice:** Open `app/package.json`. Use `w` to jump between keys. Count: how many `w` presses from "name" to "astro"? Now try `W` on the same journey. Notice the difference. With `W`, you skip the punctuation inside objects.

### Line Motions: 0, ^, $

These motions move to specific positions on a line:

- `0` — jump to column 1 (the very start, even if there's whitespace)
- `^` — jump to the first non-blank character (the start of actual content)
- `$` — jump to the end of the line

The difference between `0` and `^`: if your line starts with spaces or tabs, `0` stops at column 1, `^` stops at the first character. In Vim, this matters because you often want to ignore indentation and edit the actual code.

**Example:** A Python line `    return True`

- `0` puts you at the first space
- `^` puts you at the `r` in `return`
- `$` puts you at the `e` in `True`

This is a language feature: `^` means "here's where the meaning starts." You'll use it constantly.

### Document Motions: gg, G, {count}G

These motions move by entire files:

- `gg` — jump to the top of the file
- `G` — jump to the bottom of the file
- `{count}G` — jump to line number {count} (e.g., `25G` goes to line 25)

That `{count}` prefix is the first taste of Vim's compositional power. You can specify a number before almost any motion. More on that in Day 3.

**Practice:** In any file, try `gg` to jump to the top, then `G` to jump to the bottom. Then try `50G` to jump to line 50 (if it exists). You can also type `:50` and press Enter—that's the colon-command version. Both work. The motion version is faster once you stop thinking about it.

### Find Motions: f, F, t, T, ;, ,

These motions search within the current line for a character:

- `f{char}` — jump **f**orward to the next occurrence of {char}
- `F{char}` — jump **f**orward-backward (earlier in line) to {char}
- `t{char}` — jump **t**o just before {char} (useful for positioning before pairs)
- `T{char}` — jump to just before {char} going backward
- `;` — repeat the last find motion
- `,` — repeat the last find motion in reverse

This is a subtle but powerful feature. `f"` finds the next quote on this line. `f(` finds the next paren. You jump to exact positions in a keystroke.

The difference between `f` and `t`: `f{char}` lands *on* the character. `t{char}` lands *before* it. This is useful when you want to position your cursor just before a punctuation pair. For example, `t)` when your cursor is at the start of `hello(world)` puts you right before the `)`.

**Mental model for `;` and `,`:** You just did `f"`. The last find was "jump to next quote". If you press `;`, you jump to the *next* next quote (repeat in same direction). If you press `,`, you jump to the previous quote (reverse direction). This is remarkable efficiency: no need to retype `f"` every time.

**Practice:** Open this file again. Find every quote on this page using `f"`. Then use `;` to jump to the next quote, and `,` to go back. Get the rhythm.

### Key Bindings Summary

| Motion | Effect | Notes |
|--------|--------|-------|
| `h` | Left one char | Home row, left direction |
| `j` | Down one line | Home row, downward direction |
| `k` | Up one line | Home row, upward direction |
| `l` | Right one char | Home row, right direction |
| `w` | Next word (word boundary) | Stops at punctuation |
| `b` | Previous word (word boundary) | Stops at punctuation |
| `e` | End of word | Stops at word ends |
| `W` | Next WORD (whitespace boundary) | Skips punctuation |
| `B` | Previous WORD | Skips punctuation |
| `E` | End of WORD | Skips punctuation |
| `0` | Start of line (column 1) | Even if indented |
| `^` | First non-blank character | Start of content |
| `$` | End of line | Last character |
| `gg` | Top of file | Line 1 |
| `G` | Bottom of file | Last line |
| `{count}G` | Jump to line {count} | e.g., `42G` for line 42 |
| `f{char}` | Find {char} forward on line | Lands on character |
| `F{char}` | Find {char} backward on line | Lands on character |
| `t{char}` | To before {char} forward | Lands before character |
| `T{char}` | To before {char} backward | Lands before character |
| `;` | Repeat last find (forward) | Reuses last f/F/t/T |
| `,` | Repeat last find (backward) | Reuses last f/F/t/T |

### Mental Model: Movement as Direction + Distance

When you press `j`, you're saying: "move down one unit." The unit is a line. When you press `w`, you're saying: "move right, but jump whole words."

Here's the composition that becomes powerful in future days: you can combine a **motion** with an **operator** to transform text. For example (preview for later):

- `dw` means "delete the next word"
- `d$` means "delete to end of line"
- `d3w` means "delete the next three words"

The grammar is: `{operator}{count?}{motion}`. Today you're just learning the motions. But keep this in mind: every motion you learn is also a unit you can delete, copy, or change.

---

## Drills

### Drill 1: The hjkl Gauntlet (5 min)

Open `course/day-01/index.md` (this very file) in Neovim. Your task: navigate to every heading using only `j` and `k`. Then, for each section, navigate along a line using only `h` and `l`.

**Rules:**
- No arrow keys
- No mouse
- No Ctrl-D or Page Down (these are crutches)
- If you slip, start over from the top

**Expected outcome:** By the end, your fingers should feel at home on hjkl. You should be able to move down several lines with quick, rhythmic `jjjj` presses without thinking.

**How to check:** Set a timer. Can you navigate from "Today's Vim Skills" to "Drills" in under 20 seconds using only hjkl? If not, drill more.

### Drill 2: Word Hopping (5 min)

Open `app/package.json` in Neovim. Navigate between every key name in the JSON using `w` and `b`. Then use `e` to jump to the end of each value.

**Specific task:** Count how many `w` presses it takes to get from the "name" field to the "astro" value. Write that number down. Now try again using `W` instead. You'll jump further with each keystroke because WORD treats punctuation differently.

**Challenge:** Without looking at the file, can you estimate how many `w` presses? This trains your spatial awareness—predicting motion distance.

**Expected outcome:** You should feel the difference between `w` (word boundary: stops at punctuation) and `W` (WORD boundary: stops at whitespace). By the end, you'll reach for `W` when you want to skip punctuation and `w` for precision.

### Drill 3: Sniper Training (5 min)

Stay in this file (`course/day-01/index.md`). Use find motions to jump to specific characters.

**Challenge sequence:**
1. From the top of this section, use `f"` to jump to the first quote. Good. Now press `;` to jump to the next quote. Keep pressing `;` until you reach the end of this paragraph.
2. Now press `,` to go backward through those quotes. Feel the rhythm.
3. Navigate to the "Key Bindings Summary" heading. Use `f|` to jump to every pipe character (table border). Use `;` to march through the table.
4. From the heading "Drills", use `f:` to find every colon on the page. Count them. Use `,` to rewind.

**Expected outcome:** Find motions become second nature. You realize you can position your cursor at any visible character instantly. No more searching visually—you just specify the character and let the motion do the work.

---

## Build: Your First Page

### What You're Building

The Astro app is already scaffolded in `/app`. Today you'll set it up and edit the homepage to render Day 1 content. By the end, you'll have a website that displays "Neovim Forge - Day 1" with a link to this lesson. It's simple, but it sets the pattern for all 30 days.

### Step-by-Step

#### Step 1: Install and Run

Open a terminal in the project root. Change to the app directory and install dependencies:

```bash
cd app
npm install
npm run dev
```

The app will start on `localhost:4321`. Open that URL in your browser. You'll see a blank page (or an Astro welcome screen). That's fine. This is the starting point.

**Why navigate here in Neovim?** You're not opening the browser from Neovim—that's not the goal. But you *are* running commands and watching feedback. This is part of the vim workflow: command, verify, repeat.

#### Step 2: Open the Home Page

In your terminal (still in the app directory), open `src/pages/index.astro`:

```bash
nvim src/pages/index.astro
```

This file is the homepage. It's written in Astro syntax, which is similar to HTML + JSX.

**Navigate using motions you learned today:**

1. Press `gg` to ensure you're at the top of the file.
2. Use `f<` to jump to the first `<` character (start of the first HTML tag).
3. Use `j` and `k` to skim the file and understand its structure.
4. Jump to the last line using `G`.

#### Step 3: Edit the Page

You'll now edit this file to show a welcome message. Don't worry about exact syntax yet—you're just moving and typing. We'll refine formatting later.

**Replace the page content:**

1. From the top (`gg`), jump to the `<title>` tag using `f<` and then navigate to the content between `<title>` and `</title>`. Use `w` to jump words.
2. Edit the title text. Position your cursor on "Astro" (the text inside the title, not the tag). Use `w` to jump to it, then you can delete and retype. (Deletion is Day 3, but typing and basic editing works now.)
3. Add a simple `<h1>Neovim Forge - Day 1</h1>` somewhere in the body. Navigate to a good spot using `gg`, `G`, and `j`/`k` to find the body section.

**Concrete example:**

Original might be:
```html
<title>Astro</title>
```

After edit:
```html
<title>Neovim Forge</title>
```

And add in the body:
```html
<h1>Neovim Forge - Day 1</h1>
<p>Welcome. Today you unlearn the mouse.</p>
<a href="/day/1/">Start Lesson</a>
```

**Key point:** Every navigation in this edit should use the motions you learned. If you find yourself using arrow keys or the mouse, stop and redo it with hjkl or a motion.

#### Step 4: Save and Verify

Press Escape to exit insert mode, then save with `:w` and Enter. Switch to your browser (or open a new terminal) and refresh `localhost:4321`. You should see your changes: the title in the browser tab, the heading on the page.

If you get an Astro error, check the file for syntax issues (mismatched tags, unclosed brackets). Navigate back to the problem spot using the motions you learned.

#### Step 5: Commit

In the terminal, commit your work:

```bash
git add app/src/pages/index.astro
git commit -m "day-01: scaffold project and create first page"
```

You'll do this for every day. It's your checkpoint—proof that you completed the day's work.

### Stretch Goal

If you finish early, try this:

1. Create a second page. Add `app/src/pages/day-01.astro` as a new file. You'll need to navigate to `app/src/pages/` using motions, then create the file from Neovim using `:e day-01.astro`.
2. In that new file, add a basic structure similar to `index.astro` but with content about Day 1.
3. Add a link from the home page to this new page.

This uses the motions you learned: `f/` to find directory separators, `w` to navigate filenames, and discipline to not touch the mouse.

---

## Checkpoint

**Commit message:** `day-01: scaffold project and create first page`

**Your commit should include modifications or creation of:**

- [ ] `app/src/pages/index.astro` — Modified with Day 1 welcome content

**Validation**

The CI will check:
- [ ] `app/src/pages/index.astro` exists and contains HTML content
- [ ] No TypeScript errors (checked via `astro check`)
- [ ] The commit message starts with `day-01:`

**Self-Check**

Before committing, verify:
1. `cd app && npm run dev` starts without errors
2. `localhost:4321` shows your Day 1 page with a heading and welcome text
3. You made all edits using only vim motions (no mouse, no arrow keys)

---

## Today's Score

Track your progress. Be honest:

- [ ] I can navigate up and down lines with `j` and `k` without thinking
- [ ] I can jump between words using `w` and `b`
- [ ] I understand the difference between word and WORD motions
- [ ] I can find any character on a line using `f` and repeat with `;`
- [ ] I reached the top of a file with `gg` and the bottom with `G`
- [ ] I jumped to a specific line number using `{count}G`
- [ ] I edited and saved a file using only vim motions (no mouse)
- [ ] The Astro app runs and displays my Day 1 page

**Reflection:** Which motion felt most natural? Which one will you need to drill more? Make a note. Next time you edit, that's your focus.

---

**Day 1 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 2: Enter and Exit →](../day-02/index.md)
