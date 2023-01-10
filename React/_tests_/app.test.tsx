//App.test.tsx
import { describe, expect, it, vi } from 'vitest';
import App from '../src/App';
import { render, fireEvent } from '@testing-library/react';

describe('App.tsx', () => {
    describe('rendering', () => {
        it('Header component renders', () => {
            const { getByTestId } = render(<App />);
            expect(getByTestId('header')).not.toBeNull();
        });
        it('Blurb component renders', () => {
            const { getByTestId } = render(<App />);
            expect(getByTestId('blurb-0')).not.toBeNull();
        });
        it('MorePodcasts component does not render when showAll is false', () => {
            const { queryByTestId } = render(<App />);
            expect(queryByTestId('morePodcasts')).toBeNull();
        });
        it('MorePodcasts component renders when Find More Button is clicked', () => {
            const { getByTestId } = render(<App />);
            fireEvent(
                getByTestId('findMoreButton'),
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                }),
            )
            expect(getByTestId('morePodcasts')).not.toBeNull();
        });
    });

    describe('events', () => {
        vi.spyOn(window, 'scrollTo');

        it('Clicking the Find More Button shows more podcasts', () => {
            const { getByTestId } = render(<App />);
            fireEvent(
                getByTestId('findMoreButton'),
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                }),
            );

            expect(getByTestId('morePodcasts')).not.toBeNull();
        });
        it('Clicking the Find More Button scrolls to podcasts', () => {
            const { getByTestId } = render(<App />);
            fireEvent(
                getByTestId('findMoreButton'),
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                }),
            );

            expect(window.scrollTo).toHaveBeenCalled();
        })
    });
});