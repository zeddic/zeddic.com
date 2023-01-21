import type {PageLoadEvent} from './$types';

export interface Post {
  slug: string;
  metadata: Record<string, string>;
}

export function load({params}: PageLoadEvent) {
  return {
    posts: getMarkdownPosts(),
  };
}

function getMarkdownPosts(): Post[] {
  const rawPosts = import.meta.glob('./*.md', {eager: true});

  const posts: Post[] = [];
  for (const [path, data] of Object.entries(rawPosts)) {
    posts.push({
      slug: getSlug(path),
      metadata: (data as any).metadata,
    });
  }

  return posts;
}

function getSlug(path: string): string {
  console.log(path);
  return path.split('/').at(-1)?.replace('.md', '') ?? '';
}
