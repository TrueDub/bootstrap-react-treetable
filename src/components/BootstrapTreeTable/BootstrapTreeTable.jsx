import React, {useCallback, useMemo, useReducer,} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faSearch, faSort, faSortDown, faSortUp,} from "@fortawesome/free-solid-svg-icons";

import {Initialisation} from "./initialisation";
import Paginator from "../Paginator/Paginator";

import "./BootstrapTreeTable.css";

/*
========================================
Reducer
========================================
*/

const ACTIONS = {
    INIT: "INIT",
    TOGGLE_ROW: "TOGGLE_ROW",
    TOGGLE_ALL: "TOGGLE_ALL",
    SORT: "SORT",
    FILTER: "FILTER",
    SET_PAGE: "SET_PAGE",
    RESET_SORT: "RESET_SORT",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INIT:
            return action.payload;

        case ACTIONS.TOGGLE_ROW:
            return {
                ...state,
                tree: toggleRowExpanded(state.tree, action.rowID),
            };

        case ACTIONS.TOGGLE_ALL:
            return {
                ...state,
                expandedAll: !state.expandedAll,
                tree: toggleAllExpanded(state.tree, !state.expandedAll),
            };

        case ACTIONS.SORT: {
            const columnIndex = action.columnIndex;
            const column = state.columns[columnIndex];

            const newOrder =
                column.sortOrder === "asc" ? "desc" : "asc";

            const sorted = Initialisation().sortBy(
                state.tree,
                columnIndex,
                column.dataField,
                newOrder,
                column.sortUsingRenderer,
                column.renderer,
                column.sortType,
                column.sortDateFormat
            );

            const ordered =
                Initialisation().generateRowOrderedTree(sorted);

            const newColumns = state.columns.map((col, i) => ({
                ...col,
                sortOrder: i === columnIndex ? newOrder : "none",
            }));

            return {
                ...state,
                tree: ordered,
                columns: newColumns,
                showResetSortingButton: true,
            };
        }

        case ACTIONS.FILTER:
            return {
                ...state,
                filterValue: action.value,
                currentPage: 1,
            };

        case ACTIONS.SET_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };

        case ACTIONS.RESET_SORT:
            return action.payload;

        default:
            return state;
    }
}

/*
========================================
Tree utilities (IMMUTABLE)
========================================
*/

function toggleRowExpanded(nodes, rowID) {
    return nodes.map((node) => {
        if (node.rowID === rowID) {
            return {
                ...node,
                expanded: !node.expanded,
            };
        }
        return {
            ...node,
            children: toggleRowExpanded(
                node.children || [],
                rowID
            ),
        };
    });
}

function toggleAllExpanded(nodes, expanded) {
    return nodes.map((node) => ({
        ...node,
        expanded,
        children: toggleAllExpanded(
            node.children || [],
            expanded
        ),
    }));
}

/*
========================================
Flatten visible tree
========================================
*/

function flattenVisibleTree(
    nodes,
    filterValue,
    columns,
    parentVisible = true
) {
    const result = [];
    for (const node of nodes) {
        if (!parentVisible) continue;
        const matchesFilter = matches(node, filterValue, columns);
        if (!filterValue || matchesFilter) {
            result.push(node);
        }
        if (node.expanded) {
            result.push(
                ...flattenVisibleTree(
                    node.children || [],
                    filterValue,
                    columns,
                    parentVisible
                )
            );
        }
    }
    return result;
}

function matches(node, filterValue, columns) {
    if (!filterValue) return true;
    const lower = filterValue.toLowerCase();
    return columns.some(col => {
        if (!col.filterable) return false;
        const value = node.data?.[col.dataField];
        return String(value)
            .toLowerCase()
            .includes(lower);
    });
}

/*
========================================
Component
========================================
*/

export function BootstrapTreeTable({tableData, columns, control = {},}) {

    const {
        visibleRows = 10,
        allowSorting = false,
        allowFiltering = false,
        showPagination = false,
        initialRowsPerPage = 10,
        showExpandCollapseButton = false,
        filterInputPlaceholderText = "Filter...",
    } = control;

    /*
    ========================================
    Initial state
    ========================================
    */

    const initialState = useMemo(() => {
        const init = Initialisation().generateInitialState(visibleRows, tableData, columns);
        return {
            tree: init.enhancedTableData,
            columns: init.enhancedColumns,
            expandedAll: false,
            filterValue: "",
            currentPage: 1,
            showResetSortingButton:
            init.showResetSortingButton,
        };
    }, [tableData, columns, visibleRows]);

    const [state, dispatch] = useReducer(reducer, initialState);

    /*
    ========================================
    Derived visible rows
    ========================================
    */

    const visibleRowsFlat = useMemo(() => {
        return flattenVisibleTree(state.tree, state.filterValue, state.columns);
    }, [state.tree, state.filterValue, state.columns]);

    /*
    ========================================
    Pagination
    ========================================
    */

    const pagedRows = useMemo(() => {
        if (!showPagination) return visibleRowsFlat;
        const start = (state.currentPage - 1) * initialRowsPerPage;
        const end = start + initialRowsPerPage;
        return visibleRowsFlat.slice(start, end);
    }, [visibleRowsFlat, state.currentPage, initialRowsPerPage, showPagination,]);

    /*
    ========================================
    Handlers
    ========================================
    */

    const toggleRow = useCallback(
        (rowID) =>
            dispatch({
                type: ACTIONS.TOGGLE_ROW,
                rowID,
            }),
        []
    );

    const toggleAll = useCallback(
        () =>
            dispatch({
                type: ACTIONS.TOGGLE_ALL,
            }),
        []
    );

    const sort = useCallback(
        (index) =>
            dispatch({
                type: ACTIONS.SORT,
                columnIndex: index,
            }),
        []
    );

    const filter = useCallback(
        (e) =>
            dispatch({
                type: ACTIONS.FILTER,
                value: e.target.value,
            }),
        []
    );

    const setPage = useCallback(
        (page) =>
            dispatch({
                type: ACTIONS.SET_PAGE,
                page,
            }),
        []
    );

    /*
    ========================================
    Render
    ========================================
    */

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between mb-2">
                {showExpandCollapseButton && (
                    <button type="button"
                            className="btn btn-outline-secondary"
                            onClick={toggleAll}
                    >
                        {state.expandedAll
                            ? "Collapse All"
                            : "Expand All"}
                    </button>
                )}
                {allowFiltering && (
                    <div className="input-group w-auto">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch}/>
            </span>
                        <input
                            className="form-control"
                            placeholder={
                                filterInputPlaceholderText
                            }
                            value={state.filterValue}
                            onChange={filter}
                        />
                    </div>
                )}
            </div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    {state.columns.map((col, i) => {
                        const icon =
                            col.sortOrder === "asc"
                                ? faSortUp
                                : col.sortOrder === "desc"
                                    ? faSortDown
                                    : faSort;
                        return (
                            <th
                                key={col.dataField}
                                onClick={
                                    allowSorting && col.sortable
                                        ? () => sort(i)
                                        : undefined
                                }
                                style={{
                                    cursor:
                                        col.sortable
                                            ? "pointer"
                                            : "default",
                                }}
                            >
                                {col.heading}

                                {allowSorting && (
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="ms-1"
                                    />
                                )}
                            </th>
                        );
                    })}
                </tr>
                </thead>
                <tbody>
                {pagedRows.map((row) => {
                    const hasChildren =
                        row.children?.length > 0;
                    return (
                        <tr key={row.rowID}>
                            {state.columns.map((col, i) => {
                                const content = col.renderer ? col.renderer(row, col.dataField) : row.data[col.dataField];
                                if (i === 0) {
                                    return (
                                        <td key={col.dataField}>
                        <span
                            style={{
                                marginLeft:
                                    row.rowLevel * 16,
                            }}
                        >
                          {hasChildren && (
                              <FontAwesomeIcon
                                  icon={row.expanded ? faSortDown : faAngleRight}
                                  onClick={() => toggleRow(row.rowID)}
                                  style={{cursor: "pointer", marginRight: 6,}}
                              />
                          )}
                            {content}
                        </span>
                                        </td>
                                    );
                                }

                                return (
                                    <td key={col.dataField}>
                                        {content}
                                    </td>
                                );

                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {showPagination && (
                <Paginator
                    currentPage={state.currentPage}
                    tableLength={
                        visibleRowsFlat.length
                    }
                    rowsPerPage={
                        initialRowsPerPage
                    }
                    rowMover={setPage}
                    displayEndRow={0} displayStartRow={0} displayTotal={0}/>
            )}
        </div>
    );
}

/*
========================================
PropTypes
========================================
*/

BootstrapTreeTable.propTypes = {
    tableData: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    control: PropTypes.object,
};
