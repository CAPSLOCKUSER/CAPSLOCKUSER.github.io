'use strict';

define(['jquery', 'lib/utils'], function ($, _ref) {
  var validateObject = _ref.validateObject;


  function isResponseInCorrectShape(data) {
    return Array.isArray(data);
  }

  var validator = validateObject({
    id: 'number',
    type: 'string',
    isLive: 'boolean',
    title: 'string',
    description: 'string',
    viewers: 'number',
    picture: 'string',
    location: {
      country: 'string',
      city: 'string',
      coordinates: { latitude: 'number', longitude: 'number' }
    },
    labels: ['string']
  });

  function poll(url) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: url,
        dataType: 'jsonp',
        timeout: 5000
      }).then(function (data) {
        if (!isResponseInCorrectShape(data)) {
          reject('Server response is not an array');
          return;
        }
        var correctList = data.filter(validator);
        resolve(correctList);
      }, reject);
    });
  }

  return {
    poll: poll
  };
});
//# sourceMappingURL=api.js.map