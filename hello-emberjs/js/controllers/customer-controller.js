App.CustomerController = Ember.ArrayController.extend({
  firstName: 'Luis',
  lastName: 'Gomez',
  actions: {
    alertCustomer: function() {
      var customer = this.get('firstName') + ' ' + this.get('lastName');
      alert('The customer is ' + customer);
    },
    modifyCustomer: function() {
      this.set('firstName', 'Elias');
      this.set('lastName', 'Oelo');
      var customer = this.get('firstName') + ' ' + this.get('lastName');
      alert('The new customer is ' + customer);
    }
  },
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
