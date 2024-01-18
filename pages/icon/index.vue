<script setup lang="ts">
definePageMeta({
  layout: 'panel',
  middleware: "auth"
})
</script>

<template>
  <main id="content" class="flex-1 p-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Replace with your content -->
      <div class="px-2 py-3 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg">
          <h1 class="text-3xl font-bold text-center">This Icon from iconify</h1>
          <hr class="m-3" />
          <iframe src="https://icon-sets.iconify.design" title="description" class="w-full h-[80vh]"/>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<style scoped>

</style>