import app from 'flarum/app';
import {extend} from 'flarum/extend';
import Page from 'flarum/components/Page';

app.initializers.add('extum/flarum-ext-old-title', () => {
    extend(Page.prototype, 'init', function () {
        $('head').prepend();
    });
});
