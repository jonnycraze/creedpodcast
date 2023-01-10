import { describe, expect, it, vi } from 'vitest';
import Select from '../../src/components/Select';
import { render, fireEvent } from '@testing-library/react';

const options = ['test'];
const label = 'testLabel';

describe('Select.tsx', () => {
    describe('rendering', () => {
        it('select DOM renders', () => {
            const onChangeTest = vi.fn();
            const { getByTestId } = render(<Select onChange={onChangeTest} options={options} label={label} />);
            expect(getByTestId('select')).not.toBeNull();
        })
        it('option DOM renders', () => {
            const onChangeTest = vi.fn();
            const { getByTestId } = render(<Select onChange={onChangeTest} options={options} label={label} />);
            expect(getByTestId('option-test')).not.toBeNull();
        })
    });

    describe('events', () => {
        it ('Fires event onChange', () => {
            const onChangeTest = vi.fn();
            const newValue = 'test';
            const { getByTestId } = render(<Select onChange={onChangeTest} options={options} label={label} />);
            fireEvent.change(getByTestId('select'), { target: { value: newValue } });

            expect(onChangeTest).toBeCalledTimes(1);
        });
    });
})