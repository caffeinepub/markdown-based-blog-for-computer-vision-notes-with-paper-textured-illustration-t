import { useQuery } from '@tanstack/react-query';
import { fetchPostManifest, fetchPostMarkdown } from './posts.staticApi';
import type { PostMetadata, Post } from './posts.types';

export function usePosts() {
  return useQuery<PostMetadata[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const manifest = await fetchPostManifest();
      return manifest.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    },
  });
}

export function usePostContent(slug: string) {
  const { data: posts } = usePosts();

  return useQuery<Post | null>({
    queryKey: ['post', slug],
    queryFn: async () => {
      if (!posts) return null;
      
      const postMeta = posts.find((p) => p.slug === slug);
      if (!postMeta) return null;

      const content = await fetchPostMarkdown(postMeta.filename);
      return {
        ...postMeta,
        content,
      };
    },
    enabled: !!posts,
  });
}
