<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <h1>Hello user</h1>
  </div>
</template>
