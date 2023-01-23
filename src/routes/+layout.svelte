<script>
  import '@fontsource/open-sans/700.css';
  import '@fontsource/open-sans/500.css';
  import '@fontsource/open-sans/400.css';
  import '@fontsource/material-icons-outlined';
  import '/src/styles/global.scss';
  import 'prism-themes/themes/prism-atom-dark.min.css';

  import Header from '$lib/components/header.svelte';
</script>

<div class="container mx-auto px-8">
  <Header class="mb-8" />

  <div class="mb-16">
    <slot />
  </div>
</div>
