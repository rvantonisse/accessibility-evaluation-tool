<svelte:head>
  <title>{title} | WCAG-EM Report Tool</title>
</svelte:head>

<div class="page-content" id="{pageid}">
  {#if needsPanelSpace}
    <div class="default-grid">
      <main class="main-with-panel">
        <h1>{title}</h1>
        <slot />
      </main>
      <YourReport />
    </div>
  {:else}
    <div class="default-grid">
      <main class="main-without-panel">
        {#if !isViewReport && !isOverview && !isAcknowledgements}
          <YourReport />
        {/if}
        <h1>{title}</h1>
        <slot />
      </main>
    </div>
  {/if}
</div>

<style>
  /* REMOVED */
</style>

<script>
  import { onMount } from 'svelte';
  import { useLocation } from 'svelte-navigator';
  import { honourFragmentIdLinks } from '@app/scripts/honourFragmentIdLinks.js';

  import { routes, yourReportPanelOpen } from '@app/stores/appStore.js';

  import YourReport from '@app/components/ui/YourReport.svelte';

  const location = useLocation();

  export let pageid;

  $: isViewReport = $location.pathname === $routes.VIEW_REPORT.path;
  $: isOverview = $location.pathname === $routes.OVERVIEW.path;
  $: isAcknowledgements = $location.pathname === $routes.ACKNOWLEDGEMENTS.path;
  $: needsPanelSpace =
    !isViewReport && !isOverview && !isAcknowledgements && $yourReportPanelOpen;

  onMount(() => {
    setTimeout(honourFragmentIdLinks($location), 100);
  });

  export let title;
</script>
