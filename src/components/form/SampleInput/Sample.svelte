<Editable
  id="{data.ID}"
  label="{data.title || $translate('PAGES.SAMPLE.SAMPLE_PAGE')}"
  persistent
  removable
  on:DELETE
>
  <Fieldset
    legend="{$translate('PAGES.SAMPLE.SAMPLE_PAGE')} {data.title || count}"
  >
    <Input
      id="{id}--title"
      label="{$translate('PAGES.SAMPLE.LABEL_HANDLE')}"
      autofocus="{true}"
      bind:value="{data.title}"
    />
    <Input
      id="{id}--description"
      label="{$translate('PAGES.SAMPLE.LABEL_PAGE')}"
      bind:value="{data.description}"
    />
  </Fieldset>
</Editable>

<style>
  /* REMOVED */
</style>

<script>
  import { getContext } from 'svelte';

  import Editable from '@app/components/form/Editable.svelte';
  import Input from '@app/components/form/Input.svelte';
  import Fieldset from '../Fieldset/Fieldset.svelte';

  export let id;
  export let data;
  export let count;

  const { translate } = getContext('app');
</script>
