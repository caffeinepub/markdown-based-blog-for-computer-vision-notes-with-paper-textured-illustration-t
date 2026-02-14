import { Link } from '@tanstack/react-router';
import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
      <div className="relative">
        <FileQuestion className="h-20 w-20 text-muted-foreground/40" strokeWidth={1.5} />
        <div className="absolute -inset-2 bg-muted/20 rounded-full blur-xl -z-10" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Post Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The post you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link to="/" search={{ q: '', tag: '' }}>
        <Button variant="default">Back to all notes</Button>
      </Link>
    </div>
  );
}
