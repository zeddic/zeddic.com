<script lang="ts">
  import Lightbox from './lightbox.svelte';
  import {onDestroy} from 'svelte';
  import {lightboxStore, type LightboxImage} from './lightbox-store';

  // Renders a thumbnail that when clicked shows a full screen version of the image in a modal.

  let className: string = '';

  /** Extra classes to apply to the element. */
  export {className as class};
  /** The src of the image to display. */
  export let src: string;
  /** Alternative text for the image. */
  export let alt: string;
  /** An optional gropu the image belongs to. When a lightbox is open, you can loop through images in the group.*/
  export let group: string | undefined = undefined;

  const img: LightboxImage = {src, alt, group};
  lightboxStore.registerImage(img);

  let open = false;

  onDestroy(() => {
    lightboxStore.unregisterImage(img);
  });
</script>

<button type="button" on:click={() => (open = true)} class={className}>
  <img {src} {alt} class="object-cover w-full h-full" />
</button>

{#if open}
  <Lightbox on:close={() => (open = false)} {img} />
{/if}

<style lang="scss">
  @reference "../../../styles/global.css";

  button {
    @apply inline-flex w-32 h-32 overflow-hidden;
    @apply items-center justify-center border border-gray-300 rounded-md transition-all hover:shadow-lg hover:-translate-y-1;
  }
</style>
