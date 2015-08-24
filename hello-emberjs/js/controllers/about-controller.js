App.AboutController = Ember.ObjectController.extend({
  needs: ['index'],
  actions: {
    titleClick: function() {
      alert('Hello from controller');
    },
    handleSubmit: function() {
      alert(this.get('message'));
    },

    callIndexController: function() {
      this.get('controllers.index').send('popup');
    },
    popup: function() {
      alert('Popup from About controller');
    }
  },
  other: 'None'
});
