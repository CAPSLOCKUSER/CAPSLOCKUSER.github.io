'use strict';

define(['constants'], function (_ref) {
  var ACTION_TYPES = _ref.ACTION_TYPES;

  function setPollInterval(pollingInterval) {
    return {
      type: ACTION_TYPES.SET_POLL_INTERVAL,
      pollingInterval: pollingInterval
    };
  }

  return {
    setPollInterval: setPollInterval
  };
});
//# sourceMappingURL=options.js.map