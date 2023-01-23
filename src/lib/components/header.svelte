<script lang="ts">
  import {page} from '$app/stores';
  import Icon from './icon.svelte';
  import {afterNavigate} from '$app/navigation';
  import Logo from './logo.svelte';

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

<section class={'header mt-8 md:mt-16 ' + className}>
  <!-- Name and Photo -->
  <header class="">
    <a href="/" class="flex gap-4 items-center text-text-primary !no-underline">
      <!-- <Logo class="w-[60px] transition-colors" /> -->
      <div class="bg-blue-100 rounded-full overflow-hidden w-[80px] ">
        <img src="/src/assets/baileys-cartoon.png" alt="Scott Bailey" />
      </div>
      <!-- <img src="/src/assets/baileys.png" alt="Scott Bailey" class="w-[60px] rounded-full" /> -->
      <p class="!font-light text-h1 !text-text-primary">Scott Bailey</p>
    </a>
  </header>

  <!-- Navigation Links -->
  <nav class:open>
    <!-- Mobile only header -->
    <div class="md:hidden !font-light text-h2 mb-8 pl-4">Navigation</div>
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

  <!-- Mobile only nav sidebar toggle -->
  <button type="button" class="nav-btn md:!hidden" on:click={onNavToggleClick}>
    <Icon icon={open ? 'close' : 'menu'} size={48} />
  </button>
</section>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

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
    top: 32px;
    z-index: 10;

    &:hover,
    &:focus {
      @apply bg-slate-700;
    }

    &:active {
      @apply bg-slate-500;
    }
  }

  // MOBILE HEADER
  nav {
    position: fixed;

    width: min(400px, 100vw);
    height: 100vh;
    top: 0;
    right: min(-400px, -100vw);
    background: rgba(0, 0, 0, 0.9);
    padding: 32px;
    color: #fff;

    &.open {
      display: block;
      right: 0px;
      transition: right ease-in 100ms;
    }

    ol {
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
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
        }
      }
    }
  }

  // DESKTOP HEADER

  @screen md {
    nav {
      background: initial;
      color: initial;
      height: initial;
      padding: initial;
      position: initial;
      width: initial;
    }

    nav {
      position: sticky;
      top: 0;

      ol {
        flex-direction: row;

        li {
          a {
            font-weight: 500;
            @apply text-red-600;
            font-size: 18px;

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
  }
</style>
