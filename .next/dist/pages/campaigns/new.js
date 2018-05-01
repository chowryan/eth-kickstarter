'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

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