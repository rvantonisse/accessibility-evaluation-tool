<!--
 * @component
 *   NavigationBar
 *  -->
<nav>
  <ol>
    {#each navigationItems as navigationItem}
      <li class:current="{navigationItem.path === currentPath}">
        <Link to="{navigationItem.path}">{navigationItem.title}</Link>
      </li>
    {/each}
  </ol>
</nav>
<!-- /component -->

<style>
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';
  import { Link, useLocation } from 'svelte-navigator';

  const { translate } = getContext('app');

  $: navigationItems = [
    {
      path: '/',
      title: $translate('UI.NAV.WZRD_START')
    },
    {
      path: '/evaluation/define-scope',
      title: $translate('UI.NAV.WZRD_SCOPE')
    },
    {
      path: '/evaluation/explore-website',
      title: $translate('UI.NAV.WZRD_EXPLORE')
    },
    {
      path: '/evaluation/select-sample',
      title: $translate('UI.NAV.WZRD_SAMPLE')
    },
    {
      path: '/evaluation/audit-sample',
      title: $translate('UI.NAV.WZRD_AUDIT')
    },
    {
      path: '/evaluation/report-findings',
      title: $translate('UI.NAV.WZRD_REPORT')
    },
    {
      path: '/evaluation/view-report',
      title: $translate('UI.NAV.WZRD_VIEWREPORT')
    }
  ];

  const location = useLocation();

  $: currentPath = $location.pathname;
</script>
