App.CommentAdapter = DS.FixtureAdapter.extend({});

App.Comment = DS.Model.extend({
  text: DS.attr('string'),
  article: DS.belongsTo('article')
});

App.Comment.FIXTURES = [
  {
    id: 1,
    text: 'Great introduction, man.',
    article: 1
  },
  {
    id: 2,
    text: 'It seemed easier than expected, thanks',
    article: 2
  },
  {
    id: 3,
    text: 'Really useful, Ember is awesome',
    article: 2
  }
];
