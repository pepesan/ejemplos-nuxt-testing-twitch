// HelloWorld.nuxt.test.ts
import { mount } from "@vue/test-utils";
import HelloWorld from "../../components/HelloWorld.vue";
import { describe, test, expect } from "vitest";
describe("HelloWorld.vue", () => {
    test("should renders is page content is correct without props", () => {
        const testMessage = "World";
        const wrapper = mount(HelloWorld);
        expect(wrapper.text()).toBe(testMessage);
    });
    test("should renders is page content is correct with props", () => {
        const message = "Happy People";
        const testMessage = "Happy People";
        const wrapper = mount(HelloWorld, {
            props: { message },
        });
        expect(wrapper.text()).toBe(testMessage);
    });
});
