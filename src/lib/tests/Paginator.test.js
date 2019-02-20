import React from 'react';
import Paginator from '../Paginator';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

const paginationClasses = {
    listClasses: "list",
    listItemClasses: 'listItem',
    linkClasses: 'link',
};

describe('testing the Paginator page calculations', () => {
    it('has the correct outputs for current page less than 3', () => {
        let currentPage = 2;
        let tableLength = 450;
        let rowsPerPage = 10;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow='11'
                                           displayEndRow='20'
                                           displayTotal={tableLength}
                                           displayFiltered='false'
                                           displayOverallTotal={tableLength}
        />);
        expect(wrapper.find('.list')).toBeDefined();
        const list = wrapper.find('.list li');
        expect(list.length).toBe(9);
        const pos1Value = wrapper.state('pos1Value');
        expect(pos1Value).toBe(1);
        const pos5Value = wrapper.state('pos5Value');
        expect(pos5Value).toBe(5);
        const propsCurrentPage = wrapper.state('currentPage');
        expect(propsCurrentPage).toBe(2);
        const totalNumberOfPages = wrapper.state('totalNumberOfPages');
        expect(totalNumberOfPages).toBe(45);
    });
    it('has the correct outputs for current page greater than 3 but less than the table length', () => {
        let currentPage = 9;
        let tableLength = 450;
        let rowsPerPage = 10;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow='91'
                                           displayEndRow='100'
                                           displayTotal={tableLength}
                                           displayFiltered='false'
                                           displayOverallTotal={tableLength}
        />);
        expect(wrapper.find('.list')).toBeDefined();
        const list = wrapper.find('.list li');
        expect(list.length).toBe(9);
        const pos1Value = wrapper.state('pos1Value');
        expect(pos1Value).toBe(7);
        const pos5Value = wrapper.state('pos5Value');
        expect(pos5Value).toBe(11);
        const propsCurrentPage = wrapper.state('currentPage');
        expect(propsCurrentPage).toBe(9);
        const totalNumberOfPages = wrapper.state('totalNumberOfPages');
        expect(totalNumberOfPages).toBe(45);
    });
    it('has the correct outputs for last page', () => {
        let currentPage = 45;
        let tableLength = 450;
        let rowsPerPage = 10;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow='451'
                                           displayEndRow='460'
                                           displayTotal={tableLength}
                                           displayFiltered='false'
                                           displayOverallTotal={tableLength}
        />);
        expect(wrapper.find('.list')).toBeDefined();
        const list = wrapper.find('.list li');
        expect(list.length).toBe(9);
        const pos1Value = wrapper.state('pos1Value');
        expect(pos1Value).toBe(41);
        const pos5Value = wrapper.state('pos5Value');
        expect(pos5Value).toBe(45);
        const propsCurrentPage = wrapper.state('currentPage');
        expect(propsCurrentPage).toBe(45);
        const totalNumberOfPages = wrapper.state('totalNumberOfPages');
        expect(totalNumberOfPages).toBe(45);
    });
    it('performs the correct calcs for pages', () => {
        let currentPage = 45;
        let tableLength = 500;
        let rowsPerPage = 8;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow='361'
                                           displayEndRow='369'
                                           displayTotal={tableLength}
                                           displayFiltered='false'
                                           displayOverallTotal={tableLength}
        />);
        expect(wrapper.find('.list')).toBeDefined();
        const list = wrapper.find('.list li');
        expect(list.length).toBe(9);
        const pos1Value = wrapper.state('pos1Value');
        expect(pos1Value).toBe(43);
        const pos5Value = wrapper.state('pos5Value');
        expect(pos5Value).toBe(47);
        const propsCurrentPage = wrapper.state('currentPage');
        expect(propsCurrentPage).toBe(45);
        const totalNumberOfPages = wrapper.state('totalNumberOfPages');
        expect(totalNumberOfPages).toBe(63);
    });
    it('displays correctly for Page 1 of 4', () => {
        let currentPage = 1;
        let tableLength = 35;
        let rowsPerPage = 10;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow='1'
                                           displayEndRow='10'
                                           displayTotal={tableLength}
                                           displayFiltered='false'
                                           displayOverallTotal={tableLength}
        />);
        expect(wrapper.find('.list')).toBeDefined();
        const list = wrapper.find('.list li');
        expect(list.length).toBe(9);
        const pos1Value = wrapper.state('pos1Value');
        expect(pos1Value).toBe(1);
        //const pos1Display = wrapper.state('pos1Display');
        //expect(pos1Display).toBe(true);
        const pos5Value = wrapper.state('pos5Value');
        expect(pos5Value).toBe(5);
        //const pos5Display = wrapper.state('pos5Display');
        // expect(pos5Display).toBe(false);
        const propsCurrentPage = wrapper.state('currentPage');
        expect(propsCurrentPage).toBe(1);
        const totalNumberOfPages = wrapper.state('totalNumberOfPages');
        expect(totalNumberOfPages).toBe(4);
    });
    it('displays correctly for Page 4 of 4', () => {
        let currentPage = 4;
        let tableLength = 35;
        let rowsPerPage = 10;
        let displayStartRow = 36;
        let displayEndRow = 40;
        const wrapper = shallow(<Paginator currentPage={currentPage}
                                           tableLength={tableLength}
                                           rowsPerPage={rowsPerPage}
                                           rowMover={function () {
                                           }}
                                           displayStartRow={displayStartRow}
                                           displayEndRow={displayEndRow}
                                           displayTotal={tableLength}
                                           displayFiltered='false'
                                           displayOverallTotal={tableLength}
        />);
        expect(wrapper.find('.list')).toBeDefined();
        const list = wrapper.find('.list li');
        expect(list.length).toBe(9);
        const pos1Value = wrapper.state('pos1Value');
        expect(pos1Value).toBe(0);
        //const pos1Display = wrapper.state('pos1Display');
        //expect(pos1Display).toBe(false);
        const pos5Value = wrapper.state('pos5Value');
        expect(pos5Value).toBe(4);
        //const pos5Display = wrapper.state('pos5Display');
        //expect(pos5Display).toBe(true);
        const propsCurrentPage = wrapper.state('currentPage');
        expect(propsCurrentPage).toBe(4);
        const totalNumberOfPages = wrapper.state('totalNumberOfPages');
        expect(totalNumberOfPages).toBe(4);
    });
});