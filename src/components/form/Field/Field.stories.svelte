<Meta component="{Field}" title="Forms/Field/Stories" />

<Story
  name="Default"
  let:args
  args="{{
    id: 'default',
    label: 'An input field',
    type: 'text',
    inline: false
  }}"
  argTypes="{{
    label: {
      control: {
        type: 'text'
      }
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'tel']
    }
  }}"
>
  <Field id="{args.id}" label="{args.label}" inline="{args.inline}">
    <input type="{args.type}" id="{args.id}" />
  </Field>
</Story>

<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Field from './Field.svelte';
</script>
