import { mount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

const navLinks = ["See All Apps", "Github"];

describe("Nav", () => {
  test("required texts exists", () => {
    const wrapper = mount(Nav, {
      stubs: {
        NuxtLink: true
      }
    });

    const logo = wrapper.find("h1");
    const links = wrapper.findAll("li");

    expect(logo.text()).toBe("lame");
    navLinks.map((link, index) => {
      expect(links.at(index).text()).toBe(link);
    });
  });
});
