import {derived, writable, type Readable} from 'svelte/store';

/** An image that can be displayed in the lightbox. */
export interface LightboxImage {
  src: string;
  alt: string;
  group?: string;
}

/** Stores internal state. */
interface State {
  /** The active image. */
  active?: LightboxImage;
  /** Maps a group id to all registered images in that group. */
  groups: Record<string, LightboxImage[]>;
}

/** Given an image, returns a group id it belongs to. */
function getImageGroup(image: LightboxImage): string {
  return image.group ?? '_default';
}

/** A version of mod that supports negative values. */
function negativeMod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const store = writable<State>({
  groups: {},
});

const {subscribe, update} = store;

// Wrap store in a custom store so we can provide convenience methods.
export const lightboxStore = {
  subscribe,

  /** Registers a known image in the lightbox. Eligible to increment between. */
  registerImage: (image: LightboxImage) => {
    update(state => {
      const groupId = getImageGroup(image);
      if (!state.groups[groupId]) {
        state.groups[groupId] = [];
      }

      state.groups[groupId].push(image);
      return state;
    });
  },

  /** Unregisters an image from the lightbox store. */
  unregisterImage: (image: LightboxImage) => {
    update(state => {
      const groupId = getImageGroup(image);
      const imgs = state.groups[groupId] ?? [];
      state.groups[groupId] = imgs.filter(i => i !== image);
      return state;
    });
  },

  /** Sets thea ctive image to display in the lightbox. */
  setActive: (image?: LightboxImage) => {
    update(state => {
      state.active = image;
      return state;
    });
  },

  /** Creates a readable store of the currently active image. */
  selectActive: (): Readable<LightboxImage | undefined> => {
    return derived(store, state => state.active);
  },

  /** Selects the next image in the active image's group. */
  next: () => {
    lightboxStore.increment(1);
  },

  /** Selects the previous image in the active image's group. */
  prev: () => {
    lightboxStore.increment(-1);
  },

  increment: (delta: number) => {
    update(state => {
      const active = state.active;
      if (!active) return state;

      const groupId = getImageGroup(active);
      const group = state.groups[groupId] ?? [];
      const idx = group.indexOf(active);
      if (idx === -1) return state;

      let newIdx = negativeMod(idx + delta, group.length);

      const newImage = group[newIdx];
      state.active = newImage;

      return state;
    });
  },
};
