/*global define */

define([
    'jquery',
    'translate',
    'auction.blocks',
    'auction.combat',
    'auction.decoration',
    'auction.food',
    'auction.materials',
    'auction.micellaneous',
    'auction.others',
    'auction.redstone',
    'auction.tools',
    'auction.transportation',
    'views/table',
    'datatables',
    'jqueryui'
], function (
    $,
    translate,
    auctionBlocks,
    auctionCombat,
    auctionDecoration,
    auctionFood,
    auctionMaterials,
    auctionMicellaneous,
    auctionOthers,
    auctionRedstone,
    auctionTools,
    auctionTransportation
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
            this.loadTabs();
        },

        bindEvent : function() {
            $('#tabs').on('tabsload', function(event) {
                var currentTab = event.toElement.text;

                switch (currentTab) {
                case 'Blocks':
                    auctionBlocks.init();
                    break;
                case 'Combat':
                    auctionCombat.init();
                    break;
                case 'Decoration' :
                    auctionDecoration.init();
                    break;
                case 'Food' :
                    auctionFood.init();
                    break;
                case 'Materials' :
                    auctionMaterials.init();
                    break;
                case 'Micellaneous' :
                    auctionMicellaneous.init();
                    break;
                case 'Others' :
                    auctionOthers.init();
                    break;
                case 'Redstone' :
                    auctionRedstone.init();
                    break;
                case 'Tools' :
                    auctionTools.init();
                    break;
                case 'Transportation' :
                    auctionTransportation.init();
                    break;
                }
            }).tabs();
        },

        loadTabs : function() {
            $(function () {
                $('#tabs').tabs({
                    load: function () {},
                    ajaxOptions: {
                        error: function (xhr, status, index, anchor) {
                            $(anchor.hash).html('Couldn&#39t load this tab.');
                        }
                    }
                });
            });
        }
    };

    return auction;

});
