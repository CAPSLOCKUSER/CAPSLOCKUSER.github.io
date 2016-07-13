'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

define(function () {
  function mirror(obj) {
    return Object.keys(obj).reduce(function (prev, curr) {
      return _extends({}, prev, _defineProperty({}, curr, curr));
    }, {});
  }

  function filterFromArrayByID(array, id) {
    return array.filter(function (_ref) {
      var otherID = _ref.id;
      return otherID !== id;
    });
  }

  function objectWithoutUndefined(obj) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
      if (typeof obj[key] !== 'undefined') {
        result[key] = obj[key];
      }
    });
    return result;
  }

  function firstLetterUppercase(word) {
    if (word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  }

  function capitalize(text) {
    if (text.length === 0) return text;
    return text.split(' ').map(firstLetterUppercase).join(' ');
  }

  function humanize(text) {
    if (text.length === 0) return text;
    return text.split('-').map(capitalize).join(' ');
  }

  function formatNumber(number) {
    var chars = number.toString().split('');
    var mirrorIndex = chars.length - 1;
    return chars.reduceRight(function (prev, curr, index) {
      return (index - mirrorIndex) % 3 === 0 ? curr + ',' + prev : '' + curr + prev;
    });
  }

  var validateObject = function validateObject(schema) {
    return function (object) {
      return Object.keys(schema).every(function (key) {
        if (_typeof(schema[key]) === 'object') {
          if (_typeof(schema[key]) !== _typeof(object[key])) {
            return false;
          }
          return validateObject(schema[key])(object[key] || {});
        } else {
          return _typeof(object[key]) === schema[key];
        }
      });
    };
  };

  return {
    mirror: mirror,
    filterFromArrayByID: filterFromArrayByID,
    objectWithoutUndefined: objectWithoutUndefined,
    firstLetterUppercase: firstLetterUppercase,
    capitalize: capitalize,
    humanize: humanize,
    formatNumber: formatNumber,
    validateObject: validateObject
  };
});
//# sourceMappingURL=utils.js.map