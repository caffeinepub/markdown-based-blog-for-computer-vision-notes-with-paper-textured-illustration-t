# Specification

## Summary
**Goal:** Create a public, Markdown-based blog UI for computer vision notes with a gentle paper-textured illustration theme.

**Planned changes:**
- Build a home page that lists blog posts (title, date, optional excerpt) and supports client-side search/filtering by title (and optionally metadata).
- Add a post detail page that loads and renders Markdown content from static `.md` files via an index/manifest (title, date, slug, filename), with safe/sanitized rendering (no raw HTML execution).
- Add consistent site layout ergonomics: header with blog title (and optional tagline) and clear navigation to return from a post to the list.
- Apply the paper-textured, warm, note-like illustration theme across list and detail pages (typography, spacing, UI components).
- Add generated static image assets under `frontend/public/assets/generated` and use them directly in the UI (background texture + header illustration).

**User-visible outcome:** Users can browse a styled list of computer vision notes, search within them, and open a dedicated page to read each note rendered from Markdown with a consistent paper-textured theme.
