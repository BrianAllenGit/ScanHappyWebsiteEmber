import Ember from 'ember';

export default Ember.Controller.extend({  
		 	beforeModel() {
    this.get('session').fetch().catch((error) => {
      alert(error);
    });
}
});