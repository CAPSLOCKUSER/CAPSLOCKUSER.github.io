'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['lib/virtual-dom', 'api', 'components/MediaList', 'components/ErrorMessage', 'stores/store', 'actions/media-list', 'lib/utils', 'constants'], function (VirtualDom, _ref, MediaList, ErrorMessage, Store, _ref2, _ref3, _ref4) {
  var poll = _ref.poll;
  var addToMediaList = _ref2.addToMediaList;
  var objectWithoutUndefined = _ref3.objectWithoutUndefined;
  var DEFAULT_POLLING = _ref4.DEFAULT_POLLING;

  var MediaHolder = function (_VirtualDom$Component) {
    _inherits(MediaHolder, _VirtualDom$Component);

    function MediaHolder(props) {
      _classCallCheck(this, MediaHolder);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediaHolder).call(this, props));

      _this.pollMediaList = function () {
        poll(_this.props.url).then(function (list) {
          console.log('ajax success', list.length);
          Store.dispatch(addToMediaList(list));
        }).catch(function (error) {
          console.error('Error at polling:', error);
          ErrorMessage.showMessage('Polling error. Will continue.');
        }).then(function () {
          setTimeout(function () {
            return _this.pollMediaList(_this.props.url);
          }, _this.state.pollingInterval);
        });
      };

      _this.state = _extends({
        list: [],
        filter: 'none',
        sortBy: 'id',
        sortDirection: 'asc',
        watchlist: [],
        pollingInterval: DEFAULT_POLLING
      }, objectWithoutUndefined(props.appState));
      return _this;
    }

    _createClass(MediaHolder, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        Store.subscribe(function () {
          _this2.setState(Store.getState());
        });

        this.pollMediaList();
      }
    }, {
      key: 'render',
      value: function render() {
        return VirtualDom.vDom(
          'div',
          null,
          VirtualDom.vDom(MediaList, this.state)
        );
      }
    }]);

    return MediaHolder;
  }(VirtualDom.Component);

  return MediaHolder;
});
//# sourceMappingURL=MediaHolder.js.map