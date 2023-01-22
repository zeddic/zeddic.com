import type {PageLoadEvent} from './$types';
import type {ServerLoadEvent} from '@sveltejs/kit';
import {getNotesMetadata} from '$lib/docs';

export const prerender = true;

export function load({params}: PageLoadEvent) {
  return {
    posts: getNotesMetadata(),
  };
}
