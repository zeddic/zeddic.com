<script lang="ts">
  export let icon: string;
  export let size: number | undefined = undefined;
  let className: string = '';
  export {className as class};

  const sizeStr = size ? `${size}px` : '';
</script>

<div class={'icon ' + className} style="width:{sizeStr}; height:{sizeStr}; font-size:{sizeStr}">
  {icon}
</div>

<style lang="scss">
  .icon {
    font-family: 'Material Icons Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
  }
</style>
