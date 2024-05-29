<Meta component="{Field}" title="Forms/Field/Stories" />

<Story
  name="Default"
  let:args
  args="{{
    id: 'default',
    label: 'An input field',
    inline: false
  }}"
  argTypes="{{
    label: {
      control: {
        type: 'text'
      }
    },
  }}"
  source
>
  <Field id="{args.id}" label="{args.label}" inline="{args.inline}">
    <input type="text" id="{args.id}" />
  </Field>
</Story>

<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Field from './Field.svelte';
</script>
