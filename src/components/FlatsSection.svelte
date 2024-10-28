<script lang="ts">
  import { onMount } from 'svelte';
  import ZoomModal from './ZoomModal.svelte';
  import { isModalOpen, flatNumber } from '$lib/stores/RotatingSection';

  export let flats = [
    {
      title: "Luxury Flat A",
      description: "A beautiful flat with a sea view.",
      image: "/flat1.webp",
    },
    {
      title: "Modern Flat B",
      description: "A modern flat with a city skyline view.",
      image: "/flat2.webp",
    },
    {
      title: "Cozy Flat C",
      description: "A cozy flat with a garden view.",
      image: "/flat3.webp",
    },
  ];

  let isPaused = false;
  let intervalId: number;
  let selectedFlat = flats[0];

  function nextSlide() {
    flatNumber.update(n => (n + 1) % flats.length);
  }

  function prevSlide() {
    flatNumber.update(n => (n - 1 + flats.length) % flats.length);
  }

  function startCarousel() {
    intervalId = setInterval(() => {
      if (!isPaused && !$isModalOpen) {
        nextSlide();
      }
    }, 5000);
  }

  onMount(() => {
    startCarousel();
    return () => clearInterval(intervalId);
  });

  $: selectedFlat = flats[$flatNumber];
</script>

<section class="premium-section">
  <div class="container mx-auto px-4">
    <h2 class="section-title">Luxury Residences</h2>
    <p class="section-subtitle">Experience unparalleled comfort and elegance</p>

    <div
      class="relative max-w-5xl mx-auto h-[400px] md:h-[600px] premium-card overflow-hidden"
      on:mouseenter={() => isPaused = true}
      on:mouseleave={() => isPaused = false}
    >
      {#each flats as flat, index}
        <div
          class="absolute inset-0 transition-opacity duration-700 ease-in-out"
          class:opacity-100={index === $flatNumber}
          class:opacity-0={index !== $flatNumber}
          style="z-index: {index === $flatNumber ? 10 : 0};"
        >
          <img
            src={flat.image}
            alt={flat.title}
            class="w-full h-full object-cover cursor-pointer"
            on:click={() => isModalOpen.set(true)}
          />
          <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 class="text-3xl font-playfair text-white mb-2">{flat.title}</h3>
            <p class="text-lg text-gray-200">{flat.description}</p>
          </div>
        </div>
      {/each}

      <button
        on:click={prevSlide}
        class="absolute top-1/2 left-4 -translate-y-1/2 premium-button !p-3 !rounded-full z-20"
      >
        ←
      </button>
      <button
        on:click={nextSlide}
        class="absolute top-1/2 right-4 -translate-y-1/2 premium-button !p-3 !rounded-full z-20"
      >
        →
      </button>
    </div>

    <div class="flex justify-center mt-8 space-x-3">
      {#each flats as _, index}
        <button
          class="w-3 h-3 rounded-full transition-colors duration-200 {index === $flatNumber ? 'premium-gradient' : 'bg-gray-300 dark:bg-gray-700'}"
          on:click={() => flatNumber.set(index)}
        />
      {/each}
    </div>
  </div>
</section>

<ZoomModal
  imageSrc={selectedFlat.image}
  title={selectedFlat.title}
  description={selectedFlat.description}
/>