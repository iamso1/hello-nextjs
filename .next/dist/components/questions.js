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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\workspace\\PlayProject\\helloNext\\components\\questions.js';


var Questions = function (_Component) {
  (0, _inherits3.default)(Questions, _Component);

  function Questions(props) {
    (0, _classCallCheck3.default)(this, Questions);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Questions.__proto__ || (0, _getPrototypeOf2.default)(Questions)).call(this, props));

    _this._genItem = function (question) {
      return _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, question, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, '\u5B8C\u6210\u56DE\u7B54'));
    };

    return _this;
  }

  (0, _createClass3.default)(Questions, [{
    key: 'render',
    value: function render() {
      var content = this.props.data.map(this._genItem);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.title), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, content)));
    }
  }]);

  return Questions;
}(_react.Component);

exports.default = Questions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHF1ZXN0aW9ucy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlF1ZXN0aW9ucyIsInByb3BzIiwiX2dlbkl0ZW0iLCJxdWVzdGlvbiIsImNvbnRlbnQiLCJkYXRhIiwibWFwIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SSxBQUVLO3FDQUNuQjs7cUJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SUFBQSxBQUNYOztVQURXLEFBSW5CLFdBQVcsb0JBQVksQUFDckI7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxFQUFBLEFBRUUsMEJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFDRSxBQUVFLEFBR0w7QUFYa0I7O1dBRWxCOzs7Ozs2QkFXUSxBQUNQO1VBQU0sVUFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsSUFBSSxLQUFwQyxBQUFnQixBQUF5QixBQUN6Qzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQVE7QUFBUjtBQUFBLGNBQVEsQUFBSyxNQURmLEFBQ0UsQUFBbUIsQUFDbkIsd0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsU0FKTixBQUNFLEFBQ0UsQUFFRSxBQUlQOzs7OztBQXhCb0MsQTs7a0JBQWxCLEEiLCJmaWxlIjoicXVlc3Rpb25zLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9QbGF5UHJvamVjdC9oZWxsb05leHQifQ==