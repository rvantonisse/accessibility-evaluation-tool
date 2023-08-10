<!-- @Layout:Base -->
<div class="Controls default-grid">
  <LanguageSelect locales="{locales}" />
</div>

<div id="site-header" class="site-header">
  <div class="default-grid">
    <div class="tool-header">
      <div class="tool-header-name">
        WCAG-EM R<span class="display-phablet">eport </span>T<span class="display-phablet">ool</span>
      </div>
    </div>
  </div>
</div>

<NavigationBar />

<slot />

{#if !isAcknowledgements}
<Pager label="{TRANSLATED.STEP}" context="{pagerContext}" />
{/if}

<!-- /@Layout -->

<style>
/* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';
  import { useLocation } from 'svelte-navigator';

  import { routes, basepath } from '@app/stores/appStore.js';
  import locales from '@app/locales/index.json';

  import LanguageSelect from '@app/components/ui/LanguageSelect.svelte';
  import NavigationBar from '@app/components/ui/NavigationBar.svelte';
  import Pager from '@app/components/ui/Pager.svelte';

  const { translate } = getContext('app');
  const location = useLocation();

  $: TRANSLATED = {
    STEP: $translate('UI.NAV.STEP', { default: 'step' }),
  };

  $: isAcknowledgements = $location.pathname === $routes.ACKNOWLEDGEMENTS.path;

  $: pagerContext = Object.keys($routes).map((key) => {
    return $routes[key];
  });  
</script>
