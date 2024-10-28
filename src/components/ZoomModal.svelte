<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  export let imageSrc = '';
  export let title = '';
  export let description = '';

  import { isModalOpen } from '$lib/stores/RotatingSection';

  function closeModal() {
    isModalOpen.set(false);
  }

  function keyDownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal(); // Close modal when Escape key is pressed
    }
  }

  onMount(() => {
    if ($isModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
    }

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.body.style.overflow = ''; // Enable scrolling when modal is closed
      document.removeEventListener('keydown', keyDownHandler);
    };
  });
</script>

{#if $isModalOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto"
    on:click={closeModal}
  >
    <div class="relative w-full max-w-6xl mx-auto my-8 bg-white dark:bg-gray-950 rounded-lg overflow-hidden" on:click|stopPropagation>
      <button class="absolute top-4 right-4 text-white text-3xl focus:outline-none" on:click={closeModal}>
        &times;
      </button>
      <div class="flex justify-center items-center p-4">
        <img
          src={imageSrc}
          alt={title}
          class="w-auto h-auto max-h-[90vh] object-contain transform transition-transform duration-500 hover:scale-125"
        />
      </div>
      <div class="p-6 text-center">
        <h3 class="text-4xl font-bold text-black dark:text-white mb-4">{title}</h3>
        {#if description}
          <p class="text-lg text-black dark:text-white">{description}</p>
        {/if}
      </div>
    </div>
  </div>
{/if}
