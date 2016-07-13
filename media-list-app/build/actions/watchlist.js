'use strict';

define(['constants'], function (_ref) {
  var ACTION_TYPES = _ref.ACTION_TYPES;

  function addToWatchlist(id) {
    return {
      type: ACTION_TYPES.ADD_TO_WATCHLIST,
      date: new Date().getTime(),
      id: id
    };
  }

  function removeFromWatchlist(id) {
    return {
      type: ACTION_TYPES.REMOVE_FROM_WATCHLIST,
      id: id
    };
  }

  return {
    addToWatchlist: addToWatchlist,
    removeFromWatchlist: removeFromWatchlist
  };
});
//# sourceMappingURL=watchlist.js.map