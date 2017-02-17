import DS from 'ember-data';

export default DS.Model.extend({
  receiptid: DS.attr('string'),
  storeid: DS.attr('string'),
  storename: DS.attr('string'),
  timestampcreated: DS.attr('number'),
  total: DS.attr('number'),
  userid: DS.attr('string')
});
