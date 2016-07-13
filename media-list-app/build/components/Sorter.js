'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['jquery', 'constants', 'lib/virtual-dom', 'stores/store', 'actions/media-list', 'lib/utils'], function ($, _ref, VirtualDom, Store, _ref2, _ref3) {
  var SORTABLE_PROPERTIES = _ref.SORTABLE_PROPERTIES;
  var sortMediaList = _ref2.sortMediaList;
  var capitalize = _ref3.capitalize;

  var Sorter = function (_VirtualDom$Component) {
    _inherits(Sorter, _VirtualDom$Component);

    function Sorter() {
      _classCallCheck(this, Sorter);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Sorter).apply(this, arguments));
    }

    _createClass(Sorter, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var $this = $(this.$dom);
        $this.on('change', function () {
          var sortBy = $this.find('#sort-property').val();
          var sortDirection = $this.find('[name="sort-direction"]:checked').val();
          Store.dispatch(sortMediaList(sortBy, sortDirection));
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
        var _props = this.props;
        var sortBy = _props.sortBy;
        var sortDirection = _props.sortDirection;

        var options = SORTABLE_PROPERTIES.map(function (item) {
          return VirtualDom.vDom(
            'option',
            { value: item, selected: sortBy === item },
            item.length <= 2 ? item.toUpperCase() : capitalize(item)
          );
        });
        return VirtualDom.vDom(
          'form',
          null,
          VirtualDom.vDom(
            'h3',
            null,
            'Sort'
          ),
          VirtualDom.vDom(
            'select',
            { name: 'sort-property', id: 'sort-property' },
            options
          ),
          VirtualDom.vDom(
            'div',
            { 'class': 'sort-direction' },
            VirtualDom.vDom(
              'label',
              null,
              VirtualDom.vDom('input', {
                type: 'radio',
                name: 'sort-direction',
                value: 'asc',
                checked: sortDirection === 'asc'
              }),
              VirtualDom.vDom('i', { 'class': 'fa fa-chevron-up', 'aria-hidden': 'true' })
            ),
            VirtualDom.vDom(
              'label',
              null,
              VirtualDom.vDom('input', {
                type: 'radio',
                name: 'sort-direction',
                value: 'desc',
                checked: sortDirection === 'desc'
              }),
              VirtualDom.vDom('i', { 'class': 'fa fa-chevron-down', 'aria-hidden': 'true' })
            )
          )
        );
      }
    }]);

    return Sorter;
  }(VirtualDom.Component);

  Sorter.defaultProps = {
    sortBy: 'id',
    sortDirection: 'asc'
  };


  return Sorter;
});
//# sourceMappingURL=Sorter.js.map