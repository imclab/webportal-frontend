/*global define */

define([
    'jquery',
    'translate',
    'helpers/datatables.getdata',
    'views/user',
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
