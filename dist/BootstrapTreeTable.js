"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _TreeTable = _interopRequireDefault(require("./TreeTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
    _this.rowExpandOrCollapse = _this.rowExpandOrCollapse.bind(_assertThisInitialized(_this)); // set state

    _this.state = {
      enhancedTableData: initialState.enhancedTableData,
      expanded: false,
      enhancedColumns: initialState.enhancedColumns,
      showResetSortingButton: initialState.showResetSortingButton,
      childrenPresent: initialState.childrenPresent,
      filterValue: '',
      filtered: false
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
      aValue = (0, _moment.default)(aValue, sortDateFormat);
      bValue = (0, _moment.default)(bValue, sortDateFormat);
      return aValue.isBefore(bValue) ? -1 : aValue.isAfter(bValue) ? 1 : 0;
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
    key: "render",
    value: function render() {
      return _react.default.createElement(_TreeTable.default, {
        tableData: this.state.enhancedTableData,
        control: this.props.control,
        filterValue: this.state.filterValue,
        filtered: this.state.filtered,
        applyFilter: this.applyFilter,
        expandOrCollapseAll: this.expandOrCollapseAll,
        expanded: this.state.expanded,
        resetSorting: this.resetSorting,
        showResetSortingButton: this.state.showResetSortingButton,
        enhancedColumns: this.state.enhancedColumns,
        sortByField: this.sortByField,
        childrenPresent: this.state.childrenPresent,
        rowExpandOrCollapse: this.rowExpandOrCollapse
      });
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