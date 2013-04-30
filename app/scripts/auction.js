/*global define */

define([
    'jquery',
    'translate',
    'helpers/datatables.extend',
    'views/table',
    'datatables'
], function (
    $,
    translate,
    datatablesExtend
) {
    'use strict';

    var auction;

    $.fn.dataTableExt.oApi.fnProcessingIndicator = function ( oSettings, onoff ) {
        if ( typeof( onoff ) === 'undefined' ) {
            onoff = true;
        }
        this.oApi._fnProcessingDisplay( oSettings, onoff );
    };

    auction = {
        init : function() {
            this.bindEvent();
        },

        bindEvent : function() {
            $('a[data-toggle="tab"]').on('shown', function (e) {
                var currentTab = e.target.href;
                currentTab = currentTab.split('#');
                currentTab = currentTab[1];

                datatablesExtend.init(currentTab);

            });
        },

    };

    return auction;

});
