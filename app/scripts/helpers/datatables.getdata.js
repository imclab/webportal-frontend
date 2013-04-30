/*global define */

define(['jquery', 'translate'], function ($, translate) {
    'use strict';

    var datatablesGetdata;

    datatablesGetdata = {
        init : function(options) {
            this.oTable(options.tableId, options.ajaxSource);
        },

        oTable : function(tableId, ajaxSource) {
            var self = this;

            return $(tableId).dataTable({
                'bProcessing': true,
                //'bJQueryUI': true,
                'bStateSave': false,
                'bDestroy': true,
                'oSearch': { 'sSearch': '' },
                //'sPaginationType': 'full_numbers',
                'bServerSide': true,
                'sAjaxSource': ajaxSource,
                'oLanguage': {
                    'sProcessing': translate.sProcessing,
                    'sLengthMenu': translate.sLengthMenu,
                    'sZeroRecords': translate.sZeroRecords,
                    'sInfo': translate.sInfo,
                    'sInfoEmpty': translate.sInfoEmpty,
                    'sInfoFiltered': translate.sInfoFiltered,
                    'sSearch': translate.sSearch,
                    'sInfoPostFix': '',
                    'sUrl': '',
                    'oPaginate': {
                        'sFirst': translate.sFirst,
                        'sPrevious': translate.sPrevious,
                        'sNext': translate.sNext,
                        'sLast': translate.sLast
                    }
                },
                'fnServerData': function ( sSource, aoData, fnCallback ) {
                    $.ajax({
                        'dataType': 'json',
                        'type': 'GET',
                        'url': sSource,
                        'data': aoData,
                        'timeout': 15000
                    })
                    .done(fnCallback)
                    .fail(self.handleAjaxError);
                }
            });
        },

        handleAjaxError : function( xhr, textStatus) {
            if ( textStatus === 'timeout' ) {
                console.log( 'The server took too long to send the data.' );
            }
            else {
                console.log( 'An error occurred on the server. Please try again in a minute.' );
            }
            this.oTable.fnProcessingIndicator( false );
        }
    };

    return datatablesGetdata;

});
