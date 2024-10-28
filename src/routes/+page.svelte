<script lang="ts">
  import GoogleMapsSection from './../components/GoogleMapsSection.svelte';
  import { onMount } from 'svelte';
  import { darkMode } from '$lib/stores/darkMode';
  import Header from '../components/Header.svelte';
  import MobileMenu from '../components/MobileMenu.svelte';
  import HeroSection from '../components/HeroSection.svelte';
  import CertificationsSection from '../components/CertificationsSection.svelte';
  import QuoteSection from '../components/QuoteSection.svelte';
  import VideoSection from '../components/VideoSection.svelte';
  import LocationHighlightsSection from '../components/LocationHighlightsSection.svelte';
  import Footer from '../components/Footer.svelte';
  import FlatsSection from '../components/FlatsSection.svelte';
  import AmenitiesSection from '../components/AmenitiesSection.svelte';
  import BrochureForm from '../components/BrochureForm.svelte';

  let isMenuOpen = false;

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      isMenuOpen = false;
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (localStorage.getItem('darkMode') === null) {
        darkMode.set(mediaQuery.matches);
      }

      const handler = (e: MediaQueryListEvent) => darkMode.set(e.matches);
      mediaQuery.addEventListener('change', handler);

      return () => mediaQuery.removeEventListener('change', handler);
    }
  });
</script>

<div class="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
  <!-- Header -->
  <Header on:scrollToSection={(e) => scrollToSection(e.detail)} />

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <MobileMenu on:scrollToSection={(e) => scrollToSection(e.detail)} />
  {/if}

  <!-- Brochure Form Modal -->
  <BrochureForm />

  <!-- Main Content -->
  <main class="pt-20">
    <!-- Hero Section -->
    <section id="hero">
      <HeroSection />
    </section>

    <!-- Certifications Section -->
    <section id="certifications">
      <CertificationsSection />
    </section>

    <!-- Quote Section -->
    <QuoteSection />

    <!-- Video Section -->
    <VideoSection />

    <!-- Flats Section -->
    <section id="flats">
      <FlatsSection />
    </section>

    <!-- Amenities Section -->
    <section id="amenities">
      <AmenitiesSection />
    </section>

    <!-- Location Highlights Section -->
    <section id="location">
      <LocationHighlightsSection />
      <GoogleMapsSection/>
    </section>
  </main>

  <!-- Footer -->
  <Footer />
</div>

<style>
  .hero {
    background-image: url('/path/to/your/hero-image.jpg');
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>