import Ember from 'ember';

export default Ember.Route.extend({
	  beforeModel() {
	  	alert(this.get('session.isAuthenticated'));
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('/');
    }
  }
});
