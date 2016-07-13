'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

define(['constants', 'lib/utils'], function (_ref, _ref2) {
  var at = _ref.ACTION_TYPES;
  var filterFromArrayByID = _ref2.filterFromArrayByID;


  return function (getInitialState) {
    return function () {
      var state = arguments.length <= 0 || arguments[0] === undefined ? getInitialState() : arguments[0];
      var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ret = function () {
        switch (action.type) {
          case at.SET_BROWSE_MODE:
            return {
              v: _extends({}, state, {
                browseMode: action.browseMode
              })
            };

          case at.UPDATE_MEDIA_LIST:
            var availableIDs = action.list.map(function (_ref3) {
              var id = _ref3.id;
              return id;
            });
            var watchlist = (state.watchlist || []).filter(function (_ref4) {
              var id = _ref4.id;
              return availableIDs.indexOf(id) !== -1;
            });
            return {
              v: _extends({}, state, {
                list: action.list,
                watchlist: watchlist
              })
            };

          case at.FILTER:
            return {
              v: _extends({}, state, {
                filter: action.filter
              })
            };

          case at.SORT:
            return {
              v: _extends({}, state, {
                sortBy: action.sortBy,
                sortDirection: action.sortDirection
              })
            };

          case at.ADD_TO_WATCHLIST:
            var filteredWatchlist = filterFromArrayByID(state.watchlist || [], action.id);
            return {
              v: _extends({}, state, {
                watchlist: filteredWatchlist.concat([{ id: action.id, date: action.date }])
              })
            };

          case at.REMOVE_FROM_WATCHLIST:
            return {
              v: _extends({}, state, {
                watchlist: filterFromArrayByID(state.watchlist || [], action.id)
              })
            };

          case at.SET_POLL_INTERVAL:
            return {
              v: _extends({}, state, {
                pollingInterval: action.pollingInterval
              })
            };

          default:
            return {
              v: state
            };
        }
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    };
  };
});
//# sourceMappingURL=reducer.js.map