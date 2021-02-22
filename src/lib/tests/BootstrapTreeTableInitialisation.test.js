import {Initialisation} from '../BootstrapTreeTable';

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
const control = {visibleRows: 1};
const columns = [
    {dataField: "name", heading: "fred1", fixedWidth: true, percentageWidth: 25},
    {dataField: "dataType", heading: "fred2", fixedWidth: true, percentageWidth: 10, filterable: true},
    {dataField: "example", heading: "fred3", fixedWidth: true, percentageWidth: 25},
    {dataField: "description", heading: "fred4", fixedWidth: true, percentageWidth: 40}
];

describe('testing the BootstrapTreeTable enhancedTableData setup', () => {
    it('each row has the correct row ID and setup', () => {
        let enhancedTableData = Initialisation().generateInitialState(control.visibleRows, tableData, columns).enhancedTableData;
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
        let enhancedTableData = Initialisation().generateInitialState(control.visibleRows, localTableData, columns).enhancedTableData;
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

    it('deal with a sort order correctly', () => {
        let localTableData = [
            {
                data: {
                    name: "name7",
                    dataType: "string0",
                    example: "ex0",
                    description: ""
                },
                children: [
                    {
                        data: {
                            name: "name0-3",
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
                            name: "name0-5",
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
                    name: "name3",
                    dataType: "string1",
                    example: "ex1"
                },
                children: []
            },
            {
                data: {
                    name: "name8",
                    dataType: "string2",
                    example: "ex2",
                    description: "desc2"
                },
                children: []
            }
        ];
        let localColumns = [
            {dataField: "name", heading: "fred1", fixedWidth: true, percentageWidth: 25, sortable: true, sortOrder: 'asc'},
            {dataField: "dataType", heading: "fred2", fixedWidth: true, percentageWidth: 10, filterable: true},
            {dataField: "example", heading: "fred3", fixedWidth: true, percentageWidth: 25},
            {dataField: "description", heading: "fred4", fixedWidth: true, percentageWidth: 40}
        ];
        let enhancedTableData = Initialisation().generateInitialState(control.visibleRows, localTableData, localColumns).enhancedTableData;
        expect(enhancedTableData.length).toBe(3);
        expect(enhancedTableData[0].rowID).toBe(6);
        expect(enhancedTableData[0].expanded).toBe(false);
        expect(enhancedTableData[0].visible).toBe(true);
        expect(enhancedTableData[0].rowLevel).toBe(1);
        expect(enhancedTableData[1].rowID).toBe(1);
        expect(enhancedTableData[1].expanded).toBe(false);
        expect(enhancedTableData[1].visible).toBe(true);
        expect(enhancedTableData[1].children[0].rowID).toBe(3);
        expect(enhancedTableData[1].children[0].expanded).toBe(false);
        expect(enhancedTableData[1].children[0].visible).toBe(false);
        expect(enhancedTableData[1].children[0].rowLevel).toBe(2);
        expect(enhancedTableData[1].children[1].rowID).toBe(2);
        expect(enhancedTableData[1].children[1].expanded).toBe(false);
        expect(enhancedTableData[1].children[1].visible).toBe(false);
        expect(enhancedTableData[1].children[2].rowID).toBe(4);
        expect(enhancedTableData[1].children[2].expanded).toBe(false);
        expect(enhancedTableData[1].children[2].visible).toBe(false);
        expect(enhancedTableData[1].children[2].children[0].rowID).toBe(5);
        expect(enhancedTableData[1].children[2].children[0].expanded).toBe(false);
        expect(enhancedTableData[1].children[2].children[0].visible).toBe(false);
        expect(enhancedTableData[1].children[2].children[0].rowLevel).toBe(3);
        expect(enhancedTableData[2].rowID).toBe(7);
        expect(enhancedTableData[2].expanded).toBe(false);
        expect(enhancedTableData[2].visible).toBe(true);
    });
});

