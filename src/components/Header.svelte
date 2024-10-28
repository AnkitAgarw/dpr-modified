<script lang="ts">
  import { darkMode } from '$lib/stores/darkMode';
  import { isFormOpen } from '$lib/stores/formModal';
  import { Sun, Moon, Menu, X, Phone, Download } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

  let isMenuOpen = false;
  const dispatch = createEventDispatcher();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'flats', label: 'Flats' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'location', label: 'Location' }
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function scrollToSection(section: string) {
    dispatch('scrollToSection', section);
    isMenuOpen = false;
  }

  function openBrochureForm() {
    isFormOpen.set(true);
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-premium-900/95 backdrop-blur-md border-b border-premium-200/50 dark:border-premium-700/50">
  <div class="container mx-auto px-4 flex items-center justify-between h-20">
    <div class="flex-shrink-0">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DPR%20infra%20projects%20final%20logo-cn6SAFlD9t6EHxtvDybdFmxNYprMaV.png"
        alt="DPR Infra Projects Logo"
        width="180"
        height="90"
        class="dark:invert"
      />
    </div>
    
    <nav class="hidden md:flex items-center space-x-8">
      {#each navItems as item}
        <button 
          on:click={() => scrollToSection(item.id)}
          class="text-base font-medium text-premium-700 dark:text-premium-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
        >
          {item.label}
        </button>
      {/each}
    </nav>

    <div class="flex items-center space-x-4">
      <button
        on:click={openBrochureForm}
        class="hidden md:flex items-center gap-2 premium-button"
      >
        <Download class="h-4 w-4" />
        <span>Download Brochure</span>
      </button>

      <a
        href="tel:+917774066822"
        class="hidden md:flex items-center gap-2 premium-button-outline"
      >
        <Phone class="h-4 w-4" />
        <span>Call Now</span>
      </a>

      <button
        on:click={() => { $darkMode = !$darkMode }}
        class="p-2 rounded-full hover:bg-premium-100 dark:hover:bg-premium-800"
      >
        {#if $darkMode}
          <Sun class="h-5 w-5" />
        {:else}
          <Moon class="h-5 w-5" />
        {/if}
      </button>

      <button
        class="md:hidden p-2"
        on:click={toggleMenu}
      >
        {#if isMenuOpen}
          <X class="h-5 w-5" />
        {:else}
          <Menu class="h-5 w-5" />
        {/if}
      </button>
    </div>
  </div>
</header>

{#if isMenuOpen}
  <div class="fixed inset-x-0 top-20 z-40 md:hidden bg-white dark:bg-premium-900 border-b border-premium-200/50 dark:border-premium-700/50">
    <nav class="container mx-auto px-4 py-4">
      {#each navItems as item}
        <button
          on:click={() => scrollToSection(item.id)}
          class="block w-full text-left py-3 text-premium-700 dark:text-premium-300 hover:text-gold-600 dark:hover:text-gold-400"
        >
          {item.label}
        </button>
      {/each}
      <div class="mt-4 space-y-3">
        <button
          on:click={openBrochureForm}
          class="w-full premium-button flex items-center justify-center gap-2"
        >
          <Download class="h-4 w-4" />
          <span>Download Brochure</span>
        </button>
        <a
          href="tel:+917774066822"
          class="w-full premium-button-outline flex items-center justify-center gap-2"
        >
          <Phone class="h-4 w-4" />
          <span>Call Now</span>
        </a>
      </div>
    </nav>
  </div>
{/if}