'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Basic Virtual Dom lib written by Miklos Megyes (https://github.com/CAPSLOCKUSER)
  Licence is WTFPL (http://www.wtfpl.net/)
*/

define(['lib/utils'], function (_ref) {
  var objectWithoutUndefined = _ref.objectWithoutUndefined;

  function vDom(type, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    var isChildrenInArray = children.length === 1 && Array.isArray(children[0]);

    return {
      type: type,
      props: props || {},
      children: isChildrenInArray ? children[0] : children
    };
  }

  function getVNodeType(vNode) {
    var type = typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode);
    switch (type) {
      case 'boolean':
      case 'string':
      case 'number':
      case 'undefined':
        return type;
      case 'object':
        if (vNode === null) {
          return 'null';
        }
        if (typeof vNode.type === 'function') {
          return 'component';
        }
        return 'element';
      default:
        return 'unsupported';
    }
  }

  var booleanProps = ['selected', 'disabled', 'checked'];

  function manifestElement(vNode) {
    var type = vNode.type;
    var props = vNode.props;
    var children = vNode.children;

    var $el = document.createElement(type);

    Object.keys(props).forEach(function (attr) {
      if (booleanProps.indexOf(attr) !== -1) {
        if (props[attr]) {
          $el.setAttribute(attr, attr);
        }
        return;
      }
      $el.setAttribute(attr, props[attr]);
    });

    children.forEach(function (vNodeChild) {
      var $new = vCreate(vNodeChild);
      $el.appendChild($new);
    });

    return $el;
  }

  function manifestComponent(vNode) {
    var props = vNode.props;
    var componentInstance = vNode.componentInstance;

    if (componentInstance.isMounted) {
      componentInstance.update(props, componentInstance.state);
    } else {
      componentInstance.mount();
    }
    return componentInstance.$dom;
  }

  function vCreate(vNode) {
    switch (getVNodeType(vNode)) {
      case 'boolean':
        return document.createTextNode(vNode ? 'true' : 'false');
      case 'string':
      case 'number':
        return document.createTextNode(vNode);
      case 'null':
        return document.createTextNode('');
      case 'undefined':
        console.error('this should not happen');
        return document.createTextNode('');
      case 'component':
        return manifestComponent(vNode);
      case 'element':
        return manifestElement(vNode);
      default:
        console.error(vNode);
        throw new Error('Unsupported vNode type');
    }
  }

  function isVNodeComponent(vNode) {
    return getVNodeType(vNode) === 'component';
  }

  function isVNodeElement(vNode) {
    return getVNodeType(vNode) === 'element';
  }

  function vConstructComponents(vNew, vOld) {
    if (isVNodeComponent(vNew)) {
      if (isVNodeComponent(vOld) && vNew.type === vOld.type) {
        vNew.componentInstance = vOld.componentInstance;
      } else {
        var _Component = vNew.type;
        vNew.componentInstance = new _Component(vNew.props);
        vNew.componentInstance.vTree = vNew;
      }
    }
    if (isVNodeElement(vNew)) {
      vNew.children.forEach(function (vChild, index) {
        var vTwin = isVNodeElement(vOld) ? vOld.children[index] : null;
        vConstructComponents(vChild, vTwin);
      });
    }
  }

  function vRender(vNode, vOld) {
    vConstructComponents(vNode, vOld);
    return vCreate(vNode);
  }

  var Component = function () {
    function Component(props) {
      _classCallCheck(this, Component);

      var defaultProps = Object.getPrototypeOf(this).constructor.defaultProps || {};
      this.props = _extends({}, defaultProps, objectWithoutUndefined(props));
      this.state = this.state || {};
      this.$dom = null;
      this.vTree = null;
      this.isMounted = false;
    }

    _createClass(Component, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {}
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return true;
      }
    }, {
      key: 'setState',
      value: function setState(data) {
        var newState = _extends({}, this.state, data);
        this.update(this.props, newState);
      }
    }, {
      key: 'update',
      value: function update(newProps, newState) {
        var shouldUpdate = this.shouldComponentUpdate(newProps, newState);
        this.props = newProps;
        this.state = newState;
        if (!shouldUpdate) return;

        var vNode = this.render();
        var $actual = vRender(vNode, this.vTree);
        this.vTree = vNode;

        this.$dom.parentNode.replaceChild($actual, this.$dom);
        this.$dom = $actual;

        this.componentDidUpdate();
      }
    }, {
      key: 'mount',
      value: function mount() {
        var vNode = this.render();
        this.$dom = vRender(vNode);
        this.vTree = vNode;
        this.isMounted = true;

        this.componentDidMount();
        this.componentDidUpdate();
      }
    }]);

    return Component;
  }();

  function register($node, vNode) {
    var $app = vRender(vNode);
    $node.appendChild($app);
  }

  return {
    vDom: vDom,
    Component: Component,
    register: register
  };
});
//# sourceMappingURL=virtual-dom.js.map