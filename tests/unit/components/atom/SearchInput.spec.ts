import { flushPromises, shallowMount } from "@vue/test-utils";
import SearchInput from "@/components/atoms/search-input/SearchInput.vue";

const wrapper = shallowMount(SearchInput);

describe("SearchInput", () => {
  it("should rendered", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("should after set input value", async () => {
    await wrapper.find('[data-test-id="search-input"]').setValue("test");
    await flushPromises();

    expect(wrapper.emitted("search")).toHaveBeenCalledTimes(1);
  });
});
