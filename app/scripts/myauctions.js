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

    var myAuctions;

    myAuctions = {
        init : function () {
            datatablesGetdata.init({
                'tableId' : '#myAuctions',
                'ajaxSource' : 'fill/myauctions'
            });
        }
    };

    return myAuctions;

});
