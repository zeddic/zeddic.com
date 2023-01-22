/**
 * @fileoverview Functions for getting details on different markdown files.
 */

/**
 * Metadata about a note markdown file.
 */
export interface NoteMetadata {
  slug: string;
  metadata: Record<string, string>;
}

/**
 * A reference to a note document.
 */
export interface NoteDoc {
  /** The compiled mdsvx svelte component. */
  content: any;
  /** The title of the document. */
  title: string;
}

/**
 * Converts a raw file import from a vite dynamic import into a note document.
 */
export function createNoteDocFromImport(raw: any): NoteDoc {
  const title = raw.metadata.title;
  const content = raw.default;

  return {
    content,
    title,
  } satisfies NoteDoc;
}

/**
 * Returns a list of all known markdown note files.
 */
export function getNotesMetadata(): NoteMetadata[] {
  const rawPosts = import.meta.glob('/src/routes/notes/**/*.md', {eager: true});

  const posts: NoteMetadata[] = [];
  for (const [path, data] of Object.entries(rawPosts)) {
    posts.push({
      slug: getSlug(path, '/src/routes'),
      metadata: (data as any).metadata,
    });
  }

  return posts;
}

/**
 * Generates a slug from a given file path. Optionally removes a given path prefix.
 *
 * Note: this function may return nested slugs (eg /some/category/notes)
 */
function getSlug(path: string, prefixToRemove?: string): string {
  const parts = path.split('/');
  const file = (parts.pop() ?? '').replace('.md', '');
  parts.push(file);

  let slug = parts.join('/');

  if (prefixToRemove && slug.startsWith(prefixToRemove)) {
    slug = slug.substring(prefixToRemove.length);
  }

  return slug;
}
