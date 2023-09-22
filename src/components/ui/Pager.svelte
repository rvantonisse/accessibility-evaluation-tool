<!--
 * @component
 *   Pager
 *
 * -->
<div>
  <aside aria-label="{TRANSLATED.PREVIOUSNEXT}">
    <ul>
      {#if previousPage}
        <li>
          <Link to="{previousPage.path}">
            <span>
              <span>{TRANSLATED.PREVIOUS}</span>
              <span>{previousPage.title}</span>
            </span>
          </Link>
        </li>
      {/if}

      {#if nextPage}
        <li class="Pager__Item pager--item next">
          <Link to="{nextPage.path}">
            <span class="pager--item-text">
              <span class="pager--item-text-direction">{TRANSLATED.NEXT}</span>
              <span class="pager--item-text-target">{nextPage.title}</span>
            </span>
          </Link>
        </li>
      {/if}
    </ul>
  </aside>
</div>
<!-- /component -->

<style>
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';
  import { Link, useLocation } from 'svelte-navigator';
  import { basepath } from '@app/stores/appStore.js';

  export let label = 'page';
  export let context = [];

  const { translate } = getContext('app');

  $: TRANSLATED = {
    PREVIOUSNEXT: $translate('UI.COMMON.PREVIOUSNEXT'),
    NEXT: $translate('UI.COMMON.NEXT', {
      default: 'Next {label}',
      values: { label }
    }),
    PREVIOUS: $translate('UI.COMMON.PREVIOUS', {
      default: 'Previous {label}',
      values: { label }
    })
  };

  $: indexedContext = context.map((page, index) => {
    return {
      path: page.path || '/',
      title: page.title || '',
      index
    };
  });

  $: pageCount = indexedContext.length;
  let location = useLocation();

  $: currentPage = indexedContext.find(
    (page) => page.path === $location.pathname
  );
  $: currentPageIndex = currentPage ? currentPage.index : null;

  $: previousPage =
    currentPageIndex > 0 && indexedContext[currentPageIndex - 1];
  $: nextPage =
    currentPageIndex < pageCount - 1 && indexedContext[currentPageIndex + 1];
</script>
