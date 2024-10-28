<!--src/components/VideoSection.svelte-->
<script lang="ts">
export let videoUrl = "https://www.youtube.com/embed/your-video";
</script>

<section class="p-10 flex justify-center bg-white dark:bg-black">
  <div class="w-full max-w-4xl">
    <div class="video-container rounded-lg shadow-lg overflow-hidden">
      <iframe width="100%" height="315" src={videoUrl} frameborder="0" allowfullscreen class="rounded-lg shadow-lg"></iframe>
    </div>
  </div>
</section>

<style>
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