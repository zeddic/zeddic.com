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
    <a href="/" class="flex gap-2 items-center text-text-primary hover:text-ice-500 !no-underline">
      <Logo class="w-[40px] transition-colors " />
      <p class="!font-light text-h2 !text-text-primary">Scott Bailey</p>
    </a>
  </header>

  <!-- Navigation Links -->
  <nav class:open>
    <!-- Mobile only header -->
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
    <Icon icon={open ? 'close' : 'menu'} size={36} />
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
    @apply bg-gray-800;
    align-items: center;
    border-radius: 8px;
    border: none;
    color: #fff;
    display: inline-flex;
    justify-content: center;
    padding: 4px;
    position: fixed;
    right: 16px;
    top: 28px;
    z-index: 10;

    &:hover,
    &:focus {
      @apply bg-gray-700;
    }

    &:active {
      @apply bg-gray-500;
    }
  }

  // MOBILE HEADER
  nav {
    position: fixed;

    width: min(400px, 100vw);
    height: 100vh;
    top: 0;
    right: min(-400px, -100vw);
    background: #fff;
    padding: 32px;
    padding-right: 80px;
    padding-top: 28px;
    color: #fff;

    @apply shadow-xl;

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
          @apply text-text-primary;
          border-radius: 8px;
          text-decoration-line: none;
          display: block;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.5em;
          padding: 4px 16px;

          &:hover {
            @apply text-ice-500;
          }
        }

        a:global(.active) {
          @apply bg-gray-800;
          color: #fff;

          &:hover {
            @apply bg-ice-500;
          }
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
      box-shadow: none;

      ol {
        flex-direction: row;

        li {
          a {
            font-weight: 500;
            font-size: 18px;

            &:hover {
              // color: #fff;
            }

            &.active {
              // color: #fff;
            }
          }
        }
      }
    }
  }
</style>
