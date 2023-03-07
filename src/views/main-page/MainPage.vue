<template>
  <div class="main__layout">
    <div v-if="!searchValue">
      <section
        v-for="genre in activeGenres"
        :key="genre"
        class="main__genre-container"
      >
        <div class="main__genre--text">{{ genre }}</div>
        <div class="main__content">
          <div v-for="movie in getGenreMovies(genre)" :key="movie.id">
            <movie-card
              :image="movie.image?.original"
              :title="movie.name"
              :rating="movie.rating.average"
              @click="redirectToDetailPage(movie.id)"
            />
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <div v-if="filteredList.length" class="main__search">
        <movie-card
          v-for="show in filteredList"
          :key="show.id"
          :image="show.image?.original"
          :title="show.name"
          :rating="show.rating.average"
          @click="redirectToDetailPage(show.id)"
        />
      </div>
      <div class="main__error" v-else>We couldn't find any show!</div>
    </div>
    <section class="main__footer"></section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import { computed } from "@vue/reactivity";

import MovieCard from "@/components/atoms/movie-card/MovieCard.vue";

import { getTvShows } from "@/api/tv-shows/TvShows.api";
import { TvShow } from "@/api/tv-shows/TvShow";

import { TvGenres } from "@/common/constants";

import router from "@/router";
import { RouteName } from "@/router/RouteName";
import useEmitter from "@/composables/useEmitter";

export default defineComponent({
  name: "Home",
  components: {
    MovieCard,
  },
  setup() {
    const tvShows = ref<TvShow[]>([]);
    const emitter = useEmitter();
    const isFiltered = ref<boolean>(false);
    const searchValue = ref<string>("");
    const activeGenres = ref<TvGenres[]>([
      TvGenres.Action,
      TvGenres.Comedy,
      TvGenres.Drama,
      TvGenres.Horror,
    ]);

    const filteredList = computed(() =>
      tvShows.value.filter((show) =>
        show.name.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    );

    const getGenreMovies = (genre: TvGenres) =>
      tvShows.value.filter((show) => show.genres.includes(genre));

    const redirectToDetailPage = (id: number) => {
      router.push({ name: RouteName.DetailPage, params: { show_id: id } });
    };

    emitter.on("search", (value: string) => {
      searchValue.value = value;
    });

    onBeforeMount(() => {
      getTvShows().then((response) => {
        tvShows.value = response;
      });
    });

    return {
      redirectToDetailPage,
      TvGenres,
      isFiltered,
      filteredList,
      searchValue,
      activeGenres,
      getGenreMovies,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./main-page.scss";
</style>
