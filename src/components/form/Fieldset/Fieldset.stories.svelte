<Meta component="{Fieldset}" title="Forms/Fieldset/Stories" />

<Story
  name="Default"
  let:args
  argTypes="{{
    legend: {
      control: {
        type: 'text'
      }
    },
    boxed: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }}"
  args="{{
    legend: 'A legend',
    boxed: false
  }}"
  source
>
  <Fieldset legend="{args.legend}" boxed="{args.boxed}">
    <p>A Fieldset groups multiple form elements that share purpose.</p>
  </Fieldset>
</Story>

<Story name="Flat">
  <Fieldset legend="Flat fieldset">
    <p>Some contents that is grouped.</p>
  </Fieldset>
</Story>

<Story name="Boxed">
  <Fieldset legend="Boxed fieldset" boxed>
    <p>Highlighted group to make more aware of its contents.</p>
  </Fieldset>
</Story>


<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Fieldset from './Fieldset.svelte';
</script>
