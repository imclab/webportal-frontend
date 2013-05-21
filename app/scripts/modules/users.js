/* global Ember */
/* global Webportal */
'use strict';

Webportal.UsersRoute = Ember.Route.extend({
  model: function () {
    return Webportal.User.find();
  }
});