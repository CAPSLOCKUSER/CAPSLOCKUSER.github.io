'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['jquery', 'lib/virtual-dom', 'components/MediaHolder', 'components/PollingOption', 'components/BrowsePanel', 'components/ErrorMessage', 'stores/store'], function ($, VirtualDom, MediaHolder, PollingOption, BrowsePanel, ErrorMessage, Store) {
  var App = function (_VirtualDom$Component) {
    _inherits(App, _VirtualDom$Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        $(this.$dom).on('click', 'a.toggle-settings', function (event) {
          event.preventDefault();
          $('form.options').slideToggle(500);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var appState = Store.getState();
        return VirtualDom.vDom(
          'div',
          { 'class': 'app' },
          VirtualDom.vDom(
            'div',
            { 'class': 'container' },
            VirtualDom.vDom(
              'h1',
              { 'class': 'title clearfix' },
              VirtualDom.vDom(
                'span',
                { 'class': 'alignleft' },
                'Media list application'
              ),
              VirtualDom.vDom(
                'a',
                { href: '#', 'class': 'toggle-settings alignright' },
                VirtualDom.vDom('i', { 'class': 'fa fa-cog' })
              )
            )
          ),
          VirtualDom.vDom(PollingOption, { pollingInterval: appState.pollingInterval }),
          VirtualDom.vDom(
            'div',
            { 'class': 'container' },
            VirtualDom.vDom(BrowsePanel, { browsingData: appState }),
            VirtualDom.vDom(MediaHolder, { url: this.props.url, appState: appState }),
            VirtualDom.vDom(ErrorMessage, null)
          )
        );
      }
    }]);

    return App;
  }(VirtualDom.Component);

  return App;
});
//# sourceMappingURL=App.js.map