import {shallowMount} from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import MorePodcasts from '../../src/components/MorePodcasts.vue';
import data from '../../src/assets/data/podcasts-by-genre.json'

const categories = ['All','Technology','Web Design'];

describe('MorePodcasts.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(MorePodcasts, {
            props: {
                data
            }
        });
    });

    describe('Rendering', () => {
        it ('Renders Select', () => {
            expect(wrapper.find('[data-testid="selectCategory"]').exists()).toBe(true);
        })
        it ('Renders total podcasts', () => {
            expect(wrapper.find('[data-testid="totalPodcasts"]').exists()).toBe(true);
            expect(wrapper.find('[data-testid="totalPodcasts"]').html()).toContain('Total Podcasts: 36');
        })
    });
});



