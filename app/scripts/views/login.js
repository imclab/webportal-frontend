/*global define */

define(['jquery'], function ($) {
    'use strict';

    var login;

    login = {
        init : function () {
            this.bindEvents();
        },

        bindEvents : function () {
            var that = this;
            $('#loginForm').submit( function( e ) {
                e.preventDefault();
                that.login(this);
            });
        },

        login : function (form) {
            $.ajax({
                type: 'get',
                url: '/web/login',
                data: $(form).serialize(),
                dataType: 'text'
            })
            .done(
                function (data) {
                    if (data === 'ok') {
                        window.location = '/index.html';
                    } else if (data === 'no') {
                        $('#alert').show();
                    } else {
                        console.log(data);
                    }
                }
            )
            .fail(
                function (msg) {
                    console.log(msg);
                }
            );
            return false;
        }
    };

    return login;

});
