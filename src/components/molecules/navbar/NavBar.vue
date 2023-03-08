<template>
  <section class="navbar">
    <router-link to="/"
      ><div class="navbar__logo" to="/">TV Maze</div></router-link
    >
    <div v-if="$route.name === RouteName.MainPage" class="navbar__action">
      <search-input></search-input>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "@/components/atoms/search-input/SearchInput.vue";
import { RouteName } from "@/router/RouteName";

export default defineComponent({
  name: "NavBar",
  components: { SearchInput },
  setup() {
    return { RouteName };
  },
});
</script>

<style lang="scss" scoped>
@import "./navbar.scss";
</style>
