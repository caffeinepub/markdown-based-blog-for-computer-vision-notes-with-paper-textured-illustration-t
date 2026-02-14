import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import BlogLayout from './components/layout/BlogLayout';

const rootRoute = createRootRoute({
  component: BlogLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: PostListPage,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || '',
      tag: (search.tag as string) || '',
    };
  },
});

const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/post/$slug',
  component: PostDetailPage,
});

const routeTree = rootRoute.addChildren([indexRoute, postRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
