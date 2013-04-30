/*global define */

define([
    'jquery',
    'translate',
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

    var myAuctions;

    myAuctions = {
        init : function () {
            this.bindEvents();
            datatablesGetdata.init({
                'tableId' : '#myAuctions',
                'ajaxSource' : 'fill/myauctions'
            });
            user.init();
        },

        bindEvents : function () {
            var self = this;
            $('#cancelAuctionForm').submit( function( e ) {
                e.preventDefault();
                self.cancelAuction(this);
            });
        },

        cancelAuction : function (form) {
            var ar = $(form).serializeArray();
            $.ajax({
                url: form.action,
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    $(form).hide();
                    $('#' + 'C' + ar[0].value).html(data);
                }
            )
            .fail(
                function (err) {
                    $(form).hide();
                    $('#' + 'C' + ar[0].value).html(err);
                }
            );

            return false;
        }
    };

    return myAuctions;

});
