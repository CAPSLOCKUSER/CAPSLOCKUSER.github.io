'use strict';

define(['lib/storage', 'lib/persistence', 'reducers/reducer'], function (Storage, _ref, reducer) {
  var getInitialState = _ref.getInitialState;
  var saveState = _ref.saveState;


  var store = Storage.create(reducer(getInitialState), saveState);

  return store;
});
//# sourceMappingURL=store.js.map