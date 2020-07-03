import {useMarkdownFileMetadata} from './static_markdown_metadata';

/**
 * Returns a list of all links to notes files to show in the left nav.
 */
export function useMarkdownNotesMetadata(): NoteInfo[] {
  const markdownFiles = useMarkdownFileMetadata();

  const data: NoteInfo[] = markdownFiles.map(n => {
    return {
      url: n.fields.slug,
      title: n.frontmatter.title_nav || n.frontmatter.title,
      hide: !!n.frontmatter.hide,
    };
  });

  return data
    .filter(n => n.url.startsWith('/notes/'))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export interface NoteInfo {
  url: string;
  title: string;
  hide: boolean;
}
