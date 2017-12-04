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
      }, 'Delete'));
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
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, this.props.title), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, resutl));
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;


List.defaultProps = {
  data: ['item1', 'item2', 'item3']
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDcmVhdGUiLCJMaXN0IiwicHJvcHMiLCJhZGQiLCJkYXRhIiwic3RhdGUiLCJuZXdEYXRhIiwiaW5mbyIsInNldFN0YXRlIiwiZGVsZXRlIiwic3BsaWNlIiwiaW5kZXgiLCJ1cGRhdGUiLCJ2YWx1ZSIsInJlbmRlckl0ZW0iLCJpdGVtIiwiaXRlbUVkaXQiLCJjdXJyZW50SXRlbSIsImUiLCJ0YXJnZXQiLCJyZXN1dGwiLCJtYXAiLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztJLEFBRWM7Z0NBQ25COztnQkFBQSxBQUFZLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1g7O1VBRFcsQUFRbkIsTUFBTSxnQkFBUSxBQUNaO1VBQU0sT0FBTyxNQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7VUFBTSxxREFBQSxBQUFjLFFBQXBCLEFBQU0sQUFBb0IsQUFDMUI7WUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQVEsQUFDdkI7QUFaa0I7O1VBQUEsQUFjbkIsU0FBUyxpQkFBUyxBQUNoQjtVQUFNLE9BQU8sTUFBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1dBQUEsQUFBSyxPQUFMLEFBQVksT0FBWixBQUFtQixBQUNuQjtZQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFDZjtBQWxCa0I7O1VBQUEsQUFvQm5CLFNBQVMsVUFBQSxBQUFDLE9BQUQsQUFBUSxPQUFVLEFBQ3pCO1VBQU0scURBQWMsTUFBQSxBQUFLLE1BQXpCLEFBQU0sQUFBeUIsQUFDL0I7Y0FBQSxBQUFRLFNBQVIsQUFBaUIsQUFDakI7WUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQVEsQUFDdkI7QUF4QmtCOztVQUFBLEFBMEJuQixhQUFhLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUM1QjtVQUFNLHFCQUNNLE1BQUEsQUFBSyxNQUFmLEFBQXFCO2NBQ25CLEFBQ08sQUFDTDtlQUZGLEFBRVMsQUFDUDtrQkFBVSxxQkFBSyxBQUNiO2dCQUFBLEFBQUssT0FBTCxBQUFZLE9BQU8sRUFBQSxBQUFFLE9BQXJCLEFBQTRCLEFBQzdCO0FBTEg7O29CQUFBO3NCQURGLEFBQ0U7QUFBQTtBQUNFLE9BREYsQ0FERixtQkFTRSxjQUFBLFVBQU0sU0FBUyxtQkFBQTtpQkFBTSxNQUFBLEFBQUssU0FBUyxFQUFFLGFBQXRCLEFBQU0sQUFBYyxBQUFlO0FBQWxEO29CQUFBO3NCQUFBLEFBQ0c7QUFESDtPQUFBLEVBVkosQUFVSSxBQUtKOzs2QkFDRSxjQUFBLFFBQUksS0FBSixBQUFTO29CQUFUO3NCQUFBLEFBQ0c7QUFESDtPQUFBLEVBQUEsQUFFRSwwQkFBQSxjQUFBO2lCQUNXLG1CQUFNLEFBQ2I7Z0JBQUEsQUFBSyxPQUFMLEFBQVksQUFDYjtBQUhIOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FKTixBQUNFLEFBRUUsQUFTTDtBQXREa0IsQUFFakI7O1VBQUEsQUFBSztZQUNHLENBQUEsQUFBQyxTQUFELEFBQVUsU0FETCxBQUNMLEFBQW1CLEFBQ3pCO21CQUFhLENBSkUsQUFFakIsQUFBYSxBQUVHO0FBRkgsQUFDWDtXQUdIOzs7Ozs2QkFrRFEsQUFDUDtVQUFNLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLElBQUksS0FBbkMsQUFBZSxBQUF5QixBQUN4Qzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQURaLEFBQ0UsQUFBZ0IsQUFDaEIsd0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsU0FISixBQUNFLEFBRUUsQUFHTDs7Ozs7QUFqRStCLEE7O2tCQUFiLEE7OztBQW9FckIsS0FBQSxBQUFLO1FBQ0csQ0FBQSxBQUFDLFNBQUQsQUFBVSxTQURsQixBQUFvQixBQUNaLEFBQW1CO0FBRFAsQUFDbEIiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3Jrc3BhY2UvUGxheVByb2plY3QvaGVsbG9OZXh0In0=