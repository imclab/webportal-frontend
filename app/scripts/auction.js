/*global define */

define(['jquery','datatables'], function ($) {
    'use strict';

    $(document).ready(function () {

        $(function () {
            $('#tabs').tabs({
                load: function(event, ui) {  },
                ajaxOptions: {
                    error: function (xhr, status, index, anchor) {
                        $(anchor.hash).html("Couldn't load this tab.");
                    }
                }
            });
        });

        jQuery.fn.dataTableExt.oApi.fnProcessingIndicator = function ( oSettings, onoff ) {
            if ( typeof( onoff ) == 'undefined' ) {
                onoff = true;
            }
            this.oApi._fnProcessingDisplay( oSettings, onoff );
        };
    });
});