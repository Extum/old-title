import app from 'flarum/app';

app.initializers.add('extum/flarum-ext-old-title', () => {
  $('head').prepend('<style>article.DiscussionRenamedPost span[title]::before{display:block;content:attr(title)}</style>')
});
