<!-- 
@component

# Details

Discloses additional information.

 -->

<details class="Details" bind:open="{open}">
  <summary role="button" class="Button small">{summary}</summary>

  <div class="Details_contents">
    <slot />
  </div>
</details>

<style>
  @import '@app/components/ui/Button/styles.css';

  summary {
    position: relative;
    display: inline-flex;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
    /*
     * @todo content alt text is not supported for webkit 
     * replace with html or css url image
    */
    content: "+";
    content: "+" / "";

    width: 1rem;
    height: 1rem;
  }

  [open] > summary::after {
    content: "–";
    content: "–" / "";
  }

</style>

<script>
  export let open = 'true';
  export let summary = 'details';
</script>
