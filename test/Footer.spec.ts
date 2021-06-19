import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer", () => {
  const wrapper = mount(Footer);
  const footer = wrapper.find("footer").find("p");

  test("has copyright string", () => {
    expect(footer.text().includes("TheBoringDude")).toBe(true);
  });

  test("has current year", () => {
    expect(footer.text().includes(new Date().getFullYear().toString())).toBe(
      true
    );
  });
});
