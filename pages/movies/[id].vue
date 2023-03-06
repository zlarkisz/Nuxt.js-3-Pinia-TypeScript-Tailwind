<script setup lang="ts">
interface MovieData {
  Plot: string;
  Title: string;
  Error: string;
  Poster: string;
}

const route = useRoute();
const { data, error } = await useFetch<MovieData>(
  `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  // `http://httpbin.org/status/500`,
  {
    pick: ["Plot", "Title", "Error", "Poster"],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      if (response._data.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Movie not found" });
      }
    },
    onResponseError({ request, response }) {
      showError({ statusCode: 500, statusMessage: "Oh noes!" });
    },
  }
);

// if (data?.value?.Error === "Incorrect IMDb ID.") {
//   showError({ statusCode: 404, statusMessage: "Movie not found" });
// }
// if (error?.value) {
//   showError({ statusCode: 500, statusMessage: "Oh noes!" });
// }

useHead({
  title: data?.value?.Title,
  meta: [
    { name: "description", content: data?.value?.Plot },
    { property: "og:description", content: data?.value?.Plot },
    { property: "og:image", content: data?.value?.Poster },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

const title: Ref<string | undefined> = computed(() => {
  return data?.value?.Title;
});
const plot: Ref<string | undefined> = computed(() => {
  return data?.value?.Plot;
});
const poster: Ref<string | undefined> = computed(() => {
  return data?.value?.Poster;
});
</script>

<template>
  <div>
    <h1 class="font-bold text-3xl text-white text-center mb-4">{{ title }}</h1>
    <p class="font-medium text-sm text-white text-center mb-4">{{ plot }}</p>
    <img :src="poster" :alt="title" class="mx-auto" />
  </div>
</template>
