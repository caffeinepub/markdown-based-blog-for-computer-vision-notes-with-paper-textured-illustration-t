import { usePosts } from '../features/posts/usePosts';
import PostCard from '../components/posts/PostCard';
import PostSearch from '../components/posts/PostSearch';
import TagFilterBar from '../components/posts/TagFilterBar';
import { extractUniqueTags } from '../features/posts/postTags';
import { filterPosts } from '../features/posts/postFilters';
import { Loader2 } from 'lucide-react';
import { useNavigate, useSearch } from '@tanstack/react-router';

export default function PostListPage() {
  const { data: posts, isLoading, error } = usePosts();
  const navigate = useNavigate({ from: '/' });
  const search = useSearch({ from: '/' });
  
  const searchQuery = search.q || '';
  const selectedTag = search.tag || null;

  const availableTags = extractUniqueTags(posts);
  const filteredPosts = filterPosts(posts, searchQuery, selectedTag);

  const handleSearchChange = (value: string) => {
    navigate({
      search: (prev) => ({ ...prev, q: value }),
      replace: true,
    });
  };

  const handleTagSelect = (tag: string | null) => {
    navigate({
      search: (prev) => ({ ...prev, tag: tag || '' }),
      replace: true,
    });
  };

  if (isLoading) {
    return (
      <div className="homepage-wrapper flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="homepage-wrapper text-center py-12">
        <p className="text-destructive">Failed to load posts. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="homepage-wrapper space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Computer Vision Notes</h1>
          <p className="text-lg">
            A collection of notes and insights on computer vision concepts
          </p>
        </div>
        <PostSearch value={searchQuery} onChange={handleSearchChange} />
        <TagFilterBar
          availableTags={availableTags}
          selectedTag={selectedTag}
          onSelectTag={handleTagSelect}
        />
      </div>

      {filteredPosts && filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} currentSearch={searchQuery} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p>
            {searchQuery || selectedTag ? 'No posts found matching your filters.' : 'No posts available yet.'}
          </p>
        </div>
      )}
    </div>
  );
}
