# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Arthur Henry (arthurhenry.dev), built with Next.js 15, TypeScript, and TailwindCSS. The site showcases projects, provides information about Arthur, and displays recommendations from colleagues.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Tech Stack
- **Framework**: Next.js 15.5.3 (Pages Router)
- **Language**: TypeScript 5.0.4
- **Styling**: TailwindCSS 3.3.1 with custom dark mode implementation
- **SEO**: next-seo for metadata management
- **Analytics**: Vercel Speed Insights
- **Markdown**: gray-matter + remark for content processing

### Project Structure

```
/src
  /components     - React components (each with component.tsx and index.ts barrel export)
    /card         - Project cards
    /footer       - Site footer
    /layout       - Main layout wrapper with theme management
    /navigation   - Site navigation
    /section      - Section containers
  /pages         - Next.js pages (index, about, projects)
    _app.tsx     - App wrapper with SEO and font configuration
  /resources     - Static data (recommendations, songs)
  /styles        - Global CSS
  /types         - TypeScript type definitions
/lib             - Utility functions (posts, API, markdown processing)
/public          - Static assets (images)
```

### Key Patterns

**Component Architecture**: All components follow a consistent pattern:
- `component.tsx` contains the component implementation
- `index.ts` provides barrel exports for cleaner imports
- Components are imported via `@/src/components` path alias

**Theme Management**: The Layout component (`src/components/layout/component.tsx`) manages dark/light theme:
- Theme state persisted to localStorage as "Arthur.Henry.theme"
- Uses Tailwind's `dark:` variants for styling
- Default theme is "dark"
- Theme applied via `dark` class on `document.documentElement`

**Path Aliases**: The project uses `@/*` for root-level imports (configured in tsconfig.json):
- `@/src/components` for components
- `@/public` for assets
- `@/lib` for utilities

**Pages Router**: This project uses Next.js Pages Router (not App Router):
- Pages are in `/src/pages/`
- No `/app` directory
- Custom `_app.tsx` for global configuration

### Data Management

**Static Data**: Projects and recommendations are defined as static arrays in source files:
- Projects: Defined inline in `src/pages/projects.tsx`
- Recommendations: Exported from `src/resources/index.ts`
- Songs: Exported from `src/resources/index.ts`

**Blog Posts**: The site has infrastructure for markdown blog posts via gray-matter:
- Expected location: `_posts/` directory (currently empty)
- Helper functions in `/lib/posts.ts` for reading and parsing markdown
- Posts include frontmatter metadata (date, title, etc.)

### Styling

- **TailwindCSS** for utility-first styling
- Dark mode enabled via `darkMode: "class"` in tailwind.config.js
- Custom utility classes defined in global CSS
- Custom Tailwind extensions for 128 (32rem) heights/widths

## Important Notes

- The site uses the Inter font from Google Fonts, loaded via `next/font`
- SEO configuration is centralized in `next-seo.config.js`
- Project recently migrated from Yarn to npm (see recent commits)
- Recently upgraded to Next.js 15 (see recent commits)
- No test suite is currently configured
