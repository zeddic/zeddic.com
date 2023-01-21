<script lang="ts">
  import type {PageData} from './$types';
  export let data: PageData;
  const posts = data.posts;
</script>

<ul class="prose-ul">
  {#each posts as post}
    <li>
      <a href={'./notes/' + post.slug}>{post.metadata.title ?? post.slug}</a>
    </li>
  {/each}
</ul>
