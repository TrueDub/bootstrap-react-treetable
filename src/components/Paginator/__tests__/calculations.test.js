import {describe, expect, test} from 'vitest';
import {performCalculations} from "../calculations.js";

describe('testing the Paginator page calculations', () => {
    test('has the correct outputs for current page less than 3', () => {
        let currentPage = 2;
        let tableLength = 450;
        let rowsPerPage = 10;
        const paginatorData = performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(1);
        expect(paginatorData.pos5Value).toBe(5);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(1);
        expect(paginatorData.nextValue).toBe(3);
        expect(paginatorData.lastValue).toBe(45);
        expect(paginatorData.totalNumberOfPages).toBe(45);
    });
    test('has the correct outputs for current page greater than 3 but less than the table length', () => {
        let currentPage = 9;
        let tableLength = 450;
        let rowsPerPage = 10;
        const paginatorData = performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(7);
        expect(paginatorData.pos5Value).toBe(11);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(8);
        expect(paginatorData.nextValue).toBe(10);
        expect(paginatorData.lastValue).toBe(45);
        expect(paginatorData.totalNumberOfPages).toBe(45);
    });
    test('has the correct outputs for last page', () => {
        let currentPage = 45;
        let tableLength = 450;
        let rowsPerPage = 10;
        const paginatorData = performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(41);
        expect(paginatorData.pos5Value).toBe(45);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(44);
        expect(paginatorData.nextValue).toBe(45);
        expect(paginatorData.lastValue).toBe(45);
        expect(paginatorData.totalNumberOfPages).toBe(45);
    });
    test('performs the correct calculations for pages', () => {
        let currentPage = 45;
        let tableLength = 500;
        let rowsPerPage = 8;
        const paginatorData = performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(43);
        expect(paginatorData.pos5Value).toBe(47);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(44);
        expect(paginatorData.nextValue).toBe(46);
        expect(paginatorData.lastValue).toBe(63);
        expect(paginatorData.totalNumberOfPages).toBe(63);
    });
    test('displays correctly for Page 3 of 4', () => {
        let currentPage = 3;
        let tableLength = 35;
        let rowsPerPage = 10;
        const paginatorData = performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(1);
        expect(paginatorData.pos5Value).toBe(5);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(2);
        expect(paginatorData.nextValue).toBe(4);
        expect(paginatorData.lastValue).toBe(4);
        expect(paginatorData.totalNumberOfPages).toBe(4);
    });
    test('displays correctly for Page 1 of 4', () => {
        let currentPage = 1;
        let tableLength = 35;
        let rowsPerPage = 10;
        const paginatorData = performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(1);
        expect(paginatorData.pos5Value).toBe(5);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(1);
        expect(paginatorData.nextValue).toBe(2);
        expect(paginatorData.lastValue).toBe(4);
        expect(paginatorData.totalNumberOfPages).toBe(4);
    });
});

describe('performCalculations', () => {

    it('calculates total number of pages correctly', () => {
        const result = performCalculations(1, 100, 10);
        expect(result.totalNumberOfPages).toBe(10);
    });

    it('clamps currentPage to 1 when below range', () => {
        const result = performCalculations(-5, 100, 10);
        expect(result.pos1Classes).toContain('active');
        expect(result.pos1Value).toBe(1);
    });

    it('clamps currentPage to last page when above range', () => {
        const result = performCalculations(999, 100, 10);
        expect(result.pos5Value).toBe(10);
        expect(result.pos5Classes).toContain('active');
    });

    it('disables previous and first on first page', () => {
        const result = performCalculations(1, 100, 10);
        expect(result.firstClasses).toContain('disabled');
        expect(result.previousClasses).toContain('disabled');
    });

    it('disables next and last on last page', () => {
        const result = performCalculations(10, 100, 10);
        expect(result.nextClasses).toContain('disabled');
        expect(result.lastClasses).toContain('disabled');
    });

    it('centers page window around current page', () => {
        const result = performCalculations(5, 100, 10);
        expect([
            result.pos1Value,
            result.pos2Value,
            result.pos3Value,
            result.pos4Value,
            result.pos5Value
        ]).toEqual([3, 4, 5, 6, 7]);
    });

    it('shifts window to start when near the beginning', () => {
        const result = performCalculations(1, 100, 10);
        expect([
            result.pos1Value,
            result.pos2Value,
            result.pos3Value,
            result.pos4Value,
            result.pos5Value
        ]).toEqual([1, 2, 3, 4, 5]);
    });

    it('shifts window to end when near the last page', () => {
        const result = performCalculations(9, 100, 10);
        expect([
            result.pos1Value,
            result.pos2Value,
            result.pos3Value,
            result.pos4Value,
            result.pos5Value
        ]).toEqual([6, 7, 8, 9, 10]);
    });

    it('marks the current page as active', () => {
        const result = performCalculations(4, 100, 10);
        expect(result.pos3Value).toBe(4);
        expect(result.pos3Classes).toContain('active');
    });

    it('hides out-of-range page positions when total pages < window size', () => {
        const result = performCalculations(1, 30, 10); // 3 pages total

        expect(result.pos4Classes).toContain('hidden');
        expect(result.pos5Classes).toContain('hidden');
    });

    it('never returns nextValue beyond total pages', () => {
        const result = performCalculations(10, 100, 10);
        expect(result.nextValue).toBe(10);
    });

    it('never returns previousValue below 1', () => {
        const result = performCalculations(1, 100, 10);
        expect(result.previousValue).toBe(1);
    });

});
