/*global define */

define(['jquery'], function ($) {
    'use strict';

    $(document).ready(function () {
        var oTable;
        var handleAjaxError;

        jQuery.fn.dataTableExt.oApi.fnProcessingIndicator = function ( oSettings, onoff ) {
            if ( typeof( onoff ) == 'undefined' ) {
                onoff = true;
            }
            this.oApi._fnProcessingDisplay( oSettings, onoff );
        };

        handleAjaxError = function( xhr, textStatus, error ) {
            if ( textStatus === 'timeout' ) {
                alert( 'The server took too long to send the data.' );
            }
            else {
                alert( 'An error occurred on the server. Please try again in a minute.' );
            }
            oTable.fnProcessingIndicator( false );
        }

        oTable = $('#example').dataTable({
            'bProcessing': true,
            'bJQueryUI': true,
            'bStateSave': false,
            'sPaginationType': 'full_numbers',
            'bServerSide': true,
            'sAjaxSource': 'fill/myitens',
            'oLanguage': {
              'sProcessing': jsIndex['sProcessing'],
              'sLengthMenu': jsIndex['sLengthMenu'],
              'sZeroRecords': jsIndex['sZeroRecords'],
              'sInfo': jsIndex['sInfo'],
              'sInfoEmpty': jsIndex['sInfoEmpty'],
              'sInfoFiltered': jsIndex['sInfoFiltered'],
              'sSearch': jsIndex['sSearch'],
              'sInfoPostFix': '',
              'sUrl': '',
              'oPaginate': {
                  'sFirst': jsIndex['sFirst'],
                  'sPrevious': jsIndex['sPrevious'],
                  'sNext': jsIndex['sNext'],
                  'sLast': jsIndex['sLast']
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
                    'error': handleAjaxError
                } );
            }
        });
    });
});