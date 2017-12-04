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

var _jsxFileName = 'D:\\workspace\\PlayProject\\helloNext\\components\\info.js';


var Info = function (_Component) {
  (0, _inherits3.default)(Info, _Component);

  function Info() {
    (0, _classCallCheck3.default)(this, Info);

    return (0, _possibleConstructorReturn3.default)(this, (Info.__proto__ || (0, _getPrototypeOf2.default)(Info)).apply(this, arguments));
  }

  (0, _createClass3.default)(Info, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement('span', { style: { display: 'block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, ' ', '\u8ACB\u8F38\u5165\u4F60\u7684\u5927\u540D:', ' ', _react2.default.createElement('input', {
        type: 'text',
        value: this.props.userName,
        onChange: this.props.userNameOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })), _react2.default.createElement('span', { style: { display: 'block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, ' ', '\u8ACB\u8F38\u5165\u4F60\u7684\u554F\u984C\u4E3B\u984C:', ' ', _react2.default.createElement('input', {
        type: 'text',
        value: this.props.questionTitle,
        onChange: this.props.questionTitleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement('span', { style: { display: 'block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, ' ', '\u8ACB\u8F38\u5165\u4F60\u7684\u554F\u984C:', ' ', _react2.default.createElement('input', {
        type: 'text',
        value: this.props.question,
        onChange: this.props.questionOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement('span', { style: { display: 'block' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, '\u9001\u51FA\u554F\u984C')));
    }
  }]);

  return Info;
}(_react.Component);

exports.default = Info;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGluZm8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbmZvIiwiZGlzcGxheSIsInByb3BzIiwidXNlck5hbWUiLCJ1c2VyTmFtZU9uQ2hhbmdlIiwicXVlc3Rpb25UaXRsZSIsInF1ZXN0aW9uVGl0bGVPbkNoYW5nZSIsInF1ZXN0aW9uIiwicXVlc3Rpb25PbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJLEFBRUs7Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFVBQU0sT0FBTyxFQUFFLFNBQWYsQUFBYSxBQUFXO29CQUF4QjtzQkFBQSxBQUNHO0FBREg7U0FBQSxLQUVXLCtDQUZYLEFBR0U7Y0FBQSxBQUNPLEFBQ0w7ZUFBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtrQkFBVSxLQUFBLEFBQUssTUFIakIsQUFHdUI7O29CQUh2QjtzQkFKSixBQUNFLEFBR0UsQUFNRjtBQU5FO0FBQ0UsMkJBS0osY0FBQSxVQUFNLE9BQU8sRUFBRSxTQUFmLEFBQWEsQUFBVztvQkFBeEI7c0JBQUEsQUFDRztBQURIO1NBQUEsS0FFYSwyREFGYixBQUdFO2NBQUEsQUFDTyxBQUNMO2VBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7a0JBQVUsS0FBQSxBQUFLLE1BSGpCLEFBR3VCOztvQkFIdkI7c0JBYkosQUFVRSxBQUdFLEFBTUY7QUFORTtBQUNFLDJCQUtKLGNBQUEsVUFBTSxPQUFPLEVBQUUsU0FBZixBQUFhLEFBQVc7b0JBQXhCO3NCQUFBLEFBQ0c7QUFESDtTQUFBLEtBRVcsK0NBRlgsQUFHRTtjQUFBLEFBQ08sQUFDTDtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2tCQUFVLEtBQUEsQUFBSyxNQUhqQixBQUd1Qjs7b0JBSHZCO3NCQXRCSixBQW1CRSxBQUdFLEFBTUY7QUFORTtBQUNFLDJCQUtKLGNBQUEsVUFBTSxPQUFPLEVBQUUsU0FBZixBQUFhLEFBQVc7b0JBQXhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0E5Qk4sQUFDRSxBQTRCRSxBQUNFLEFBSVA7Ozs7O0FBcEMrQixBOztrQkFBYixBIiwiZmlsZSI6ImluZm8uanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL1BsYXlQcm9qZWN0L2hlbGxvTmV4dCJ9