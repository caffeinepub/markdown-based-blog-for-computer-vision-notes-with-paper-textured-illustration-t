import { useState } from 'react';
import { usePosts } from '../features/posts/usePosts';
import PostCard from '../components/posts/PostCard';
import PostSearch from '../components/posts/PostSearch';
import { Loader2 } from 'lucide-react';

export default function PostListPage() {
  const { data: posts, isLoading, error } = usePosts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts?.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt?.toLowerCase().includes(query) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Failed to load posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground tracking-tight">Computer Vision Notes</h1>
          <p className="text-lg text-muted-foreground">
            A collection of notes and insights on computer vision concepts
          </p>
        </div>
        <PostSearch value={searchQuery} onChange={setSearchQuery} />
      </div>

      {filteredPosts && filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {searchQuery ? 'No posts found matching your search.' : 'No posts available yet.'}
          </p>
        </div>
      )}
    </div>
  );
}
