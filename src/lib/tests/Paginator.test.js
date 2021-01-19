import React from 'react';
import Paginator from '../Paginator';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('testing the Paginator page calculations', () => {
    it('has the correct outputs for current page less than 3', () => {
        let currentPage = 2;
        let tableLength = 450;
        let rowsPerPage = 10;
        let displayStartRow = 11;
        let displayEndRow = 20;
        let displayFiltered = false;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow={displayStartRow}
                                           displayEndRow={displayEndRow}
                                           displayTotal={tableLength}
                                           displayFiltered={displayFiltered}
                                           displayOverallTotal={tableLength}
        />);
        const instance = wrapper.instance();
        const paginatorData = instance.performCalculations(currentPage, tableLength);
        expect(paginatorData.pos1Value).toBe(1);
        expect(paginatorData.pos5Value).toBe(5);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(1);
        expect(paginatorData.nextValue).toBe(3);
        expect(paginatorData.lastValue).toBe(45);
        expect(paginatorData.totalNumberOfPages).toBe(45);
    });
    it('has the correct outputs for current page greater than 3 but less than the table length', () => {
        let currentPage = 9;
        let tableLength = 450;
        let rowsPerPage = 10;
        let displayStartRow = 91;
        let displayEndRow = 100;
        let displayFiltered = false;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow={displayStartRow}
                                           displayEndRow={displayEndRow}
                                           displayTotal={tableLength}
                                           displayFiltered={displayFiltered}
                                           displayOverallTotal={tableLength}
        />);
        const instance = wrapper.instance();
        const paginatorData = instance.performCalculations(currentPage, tableLength);
        expect(paginatorData.pos1Value).toBe(7);
        expect(paginatorData.pos5Value).toBe(11);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(8);
        expect(paginatorData.nextValue).toBe(10);
        expect(paginatorData.lastValue).toBe(45);
        expect(paginatorData.totalNumberOfPages).toBe(45);
    });
    it('has the correct outputs for last page', () => {
        let currentPage = 45;
        let tableLength = 450;
        let rowsPerPage = 10;
        let displayStartRow = 451;
        let displayEndRow = 460;
        let displayFiltered = false;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow={displayStartRow}
                                           displayEndRow={displayEndRow}
                                           displayTotal={tableLength}
                                           displayFiltered={displayFiltered}
                                           displayOverallTotal={tableLength}
        />);
        const instance = wrapper.instance();
        const paginatorData = instance.performCalculations(currentPage, tableLength);
        expect(paginatorData.pos1Value).toBe(41);
        expect(paginatorData.pos5Value).toBe(45);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(44);
        expect(paginatorData.nextValue).toBe(46);
        expect(paginatorData.lastValue).toBe(45);
        expect(paginatorData.totalNumberOfPages).toBe(45);
    });
    it('performs the correct calcs for pages', () => {
        let currentPage = 45;
        let tableLength = 500;
        let rowsPerPage = 8;
        let displayStartRow = 361;
        let displayEndRow = 369;
        let displayFiltered = false;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow={displayStartRow}
                                           displayEndRow={displayEndRow}
                                           displayTotal={tableLength}
                                           displayFiltered={displayFiltered}
                                           displayOverallTotal={tableLength}
        />);
        const instance = wrapper.instance();
        const paginatorData = instance.performCalculations(currentPage, tableLength);
        expect(paginatorData.pos1Value).toBe(43);
        expect(paginatorData.pos5Value).toBe(47);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(44);
        expect(paginatorData.nextValue).toBe(46);
        expect(paginatorData.lastValue).toBe(63);
        expect(paginatorData.totalNumberOfPages).toBe(63);
    });
    it('displays correctly for Page 1 of 4', () => {
        let currentPage = 1;
        let tableLength = 35;
        let rowsPerPage = 10;
        let displayStartRow = 1;
        let displayEndRow = 10;
        let displayFiltered = false;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow={displayStartRow}
                                           displayEndRow={displayEndRow}
                                           displayTotal={tableLength}
                                           displayFiltered={displayFiltered}
                                           displayOverallTotal={tableLength}
        />);
        const instance = wrapper.instance();
        const paginatorData = instance.performCalculations(currentPage, tableLength);
        expect(paginatorData.pos1Value).toBe(1);
        expect(paginatorData.pos5Value).toBe(5);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(1);
        expect(paginatorData.nextValue).toBe(2);
        expect(paginatorData.lastValue).toBe(4);
        expect(paginatorData.totalNumberOfPages).toBe(4);
    });
    it('displays correctly for Page 4 of 4', () => {
        let currentPage = 4;
        let tableLength = 35;
        let rowsPerPage = 10;
        let displayStartRow = 36;
        let displayEndRow = 40;
        let displayFiltered = false;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow={displayStartRow}
                                           displayEndRow={displayEndRow}
                                           displayTotal={tableLength}
                                           displayFiltered={displayFiltered}
                                           displayOverallTotal={tableLength}
        />);
        const instance = wrapper.instance();
        const paginatorData = instance.performCalculations(currentPage, tableLength);
        expect(paginatorData.pos1Value).toBe(0);
        expect(paginatorData.pos5Value).toBe(4);
        expect(paginatorData.firstValue).toBe(1);
        expect(paginatorData.previousValue).toBe(3);
        expect(paginatorData.nextValue).toBe(5);
        expect(paginatorData.lastValue).toBe(4);
        expect(paginatorData.totalNumberOfPages).toBe(4);
    });
});
