---
day: 17
title: "Format & Flow"
phase: 3
summary: "Make code beautiful automatically — format on save, configure linters, master auto-closing tags"
vim_skills: ["<leader>cf", "<leader>cF", "<leader>uf", "<leader>uF"]
plugin_focus: "conform.nvim, nvim-ts-autotag"
app_milestone: "ESLint + Prettier config, format-on-save, auto-closing tags in Astro/TSX components"
estimated_time: "45-60 min"
prerequisites: ["day-16"]
---

[← Day 16: Diagnostics & Notifications](../day-16/index.md) | [Course Index](../../COURSE.md) | [Day 18: Git in the Editor →](../day-18/index.md)


## Today's Vim Skills

### What Is Formatting?

Formatting is the automatic alignment, spacing, and style applied to your code. When you write JavaScript like `const x=1+2`, a formatter makes it `const x = 1 + 2` (spaces around operators). When you write a function with misaligned braces, the formatter lines them up.

Two tools handle this:

1. **Prettier** — A code formatter that enforces a consistent style. It reads your code and rewrites it to match a standard. Prettier has opinions: 2-space indent, semicolons, double quotes. You can configure it, but the goal is zero decisions.

2. **ESLint** — A linter that checks code for bugs, style issues, and best practices. It flags problems but doesn't always auto-fix them. "Variable declared but never used", "missing semicolon", etc.

In Neovim, `conform.nvim` wires these tools to keybindings. `<leader>cf` runs the formatter (Prettier) on the current buffer. `<leader>uf` toggles format-on-save so your code is always formatted the moment you save.

### Formatting Commands: <leader>cf, <leader>cF, <leader>uf, <leader>uF

- `<leader>cf` — **format buffer** — Run the formatter (Prettier) on the entire current file. The code is reformatted instantly.
- `<leader>cF` — **format injected** — Format code that's embedded in another language (e.g., JavaScript inside an HTML `<script>` tag in an Astro component).
- `<leader>uf` — **toggle auto-format (global)** — Turn format-on-save on or off. When on, every time you press `:w`, the file is formatted after saving. When off, `:w` just saves without formatting.
- `<leader>uF` — **toggle auto-format (buffer)** — Same as above but for just the current buffer, not globally.

**Example workflow:** You write some TypeScript:

```typescript
const calculate=(x,y)=>{return x+y;}
```

Press `<leader>cf`. Prettier reformats it:

```typescript
const calculate = (x, y) => {
  return x + y;
};
```

Instant. No thinking. No manual spacing.

Then press `<leader>uf` to enable format-on-save. Now every time you `:w`, the file is formatted. You can write "ugly" code (quick, unformatted), save, and it becomes beautiful automatically.

### Auto-Closing Tags: nvim-ts-autotag

When you type `<Component>`, you want `</Component>` to appear automatically. That's `nvim-ts-autotag`. It watches for opening tags and closes them.

**Example:** You're in an Astro component:

```astro
<div class="container">
  <Card title="Hello" />
</div>
```

Type `<Card`. The moment you press `>`, nvim-ts-autotag adds a closing `</Card>` tag and positions your cursor between them, ready to add children or attributes.

It also renames tags: if you change `<Card` to `<Modal`, it automatically updates `</Card>` to `</Modal>`. This is tree-sitter integration — the plugin understands the syntax tree.

### .prettierrc Configuration

Prettier is configured with a `.prettierrc` file in your project root. This is a JSON (or YAML or JavaScript) file that sets formatting rules:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true
}
```

This says: "use semicolons, use double quotes, 2-space indent, 100-character line width, etc."

Today you'll create this file and Neovim will use it automatically via Prettier integration.

### ESLint Configuration

ESLint is configured with `.eslintrc.json` (or similar). It defines which rules to check:

```json
{
  "extends": ["eslint:recommended"],
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

This extends the recommended ruleset, sets the environment (browser, ES2021, Node), and customizes a few rules (warn on unused vars, allow console.log).

### Mental Model: Formatting as Hygiene

Think of formatting like brushing your teeth: it's not creative, it's maintenance. You don't want to decide "should this space here be a space or a tab?" — you want a rule that applies everywhere. Prettier handles that.

Code that's consistently formatted is easier to read and review. When everyone uses the same formatter, diffs show real changes, not formatting noise.

---

## Drills

### Drill 1: Format a Messy File (5 min)

Create a messy TypeScript file to practice formatting:

```bash
nvim /tmp/messy.ts
```

Write intentionally bad code:

```typescript
const x=1+2;const y = 3 * 4
function test(  a,b,c  ){
return a+b+c
}
const obj={x:1,y:2,z:3}
```

Save the file. Now press `<leader>cf` to format it.

Prettier rewrites it:

```typescript
const x = 1 + 2;
const y = 3 * 4;
function test(a, b, c) {
  return a + b + c;
}
const obj = { x: 1, y: 2, z: 3 };
```

Spaces added, indentation fixed, semicolons added (if your Prettier config requires them).

**Expected outcome:** `<leader>cf` is instant beautification. You're no longer worried about style — the formatter handles it.

### Drill 2: Toggle Auto-Format (5 min)

In the same messy file (or create a new one):

```bash
nvim /tmp/autofmt-test.ts
```

Type some unformatted code:

```typescript
const a=1
```

Press `<leader>uf` to enable auto-format-on-save. A message appears: "auto-format is now enabled" (or similar).

Now press `:w` to save. The file is automatically formatted:

```typescript
const a = 1;
```

Press `<leader>uf` again to toggle it off. A message appears: "auto-format is now disabled".

Now write more unformatted code and press `:w`. This time, it saves without formatting (because you disabled it).

**Expected outcome:** You control when formatting happens — either manually with `<leader>cf` or automatically on every save with `<leader>uf`.

### Drill 3: Auto-Closing Tags (5 min)

Open an Astro component (or create a test file):

```bash
nvim app/src/components/Test.astro
```

In insert mode, type an opening tag:

```astro
<div
```

Press `>`. The plugin automatically adds the closing tag:

```astro
<div></div>
```

Your cursor is positioned between the tags. Press Escape to exit insert mode. Now position your cursor on the `div` in the opening tag. Press `cw` to change the word, type `section`, and press Escape. The closing tag updates automatically to `</section>`.

**Expected outcome:** Auto-closing tags save you typing and keep opening/closing tags in sync.

### Drill 4: Verify Format-on-Save in Your Project (5 min)

In your actual project (`app/src/`), open a component or TypeScript file that might be unformatted:

```bash
cd app
nvim src/components/DayNav.astro
```

(or whichever file exists in your project)

Enable auto-format: `<leader>uf`. Add a deliberate formatting issue somewhere (extra spaces, missing semicolon, etc.). Save with `:w`. Does the file auto-format?

If it works, great. If not, Prettier might not be installed or configured for your project yet. That's OK for now — you'll set up the config in the Build section.

**Expected outcome:** Format-on-save is working in your actual project files.

---

## Build: ESLint + Prettier Setup

### What You're Building

Today you'll set up formatting for your Astro project. You'll:

1. Create `.prettierrc` to configure Prettier
2. Create `.eslintrc.json` to configure ESLint
3. Test that `<leader>cf` formats code
4. Enable format-on-save in your Neovim config

By the end, every time you save a file in your project, it's automatically formatted according to your Prettier config.

### Step-by-Step

#### Step 1: Create .prettierrc

In your project root (`neovim-forge/`, not inside `app/`):

```bash
nvim .prettierrc
```

Add Prettier config:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

This configuration says:
- `semi`: Add semicolons
- `singleQuote`: Use double quotes (not single)
- `tabWidth`: 2-space indents
- `trailingComma`: Add trailing commas in multi-line objects/arrays
- `printWidth`: Wrap lines at 100 characters
- `bracketSpacing`: Add spaces inside object braces: `{ x: 1 }` not `{x: 1}`
- `arrowParens`: Always use parens on arrow functions: `(x) => x` not `x => x`

Save the file.

#### Step 2: Create .eslintrc.json

In the same project root:

```bash
nvim .eslintrc.json
```

Add ESLint config:

```json
{
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "astro/environments": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "warn"
  },
  "overrides": [
    {
      "files": ["*.astro"],
      "parser": "astro-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser"
      }
    }
  ]
}
```

This config:
- Extends ESLint recommended rules
- Sets environment to browser + Node (because Astro runs both)
- Warns on unused variables but allows `console.log`
- Includes special handling for `.astro` files

Save.

#### Step 3: Test Formatting in the App

In the `app/` directory, create a test file with messy code:

```bash
cd app
nvim src/test-format.ts
```

Write unformatted code:

```typescript
const numbers=[1,2,3,4,5]
const result=numbers.map((n)=>n*2)
function process(input,options={}){
return{result:input,opts:options}
}
```

Save the file. Now test formatting:

```bash
# From the app directory
npx prettier --write src/test-format.ts
```

Prettier reformats the file. Or, in Neovim:

1. Position cursor in the file
2. Press `<leader>cf`

(If Prettier isn't installed, run `npm install --save-dev prettier` first.)

The file should be reformatted:

```typescript
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((n) => n * 2);
function process(input, options = {}) {
  return { result: input, opts: options };
}
```

#### Step 4: Configure Format-on-Save in Neovim

Your Neovim config should have `conform.nvim` set up. The setup looks something like:

```lua
-- In your LazyVim config (e.g., ~/.config/nvim/lua/plugins/formatting.lua)
return {
  {
    "stevearc/conform.nvim",
    opts = {
      formatters_by_ft = {
        typescript = { "prettier" },
        typescriptreact = { "prettier" },
        astro = { "prettier" },
        json = { "prettier" },
      },
      format_on_save = {
        timeout_ms = 500,
        lsp_fallback = true,
      },
    },
  },
}
```

If you're using LazyVim, this might already be configured. Check by:

1. Opening any TypeScript file
2. Pressing `<leader>uf` to enable format-on-save
3. Making a change and pressing `:w`
4. The file should format automatically

If it doesn't work, you might need to install Prettier:

```bash
npm install --save-dev prettier
```

or globally:

```bash
npm install -g prettier
```

#### Step 5: Verify Auto-Closing Tags

Open `app/src/components/Test.astro` (or any Astro component). Type an opening tag and press `>`. Does the closing tag appear?

If not, `nvim-ts-autotag` might not be set up. Check that it's installed in your LazyVim config. If you need to add it:

```lua
-- In your LazyVim plugins config
return {
  {
    "windwp/nvim-ts-autotag",
    dependencies = "nvim-treesitter/nvim-treesitter",
    config = function()
      require("nvim-ts-autotag").setup()
    end,
  },
}
```

#### Step 6: Clean Up and Commit

Delete the test file:

```bash
rm src/test-format.ts
```

Commit your config files:

```bash
cd .. # back to project root
git add .prettierrc .eslintrc.json
git commit -m "day-17: add eslint prettier config and format-on-save"
```

### Stretch Goal

If you finish early:

1. Add a `.prettierignore` file to exclude certain paths from formatting:
   ```
   node_modules
   dist
   build
   .astro
   ```

2. Create a pre-commit hook that runs `prettier --write` on all staged files before committing. (Use `husky` + `lint-staged` for this.)

3. Test that format-on-save works in multiple file types (TypeScript, Astro, JSON). Edit each and verify they format on save.

---

## Checkpoint

**Commit message:** `day-17: add eslint prettier config and format-on-save`

**Your commit should include:**

- [ ] `.prettierrc` — Prettier configuration (at project root)
- [ ] `.eslintrc.json` — ESLint configuration (at project root)

**Validation**

Before committing, verify:
1. `<leader>cf` formats a file correctly (Prettier installed and working)
2. `<leader>uf` toggles format-on-save
3. When format-on-save is on, saving a file triggers formatting
4. Auto-closing tags work in Astro components (`<div></div>` appears when you type `<div>`)
5. No syntax errors in `.prettierrc` or `.eslintrc.json` (validate with `npx prettier .prettierrc` or a JSON linter)

**Self-Check**

- [ ] I understand what Prettier does (auto-format code)
- [ ] I understand what ESLint does (flag problems and style issues)
- [ ] I used `<leader>cf` to format a file
- [ ] I toggled format-on-save with `<leader>uf`
- [ ] I saw auto-closing tags work in Astro/TSX files
- [ ] I created `.prettierrc` with sensible defaults
- [ ] I created `.eslintrc.json` for the project
- [ ] Format-on-save is working (files format when I press `:w`)

---

## Today's Score

- [ ] I formatted a file with `<leader>cf`
- [ ] I toggled format-on-save with `<leader>uf`
- [ ] I watched auto-closing tags create closing tags automatically
- [ ] I created and validated a `.prettierrc` configuration
- [ ] I created and validated an `.eslintrc.json` configuration
- [ ] Format-on-save is working in my project
- [ ] Auto-closing tags work in my Astro/TSX components

**Reflection:** How does automatic formatting change your coding speed? When you don't have to think about style, where does your attention go instead?

---

**Day 17 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 18: Git in the Editor →](../day-18/index.md)
