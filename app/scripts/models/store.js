/*global DS */
/*global Webportal */
'use strict';

Webportal.Store = DS.Store.extend({
	revision: 12,
	adapter: 'Webportal.LSAdapter'
});

Webportal.LSAdapter = DS.LSAdapter.extend({
	namespace: 'webportal'
});