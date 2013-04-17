/*global define */

define(['jquery', 'translate', 'datatables'], function ($, translate) {
    'use strict';

    $.fn.dataTableExt.oApi.fnProcessingIndicator = function ( oSettings, onoff ) {
        if (typeof(onoff) === 'undefined') {
            onoff = true;
        }
        this.oApi._fnProcessingDisplay( oSettings, onoff );
    };

    var myItems = {
        init: function () {
            this.oTable();
        },

        handleAjaxError: function (xhr, textStatus) {
            if ( textStatus === 'timeout' ) {
                console.log( 'The server took too long to send the data.' );
            }
            else {
                console.log( 'An error occurred on the server. Please try again in a minute.' );
            }
            this.oTable.fnProcessingIndicator( false );
        },

        oTable: function() {
            return $('#example').dataTable({
                'bProcessing': true,
                'bJQueryUI': true,
                'bStateSave': false,
                'sPaginationType': 'full_numbers',
                'bServerSide': true,
                'sAjaxSource': 'fill/myitens',
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
                    $.ajax( {
                        'dataType': 'json',
                        'type': 'GET',
                        'url': sSource,
                        'data': aoData,
                        'success': fnCallback,
                        'timeout': 15000,
                        'error': this.handleAjaxError
                    } );
                }
            });
        }
    };

    return myItems;

});
