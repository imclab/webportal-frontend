/*global DS */
/*global Webportal */
'use strict';

Webportal.Store = DS.Store.extend({
	revision: 12,
	//adapter: 'Webportal.LSAdapter'
	adapter: DS.RESTAdapter.create({
		bulkCommit: true,
		url: '/api/v1/index.php'
	}),
    mappings: {
      auction: Webportal.Auction,
      user: Webportal.User
    },
    plurals: {
		auction: 'auctions',
		user: 'users'
	}
});

// Webportal.LSAdapter = DS.LSAdapter.extend({
// 	namespace: 'webportal'
// });

// DS.RESTAdapter.reopen({
//   url: '/api/index.php'
// });
