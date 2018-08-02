'use strict';

System.register('extum/flarum-ext-old-title/main', ['flarum/app'], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {

      app.initializers.add('extum/flarum-ext-old-title', function () {
        //console.log('Hello, admin!');
      });
    }
  };
});
