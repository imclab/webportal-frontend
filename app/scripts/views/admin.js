/*global define */

define([
    'jquery',
    'views/user',
    'helpers/datatables.getdata',
    'helpers/datatables.config'
], function (
    $,
    translate,
    user,
    datatablesGetdata
) {
    'use strict';

    var admin;

    admin = {
        init : function () {
            this.bindEvents();
            datatablesGetdata.init({
                'tableId' : '#mainTable',
                'ajaxSource' : 'web/adminshoplist'
            });
            user.init();
        },

        bindEvents : function () {
            var self = this;
            $('#adminSearchForm').submit( function( e ) {
                e.preventDefault();
                self.adminSearch(this);
            });
            $('#adminShopForm').submit( function( e ) {
                e.preventDefault();
                self.adminShop(this);
            });
            $('#adminShopDeleteForm').submit( function( e ) {
                e.preventDefault();
                self.adminShopDelete(this);
            });
        },

        adminSearch : function (form) {
            $.ajax({
                url: '/admsearch',
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    $('#resultado').html(data);
                }
            )
            .fail(
                function (err) {
                    $('#resultado').html(err);
                }
            );

            return false;
        },

        adminShop : function (form) {
            //var ar = $(form).serializeArray();
            $.ajax({
                url: 'web/shop',
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    if (data === 'ok') {
                        $(form).hide();
                        $('#wshop').html('Auction Shop For This Item Create Sucess');
                    } else if (data === 'no') {
                        $('#error').html('Invalid');
                    } else {
                        $(form).hide();
                        $('#wshop').html(data);
                    }
                }
            )
            .fail(
                function (err) {
                    console.log(err);
                }
            );

            return false;
        },

        adminShopDelete :  function (form) {
            var ar = $(form).serializeArray();
            $.ajax({
                url: 'web/delete',
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    if (data === 'Deleted') {
                        $(form).hide();
                        $('#' + ar[0].value).html('Deleted');
                    } else if (data === 'no') {
                        $('#error').html('Invalid');
                    } else {
                        $(form).hide();
                        $('#' + ar[0].value).html(data);
                    }
                }
            )
            .fail(
                function (err) {
                    console.log(err);
                }
            );

            return false;
        }
    };

    return admin;

});
