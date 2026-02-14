/**
 * Client-side filtering logic for posts.
 * Supports intersection behavior between text search and tag filtering.
 */

import type { PostMetadata } from './posts.types';
import { normalizeTags } from './postTags';

/**
 * Filters posts by text search query and/or selected tag.
 * Both filters are applied as an intersection (AND logic).
 */
export function filterPosts(
  posts: PostMetadata[] | undefined,
  searchQuery: string,
  selectedTag: string | null
): PostMetadata[] {
  if (!posts) {
    return [];
  }

  return posts.filter((post) => {
    // Text search filter
    const matchesSearch = !searchQuery || (() => {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        normalizeTags(post.tags).some((tag) => tag.toLowerCase().includes(query))
      );
    })();

    // Tag filter
    const matchesTag = !selectedTag || normalizeTags(post.tags).includes(selectedTag);

    // Both conditions must be true (intersection)
    return matchesSearch && matchesTag;
  });
}
