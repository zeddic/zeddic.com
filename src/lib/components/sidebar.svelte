<script lang="ts">
  import {page} from '$app/stores';
  import Icon from './icon.svelte';
  import {afterNavigate} from '$app/navigation';

  let className: string;
  export {className as class};

  interface NavItem {
    title: string;
    url: string;
  }

  let NAV: NavItem[] = [
    {title: 'About me', url: '/'},
    {title: 'Projects', url: '/projects'},
    {title: 'Notes', url: '/notes'},
  ];

  let open = false;

  afterNavigate(() => (open = false));

  function onNavToggleClick() {
    open = !open;
  }

  function isLinkActive(url: string, currentPathName: string) {
    if (url === '/') {
      return currentPathName === url;
    } else {
      return (currentPathName ?? '').startsWith(url);
    }
  }
</script>

<section class={'sidebar ' + className} class:open>
  <!-- Name and Photo -->
  <header class="person text-center mb-2">
    <a href="/">
      <img
        src="/src/static/baileys.png"
        alt="Scott Bailey"
        class="w-40 mb-4 rounded-full overflow-hidden mx-auto"
      />
    </a>
    <p class="font-semibold text-h4">Scott Bailey</p>
  </header>

  <!-- Divider -->
  <div class="hidden md:block border-t border-t-gray-300 mx-8 mt-4 mb-4 h-[1px]" />

  <!-- Mobile only header -->
  <div class="md:hidden mb-8 text-h3 pl-4">Scott Bailey</div>

  <!-- Navigation Links -->
  <nav>
    <ol>
      {#each NAV as item}
        <li>
          <a href={item.url} class:active={isLinkActive(item.url, $page.url.pathname)}>
            {item.title}
          </a>
        </li>
      {/each}
    </ol>
  </nav>
</section>

<!-- Mobile only nav sidebar toggle -->
<button type="button" class="nav-btn md:!hidden" on:click={onNavToggleClick}>
  <Icon icon={open ? 'close' : 'menu'} size={48} />
</button>

<style lang="scss">
  .nav-btn {
    @apply bg-slate-800;

    align-items: center;
    border-radius: 8px;
    border: none;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    padding: 4px;
    position: fixed;
    right: 16px;
    top: 16px;
    z-index: 10;

    &:hover,
    &:focus {
      @apply bg-slate-700;
    }

    &:active {
      @apply bg-slate-500;
    }
  }

  // MOBILE SIDEBAR

  .sidebar {
    position: fixed;
    width: min(400px, 100vw);
    height: 100vh;
    top: 0;
    right: min(-400px, -100vw);
    background: rgba(0, 0, 0, 0.9);
    padding: 32px;
    color: #fff;

    .person {
      display: none;
    }

    &.open {
      display: block;
      right: 0px;
      transition: right ease-in 100ms;
    }
  }

  // MOBILE NAVIGATION LINKS

  nav {
    position: sticky;

    list-style: none;
    margin: 0;

    li {
      margin: 0 0 16px 0;

      a {
        color: #fff;
        display: block;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.5em;
        padding: 4px 16px;

        &:hover {
          @apply bg-gray-500;
          @apply text-white;
          text-decoration: none;
        }
      }

      a:global(.active) {
        color: #fff;
        @apply bg-red-500;
        @apply border-r-4 border-red-700;
      }
    }
  }

  // DESKTOP SIDEBAR AND NAVIGATION LINKS

  @screen md {
    .sidebar {
      background: initial;
      color: initial;
      display: block;
      height: initial;
      padding: initial;
      position: initial;
      width: initial;

      .person {
        display: block;
      }
    }

    nav {
      position: sticky;
      top: 0;

      li {
        margin: 0 0 4px 0;

        a {
          font-weight: 500;
          @apply text-red-600;
          font-size: initial;

          &:hover {
            color: #fff;
          }

          &.active {
            color: #fff;
          }
        }
      }
    }
  }
</style>
