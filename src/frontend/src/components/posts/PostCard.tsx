import { Link } from '@tanstack/react-router';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { PostMetadata } from '../../features/posts/posts.types';

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/60">
      <CardHeader className="space-y-3">
        <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
      </CardHeader>

      {post.excerpt && (
        <CardContent>
          <CardDescription className="line-clamp-3 text-sm leading-relaxed">
            {post.excerpt}
          </CardDescription>
        </CardContent>
      )}

      <CardFooter className="flex items-center justify-between pt-4">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium bg-accent/60 text-accent-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="px-2 py-0.5 text-xs font-medium text-muted-foreground">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
        )}
        <Link to="/post/$slug" params={{ slug: post.slug }}>
          <Button variant="ghost" size="sm" className="gap-1.5 ml-auto group-hover:gap-2.5 transition-all">
            Read
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
