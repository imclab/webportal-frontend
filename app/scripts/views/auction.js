/*global define */

define([
    'jquery',
    'views/user',
    'helpers/datatables.getdata',
    'helpers/datatables.config',
    'bootstrap'
], function (
    $,
    user,
    datatablesGetdata
) {
    'use strict';

    var auction;

    auction = {
        init : function() {
            this.bindEvent();
            this.box();
            user.init();
        },

        bindEvent : function() {
            var self = this;
            $('a[data-toggle="tab"]').on('shown', function (e) {
                var currentTab = e.target.href;
                currentTab = currentTab.split('#');
                currentTab = currentTab[1];

                datatablesGetdata.init({
                    ajaxSource : 'fill/auction/by' + currentTab,
                    tableId : '#' + currentTab +'Table'
                });
            });

            $('.js-buyItems').submit( function( e ) {
                e.preventDefault();
                self.buy(this);
            });

        },

        buy : function (form) {
            var ar = $(form).serializeArray();
            $.ajax({
                url: 'buy/item',
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
        box : function() {
            $.ajax({
                url: '/box/1'
            })
            .done(
                function (data) {
                    $('#box1').html(data);
                }
            )
            .fail(
                function (err) {
                    $('#box1').html(err);
                }
            );

            $.ajax({
                url: '/box/2'
            })
            .done(
                function (data) {
                    $('#box2').html(data);
                    $('#mailread').click(function  () {
                        $('div#mail').show('slow');
                    });
                    $('#mailclose').click(function () {
                        $('div#mail').hide('slow');
                    });
                }
            )
            .fail(
                function (err) {
                    $('#box2').html(err);
                }
            );
        }
    };

    return auction;

});
