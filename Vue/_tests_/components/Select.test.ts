import {shallowMount} from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Select from '../../src/components/Select.vue';

const testLabel = 'test';
const testOptions = ['test option'];

describe('Select.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Select, {
            props: {
                label: testLabel,
                options: testOptions,
            }
        });
    });

    describe('Rendering', () => {
        it ('Renders Select', () => {
            expect(wrapper.find('[data-testid="select"]').exists()).toBe(true);
        })
    });

    describe('Events', () => {
        it ('Changing the Select option emits', () => {
            wrapper.find('[data-testid="select"]').trigger('change');

            expect(wrapper.emitted()).toBeTruthy();
        })
    });
});



