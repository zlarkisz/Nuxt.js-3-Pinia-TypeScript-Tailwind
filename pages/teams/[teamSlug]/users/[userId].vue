<script setup>
const route = useRoute();
const message = computed(
  () => `I'm on team: ${route.params.teamSlug} And my user id is:
      ${route.params.userId}`
);
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">{{ message }}</h1>
  </div>
</template>
