App.ArticleAdapter = DS.FixtureAdapter.extend({});

App.Article = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  comments: DS.hasMany('comment', { async: true })
});

App.Article.FIXTURES = [
  {
    id: 1,
    title: 'Getting started with Ember',
    body: 'This is the getting started guide for Ember js',
    comments: [1]
  },
  {
    id: 2,
    title: 'Some Ember advanced stuff',
    body: 'This is some serious advanced topic of Ember',
    comments: [2, 3]
  }
];
