import Ember from 'ember';

export default Ember.Controller.extend({

firebaseApp: Ember.inject.service(),
actions: {
  doSomething() {
    const storageRef = this.get('firebaseApp').storage();
    storageRef.ref('profileimages/tyOZmfA6pngbfiAd0H9Xlb4SA7C2.jpg').getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  debugger
	}).catch(function(error) {

	});
}
}
});
