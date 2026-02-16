import {isAfter, isBefore, parse} from "date-fns";

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