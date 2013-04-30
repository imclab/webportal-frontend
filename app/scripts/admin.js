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

    var admin;

    admin = {
        init : function () {
            datatablesGetdata.init({
                'tableId' : '#mainTable',
                'ajaxSource' : 'web/adminshoplist'
            });
            user.init();
        }
    };

    return admin;

});
