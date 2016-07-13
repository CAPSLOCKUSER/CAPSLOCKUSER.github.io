'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['jquery', 'lib/virtual-dom', 'stores/store', 'actions/watchlist'], function ($, VirtualDom, Store, _ref) {
  var addToWatchlist = _ref.addToWatchlist;
  var removeFromWatchlist = _ref.removeFromWatchlist;

  var WatchlistButton = function (_VirtualDom$Component) {
    _inherits(WatchlistButton, _VirtualDom$Component);

    function WatchlistButton() {
      _classCallCheck(this, WatchlistButton);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(WatchlistButton).apply(this, arguments));
    }

    _createClass(WatchlistButton, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _this2 = this;

        $(this.$dom).on('click', function () {
          var _props = _this2.props;
          var id = _props.id;
          var isAdded = _props.isAdded;

          var action = isAdded ? removeFromWatchlist : addToWatchlist;
          Store.dispatch(action(id));
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var isAdded = this.props.isAdded;

        var addedClass = isAdded ? 'watchlist-button added' : 'watchlist-button';
        return VirtualDom.vDom(
          'button',
          { 'class': addedClass + ' ' + this.props.class },
          isAdded ? 'Remove from watchlist' : 'Add to watchlist'
        );
      }
    }]);

    return WatchlistButton;
  }(VirtualDom.Component);

  return WatchlistButton;
});
//# sourceMappingURL=WatchlistButton.js.map