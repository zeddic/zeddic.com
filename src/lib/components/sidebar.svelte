<script lang="ts">
  import {page} from '$app/stores';

  let className: string;
  export {className as class};

  const NAV = [
    {title: 'About me', url: '/'},
    {title: 'Projects', url: '/projects'},
    {title: 'Notes', url: '/notes'},
    // {
    //   title: 'Notes',
    //   children: [
    //     // Populated from query
    //   ],
    // },
  ];
</script>

<section class={className}>
  <header class="text-center mb-2">
    <img
      src="/src/static/baileys.png"
      alt="Scott Bailey"
      class="w-40 mb-4 rounded-full overflow-hidden mx-auto"
    />

    <p class="font-semibold text-h4">Scott Bailey</p>
    <p>Staff Software Engineer</p>
  </header>

  <nav>
    <ol>
      {#each NAV as item}
        <li>
          <a href={item.url} class:active={$page.url.pathname === item.url}>
            {item.title}
          </a>
        </li>
      {/each}
    </ol>
  </nav>
</section>

<style lang="scss">
  $canvas: #edf2f4;
  $background: #fff;
  $nav-background: $canvas;
  $border-color: #d4d4d4;
  $primary: #d90429;
  $primary-accent: #ef233c;
  $primary-text: #edf2f4;
  $secondary: #2b2d42;
  $secondary-accent: #8d99ae;
  $secondary-text: #edf2f4;

  nav {
    position: sticky;
    top: 0;
    color: #2b2d42;
    padding: 5px 0;

    ol {
      list-style: none;
      margin: 0;

      li {
        margin: 0 0 4px 0;

        a {
          display: block;
          padding: 4px 16px;

          &:hover {
            text-decoration: none;
            color: $secondary-text;
            background: $secondary-accent;
          }
        }

        a.active {
          color: $primary-text;
          background: $primary-accent;
          border-right: 4px solid $primary;
        }
      }

      .sub-nav-list {
        li > a {
          padding-left: 28px;
        }
      }

      .sub-nav-title {
        color: $secondary;
        margin: 0 16px 4px;
      }
    }
  }
</style>
