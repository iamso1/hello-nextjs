'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\workspace\\PlayProject\\helloNext\\components\\list.js';


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));

    _this.add = function (info) {
      var data = _this.state.data;
      var newData = [].concat((0, _toConsumableArray3.default)(data), [info]);
      _this.setState({ data: newData });
    };

    _this.delete = function (index) {
      var data = _this.state.data;
      data.splice(index, 1);
      _this.setState({ data: data });
    };

    _this.update = function (index, value) {
      var newData = [].concat((0, _toConsumableArray3.default)(_this.state.data));
      newData[index] = value;
      _this.setState({ data: newData });
    };

    _this.renderItem = function (item, index) {
      var itemEdit = index === _this.state.currentItem ? _react2.default.createElement('input', {
        type: 'text',
        value: item,
        onChange: function onChange(e) {
          _this.update(index, e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }) : _react2.default.createElement('span', { onClick: function onClick() {
          return _this.setState({ currentItem: index });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, item);

      return _react2.default.createElement('li', { key: index, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, itemEdit, _react2.default.createElement('button', {
        onClick: function onClick() {
          _this.delete(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Delete Me'));
    };

    _this.state = {
      data: ['item1', 'item2', 'item3'],
      currentItem: -1
    };
    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var resutl = this.state.data.map(this.renderItem);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, resutl), _react2.default.createElement(_create2.default, { doAdd: this.add, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }));
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;


List.defaultProps = {
  data: ['item1', 'item2', 'item3']
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDcmVhdGUiLCJMaXN0IiwicHJvcHMiLCJhZGQiLCJkYXRhIiwic3RhdGUiLCJuZXdEYXRhIiwiaW5mbyIsInNldFN0YXRlIiwiZGVsZXRlIiwic3BsaWNlIiwiaW5kZXgiLCJ1cGRhdGUiLCJ2YWx1ZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiaXRlbUVkaXQiLCJjdXJyZW50SXRlbSIsImUiLCJ0YXJnZXQiLCJyZXN1dGwiLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7Ozs7Ozs7SSxBQUVjO2dDQUNuQjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYOztVQURXLEFBUW5CLE1BQU0sZ0JBQVEsQUFDWjtVQUFNLE9BQU8sTUFBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0scURBQUEsQUFBYyxRQUFwQixBQUFNLEFBQW9CLEFBQzFCO1lBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3ZCO0FBWmtCOztVQUFBLEFBY25CLFNBQVMsaUJBQVMsQUFDaEI7VUFBTSxPQUFPLE1BQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4QjtXQUFBLEFBQUssT0FBTCxBQUFZLE9BQVosQUFBbUIsQUFDbkI7WUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQ2Y7QUFsQmtCOztVQUFBLEFBb0JuQixTQUFTLFVBQUEsQUFBQyxPQUFELEFBQVEsT0FBVSxBQUN6QjtVQUFNLHFEQUFjLE1BQUEsQUFBSyxNQUF6QixBQUFNLEFBQXlCLEFBQy9CO2NBQUEsQUFBUSxTQUFSLEFBQWlCLEFBQ2pCO1lBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3ZCO0FBeEJrQjs7VUFBQSxBQTBCbkIsYUFBYSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDNUI7VUFBTSxxQkFDTSxNQUFBLEFBQUssTUFBZixBQUFxQjtjQUNuQixBQUNPLEFBQ0w7ZUFGRixBQUVTLEFBQ1A7a0JBQVUscUJBQUssQUFDYjtnQkFBQSxBQUFLLE9BQUwsQUFBWSxPQUFPLEVBQUEsQUFBRSxPQUFyQixBQUE0QixBQUM3QjtBQUxIOztvQkFBQTtzQkFERixBQUNFO0FBQUE7QUFDRSxPQURGLENBREYsbUJBU0UsY0FBQSxVQUFNLFNBQVMsbUJBQUE7aUJBQU0sTUFBQSxBQUFLLFNBQVMsRUFBRSxhQUF0QixBQUFNLEFBQWMsQUFBZTtBQUFsRDtvQkFBQTtzQkFBQSxBQUNHO0FBREg7T0FBQSxFQVZKLEFBVUksQUFLSjs7NkJBQ0UsY0FBQSxRQUFJLEtBQUosQUFBUztvQkFBVDtzQkFBQSxBQUNHO0FBREg7T0FBQSxFQUFBLEFBRUUsMEJBQUEsY0FBQTtpQkFDVyxtQkFBTSxBQUNiO2dCQUFBLEFBQUssT0FBTCxBQUFZLEFBQ2I7QUFISDs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBSk4sQUFDRSxBQUVFLEFBU0w7QUF0RGtCLEFBRWpCOztVQUFBLEFBQUs7WUFDRyxDQUFBLEFBQUMsU0FBRCxBQUFVLFNBREwsQUFDTCxBQUFtQixBQUN6QjttQkFBYSxDQUpFLEFBRWpCLEFBQWEsQUFFRztBQUZILEFBQ1g7V0FHSDs7Ozs7NkJBa0RRLEFBQ1A7VUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLEtBQW5DLEFBQWUsQUFBeUIsQUFDeEM7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxTQURGLEFBQ0UsQUFDQSx5QkFBQSxBQUFDLGtDQUFPLE9BQU8sS0FBZixBQUFvQjtvQkFBcEI7c0JBSEosQUFDRSxBQUVFLEFBR0w7QUFISzs7Ozs7O0FBOUQwQixBOztrQkFBYixBOzs7QUFvRXJCLEtBQUEsQUFBSztRQUNHLENBQUEsQUFBQyxTQUFELEFBQVUsU0FEbEIsQUFBb0IsQUFDWixBQUFtQjtBQURQLEFBQ2xCIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL1BsYXlQcm9qZWN0L2hlbGxvTmV4dCJ9