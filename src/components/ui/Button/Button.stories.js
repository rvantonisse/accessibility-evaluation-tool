import Button from './Button.svelte';

/**
 * This is the Button. It dispatches an onClick event.
 */
export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs']
};

export const Primary = {
  args: {
    type: 'primary',
    label: 'Button'
  }
};
