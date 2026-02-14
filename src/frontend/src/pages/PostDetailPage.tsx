import { useParams, Link } from '@tanstack/react-router';
import { usePostContent } from '../features/posts/usePosts';
import MarkdownRenderer from '../components/markdown/MarkdownRenderer';
import { ArrowLeft, Calendar, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotFound from '../components/common/NotFound';

export default function PostDetailPage() {
  const { slug } = useParams({ from: '/post/$slug' });
  const { data: post, isLoading, error } = usePostContent(slug);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return <NotFound />;
  }

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2 -ml-2">
            <ArrowLeft className="h-4 w-4" />
            Back to all notes
          </Button>
        </Link>

        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</time>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="prose-paper">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
}
