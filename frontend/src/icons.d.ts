declare module 'virtual:icons/*' {
    import type { SvelteComponentTyped } from 'svelte';
    import type { ComponentType } from 'svelte';
  
    const component: ComponentType<SvelteComponentTyped>;
    export default component;
  }