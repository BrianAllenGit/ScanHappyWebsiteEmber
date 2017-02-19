import Ember from 'ember';

export default Ember.Controller.extend({
	actions : {
		updateNameInformation (param){
			this.store.findRecord('user',this.get('session.currentUser.uid')).then(function(user){
				user.set("name", param);
				user.save();
			});		
		},
		updateEmailInformation (param){
			this.store.findRecord('user',this.get('session.currentUser.uid')).then(function(user){
				user.set("email", param);
				user.save();
			});		
		},
		updatePaymentInformation (param){
			this.store.findRecord('user',this.get('session.currentUser.uid')).then(function(user){
				user.set("payment", param);
				user.save();
			});		
		},
		updatePhoneInformation (param){
			this.store.findRecord('user',this.get('session.currentUser.uid')).then(function(user){
				user.set("phone", param);
				user.save();
			});		
		},
		updateAddressInformation (param){
			this.store.findRecord('user',this.get('session.currentUser.uid')).then(function(user){
				user.set("address", param);
				user.save();
			});		
		},
	}
});
