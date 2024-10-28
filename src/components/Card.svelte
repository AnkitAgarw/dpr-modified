<!-- src/lib/components/Card.svelte -->
<script lang="ts">
  export let className = '';
</script>

<div class={`bg-white dark:bg-gray-800 rounded shadow ${className}`}>
  <slot />
</div>
