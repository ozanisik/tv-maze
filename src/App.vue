<template>
  <div id="nav">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/molecules/navbar/NavBar.vue"

export default defineComponent({
  components: { NavBar },
});
</script>
