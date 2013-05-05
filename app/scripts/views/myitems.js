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

    var myItems;

    myItems = {
        init: function () {
            this.bindEvents();
            datatablesGetdata.init({
                'tableId' : '#myItems',
                'ajaxSource' : 'fill/myitens'
            });
            user.init();
        },

        bindEvents : function () {
            var self = this;
            $('.js-postAuction').submit( function( e ) {
                e.preventDefault();
                self.postAuction(this);
            });

            $('.js-mailItems').submit( function( e ) {
                e.preventDefault();
                self.mailItems(this);
            });
        },

        postAuction :  function (form) {
            var ar = $(form).serializeArray();
            $.ajax({
                url: form.action,
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    if (data === 'ok') {
                        $(form).hide();
                        $('#' + ar[1].value).html('Done');
                    } else if (data === 'no') {
                        $('#error').html('Invalid');
                    } else {
                        $(form).hide();
                        $('#' + ar[1].value).html(data);
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

        mailItems : function (form) {
            var ar = $(form).serializeArray();
            $.ajax({
                url: form.action,
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    $(form).hide();
                    $('#' + 'M' + ar[0].value).html(data);
                }
            )
            .fail(
                function (err) {
                    $(form).hide();
                    $('#' + 'M' + ar[0].value).html(err);
                }
            );

            return false;
        }
    };

    return myItems;

});
