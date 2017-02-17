import Ember from 'ember';

export default Ember.Route.extend({
		 model(){    
	 	return Ember.RSVP.hash({
	      user: this.store.query('user', {equalTo: this.get('session.currentUser.uid') }).then(function(items) {
	      	return items.get('firstObject');
	      })
	    });
	 },
	 setupController(controller, model) {
	    this._super(...arguments);
	    Ember.set(controller, 'user', model.user);
	    Ember.set(controller, 'receipt', model.receipt);
	  }
});
