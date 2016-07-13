'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['lib/virtual-dom', 'components/WatchlistButton', 'lib/utils'], function (VirtualDom, WatchlistButton, _ref) {
  var formatNumber = _ref.formatNumber;

  var MediaItem = function (_VirtualDom$Component) {
    _inherits(MediaItem, _VirtualDom$Component);

    function MediaItem() {
      _classCallCheck(this, MediaItem);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(MediaItem).apply(this, arguments));
    }

    _createClass(MediaItem, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var id = _props.id;
        var title = _props.title;
        var description = _props.description;
        var viewers = _props.viewers;
        var isLive = _props.isLive;
        var watchlist = _props.watchlist;
        var location = _props.location;
        var labels = _props.labels;

        if (!location) {
          console.error('what is this');
          debugger;
        }
        var city = location.city;
        var country = location.country;

        var isAdded = !!watchlist.find(function (_ref2) {
          var other = _ref2.id;
          return id === other;
        });
        return VirtualDom.vDom(
          'li',
          { 'class': 'media-item' },
          VirtualDom.vDom(
            'h3',
            null,
            title
          ),
          VirtualDom.vDom(
            'p',
            { 'class': 'description' },
            description
          ),
          isLive ? VirtualDom.vDom(
            'p',
            { 'class': 'ribbon' },
            VirtualDom.vDom(
              'span',
              null,
              VirtualDom.vDom('i', { 'class': 'fa fa-video-camera', 'aria-hidden': 'true' }),
              'Live'
            )
          ) : null,
          VirtualDom.vDom(
            'div',
            { 'class': 'clearfix' },
            VirtualDom.vDom(
              'p',
              { 'class': 'location alignleft' },
              VirtualDom.vDom('i', { 'class': 'fa fa-map-marker', 'aria-hidden': 'true' }),
              city + ', ' + country
            ),
            VirtualDom.vDom(
              'p',
              { 'class': 'viewers alignright' },
              VirtualDom.vDom('i', { 'class': 'fa fa-eye', 'aria-hidden': 'true' }),
              formatNumber(viewers)
            )
          ),
          VirtualDom.vDom(
            'div',
            { 'class': 'clearfix' },
            VirtualDom.vDom(
              'p',
              { 'class': 'tags alignleft' },
              labels.join(', ')
            ),
            VirtualDom.vDom(WatchlistButton, { 'class': 'alignright', id: id, isAdded: isAdded })
          )
        );
      }
    }]);

    return MediaItem;
  }(VirtualDom.Component);

  MediaItem.defaultProps = {
    title: ''
  };


  return MediaItem;
});
//# sourceMappingURL=MediaItem.js.map