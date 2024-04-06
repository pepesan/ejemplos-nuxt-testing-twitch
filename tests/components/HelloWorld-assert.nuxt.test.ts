// HelloWorld-assert.nuxt.test.ts
import { mount } from "@vue/test-utils";
import HelloWorld from "../../components/HelloWorld.vue";
import { describe, test, assert } from "vitest";
describe("HelloWorld.vue asserts", () => {
    test("should renders is page content is correct without props", () => {
        const testMessage = "World";
        const wrapper = mount(HelloWorld);
        assert(wrapper.vm.message === testMessage)
    });
    test("should renders is page content is correct with props", () => {
        const message = "Happy People";
        const testMessage = "Happy People";
        const wrapper = mount(HelloWorld, {
            props: { message },
        });
        assert(wrapper.vm.message === testMessage)
    });
});
