import {describe, expect} from 'vitest';
import {performCalculations} from "../calculations.js";

describe('performCalculations (array-based paginator)', () => {

    it('calculates total pages correctly', () => {
        const result = performCalculations(1, 100, 10);
        expect(result.totalPages).toBe(10);
    });

    it('clamps currentPage below 1 to page 1', () => {
        const result = performCalculations(-5, 100, 10);
        const activePage = result.pages.find(p => p.classes.includes('active'));
        expect(activePage.value).toBe(1);
    });

    it('clamps currentPage above totalPages to last page', () => {
        const result = performCalculations(999, 100, 10);
        const activePage = result.pages.find(p => p.classes.includes('active'));
        expect(activePage.value).toBe(10);
    });

    it('disables first and previous on first page', () => {
        const result = performCalculations(1, 100, 10);
        expect(result.first.classes).toContain('disabled');
        expect(result.previous.classes).toContain('disabled');
    });

    it('disables next and last on last page', () => {
        const result = performCalculations(10, 100, 10);
        expect(result.next.classes).toContain('disabled');
        expect(result.last.classes).toContain('disabled');
    });

    it('centers page window around the current page', () => {
        const result = performCalculations(5, 100, 10);
        expect(result.pages.map(p => p.value)).toEqual([3, 4, 5, 6, 7]);
    });

    it('shifts window to the start when near the beginning', () => {
        const result = performCalculations(1, 100, 10);
        expect(result.pages.map(p => p.value)).toEqual([1, 2, 3, 4, 5]);
    });

    it('shifts window to the end when near the last page', () => {
        const result = performCalculations(9, 100, 10);
        expect(result.pages.map(p => p.value)).toEqual([6, 7, 8, 9, 10]);
    });

    it('marks exactly one page as active', () => {
        const result = performCalculations(4, 100, 10);
        const activePages = result.pages.filter(p =>
            p.classes.includes('active')
        );
        expect(activePages).toHaveLength(1);
        expect(activePages[0].value).toBe(4);
    });

    it('hides pages that exceed total pages when dataset is small', () => {
        const result = performCalculations(1, 30, 10); // totalPages = 3
        const hiddenPages = result.pages.filter(p =>
            p.classes.includes('hidden')
        );
        expect(hiddenPages.length).toBeGreaterThan(0);
    });

    it('never returns a next value greater than totalPages', () => {
        const result = performCalculations(10, 100, 10);
        expect(result.next.value).toBe(10);
    });

    it('never returns a previous value less than 1', () => {
        const result = performCalculations(1, 100, 10);
        expect(result.previous.value).toBe(1);
    });

});

