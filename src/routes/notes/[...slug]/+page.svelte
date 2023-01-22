<script lang="ts">
  import type {PageData} from './$types';
  export let data: PageData;
</script>

<article>
  {#if data.title}
    <h1>{data.title}</h1>
  {/if}
  <svelte:component this={data.content} />
</article>
