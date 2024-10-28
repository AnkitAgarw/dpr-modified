<!--src/components/ProjectCardComp.svelte-->
<script lang="ts">
  export let project;
</script>

<div class="overflow-hidden bg-white dark:bg-gray-800 shadow rounded-lg">
  <img
    src={project.image}
    alt={project.name}
    class="w-full h-64 object-cover"
  />
  <div class="p-4">
    <h3 class="text-xl font-semibold mb-2">{project.name}</h3>
    <p class="text-sm text-gray-600 dark:text-gray-300">
      {project.description}
    </p>
  </div>
</div>

