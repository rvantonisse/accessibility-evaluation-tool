<!-- 
  @component
  Button
  Dispatches an on:click event.
 -->
<button
  type="{type}"
  class="Button"
  class:primary="{primary}"
  class:small="{small}"
  on:click
  {...$$restProps}
>
  <slot />
</button>

<style>
  @import "./styles.css";
</style>

<script>
  /** @type {("button"|"submit")} */
  export let type = 'button';
  export let small = false;
  export let primary = false;
</script>
