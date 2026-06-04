# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Firefly is an Astro 6 static blog theme/template built with TypeScript, Tailwind CSS, Svelte islands, Astro content collections, and Pagefind search. It is based on the Fuwari template and adds configurable dual sidebars, multiple article layouts, widgets, comments, analytics, gallery, music player, Live2D/Spine models, markdown extensions, and i18n UI strings.

Use Node.js >= 22 and pnpm >= 9. The checked-in package manager is `pnpm@9.14.4`.

## Common commands

Run commands from the repository root (`Firefly-master`).

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm check
pnpm type-check
pnpm lint
pnpm format
pnpm new-post <filename>
pnpm astro ...
pnpm icons
pnpm lqips
```

Command details:

- `pnpm dev` / `pnpm start`: start the Astro dev server at `http://localhost:4321`.
- `pnpm build`: runs `scripts/generate-icons.js`, `scripts/generate-lqips.ts`, `astro build`, then `pagefind --site dist`; output is `dist/`.
- `pnpm preview`: preview the built site locally.
- `pnpm check`: run `astro check`.
- `pnpm type-check`: run `tsc --noEmit --isolatedDeclarations`.
- `pnpm lint`: run `biome check --write ./src`; this may modify files.
- `pnpm format`: run `biome format --write ./src`; this modifies files.
- `pnpm new-post <filename>`: create a new post.
- `pnpm icons`: regenerate icon constants.
- `pnpm lqips`: regenerate low-quality image placeholders.

There is no test runner or test script configured in `package.json`; use `pnpm check`, `pnpm type-check`, `pnpm lint`, and `pnpm build` as the available validation commands.

CI runs Astro checks/builds on Node 22 and 23. The Biome workflow runs `biome ci ./src --reporter=github`.

## Deployment

The normal static-host deployment settings are:

- Framework preset: Astro
- Install command: `pnpm install`
- Build command: `pnpm run build`
- Output directory: `dist`
- Root directory: `./`

The included GitHub Actions deployment workflow builds on pushes to `master`, creates `dist/.nojekyll`, and deploys `dist` to a `pages` branch via `JamesIves/github-pages-deploy-action`. For GitHub Pages, configure Pages to serve from the `pages` branch.

`astro.config.mjs` conditionally enables the Cloudflare adapter only when `CF_WORKERS` is set. Without that environment variable, the project builds as a normal static Astro site suitable for Vercel, Netlify, Cloudflare Pages, EdgeOne Pages, or GitHub Pages.

## High-level architecture

### Astro configuration and build pipeline

`astro.config.mjs` is the main integration point. It imports `siteConfig`, `expressiveCodeConfig`, and `plantumlConfig` from `src/config`, then wires up:

- Astro integrations: Swup page transitions, Astro Icon, Expressive Code, Svelte, Sitemap, MDX, optional Cloudflare adapter.
- Markdown processing: math/KaTeX, callouts, GitHub cards, Mermaid, PlantUML, image grids, excerpts, reading time, sectionization, heading slugs/autolinks, external-link handling, figure handling, and email protection.
- Vite/Tailwind configuration and build minification.

`pnpm build` does more than `astro build`: it regenerates icon data and LQIP data before building, then creates a Pagefind search index after the static site is generated.

### Configuration-first theme design

Most user-facing theme behavior is configured through files in `src/config/`, with `src/config/index.ts` as the preferred aggregate import. Important configuration areas include site metadata/language, navbar, sidebars, profile, background wallpaper, comments, analytics-adjacent modules, effects, fonts, music, Pio/Live2D/Spine, friends, gallery, sponsor, license, footer HTML injection, and cover-image behavior.

When changing configurable behavior, check whether an existing config file already owns that feature before adding new constants or component-local settings.

### Content model

Astro content collections are defined in `src/content.config.ts`:

- `posts`: markdown/mdx files under `src/content/posts`, with typed frontmatter for title, published date, draft flag, description, image, tags, category, language, pinning, author/source/license fields, comment toggle, and password fields.
- `spec`: markdown/mdx files under `src/content/spec`, currently with an empty schema.

README-documented post frontmatter includes `title`, `published`, `description`, `image`, `tags`, `category`, `draft`, `lang`, `pinned`, and `comment`.

### Component organization

Components are grouped by role under `src/components/`:

- `layout/`: page frame and repeated layout pieces such as navbar, footer, sidebars, post cards, post metadata, category bar, and post page layout.
- `controls/`: navigation and interactive controls such as search, archive panel, display settings, layout switcher, theme switcher, wallpaper switcher, floating controls, floating TOC, and back buttons.
- `common/`: reusable UI/content primitives such as buttons, dropdowns, icon wrapper, cover/image wrappers, markdown wrapper, pagination, floating button base, widget layout, and Pio message box.
- `widget/`: sidebar widgets such as profile, announcement, calendar, categories, tags, site stats, music, advertisement, and TOC/model widgets.
- `features/`: global feature managers/effects such as Fancybox, fonts, KaTeX, music manager/player, sakura effect, Live2D/Spine models, encrypted content/posts, and typewriter text.
- `pages/`: page-specific components, including advanced search plus Bangumi and gallery subcomponents.
- `comment/`: third-party comment integrations selected through comment configuration.
- `analytics/`: analytics integrations.
- `misc/`: auxiliary components such as license and share-poster UI.

Astro components are used for static/server-rendered structure; Svelte components are used where client-side interactivity is needed.

### Supporting source areas

- `src/utils/`: shared helpers for content, crypto, dates, galleries, icons, images, language, layout, LQIP, navigation, responsive behavior, sakura behavior, settings, TOC, and URLs.
- `src/i18n/`: UI translation keys and translation data.
- `src/constants/`: icon/link constants and generated/static LQIP data.
- `src/plugins/`: custom remark/rehype plugins and render scripts for markdown extensions.
- `src/styles/`: global CSS split by concern; Biome excludes `src/**/*.css` from formatting/linting.
- `public/`: static assets copied directly to the built site, including favicon files, gallery assets, Pio model assets, music, scripts, and CSS.
- `src/assets/`: source-managed images imported by Astro/Vite.

## Formatting and linting notes

Biome is configured with tab indentation and double quotes for JavaScript/TypeScript. Biome excludes generated icon constants, LQIP JSON, CSS, `dist`, and `node_modules`. Astro/Svelte/Vue overrides disable several rules around imports and unused variables because those file types can use framework-specific conventions.
