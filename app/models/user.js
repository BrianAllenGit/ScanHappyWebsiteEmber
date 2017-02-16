import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  payment: DS.attr('string'),
  phone: DS.attr('string'),
  uid: DS.attr('string')
});
