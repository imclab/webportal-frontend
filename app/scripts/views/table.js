/* global define */

define(['jquery'], function ($) {
    'use strict';

    var table;

    table = {
        init : function() {
            this.bindEvents();
        },

        bindEvents : function () {
            var that = this;
            $('#loginForm').submit( function( e ) {
                e.preventDefault();
                that.login(this);
            });
        },

        buy : function (form) {
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
                function (error) {
                    console.log(error);
                }
            );

            return false;
        },

        del :  function (form) {
            var ar = $(form).serializeArray();
            $.ajax({
                url: form.action,
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
                function (error) {
                    console.log(error);
                }
            );

            return false;
        },

        adm : function (form) {
            $.ajax({
                url: form.action,
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    $('#resultado').html(data);
                }
            )
            .fail(
                function (error) {
                    $('#resultado').html(error);
                }
            );

            return false;
        },

        postauction :  function (form) {
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
                function (error) {
                    console.log(error);
                }
            );


            return false;
        },

        adminshop : function (form) {
            //var ar = $(form).serializeArray();
            $.ajax({
                url: form.action,
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
                function (error) {
                    console.log(error);
                }
            );

            return false;
        },

        mail : function (form) {
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
                function (error) {
                    $(form).hide();
                    $('#' + 'M' + ar[0].value).html(error);
                }
            );

            return false;
        },

        cancel : function (form) {
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
                function (error) {
                    $(form).hide();
                    $('#' + 'C' + ar[0].value).html(error);
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
                function (error) {
                    $('#box1').html(error);
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
                function (error) {
                    $('#box2').html(error);
                }
            );
        }

    };

    return table;

});