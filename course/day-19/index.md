---
day: 19
title: "Registers Deep Dive"
phase: 3
summary: "Harness the power of copy-paste — named registers, system clipboard, expression registers"
vim_skills: ["\"a-\"z", "\"\"", "\"+", "\"=\"", "\"_", "\"0", "\".", "\"%", "\":", ":reg"]
plugin_focus: null
app_milestone: "Build reusable code snippet system — component with copyable code blocks, clipboard integration"
estimated_time: "45-60 min"
prerequisites: ["day-18"]
---

[← Day 18: Git in the Editor](../day-18/index.md) | [Course Index](../../COURSE.md) | [Day 20: Macros →](../day-20/index.md)


## Today's Vim Skills

### What Are Registers?

Registers are Vim's clipboards. When you delete text (`d`), copy text (`y`), or make other changes, the deleted/copied text goes into a register. Later, you paste it with `p`. That's the unnamed register `""`.

But Vim has many more registers. Named registers (`"a` through `"z`) let you store multiple snippets simultaneously. The system clipboard (`"+`) integrates with your OS. Expression registers (`"=`) let you paste the result of Vim commands. This is power most editors don't have.

### The Registers

**Unnamed register (`""`):** The default. When you yank or delete, it goes here. `yy` copies the line to `""`. Then `p` pastes from `""`.

**Named registers (`"a` through `"z`):** You control where text goes. `"ayy` copies the line to register `a`. Later, `"ap` pastes from register `a`. This lets you hold multiple snippets at once.

**System clipboard (`"+`):** On Mac, Linux, Windows, Vim can access your OS clipboard. `"+y` copies to system clipboard (so you can paste in your browser). `"+p` pastes from system clipboard (text you copied from another app).

**Expression register (`"=`):** Evaluates a Vim expression and pastes the result. `"=1+1<CR>p` pastes `2`. `"=&tabwidth<CR>p` pastes the current tab width. Powerful for inserting computed values.

**Black hole register (`"_`):** A register that discards everything. `"_dd` deletes a line without saving it to any register. Useful when you want to delete something but not overwrite your unnamed register.

**Last yank register (`"0`):** Always contains your last yanked text. Even if you delete something (which overwrites `""`), `"0p` still pastes your last copy. Great for "I copied this, then deleted something, now I want my copy back."

**Read-only registers:**
- `".` — last inserted text
- `"%` — current filename
- `":` — last command
- `"/` — last search pattern

### Key Bindings

| Register | Usage | Notes |
|----------|-------|-------|
| `""` | unnamed | Default register, used by all motions |
| `"a` through `"z` | named | User-controlled, hold snippets |
| `"A` through `"Z` | append | Append to named registers (capital letter appends) |
| `"` | system clipboard | On most systems, `"+y` and `"+p` |
| `"=` | expression | Evaluate Vim expression |
| `"_` | black hole | Discard text (don't save to any register) |
| `"0` | last yank | Last text you copied with `y` |
| `".` | last insert | Last text you typed in insert mode |
| `"%` | filename | Current file's path |
| `":` | last command | Last command executed |
| `:reg` | show registers | Display all register contents |

### Mental Model: Multiple Clipboards

Think of named registers as multiple clipboards on your desk. You need to copy three code snippets. You can't hold three things in one clipboard. So: copy snippet 1 to register `a`, snippet 2 to register `b`, snippet 3 to register `c`. Later, you paste `a`, `b`, or `c` whenever you need them. No juggling.

System clipboard is your "bridge" to the outside world — your OS's clipboard. When you want to paste code from your browser into Vim, you paste from the system clipboard. When you want to send code to Slack, you copy to the system clipboard.

---

## Drills

### Drill 1: Named Registers (5 min)

Open any file with multiple short blocks of code. Let's use `app/src/lib/types.ts`:

```bash
nvim app/src/lib/types.ts
```

Select a line (your Day interface definition). Copy it to register `a`:

```
"ayy
```

(Quote, a, y, y — copy current line to register a)

Move to another section. Copy a different block to register `b`:

```
"byy
```

Now navigate to a blank area. Paste register `a`:

```
"ap
```

The first line appears. Press `p` again — it pastes from the unnamed register, which is the most recent copy (probably register `b`).

Now paste register `a` again:

```
"ap
```

The first block appears again (register `a` still has its content).

**Expected outcome:** You understand that named registers hold independent snippets.

### Drill 2: System Clipboard (5 min)

Copy something to your system clipboard from another app (copy some text from your browser, for example). Then in Vim:

```
"+p
```

The text you copied from outside appears in Vim. This bridges Vim and the rest of your OS.

Now in Vim, copy a line to your system clipboard:

```
"+yy
```

Switch to another app (terminal, browser, text editor). Paste. The Vim text appears.

**Expected outcome:** System clipboard is your bridge to the outside world.

### Drill 3: Black Hole Register (5 min)

When you delete something with `d` or `c`, it goes to the unnamed register, overwriting your last copy. Sometimes you want to delete without losing your clipboard.

Copy a line:

```
yy
```

Now delete a different line without overwriting your copy:

```
"_dd
```

The deleted line is gone (discarded), but your copied line is still in the unnamed register. Press `p` and your copy appears.

**Expected outcome:** Black hole register lets you delete freely without clipboard pollution.

### Drill 4: Last Yank Register (5 min)

Copy something:

```
yy
```

Now delete something else (which overwrites `""`):

```
dd
```

Press `p`. The deleted text appears (from `""`). But you want your copied text. Use the last yank register:

```
"0p
```

Your original copy appears (from `"0`).

**Expected outcome:** Even if you delete, your last copy is safe in register `0`.

### Drill 5: View Registers (5 min)

Type `:reg` and press Enter. A list appears showing the contents of all your registers:

```
--- Registers ---
""   [contents of unnamed]
"a   [contents of register a]
"b   [contents of register b]
...
"+   [system clipboard contents]
```

This is your register dashboard. You can verify what's stored where.

**Expected outcome:** `:reg` is your register inspection tool.

---

## Build: Code Snippet Component

### What You're Building

You'll create a CodeSnippet component that displays code blocks with a "Copy to clipboard" button. When users click the button, the code is copied to their system clipboard using Vim-like efficiency: no mouse needed if you're in Vim, just `"+y` and paste anywhere.

### Step-by-Step

#### Step 1: Create the CodeSnippet component

Create `app/src/components/CodeSnippet.astro`:

```bash
cd app
nvim src/components/CodeSnippet.astro
```

```astro
---
interface Props {
  code: string;
  language?: string;
  filename?: string;
}

const { code, language = "typescript", filename } = Astro.props;
---

<div class="code-snippet">
  {filename && <div class="filename">{filename}</div>}
  <pre><code class={`language-${language}`}>{code}</code></pre>
  <button class="copy-btn" data-code={code}>
    Copy
  </button>
</div>

<style>
  .code-snippet {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 6px;
    overflow: hidden;
    margin: 1rem 0;
    background-color: #f5f5f5;
  }

  .filename {
    background-color: #e0e0e0;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: #333;
  }

  pre {
    margin: 0;
    padding: 1rem;
    overflow-x: auto;
    background-color: #f9f9f9;
  }

  code {
    font-family: "Courier New", monospace;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .copy-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .copy-btn:hover {
    background-color: #0052a3;
  }

  .copy-btn.copied {
    background-color: #00aa00;
  }
</style>

<script>
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const code = btn.getAttribute("data-code") || "";
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "Copy";
          btn.classList.remove("copied");
        }, 2000);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    });
  });
</script>
```

#### Step 2: Create an example usage in a page

Edit `app/src/pages/index.astro` to include CodeSnippet examples:

```astro
---
import CodeSnippet from "../components/CodeSnippet.astro";
---

<h2>Code Snippets</h2>

<CodeSnippet
  code={`const greeting = "Hello, Vim!";
console.log(greeting);`}
  language="typescript"
  filename="example.ts"
/>

<CodeSnippet
  code={`<div class="container">
  <h1>Welcome</h1>
</div>`}
  language="html"
  filename="example.html"
/>
```

#### Step 3: Test the component

```bash
npm run dev
```

Visit localhost:4321. You should see code snippets with "Copy" buttons. Click a button and the code is copied to your clipboard. You can paste it anywhere.

#### Step 4: Use registers to copy multiple snippets at once (educational)

In Neovim, open the component file:

```bash
nvim src/components/CodeSnippet.astro
```

Copy the entire `<script>` section to register `a`:

```
"ayy   (position on a line of the script)
"ayy   (repeat for multiple lines)
```

Copy a different section to register `b`. Now you have two reusable code blocks in your Vim registers.

#### Step 5: Commit

```bash
git add app/src/components/CodeSnippet.astro app/src/pages/index.astro
git commit -m "day-19: add code snippet component with clipboard support"
```

### Stretch Goal

If you finish early:

1. Add syntax highlighting with `highlight.js` or `prism.js`
2. Add a "Copy with line numbers" variant
3. Create a snippet library component that displays multiple CodeSnippet blocks with category grouping

---

## Checkpoint

**Commit message:** `day-19: add code snippet component with clipboard support`

**Your commit should include:**

- [ ] `app/src/components/CodeSnippet.astro` — Code snippet component with copy button
- [ ] Modified `app/src/pages/index.astro` — Demonstrates CodeSnippet usage

**Validation**

Before committing, verify:
1. You used named registers (`"a`, `"b`) to store and retrieve text
2. You used system clipboard (`"+y`, `"+p`) to copy/paste with OS
3. You used black hole register (`"_dd`) to delete without saving
4. You used last yank register (`"0p`) to recover a copy
5. You typed `:reg` to see all registers
6. The CodeSnippet component renders correctly
7. Copy buttons work and text is copied to clipboard
8. `npm run build` succeeds

**Self-Check**

- [ ] I understand what registers are (Vim clipboards)
- [ ] I can use named registers to hold multiple snippets
- [ ] I can copy to system clipboard with `"+y`
- [ ] I can paste from system clipboard with `"+p`
- [ ] I know the black hole register `"_` discards text
- [ ] I know the last yank register `"0` preserves my last copy
- [ ] I created a CodeSnippet component with copy functionality
- [ ] The component integrates with the OS clipboard (or simulates it in the browser)
- [ ] The app builds and renders without errors

---

## Today's Score

- [ ] I used named registers to store multiple code snippets
- [ ] I copied to system clipboard with `"+y` and pasted with `"+p`
- [ ] I used the black hole register `"_` to delete cleanly
- [ ] I used the last yank register `"0p` to recover a copy
- [ ] I viewed all registers with `:reg`
- [ ] I created a CodeSnippet component with clipboard integration
- [ ] The copy button works in the browser
- [ ] I committed the component and demonstrated register usage

**Reflection:** How does understanding registers change your copy-paste workflow? Can you imagine using multiple registers to juggle snippets while refactoring?

---

**Day 19 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 20: Macros →](../day-20/index.md)
