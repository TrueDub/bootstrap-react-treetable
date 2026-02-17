import {describe, expect, test} from 'vitest';
import {Calculations} from '../calculations.js';

describe('testing the Paginator page calculations', () => {
    test('has the correct outputs for current page less than 3', () => {
        let currentPage = 2;
        let tableLength = 450;
        let rowsPerPage = 10;
        const paginatorData = Calculations().performCalculations(currentPage, tableLength, rowsPerPage);
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
        const paginatorData = Calculations().performCalculations(currentPage, tableLength, rowsPerPage);
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
        const paginatorData = Calculations().performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(41);
        expect(paginatorData.pos5Value).toBe(45);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(44);
        expect(paginatorData.nextValue).toBe(46);
        expect(paginatorData.lastValue).toBe(45);
        expect(paginatorData.totalNumberOfPages).toBe(45);
    });
    test('performs the correct calculations for pages', () => {
        let currentPage = 45;
        let tableLength = 500;
        let rowsPerPage = 8;
        const paginatorData = Calculations().performCalculations(currentPage, tableLength, rowsPerPage);
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
        const paginatorData = Calculations().performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(0);
        expect(paginatorData.pos5Value).toBe(4);
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
        const paginatorData = Calculations().performCalculations(currentPage, tableLength, rowsPerPage);
        expect(paginatorData.pos1Value).toBe(1);
        expect(paginatorData.pos5Value).toBe(5);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(1);
        expect(paginatorData.nextValue).toBe(2);
        expect(paginatorData.lastValue).toBe(4);
        expect(paginatorData.totalNumberOfPages).toBe(4);
    });
});