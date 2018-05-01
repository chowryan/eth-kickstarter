webpackHotUpdate(5,{

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(517);

var _Layout = __webpack_require__(1109);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1111);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(748);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ryanchow/Code/eth-kickstarter/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: '',
      loading: false,
      minimumContribution: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var minimumContribution, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                minimumContribution = _this.state.minimumContribution;

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return _factory2.default.methods.createCampaign(minimumContribution).send({
                  from: accounts[0]
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.handleInputChange = function (e) {
      return _this.setState({ minimumContribution: e.target.value });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          errorMessage = _state.errorMessage,
          loading = _state.loading,
          minimumContribution = _state.minimumContribution;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'wei',
        labelPosition: 'right',
        value: minimumContribution,
        onChange: this.handleInputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Create!')));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm1pbmltdW1Db250cmlidXRpb24iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQTs7QUFHRixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRUksQTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ25CO29CQUFRLEFBQ1EsQUFDZDtlQUZNLEFBRUcsQUFDVDsyQkFITSxBLEFBR2U7QUFIZixBQUNOLGFBS0YsQTsyRkFBVyxpQkFBQSxBQUFPLEdBQVA7aUNBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7a0JBQUEsQUFBRSxBQUNNO0FBRkMsc0NBRXVCLE1BRnZCLEFBRTRCLE1BRjVCLEFBRUQsQUFDUjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FIdEIsQUFHVCxBQUFjLEFBQStCO2dDQUhwQztnQ0FBQTt1QkFLZ0IsY0FBQSxBQUFLLElBTHJCLEFBS2dCLEFBQVM7O21CQUExQjtBQUxDLG9DQUFBO2dDQUFBO3lDQU1ELEFBQVEsUUFBUixBQUNILGVBREcsQUFDWSxxQkFEWixBQUVIO3dCQUNPLFNBVEgsQUFNRCxBQUVFLEFBQ0UsQUFBUztBQURYLEFBQ0osaUJBSEU7O21CQU5DO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQVlQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBWnZCLEFBWVAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBZFAsQUFjVCxBQUFjLEFBQVc7O21CQWRoQjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7OztlQWlCWCxBLG9CQUFvQixVQUFBLEFBQUMsR0FBRDthQUFPLE1BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLEVBQUEsQUFBRSxPQUE5QyxBQUFPLEFBQWMsQUFBZ0M7QTs7Ozs7NkJBRWhFO21CQUtILEtBTEcsQUFLRTtVQUxGLEFBRUwsc0JBRkssQUFFTDtVQUZLLEFBR0wsaUJBSEssQUFHTDtVQUhLLEFBSUwsNkJBSkssQUFJTCxBQUVGOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxzQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBdkMsQUFBd0M7b0JBQXhDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx5Q0FBQSxBQUFDO2VBQUQsQUFDUSxBQUNOO3VCQUZGLEFBRWdCLEFBQ2Q7ZUFIRixBQUdTLEFBQ1A7a0JBQVUsS0FKWixBQUlpQjs7b0JBSmpCO3NCQUhKLEFBQ0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBOUIsQUFBdUM7b0JBQXZDO3NCQVZGLEFBVUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixBQUFpQixTQUFTLFNBQTFCO29CQUFBO3NCQUFBO0FBQUE7U0FkTixBQUNFLEFBRUUsQUFXRSxBQUlQOzs7OztBQWxEc0MsQTs7a0JBQXBCLEEiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yeWFuY2hvdy9Db2RlL2V0aC1raWNrc3RhcnRlciJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/ryanchow/Code/eth-kickstarter/pages/campaigns/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ryanchow/Code/eth-kickstarter/pages/campaigns/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43YmVjMTAyMzg0OWQwY2Y5Mzk0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9mNmQwMThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIE1lc3NhZ2UsXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSdcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbXBhaWduTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiAnJyxcbiAgfVxuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB7IG1pbmltdW1Db250cmlidXRpb24gfSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuICAgICAgICAuY3JlYXRlQ2FtcGFpZ24obWluaW11bUNvbnRyaWJ1dGlvbilcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHRoaXMuc2V0U3RhdGUoeyBtaW5pbXVtQ29udHJpYnV0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICBsb2FkaW5nLFxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvblxuICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMz5DcmVhdGUgYSBDYW1wYWlnbjwvaDM+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISFlcnJvck1lc3NhZ2V9PlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgIHZhbHVlPXttaW5pbXVtQ29udHJpYnV0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17ZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gcHJpbWFyeT5DcmVhdGUhPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUlBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBRUE7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFBQTtBQU1BO0FBR0E7QUFBQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBaUJBO0FBQUE7Ozs7OztBQUVBO0FBS0E7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=