<script lang="ts">
  import type {PageData} from './$types';
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
