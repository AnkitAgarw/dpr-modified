<script lang="ts">
  import { isFormOpen } from '$lib/stores/formModal';
  import { X } from 'lucide-svelte';

  let email = '';
  let phone = '';
  let isSubmitting = false;
  let error = '';

  async function handleSubmit() {
    if (!email || !phone) {
      error = 'Please fill in all fields';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error = 'Please enter a valid email';
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      error = 'Please enter a valid 10-digit phone number';
      return;
    }

    isSubmitting = true;
    error = '';

    try {
      const response = await fetch('https://api.formbricks.com/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone
        })
      });

      if (response.ok) {
        const brochureUrl = '/brochure.pdf';
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.download = 'DPR-Infra-Brochure.pdf';
        link.click();
        isFormOpen.set(false);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      error = 'Something went wrong. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

{#if $isFormOpen}
  <div class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md relative animate-fade-in premium-shadow">
      <button 
        class="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        on:click={() => isFormOpen.set(false)}
      >
        <X class="h-6 w-6" />
      </button>

      <div class="p-8">
        <h2 class="text-3xl font-playfair font-bold mb-2 text-gray-900 dark:text-white">Download Brochure</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">Enter your details to receive our exclusive brochure</p>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              bind:value={email}
              class="premium-input"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              bind:value={phone}
              class="premium-input"
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          {#if error}
            <p class="text-red-500 text-sm">{error}</p>
          {/if}

          <button
            type="submit"
            class="w-full premium-gradient premium-gradient-hover text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Downloading...' : 'Download Brochure'}
          </button>
        </form>
      </div>
    </div>
  </div>
{/if}