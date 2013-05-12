/* global DS */
/* global Webportal */
'use strict';

Webportal.Auction = DS.Model.extend({
  itemNumber: DS.attr('string'),
  seller: DS.attr('string'),
  expires: DS.attr('date'),
  quantity: DS.attr('number'),
  price: DS.attr('number'),
  enchants: DS.attr('string'),
  durability: DS.attr('string')
});
