<!--src/components/QuoteSection.svelte-->
<script lang="ts">
  export let quote = "\"En architecture, blah... blah...\"";
</script>

<section class="py-10 px-4 text-center bg-white dark:bg-black">
  <blockquote class="italic text-2xl text-gray-800 dark:text-gray-400 leading-relaxed border-l-4 border-blue-500 pl-4">{quote}</blockquote>
</section>
