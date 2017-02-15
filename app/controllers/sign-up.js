import Ember from 'ember';

export default Ember.Controller.extend({  
  firebaseApp: Ember.inject.service(),
  actions: {
      signUp() {
          const auth = this.get('firebaseApp').auth();
          auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).then((userResponse) => {
              alert(userResponse.uid);
        });
      }
  }
});