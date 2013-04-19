/*global define */

define([
    'jquery',
    'auction.block',
    'auction.combat',
    'auction.decoration',
    'auction.food',
    'auction.materials',
    'auction.micellaneous',
    'auction.others',
    'auction.redstone',
    'auction.tools',
    'auction.transportation',
    'helper/info',
    'datatables',
    'jqueryui'
], function (
    $,
    auctionBlock,
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
            var tab;
            //tab = this.getTab();
            console.log(tab);

            this.loadTabs();

            switch (tab) {
            case 'block':
                auctionBlock.init();
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
        },

        getTab : function() {
            var tab = 'block';
            return tab;
        },

        loadTabs : function() {
            $(function () {
                $('#tabs').tabs({
                    load: function() { },
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
