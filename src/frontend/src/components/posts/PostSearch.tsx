import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface PostSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostSearch({ value, onChange }: PostSearchProps) {
  return (
    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        placeholder="Search notes by title or tags..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-card/60 backdrop-blur-sm border-border/60 focus-visible:ring-primary/30"
      />
    </div>
  );
}
