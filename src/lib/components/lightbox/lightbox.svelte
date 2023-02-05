<script lang="ts">
  import {createEventDispatcher, onDestroy} from 'svelte';
  import {lightboxStore, type LightboxImage} from './lightbox-store';

  // Renders a modal dialog with an image in side.
  // Allows images in a same image group to be incremented between.

  /** The image to display in the lightbox. */
  export let img: LightboxImage;

  const dispatch = createEventDispatcher();

  /** Emit when the lightbox wishes to be closed. */
  const close = () => dispatch('close');

  let modal: HTMLElement;

  // const imageGroup = lightboxStore.getImageGroup(img);
  // if (e.key === 'Tab') {
  //   // trap focus
  //   const nodes = modal.querySelectorAll<HTMLElement>('*');
  //   const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

  //   let index = tabbable.indexOf(document.activeElement as HTMLElement);
  //   if (index === -1 && e.shiftKey) index = 0;

  //   index += tabbable.length + (e.shiftKey ? -1 : 1);
  //   index %= tabbable.length;

  //   tabbable[index].focus();
  //   e.preventDefault();
  // }

  lightboxStore.setActive(img);
  const activeImg = lightboxStore.selectActive();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      close();
    }

    if (e.key === 'ArrowRight') {
      lightboxStore.next();
    }

    if (e.key === 'ArrowLeft') {
      lightboxStore.prev();
    }
  }

  const previouslyFocused = !!document ? (document.activeElement as HTMLElement) : undefined;

  onDestroy(() => {
    previouslyFocused?.focus();
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="modal-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="backdrop" on:click={close} />
  <div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
    <!-- svelte-ignore a11y-autofocus -->
    <button type="button" autofocus on:click={close} aria-label="Close">
      <img src={$activeImg?.src} alt={$activeImg?.alt} /></button
    >
  </div>
</div>

<style lang="scss">
  .modal-container {
    position: fixed;
    place-items: center center;
    display: grid;
    inset: 0;
  }

  .backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    animation: fadeIn 350ms ease;
  }

  .modal {
    @apply shadow-xl;
    animation: dialogIn 350ms ease;
    border-radius: 16px;
    display: flex;
    outline: 4px solid rgba(0, 0, 0, 0.4);
    overflow: hidden;
    z-index: 1;
    max-width: 90vw;
    max-height: 90vh;
  }

  img {
    margin: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes dialogIn {
    0% {
      opacity: 0;
      transform: scale(0, 0);
    }
    60% {
      transform: scale(1.05, 1.05);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
</style>
