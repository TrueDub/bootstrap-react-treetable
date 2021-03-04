"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Initialisation = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faAngleRight = require("@fortawesome/free-solid-svg-icons/faAngleRight");

var _faSortDown = require("@fortawesome/free-solid-svg-icons/faSortDown");

var _faSortUp = require("@fortawesome/free-solid-svg-icons/faSortUp");

var _faSort = require("@fortawesome/free-solid-svg-icons/faSort");

var _faSearch = require("@fortawesome/free-solid-svg-icons/faSearch");

var _dateFns = require("date-fns");

var _utils = require("./utils");

var _Paginator = _interopRequireDefault(require("./Paginator"));

require("./BootstrapTreeTable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Initialisation = function Initialisation() {
  var generateInitialState = function generateInitialState(visibleRows, tableData, columns) {
    var enhancedTableData = generateStateTableData(tableData, visibleRows);
    var enhancedColumns = generateColumnState(columns);
    var initialSortField = null;
    var initialSortColumn = null;
    var initialSortOrder = null;
    var showResetSortingButton = false;
    enhancedColumns.forEach(function (column, index) {
      if (column.sortOrder !== 'none') {
        initialSortField = column.dataField;
        initialSortColumn = index;
        initialSortOrder = column.sortOrder;
      }
    });
    var childrenPresent = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = enhancedTableData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entry = _step.value;

        if (entry.children && entry.children.length > 0) {
          childrenPresent = true;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (initialSortField !== null) {
      enhancedTableData = sortBy(enhancedTableData, initialSortColumn, initialSortField, initialSortOrder, enhancedColumns[initialSortColumn].sortUsingRenderer, enhancedColumns[initialSortColumn].renderer, enhancedColumns[initialSortColumn].sortType, enhancedColumns[initialSortColumn].sortDateFormat);
      enhancedTableData = generateRowOrderedTree(enhancedTableData);
    }

    return {
      enhancedTableData: enhancedTableData,
      enhancedColumns: enhancedColumns,
      showResetSortingButton: showResetSortingButton,
      childrenPresent: childrenPresent
    };
  };

  var generateStateTableData = function generateStateTableData(tree, visibleRows) {
    var n = 1;
    return function recurse(children) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var rowLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      if (children) {
        return children.map(function (node) {
          var rowID = n++;
          return Object.assign({}, node, {
            rowID: rowID,
            rowOrder: rowID,
            rowLevel: rowLevel,
            parentRowID: parent,
            visible: rowLevel <= visibleRows,
            expanded: rowLevel < visibleRows,
            filtered: false,
            children: recurse(node.children, rowID, rowLevel + 1)
          });
        });
      }
    }(tree);
  };

  var generateColumnState = function generateColumnState(initialColumns) {
    return initialColumns.map(function (node) {
      var sortOrder = node.hasOwnProperty('sortOrder') ? node.sortOrder : 'none';
      return Object.assign({}, node, {
        sortable: node.hasOwnProperty('sortable') ? node.sortable : true,
        sortType: node.hasOwnProperty('sortType') ? node.sortType : 'string',
        sortOrder: sortOrder
      });
    });
  };

  var sortBy = function sortBy(data, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat) {
    data.forEach(function (entry) {
      if (entry.children && entry.children.length > 0) {
        entry.children = sortBy(entry.children, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat);
      }
    });

    if (direction === 'asc') {
      return data.sort(function (a, b) {
        return performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
      });
    } else {
      return data.sort(function (b, a) {
        return performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
      });
    }
  };

  var performSort = function performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat) {
    var aValue = a.data[fieldName];
    var bValue = b.data[fieldName];

    if (sortUsingRenderer) {
      aValue = renderer(a, fieldName);
      bValue = renderer(b, fieldName);
    }

    if (sortType === 'date') {
      return compareDates(aValue, bValue, sortDateFormat);
    }

    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
  };

  var compareDates = function compareDates(aValue, bValue, sortDateFormat) {
    aValue = (0, _dateFns.parse)(aValue, sortDateFormat, new Date());
    bValue = (0, _dateFns.parse)(bValue, sortDateFormat, new Date());
    return (0, _dateFns.isBefore)(aValue, bValue) ? -1 : (0, _dateFns.isAfter)(aValue, bValue) ? 1 : 0;
  };

  var generateRowOrderedTree = function generateRowOrderedTree(oldTree) {
    var n = 0;
    return function recurse(children) {
      if (children) {
        return children.map(function (node) {
          return Object.assign({}, node, {
            rowOrder: n++,
            children: recurse(node.children)
          });
        });
      }
    }(oldTree);
  };

  return {
    generateInitialState: generateInitialState,
    sortBy: sortBy,
    generateRowOrderedTree: generateRowOrderedTree
  };
};

exports.Initialisation = Initialisation;

var BootstrapTreeTable = function BootstrapTreeTable(props) {
  //expand/collapse
  var expandOrCollapseAll = function expandOrCollapseAll() {
    var action = !expanded;

    var newTree = function recurse(children) {
      return children.map(function (node) {
        var visibleAction = node.rowLevel === 1 ? true : action;
        return Object.assign({}, node, {
          visible: visibleAction,
          expanded: action,
          children: recurse(node.children)
        });
      });
    }(enhancedTableData);

    setExpanded(action);
    setEnhancedTableData(newTree);
  };

  var rowExpandOrCollapse = function rowExpandOrCollapse(selectedRowID) {
    var newTree = expandOrCollapseTree(enhancedTableData, selectedRowID, false, false);
    setEnhancedTableData(newTree);
  };

  var expandOrCollapseTree = function expandOrCollapseTree(data, selectedRowID, expandAll, collapseAll) {
    return function recurse(children) {
      var expandBranch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : expandAll;
      var collapseBranch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : collapseAll;
      return children.map(function (node) {
        var expandedValue = node.rowID === selectedRowID ? !node.expanded : node.expanded;
        var setVisible = node.parentRowID === selectedRowID ? !node.visible : node.visible;

        if (expandBranch) {
          expandedValue = true;
          setVisible = true;
        }

        if (collapseBranch) {
          expandedValue = false;
          setVisible = false;
        } //collapse and hide all below


        if (node.parentRowID === selectedRowID && !setVisible) {
          collapseBranch = true;
        }

        return Object.assign({}, node, {
          visible: setVisible,
          expanded: expandedValue,
          children: recurse(node.children, expandBranch, collapseBranch)
        });
      });
    }(data);
  }; //sorting


  var sortByField = function sortByField(sortColumn) {
    var sortStatus = enhancedColumns[sortColumn].sortOrder;
    var sortOrder = 'asc';

    if (sortStatus === 'asc') {
      sortOrder = 'desc';
    }

    var newTree = Initialisation().sortBy(enhancedTableData, sortColumn, enhancedColumns[sortColumn].dataField, sortOrder, enhancedColumns[sortColumn].sortUsingRenderer, enhancedColumns[sortColumn].renderer, enhancedColumns[sortColumn].sortType, enhancedColumns[sortColumn].sortDateFormat);
    var orderedNewTree = Initialisation().generateRowOrderedTree(newTree);
    var newColumns = enhancedColumns.map(function (a) {
      return _objectSpread({}, a, {
        sortOrder: 'none'
      });
    });
    newColumns[sortColumn].sortOrder = sortOrder;
    setEnhancedTableData(orderedNewTree);
    setEnhancedColumns(newColumns);
    setShowResetSortingButton(true);
  };

  var resetSorting = function resetSorting() {
    var initialState = Initialisation().generateInitialState(visibleRows, props.tableData, props.columns);
    setEnhancedTableData(initialState.enhancedTableData);
    setEnhancedColumns(initialState.enhancedColumns);
    setShowResetSortingButton(initialState.showResetSortingButton);
  }; //filtering


  var applyFilter = function applyFilter(event) {
    var filterValue = event.target.value;
    var columns = props.columns;
    var overallFiltered = false;

    var filteredNewTree = function recurse(children) {
      if (children) {
        return children.map(function (node) {
          var filtered = false;

          for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            var filter = column.hasOwnProperty("filterable") ? column.filterable : false;

            if (filter) {
              var columnValue = node.data[column.dataField];

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
          });
        });
      }
    }(enhancedTableData);

    setEnhancedTableData(filteredNewTree);
    setFilterValue(filterValue);
    setFiltered(overallFiltered);
  };

  var filterNonVisibleRows = function filterNonVisibleRows(data) {
    return data.filter(function (o) {
      if (o.children) o.children = filterNonVisibleRows(o.children);
      return !o.filtered;
    });
  };

  var calculateNewStartAndEndRows = function calculateNewStartAndEndRows(page, rowsPerPage, tableLength) {
    var newPage = page; //check the current page isn't too high for the data provided

    var max = (page - 1) * rowsPerPage;

    if (max > tableLength) {
      newPage = Math.ceil(tableLength / rowsPerPage);
    } //calculate the start & end rows


    var newStartRow = (newPage - 1) * rowsPerPage;
    var newEndRow = newStartRow + rowsPerPage - 1;
    return {
      startRow: newStartRow,
      endRow: newEndRow,
      currentPage: newPage
    };
  }; //pagination


  var moveToSpecificPage = function moveToSpecificPage(page) {
    setCurrentPage(page);
  };

  var generateTableBody = function generateTableBody(tableData, startRow, endRow) {
    if (tableData.length > 0) {
      return generateTableBodyRows(tableData, startRow, endRow);
    } else {
      return null;
    }
  };

  var generateTableBodyRows = function generateTableBodyRows(tableData, startRow, endRow) {
    var topRow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var tableBody = [];
    tableData.forEach(function (dataRow, index) {
      var rowData = processDataRow(dataRow);
      var key = dataRow.parentRowID + '-' + dataRow.rowID;
      var rowClass = dataRow.visible ? 'shown' : 'hidden';

      if (topRow) {
        if (index >= startRow && index <= endRow) {
          tableBody.push(_react.default.createElement("tr", {
            className: rowClass,
            key: key
          }, rowData));

          if (dataRow.children) {
            tableBody.push.apply(tableBody, _toConsumableArray(generateTableBodyRows(dataRow.children, startRow, endRow, false)));
          }
        }
      } else {
        tableBody.push(_react.default.createElement("tr", {
          className: rowClass,
          key: key
        }, rowData));

        if (dataRow.children) {
          tableBody.push.apply(tableBody, _toConsumableArray(generateTableBodyRows(dataRow.children, startRow, endRow, false)));
        }
      }
    });
    return tableBody;
  };

  var generateExpandColumn = function generateExpandColumn(dataRow, key, dataField) {
    var output = dataRow.data[dataField];

    if (enhancedColumns[0].renderer) {
      output = enhancedColumns[0].renderer(dataRow, dataField);
    }

    if (!childrenPresent) {
      //no expander required
      if (enhancedColumns[0].fixedWidth) {
        return _react.default.createElement("td", {
          key: key,
          className: "text-left",
          width: enhancedColumns[0].percentageWidth + '%'
        }, output);
      } else {
        return _react.default.createElement("td", {
          key: key,
          className: "text-left"
        }, output);
      }
    }

    if (dataRow.children && dataRow.children.length > 0) {
      var iconCell = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _faAngleRight.faAngleRight,
        fixedWidth: true,
        id: "expandPoint",
        onClick: rowExpandOrCollapse.bind(null, dataRow.rowID)
      });

      if (dataRow.expanded) {
        iconCell = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _faSortDown.faSortDown,
          fixedWidth: true,
          id: "collapsePoint",
          onClick: rowExpandOrCollapse.bind(null, dataRow.rowID)
        });
      }

      if (enhancedColumns[0].fixedWidth) {
        return _react.default.createElement("td", {
          key: key,
          className: "text-left",
          width: enhancedColumns[0].percentageWidth + '%'
        }, _react.default.createElement("span", {
          style: {
            marginLeft: dataRow.rowLevel + 'em'
          }
        }, iconCell, _react.default.createElement("span", {
          className: "iconPadding"
        }, output)));
      } else {
        return _react.default.createElement("td", {
          key: key,
          className: "text-left"
        }, _react.default.createElement("span", {
          style: {
            marginLeft: dataRow.rowLevel + 'em'
          }
        }, iconCell, _react.default.createElement("span", {
          className: "iconPadding"
        }, output)));
      }
    } else {
      if (enhancedColumns[0].fixedWidth) {
        return _react.default.createElement("td", {
          key: key,
          className: "",
          width: enhancedColumns[0].percentageWidth + '%'
        }, _react.default.createElement("span", {
          style: {
            marginLeft: dataRow.rowLevel + 1.25 + 'em'
          }
        }, _react.default.createElement("span", {
          className: "iconPadding"
        }, output)));
      } else {
        return _react.default.createElement("td", {
          key: key,
          className: ""
        }, _react.default.createElement("span", {
          style: {
            marginLeft: dataRow.rowLevel + 1.25 + 'em'
          }
        }, _react.default.createElement("span", {
          className: "iconPadding"
        }, output)));
      }
    }
  };

  var processDataRow = function processDataRow(dataRow) {
    var rowBody = [];
    rowBody.push(enhancedColumns.map(function (column, index) {
      var key = dataRow.parentRowID + '-' + dataRow.rowID + '-' + index;
      var output = dataRow.data[column.dataField];

      if (column.renderer) {
        output = enhancedColumns[index].renderer(dataRow, column.dataField);
      }

      if (index === 0) {
        return generateExpandColumn(dataRow, key, column.dataField);
      } else {
        if (column.fixedWidth) {
          return _react.default.createElement("td", {
            key: key,
            className: "",
            width: column.percentageWidth + '%'
          }, output);
        } else {
          return _react.default.createElement("td", {
            key: key,
            className: ""
          }, output);
        }
      }
    }));
    return rowBody;
  };

  var generateHeaderRow = function generateHeaderRow(allowSorting) {
    var headingRows = [];

    if (enhancedColumns) {
      headingRows.push(enhancedColumns.map(function (column, index) {
        var fieldTitle = column.heading ? column.heading : column.dataField;
        var sortIcon;

        if (column.sortOrder === 'asc') {
          sortIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _faSortUp.faSortUp,
            fixedWidth: true,
            pull: "right"
          });
        } else if (column.sortOrder === 'desc') {
          sortIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _faSortDown.faSortDown,
            fixedWidth: true,
            pull: "right"
          });
        } else {
          sortIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _faSort.faSort,
            fixedWidth: true,
            pull: "right"
          });
        }

        if (allowSorting && column.sortable) {
          return _react.default.createElement("th", {
            key: fieldTitle,
            onClick: sortByField.bind(null, index)
          }, sortIcon, fieldTitle);
        } else {
          return _react.default.createElement("th", {
            key: fieldTitle
          }, fieldTitle);
        }
      }));
    }

    return headingRows;
  };

  var generateTopRows = function generateTopRows(topRows) {
    var headerRows = [];
    headerRows.push(topRows.map(function (rowSpec, rowIndex) {
      var thisRow = [];
      thisRow.push(rowSpec.map(function (column, index) {
        //first row
        var temp = [];

        if (index === 0) {
          temp.push("<tr key=\"tr".concat(rowIndex, "\">"));
        }

        var colspan = column.hasOwnProperty('colspan') ? column.colspan : 1;
        var rowspan = column.hasOwnProperty('rowspan') ? column.rowspan : 1;
        var halign = column.hasOwnProperty('alignment') ? column.alignment : 'left';
        var valign = column.hasOwnProperty('verticalAlignment') ? column.verticalAlignment : 'bottom';
        temp.push("<th colspan=\"".concat(colspan, "\" rowspan=").concat(rowspan, " class=\"text-").concat(halign, " align-").concat(valign, "\">").concat(column.heading, "</th>"));

        if (index === rowSpec.length - 1) {
          temp.push('</tr>');
        }

        return temp.join('');
      }).join(''));
      return (0, _utils.Utils)().parseStringToJsx(thisRow.join(''));
    }));
    return headerRows;
  };

  var generatePaginatorRow = function generatePaginatorRow(showPagination, startRow, endRow, tableLength, initialRowsPerPage) {
    if (showPagination && tableLength > initialRowsPerPage) {
      var displayStartRow = startRow + 1;
      var displayEndRow = endRow >= tableLength ? tableLength : endRow + 1;
      return _react.default.createElement(_Paginator.default, {
        currentPage: currentPage,
        tableLength: tableLength,
        rowsPerPage: initialRowsPerPage,
        rowMover: moveToSpecificPage,
        displayStartRow: displayStartRow,
        displayEndRow: displayEndRow,
        displayTotal: tableLength,
        displayFiltered: filtered,
        displayOverallTotal: props.tableData.length
      });
    }

    return _react.default.createElement("div", null);
  }; //execution and initial state-setting start here
  //first check inputs & define sensible defaults


  var visibleRows = props.control.hasOwnProperty('visibleRows') ? props.control.visibleRows : 1;
  var showExpandCollapseButton = props.control.hasOwnProperty('showExpandCollapseButton') ? props.control.showExpandCollapseButton : false;
  var allowSorting = props.control.hasOwnProperty('allowSorting') ? props.control.allowSorting : false;
  var allowFiltering = props.control.hasOwnProperty('allowFiltering') ? props.control.allowFiltering : false;
  var filterInputPlaceholderText = props.control.hasOwnProperty('filterInputPlaceholderText') ? props.control.filterInputPlaceholderText : 'Filter...';
  var showPagination = props.control.hasOwnProperty('showPagination') ? props.control.showPagination : false;
  var initialRowsPerPage = props.control.hasOwnProperty('initialRowsPerPage') ? props.control.initialRowsPerPage : 10;
  var initialState = Initialisation().generateInitialState(visibleRows, props.tableData, props.columns); //set required state variables

  var _React$useState = _react.default.useState(initialState.enhancedTableData),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      enhancedTableData = _React$useState2[0],
      setEnhancedTableData = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      expanded = _React$useState4[0],
      setExpanded = _React$useState4[1];

  var _React$useState5 = _react.default.useState(initialState.enhancedColumns),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      enhancedColumns = _React$useState6[0],
      setEnhancedColumns = _React$useState6[1];

  var _React$useState7 = _react.default.useState(initialState.showResetSortingButton),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      showResetSortingButton = _React$useState8[0],
      setShowResetSortingButton = _React$useState8[1];

  var _React$useState9 = _react.default.useState(initialState.childrenPresent),
      _React$useState10 = _slicedToArray(_React$useState9, 1),
      childrenPresent = _React$useState10[0];

  var _React$useState11 = _react.default.useState(''),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      filterValue = _React$useState12[0],
      setFilterValue = _React$useState12[1];

  var _React$useState13 = _react.default.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      filtered = _React$useState14[0],
      setFiltered = _React$useState14[1];

  var _React$useState15 = _react.default.useState(1),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      currentPage = _React$useState16[0],
      setCurrentPage = _React$useState16[1]; //construct table


  var newTableData = filterNonVisibleRows(enhancedTableData);
  var newStartAndEnd = calculateNewStartAndEndRows(currentPage, initialRowsPerPage, newTableData.length);
  var topRows = [];

  if (props.hasOwnProperty('topRows')) {
    topRows = generateTopRows(props.topRows);
  }

  var headingRows = generateHeaderRow(allowSorting);
  var tableBody = generateTableBody(newTableData, newStartAndEnd.startRow, newStartAndEnd.endRow); //return the constructed table

  return _react.default.createElement("div", {
    className: "container-fluid"
  }, _react.default.createElement("div", {
    className: "row col-12 justify-content-between"
  }, _react.default.createElement("div", null, _react.default.createElement("button", {
    onClick: expandOrCollapseAll.bind(null),
    className: showExpandCollapseButton ? 'btn btn-outline-secondary' : 'hidden'
  }, expanded ? 'Collapse All' : 'Expand All')), _react.default.createElement("div", null, _react.default.createElement("div", {
    className: showResetSortingButton ? 'shown' : 'hidden'
  }, _react.default.createElement("button", {
    onClick: resetSorting.bind(null),
    className: "btn btn-outline-secondary"
  }, "Reset Sorting")), _react.default.createElement("div", {
    className: "".concat(allowFiltering ? 'shown' : 'hidden')
  }, _react.default.createElement("div", {
    className: "input-group"
  }, _react.default.createElement("div", {
    className: "input-group-prepend"
  }, _react.default.createElement("div", {
    className: "input-group-text"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _faSearch.faSearch,
    fixedWidth: true
  }))), _react.default.createElement("input", {
    type: "text",
    value: filterValue,
    id: "filterInput",
    onChange: applyFilter.bind(null),
    placeholder: filterInputPlaceholderText,
    className: "form-control"
  }))))), _react.default.createElement("div", {
    className: "row col-12"
  }, _react.default.createElement("table", {
    className: "table table-bordered"
  }, _react.default.createElement("thead", null, topRows, _react.default.createElement("tr", {
    key: "colHeaders"
  }, headingRows)), _react.default.createElement("tbody", null, tableBody))), _react.default.createElement("div", {
    className: "row col-12 justify-content-center"
  }, generatePaginatorRow(showPagination, newStartAndEnd.startRow, newStartAndEnd.endRow, newTableData.length, initialRowsPerPage)));
};

BootstrapTreeTable.propTypes = {
  tableData: _propTypes.default.arrayOf(_propTypes.default.shape({
    data: _propTypes.default.object,
    children: _propTypes.default.arrayOf(_propTypes.default.object)
  })).isRequired,
  control: _propTypes.default.shape({
    visibleRows: _propTypes.default.number,
    showExpandCollapseButton: _propTypes.default.bool,
    allowSorting: _propTypes.default.bool,
    allowFiltering: _propTypes.default.bool,
    filterInputPlaceholderText: _propTypes.default.string,
    showPagination: _propTypes.default.bool,
    initialRowsPerPage: _propTypes.default.number
  }),
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    dataField: _propTypes.default.string.isRequired,
    heading: _propTypes.default.string,
    fixedWidth: _propTypes.default.bool,
    percentageWidth: _propTypes.default.number,
    styleClass: _propTypes.default.string,
    renderer: _propTypes.default.func,
    sortable: _propTypes.default.bool,
    sortUsingRenderer: _propTypes.default.bool,
    sortOrder: _propTypes.default.string,
    sortType: _propTypes.default.oneOf(['string', 'date', 'number']),
    sortDateFormat: _propTypes.default.string,
    filterable: _propTypes.default.bool
  })),
  topRows: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.shape({
    heading: _propTypes.default.string,
    colspan: _propTypes.default.number,
    rowspan: _propTypes.default.number,
    alignment: _propTypes.default.oneOf(['left', 'center', 'right']),
    verticalAlignment: _propTypes.default.oneOf(['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'])
  })))
};
var _default = BootstrapTreeTable;
exports.default = _default;