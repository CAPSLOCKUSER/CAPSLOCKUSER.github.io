'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['jquery', 'lib/virtual-dom'], function ($, VirtualDom) {

  var displayInterval = 3000;

  var ErrorMessage = function (_VirtualDom$Component) {
    _inherits(ErrorMessage, _VirtualDom$Component);

    function ErrorMessage(props) {
      _classCallCheck(this, ErrorMessage);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorMessage).call(this, props));

      ErrorMessage.singleton = _this;
      return _this;
    }

    _createClass(ErrorMessage, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        return VirtualDom.vDom(
          'div',
          { 'class': 'error-message' },
          'Something went wrong.'
        );
      }
    }], [{
      key: 'showMessage',
      value: function showMessage(message) {
        ErrorMessage.lastCalled = new Date().getTime();
        var $this = $(ErrorMessage.singleton.$dom);
        $this.css('height', '40px').text(message).delay(displayInterval).queue(function (next) {
          var now = new Date().getTime();
          if (ErrorMessage.lastCalled + displayInterval < now) {
            $this.css('height', '0px');
          }
          next();
        });
      }
    }]);

    return ErrorMessage;
  }(VirtualDom.Component);

  return ErrorMessage;
});
//# sourceMappingURL=ErrorMessage.js.map