/*global define */

define(['jquery',
'admin',
'auction',
'info',
'login',
'myauctions',
'myitems'],
function ($, admin, auction, info, login, myAuctions, myItems) {
    'use strict';

    var app = {
        init : function () {
            var location = this.location;
            switch (location) {
                case 'admin':
                    admin.init();
                    break;
                case 'auction':
                    auction.init();
                    break;
                case 'info' :
                    info.init();
                    break;
                case 'login' :
                    login.init();
                    break;
                case 'myAuctions' :
                    myAuctions.init();
                    break;
                case 'myItems' :
                    myItems();
                    break;
            }
        },

        location : function() {
            $(location).attr('pathname');
        }

    };

    return app;
});
