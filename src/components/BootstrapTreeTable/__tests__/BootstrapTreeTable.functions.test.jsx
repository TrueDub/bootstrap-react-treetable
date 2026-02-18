import React from 'react';
import {expect, test} from 'vitest';
// import Adapter from 'enzyme-adapter-react-16';
import {BootstrapTreeTable} from '../BootstrapTreeTable';
import cityData from '../../../data/euroCapitals.json';
import {render, screen, within} from "@testing-library/react";
import "@testing-library/jest-dom";

// configure({adapter: new Adapter()});

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

    test('all children of line 1 become visible when expand all is clicked', () => {
        render(<BootstrapTreeTable columns={columns} tableData={tableData} control={control}/>);
        expect(screen.getAllByRole('table').length).toBe(1);
        expect(screen.getAllByTestId('bstt-header').length).toBe(1);
        expect(screen.getAllByRole('columnheader').length).toBe(columns.length);
        expect(screen.getAllByTestId('bstt-body').length).toBe(1);
        const tableBody = screen.getByTestId('bstt-body');
        const bodyRows = within(tableBody).getAllByRole('row');
        expect(bodyRows.length).toBe(7);
        /*bodyRows.forEach((tr, rowIndex) => {
            const cells = within(tr).getAllByRole('cell');
            expect(cells).toHaveLength(columns.length);
            if (rowIndex === 0) {
                expect(within(cells[0]).getByText(tableData[rowIndex].data.name));
                expect(within(cells[1]).getByText(tableData[rowIndex].data.dataType));
                expect(within(cells[2]).getByText(tableData[rowIndex].data.example));
                expect(within(cells[3]).getByText(tableData[rowIndex].data.description));
            } else if (rowIndex >= 1 && rowIndex <= 3) {
                //these are the child rows - shouldn't be visible initially
                expect(within(cells[0]).getByText(tableData[0].children[rowIndex - 1].data.name)).not.toBeVisible();
                expect(within(cells[1]).getByText(tableData[0].children[rowIndex - 1].data.dataType)).not.toBeVisible();
                expect(within(cells[2]).getByText(tableData[0].children[rowIndex - 1].data.example)).not.toBeVisible();
                expect(within(cells[3]).getByText(tableData[0].children[rowIndex - 1].data.description)).not.toBeVisible();
            } else if (rowIndex === 4) {
                //this is the sub-child row - shouldn't be visible initially;
                expect(within(cells[0]).queryAllByText(tableData[0].children[rowIndex - 2].children[0].data.name).length).toBe(0);
                expect(within(cells[1]).queryAllByText(tableData[0].children[rowIndex - 2].children[0].data.dataType).length).toBe(0);
                expect(within(cells[2]).queryAllByText(tableData[0].children[rowIndex - 2].children[0].data.example).length).toBe(0);
                expect(within(cells[3]).queryAllByText(tableData[0].children[rowIndex - 2].children[0].data.description).length).toBe(0);
            } else {
                //all other rows
                expect(within(cells[0]).getByText(tableData[rowIndex - 4].data.name));
                expect(within(cells[1]).getByText(tableData[rowIndex - 4].data.dataType));
                expect(within(cells[2]).getByText(tableData[rowIndex - 4].data.example));
                expect(within(cells[3]).getByText(tableData[rowIndex - 4].data.description));
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
        expect(button1.text()).toEqual('Collapse All');*/
    });

    test.skip('children of line 1 become visible when the chevron is clicked', () => {

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

    test.skip('children of a line on Page 2 become visible when the chevron is clicked', () => {
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

describe.skip('testing the filtering functionality', () => {
    test.skip('filtering is applied correctly', async () => {
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

describe.skip('testing the sorting functionality', () => {

    test.skip('table is sorted by that field when the header is clicked', () => {
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
    test.skip('table is sorted correctly when using dates', () => {
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

describe.skip('testing the renderer functionality', () => {

    test.skip('table is sorted by that field when the header is clicked', () => {
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

describe.skip('testing the multiple header row functionality', () => {
    test.skip('table displays correctly with multiple header rows', () => {
        const localData = [
            {data: {name: 'John', dob: '17/02/1971'}},
            {data: {name: 'Paul', dob: '07/03/1971'}},
            {data: {name: 'George', dob: '09/05/1974'}},
            {data: {name: 'Ringo', dob: '23/02/1969'}}
        ];
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
        ];
        const localTopRows = [
            [
                {
                    heading: 'Beatles',
                    colspan: 2,
                    alignment: 'center'
                }
            ], [
                {
                    heading: 'Names',
                    colspan: 1,
                    alignment: 'left'
                },
                {
                    heading: 'Dates',
                    colspan: 1,
                    alignment: 'right'
                }
            ]
        ]
        const wrapper = mount(<BootstrapTreeTable columns={localColumns} tableData={localData}
                                                  control={cityControls} topRows={localTopRows}/>);
        const table = wrapper.find('table');
        expect(table).toHaveLength(1);
        let headerRows = table.find('thead').find('tr');
        expect(headerRows).toHaveLength(3);
        expect(headerRows.first().find('th').first().text()).toContain('Beatles');
        expect(headerRows.first().find('th').first().prop('colSpan')).toEqual('2');
        expect(headerRows.first().find('th').first().hasClass('text-center'));
    });
});