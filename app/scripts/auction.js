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
    'datatables'
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
        },

        bindEvent : function() {
            $('a[data-toggle="tab"]').on('shown', function (e) {
                var currentTab = e.target.href;
                currentTab = currentTab.split('#');
                currentTab = currentTab[1];

                switch (currentTab) {
                case 'blocks':
                    auctionBlocks.init();
                    break;
                case 'combat':
                    auctionCombat.init();
                    break;
                case 'decoration' :
                    auctionDecoration.init();
                    break;
                case 'food' :
                    auctionFood.init();
                    break;
                case 'materials' :
                    auctionMaterials.init();
                    break;
                case 'micellaneous' :
                    auctionMicellaneous.init();
                    break;
                case 'others' :
                    auctionOthers.init();
                    break;
                case 'redstone' :
                    auctionRedstone.init();
                    break;
                case 'tools' :
                    auctionTools.init();
                    break;
                case 'transportation' :
                    auctionTransportation.init();
                    break;
                }
            });
        },

    };

    return auction;

});
