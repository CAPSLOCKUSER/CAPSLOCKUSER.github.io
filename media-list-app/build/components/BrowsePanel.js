'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['jquery', 'lib/virtual-dom', 'actions/media-list', 'stores/store', 'components/Filter', 'components/Sorter', 'lib/utils'], function ($, VirtualDom, MediaListActions, Store, Filter, Sorter, _ref) {
  var objectWithoutUndefined = _ref.objectWithoutUndefined;

  var BrowsePanel = function (_VirtualDom$Component) {
    _inherits(BrowsePanel, _VirtualDom$Component);

    function BrowsePanel(props) {
      _classCallCheck(this, BrowsePanel);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BrowsePanel).call(this, props));

      _this.state = _extends({}, props.browsingData);
      return _this;
    }

    _createClass(BrowsePanel, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var setToNormalBrowse = MediaListActions.setToNormalBrowse;
        var setToWatchlist = MediaListActions.setToWatchlist;

        var $this = $(this.$dom);
        $this.find('ul a.menu-home').on('click', function (event) {
          event.preventDefault();
          Store.dispatch(setToNormalBrowse());
        });
        $this.find('ul a.menu-watchlist').on('click', function (event) {
          event.preventDefault();
          Store.dispatch(setToWatchlist());
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        Store.subscribe(function () {
          var _Store$getState = Store.getState();

          var sortBy = _Store$getState.sortBy;
          var sortDirection = _Store$getState.sortDirection;
          var filter = _Store$getState.filter;
          var browseMode = _Store$getState.browseMode;

          _this2.setState(objectWithoutUndefined({ sortBy: sortBy, sortDirection: sortDirection, filter: filter, browseMode: browseMode }));
        });
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(newProps, newState) {
        return newState.browseMode !== this.state.browseMode;
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state;
        var sortBy = _state.sortBy;
        var sortDirection = _state.sortDirection;
        var filter = _state.filter;
        var browseMode = _state.browseMode;

        var isWatchlist = browseMode === 'watchlist';
        return VirtualDom.vDom(
          'div',
          { 'class': 'browse-panel' },
          VirtualDom.vDom(
            'ul',
            { 'class': 'menu' },
            VirtualDom.vDom(
              'li',
              null,
              VirtualDom.vDom(
                'a',
                { href: '#', 'class': "menu-home" + (!isWatchlist ? " active" : "") },
                'Home'
              )
            ),
            VirtualDom.vDom(
              'li',
              null,
              VirtualDom.vDom(
                'a',
                { href: '#', 'class': "menu-watchlist" + (isWatchlist ? " active" : "") },
                'Watchlist'
              )
            )
          ),
          !isWatchlist ? VirtualDom.vDom(
            'div',
            { 'class': 'presenting-options' },
            VirtualDom.vDom(Sorter, { sortBy: sortBy, sortDirection: sortDirection }),
            VirtualDom.vDom(Filter, { filter: filter })
          ) : null
        );
      }
    }]);

    return BrowsePanel;
  }(VirtualDom.Component);

  return BrowsePanel;
});
//# sourceMappingURL=BrowsePanel.js.map