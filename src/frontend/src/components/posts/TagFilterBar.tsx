import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface TagFilterBarProps {
  availableTags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export default function TagFilterBar({ availableTags, selectedTag, onSelectTag }: TagFilterBarProps) {
  if (availableTags.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Filter by tag:</span>
        {selectedTag && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSelectTag(null)}
            className="h-7 gap-1.5 text-xs tag-filter-button"
          >
            Clear filter
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => (
          <Button
            key={tag}
            variant="ghost"
            size="sm"
            onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
            className={`h-8 px-3 text-xs font-medium rounded-full transition-all ${
              selectedTag === tag ? 'tag-filter-button-selected' : 'tag-filter-button'
            }`}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
}
