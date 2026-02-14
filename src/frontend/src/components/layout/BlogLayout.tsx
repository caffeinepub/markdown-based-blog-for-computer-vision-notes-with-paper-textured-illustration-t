import { Outlet } from '@tanstack/react-router';
import BlogHeader from './BlogHeader';

export default function BlogLayout() {
  return (
    <div className="min-h-screen bg-paper">
      <BlogHeader />
      
      <main className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Outlet />
      </main>

      <footer className="border-t border-border/40 bg-card/60 backdrop-blur-md mt-16">
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Computer Vision Notes. All rights reserved.</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'cv-notes-blog'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
