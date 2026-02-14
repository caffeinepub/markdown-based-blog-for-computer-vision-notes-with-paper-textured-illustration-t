import type { PostManifest } from './posts.types';

export async function fetchPostManifest(): Promise<PostManifest> {
  const response = await fetch('/posts/manifest.json');
  if (!response.ok) {
    throw new Error('Failed to fetch post manifest');
  }
  return response.json();
}

export async function fetchPostMarkdown(filename: string): Promise<string> {
  const response = await fetch(`/posts/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${filename}`);
  }
  return response.text();
}
