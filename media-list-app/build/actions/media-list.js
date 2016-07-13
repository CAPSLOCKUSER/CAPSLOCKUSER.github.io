'use strict';

define(['constants'], function (_ref) {
  var ACTION_TYPES = _ref.ACTION_TYPES;

  function addToMediaList(list) {
    return {
      type: ACTION_TYPES.UPDATE_MEDIA_LIST,
      list: list
    };
  }

  function filterMediaList(filter) {
    return {
      type: ACTION_TYPES.FILTER,
      filter: filter
    };
  }

  function sortMediaList(sortBy, sortDirection) {
    return {
      type: ACTION_TYPES.SORT,
      sortBy: sortBy,
      sortDirection: sortDirection
    };
  }

  function setToNormalBrowse() {
    return {
      type: ACTION_TYPES.SET_BROWSE_MODE,
      browseMode: 'normal'
    };
  }

  function setToWatchlist() {
    return {
      type: ACTION_TYPES.SET_BROWSE_MODE,
      browseMode: 'watchlist'
    };
  }

  return {
    addToMediaList: addToMediaList,
    filterMediaList: filterMediaList,
    sortMediaList: sortMediaList,
    setToNormalBrowse: setToNormalBrowse,
    setToWatchlist: setToWatchlist
  };
});
//# sourceMappingURL=media-list.js.map