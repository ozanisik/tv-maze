<template>
  <div class="card__container">
    <img class="card--img" :src="image" />
    <div class="card--rating">{{ rating }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieCard",
  components: {},
  props: {
    image: {
      type: String,
      required: true,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "./movie-card.scss";
</style>
