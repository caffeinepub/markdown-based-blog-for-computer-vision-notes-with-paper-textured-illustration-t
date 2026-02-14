export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  filename: string;
}

export interface PostManifest {
  posts: PostMetadata[];
}

export interface Post extends PostMetadata {
  content: string;
}
