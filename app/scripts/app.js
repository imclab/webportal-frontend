/*global define */

define([
    'jquery',
    'views/admin',
    'views/auction',
    'views/login',
    'views/myauctions',
    'views/myitems',
    'helpers/datatables.bootstrap',
    'helpers/datatables.numericsort'
], function (
    $,
    admin,
    auction,
    login,
    myAuctions,
    myItems
) {

    'use strict';

    var app = {
        init : function () {
            var location = this.getLocation();
            console.log(location);

            switch (location) {
            case 'admin':
                admin.init();
                break;
            case 'auction':
                auction.init();
                break;
            case 'login' :
            case '' :
                login.init();
                break;
            case 'myauctions' :
                myAuctions.init();
                break;
            case 'myitems' :
                myItems.init();
                break;
            }
        },

        getLocation : function() {
            var location = window.location.pathname;
            location = location.substr(1);
            location = location.split('.');
            location = location[0];
            return location;
        },

    };

    return app;
});
