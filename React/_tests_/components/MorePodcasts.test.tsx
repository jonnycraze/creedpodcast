import { describe, expect, it, vi } from 'vitest';
import MorePodcasts, {Categories} from '../../src/components/MorePodcasts';
import { render, fireEvent } from '@testing-library/react';

describe('Select.tsx', () => {
    describe('rendering', () => {
        it('Select Category filter renders', () => {
            const { getByTestId } = render(<MorePodcasts />);
            expect(getByTestId('select')).not.toBeNull();
        })
        it('Shows total podcasts', () => {
            const { getByTestId } = render(<MorePodcasts />);
            expect(getByTestId('totalPodcasts').innerHTML).toEqual('Total Podcasts: 36');
        })
    });

    describe('events', () => {
        it ('Selecting Category shows category data', () => {
            const newValue = Categories[1];
            const { getByTestId } = render(<MorePodcasts />);
            fireEvent.change(getByTestId('select'), { currentTarget: { value: newValue } });
            
            expect(getByTestId(`blurb-1-${newValue}`)).not.toBeNull();
        });
        it ('Selecting Category hides non-category data', () => {
            const newValue = Categories[1];
            const { queryByTestId, getByTestId } = render(<MorePodcasts />);
            fireEvent.change(getByTestId('select'), { currentTarget: { value: newValue } });

            expect(queryByTestId(`blurb-1-${Categories[2]}`)).toBeNull();
        });
    });
})