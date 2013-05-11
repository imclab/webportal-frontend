/*global define */

define([
    'jquery',
    'views/user',
    'helpers/datatables.getdata',
    'helpers/datatables.config'
], function (
    $,
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
            $('.js-cancelAuction').submit( function( e ) {
                e.preventDefault();
                self.cancelAuction(this);
            });
        },

        cancelAuction : function (form) {
            var ar = $(form).serializeArray();
            $.ajax({
                url: 'cancel/auction',
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
