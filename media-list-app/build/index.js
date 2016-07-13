'use strict';

require.config({
  paths: {
    'jquery': '../vendor/jquery-3.0.0.min'
  },
  map: {
    '*': { 'jquery': 'jquery-private' },
    'jquery-private': { 'jquery': 'jquery' }
  }
});

require(['lib/virtual-dom', 'components/App'], function (VirtualDom, App) {
  var app = VirtualDom.vDom(App, { url: 'http://146.185.158.18/fake_api.php' });
  VirtualDom.register(document.body, app);
});
//# sourceMappingURL=index.js.map