<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <input
        type="search"
        v-model="searchValue"
        class="search-input"
        :data-test-id="`${dataTest}-input`"
        placeholder="Search"
        @input="() => emitter.emit('search', searchValue)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import useEmitter from "@/composables/useEmitter";

export default defineComponent({
  name: "SearchInput",
  components: {},
  props: {
    dataTest: {
      required: false,
      default: "search",
    }
  },
  setup() {
    const searchValue = ref<string>();
    const emitter = useEmitter();

    return {
      searchValue,
      emitter,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./search-input.scss";
</style>
