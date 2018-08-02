var gulp = require('flarum-gulp');

gulp({
  modules: {
    'extum/flarum-ext-old-title': [
      'src/**/*.js',
    ]
  }
});
