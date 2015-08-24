App.Router.map(function() {
	this.route('index', { path: '/' });
	this.route('about', { path: '/about' });
	this.route('about2', { path: '/about2' });
	this.route('customer', { path: '/customer' });
	this.route('blog', { path: '/blog' });
	this.route('article', { path: '/articles/:article_id' });
});

App.IndexRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('index-temp');
	},
	model: function() {
		return ['red', 'yellow', 'blue'];
	}
});

App.AboutRoute = Ember.Route.extend({
	model: function() {
    return {
      email: 'hello@world.com',
      phone: '555-55555',
      address: 'Hello St. 123'
    };
  }
});

App.About2Route = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('about');
	}
});

App.CustomerRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('customer');
	}
});

App.BlogRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('article');
	},
	setupController: function(controller, model) {
		controller.set('owner', 'Luis Gomez');
		controller.set('model', model);
	}
});
