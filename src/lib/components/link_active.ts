import {page} from '$app/stores';

/**
 * Conditionally applies a class a node element when on its the links current or nested path.
 */
export function linkActive(node: HTMLElement, className: string) {
  let pathname = '';

  const unsubscribe = page.subscribe(page => {
    pathname = page.url.pathname;
    updateClass();
  });

  function updateClass() {
    const href = node.getAttribute('href') ?? '';
    console.log('seeing if', href, 'matches path', pathname);
    const active = isActive(href, pathname);
    console.log(active);
    node.classList.toggle(className, active);
  }

  return {
    onUpdate: (newClassName: string) => {
      className = newClassName;
      updateClass();
    },
    destroy: unsubscribe,
  };
}

function isActive(url: string, pathname: string) {
  if (url === '/') {
    return pathname === url;
  } else {
    return (pathname ?? '').startsWith(url);
  }
}
