<Meta
  title="UI/Button/Stories"
  component="{Button}"
  argTypes="{{
    type: {
      control: {
        type: 'select'
      },
      options: ['button', 'submit']
    },
    primary: {
      control: {
        type: 'boolean'
      }
    },
    small: {
      control: {
        type: 'boolean'
      }
    }
  }}"
/>

<Story
  name="Default"
  let:args
  args="{{
    textContent: DEFAULT_TEXTCONTENT
  }}"
  argTypes="{{
    htmlContent: {
      control: {
        type: 'text'
      },
      description: "Slotted HTML content"
    },
    textContent: {
      control: {
        type: 'text'
      },
      description: "Slotted text content"
    }
  }}"
  source
>
  <Button
    type="{args.type}"
    primary="{args.primary}"
    small="{args.small}"
    on:click="{handleClick}"
  >
    {#if args.htmlContent}
      {@html args.htmlContent}
    {:else}
      {args.textContent}
    {/if}
  </Button>
</Story>

<Story name="Primary">
  <Button primary>Primary Button</Button>
  <Button primary small>Primary Button Small</Button>
</Story>

<Story name="Secondary">
  <!-- Default -->
  <Button>Secondary Button</Button>
  <Button small>Secondary Button Small</Button>
</Story>

<!-- @component
Submit button
 -->
<Story name="Submit">
  <Button type="submit" primary>Submit button</Button>
</Story>

<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Button from './Button.svelte';

  const DEFAULT_TEXTCONTENT = 'Hit me!';

  let count = 0;
  function handleClick(event) {
    count += 1;
    console.log(event.target);
  }
</script>
