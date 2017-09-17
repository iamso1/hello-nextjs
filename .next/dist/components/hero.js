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

var _jsxFileName = 'D:\\workspace\\PlayProject\\helloNext\\components\\hero.js';


var Hero = function (_Component) {
    (0, _inherits3.default)(Hero, _Component);

    function Hero(props) {
        (0, _classCallCheck3.default)(this, Hero);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).call(this, props));

        _this.changeTitle = function () {
            _this.setState({
                title: 'iamso2',
                count: _this.state.count + 1
            });
        };

        _this.state = {
            title: 'guest',
            count: 0
        };
        return _this;
    }

    //這方式可以避免bind this重複複製


    (0, _createClass3.default)(Hero, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, 'hello ', this.props.title), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Hi ', this.state.title), _react2.default.createElement('button', { onClick: function onClick() {
                    return _this2.setState({ title: 'iamso1' });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'Change'), _react2.default.createElement('button', { onClick: this.changeTitle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'Change By Function'), this.state.count);
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlcm8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJIZXJvIiwicHJvcHMiLCJjaGFuZ2VUaXRsZSIsInNldFN0YXRlIiwidGl0bGUiLCJjb3VudCIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFSztrQ0FDakI7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFDVDs7Y0FEUyxBQVNuQixjQUFjLFlBQU0sQUFDaEI7a0JBQUEsQUFBSzt1QkFBUyxBQUNKLEFBQ047dUJBQU0sTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUZyQixBQUFjLEFBRWEsQUFHOUI7QUFMaUIsQUFDVjtBQVhXLEFBRWY7O2NBQUEsQUFBSzttQkFBTSxBQUNELEFBQ047bUJBSlcsQUFFZixBQUFXLEFBRUQ7QUFGQyxBQUNQO2VBR1A7QUFFRDs7Ozs7OztpQ0FTUzt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBWSxlQUFBLEFBQUssTUFEckIsQUFDSSxBQUF1QixBQUN2Qix3QkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBUyxZQUFBLEFBQUssTUFGbEIsQUFFSSxBQUFvQixBQUNwQix3QkFBQSxjQUFBLFlBQVEsU0FBUyxtQkFBQTsyQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQXJCLEFBQU0sQUFBYyxBQUFPO0FBQTVDOzhCQUFBO2dDQUFBO0FBQUE7ZUFISixBQUdJLEFBQ0EsMkJBQUEsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0I7OEJBQXRCO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0MsNEJBQUEsQUFBSyxNQU5kLEFBQ0ksQUFLZ0IsQUFHdkI7Ozs7O0FBNUI2QixBOztrQkFBYixBIiwiZmlsZSI6Imhlcm8uanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL1BsYXlQcm9qZWN0L2hlbGxvTmV4dCJ9