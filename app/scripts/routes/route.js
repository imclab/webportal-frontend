/* global Ember */
/* global Webportal */
'use strict';

Webportal.Router.map(function () {
  this.route('about');
  this.route('auctions');
  this.resource('auction', {
    path: '/auctions/:auction_id'
  });
  this.resource('user', {
    path: '/:user_name'
  }, function () {
    this.route('items');
    this.route('auctions');
    this.route('mail');
    this.route('sign');
  });
  this.route('shop');
});
