<template>
  <section class="navbar">
    <router-link to="/"
      ><div class="navbar__logo" to="/">TV Maze</div></router-link
    >
    <div class="navbar__action">
      <search-input></search-input>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "@/components/atoms/search-input/SearchInput.vue";

export default defineComponent({
  name: "NavBar",
  components: { SearchInput },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "./navbar.scss";
</style>
