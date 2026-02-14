/**
 * Utility functions for extracting and managing tags from post metadata.
 */

import type { PostMetadata } from './posts.types';

/**
 * Extracts a unique, sorted list of all tags from the post manifest.
 * Handles posts with missing or empty tag arrays gracefully.
 */
export function extractUniqueTags(posts: PostMetadata[] | undefined): string[] {
  if (!posts || posts.length === 0) {
    return [];
  }

  const tagSet = new Set<string>();
  
  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        if (tag && typeof tag === 'string' && tag.trim()) {
          tagSet.add(tag.trim());
        }
      });
    }
  });

  return Array.from(tagSet).sort();
}

/**
 * Normalizes a post's tags array, ensuring it's always an array.
 */
export function normalizeTags(tags: string[] | undefined): string[] {
  if (!tags || !Array.isArray(tags)) {
    return [];
  }
  return tags.filter((tag) => tag && typeof tag === 'string' && tag.trim());
}
