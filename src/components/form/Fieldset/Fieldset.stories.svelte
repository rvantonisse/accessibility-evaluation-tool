<Meta 
    title="Forms/Fieldset/Stories"
    argTypes="{{
        legend: {},
        helptext: {}
    }}"
/>

<Story
    name="Default"
    let:args
    args="{{
        legend: "A legend",
        helptext: ""
    }}"
>
    <Fieldset
        legend="{args.legend}"
        helptext="{args.helptext}"
    >
        <p>A Fieldset groups multiple form elements that share purpose.</p>
    </Fieldset>
</Story>

<Story name="Simple">
    <Fieldset legend="Simple fieldset">
        <p>Some contents that is grouped.</p>
    </Fieldset>
</Story>

<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Fieldset from './Fieldset.svelte';
</script>
