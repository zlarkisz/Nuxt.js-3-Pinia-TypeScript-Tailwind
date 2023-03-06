<script setup lang="ts">
useHead({
  title: "My movie site",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My movie site` : "My movie site";
  },
});
</script>

<template>
  <div class="flex flex-col min-h-screen bg-slate-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
