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

    var myAuctions;

    myAuctions = {
        init : function () {
            datatablesGetdata.init({
                'tableId' : '#myAuctions',
                'ajaxSource' : 'fill/myauctions'
            });
            user.init();
        }
    };

    return myAuctions;

});
