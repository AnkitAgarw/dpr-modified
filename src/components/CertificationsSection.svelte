<script lang="ts">
  export let certifications = [
    { logo: "/ghmc.png", alt: "GHMC", details: "GHMC Approval No: 123456" },
    { logo: "/rera-approved.png", alt: "RERA", details: "RERA Registration No: RE12345XYZ" },
    { logo: "/hmwssb.jpg", alt: "HMWSSB", details: "HMWSSB Approval No: HMW1234" }
  ];
</script>

<section class="premium-section">
  <div class="container mx-auto px-4">
    <h2 class="section-title">Our Certifications</h2>
    <p class="section-subtitle">Building trust through compliance and quality</p>
    
    <div class="flex flex-wrap justify-center items-stretch gap-10">
      {#each certifications as cert}
        <div class="group premium-card p-8 w-72 flex flex-col items-center animate-fade-in">
          <div class="h-32 flex items-center justify-center mb-6">
            <img
              src={cert.logo}
              alt={cert.alt}
              class="w-auto h-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
            />
          </div>
          <p class="text-center text-gray-700 dark:text-gray-300 font-medium">
            {cert.details}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>