/* global DS */
/* global Webportal */
'use strict';

// Webportal.Auction = DS.Model.extend({
//   itemNumber: DS.attr('string'),
//   seller: DS.attr('string'),
//   expires: DS.attr('date'),
//   quantity: DS.attr('number'),
//   price: DS.attr('number'),
//   enchants: DS.attr('string'),
//   durability: DS.attr('string')
// });

Webportal.Auction = DS.Model.extend({
	name: DS.attr('string'),
	damage: DS.attr('number'),
	player: DS.attr('string'),
	quantity: DS.attr('number'),
	price: DS.attr('number'),
	created: DS.attr('date'),
	allowBids: DS.attr('number'),
	currentBid: DS.attr('number'),
	currentWinner: DS.attr('string'),
	ench: DS.attr('number'),
	tableid: DS.attr('number'),
	type: DS.attr('string'),
	itemname: DS.attr('string'),
	searchtype: DS.attr('string')
});
