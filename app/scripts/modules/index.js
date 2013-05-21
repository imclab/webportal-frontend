/* global Ember */
/* global Webportal */
'use strict';

Webportal.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo('auctions');
  }
});
