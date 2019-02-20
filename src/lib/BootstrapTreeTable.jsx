import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TreeTable from "./TreeTable";

class BootstrapTreeTable extends React.Component {

    constructor(props) {
        super(props);
        let initialState = this.generateInitialState();
        //bind functions passed to TreeTable
        this.sortByField = this.sortByField.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.expandOrCollapseAll = this.expandOrCollapseAll.bind(this);
        this.resetSorting = this.resetSorting.bind(this);
        this.rowExpandOrCollapse = this.rowExpandOrCollapse.bind(this);
        // set state
        this.state = {
            enhancedTableData: initialState.enhancedTableData,
            expanded: false,
            enhancedColumns: initialState.enhancedColumns,
            showResetSortingButton: initialState.showResetSortingButton,
            childrenPresent: initialState.childrenPresent,
            filterValue: '',
            filtered: false
        };
    }

    generateInitialState() {
        let visibleRows = this.props.control.hasOwnProperty('visibleRows') ? this.props.control.visibleRows : 1;
        let enhancedTableData = this.generateStateTableData(this.props.tableData, visibleRows);
        let enhancedColumns = this.generateColumnState(this.props.columns);
        let initialSortField = null;
        let initialSortColumn = null;
        let initialSortOrder = null;
        let showResetSortingButton = false;
        enhancedColumns.forEach((column, index) => {
            if (column.sortOrder !== 'none') {
                initialSortField = column.dataField;
                initialSortColumn = index;
                initialSortOrder = column.sortOrder;
            }
        });
        let childrenPresent = false;
        for (const entry of enhancedTableData) {
            if (entry.children && entry.children.length > 0) {
                childrenPresent = true;
            }
        }
        if (initialSortField !== null) {
            enhancedTableData = this.sortBy(enhancedTableData, initialSortColumn, initialSortField, initialSortOrder,
                enhancedColumns[initialSortColumn].sortUsingRenderer, enhancedColumns[initialSortColumn].renderer,
                enhancedColumns[initialSortColumn].sortType, enhancedColumns[initialSortColumn].sortDateFormat);
            enhancedTableData = this.generateRowOrderedTree(enhancedTableData);
        }
        return {
            enhancedTableData: enhancedTableData,
            enhancedColumns: enhancedColumns,
            showResetSortingButton: showResetSortingButton,
            childrenPresent: childrenPresent
        };
    }

    generateStateTableData(tree, visibleRows) {
        let n = 1;
        return (function recurse(children, parent = 0, rowLevel = 1) {
            if (children) {
                return children.map(node => {
                    let rowID = n++;
                    return Object.assign({}, node, {
                        rowID: rowID,
                        rowOrder: rowID,
                        rowLevel: rowLevel,
                        parentRowID: parent,
                        visible: rowLevel <= visibleRows,
                        expanded: rowLevel < visibleRows,
                        filtered: false,
                        children: recurse(node.children, rowID, rowLevel + 1)
                    })
                });
            }
        })(tree);
    }

    generateColumnState(initialColumns) {
        return initialColumns.map(node => {
            let sortOrder = node.hasOwnProperty('sortOrder') ? node.sortOrder : 'none';
            return Object.assign({}, node, {
                sortable: node.hasOwnProperty('sortable') ? node.sortable : true,
                sortType: node.hasOwnProperty('sortType') ? node.sortType : 'string',
                sortOrder: sortOrder
            })
        });
    }

    // state-changing functions below here

    //expand/collapse
    expandOrCollapseAll() {
        let action = !this.state.expanded;
        let newTree = (function recurse(children) {
            return children.map(node => {
                let visibleAction = node.rowLevel === 1 ? true : action;
                return Object.assign({}, node, {
                    visible: visibleAction,
                    expanded: action,
                    children: recurse(node.children)
                })
            });
        })(this.state.enhancedTableData);
        this.setState({
            enhancedTableData: newTree,
            expanded: action
        });
    }

    rowExpandOrCollapse(selectedRowID) {
        let newTree = this.expandOrCollapseTree(this.state.enhancedTableData, selectedRowID, false, false);
        this.setState({enhancedTableData: newTree});
    }

    expandOrCollapseTree(data, selectedRowID, expandAll, collapseAll) {
        return (function recurse(children, expandBranch = expandAll, collapseBranch = collapseAll) {
            return children.map(node => {
                let setExpanded = node.rowID === selectedRowID ? !node.expanded : node.expanded;
                let setVisible = node.parentRowID === selectedRowID ? !node.visible : node.visible;
                if (expandBranch) {
                    setExpanded = true;
                    setVisible = true;
                }
                if (collapseBranch) {
                    setExpanded = false;
                    setVisible = false;
                }
                //collapse and hide all below
                if (node.parentRowID === selectedRowID && !setVisible) {
                    collapseBranch = true;
                }
                return Object.assign({}, node, {
                    visible: setVisible,
                    expanded: setExpanded,
                    children: recurse(node.children, expandBranch, collapseBranch)
                })
            });
        })(data);
    }

    //sorting

    sortByField(sortColumn) {
        let sortStatus = this.state.enhancedColumns[sortColumn].sortOrder;
        let sortOrder = 'asc';
        if (sortStatus === 'asc') {
            sortOrder = 'desc';
        }
        let newTree = this.sortBy(this.state.enhancedTableData, sortColumn, this.state.enhancedColumns[sortColumn].dataField,
            sortOrder, this.state.enhancedColumns[sortColumn].sortUsingRenderer, this.state.enhancedColumns[sortColumn].renderer,
            this.state.enhancedColumns[sortColumn].sortType, this.state.enhancedColumns[sortColumn].sortDateFormat);
        let orderedNewTree = this.generateRowOrderedTree(newTree);
        const newColumns = this.state.enhancedColumns.map(a => ({...a, sortOrder: 'none'}));
        newColumns[sortColumn].sortOrder = sortOrder;
        this.setState({
            enhancedTableData: orderedNewTree,
            enhancedColumns: newColumns,
            showResetSortingButton: true
        });
    }

    generateRowOrderedTree(oldTree) {
        let n = 0;
        return (function recurse(children) {
            if (children) {
                return children.map(node => {
                    return Object.assign({}, node, {
                        rowOrder: n++,
                        children: recurse(node.children)
                    })
                });
            }
        })(oldTree);
    }

    sortBy(data, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat) {
        data.forEach(entry => {
            if (entry.children && entry.children.length > 0) {
                entry.children = this.sortBy(entry.children, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat);
            }
        });
        if (direction === 'asc') {
            return data.sort((a, b) => {
                return this.performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
            });
        } else {
            return data.sort((b, a) => {
                return this.performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
            });
        }
    }

    performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat) {
        let aValue = a.data[fieldName];
        let bValue = b.data[fieldName];
        if (sortUsingRenderer) {
            aValue = renderer(a, fieldName);
            bValue = renderer(b, fieldName);
        }
        if (sortType === 'date') {
            return this.compareDates(aValue, bValue, sortDateFormat);
        }
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    }

    compareDates(aValue, bValue, sortDateFormat) {
        aValue = moment(aValue, sortDateFormat);
        bValue = moment(bValue, sortDateFormat);
        return aValue.isBefore(bValue) ? -1 : aValue.isAfter(bValue) ? 1 : 0;
    }

    resetSorting() {
        let initialState = this.generateInitialState();
        this.setState({
            enhancedTableData: initialState.enhancedTableData,
            enhancedColumns: initialState.enhancedColumns,
            showResetSortingButton: initialState.showResetSortingButton
        });
    }

//filtering
    applyFilter(event) {
        let filterValue = event.target.value;
        let columns = this.props.columns;
        let overallFiltered = false;
        let filteredNewTree = (function recurse(children) {
            if (children) {
                return children.map(node => {
                    let filtered = false;
                    for (let i = 0; i < columns.length; i++) {
                        let column = columns[i];
                        let filter = column.hasOwnProperty("filterable") ? column.filterable : false;
                        if (filter) {
                            let columnValue = node.data[column.dataField];
                            if (filterValue === '') {
                                filtered = false;
                            } else {
                                if (String(columnValue).indexOf(String(filterValue)) !== -1) {
                                    filtered = false;
                                    overallFiltered = true;
                                    break;
                                } else {
                                    filtered = true;
                                }
                            }
                        }
                    }
                    return Object.assign({}, node, {
                        filtered: filtered,
                        children: recurse(node.children)
                    })
                });
            }
        })(this.state.enhancedTableData);
        this.setState({
            enhancedTableData: filteredNewTree,
            filterValue: filterValue,
            filtered: overallFiltered
        });
    }

    render() {
        return (
            <TreeTable tableData={this.state.enhancedTableData}
                       control={this.props.control}
                       filterValue={this.state.filterValue}
                       filtered={this.state.filtered}
                       applyFilter={this.applyFilter}
                       expandOrCollapseAll={this.expandOrCollapseAll}
                       expanded={this.state.expanded}
                       resetSorting={this.resetSorting}
                       showResetSortingButton={this.state.showResetSortingButton}
                       enhancedColumns={this.state.enhancedColumns}
                       sortByField={this.sortByField}
                       childrenPresent={this.state.childrenPresent}
                       rowExpandOrCollapse={this.rowExpandOrCollapse}
            />);
    }
}

BootstrapTreeTable
    .propTypes = {
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.object,
            children: PropTypes.arrayOf(PropTypes.object)
        })).isRequired,
    control: PropTypes.shape({
        visibleRows: PropTypes.number,
        showExpandCollapseButton: PropTypes.bool,
        allowSorting: PropTypes.bool,
        allowFiltering: PropTypes.bool,
        filterInputPlaceholderText: PropTypes.string,
        showPagination: PropTypes.bool,
        initialRowsPerPage: PropTypes.number
    }),
    columns: PropTypes.arrayOf(PropTypes.shape({
        dataField: PropTypes.string.isRequired,
        heading: PropTypes.string,
        fixedWidth: PropTypes.bool,
        percentageWidth: PropTypes.number,
        styleClass: PropTypes.string,
        renderer: PropTypes.func,
        sortable: PropTypes.bool,
        sortUsingRenderer: PropTypes.bool,
        sortOrder: PropTypes.string,
        sortType: PropTypes.oneOf(['string', 'date', 'number']),
        sortDateFormat: PropTypes.string,
        filterable: PropTypes.bool
    }))
};

BootstrapTreeTable
    .defaultProps = {
    tableData: [],
    control: {
        visibleRows: 1,
        showExpandCollapseButton: true,
        allowSorting: false,
        allowFiltering: false,
        filterInputPlaceholderText: 'Filter...',
        showPagination: false,
        initialRowsPerPage: 10
    },
    columns: [{
        dataField: '',
        heading: '',
        fixedWidth: false,
        percentageWidth: 0,
        renderer: null,
        sortable: true,
        sortUsingRenderer: false,
        sortType: 'string',
        sortDateFormat: null,
        filterable: false
    }]
};

export default BootstrapTreeTable;