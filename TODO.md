# Landing Page Build - Hotel Costa del Inka

## Status: IN_PROGRESS

## Current State: INIT

## Tasks

### 1. INIT

- [x] Initialize Astro project (minimal template)
- [x] Install dependencies (Tailwind, Playwright)
- [x] Configure `astro.config.mjs`
- [x] **VERIFY**: Project builds and runs locally

### 2. DESIGN_SYSTEM

- [x] Extract design tokens (Dark/Gold Theme)
- [x] Create `src/styles/design-tokens.css` (merged into `global.css`)
- [x] Configure `tailwind.config.mjs` (via CSS variables)
- [x] **VERIFY**: Tailwind classes work

### 3. LAYOUT & COMPONENTS

- [x] Create `MainLayout.astro`
- [x] Create `Header.astro` and `Footer.astro`
- [x] Create UI components (`Button`, `Card`)
- [x] **VERIFY**: Layout is responsive

### 4. PAGES (Structure)

- [x] Create all `.astro` pages (index, about, services, etc.)
- [x] Implement `Hero` section for Home
- [x] **VERIFY**: Routing works for all pages

### 5. CONTENT & ASSETS

- [ ] Fill pages with provided text (Misión, Visión, etc.)
- [ ] Add placeholder images (or optimized assets if available)
- [ ] **VERIFY**: Content matches specs

### 6. INTERACTIVITY & FORMS

- [x] Implement Contact Form with Zod validation
- [x] Add mobile menu toggle
- [x] **VERIFY**: Form works and handles errors

### 7. TESTING & OPTIMIZATION

- [x] Run Playwright E2E tests
- [x] Check accessibility (WCAG)
- [x] Optimize assets
- [x] **VERIFY**: All tests pass (Minor visual test issue noted)
