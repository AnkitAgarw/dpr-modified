<!-- src/lib/components/Button.svelte -->

<script lang="ts">
    export let variant: 'default' | 'ghost' = 'default';
    export let size: 'default' | 'icon' = 'default';
    export let className = '';
  </script>
  
  <button
    class={`${
      variant === 'ghost' ? 'bg-transparent' : 'bg-blue-500 text-white'
    } ${
      size === 'icon' ? 'p-2' : 'px-4 py-2'
    } rounded hover:bg-blue-600 dark:hover:bg-blue-400 ${className}`}
    on:click
  >
    <slot />
  </button>
  