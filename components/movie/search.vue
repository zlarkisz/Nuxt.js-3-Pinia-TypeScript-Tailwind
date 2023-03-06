<script lang="ts" setup>
import { Movie } from "@/types/movie";

const query = ref<string>("batman");
const movies = ref<Movie[]>([]);
const search = async (): Promise<void> => {
  const { Search } = await $fetch<{ Search: Movie[] }>(
    `https://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`
  );
  movies.value = Search;
};
search();
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <form @submit.prevent="search" class="flex items-end w-max mx-auto">
      <label class="flex flex-col">
        <span class="font-normal text-xs text-white pl-1 mb-1">Movie name</span>
        <input
          v-model="query"
          type="text"
          placeholder="Enter movie name"
          class="p-3 text-white bg-slate-700 rounded-lg"
        />
      </label>

      <button
        class="text-slate-900 h-12 w-full px-3 ml-3 bg-emerald-600 hover:bg-green-500 rounded-lg transition-colors duration-400"
      >
        Search
      </button>
    </form>

    <ul class="flex flex-wrap items-center justify-center gap-3 mt-6">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
