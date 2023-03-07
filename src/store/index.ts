import { TvShow } from "@/api/tv-shows/TvShow";
import { getTvShows } from "@/api/tv-shows/TvShows.api";
import { createStore } from "vuex";

export default createStore({
  state: {
    tvShows: [] as Array<TvShow>,
  },
  mutations: {
    FETCH_TV_SHOWS(state) {
      getTvShows().then((response) => {
        state.tvShows = response;
      });
    },
  },
  actions: {},
  modules: {},
});
