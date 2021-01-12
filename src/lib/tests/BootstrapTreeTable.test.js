import React from 'react';
import BootstrapTreeTable from '../BootstrapTreeTable';
import Paginator from "../Paginator";
import {configure, mount, shallow} from 'enzyme';
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
    {dataField: "dataType", heading: "fred2", fixedWidth: true, percentageWidth: 10},
    {dataField: "example", heading: "fred3", fixedWidth: true, percentageWidth: 25},
    {dataField: "description", heading: "fred4", fixedWidth: true, percentageWidth: 40}
];

describe('testing the BootstrapTreeTable enhancedTableData setup', () => {
    it('each row has the correct row ID and setup', () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        let enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData.length).toBe(3);
        expect(enhancedTableData[0].rowID).toBe(1);
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].rowLevel).toBe(1);
        expect(enhancedTableData[0].children[0].rowID).toBe(2);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[0].rowLevel).toBe(2);
        expect(enhancedTableData[0].children[1].rowID).toBe(3);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(false);
        expect(enhancedTableData[0].children[2].rowID).toBe(4);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].rowID).toBe(5);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].rowLevel).toBe(3);
        expect(enhancedTableData[1].rowID).toBe(6);
        expect(enhancedTableData[1].expanded).toBe(false);
        expect(enhancedTableData[1].visible).toBe(true);
        expect(enhancedTableData[2].rowID).toBe(7);
        expect(enhancedTableData[2].expanded).toBe(false);
        expect(enhancedTableData[2].visible).toBe(true);
    });
    it('undefined data fields are dealt with', () => {
        let localTableData = [
            {
                data: {
                    name: "name0",
                    dataType: "string0",
                    example: "ex0",
                    description: ""
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
                    example: "ex1"
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
        const wrapper = shallow(<BootstrapTreeTable columns={columns}
                                                    tableData={localTableData}
                                                    control={control}/>);
        let enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData.length).toBe(3);
        expect(enhancedTableData[0].rowID).toBe(1);
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].rowLevel).toBe(1);
        expect(enhancedTableData[0].children[0].rowID).toBe(2);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[0].rowLevel).toBe(2);
        expect(enhancedTableData[0].children[1].rowID).toBe(3);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(false);
        expect(enhancedTableData[0].children[2].rowID).toBe(4);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].rowID).toBe(5);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].rowLevel).toBe(3);
        expect(enhancedTableData[1].rowID).toBe(6);
        expect(enhancedTableData[1].expanded).toBe(false);
        expect(enhancedTableData[1].visible).toBe(true);
        expect(enhancedTableData[2].rowID).toBe(7);
        expect(enhancedTableData[2].expanded).toBe(false);
        expect(enhancedTableData[2].visible).toBe(true);
    });
});

describe('testing the expand and collapse functionality', () => {
    it('children of line 1 become visible when expand is clicked', () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        const instance = wrapper.instance();
        let enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(false);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
        instance.rowExpandOrCollapse(1);
        enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData[0].expanded).toBe(true);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(true);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(true);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(true);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
    });
    it('children of line 5 - sub-children - become hidden when collapse is clicked', () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        const instance = wrapper.instance();
        let enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(false);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
        instance.rowExpandOrCollapse(1); //expanded
        enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData[0].expanded).toBe(true);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(true);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(true);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(true);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
        instance.rowExpandOrCollapse(5); //expanded
        instance.rowExpandOrCollapse(1); //parent collapsed
        enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(false);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
    });
    it('all lines are expanded when ExpandAll is performed', () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns} tableData={tableData}
                                                    control={control}/>);
        const instance = wrapper.instance();
        let enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[0].visible).toBe(false);
        expect(enhancedTableData[0].children[1].expanded).toBe(false);
        expect(enhancedTableData[0].children[1].visible).toBe(false);
        expect(enhancedTableData[0].children[2].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].visible).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(false);
        expect(enhancedTableData[1].expanded).toBe(false);
        expect(enhancedTableData[1].visible).toBe(true);
        expect(enhancedTableData[2].expanded).toBe(false);
        expect(enhancedTableData[2].visible).toBe(true);
        expect(wrapper.state('expanded')).toBe(false);
        instance.expandOrCollapseAll();
        enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData[0].expanded).toBe(true);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].children[0].expanded).toBe(true);
        expect(enhancedTableData[0].children[0].visible).toBe(true);
        expect(enhancedTableData[0].children[1].expanded).toBe(true);
        expect(enhancedTableData[0].children[1].visible).toBe(true);
        expect(enhancedTableData[0].children[2].expanded).toBe(true);
        expect(enhancedTableData[0].children[2].visible).toBe(true);
        expect(enhancedTableData[0].children[2].children[0].expanded).toBe(true);
        expect(enhancedTableData[0].children[2].children[0].visible).toBe(true);
        expect(enhancedTableData[1].expanded).toBe(true);
        expect(enhancedTableData[1].visible).toBe(true);
        expect(enhancedTableData[2].expanded).toBe(true);
        expect(enhancedTableData[2].visible).toBe(true);
        expect(wrapper.state('expanded')).toBe(true);
    });
});

describe('testing the DataTable enhancedTableData setup', () => {
    it('should start by adding row IDs correctly', () => {
        const wrapper = shallow(<BootstrapTreeTable columns={columns}
                                                    tableData={dataTableData}
                                                    control={control}/>);
        let enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData.length).toBe(3);
        expect(enhancedTableData[0].rowID).toBe(1);
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].rowLevel).toBe(1);
        expect(enhancedTableData[1].rowID).toBe(2);
        expect(enhancedTableData[1].expanded).toBe(false);
        expect(enhancedTableData[1].visible).toBe(true);
        expect(enhancedTableData[2].rowID).toBe(3);
        expect(enhancedTableData[2].expanded).toBe(false);
        expect(enhancedTableData[2].visible).toBe(true);
    });
});

//Pagination tests

let fixedColumns = [
    {
        dataField: "name",
        heading: "Name",
        fixedWidth: true,
        percentageWidth: 20
    },
    {
        dataField: "dataType",
        heading: "Data Type",
        fixedWidth: true,
        percentageWidth: 20
    },
    {
        dataField: "example",
        heading: "Example",
        fixedWidth: true,
        percentageWidth: 20
    },
    {
        dataField: "description",
        heading: "Description",
        fixedWidth: true,
        percentageWidth: 25
    },
    {
        dataField: "order",
        heading: "Order",
        fixedWidth: true,
        percentageWidth: 15,
        sortOrder: 'desc'
    }
];
let extraTableData = [
    {
        data: {
            name: "name0g",
            dataType: "string",
            example: "ex0gb",
            description: "desc0g7",
            order: 17.7
        },
        children: [
            {
                data: {
                    name: "name0-z",
                    dataType: "string",
                    example: "ex0-0",
                    description: "desc0-0",
                    order: 373
                },
                children: []
            }, {
                data: {
                    name: "name0-q",
                    dataType: "string",
                    example: "ex0-1",
                    description: "desc0-1",
                    order: 2
                },
                children: []
            }, {
                data: {
                    name: "name0-b",
                    dataType: "string",
                    example: "ex0-2",
                    description: "desc0-2",
                    order: 111
                },
                children: [
                    {
                        data: {
                            name: "name0-2-1",
                            dataType: "string",
                            example: "ex0-2-1",
                            description: "desc0-2-1",
                            order: 23
                        },
                        children: []
                    }
                ]
            }
        ]
    },
    {
        data: {
            name: "name0x",
            dataType: "string",
            example: "ex1",
            description: "desc1 &euro; &euro;",
            order: 6.8
        },
        children: []
    },
    {
        data: {
            name: "name0a",
            dataType: "string",
            example: "ex2",
            description: "desc2 &euro; &euro; &euro; &euro;",
            order: 9.7
        },
        children: []
    },
    {
        data: {
            name: "name0m",
            dataType: "Number",
            example: "1",
            description: "number blah",
            order: 3.04
        },
        children: []
    },
    {
        data: {
            name: "name0m",
            dataType: "Number",
            example: "1",
            description: "number blah",
            order: 3.04
        },
        children: []
    },
    {
        data: {
            name: "name0m",
            dataType: "Number",
            example: "1",
            description: "number blah",
            order: 3.04
        },
        children: []
    },
    {
        data: {
            name: "name0m",
            dataType: "Number",
            example: "1",
            description: "number blah",
            order: 3.04
        },
        children: []
    }
];
let controlWithButton = {
    visibleRows: 1,
    allowSorting: true,
    showExpandCollapseButton: true,
    showPagination: true,
    initialRowsPerPage: 4
};


describe('testing the pagination', () => {
    it('should set the first and last rows correctly', () => {
        const wrapper = mount(<BootstrapTreeTable columns={fixedColumns} tableData={extraTableData}
                                                  control={controlWithButton}/>);
        let enhancedTableData = wrapper.state('enhancedTableData');
        expect(enhancedTableData.length).toBe(7);
        expect(enhancedTableData[0].rowID).toBe(1);
        let paginator = wrapper.find(Paginator).instance();
        expect(paginator.state.displayStartRow).toBe(1);
        expect(paginator.state.displayEndRow).toBe(4);
        expect(paginator.state.displayTotal).toBe(7);
        //click the Next button on the paginator
        let nodes = wrapper.find(Paginator).find('.page-link');
        let nextButton = nodes.at(nodes.length - 2);
        expect(nextButton.length).toBe(1); //assert it exists
        nextButton.simulate('click');
        wrapper.update();
        //need to re-read from the root to ensure we pick up updated component
        let paginator2 = wrapper.find(Paginator).instance();
        expect(paginator2.state.displayStartRow).toBe(5);
        expect(paginator2.state.displayEndRow).toBe(7);
        expect(paginator2.state.displayTotal).toBe(7);
        wrapper.unmount();
    });
});
