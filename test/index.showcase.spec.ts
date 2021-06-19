import { mount, RouterLinkStub } from "@vue/test-utils";
import Showcase from "@/components/index/Showcase.vue";

describe("Showcase", () => {
  const wrapper = mount(Showcase, {
    stubs: {
      NuxtLink: true
    }
  });

  test("h1 is project name", () => {
    expect(wrapper.find("h1").text()).toBe("lame");
  });
});
