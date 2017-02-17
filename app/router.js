import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('sign-up');
  this.authenticatedRoute('portal', function() {
  	this.authenticatedRoute('index', {path : '/'});
  	this.authenticatedRoute('about');
  	this.authenticatedRoute('receipts', function() {
        this.authenticatedRoute('show', {path : '/:receipt_id'});
  	});
  });
});

export default Router;
