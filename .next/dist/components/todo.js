'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _info = require('./info');

var _info2 = _interopRequireDefault(_info);

var _questions = require('./questions');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\workspace\\PlayProject\\helloNext\\components\\todo.js';


var Todo = function (_Component) {
  (0, _inherits3.default)(Todo, _Component);

  function Todo(props) {
    (0, _classCallCheck3.default)(this, Todo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Todo.__proto__ || (0, _getPrototypeOf2.default)(Todo)).call(this, props));

    _this.userNameOnChange = function (e) {
      _this.setState({ userName: e.target.value });
    };

    _this.questionTitleOnChange = function (e) {
      _this.setState({ questionTitle: e.target.value });
    };

    _this.questionOnChange = function (e) {
      _this.setState({ question: e.target.value });
    };

    _this.state = {
      info: {
        userName: 'iamso1',
        questionTitle: 'question subject',
        question: 'question content'
      },
      data_todo: ['帝王蟹怎麼賣', '海產新鮮嗎'],
      data_done: ['純問不下']
    };
    return _this;
  }

  (0, _createClass3.default)(Todo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.props.title), _react2.default.createElement(_info2.default, {
        userName: this.state.userName,
        questionTitle: this.state.questionTitle,
        question: this.state.question,
        userNameOnChange: this.userNameOnChange,
        questionTitleOnChange: this.questionTitleOnChange,
        questionOnChange: this.questionOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_questions2.default, { title: '\u5F85\u8655\u7406\u554F\u984C', data: this.state.data_todo, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_questions2.default, { title: '\u5DF2\u5B8C\u6210\u554F\u984C', data: this.state.data_done, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }));
    }
  }]);

  return Todo;
}(_react.Component);

exports.default = Todo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHRvZG8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMaXN0IiwiQ3JlYXRlIiwiSW5mbyIsIlF1ZXN0aW9ucyIsIlRvZG8iLCJwcm9wcyIsInVzZXJOYW1lT25DaGFuZ2UiLCJzZXRTdGF0ZSIsInVzZXJOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwicXVlc3Rpb25UaXRsZU9uQ2hhbmdlIiwicXVlc3Rpb25UaXRsZSIsInF1ZXN0aW9uT25DaGFuZ2UiLCJxdWVzdGlvbiIsInN0YXRlIiwiaW5mbyIsImRhdGFfdG9kbyIsImRhdGFfZG9uZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFFYyxBO2dDQUNuQjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYOztVQURXLEFBYW5CLG1CQUFtQixhQUFLLEFBQ3RCO1lBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxFQUFBLEFBQUUsT0FBNUIsQUFBYyxBQUFxQixBQUNwQztBQWZrQjs7VUFBQSxBQWlCbkIsd0JBQXdCLGFBQUssQUFDM0I7WUFBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLEVBQUEsQUFBRSxPQUFqQyxBQUFjLEFBQTBCLEFBQ3pDO0FBbkJrQjs7VUFBQSxBQXFCbkIsbUJBQW1CLGFBQUssQUFDdEI7WUFBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLEVBQUEsQUFBRSxPQUE1QixBQUFjLEFBQXFCLEFBQ3BDO0FBdkJrQixBQUVqQjs7VUFBQSxBQUFLOztrQkFDRyxBQUNNLEFBQ1Y7dUJBRkksQUFFVyxBQUNmO2tCQUpTLEFBQ0wsQUFHTSxBQUVaO0FBTE0sQUFDSjtpQkFJUyxDQUFBLEFBQUMsVUFORCxBQU1BLEFBQVcsQUFDdEI7aUJBQVcsQ0FUSSxBQUVqQixBQUFhLEFBT0EsQUFBQztBQVBELEFBQ1g7V0FRSDs7Ozs7NkJBY1EsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQURaLEFBQ0UsQUFBZ0IsQUFDaEIsd0JBQUEsQUFBQztrQkFDVyxLQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDckI7dUJBQWUsS0FBQSxBQUFLLE1BRnRCLEFBRTRCLEFBQzFCO2tCQUFVLEtBQUEsQUFBSyxNQUhqQixBQUd1QixBQUNyQjswQkFBa0IsS0FKcEIsQUFJeUIsQUFDdkI7K0JBQXVCLEtBTHpCLEFBSzhCLEFBQzVCOzBCQUFrQixLQU5wQixBQU15Qjs7b0JBTnpCO3NCQUZGLEFBRUUsQUFRQTtBQVJBO0FBQ0U7O29CQU9GO3NCQVZGLEFBVUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxxQ0FBVSxPQUFYLEFBQWlCLGtDQUFRLE1BQU0sS0FBQSxBQUFLLE1BQXBDLEFBQTBDO29CQUExQztzQkFYRixBQVdFLEFBQ0E7QUFEQTs7O29CQUNBO3NCQVpGLEFBWUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxxQ0FBVSxPQUFYLEFBQWlCLGtDQUFRLE1BQU0sS0FBQSxBQUFLLE1BQXBDLEFBQTBDO29CQUExQztzQkFkSixBQUNFLEFBYUUsQUFHTDtBQUhLOzs7Ozs7QUF6QzBCLEE7O2tCQUFiLEEiLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3Jrc3BhY2UvUGxheVByb2plY3QvaGVsbG9OZXh0In0=