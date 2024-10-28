<!--src/components/GoogleMapsSection.svelte-->
<script lang="ts">
  export let mapUrl = "https://maps.app.goo.gl/wHTxYhF81yhjCY4K6";
</script>

<section class="p-10 text-center bg-white dark:bg-black">
  <h2 class="text-3xl font-bold mb-8 text-black dark:text-white">Our Location</h2>
  <div class="w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
    <iframe title="location" width="100%" height="450" frameborder="0" style="border:0;" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.4638398008783!2d78.570651!3d17.389514000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzIyLjMiTiA3OMKwMzQnMTQuMyJF!5e0!3m2!1sen!2sin!4v1729356583932!5m2!1sen!2sin"></iframe>
  </div>
  <div class="mt-4">
    <a href={mapUrl} target="_blank" class="text-black dark:text-white underline hover:text-grey-700 dark:hover:text-gray-200">Open in Google Maps</a>
  </div>
</section>