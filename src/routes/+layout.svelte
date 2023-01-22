<script>
  import '@fontsource/open-sans/700.css';
  import '@fontsource/open-sans/500.css';
  import '@fontsource/open-sans/400.css';
  import '@fontsource/material-icons-outlined';
  import '/src/styles/global.scss';
  import 'prism-themes/themes/prism-atom-dark.min.css';

  import Sidebar from '$lib/components/sidebar.svelte';
</script>

<div class="container mx-auto flex gap-8 px-4 mt-8">
  <Sidebar class="flex-initial shrink-0 basis-60" />

  <div class="flex-1">
    <slot />
  </div>
</div>
