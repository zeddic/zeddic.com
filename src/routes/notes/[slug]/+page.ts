import type {PageLoadEvent} from './$types';

interface NoteDoc {
  content: any;
  title: string;
}

export async function load({params}: PageLoadEvent): Promise<NoteDoc> {
  const post = await import(`../${params.slug}.md`);
  const title = post.metadata.title;
  const content = post.default;

  return {
    content,
    title,
  } satisfies NoteDoc;
}
