import { describe, expect, it, vi } from 'vitest';
import Link from '../../src/components/Link';
import { render, fireEvent } from '@testing-library/react';

describe('Select.tsx', () => {
    describe('rendering', () => {
        it('Link renders', () => {
            const { getByTestId } = render(<Link data-testid="link" />);
            expect(getByTestId('link')).not.toBeNull();
        });
        it('Link renders label', () => {
            const label = 'test label';
            const { getByTestId } = render(<Link data-testid="link" label={label} />);
            expect(getByTestId('link').innerHTML).toContain(label);
        });
        it('Link renders children', () => {
            const children = 'test children';
            const { getByTestId } = render(<Link data-testid="link">{children}</Link>);
            expect(getByTestId('link').innerHTML).toContain(children);
        });
    });
})