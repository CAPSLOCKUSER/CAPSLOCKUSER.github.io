'use strict';

define(['lib/utils'], function (_ref) {
  var mirror = _ref.mirror;

  var SORTABLE_PROPERTIES = ['id', 'title', 'description', 'viewers'];
  var FILTER_TYPES = ['none', 'live-channel', 'offline-channel', 'video'];
  var ACTION_TYPES = mirror({
    'SET_BROWSE_MODE': null,
    'UPDATE_MEDIA_LIST': null,
    'FILTER': null,
    'SORT': null,
    'ADD_TO_WATCHLIST': null,
    'REMOVE_FROM_WATCHLIST': null,
    'SET_POLL_INTERVAL': null
  });
  var STORAGE_ID = 'MEDIA_LIST_APP_STORAGE_2332323422as34';
  var POLLING_OPTION = [{ interval: 1500, name: 'Very fast' }, { interval: 3000, name: 'Fast' }, { interval: 6000, name: 'Normal' }, { interval: 12000, name: 'Slow' }];
  var DEFAULT_POLLING = 6000;

  return {
    SORTABLE_PROPERTIES: SORTABLE_PROPERTIES,
    FILTER_TYPES: FILTER_TYPES,
    ACTION_TYPES: ACTION_TYPES,
    STORAGE_ID: STORAGE_ID,
    POLLING_OPTION: POLLING_OPTION,
    DEFAULT_POLLING: DEFAULT_POLLING
  };
});
//# sourceMappingURL=constants.js.map