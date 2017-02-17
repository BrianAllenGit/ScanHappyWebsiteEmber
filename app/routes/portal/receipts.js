import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.query('receipt', {orderBy: 'userid', equalTo: this.get('session.currentUser.uid') });
	}
});
