import Ember from 'ember';

export default Ember.Route.extend({
	 model(){    
	 	return Ember.RSVP.hash({
	      user: this.store.query('user', {equalTo: this.get('session.currentUser.uid') }),
	      receipt: this.store.query('receipt', {orderBy: 'userid', equalTo: this.get('session.currentUser.uid') })
	    });
	 },
	 setupController(controller, model) {
	    this._super(...arguments);
	    Ember.set(controller, 'user', model.user);
	    Ember.set(controller, 'receipt', model.receipt);
	  }





	 //  function() {
  //   return this.store.query('user', {equalTo: this.get('session.currentUser.uid') });
  // },
  // function() {
  //   return this.store.query('receipt', {orderBy: 'userid', equalTo: this.get('session.currentUser.uid') });
  // }
});
