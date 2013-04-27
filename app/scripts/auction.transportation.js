/*global define */

define(['jquery', 'translate'], function ($, translate) {
    'use strict';

    var auctionTransportation;

    auctionTransportation = {
        init : function() {
            this.oTable();
            this.translateUI();
        },

        oTable : function() {
            return $('#mainTable7').dataTable({
                'sDom': '<"row"<"span6"l><"span6"f>r>t<"row"<"span6"i><"span6"p>>',
                'sPaginationType': 'bootstrap',
                'bProcessing': true,
                'bJQueryUI': true,
                'bStateSave': false,
                'bDestroy': true,
                'oSearch': { 'sSearch': '' },
                //'sPaginationType': 'full_numbers',
                'bServerSide': true,
                'sAjaxSource': 'fill/auction/bytransportation',
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
        },

        handleAjaxError : function( xhr, textStatus ) {
            if ( textStatus === 'timeout' ) {
                console.log( 'The server took too long to send the data.' );
            }
            else {
                console.log( 'An error occurred on the server. Please try again in a minute.' );
            }
            this.oTable.fnProcessingIndicator( false );
        },

        translateUI : function () {
            var prop;
            var patt;
            for (prop in translate) {
                patt = new RegExp(prop, 'g');
                $('#mainTable7').html($('#mainTable').html().replace(patt, translate[prop]));
            }
        }
    };

    return auctionTransportation;

});
