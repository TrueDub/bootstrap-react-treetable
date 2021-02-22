import React from 'react';
import {act} from 'react-dom/test-utils';
import BootstrapTreeTable from '../BootstrapTreeTable';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

let tableData = [
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
let dataTableData = [
    {
        data: {
            name: "name0",
            dataType: "string0",
            example: "ex0",
            description: "desc0"
        }
    },
    {
        data: {
            name: "name1",
            dataType: "string1",
            example: "ex1",
            description: "desc1"
        }
    },
    {
        data: {
            name: "name2",
            dataType: "string2",
            example: "ex2",
            description: "desc2"
        }
    }
];
let control = {};
let columns = [
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
        button.props().onClick();
        wrapper.update();
        // all rows should now be visible - button text should have updated
        rows.forEach((tr, rowIndex) => {
            expect(tr.hasClass('shown'));
        });
        const button1 = wrapper.find('button').first();
        expect(button1.text()).toEqual('Collapse All');
    });

    it('children of line 1 - become visible when the chevron is clicked', () => {

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
        rows.find('#expandPoint').first().props().onClick();
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
        rows.find('#expandPoint').first().props().onClick();
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

});

//Filtering tests - to be worked on again

/*describe('testing the filtering functionality', () => {
    it('filtering is applied correctly', async () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        const instance = wrapper.instance();
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
        await act(async () => {
            const filterField = wrapper.find('#filterInput');
            filterField.simulate('change', {target: {value: 'string1'}});
            wrapper.update();
            expect(filterField.props().value).toBe('string1');
            expect(rows.length).toBe(1);
        });
    });
});*/

