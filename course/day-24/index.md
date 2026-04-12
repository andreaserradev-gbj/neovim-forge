---
day: 24
title: "Advanced Text Objects"
phase: 4
summary: "Master mini.ai for semantic code editing — extract, refactor, and rename with precision"
vim_skills: ["io/ao", "if/af", "ic/ac", "iu/au", "id/ad", "ie/ae", "ig/ag", "iq/aQ", "g[", "g]", "daf", "cic", "yau"]
plugin_focus: "mini.ai advanced"
app_milestone: "Refactoring exercise: extract components using text object selection"
estimated_time: "50-60 min"
prerequisites: ["day-23"]
---

[← Day 23: Folds & Terminal](../day-23/index.md) | [Course Index](../../COURSE.md) | [Day 25: Project-Wide Replace →](../day-25/index.md)


## Today's Vim Skills

### Advanced Text Objects via mini.ai

You learned basic text objects (iw, aw, ip, ap) in Day 4. Today you're learning the advanced ones from mini.ai, a plugin that understands code structure through treesitter.

**Code block objects:**

- `io` / `ao` — inside/around braces `{ }` (code block, object literal)
- `if` / `af` — inside/around function body (entire function definition including name/params)
- `ic` / `ac` — inside/around class body
- `iu` / `au` — inside/around function call (the arguments inside parentheses)
- `id` / `ad` — inside/around digit/number (select a number or part of it)
- `ie` / `ae` — inside/around word with case awareness (camelCase, snake_case parts)
- `ig` / `ag` — entire buffer (useful for operations on whole file)
- `iq` / `aQ` — quotes (any quote type: single, double, backtick)

**Navigation between text objects:**

- `g[` — jump to the start of the current or previous text object
- `g]` — jump to the end of the current or next text object

**Common combinations:**

- `dif` — delete inside function (delete function body, keeping signature)
- `daf` — delete around function (delete entire function)
- `cic` — change inside class (replace class contents)
- `yau` — yank around function call (copy entire call including parens)
- `d2ao` — delete two nested blocks/objects
- `=af` — format the whole function (using equals operator)

### Mental Model: Code Awareness

Basic text objects (iw, ip, etc.) are structural. Advanced text objects are *semantic*—they understand that a function is a function, a class is a class, parentheses denote a call. This means:

- `daf` is faster than manually selecting a function with motions
- `cic` lets you rewrite a class body without worrying about the class signature
- `yau` captures the entire function call with all its arguments, even if they span lines

This is where Vim editing becomes truly powerful. You're not thinking about lines and characters; you're thinking about semantic units of code.

### Key Bindings Summary

| Text Object | Targets | Example |
|---|---|---|
| `io` / `ao` | Code blocks `{}` | `dio` deletes block contents, `dao` deletes block |
| `if` / `af` | Function body/whole | `daf` deletes entire function, `dif` deletes body only |
| `ic` / `ac` | Class body/whole | `cic` changes class body |
| `iu` / `au` | Function call args | `yau` yanks entire call with args |
| `id` / `ad` | Numbers/digits | `cid` changes a number |
| `ie` / `ae` | Case-aware words | `viw` selects camelCase segment |
| `ig` / `ag` | Entire buffer | `yag` yanks whole file |
| `iq` / `aQ` | Quoted strings | `ci"` changes inside quotes |
| `g[` | Object start | Jump to start of current object |
| `g]` | Object end | Jump to end of current object |

---

## Drills

### Drill 1: Code Block Selection (5 min)

Open a code file with nested objects: `app/src/.../*.tsx` or `.ts` with object literals.

**Task sequence:**

1. Find an object literal or code block: `{...}`
2. Position cursor inside the braces
3. Press `vio` to visually select inside the object (you'll see the selection highlight)
4. Press `vao` to expand the selection to include the braces themselves
5. Press `Escape` to exit visual mode
6. Repeat on different blocks: function bodies, nested objects, etc.

**Challenge:** Select 3 different blocks in under 30 seconds total.

**Expected outcome:** Visual selection of code blocks is instant. You can see exactly what you're about to edit.

---

### Drill 2: Function Editing (5 min)

Open the same code file.

**Task sequence:**

1. Find a function definition (look for `function name() {` or `const name = () => {`)
2. Position cursor anywhere inside the function
3. Press `vaf` to select the entire function (you'll see the selection expand)
4. Press `Escape`
5. Now press `daf` to delete the function (press `u` to undo)
6. Position cursor inside a different function's body (not the signature)
7. Press `vif` to select only the body (excluding the `function` keyword and params)
8. Escape, then `dif` to delete the body (undo with `u`)

**Challenge:** Edit 3 functions (rename one, delete and undo another, change the third) using only text objects.

**Expected outcome:** Text object-based editing is faster than manual selection for functions.

---

### Drill 3: Function Calls (5 min)

Open the same file.

**Task sequence:**

1. Find a function call: `functionName(arg1, arg2, arg3)`
2. Position cursor inside the parentheses
3. Press `viu` to select the arguments (inside the parens)
4. Press `vau` to select the entire call including the function name and parens
5. Escape, then experiment with `yau` to yank a function call

**Challenge:** Copy 3 different function calls and paste them elsewhere. This tests your ability to precisely select complex expressions.

**Expected outcome:** Function call selection is useful when refactoring—you can extract, copy, or modify entire calls at once.

---

## Build: Component Extraction Refactoring Exercise

### What You're Building

A practical refactoring exercise where you:

1. Take a large, monolithic component
2. Use text objects to identify and extract smaller sub-components
3. Restructure the component hierarchy
4. Verify the refactoring with TypeScript

This exercise teaches real-world refactoring using Vim skills.

### Step-by-Step

#### Step 1: Create a Large Component to Refactor

Create `app/src/components/LargeCard.astro`:

```astro
---
interface Props {
  title: string;
  description: string;
  price: number;
  inStock: boolean;
  onAddToCart?: () => void;
}

const { title, description, price, inStock } = Astro.props;
---

<div class="card">
  <div class="card-header">
    <h3 class="card-title">{title}</h3>
    <span class="card-price">${price}</span>
  </div>
  
  <div class="card-body">
    <p class="card-description">{description}</p>
    {inStock && (
      <div class="card-stock">
        <span class="badge badge-success">In Stock</span>
      </div>
    )}
  </div>
  
  <div class="card-footer">
    {inStock ? (
      <button class="btn btn-primary" onclick={onAddToCart}>
        Add to Cart
      </button>
    ) : (
      <button class="btn btn-disabled" disabled>
        Out of Stock
      </button>
    )}
  </div>
</div>

<style>
  .card { border: 1px solid #e5e7eb; border-radius: 0.5rem; }
  .card-header { padding: 1rem; border-bottom: 1px solid #e5e7eb; }
  .card-title { margin: 0; font-size: 1.25rem; }
  .card-price { font-weight: bold; color: #059669; }
  .card-body { padding: 1rem; }
  .card-description { margin: 0 0 1rem 0; color: #6b7280; }
  .card-footer { padding: 1rem; border-top: 1px solid #e5e7eb; }
  .btn { padding: 0.5rem 1rem; border-radius: 0.25rem; }
  .btn-primary { background: #3b82f6; color: white; }
  .btn-disabled { background: #d1d5db; cursor: not-allowed; }
  .badge { padding: 0.25rem 0.5rem; border-radius: 0.125rem; }
  .badge-success { background: #dcfce7; color: #166534; }
</style>
```

#### Step 2: Extract the Header Component

Using text objects, create `app/src/components/CardHeader.astro`:

In the LargeCard file:
1. Find the card-header div: `/card-header`
2. Position inside the div
3. Press `vao` to select the entire div block
4. `y` to yank, `d` to delete
5. Create a new file: `:e app/src/components/CardHeader.astro`
6. Paste and wrap it in Astro component structure

```astro
---
interface Props {
  title: string;
  price: number;
}

const { title, price } = Astro.props;
---

<div class="card-header">
  <h3 class="card-title">{title}</h3>
  <span class="card-price">${price}</span>
</div>

<style>
  .card-header { padding: 1rem; border-bottom: 1px solid #e5e7eb; }
  .card-title { margin: 0; font-size: 1.25rem; }
  .card-price { font-weight: bold; color: #059669; }
</style>
```

Use text objects: `vao` to select blocks, `d` to delete, `p` to paste in the new file.

#### Step 3: Extract the Footer Component

Repeat for the footer:

```astro
---
interface Props {
  inStock: boolean;
  onAddToCart?: () => void;
}

const { inStock, onAddToCart } = Astro.props;
---

<div class="card-footer">
  {inStock ? (
    <button class="btn btn-primary" onclick={onAddToCart}>
      Add to Cart
    </button>
  ) : (
    <button class="btn btn-disabled" disabled>
      Out of Stock
    </button>
  )}
</div>

<style>
  .card-footer { padding: 1rem; border-top: 1px solid #e5e7eb; }
  .btn { padding: 0.5rem 1rem; border-radius: 0.25rem; }
  .btn-primary { background: #3b82f6; color: white; }
  .btn-disabled { background: #d1d5db; cursor: not-allowed; }
</style>
```

#### Step 4: Refactor LargeCard to Use Subcomponents

Update LargeCard to import and use the new components:

```astro
---
import CardHeader from './CardHeader.astro';
import CardFooter from './CardFooter.astro';

interface Props {
  title: string;
  description: string;
  price: number;
  inStock: boolean;
  onAddToCart?: () => void;
}

const { title, description, price, inStock, onAddToCart } = Astro.props;
---

<div class="card">
  <CardHeader {title} {price} />
  
  <div class="card-body">
    <p class="card-description">{description}</p>
    {inStock && (
      <div class="card-stock">
        <span class="badge badge-success">In Stock</span>
      </div>
    )}
  </div>
  
  <CardFooter {inStock} {onAddToCart} />
</div>

<style>
  .card { border: 1px solid #e5e7eb; border-radius: 0.5rem; }
  .card-body { padding: 1rem; }
  .card-description { margin: 0 0 1rem 0; color: #6b7280; }
  .badge { padding: 0.25rem 0.5rem; border-radius: 0.125rem; }
  .badge-success { background: #dcfce7; color: #166534; }
</style>
```

#### Step 5: Verify TypeScript

Run type checking to ensure everything is correct:

```bash
cd app
npx tsc --noEmit
```

Should have no errors. If there are type mismatches, fix the component interfaces.

---

## Checkpoint

**Commit message:** `day-24: refactor components using text objects`

**Your commit should include:**

- [ ] `app/src/components/LargeCard.astro` — Refactored to use subcomponents
- [ ] `app/src/components/CardHeader.astro` — New extracted component
- [ ] `app/src/components/CardFooter.astro` — New extracted component

**Validation**

CI will check:
- [ ] All component files exist
- [ ] TypeScript compiles with no errors
- [ ] App builds successfully
- [ ] Commit message starts with `day-24:`

---

## Today's Score

- [ ] I can select code blocks with `io`/`ao`
- [ ] I can select entire functions with `af` and function bodies with `if`
- [ ] I can select function calls with `iu`/`au`
- [ ] I can select class bodies with `ic`/`ac`
- [ ] I used text objects to extract components
- [ ] I refactored a large component into smaller pieces
- [ ] TypeScript validation passed

**Reflection:** Did text objects make refactoring faster? Would you use them for real projects?

---

**Day 24 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 25: Project-Wide Replace →](../day-25/index.md)
