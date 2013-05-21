/* global Ember */
/* global Webportal */
'use strict';

Webportal.AuctionsRoute = Ember.Route.extend({
  model: function () {
    return Webportal.Auction.find();
  }
});