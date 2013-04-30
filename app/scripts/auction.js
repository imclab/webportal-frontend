/*global define */

define([
    'jquery',
    'translate',
    'helpers/datatables.getdata',
    'helpers/datatables.config',
    'views/table',
    'bootstrap'
], function (
    $,
    translate,
    datatablesGetdata
) {
    'use strict';

    var auction;

    auction = {
        init : function() {
            this.bindEvent();
        },

        bindEvent : function() {
            $('a[data-toggle="tab"]').on('shown', function (e) {
                var currentTab = e.target.href;
                currentTab = currentTab.split('#');
                currentTab = currentTab[1];

                datatablesGetdata.init({
                    ajaxSource : 'fill/auction/by' + currentTab,
                    tableId : '#' + currentTab +'Table'
                });

            });
        },

    };

    return auction;

});
