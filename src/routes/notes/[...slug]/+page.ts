import {createNoteDocFromImport, type NoteDoc} from '$lib/docs';
import type {PageLoadEvent} from './$types';

export const prerender = true;

export async function load({params}: PageLoadEvent): Promise<NoteDoc> {
  const raw = await importMarkdown(params.slug);
  return createNoteDocFromImport(raw);
}

async function importMarkdown(slug: string) {
  const parts = (slug ?? '').split('/');

  // HACK: Vite dynamic imports wild imports are only 1 deep folder lookups.
  // Since our slug can potentially hold sub-folders (eg category/note), we need to
  // have a different dynamic imports for each depth we want to support.

  if (parts.length === 1) {
    return import(`./../${parts[0]}.md`);
  } else {
    return import(`./../${parts[0]}/${parts[1]}.md`);
  }
}
