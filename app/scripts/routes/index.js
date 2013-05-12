/* global Ember */
/* global Webportal */
'use strict';

Webportal.IndexRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set ('content', model);
  }
});
