import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faSortDown} from "@fortawesome/free-solid-svg-icons/faSortDown";
import {faSortUp} from "@fortawesome/free-solid-svg-icons/faSortUp";
import {faSort} from "@fortawesome/free-solid-svg-icons/faSort";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {isAfter, isBefore, parse} from "date-fns";

import Paginator from "./Paginator";

import './BootstrapTreeTable.css';

export const Initialisation = () => {
    const generateInitialState = (visibleRows, tableData, columns) => {
        let enhancedTableData = generateStateTableData(tableData, visibleRows);
        let enhancedColumns = generateColumnState(columns);
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
            enhancedTableData = sortBy(enhancedTableData, initialSortColumn, initialSortField, initialSortOrder,
                enhancedColumns[initialSortColumn].sortUsingRenderer, enhancedColumns[initialSortColumn].renderer,
                enhancedColumns[initialSortColumn].sortType, enhancedColumns[initialSortColumn].sortDateFormat);
            enhancedTableData = generateRowOrderedTree(enhancedTableData);
        }
        return {
            enhancedTableData: enhancedTableData,
            enhancedColumns: enhancedColumns,
            showResetSortingButton: showResetSortingButton,
            childrenPresent: childrenPresent
        };
    }

    const generateStateTableData = (tree, visibleRows) => {
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

    const generateColumnState = (initialColumns) => {
        return initialColumns.map(node => {
            let sortOrder = node.hasOwnProperty('sortOrder') ? node.sortOrder : 'none';
            return Object.assign({}, node, {
                sortable: node.hasOwnProperty('sortable') ? node.sortable : true,
                sortType: node.hasOwnProperty('sortType') ? node.sortType : 'string',
                sortOrder: sortOrder
            })
        });
    }

    const sortBy = (data, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat) => {
        data.forEach(entry => {
            if (entry.children && entry.children.length > 0) {
                entry.children = sortBy(entry.children, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat);
            }
        });
        if (direction === 'asc') {
            return data.sort((a, b) => {
                return performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
            });
        } else {
            return data.sort((b, a) => {
                return performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
            });
        }
    }

    const performSort = (a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat) => {
        let aValue = a.data[fieldName];
        let bValue = b.data[fieldName];
        if (sortUsingRenderer) {
            aValue = renderer(a, fieldName);
            bValue = renderer(b, fieldName);
        }
        if (sortType === 'date') {
            return compareDates(aValue, bValue, sortDateFormat);
        }
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    }

    const compareDates = (aValue, bValue, sortDateFormat) => {
        aValue = parse(aValue, sortDateFormat, new Date());
        bValue = parse(bValue, sortDateFormat, new Date());
        return isBefore(aValue, bValue) ? -1 : isAfter(aValue, bValue) ? 1 : 0;
    }

    const generateRowOrderedTree = (oldTree) => {
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

    return {generateInitialState, sortBy, generateRowOrderedTree};
}

const BootstrapTreeTable = (props) => {
    //expand/collapse
    const expandOrCollapseAll = () => {
        let action = !expanded;
        let newTree = (function recurse(children) {
            return children.map(node => {
                let visibleAction = node.rowLevel === 1 ? true : action;
                return Object.assign({}, node, {
                    visible: visibleAction,
                    expanded: action,
                    children: recurse(node.children)
                })
            });
        })(enhancedTableData);
        setExpanded(action);
        setEnhancedTableData(newTree);
    }

    const rowExpandOrCollapse = (selectedRowID) => {
        let newTree = expandOrCollapseTree(enhancedTableData, selectedRowID, false, false);
        setEnhancedTableData(newTree);
    }

    const expandOrCollapseTree = (data, selectedRowID, expandAll, collapseAll) => {
        return (function recurse(children, expandBranch = expandAll, collapseBranch = collapseAll) {
            return children.map(node => {
                let expandedValue = node.rowID === selectedRowID ? !node.expanded : node.expanded;
                let setVisible = node.parentRowID === selectedRowID ? !node.visible : node.visible;
                if (expandBranch) {
                    expandedValue = true;
                    setVisible = true;
                }
                if (collapseBranch) {
                    expandedValue = false;
                    setVisible = false;
                }
                //collapse and hide all below
                if (node.parentRowID === selectedRowID && !setVisible) {
                    collapseBranch = true;
                }
                return Object.assign({}, node, {
                    visible: setVisible,
                    expanded: expandedValue,
                    children: recurse(node.children, expandBranch, collapseBranch)
                })
            });
        })(data);
    }

    //sorting

    const sortByField = (sortColumn) => {
        let sortStatus = enhancedColumns[sortColumn].sortOrder;
        let sortOrder = 'asc';
        if (sortStatus === 'asc') {
            sortOrder = 'desc';
        }
        let newTree = Initialisation().sortBy(enhancedTableData, sortColumn, enhancedColumns[sortColumn].dataField,
            sortOrder, enhancedColumns[sortColumn].sortUsingRenderer, enhancedColumns[sortColumn].renderer,
            enhancedColumns[sortColumn].sortType, enhancedColumns[sortColumn].sortDateFormat);
        let orderedNewTree = Initialisation().generateRowOrderedTree(newTree);
        const newColumns = enhancedColumns.map(a => ({...a, sortOrder: 'none'}));
        newColumns[sortColumn].sortOrder = sortOrder;
        setEnhancedTableData(orderedNewTree);
        setEnhancedColumns(newColumns);
        setShowResetSortingButton(true);
    }

    const resetSorting = () => {
        let initialState = Initialisation().generateInitialState(visibleRows, props.tableData, props.columns);
        setEnhancedTableData(initialState.enhancedTableData);
        setEnhancedColumns(initialState.enhancedColumns);
        setShowResetSortingButton(initialState.showResetSortingButton);
    }

    //filtering
    const applyFilter = (event) => {
        let filterValue = event.target.value;
        let columns = props.columns;
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
        })(enhancedTableData);
        setEnhancedTableData(filteredNewTree);
        setFilterValue(filterValue);
        setFiltered(overallFiltered);
    }

    const filterNonVisibleRows = (data) => {
        return data.filter(function (o) {
            if (o.children) o.children = filterNonVisibleRows(o.children);
            return !o.filtered;
        });
    }

    const calculateNewStartAndEndRows = (page, rowsPerPage, tableLength) => {
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

    //pagination
    const moveToSpecificPage = (page) => {
        setCurrentPage(page);
    }

    const generateTableBody = (tableData, startRow, endRow) => {
        if (tableData.length > 0) {
            return generateTableBodyRows(tableData, startRow, endRow);
        } else {
            return null;
        }
    }

    const generateTableBodyRows = (tableData, startRow, endRow, topRow = true) => {
        let tableBody = [];
        tableData.forEach((dataRow, index) => {
                let rowData = processDataRow(dataRow);
                let key = dataRow.parentRowID + '-' + dataRow.rowID;
                let rowClass = dataRow.visible ? 'shown' : 'hidden';
                if (topRow) {
                    if (index >= startRow && index <= endRow) {
                        tableBody.push(<tr className={rowClass} key={key}>{rowData}</tr>);
                        if (dataRow.children) {
                            tableBody.push(...generateTableBodyRows(dataRow.children, startRow, endRow, false));
                        }
                    }
                } else {
                    tableBody.push(<tr className={rowClass} key={key}>{rowData}</tr>);
                    if (dataRow.children) {
                        tableBody.push(...generateTableBodyRows(dataRow.children, startRow, endRow, false));
                    }
                }
            }
        );
        return tableBody;
    }

    const generateExpandColumn = (dataRow, key, dataField) => {
        let output = dataRow.data[dataField];
        if (enhancedColumns[0].renderer) {
            output = enhancedColumns[0].renderer(dataRow, dataField);
        }
        if (!childrenPresent) {
            //no expander required
            if (enhancedColumns[0].fixedWidth) {
                return (
                    <td key={key} className=''
                        width={enhancedColumns[0].percentageWidth + '%'}>
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
            let iconCell = <FontAwesomeIcon icon={faAngleRight} fixedWidth id="expandPoint"
                                            onClick={rowExpandOrCollapse.bind(null, dataRow.rowID)}/>;
            if (dataRow.expanded) {
                iconCell = <FontAwesomeIcon icon={faSortDown} fixedWidth id="collapsePoint"
                                            onClick={rowExpandOrCollapse.bind(null, dataRow.rowID)}/>;
            }
            if (enhancedColumns[0].fixedWidth) {
                return (<td key={key} className=''
                            width={enhancedColumns[0].percentageWidth + '%'}><span
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
            if (enhancedColumns[0].fixedWidth) {
                return (
                    <td key={key} className=''
                        width={enhancedColumns[0].percentageWidth + '%'}><span
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

    const processDataRow = (dataRow) => {
        let rowBody = [];
        rowBody.push(enhancedColumns.map((column, index) => {
                let key = dataRow.parentRowID + '-' + dataRow.rowID + '-' + index;
                let output = dataRow.data[column.dataField];
                if (column.renderer) {
                    output = enhancedColumns[index].renderer(dataRow, column.dataField);
                }
                if (index === 0) {
                    return generateExpandColumn(dataRow, key, column.dataField);
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

    const generateHeaderRow = (allowSorting) => {
        let headingRows = [];
        if (enhancedColumns) {
            headingRows.push(enhancedColumns.map((column, index) => {
                    let fieldTitle = column.heading ? column.heading : column.dataField;
                    let sortIcon;
                    if (column.sortOrder === 'asc') {
                        sortIcon = <FontAwesomeIcon icon={faSortUp} fixedWidth pull="right"/>;
                    } else if (column.sortOrder === 'desc') {
                        sortIcon = <FontAwesomeIcon icon={faSortDown} fixedWidth pull="right"/>;
                    } else {
                        sortIcon = <FontAwesomeIcon icon={faSort} fixedWidth pull="right"/>;
                    }
                    if (allowSorting && column.sortable) {
                        return <th key={fieldTitle}
                                   onClick={sortByField.bind(null, index)}>{sortIcon}{fieldTitle}</th>;
                    } else {
                        return <th key={fieldTitle}>{fieldTitle}</th>;
                    }
                }
            ))
        }
        return headingRows;
    }

    const generatePaginatorRow = (showPagination, startRow, endRow, tableLength, initialRowsPerPage) => {
        if (showPagination && tableLength > initialRowsPerPage) {
            let displayStartRow = startRow + 1;
            let displayEndRow = endRow >= tableLength ? tableLength : endRow + 1;
            return (
                <Paginator currentPage={currentPage}
                           tableLength={tableLength}
                           rowsPerPage={initialRowsPerPage}
                           rowMover={moveToSpecificPage}
                           displayStartRow={displayStartRow}
                           displayEndRow={displayEndRow}
                           displayTotal={tableLength}
                           displayFiltered={filtered}
                           displayOverallTotal={props.tableData.length}/>
            );
        }
        return <div></div>;
    }

    //execution and initial state-setting start here
    //first check inputs & define sensible defaults
    let visibleRows = props.control.hasOwnProperty('visibleRows') ? props.control.visibleRows : 1;
    let showExpandCollapseButton = props.control.hasOwnProperty('showExpandCollapseButton') ? props.control.showExpandCollapseButton : false;
    let allowSorting = props.control.hasOwnProperty('allowSorting') ? props.control.allowSorting : false;
    let allowFiltering = props.control.hasOwnProperty('allowFiltering') ? props.control.allowFiltering : false;
    let filterInputPlaceholderText = props.control.hasOwnProperty('filterInputPlaceholderText') ? props.control.filterInputPlaceholderText : 'Filter...';
    let showPagination = props.control.hasOwnProperty('showPagination') ? props.control.showPagination : false;
    let initialRowsPerPage = props.control.hasOwnProperty('initialRowsPerPage') ? props.control.initialRowsPerPage : 10;

    let initialState = Initialisation().generateInitialState(visibleRows, props.tableData, props.columns);

    //set required state variables
    const [enhancedTableData, setEnhancedTableData] = React.useState(initialState.enhancedTableData);
    const [expanded, setExpanded] = React.useState(false);
    const [enhancedColumns, setEnhancedColumns] = React.useState(initialState.enhancedColumns);
    const [showResetSortingButton, setShowResetSortingButton] = React.useState(initialState.showResetSortingButton);
    const [childrenPresent] = React.useState(initialState.childrenPresent);
    const [filterValue, setFilterValue] = React.useState('');
    const [filtered, setFiltered] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    //construct table
    let newTableData = filterNonVisibleRows(enhancedTableData);
    //let newTableData = enhancedTableData;
    let newStartAndEnd = calculateNewStartAndEndRows(currentPage, initialRowsPerPage, newTableData.length);
    let headingRows = generateHeaderRow(allowSorting);
    let tableBody = generateTableBody(newTableData, newStartAndEnd.startRow, newStartAndEnd.endRow);
    //return the constructed table
    return (
        <div className="container-fluid">
            <div className="row col-12 justify-content-between">
                <div>
                    <button onClick={expandOrCollapseAll.bind(null)}
                            className={showExpandCollapseButton ? 'btn btn-outline-secondary' : 'hidden'}>
                        {expanded ? 'Collapse All' : 'Expand All'}
                    </button>
                </div>
                <div>
                    <div className={showResetSortingButton ? 'shown' : 'hidden'}>
                        <button onClick={resetSorting.bind(null)}
                                className='btn btn-outline-secondary'>
                            Reset Sorting
                        </button>
                    </div>
                    <div className={`${allowFiltering ? 'shown' : 'hidden'}`}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><FontAwesomeIcon icon={faSearch} fixedWidth/>
                                </div>
                            </div>
                            <input type="text" value={filterValue} id="filterInput"
                                   onChange={applyFilter.bind(null)}
                                   placeholder={filterInputPlaceholderText}
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
                {generatePaginatorRow(showPagination, newStartAndEnd.startRow, newStartAndEnd.endRow, newTableData.length, initialRowsPerPage)}
            </div>
        </div>
    )
}

BootstrapTreeTable.propTypes = {
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

export default BootstrapTreeTable;
