"use strict";

define(function () {

  function create(reducer, saveState) {
    var state = void 0;
    var listeners = [];

    var getState = function getState() {
      return state;
    };

    var dispatch = function dispatch(action) {
      state = reducer(state, action);
      saveState(state);
      listeners.forEach(function (listener) {
        return listener();
      });
    };

    var subscribe = function subscribe(listener) {
      listeners.push(listener);
      return function () {
        listeners = listeners.filter(function (l) {
          return l !== listener;
        });
      };
    };

    dispatch({});

    return { getState: getState, dispatch: dispatch, subscribe: subscribe };
  }

  return {
    create: create
  };
});
//# sourceMappingURL=storage.js.map