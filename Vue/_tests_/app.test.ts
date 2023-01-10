import {shallowMount} from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from '../src/App.vue';

describe('App.vue', () => {
    let wrapper;
    window.scrollTo = vi.fn();

    beforeEach(() => {
        wrapper = shallowMount(App);
    });

    describe('Rendering', () => {
        it ('Renders Header', () => {
            expect(wrapper.find('[data-testid="header"]').exists()).toBe(true);
        })
        it ('Renders Blurb', () => {
            expect(wrapper.find('[data-testid="blurb-0"]').exists()).toBe(true);
        })
        it ('Renders Find More Button', () => {
            expect(wrapper.find('[data-testid="findMoreButton"]').exists()).toBe(true);
        })
        it ('Does not render More Podcasts initially', () => {
            expect(wrapper.find('[data-testid="morePodcasts"]').exists()).toBe(false);
        })
    });

    describe('Events', () => {
        it ('Clicking the Find More Button shows more podcasts', () => {
            wrapper.find('[data-testid="findMoreButton"]').trigger('click');

            wrapper.vm.$nextTick(() => {
                expect(wrapper.find('[data-testid="morePodcasts"]').exists()).toBe(true);
            });

        })
        it('Clicking the Find More Button scrolls to podcasts', () => {
            wrapper.find('[data-testid="findMoreButton"]').trigger('click');

            wrapper.vm.$nextTick(() => {
                expect(window.scrollTo).toBeCalled();
            });
        })

    });
});



