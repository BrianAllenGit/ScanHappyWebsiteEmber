import Ember from 'ember';

export default Ember.Component.extend({
	    router: Ember.inject.service('-routing'), 

  actions: {
   signOut() {
    	this.get('session').close();
 		this.get('router').transitionTo('index');  
 	}	
  }
});



