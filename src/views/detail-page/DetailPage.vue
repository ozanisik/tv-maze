<template>
  <div class="detail-page__container">
    <div class="detail-page__left">
      <img class="detail-page__left--image" :src="showDetail?.image.original" />
    </div>
    <div class="detail-page__right">
      <div :data-test-id="`${dataTest}-name`" class="detail-page__right--name">
        {{ showDetail?.name }}
      </div>
      <div
        :data-test-id="`${dataTest}-summary`"
        class="detail-page__right--summary"
        v-html="showDetail?.summary"
      />
      <div class="detail-page--genres">
        <div
          v-for="genre in showDetail?.genres"
          :key="genre"
          :data-test-id="`${dataTest}-genre-${genre}`"
          class="detail-page--tag"
        >
          {{ genre }}
        </div>
      </div>
      <div :data-test-id="`${dataTest}-rating`" class="detail-page--tag">
        {{ showDetail?.rating.average }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TvShow } from "@/api/tv-shows/TvShow";
import { getTvShowById } from "@/api/tv-shows/TvShows.api";
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "DetailPage",
  components: {},
  setup() {
    const dataTest = "detail-page";
    const route = useRoute();
    const showDetail = ref<TvShow>();

    onBeforeMount(() => {
      getTvShowById(route.params.show_id as string).then((show) => {
        showDetail.value = show;
      });
    });
    return {
      showDetail,
      dataTest,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./detail-page.scss";
</style>
