import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faSortDown} from "@fortawesome/free-solid-svg-icons/faSortDown";
import {faSortUp} from "@fortawesome/free-solid-svg-icons/faSortUp";
import {faSort} from "@fortawesome/free-solid-svg-icons/faSort";
import Paginator from "./Paginator";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

import './BootstrapTreeTable.css';

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
        this.moveToSpecificPage = this.moveToSpecificPage.bind(this);
        // set state
        this.state = {
            enhancedTableData: initialState.enhancedTableData,
            expanded: false,
            enhancedColumns: initialState.enhancedColumns,
            showResetSortingButton: initialState.showResetSortingButton,
            childrenPresent: initialState.childrenPresent,
            filterValue: '',
            filtered: false,
            currentPage: 1
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

    filterNonVisibleRows(data) {
        let self = this;
        let r = data.filter(function (o) {
            if (o.children) o.children = self.filterNonVisibleRows(o.children);
            return !o.filtered;
        });
        return r;
    }

    calculateNewStartAndEndRows(page, rowsPerPage, tableLength) {
        let newPage = page;
        //check the current page isn't too high for the data provided
        let max = (page - 1) * rowsPerPage;
        if (max > tableLength) {
            newPage = Math.ceil(tableLength / rowsPerPage);
        }
        //calculate the start & end rows
        let newStartRow = (newPage - 1) * rowsPerPage;
        let newEndRow = newStartRow + rowsPerPage - 1;
        return {
            startRow: newStartRow,
            endRow: newEndRow,
            currentPage: newPage
        };
    }

    getMaxRowID(tree) {
        let entry = tree[tree.length - 1];
        if (entry.children && entry.children.length > 0) {
            return this.getMaxRowID(entry.children);
        }
        return entry.rowOrder;
    }

    //pagination
    moveToSpecificPage(page) {
        this.setState({currentPage: page});
    }

    getNextRowID(tree, position) {
        let entry = tree[position];
        if (entry) {
            if (entry.children && entry.children.length > 0) {
                return this.getMaxRowID(entry.children);
            }
            return entry.rowOrder;
        }
        //if no entry at that position, return the last element
        return tree[tree.length - 1].rowOrder;
    }

    generateTableBody(tableData, startRow, endRow) {
        if (tableData.length > 0) {
            return this.generateTableBodyRows(tableData, startRow, endRow);
        } else {
            return null;
        }
    }

    generateTableBodyRows(tableData, startRow, endRow) {
        let tableBody = [];
        tableData.forEach((dataRow, index) => {
                if (index >= startRow && index <= endRow) {
                    let rowData = this.processDataRow(dataRow);
                    let key = dataRow.parentRowID + '-' + dataRow.rowID;
                    let rowClass = dataRow.visible ? 'shown' : 'hidden';
                    tableBody.push(<tr className={rowClass} key={key}>{rowData}</tr>);
                    if (dataRow.children) {
                        tableBody.push(...this.generateTableBodyRows(dataRow.children, startRow, endRow));
                    }
                }
            }
        );
        return tableBody;
    }

    generateExpandColumn(dataRow, key, dataField) {
        let output = dataRow.data[dataField];
        if (this.state.enhancedColumns[0].renderer) {
            output = this.state.enhancedColumns[0].renderer(dataRow, dataField);
        }
        if (!this.state.childrenPresent) {
            //no expander required
            if (this.state.enhancedColumns[0].fixedWidth) {
                return (
                    <td key={key} className=''
                        width={this.state.enhancedColumns[0].percentageWidth + '%'}>
                        {output}
                    </td>);
            } else {
                return (
                    <td key={key} className=''>
                        {output}
                    </td>);
            }
        }
        if (dataRow.children && dataRow.children.length > 0) {
            let iconCell = <FontAwesomeIcon icon={faAngleRight} fixedWidth
                                            onClick={this.rowExpandOrCollapse.bind(null, dataRow.rowID)}/>;
            if (dataRow.expanded) {
                iconCell = <FontAwesomeIcon icon={faSortDown} fixedWidth
                                            onClick={this.rowExpandOrCollapse.bind(null, dataRow.rowID)}/>;
            }
            if (this.state.enhancedColumns[0].fixedWidth) {
                return (<td key={key} className=''
                            width={this.state.enhancedColumns[0].percentageWidth + '%'}><span
                        style={{marginLeft: dataRow.rowLevel + 'em'}}>{iconCell}<span
                        className="iconPadding">{output}</span></span></td>
                );
            } else {
                return (<td key={key} className=''><span
                        style={{marginLeft: dataRow.rowLevel + 'em'}}>{iconCell}<span
                        className="iconPadding">{output}</span></span></td>
                );
            }
        } else {
            if (this.state.enhancedColumns[0].fixedWidth) {
                return (
                    <td key={key} className=''
                        width={this.state.enhancedColumns[0].percentageWidth + '%'}><span
                        style={{marginLeft: (dataRow.rowLevel + 1.25) + 'em'}}>
                    <span className="iconPadding">{output}</span>
                </span>
                    </td>);
            } else {
                return (
                    <td key={key} className=''><span
                        style={{marginLeft: (dataRow.rowLevel + 1.25) + 'em'}}>
                    <span className="iconPadding">{output}</span>
                </span>
                    </td>);
            }
        }
    }

    processDataRow(dataRow) {
        let rowBody = [];
        rowBody.push(this.state.enhancedColumns.map((column, index) => {
                let key = dataRow.parentRowID + '-' + dataRow.rowID + '-' + index;
                let output = dataRow.data[column.dataField];
                if (column.renderer) {
                    output = this.state.enhancedColumns[index].renderer(dataRow, column.dataField);
                }
                if (index === 0) {
                    return this.generateExpandColumn(dataRow, key, column.dataField);
                } else {
                    if (column.fixedWidth) {
                        return (<td key={key} className=''
                                    width={column.percentageWidth + '%'}>{output}</td>)
                    } else {
                        return (
                            <td key={key} className=''>{output}</td>)
                    }
                }
            }
        ));
        return rowBody;
    }

    generateHeaderRow() {
        let headingRows = [];
        if (this.state.enhancedColumns) {
            headingRows.push(this.state.enhancedColumns.map((column, index) => {
                    let fieldTitle = column.heading ? column.heading : column.dataField;
                    let sortIcon = null;
                    if (column.sortOrder === 'asc') {
                        sortIcon = <FontAwesomeIcon icon={faSortUp} fixedWidth pull="right"/>;
                    } else if (column.sortOrder === 'desc') {
                        sortIcon = <FontAwesomeIcon icon={faSortDown} fixedWidth pull="right"/>;
                    } else {
                        sortIcon = <FontAwesomeIcon icon={faSort} fixedWidth pull="right"/>;
                    }
                    if (this.props.control.allowSorting && column.sortable) {
                        return <th key={fieldTitle}
                                   onClick={this.sortByField.bind(null, index)}>{sortIcon}{fieldTitle}</th>;
                    } else {
                        return <th key={fieldTitle}>{fieldTitle}</th>;
                    }
                }
            ))
        }
        return headingRows;
    }

    generatePaginatorRow(startRow, endRow, tableLength) {
        if (this.props.control.showPagination && tableLength > this.props.control.initialRowsPerPage) {
            let displayStartRow = startRow + 1;
            let displayEndRow = endRow >= tableLength ? tableLength : endRow + 1;
            return (
                <Paginator currentPage={this.state.currentPage}
                           tableLength={tableLength}
                           rowsPerPage={this.props.control.initialRowsPerPage}
                           rowMover={this.moveToSpecificPage}
                           displayStartRow={displayStartRow}
                           displayEndRow={displayEndRow}
                           displayTotal={tableLength}
                           displayFiltered={this.state.filtered}
                           displayOverallTotal={this.props.tableData.length}/>
            );
        }
        return <div></div>;
    }

    render() {
        let newTableData = this.filterNonVisibleRows(this.state.enhancedTableData);
        let newStartAndEnd = this.calculateNewStartAndEndRows(this.state.currentPage, this.props.control.initialRowsPerPage, newTableData.length);
        let headingRows = this.generateHeaderRow();
        let tableBody = this.generateTableBody(newTableData, newStartAndEnd.startRow, newStartAndEnd.endRow);
        return (
            <div className="container-fluid">
                <div className="row col-12 justify-content-between">
                    <div>
                        <button onClick={this.expandOrCollapseAll.bind(null)}
                                className={this.props.control.showExpandCollapseButton ? 'btn btn-outline-secondary' : 'hidden'}>
                            {this.props.expanded ? 'Collapse All' : 'Expand All'}
                        </button>
                    </div>
                    <div>
                        <div className={this.props.showResetSortingButton ? 'shown' : 'hidden'}>
                            <button onClick={this.resetSorting.bind(null)}
                                    className='btn btn-outline-secondary'>
                                Reset Sorting
                            </button>
                        </div>
                        <div className={`${this.props.control.allowFiltering ? 'shown' : 'hidden'}`}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FontAwesomeIcon icon={faSearch} fixedWidth/>
                                    </div>
                                </div>
                                <input type="text" value={this.props.filterValue} id="filterInput"
                                       onChange={this.applyFilter.bind(null)}
                                       placeholder={this.props.control.filterInputPlaceholderText}
                                       className='form-control'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row col-12'>
                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            {headingRows}
                        </tr>
                        </thead>
                        <tbody>
                        {tableBody}
                        </tbody>
                    </table>
                </div>
                <div className='row col-12 justify-content-center'>
                    {this.generatePaginatorRow(newStartAndEnd.startRow, newStartAndEnd.endRow, newTableData.length)}
                </div>
            </div>
        )
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
