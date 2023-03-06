<script setup lang="ts">
const user = useUser();
// or const isLoggedIn = useIsLoggedIn(); from ~/composables/useIsLoggedIn.ts
</script>

<template>
  <nav class="flex items-center justify-center gap-3 p-4">
    <NuxtLink
      to="/"
      class="text-green-500 hover:text-green-300 transition-colors duration-300"
    >
      Home
    </NuxtLink>
    <NuxtLink
      to="/movies"
      class="text-green-500 hover:text-green-300 transition-colors duration-300"
    >
      Movies
    </NuxtLink>
    <NuxtLink
      to="https://vueschool.io"
      class="text-green-500 hover:text-green-300 transition-colors duration-300"
    >
      Vue School
    </NuxtLink>
    <NuxtLink
      v-if="!user.isLoggedIn"
      to="/login"
      class="text-green-500 hover:text-green-300 transition-colors duration-300"
    >
      Login
    </NuxtLink>
    <a
      href="#"
      v-else
      class="text-green-500 hover:text-green-300 transition-colors duration-300"
      @click.prevent="user.isLoggedIn = false"
    >
      Logout
    </a>
  </nav>

  <main class="p-10">
    <slot />
  </main>
</template>
