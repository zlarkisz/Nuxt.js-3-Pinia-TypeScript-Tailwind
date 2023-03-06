<script setup lang="ts">
import type { Login } from "~/types/login";

const user = useUser();
const form = reactive<Login>({
  username: "",
  password: "",
});

definePageMeta({
  layout: "plain",
});
</script>

<template>
  <form class="flex flex-col w-80" @submit.prevent="user.login">
    <h1 class="font-bold text-2xl text-white mb-5">Login</h1>

    <label class="flex flex-col mb-3">
      <span class="font-normal text-xs text-white pl-1 mb-1">User name</span>
      <input
        v-model="form.username"
        type="text"
        placeholder="Enter your name"
        class="p-3 text-white bg-slate-700 rounded-lg"
      />
    </label>

    <label class="flex flex-col mb-3">
      <span class="font-normal text-xs text-white pl-1 mb-1">Password</span>
      <input
        v-model="form.password"
        type="password"
        placeholder="Enter your password"
        class="p-3 text-white bg-slate-700 rounded-lg"
      />
    </label>

    <button
      class="text-slate-900 h-12 w-full bg-emerald-600 hover:bg-green-500 rounded-lg transition-colors duration-400"
    >
      Login
    </button>
  </form>
</template>
