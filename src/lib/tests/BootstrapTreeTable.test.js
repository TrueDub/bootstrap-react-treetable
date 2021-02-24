import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BootstrapTreeTable from '../BootstrapTreeTable';
import cityData from '../../data/euroCapitals.json';

configure({adapter: new Adapter()});

const cityColumns = [
    {
        dataField: "name",
        heading: "Name",
        filterable: true
    },
    {
        dataField: "population",
        heading: "Random Number",
        sortOrder: 'desc'
    },
    {
        dataField: "bill",
        heading: "Dummy 1"
    },
    {
        dataField: "fred",
        heading: "Dummy 2"
    },
    {
        dataField: "john",
        heading: "Dummy 3"
    }
];
const cityControls = {
    visibleRows: 1,
    allowSorting: true,
    showPagination: true,
    initialRowsPerPage: 10,
    allowFiltering: true
};

const tableData = [
    {
        data: {
            name: "name0",
            dataType: "string0",
            example: "ex0",
            description: "desc0"
        },
        children: [
            {
                data: {
                    name: "name0-0",
                    dataType: "string0-0",
                    example: "ex0-0",
                    description: "desc0-0"
                },
                children: []
            }, {
                data: {
                    name: "name0-1",
                    dataType: "string0-1",
                    example: "ex0-1",
                    description: "desc0-1"
                },
                children: []
            }, {
                data: {
                    name: "name0-2",
                    dataType: "string0-2",
                    example: "ex0-2",
                    description: "desc0-2"
                },
                children: [
                    {
                        data: {
                            name: "name0-2-1",
                            dataType: "string0-2-1",
                            example: "ex0-2-1",
                            description: "desc0-2-1"
                        },
                        children: []
                    }
                ]
            }
        ]
    },
    {
        data: {
            name: "name1",
            dataType: "string1",
            example: "ex1",
            description: "desc1"
        },
        children: []
    },
    {
        data: {
            name: "name2",
            dataType: "string2",
            example: "ex2",
            description: "desc2"
        },
        children: []
    }
];
const control = {};
const columns = [
    {dataField: "name", heading: "fred1", fixedWidth: true, percentageWidth: 25},
    {dataField: "dataType", heading: "fred2", fixedWidth: true, percentageWidth: 10, filterable: true},
    {dataField: "example", heading: "fred3", fixedWidth: true, percentageWidth: 25},
    {dataField: "description", heading: "fred4", fixedWidth: true, percentageWidth: 40}
];

describe('testing the expand and collapse functionality', () => {

    it('all children of line 1 become visible when expand all is clicked', () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        const thead = table.find('thead');
        expect(thead).toHaveLength(1);
        const headers = thead.find('th');
        expect(headers).toHaveLength(columns.length);
        const tbody = table.find('tbody');
        expect(tbody).toHaveLength(1);
        const rows = tbody.find('tr');
        expect(rows.length).toBe(7);
        rows.forEach((tr, rowIndex) => {
            const cells = tr.find('td');
            expect(cells).toHaveLength(columns.length);
            if (rowIndex == 0) {
                expect(tr.hasClass('shown'));
                expect(cells.at(0).text()).toContain(tableData[rowIndex].data.name);
                expect(cells.at(1).text()).toContain(tableData[rowIndex].data.dataType);
                expect(cells.at(2).text()).toContain(tableData[rowIndex].data.example);
                expect(cells.at(3).text()).toContain(tableData[rowIndex].data.description);
            } else if (rowIndex >= 1 && rowIndex <= 3) {
                //these are the child rows - shouldn't be visible initially
                expect(tr.hasClass('hidden'));
                expect(cells.at(0).text()).toContain(tableData[0].children[rowIndex - 1].data.name);
                expect(cells.at(1).text()).toContain(tableData[0].children[rowIndex - 1].data.dataType);
                expect(cells.at(2).text()).toContain(tableData[0].children[rowIndex - 1].data.example);
                expect(cells.at(3).text()).toContain(tableData[0].children[rowIndex - 1].data.description);
            } else if (rowIndex == 4) {
                //this is the sub-child row - shouldn't be visible initially
                expect(tr.hasClass('hidden'));
                expect(cells.at(0).text()).toContain(tableData[0].children[rowIndex - 2].children[0].data.name);
                expect(cells.at(1).text()).toContain(tableData[0].children[rowIndex - 2].children[0].data.dataType);
                expect(cells.at(2).text()).toContain(tableData[0].children[rowIndex - 2].children[0].data.example);
                expect(cells.at(3).text()).toContain(tableData[0].children[rowIndex - 2].children[0].data.description);
            } else {
                //all other rows
                expect(tr.hasClass('shown'));
                expect(cells.at(0).text()).toContain(tableData[rowIndex - 4].data.name);
                expect(cells.at(1).text()).toContain(tableData[rowIndex - 4].data.dataType);
                expect(cells.at(2).text()).toContain(tableData[rowIndex - 4].data.example);
                expect(cells.at(3).text()).toContain(tableData[rowIndex - 4].data.description);
            }
        });
        //next find the expand all button and click it.
        const button = wrapper.find('button').first();
        expect(button.text()).toEqual('Expand All');
        button.simulate('click');
        wrapper.update();
        // all rows should now be visible - button text should have updated
        rows.forEach((tr, rowIndex) => {
            expect(tr.hasClass('shown'));
        });
        const button1 = wrapper.find('button').first();
        expect(button1.text()).toEqual('Collapse All');
    });

    it('children of line 1 become visible when the chevron is clicked', () => {

        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        const thead = table.find('thead');
        expect(thead).toHaveLength(1);
        const headers = thead.find('th');
        expect(headers).toHaveLength(columns.length);
        const tbody = table.find('tbody');
        expect(tbody).toHaveLength(1);
        const rows = tbody.find('tr');
        expect(rows.length).toBe(7);
        rows.forEach((tr, rowIndex) => {
            switch (rowIndex) {
                case 1:
                    expect(tr.hasClass('hidden'));
                    break;
                case 2:
                    expect(tr.hasClass('hidden'));
                    break;
                case 3:
                    expect(tr.hasClass('hidden'));
                    break;
                case 4:
                    expect(tr.hasClass('hidden'));
                    break;
                default:
                    expect(tr.hasClass('shown'));
                    break;
            }
        });
        rows.find('#expandPoint').first().simulate('click');
        wrapper.update();
        rows.forEach((tr, rowIndex) => {
            switch (rowIndex) {
                // all but row 4 should now be shown.
                case 4:
                    expect(tr.hasClass('hidden'));
                    break;
                default:
                    expect(tr.hasClass('shown'));
                    break;
            }
        });
        rows.find('#expandPoint').first().simulate('click');
        wrapper.update();
        rows.forEach((tr, rowIndex) => {
            //back to normal
            switch (rowIndex) {
                case 1:
                    expect(tr.hasClass('hidden'));
                    break;
                case 2:
                    expect(tr.hasClass('hidden'));
                    break;
                case 3:
                    expect(tr.hasClass('hidden'));
                    break;
                case 4:
                    expect(tr.hasClass('hidden'));
                    break;
                default:
                    expect(tr.hasClass('shown'));
                    break;
            }
        });
    });

    it('children of a line on Page 2 become visible when the chevron is clicked', () => {
        const wrapper = mount(<BootstrapTreeTable columns={cityColumns} tableData={cityData}
                                                  control={cityControls}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        let rows = table.find('tbody').find('tr');
        expect(rows.length).toBe(86);
        expect(rows.first().find('td').first().text()).toContain('Germany');
        //click to move to the next page
        wrapper.find('#nextLink').first().simulate('click');
        wrapper.update();
        rows = wrapper.find('table').find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Sweden');
        expect(rows.length).toBe(24);
    });

});

describe('testing the filtering functionality', () => {
    it('filtering is applied correctly', async () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        let rows = table.find('tbody').find('tr');
        expect(rows.length).toBe(7);
        const filterField = wrapper.find('#filterInput');
        filterField.simulate('change', {target: {value: 'string1'}});
        wrapper.update();
        expect(wrapper.find('#filterInput').props().value).toBe('string1');
        expect(wrapper.find('table').find('tbody').find('tr').length).toBe(1);
    });
});

describe('testing the sorting functionality', () => {

    it('table is sorted by that field when the header is clicked', () => {
        const wrapper = mount(<BootstrapTreeTable columns={cityColumns} tableData={cityData}
                                                  control={cityControls}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        let rows = table.find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Germany');
        expect(rows.first().find('td').at(1).text()).toContain('16900925');
        //click to sort asc by name
        table.find('thead').find('th').first().simulate('click');
        wrapper.update();
        rows = wrapper.find('table').find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Austria');
        expect(rows.first().find('td').at(1).text()).toContain('1921153');
        //click to sort desc by name
        table.find('thead').find('th').first().simulate('click');
        wrapper.update();
        rows = wrapper.find('table').find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Sweden');
        expect(rows.first().find('td').at(1).text()).toContain('1897520');
        //click to reset sorting
        const resetButton = wrapper.find({children: "Reset Sorting"});
        expect(resetButton).toHaveLength(1);
        resetButton.simulate('click');
        wrapper.update();
        rows = wrapper.find('table').find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Germany');
        expect(rows.first().find('td').at(1).text()).toContain('16900925');
    });

    //sort by date
    it('table is sorted correctly when using dates', () => {
        const localData = [
            {data: {name: 'John', dob: '17/02/1971'}},
            {data: {name: 'Paul', dob: '07/03/1971'}},
            {data: {name: 'George', dob: '09/05/1974'}},
            {data: {name: 'Ringo', dob: '23/02/1969'}}
        ]
        const localColumns = [
            {
                dataField: 'name',
                heading: 'Name'
            },
            {
                dataField: 'dob',
                heading: 'DOB', sortable: true,
                sortType: 'date',
                sortDateFormat: 'dd/MM/yyyy'
            }
        ]
        const wrapper = mount(<BootstrapTreeTable columns={localColumns} tableData={localData}
                                                  control={cityControls}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        let rows = table.find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('John');
        expect(rows.first().find('td').at(1).text()).toContain('17/02/1971');
        //click to sort asc by dob
        table.find('thead').find('th').at(1).simulate('click');
        wrapper.update();
        rows = wrapper.find('table').find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Ringo');
        expect(rows.first().find('td').at(1).text()).toContain('23/02/1969');
    });
});

describe('testing the renderer functionality', () => {

    it('table is sorted by that field when the header is clicked', () => {
        let numberRenderer = function (dataRow, dataField) {
            return Number.parseFloat(dataRow.data[dataField]).toExponential(2);
        };
        let localColumns = JSON.parse(JSON.stringify(cityColumns));
        localColumns[1]["renderer"] = numberRenderer;
        localColumns[1]["sortUsingRenderer"] = true;
        const wrapper = mount(<BootstrapTreeTable columns={localColumns} tableData={cityData}
                                                  control={cityControls}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        let rows = table.find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Spain');
        expect(rows.first().find('td').at(1).text()).toContain('9.93e+6');
        //click to sort asc by random number
        table.find('thead').find('th').at(1).simulate('click');
        wrapper.update();
        rows = wrapper.find('table').find('tbody').find('tr');
        expect(rows.first().find('td').first().text()).toContain('Denmark');
        expect(rows.first().find('td').at(1).text()).toContain('1.14e+6');
    });

});
