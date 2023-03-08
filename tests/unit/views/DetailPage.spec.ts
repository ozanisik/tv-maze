import { flushPromises, shallowMount, VueWrapper } from "@vue/test-utils";
import DetailPage from "@/views/detail-page/DetailPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { RouteName } from "@/router/RouteName";
import { enableFetchMocks } from "jest-fetch-mock";
import { mockShowDetailResponse } from "../mocks/ShowDetailResponse";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/details-page",
      name: RouteName.DetailPage,
      component: DetailPage,
    },
  ],
});
router.push({ name: RouteName.DetailPage, params: { show_id: 1 } });

const setup = (): VueWrapper<InstanceType<typeof DetailPage>> =>
  shallowMount(DetailPage, {
    global: {
      plugins: [router],
    },
  });

describe("DetailPage", () => {
  beforeAll(async () => {
    enableFetchMocks();
    fetchMock.doMock(JSON.stringify(mockShowDetailResponse));
  });

  it("should set show name", async () => {
    const cmp = setup();
    const showName = cmp.find('[data-test-id="detail-page-name"]');
    await flushPromises();

    expect(showName.text()).toBe(mockShowDetailResponse.name);
  });

  it("should set show summary", async () => {
    const cmp = setup();
    const showSummary = cmp.find('[data-test-id="detail-page-summary"]');
    await flushPromises();

    expect(mockShowDetailResponse.summary).toContain(showSummary.text());
  });

  it("should set rating", async () => {
    const cmp = setup();
    const actionRating = cmp.find('[data-test-id="detail-page-rating"]');
    await flushPromises();

    expect(actionRating.text()).toBe("7.8");
  });
});
