"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.set-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateFns = require("date-fns");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _faAngleRight = require("@fortawesome/free-solid-svg-icons/faAngleRight");

var _faSortDown = require("@fortawesome/free-solid-svg-icons/faSortDown");

var _faSortUp = require("@fortawesome/free-solid-svg-icons/faSortUp");

var _faSort = require("@fortawesome/free-solid-svg-icons/faSort");

var _Paginator = _interopRequireDefault(require("./Paginator"));

var _faSearch = require("@fortawesome/free-solid-svg-icons/faSearch");

require("./BootstrapTreeTable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BootstrapTreeTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BootstrapTreeTable, _React$Component);

  function BootstrapTreeTable(props) {
    var _this;

    _classCallCheck(this, BootstrapTreeTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BootstrapTreeTable).call(this, props));

    var initialState = _this.generateInitialState(); //bind functions passed to TreeTable


    _this.sortByField = _this.sortByField.bind(_assertThisInitialized(_this));
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_this));
    _this.expandOrCollapseAll = _this.expandOrCollapseAll.bind(_assertThisInitialized(_this));
    _this.resetSorting = _this.resetSorting.bind(_assertThisInitialized(_this));
    _this.rowExpandOrCollapse = _this.rowExpandOrCollapse.bind(_assertThisInitialized(_this));
    _this.moveToSpecificPage = _this.moveToSpecificPage.bind(_assertThisInitialized(_this)); // set state

    _this.state = {
      enhancedTableData: initialState.enhancedTableData,
      expanded: false,
      enhancedColumns: initialState.enhancedColumns,
      showResetSortingButton: initialState.showResetSortingButton,
      childrenPresent: initialState.childrenPresent,
      filterValue: '',
      filtered: false,
      currentPage: 1
    };
    return _this;
  }

  _createClass(BootstrapTreeTable, [{
    key: "generateInitialState",
    value: function generateInitialState() {
      var visibleRows = this.props.control.hasOwnProperty('visibleRows') ? this.props.control.visibleRows : 1;
      var enhancedTableData = this.generateStateTableData(this.props.tableData, visibleRows);
      var enhancedColumns = this.generateColumnState(this.props.columns);
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
        enhancedTableData = this.sortBy(enhancedTableData, initialSortColumn, initialSortField, initialSortOrder, enhancedColumns[initialSortColumn].sortUsingRenderer, enhancedColumns[initialSortColumn].renderer, enhancedColumns[initialSortColumn].sortType, enhancedColumns[initialSortColumn].sortDateFormat);
        enhancedTableData = this.generateRowOrderedTree(enhancedTableData);
      }

      return {
        enhancedTableData: enhancedTableData,
        enhancedColumns: enhancedColumns,
        showResetSortingButton: showResetSortingButton,
        childrenPresent: childrenPresent
      };
    }
  }, {
    key: "generateStateTableData",
    value: function generateStateTableData(tree, visibleRows) {
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
    }
  }, {
    key: "generateColumnState",
    value: function generateColumnState(initialColumns) {
      return initialColumns.map(function (node) {
        var sortOrder = node.hasOwnProperty('sortOrder') ? node.sortOrder : 'none';
        return Object.assign({}, node, {
          sortable: node.hasOwnProperty('sortable') ? node.sortable : true,
          sortType: node.hasOwnProperty('sortType') ? node.sortType : 'string',
          sortOrder: sortOrder
        });
      });
    } // state-changing functions below here
    //expand/collapse

  }, {
    key: "expandOrCollapseAll",
    value: function expandOrCollapseAll() {
      var action = !this.state.expanded;

      var newTree = function recurse(children) {
        return children.map(function (node) {
          var visibleAction = node.rowLevel === 1 ? true : action;
          return Object.assign({}, node, {
            visible: visibleAction,
            expanded: action,
            children: recurse(node.children)
          });
        });
      }(this.state.enhancedTableData);

      this.setState({
        enhancedTableData: newTree,
        expanded: action
      });
    }
  }, {
    key: "rowExpandOrCollapse",
    value: function rowExpandOrCollapse(selectedRowID) {
      var newTree = this.expandOrCollapseTree(this.state.enhancedTableData, selectedRowID, false, false);
      this.setState({
        enhancedTableData: newTree
      });
    }
  }, {
    key: "expandOrCollapseTree",
    value: function expandOrCollapseTree(data, selectedRowID, expandAll, collapseAll) {
      return function recurse(children) {
        var expandBranch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : expandAll;
        var collapseBranch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : collapseAll;
        return children.map(function (node) {
          var setExpanded = node.rowID === selectedRowID ? !node.expanded : node.expanded;
          var setVisible = node.parentRowID === selectedRowID ? !node.visible : node.visible;

          if (expandBranch) {
            setExpanded = true;
            setVisible = true;
          }

          if (collapseBranch) {
            setExpanded = false;
            setVisible = false;
          } //collapse and hide all below


          if (node.parentRowID === selectedRowID && !setVisible) {
            collapseBranch = true;
          }

          return Object.assign({}, node, {
            visible: setVisible,
            expanded: setExpanded,
            children: recurse(node.children, expandBranch, collapseBranch)
          });
        });
      }(data);
    } //sorting

  }, {
    key: "sortByField",
    value: function sortByField(sortColumn) {
      var sortStatus = this.state.enhancedColumns[sortColumn].sortOrder;
      var sortOrder = 'asc';

      if (sortStatus === 'asc') {
        sortOrder = 'desc';
      }

      var newTree = this.sortBy(this.state.enhancedTableData, sortColumn, this.state.enhancedColumns[sortColumn].dataField, sortOrder, this.state.enhancedColumns[sortColumn].sortUsingRenderer, this.state.enhancedColumns[sortColumn].renderer, this.state.enhancedColumns[sortColumn].sortType, this.state.enhancedColumns[sortColumn].sortDateFormat);
      var orderedNewTree = this.generateRowOrderedTree(newTree);
      var newColumns = this.state.enhancedColumns.map(function (a) {
        return _objectSpread({}, a, {
          sortOrder: 'none'
        });
      });
      newColumns[sortColumn].sortOrder = sortOrder;
      this.setState({
        enhancedTableData: orderedNewTree,
        enhancedColumns: newColumns,
        showResetSortingButton: true
      });
    }
  }, {
    key: "generateRowOrderedTree",
    value: function generateRowOrderedTree(oldTree) {
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
    }
  }, {
    key: "sortBy",
    value: function sortBy(data, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat) {
      var _this2 = this;

      data.forEach(function (entry) {
        if (entry.children && entry.children.length > 0) {
          entry.children = _this2.sortBy(entry.children, sortColumn, fieldName, direction, sortUsingRenderer, renderer, sortType, sortDateFormat);
        }
      });

      if (direction === 'asc') {
        return data.sort(function (a, b) {
          return _this2.performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
        });
      } else {
        return data.sort(function (b, a) {
          return _this2.performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat);
        });
      }
    }
  }, {
    key: "performSort",
    value: function performSort(a, b, fieldName, sortUsingRenderer, renderer, sortType, sortDateFormat) {
      var aValue = a.data[fieldName];
      var bValue = b.data[fieldName];

      if (sortUsingRenderer) {
        aValue = renderer(a, fieldName);
        bValue = renderer(b, fieldName);
      }

      if (sortType === 'date') {
        return this.compareDates(aValue, bValue, sortDateFormat);
      }

      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    }
  }, {
    key: "compareDates",
    value: function compareDates(aValue, bValue, sortDateFormat) {
      aValue = (0, _dateFns.parse)(aValue, sortDateFormat, new Date());
      bValue = (0, _dateFns.parse)(bValue, sortDateFormat, new Date());
      return (0, _dateFns.isBefore)(aValue, bValue) ? -1 : (0, _dateFns.isAfter)(aValue, bValue) ? 1 : 0;
    }
  }, {
    key: "resetSorting",
    value: function resetSorting() {
      var initialState = this.generateInitialState();
      this.setState({
        enhancedTableData: initialState.enhancedTableData,
        enhancedColumns: initialState.enhancedColumns,
        showResetSortingButton: initialState.showResetSortingButton
      });
    } //filtering

  }, {
    key: "applyFilter",
    value: function applyFilter(event) {
      var filterValue = event.target.value;
      var columns = this.props.columns;
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
      }(this.state.enhancedTableData);

      this.setState({
        enhancedTableData: filteredNewTree,
        filterValue: filterValue,
        filtered: overallFiltered
      });
    }
  }, {
    key: "filterNonVisibleRows",
    value: function filterNonVisibleRows(data) {
      var self = this;
      var r = data.filter(function (o) {
        if (o.children) o.children = self.filterNonVisibleRows(o.children);
        return !o.filtered;
      });
      return r;
    }
  }, {
    key: "calculateNewStartAndEndRows",
    value: function calculateNewStartAndEndRows(page, rowsPerPage, tableLength) {
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
    }
  }, {
    key: "getMaxRowID",
    value: function getMaxRowID(tree) {
      var entry = tree[tree.length - 1];

      if (entry.children && entry.children.length > 0) {
        return this.getMaxRowID(entry.children);
      }

      return entry.rowOrder;
    } //pagination

  }, {
    key: "moveToSpecificPage",
    value: function moveToSpecificPage(page) {
      this.setState({
        currentPage: page
      });
    }
  }, {
    key: "getNextRowID",
    value: function getNextRowID(tree, position) {
      var entry = tree[position];

      if (entry) {
        if (entry.children && entry.children.length > 0) {
          return this.getMaxRowID(entry.children);
        }

        return entry.rowOrder;
      } //if no entry at that position, return the last element


      return tree[tree.length - 1].rowOrder;
    }
  }, {
    key: "generateTableBody",
    value: function generateTableBody(tableData, startRow, endRow) {
      if (tableData.length > 0) {
        return this.generateTableBodyRows(tableData, startRow, endRow);
      } else {
        return null;
      }
    }
  }, {
    key: "generateTableBodyRows",
    value: function generateTableBodyRows(tableData, startRow, endRow) {
      var _this3 = this;

      var tableBody = [];
      tableData.forEach(function (dataRow, index) {
        if (index >= startRow && index <= endRow) {
          var rowData = _this3.processDataRow(dataRow);

          var key = dataRow.parentRowID + '-' + dataRow.rowID;
          var rowClass = dataRow.visible ? 'shown' : 'hidden';
          tableBody.push(_react.default.createElement("tr", {
            className: rowClass,
            key: key
          }, rowData));

          if (dataRow.children) {
            tableBody.push.apply(tableBody, _toConsumableArray(_this3.generateTableBodyRows(dataRow.children, startRow, endRow)));
          }
        }
      });
      return tableBody;
    }
  }, {
    key: "generateExpandColumn",
    value: function generateExpandColumn(dataRow, key, dataField) {
      var output = dataRow.data[dataField];

      if (this.state.enhancedColumns[0].renderer) {
        output = this.state.enhancedColumns[0].renderer(dataRow, dataField);
      }

      if (!this.state.childrenPresent) {
        //no expander required
        if (this.state.enhancedColumns[0].fixedWidth) {
          return _react.default.createElement("td", {
            key: key,
            className: "",
            width: this.state.enhancedColumns[0].percentageWidth + '%'
          }, output);
        } else {
          return _react.default.createElement("td", {
            key: key,
            className: ""
          }, output);
        }
      }

      if (dataRow.children && dataRow.children.length > 0) {
        var iconCell = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _faAngleRight.faAngleRight,
          fixedWidth: true,
          onClick: this.rowExpandOrCollapse.bind(null, dataRow.rowID)
        });

        if (dataRow.expanded) {
          iconCell = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _faSortDown.faSortDown,
            fixedWidth: true,
            onClick: this.rowExpandOrCollapse.bind(null, dataRow.rowID)
          });
        }

        if (this.state.enhancedColumns[0].fixedWidth) {
          return _react.default.createElement("td", {
            key: key,
            className: "",
            width: this.state.enhancedColumns[0].percentageWidth + '%'
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
            className: ""
          }, _react.default.createElement("span", {
            style: {
              marginLeft: dataRow.rowLevel + 'em'
            }
          }, iconCell, _react.default.createElement("span", {
            className: "iconPadding"
          }, output)));
        }
      } else {
        if (this.state.enhancedColumns[0].fixedWidth) {
          return _react.default.createElement("td", {
            key: key,
            className: "",
            width: this.state.enhancedColumns[0].percentageWidth + '%'
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
    }
  }, {
    key: "processDataRow",
    value: function processDataRow(dataRow) {
      var _this4 = this;

      var rowBody = [];
      rowBody.push(this.state.enhancedColumns.map(function (column, index) {
        var key = dataRow.parentRowID + '-' + dataRow.rowID + '-' + index;
        var output = dataRow.data[column.dataField];

        if (column.renderer) {
          output = _this4.state.enhancedColumns[index].renderer(dataRow, column.dataField);
        }

        if (index === 0) {
          return _this4.generateExpandColumn(dataRow, key, column.dataField);
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
    }
  }, {
    key: "generateHeaderRow",
    value: function generateHeaderRow() {
      var _this5 = this;

      var headingRows = [];

      if (this.state.enhancedColumns) {
        headingRows.push(this.state.enhancedColumns.map(function (column, index) {
          var fieldTitle = column.heading ? column.heading : column.dataField;
          var sortIcon = null;

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

          if (_this5.props.control.allowSorting && column.sortable) {
            return _react.default.createElement("th", {
              key: fieldTitle,
              onClick: _this5.sortByField.bind(null, index)
            }, sortIcon, fieldTitle);
          } else {
            return _react.default.createElement("th", {
              key: fieldTitle
            }, fieldTitle);
          }
        }));
      }

      return headingRows;
    }
  }, {
    key: "generatePaginatorRow",
    value: function generatePaginatorRow(startRow, endRow, tableLength) {
      if (this.props.control.showPagination && tableLength > this.props.control.initialRowsPerPage) {
        var displayStartRow = startRow + 1;
        var displayEndRow = endRow >= tableLength ? tableLength : endRow + 1;
        return _react.default.createElement(_Paginator.default, {
          currentPage: this.state.currentPage,
          tableLength: tableLength,
          rowsPerPage: this.props.control.initialRowsPerPage,
          rowMover: this.moveToSpecificPage,
          displayStartRow: displayStartRow,
          displayEndRow: displayEndRow,
          displayTotal: tableLength,
          displayFiltered: this.state.filtered,
          displayOverallTotal: this.props.tableData.length
        });
      }

      return _react.default.createElement("div", null);
    }
  }, {
    key: "render",
    value: function render() {
      var newTableData = this.filterNonVisibleRows(this.state.enhancedTableData);
      var newStartAndEnd = this.calculateNewStartAndEndRows(this.state.currentPage, this.props.control.initialRowsPerPage, newTableData.length);
      var headingRows = this.generateHeaderRow();
      var tableBody = this.generateTableBody(newTableData, newStartAndEnd.startRow, newStartAndEnd.endRow);
      return _react.default.createElement("div", {
        className: "container-fluid"
      }, _react.default.createElement("div", {
        className: "row col-12 justify-content-between"
      }, _react.default.createElement("div", null, _react.default.createElement("button", {
        onClick: this.expandOrCollapseAll.bind(null),
        className: this.props.control.showExpandCollapseButton ? 'btn btn-outline-secondary' : 'hidden'
      }, this.props.expanded ? 'Collapse All' : 'Expand All')), _react.default.createElement("div", null, _react.default.createElement("div", {
        className: this.props.showResetSortingButton ? 'shown' : 'hidden'
      }, _react.default.createElement("button", {
        onClick: this.resetSorting.bind(null),
        className: "btn btn-outline-secondary"
      }, "Reset Sorting")), _react.default.createElement("div", {
        className: "".concat(this.props.control.allowFiltering ? 'shown' : 'hidden')
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
        value: this.props.filterValue,
        id: "filterInput",
        onChange: this.applyFilter.bind(null),
        placeholder: this.props.control.filterInputPlaceholderText,
        className: "form-control"
      }))))), _react.default.createElement("div", {
        className: "row col-12"
      }, _react.default.createElement("table", {
        className: "table table-bordered"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, headingRows)), _react.default.createElement("tbody", null, tableBody))), _react.default.createElement("div", {
        className: "row col-12 justify-content-center"
      }, this.generatePaginatorRow(newStartAndEnd.startRow, newStartAndEnd.endRow, newTableData.length)));
    }
  }]);

  return BootstrapTreeTable;
}(_react.default.Component);

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
  }))
};
BootstrapTreeTable.defaultProps = {
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
var _default = BootstrapTreeTable;
exports.default = _default;