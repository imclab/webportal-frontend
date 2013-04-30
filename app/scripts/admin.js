/*global define */

define([
    'jquery',
    'translate',
    'helpers/datatables.getdata',
    'helpers/datatables.config'
], function (
    $,
    translate,
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
        }
    };

    return admin;

});
