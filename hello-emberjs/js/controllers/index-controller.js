App.IndexController = Ember.ArrayController.extend({
  needs: ['about'],
  firstName: 'Luis',
  lastName: 'Gomez',
  fullName: '',
  updateFullName: function() {
    var fullName = this.get('firstName') + ' ' + this.get('lastName');
    this.set('fullName', fullName);
  }.observes('firstName', 'lastName'),

  actions: {
		goToAbout: function(){
			this.transitionToRoute('about');
		},
    addNewColor: function() {
      this.model.pushObject('new color');
    },

    callAboutController: function() {
      this.get('controllers.about').send('popup');
    },
    popup: function() {
      alert('Popup from Index controller');
    }
	}
});
