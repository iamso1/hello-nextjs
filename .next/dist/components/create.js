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

var _jsxFileName = 'D:\\workspace\\PlayProject\\helloNext\\components\\create.js';


var Create = function (_Component) {
  (0, _inherits3.default)(Create, _Component);

  function Create(props) {
    (0, _classCallCheck3.default)(this, Create);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Create.__proto__ || (0, _getPrototypeOf2.default)(Create)).call(this, props));

    _this.state = {
      title: 'input something'
    };
    return _this;
  }

  (0, _createClass3.default)(Create, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('input', { type: 'text', value: this.state.title, onChange: function onChange(e) {
          return _this2.setState({ title: e.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('button', { onClick: function onClick() {
          return _this2.props.doAdd(_this2.state.title);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'Submit'));
    }
  }]);

  return Create;
}(_react.Component);

exports.default = Create;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNyZWF0ZSIsInByb3BzIiwic3RhdGUiLCJ0aXRsZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZG9BZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFSyxBO2tDQUNuQjs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSzthQUZZLEFBRWpCLEFBQVcsQUFDSDtBQURHLEFBQ1Q7V0FFSDs7Ozs7NkJBRVE7bUJBQ1A7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsMkNBQ1MsTUFBUCxBQUFZLFFBQU8sT0FBTyxLQUFBLEFBQUssTUFBL0IsQUFBcUMsT0FBTyxVQUFVLGtCQUFBLEFBQUMsR0FBRDtpQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sRUFBQSxBQUFFLE9BQTVCLEFBQUssQUFBYyxBQUFnQjtBQUF6RjtvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTtpQkFBSSxPQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sT0FBQSxBQUFLLE1BQTFCLEFBQUksQUFBNEI7QUFBakQ7b0JBQUE7c0JBQUE7QUFBQTtTQUhKLEFBQ0UsQUFFRSxBQUdMOzs7OztBQWZpQyxBOztrQkFBZixBIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3Jrc3BhY2UvUGxheVByb2plY3QvaGVsbG9OZXh0In0=