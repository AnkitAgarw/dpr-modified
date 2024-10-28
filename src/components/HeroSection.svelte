<script lang="ts">
  export let title = "DPR Pradyumna";
  export let tagline = "Luxury that Redefines Living";
  export let heroImage = "/dark_hero_image.webp";
</script>

<section class="relative min-h-screen pt-20 flex items-center bg-premium-50 dark:bg-premium-900">
  <div class="container mx-auto px-4 py-16">
    <div class="text-center max-w-4xl mx-auto mb-16">
      <h1 class="text-5xl md:text-7xl font-playfair font-bold mb-6 text-premium-900 dark:text-premium-50">
        {title}
      </h1>
      <p class="text-xl md:text-2xl text-premium-600 dark:text-premium-400 mb-12 font-light">
        {tagline}
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <button class="premium-button">
          Learn More
        </button>
        <button class="premium-button-outline">
          Get in Touch
        </button>
      </div>
    </div>
    
    <div class="relative max-w-6xl mx-auto">
      <img
        src={heroImage}
        alt="Luxury Apartment"
        class="w-full h-auto rounded-lg premium-shadow"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-lg"></div>
    </div>
  </div>
</section>