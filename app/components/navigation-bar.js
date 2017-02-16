import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement () {
	 buildUi();
  },
  actions: {
   signOut() {
     alert('hello!');
   }
  }
});