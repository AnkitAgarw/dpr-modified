<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  export const ssr = false;
  import { browser } from '$app/environment';

  export let highlights = {
    "Connectivity": [
      { text: "1 km from Nagole metro station", icon: "train" },
      { text: "1 km from Uppal metro station", icon: "train" },
      { text: "1 km from bus stations", icon: "bus" }
    ],
    "Travel Times": [
      { text: "30 mn from ORR", icon: "road" },
      { text: "40 mn from Rajiv Gandhi International Airport", icon: "plane" }
    ],
    "Healthcare": [
      { text: "10 mm from Kamineni Hospital", icon: "hospital" },
      { text: "5 mm from Aditya Hospital", icon: "hospital" },
      { text: "5 mm from Supraja Hospital", icon: "hospital" },
      { text: "20 mm from Yashoda Hospital Malakpet", icon: "hospital" }
    ],
    "Education": [
      { text: "10 mm from Global Indian International School", icon: "school" },
      { text: "10 mm from Johnson Grammar School, Habsiguda", icon: "school" },
      { text: "10 mm from Birla Open Minds International School", icon: "school" }
    ],
    "Entertainment": [
      { text: "5 mm from Asian Cinesquare", icon: "movie" },
      { text: "10 mm from DSL mall", icon: "shopping-cart" },
      { text: "10 mm from SVM Grand", icon: "utensils" },
      { text: "12 mm from Pista House Uppal", icon: "utensils" }
    ]
  };

  let expandedSections = Object.keys(highlights).reduce((acc, key) => ({ ...acc, [key]: false }), {});
  let columnsPerRow = 1;

  function updateColumnsPerRow() {
    const width = window.innerWidth;
    columnsPerRow = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
  }

  onMount(() => {
    if (!browser) return;
    updateColumnsPerRow();
    window.addEventListener('resize', updateColumnsPerRow);
  });

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener('resize', updateColumnsPerRow);
  });

  $: rows = Object.keys(highlights).reduce((acc, _, i, arr) => {
    return i % columnsPerRow === 0 ? [...acc, arr.slice(i, i + columnsPerRow)] : acc;
  }, []);
</script>

<section class="premium-section">
  <div class="container mx-auto px-4">
    <h2 class="section-title">Location Highlights</h2>
    <p class="section-subtitle">Perfectly positioned for your convenience</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each Object.entries(highlights) as [category, items]}
        <div class="premium-card p-6 animate-fade-in">
          <button
            class="w-full flex items-center justify-between mb-4"
            on:click={() => expandedSections[category] = !expandedSections[category]}
          >
            <h3 class="text-2xl font-playfair font-semibold">{category}</h3>
            <span class="transform transition-transform duration-200" class:rotate-180={expandedSections[category]}>
              ↓
            </span>
          </button>

          {#if expandedSections[category]}
            <div class="space-y-4 animate-slide-up">
              {#each items as item}
                <div class="premium-card !bg-gray-50 dark:!bg-gray-800 p-4 flex items-center gap-4">
                  <span class="text-2xl">{item.icon}</span>
                  <p class="text-lg">{item.text}</p>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>