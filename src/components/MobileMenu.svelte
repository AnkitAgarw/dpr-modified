<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { isFormOpen } from '$lib/stores/formModal';
  import { Phone, Download } from 'lucide-svelte';

  const dispatch = createEventDispatcher();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'flats', label: 'Flats' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'location', label: 'Location' }
  ];

  function scrollToSection(section: string) {
    dispatch('scrollToSection', section);
  }

  function openBrochureForm() {
    isFormOpen.set(true);
  }
</script>

<div class="fixed top-[90px] left-0 right-0 z-10 md:hidden bg-white dark:bg-gray-900 shadow-lg">
  <nav class="flex flex-col p-4">
    {#each navItems as item}
      <button
        on:click={() => scrollToSection(item.id)}
        class="py-3 px-4 text-left text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
      >
        {item.label}
      </button>
    {/each}
    <!-- Download Brochure Button for Mobile -->
    <button
      on:click={openBrochureForm}
      class="mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors duration-200"
    >
      <Download class="h-5 w-5" />
      <span class="font-medium">Download Brochure</span>
    </button>
    <!-- Call Button for Mobile -->
    <a
      href="tel:+917774066822"
      class="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors duration-200"
    >
      <Phone class="h-5 w-5" />
      <span class="font-medium">Call Now: +91 77740 66822</span>
    </a>
  </nav>
</div>