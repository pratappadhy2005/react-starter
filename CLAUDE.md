# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a React learning repository organized as a series of numbered standalone projects, each building on concepts from the previous:

| Directory | Topic |
|-----------|-------|
| `01-my-first-react/` | First React app (Vite + React) |
| `02-ts-lesson/` | TypeScript basics (`hello.ts`) |
| `03-Project/` | Standalone React project |
| `04-components/` | React components fundamentals |
| `05-props/` | Props and component communication |
| `06-cards-project/` | Cards UI project |
| `07-css/` | CSS in React |
| `08-tailwind/` | Tailwind CSS v4 integration |
| `09-ui-project/` | Multi-section UI with Tailwind v4 |
| `10-functions/` | React function patterns |
| `11-End-To-End/` | End-to-end composite projects |

Each numbered directory is an **independent Vite project** with its own `package.json`, `node_modules`, and dev server. There is no monorepo tooling — each must be managed separately.

## Commands

All commands must be run from within the specific project directory (e.g., `cd 09-ui-project`):

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

There are no tests configured in any project.

## Tech Stack

- **React 19** with JSX (`.jsx` files, no TypeScript in most projects)
- **Vite** as the build tool and dev server
- **Tailwind CSS v4** in `08-tailwind/` and `09-ui-project/` — uses `@tailwindcss/vite` plugin (not the older PostCSS approach)
- **ESLint 9** with flat config (`eslint.config.js`) and `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`
- `11-End-To-End/react-demos` uses **React 19 + Vite 8** (latest versions in the repo)

## Component Conventions

- Components are plain functional components using arrow functions, exported as default
- Files use `.jsx` extension; no TypeScript in React files (TypeScript is only in `02-ts-lesson/`)
- Components live in `src/components/`, with subdirectories for feature groupings (e.g., `Section1/`, `props/`)
- `App.jsx` imports and composes top-level components; `main.jsx` is the entry point rendering `<App />`
- Tailwind utility classes are applied directly in JSX — no separate CSS modules

## 11-End-To-End Layout

```
11-End-To-End/
  01-es6-concepts/      # Plain JS ES6 concepts (no React, no build tool)
  02-first-react-app/   # create-react-app legacy project
  03-reatcjs-concepts/  # React concepts (Vite)
  react-demos/          # Active composite demo project (React 19 + Vite 8)
```

The primary working project for new code is `11-End-To-End/react-demos/`.
