---
day: 29
title: "Polish & Deploy"
phase: 5
summary: "Session management, UI toggles, and deployment to production"
vim_skills: ["<leader>qq", "<leader>uz", "<leader>uf", "<leader>us", "<leader>uw", "<leader>ul", "<leader>uL", "<leader>ud", "<leader>uh"]
plugin_focus: null
app_milestone: "Deploy to Vercel/Netlify, SEO meta tags, OG images, final polish"
estimated_time: "60-75 min"
prerequisites: ["day-28"]
---

[← Day 28: Week 4 Review](../day-28/index.md) | [Course Index](../../COURSE.md) | [Day 30: Graduation Flight →](../day-30/index.md)


## Today's Vim Skills

### Session Management

- `<leader>qq` — quit and save session (can restore later with `nvim -S`)

Vim sessions let you save your workspace state: open files, window layout, folds, marks. Close Vim, come back later, restore everything.

### UI Toggles

- `<leader>uz` — zen mode (hide everything except the buffer)
- `<leader>uf` — toggle formatting
- `<leader>us` — toggle spelling
- `<leader>uw` — toggle word wrap
- `<leader>ul` — toggle line numbers
- `<leader>uL` — toggle relative line numbers
- `<leader>ud` — toggle diagnostics
- `<leader>uh` — toggle inlay hints

These let you configure your editor on-the-fly. Zen mode is especially useful for presentations or focused work.

---

## Build: Deployment

### Step 1: Add Vercel Configuration

Create `vercel.json` in the app directory:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

Or if using Netlify, create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Step 2: Add SEO Meta Tags

Update `app/src/layouts/Base.astro`:

```astro
---
interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const { title = "Neovim Forge", description = "Learn Neovim by building", image = "/og-image.png" } = Astro.props;
---

<html>
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Step 3: Deploy

```bash
cd app
npm run build  # Test locally
# Then push to GitHub, Vercel/Netlify will deploy automatically
```

---

## Checkpoint

**Commit message:** `day-29: deploy and polish`

**Your commit should include:**

- [ ] `vercel.json` or `netlify.toml`
- [ ] Updated `Base.astro` with SEO tags
- [ ] `.gitignore` updated for build artifacts
- [ ] Deployment configuration

---

## Today's Score

- [ ] I configured deployment
- [ ] I added SEO meta tags
- [ ] I set up Vercel/Netlify
- [ ] App deployed successfully

**Reflection:** Deployment complete. What's next?

---

**Day 29 resources:** [Exercises](exercises.md) · [Corne Companion](corne.md) · [Checkpoint](checkpoint.md)

**Next:** [Day 30: Graduation Flight →](../day-30/index.md)
