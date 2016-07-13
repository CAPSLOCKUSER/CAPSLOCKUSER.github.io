'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['jquery', 'constants', 'lib/virtual-dom', 'stores/store', 'actions/options'], function ($, _ref, VirtualDom, Store, _ref2) {
  var POLLING_OPTION = _ref.POLLING_OPTION;
  var DEFAULT_POLLING = _ref.DEFAULT_POLLING;
  var setPollInterval = _ref2.setPollInterval;

  var PollingOption = function (_VirtualDom$Component) {
    _inherits(PollingOption, _VirtualDom$Component);

    function PollingOption() {
      _classCallCheck(this, PollingOption);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(PollingOption).apply(this, arguments));
    }

    _createClass(PollingOption, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        $(this.$dom).on('change', function (event) {
          var value = $(event.currentTarget).find('input:checked').val();
          Store.dispatch(setPollInterval(parseInt(value, 10)));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var radios = POLLING_OPTION.map(function (_ref3) {
          var interval = _ref3.interval;
          var name = _ref3.name;
          return VirtualDom.vDom(
            'li',
            null,
            VirtualDom.vDom('input', {
              type: 'radio',
              name: 'polling-interval',
              value: interval,
              checked: interval === _this2.props.pollingInterval,
              id: 'polling-' + interval
            }),
            VirtualDom.vDom(
              'label',
              { 'for': 'polling-' + interval },
              name
            )
          );
        });
        return VirtualDom.vDom(
          'form',
          { 'class': 'options' },
          VirtualDom.vDom(
            'div',
            { 'class': 'container' },
            VirtualDom.vDom(
              'h2',
              null,
              'Polling interval:'
            ),
            VirtualDom.vDom(
              'ul',
              { 'class': 'polling-options' },
              radios
            )
          )
        );
      }
    }]);

    return PollingOption;
  }(VirtualDom.Component);

  PollingOption.defaultProps = {
    pollingInterval: DEFAULT_POLLING
  };


  return PollingOption;
});
//# sourceMappingURL=PollingOption.js.map