<div class="Auditor">
  <AuditorFilter />

  <div class="Auditor__Assertions">
    <AuditorView criteria="{filteredCriteria}" />
  </div>
</div>

<style>
  /* REMOVED */
</style>

<script> 
  import { getContext } from 'svelte';

  import { auditFilter } from '@app/stores/auditStore.js';
  import { CONFORMANCE_LEVELS, scopedWcagVersions } from '@app/stores/wcagStore.js';

  import AuditorFilter from './AuditorFilter.svelte';
  import AuditorView from './AuditorView.svelte';

  const { scopeStore } = getContext('app');
  import { CriteriaFiltered } from '@app/stores/filteredCriteriaStore.js';

  if ($auditFilter['VERSION']) {
    $auditFilter['VERSION'] = [...$scopedWcagVersions].reverse().join();
    $auditFilter['LEVEL'] = CONFORMANCE_LEVELS.filter(
      (level) => $scopeStore['CONFORMANCE_TARGET'].indexOf(level) >= 0
    );
  }

  $: filteredCriteria = $CriteriaFiltered
    // Filter by version
    .filter((criterion) => {
      const filterVersions = $auditFilter['VERSION'];

      // Pass filtering if not enabled
      if (filterVersions.length === 0) {
        return true;
      }

      return filterVersions.indexOf(criterion.version) >= 0;
    })
    // Filter by conformance level
    .filter((criterion) => {
      const filterLevels = $auditFilter['LEVEL'];

      // Pass filtering if not enabled
      if (filterLevels.length === 0) {
        return true;
      }

      return filterLevels.indexOf(criterion.conformanceLevel) >= 0;
    });

</script>
