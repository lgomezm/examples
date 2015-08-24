App.CustomerAdapter = DS.FixtureAdapter.extend({});

App.Customer = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr('int')
});

App.Customer.FIXTURES = [
  {
    id: 1,
    firstName: 'Luis',
    lastName: 'Gomez',
    age: 24
  },
  {
    id: 2,
    firstName: 'Elias',
    lastName: 'Oelo',
    age: 30
  }
];
