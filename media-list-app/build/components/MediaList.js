'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['lib/virtual-dom', 'components/MediaItem'], function (VirtualDom, MediaItem) {
  var MediaList = function (_VirtualDom$Component) {
    _inherits(MediaList, _VirtualDom$Component);

    function MediaList() {
      _classCallCheck(this, MediaList);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(MediaList).apply(this, arguments));
    }

    _createClass(MediaList, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var list = _props.list;
        var filter = _props.filter;
        var sortBy = _props.sortBy;
        var sortDirection = _props.sortDirection;
        var watchlist = _props.watchlist;
        var browseMode = _props.browseMode;

        var isWatchlist = browseMode === 'watchlist';

        var filterMediaItem = function filterMediaItem(_ref) {
          var type = _ref.type;
          var isLive = _ref.isLive;
          var id = _ref.id;

          var filterMode = !isWatchlist ? filter : 'watchlist';
          switch (filterMode) {
            case 'live-channel':
              return isLive && type === 'channel';
            case 'offline-channel':
              return !isLive && type === 'channel';
            case 'video':
              return type === 'recorded';
            case 'watchlist':
              return !!findWatchlistItem(id);
            default:
              return true;
          }
        };

        var findWatchlistItem = function findWatchlistItem(id) {
          return watchlist.find(function (_ref2) {
            var other = _ref2.id;
            return other === id;
          });
        };

        var sortByWatchlistAddedDate = function sortByWatchlistAddedDate(a, b) {
          var addedA = findWatchlistItem(a.id).date;
          var addedB = findWatchlistItem(b.id).date;

          return addedB - addedA;
        };

        var sortMediaItem = function sortMediaItem(a, b) {
          // makes stable sort
          if (a[sortBy] === b[sortBy]) {
            return a.id - b.id;
          }

          var local = a[sortBy] < b[sortBy] ? -1 : 1;

          return sortDirection === 'asc' ? local : -local;
        };

        var items = list.filter(filterMediaItem).sort(browseMode === 'watchlist' ? sortByWatchlistAddedDate : sortMediaItem).map(function (item) {
          return VirtualDom.vDom(MediaItem, _extends({}, item, { watchlist: watchlist }));
        });

        return VirtualDom.vDom(
          'ul',
          { 'class': 'media-list' },
          items.length === 0 ? VirtualDom.vDom(
            'li',
            { 'class': 'media-item' },
            isWatchlist ? 'Your watchlist is empty!' : 'Loading...'
          ) : items
        );
      }
    }]);

    return MediaList;
  }(VirtualDom.Component);

  return MediaList;
});
//# sourceMappingURL=MediaList.js.map