<a href="{href}" target="_blank" rel="noopener roreferrer">
  <svg aria-hidden="true" class="icon-info"><use
      xlink:href="{`${$basepath}/images/icons.svg#icon-info`}"
    ></use></svg>
  <span>
    <slot />
  </span>
</a>

<style>
  /* REMOVED */
</style>

<script>
  import { basepath } from '@app/stores/appStore.js';

  export let href;
</script>
