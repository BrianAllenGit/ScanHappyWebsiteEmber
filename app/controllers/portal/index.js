import Ember from 'ember';

export default Ember.Controller.extend({

firebaseApp: Ember.inject.service(),
init: function (){
  	let controller = this;
    const storageRef = this.get('firebaseApp').storage();
    storageRef.ref('profileimages/'+this.get('session.currentUser.uid')).getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
	controller.set('logoUrl', url);
	
	}).catch(function(error) {
  
		alert(error);
	});
}
});
