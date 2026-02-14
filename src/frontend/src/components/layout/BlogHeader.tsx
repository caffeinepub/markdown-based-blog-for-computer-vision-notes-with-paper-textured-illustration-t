import { useNavigate } from '@tanstack/react-router';
import { BookOpen } from 'lucide-react';

export default function BlogHeader() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate({ to: '/', search: { q: '', tag: '' } });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur-md supports-[backdrop-filter]:bg-card/85">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={handleHomeClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <BookOpen className="h-7 w-7 text-primary" strokeWidth={2.5} />
              <div className="absolute -inset-1 bg-primary/10 rounded-full blur-sm -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">CV Notes</span>
              <span className="text-xs text-muted-foreground -mt-1">Computer Vision</span>
            </div>
          </button>

          <div className="hidden md:block">
            <img
              src="/assets/generated/header-illustration.dim_1600x400.png"
              alt="Computer Vision Illustration"
              className="h-12 w-auto object-contain opacity-60"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
