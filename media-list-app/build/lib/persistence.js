'use strict';

define(['constants'], function (_ref) {
  var STORAGE_ID = _ref.STORAGE_ID;

  function getInitialState() {
    try {
      var data = localStorage.getItem(STORAGE_ID) || '{}';
      return JSON.parse(data);
    } catch (error) {
      console.error('error while read localStorage', error);
      return {};
    }
  }

  function saveState() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    try {
      localStorage.setItem(STORAGE_ID, JSON.stringify(state));
    } catch (error) {
      console.error('localStorage save failed (safari private mode, eh?)', error);
    }
  }

  return {
    getInitialState: getInitialState,
    saveState: saveState
  };
});
//# sourceMappingURL=persistence.js.map