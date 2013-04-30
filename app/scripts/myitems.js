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

    var myItems;

    myItems = {
        init: function () {
            datatablesGetdata.init({
                'tableId' : '#myItems',
                'ajaxSource' : 'fill/myitems'
            });
        }
    };

    return myItems;

});
