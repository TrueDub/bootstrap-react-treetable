import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

import Paginator from './Paginator';
import './BootstrapTreeTable.css';

class TreeTable extends React.Component {

    constructor(props) {
        super(props);
        this.moveToSpecificPage = this.moveToSpecificPage.bind(this);
        let newTableData = this.filterNonVisibleRows(this.props.tableData);
        let endRow = 0;
        if (this.props.control.showPagination) {
            endRow = this.props.control.initialRowsPerPage > newTableData.length ?
                newTableData.length - 1 :
                this.props.control.initialRowsPerPage - 1;
        } else {
            endRow = newTableData.length - 1;
        }
        this.state = {
            startRow: 0,
            endRow: endRow,
            currentPage: 1,
            tableData: newTableData
        };
    }

    componentWillReceiveProps(nextProps) {
        let newTableData = this.filterNonVisibleRows(nextProps.tableData);
        let newStartAndEnd = this.calculateNewStartAndEndRows(this.state.currentPage,
            this.props.control.initialRowsPerPage, newTableData.length);
        this.setState({
            tableData: newTableData,
            filtered: nextProps.filtered,
            startRow: newStartAndEnd.startRow,
            endRow: newStartAndEnd.endRow,
            currentPage: newStartAndEnd.currentPage
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

    getMaxRowID(tree) {
        let entry = tree[tree.length - 1];
        if (entry.children && entry.children.length > 0) {
            return this.getMaxRowID(entry.children);
        }
        return entry.rowOrder;
    }

    //pagination
    moveToSpecificPage(page) {
        let newStartAndEnd = this.calculateNewStartAndEndRows(page,
            this.props.control.initialRowsPerPage, this.state.tableData.length);
        this.setState({
            startRow: newStartAndEnd.startRow,
            endRow: newStartAndEnd.endRow,
            currentPage: newStartAndEnd.currentPage
        });
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
        if (this.props.enhancedColumns[0].renderer) {
            output = this.props.enhancedColumns[0].renderer(dataRow, dataField);
        }
        if (!this.props.childrenPresent) {
            //no expander required
            if (this.props.enhancedColumns[0].fixedWidth) {
                return (
                    <td key={key} className=''
                        width={this.props.enhancedColumns[0].percentageWidth + '%'}>
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
                                            onClick={this.props.rowExpandOrCollapse.bind(null, dataRow.rowID)}/>;
            if (dataRow.expanded) {
                iconCell = <FontAwesomeIcon icon={faAngleDown} fixedWidth
                                            onClick={this.props.rowExpandOrCollapse.bind(null, dataRow.rowID)}/>;
            }
            if (this.props.enhancedColumns[0].fixedWidth) {
                return (<td key={key} className=''
                            width={this.props.enhancedColumns[0].percentageWidth + '%'}><span
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
            if (this.props.enhancedColumns[0].fixedWidth) {
                return (
                    <td key={key} className=''
                        width={this.props.enhancedColumns[0].percentageWidth + '%'}><span
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
        rowBody.push(this.props.enhancedColumns.map((column, index) => {
                let key = dataRow.parentRowID + '-' + dataRow.rowID + '-' + index;
                let output = dataRow.data[column.dataField];
                if (column.renderer) {
                    output = this.props.enhancedColumns[index].renderer(dataRow, column.dataField);
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
        if (this.props.enhancedColumns) {
            headingRows.push(this.props.enhancedColumns.map((column, index) => {
                    let fieldTitle = column.heading ? column.heading : column.dataField;
                    let sortIcon = null;
                    if (column.sortOrder === 'asc') {
                        sortIcon = <FontAwesomeIcon icon={faAngleUp} fixedWidth pull="right"/>;
                    } else if (column.sortOrder === 'desc') {
                        sortIcon = <FontAwesomeIcon icon={faAngleDown} fixedWidth pull="right"/>;
                    } else {
                        sortIcon = null;
                    }
                    if (this.props.control.allowSorting && column.sortable) {
                        return <th key={fieldTitle}
                                   onClick={this.props.sortByField.bind(null, index)}>{sortIcon}{fieldTitle}</th>;
                    } else {
                        return <th key={fieldTitle}>{fieldTitle}</th>;
                    }
                }
            ))
        }
        return headingRows;
    }

    generatePaginatorRow() {
        if (this.props.control.showPagination && this.state.tableData.length > this.props.control.initialRowsPerPage) {
            let displayStartRow = this.state.startRow + 1;
            let displayEndRow = this.state.endRow > this.state.tableData.length ? this.state.tableData.length : this.state.endRow + 1;
            return (
                <Paginator currentPage={this.state.currentPage}
                           tableLength={this.state.tableData.length}
                           rowsPerPage={this.props.control.initialRowsPerPage}
                           rowMover={this.moveToSpecificPage}
                           displayStartRow={displayStartRow}
                           displayEndRow={displayEndRow}
                           displayTotal={this.state.tableData.length}
                           displayFiltered={this.state.filtered}
                           displayOverallTotal={this.props.tableData.length}/>
            );
        }
        return <div></div>;
    }

    render() {
        let headingRows = this.generateHeaderRow();
        let tableBody = this.generateTableBody(this.state.tableData, this.state.startRow, this.state.endRow);
        return (
            <div>
                <div>
                    <input type="text" value={this.props.filterValue} onChange={this.props.applyFilter.bind(null)}
                           placeholder={this.props.control.filterInputPlaceholderText}
                           className={this.props.control.allowFiltering ? 'button button-default float-left col-xs-2' : 'hidden'}/>

                    <button onClick={this.props.expandOrCollapseAll.bind(null)}
                            className={this.props.control.showExpandCollapseButton ? 'button button-default' : 'hidden'}>
                        {this.props.expanded ? 'Collapse All' : 'Expand All'}
                    </button>
                    <button onClick={this.props.resetSorting.bind(null)}
                            className={this.props.showResetSortingButton ? 'button button-default float-right' : 'hidden'}>
                        Reset Sorting
                    </button>
                </div>
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
                {this.generatePaginatorRow()}
            </div>
        );
    }
}

export default TreeTable;