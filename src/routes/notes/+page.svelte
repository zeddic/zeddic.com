<script lang="ts">
  import type {PageData} from './$types';
  export const prerender = true;
  export let data: PageData;
  const posts = data.posts;
</script>

<h1>Notes</h1>

<ul>
  {#each posts as post}
    <li>
      <a href={post.slug}>{post.metadata.title ?? post.slug}</a>
    </li>
  {/each}
</ul>
