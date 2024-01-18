<script setup lang="ts">
useHead({
  title: "Panel"
})
</script>

<template>
  <div class="relative min-h-screen md:flex" data-dev-hint="container">
    <PanelSidebar/>
    <slot/>
  </div>
</template>

<style scoped>

</style>