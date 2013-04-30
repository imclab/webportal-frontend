/*global define */

define([
    'jquery',
    'translate',
    'views/user',
    'helpers/datatables.getdata',
    'helpers/datatables.config'
], function (
    $,
    translate,
    user,
    datatablesGetdata
) {
    'use strict';

    var myItems;

    myItems = {
        init: function () {
            datatablesGetdata.init({
                'tableId' : '#myItems',
                'ajaxSource' : 'fill/myitems'
            });
            user.init();
        }
    };

    return myItems;

});
