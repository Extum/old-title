'use strict';

System.register('extum/flarum-ext-old-title/main', ['flarum/app'], function (_export, _context) {
    "use strict";

    var app, extend, Page;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {

            app.initializers.add('extum/flarum-ext-old-title', function () {
                extend(Page.prototype, 'init', function () {
                    $('head').prepend();
                });
            });
        }
    };
});
