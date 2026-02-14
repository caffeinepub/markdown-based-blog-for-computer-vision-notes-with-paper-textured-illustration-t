# Specification

## Summary
**Goal:** Apply dark theme styling to all tagging UI elements (tag chips and tag filter bar) while keeping existing behavior, accessibility, and URL-based filtering unchanged.

**Planned changes:**
- Update TagFilterBar tag buttons to use dark surfaces with light/off-white text for both unselected and selected states, with clear visual distinction.
- Update tag chips on post preview cards (PostCard) to render with dark surfaces and light/off-white text while remaining clickable.
- Update tag chips on the post detail page to render with dark surfaces and light/off-white text while remaining clickable.
- Ensure tag UI retains hover and focus-visible styles suitable for keyboard navigation and basic contrast expectations, without modifying shared UI components under `frontend/src/components/ui`.

**User-visible outcome:** Tags across the post list, post cards, and post detail pages display in a dark-themed style with readable text, clear selected state in the filter bar, and unchanged tag click/filter behavior.
