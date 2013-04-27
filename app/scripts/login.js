/*global define */

define(['jquery', 'bootstrap'], function ($) {
    'use strict';

    var login;

    login = {
        init : function () {
            this.bindEvents();
        },

        bindEvents : function () {
            var that = this;
            $('#loginForm').submit( function( event ) {
                event.preventDefault();
                that.login(this);
            });
        },

        login : function (form) {
            $.ajax({
                type: 'get',
                url: '/web/login',
                data: $(form).serialize(),
                success: function (data) {
                    if (data === 'ok') {
                        window.location = '/index.html';
                    } else if (data === 'no') {
                        $('#alert').show();
                    } else {

                    }
                },
                error: function (error) {
                    console.log(error);
                },
                dataType: 'text'
            });
            return false;
        }
    };

    return login;

});
