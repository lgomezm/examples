window.App = Ember.Application.create();

Ember.Handlebars.helper('makeShorter', function(value, options) {
  return value.substr(0, 5);
});
