'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['jquery', 'lib/virtual-dom', 'stores/store', 'actions/media-list', 'constants', 'lib/utils'], function ($, VirtualDom, Store, _ref, _ref2, _ref3) {
  var filterMediaList = _ref.filterMediaList;
  var FILTER_TYPES = _ref2.FILTER_TYPES;
  var humanize = _ref3.humanize;

  var Filter = function (_VirtualDom$Component) {
    _inherits(Filter, _VirtualDom$Component);

    function Filter() {
      _classCallCheck(this, Filter);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Filter).apply(this, arguments));
    }

    _createClass(Filter, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        $(this.$dom).on('change', function (event) {
          var value = $(event.currentTarget).find('input:checked').val();
          Store.dispatch(filterMediaList(value));
        });
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var radios = FILTER_TYPES.map(function (value) {
          return VirtualDom.vDom(
            'div',
            { 'class': 'filter-option' },
            VirtualDom.vDom('input', {
              type: 'radio',
              name: 'content-filter',
              value: value,
              checked: _this2.props.filter === value,
              id: 'filter-' + value
            }),
            VirtualDom.vDom(
              'label',
              { 'for': 'filter-' + value },
              humanize(value)
            )
          );
        });
        return VirtualDom.vDom(
          'form',
          null,
          VirtualDom.vDom(
            'h3',
            null,
            'Filter'
          ),
          VirtualDom.vDom(
            'div',
            { 'class': 'horizontal-group radio-group' },
            radios
          )
        );
      }
    }]);

    return Filter;
  }(VirtualDom.Component);

  Filter.defaultProps = {
    filter: 'none'
  };


  return Filter;
});
//# sourceMappingURL=Filter.js.map